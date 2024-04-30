import { Product } from "@/types";
import "./style.scss";
import getProductsBySubcategory from "@/sanity/actions/get-products-by-subcategory";
import Link from "next/link";
import getProductsBySubcategoryShop from "@/sanity/actions/get-products-by-subcategory-shop";

export const revalidate = 1;

interface ShopSubcategoryPageProps {
  params: {
    shopSubcategory: string; 
  };
}

const ShopSubcategoryPage: React.FC<ShopSubcategoryPageProps> = async ({
  params,
}) => {
  const products: Product[] | null = await getProductsBySubcategoryShop(
    params.shopSubcategory
  );

  return (
    <>
      <div>ShopSubcategoryPage</div>
      <ul>
        {products?.map((product) => (
          <Link key={product.slug} href={`/proizvod/${product.slug}`}>
            {product.title}
          </Link>
        ))}
      </ul>
    </>
  );
};

export default ShopSubcategoryPage;
