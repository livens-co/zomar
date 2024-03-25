import { Category, ProductShop, Subcategory } from "@/types";
import "./style.scss";
import getProductsByCategory from "@/sanity/actions/get-products-by-category";
import getCategories from "@/sanity/actions/get-categories";
import getSubcategoriesByCategory from "@/sanity/actions/get-subcategories";
import Link from "next/link";
import getSubcategoriesByCategoryShop from "@/sanity/actions/get-subcategories-shop";

export const revalidate = 1;

interface ShopCategoryPageProps {
  params: {
    shopCategory: string;
  };
}

const ShopCategoryPage: React.FC<ShopCategoryPageProps> = async ({
  params,
}) => {
  const subcategories: Subcategory[] = await getSubcategoriesByCategoryShop(
    params.shopCategory
  );

  const subcategoriesWithProd = subcategories.filter(
    (subcategory) => subcategory?.products.length > 0
  );

  return (
    <>
      <div>potkategorije u kategoriji</div>
      <ul>
        {subcategoriesWithProd.map((sc) => (
          <Link key={sc._id} href={`/ponuda/${params.shopCategory}/${sc.slug}`}>
            {sc.title}
          </Link>
        ))}
      </ul>
    </>
  );
};

export default ShopCategoryPage;
