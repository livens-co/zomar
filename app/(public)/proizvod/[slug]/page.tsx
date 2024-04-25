import "./style.scss";

import { FaAngleRight } from "react-icons/fa6";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ProductImages from "@/components/ProductImages";
import getProduct from "@/sanity/actions/get-product";
import { Product } from "@/types";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({
  params: { slug },
}) => {
  const product: Product | null = await getProduct(slug);

  if (!product) {
    return <div>Proizvod nije pronađen</div>;
  }

  console.log(product);

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

        {/* <h1>Bahrein</h1>
        
        <h3>Kolekcija</h3>
        <div className="collection">
          <h2>Porcelux</h2>
          <p>Excellence in polished and satin matte finish</p>
        </div> */}
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

          <div className="line"/>

          {/* DIMENZIJE */}
          <p>
            Dimenzije:{" "}
            <ul>
              {product?.formats.map((f) => (
                <li key={f._id}>{f.title} cm</li>
              ))}
            </ul>
          </p>

          {/* KONTAKT */}
        </div>
      </main>
      <div className="productDetails">
        {/* PRODUCT SPECIFICATIONS (DIMENSIONS, TECH SPEC, MATERIAL...) */}
        <h3>Karakteristike proizvoda</h3>
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
      <h3>Proizvodi iz kolekcije</h3>
    </div>
  );
};

export default ProductPage;
