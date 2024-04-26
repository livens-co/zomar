// 'use client'

import { Product, Subcategory } from "@/types";
import "./style.scss";
import getProductsBySubcategory from "@/sanity/actions/get-products-by-subcategory";
import Link from "next/link";
import Image from "next/image";
import getSubategoryBySlug from "@/sanity/actions/get-subcategory";
import ProductFilter from "@/components/ProductFilter";
import PaginationControls from "@/components/PaginationControls";


export const revalidate = 1;

interface SubcategoryPageProps {
  params: {
    subcategory: string;
    category: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

const SubcategoryPage: React.FC<SubcategoryPageProps> =  async ({
  params,
  searchParams,
}) => {
 
  
  const subcategory: Subcategory | null =  await getSubategoryBySlug(
    params.subcategory
  );

  if (!subcategory) {
    // Handle case where category is not found
    return <div>Potkategorija nije pronađena</div>;
  }

  

  const products: Product[] | null =  await getProductsBySubcategory(
    params.subcategory,
    {
      selectedTags: [],
    }
  );

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "12";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = products?.slice(start, end);

 
  

  return (
    <div className="subcategoryPage">
      <div className="subcategoryPageTitle">{subcategory?.title}</div>
      {/* FILTERS */}

      {/* <ProductFilter onTagsChange={onTagsChange}/> */}
      <div className="productsGrid">
        {entries?.map((product) => (
          <Link
            key={product.slug}
            href={`/proizvod/${product.slug}`}
            className="productCard"
          >
            <div className="image">
              <Image
                src={product.images[0]?.toString()}
                width={200}
                height={400}
                alt="Bahrein"
              />
            </div>
            <div className="title">
              <h2>{product.title}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div>
        {/* <PaginationControls
          hasNextPage={end < products?.length}
          hasPrevPage={start > 0}
          productNum={products?.length}
        /> */}
        <PaginationControls
          hasNextPage={end < (products?.length ?? 0)}
          hasPrevPage={start > 0}
          productNum={products?.length ?? 0}
          subcategory={params.subcategory}
          category={params.category}
        />
      </div>
    </div>
  );
};

export default SubcategoryPage;
