import { Product } from "@/types";
import "./style.scss";
import getProductsBySubcategory from "@/sanity/actions/get-products-by-subcategory";
import Link from "next/link";

export const revalidate = 1;

interface SubcategoryPageProps {
  params: {
    subcategory: string;
  };
}

const SubcategoryPage: React.FC<SubcategoryPageProps> = async ({
  params,
}) => {
  const products: Product[] = await getProductsBySubcategory(
    params.subcategory
  );

  console.log(params.subcategory)

  return (
    <>
      <div>SubcategoryPage</div>
      <ul>
        {products.map((product) => (
          <Link key={product.slug} href={`/proizvod/${product.slug}`}>
            {product.title}
          </Link>
        ))}
      </ul>
    </>
  );
};

export default SubcategoryPage;
