import "./style.scss";

import { FaAngleRight } from "react-icons/fa6";

import ProductImages from "@/components/ProductImages";
import getProduct from "@/sanity/actions/get-product";
import { Product } from "@/types";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import getProductsBySubcategory from "@/sanity/actions/get-products-by-subcategory";
import RecommendedProducts from "@/components/RecommendedProducts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductContact from "@/components/ProductContact";
import getProductsBySubcategoryShop from "@/sanity/actions/get-products-by-subcategory-shop";

export const revalidate = 1;

interface ProductPageProps {
  params: {
    slug: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({
  params: { slug },
}) => {
  const product: Product | null = await getProduct(slug);
  let recommendedProducts: Product[] = [];

  if (product) {
    // Determine the source for recommended products based on product category
    if (product.productCategory === "noPriceProduct") {
      recommendedProducts =
        (await getProductsBySubcategory(product.subcategories[0].slug)) ?? [];
    } else if (product.productCategory === "priceProduct") {
      recommendedProducts =
        (await getProductsBySubcategoryShop(product.subcategories[0].slug)) ??
        [];
    }

    // Filter out the current product from recommended products
    recommendedProducts = recommendedProducts
      .filter((recommendedProduct) => recommendedProduct._id !== product._id)
      .slice(0, 6);
  } else {
    return <div>Proizvod nije pronađen</div>;
  }

  const getPathLink = (productCategory: string | undefined): string => {
    if (productCategory === "priceProduct") {
      return "ponuda";
    } else if (productCategory === "noPriceProduct") {
      return "kategorije";
    }

    return "";
  };

  const pathLink = `${getPathLink(product.productCategory)}`;

  type TagKey = keyof typeof product.tags;

  const tags: { key: TagKey; label: string }[] = [
    { key: "mat", label: "Mat" },
    { key: "protuklizna", label: "Protuklizna" },
    { key: "zidna", label: "Zidna" },
    { key: "podna", label: "Podna" },
    { key: "retificirana", label: "Retificirana" },
    { key: "unutarnja", label: "Unutarnja" },
    { key: "vanjska", label: "Vanjska" },
    { key: "sjaj", label: "Sjaj" },
    { key: "satinado", label: "Satinado" },
    { key: "klasican", label: "Klasičan rez" },
    { key: "gres", label: "Gres" },
    { key: "sugar", label: "Sugar Effect" },
  ];

  return (
    <div className="productPage">
      <header>
        <div className="path">
          <Link href={`/${pathLink}/${product?.categories[0]?.slug}`}>
            {product?.categories[0]?.title}
          </Link>
          <FaAngleRight />
          <Link
            href={`/${getPathLink(product.productCategory)}/${
              product?.categories[0]?.slug
            }/${product?.subcategories[0]?.slug}`}
          >
            {product?.subcategories[0]?.title}
          </Link>
          <FaAngleRight /> <span>{product?.title}</span>
        </div>
      </header>
      <main>
        <div className="galleryColumn">
          <ProductImages data={product.images} />
        </div>

        <div className="sideColumn">
          <div className="brand">
            <p>{product?.brands?.[0]?.title || ""}</p>
          </div>
          <div className="title">
            <p>{product?.title}</p>
          </div>

          <PortableText value={product?.description} />

          <div className="line" />

          {product.price && (
            <div className="price">
              {product.salePrice ? (
                <div className="row">
                  <h3 className="regularPriceTitle">Cijena:</h3>
                  <p
                    className="regularPrice"
                    style={{ textDecoration: "line-through" }}
                  >
                    {product.price.toFixed(2)} €
                  </p>
                  <h3 className="salePriceTitle">Akcijska cijena:</h3>
                  <p className="salePrice">{product.salePrice.toFixed(2)} €</p>
                </div>
              ) : (
                <div className="row">
                  <h3 className="regularPriceTitle">Cijena:</h3>
                  <p className="regularPrice">{product.price.toFixed(2)} €</p>
                </div>
              )}
            </div>
          )}

          <ProductContact product={product} />
        </div>
      </main>
      <div className="productDetails">
        <div className="productDetailsInner">
          <h3>Detalji proizvoda</h3>

          <div className="productTabs">
            <Tabs defaultValue="description" className="tabsSection">
              <TabsList className="tabList align-middle">
                <TabsTrigger value="description" className="tabTitle">
                  Karakteristike
                </TabsTrigger>
                <TabsTrigger value="size" className="tabTitle">
                  Dimenzije
                </TabsTrigger>
                <TabsTrigger value="colors" className="tabTitle">
                  Boje
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="tabContent">
                <div className="productDetailsGrid">
                  {tags.map(({ key, label }) => (
                    <div className="tag" key={key}>
                      <p>
                        {label}:{" "}
                        {product.tags?.[key] ? (
                          <span>da</span>
                        ) : (
                          <span>ne</span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="size" className="tabContent">
                <ul>
                  {product?.formats?.map((f) => (
                    <li key={f._id}>{f.title} cm </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="colors" className="tabContent">
                {product.colorList && (
                  <>
                    <span>Dostupne boje:</span> <p>{product.colorList}</p>
                  </>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      {recommendedProducts.length > 0 && (
        <RecommendedProducts recommendedProducts={recommendedProducts} />
      )}
    </div>
  );
};

export default ProductPage;
