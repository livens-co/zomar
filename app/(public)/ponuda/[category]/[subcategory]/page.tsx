import { Product, Subcategory } from "@/types";
import "./style.scss";
import Link from "next/link";
import getProductsBySubcategoryShop from "@/sanity/actions/get-products-by-subcategory-shop";
import getSubcategoryBySlug from "@/sanity/actions/get-subcategory";
import PaginationControls from "@/components/PaginationControls";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { PortableText } from "@portabletext/react";

export const revalidate = 1;

interface ShopSubcategoryPageProps {
  params: {
    subcategory: string;
    category: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

const ShopSubcategoryPage: React.FC<ShopSubcategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const subcategory: Subcategory | null = await getSubcategoryBySlug(
    params.subcategory
  );
  const products: Product[] | null = await getProductsBySubcategoryShop(
    params.subcategory
  );

  const page = parseInt((searchParams["page"] as string) ?? "1", 10);
  const per_page = parseInt((searchParams["per_page"] as string) ?? "12", 10);
  const start = (page - 1) * per_page;
  const end = start + per_page;

  const entries = products?.slice(start, end);

  const productsNum = products?.length;

  return (
    <div className="shopSubcategoryPage">
      <div className="header">
        <div className="image">
          <Image
            priority
            src={subcategory?.image || ""}
            width={600}
            height={400}
            alt={subcategory?.title || ""}
          />
          <div className="overlay" />
        </div>
        <h1>{subcategory?.title}</h1>
      </div>

      {/* <div className="subcategoryDescription">
        <PortableText value={subcategory?.description || []} />
      </div> */}

      <div className="productsGrid">
        {entries?.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
      <div>
        <PaginationControls
          hasNextPage={end < (products?.length ?? 0)}
          hasPrevPage={start > 0}
          productNum={products?.length ?? 0}
          subcategory={params.subcategory}
          category={params.category}
          mainRoute="ponuda"
        />
      </div>
    </div>
  );
};

export default ShopSubcategoryPage;
