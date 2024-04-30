import "./style.scss";

import { FaAngleRight } from "react-icons/fa6";

import ProductImages from "@/components/ProductImages";
import getProduct from "@/sanity/actions/get-product";
import { Product } from "@/types";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import getProductsBySubcategory from "@/sanity/actions/get-products-by-subcategory";
import RecommendedProducts from "@/components/RecommendedProducts";

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
    recommendedProducts =
      (await getProductsBySubcategory(product.subcategories[0].slug)) ?? [];

    // Filter out the current product from recommended products
    recommendedProducts = recommendedProducts.filter(
      (recommendedProduct) => recommendedProduct._id !== product._id
    );
  } else {
    return <div>Proizvod nije pronađen</div>;
  }

  return (
    <div className="collectionProductPage">
      <header>
        {/* PATH */}
        <div className="path">
          <Link href={`/kategorije/${product?.categories[0]?.slug}`}>
            {product?.categories[0]?.title}
          </Link>
          <FaAngleRight />
          <Link
            href={`/kategorije/${product?.categories[0]?.slug}/${product?.subcategories[0]?.slug}`}
          >
            {product?.subcategories[0]?.title}
          </Link>
          <FaAngleRight /> <span>{product?.title}</span>
        </div>
      </header>
      <main>
        {/* IMAGE GALLERY */}
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

          {/* OPIS */}
          <PortableText value={product?.description} />

          <div className="line" />

          {/* DIMENZIJE */}
          <div>
            Dimenzije:{" "}
            <ul>
              {product?.formats?.map((f) => (
                <li key={f._id}>{f.title} cm</li>
              ))}
            </ul>
          </div>

          {/* BOJE */}
          {product.colorList && <p>Boje: {product.colorList}</p>}
        </div>
      </main>
      <div className="productDetails">
        <h3>Karakteristike proizvoda</h3>
        <div className="productDetailsGrid">
          {/* MAT */}
          <div className="tag">
            <p>Mat: {product.tags?.mat ? <span>da</span> : <span>ne</span>}</p>
          </div>

          {/* PROTUKLIZNA */}
          <div className="tag">
            <p>
              Protuklizna:{" "}
              {product.tags?.protuklizna ? <span>da</span> : <span>ne</span>}
            </p>
          </div>

          {/* ZIDNA */}
          <div className="tag">
            <p>
              Zidna: {product.tags?.zidna ? <span>da</span> : <span>ne</span>}
            </p>
          </div>

          {/* PODNA */}
          <div className="tag">
            <p>
              Podna: {product.tags?.podna ? <span>da</span> : <span>ne</span>}
            </p>
          </div>

          {/* RETIFICIRANA */}
          <div className="tag">
            <p>
              Retificirana:{" "}
              {product.tags?.retificirana ? <span>da</span> : <span>ne</span>}
            </p>
          </div>

          {/* UNUTARNJA */}
          <div className="tag">
            <p>
              Unutarnja:{" "}
              {product.tags?.unutarnja ? <span>da</span> : <span>ne</span>}
            </p>
          </div>

          {/* VANJSKA */}
          <div className="tag">
            <p>
              Vanjska:{" "}
              {product.tags?.vanjska ? <span>da</span> : <span>ne</span>}
            </p>
          </div>

          {/* SJAJ */}
          <div className="tag">
            <p>
              Sjaj: {product.tags?.sjaj ? <span>da</span> : <span>ne</span>}
            </p>
          </div>

          {/* SATINADO */}
          <div className="tag">
            <p>
              Satinado:{" "}
              {product.tags?.satinado ? <span>da</span> : <span>ne</span>}
            </p>
          </div>

          {/* KLASICAN REZ */}
          <div className="tag">
            <p>
              Klasičan rez:{" "}
              {product.tags?.klasican ? <span>da</span> : <span>ne</span>}
            </p>
          </div>

          {/* GRES */}
          <div className="tag">
            <p>
              Gres: {product.tags?.gres ? <span>da</span> : <span>ne</span>}
            </p>
          </div>

          {/* SUGAR EFFECT */}
          <div className="tag">
            <p>
              Suggar effect:{" "}
              {product.tags?.sugar ? <span>da</span> : <span>ne</span>}
            </p>
          </div>
        </div>
        {/* KLASA */}

        {/* <div className="productTabs">
          <Tabs defaultValue="description" className="w-[600px] align-middle">
            <TabsList className="tabList align-middle">
              <TabsTrigger value="description" className="tabTitle">
                Opis proizvoda
              </TabsTrigger>
              <TabsTrigger value="size" className="tabTitle">
                Dimenzije
              </TabsTrigger>
              <TabsTrigger value="details" className="tabTitle">
                Tehnički podaci
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="tabContent">
              <PortableText value={product?.description} />
            </TabsContent>
            <TabsContent value="size" className="tabContent">
              <ul>
                {product?.formats.map((f) => (
                  <li key={f._id}>{f.title} cm</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="details" className="tabContent">
              Tehnički podaci
            </TabsContent>
          </Tabs>
        </div> */}
      </div>

      {/* RECOMMENDED PRODUCTS FORM COLLECTION */}

      <RecommendedProducts recommendedProducts={recommendedProducts} />
    </div>
  );
};

export default ProductPage;
