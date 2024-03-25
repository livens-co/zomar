import { Category, ProductShop, Subcategory } from "@/types";
import "./style.scss";
import getProductsByCategory from "@/sanity/actions/get-products-by-category";
import getCategories from "@/sanity/actions/get-categories";
import getSubcategoriesByCategory from "@/sanity/actions/get-subcategories";
import Link from "next/link";

export const revalidate = 1;

interface ShopCategoryPageProps {
  params: {
    shopCategory: string;
  };
}

const ShopCategoryPage: React.FC<ShopCategoryPageProps> = async ({
  params,
}) => {
  const subcategories: Subcategory[] = await getSubcategoriesByCategory(
    params.shopCategory
  );
  // console.log("Subcategories:", subcategories);

  return (
    <>
      <div>potkategorije u kategoriji</div>
      <ul>
        {subcategories.map((sc) => (
          <Link key={sc._id} href={`/ponuda/${params.shopCategory}/${sc.slug}`}>
            {sc.title}
          </Link>
        ))}
      </ul>
    </>
  );
};

export default ShopCategoryPage;
