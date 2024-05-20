import { Category, Subcategory } from "@/types";
import "./style.scss";
import getSubcategoriesByCategoryShop from "@/sanity/actions/get-subcategories-shop";
import getCategoryBySlug from "@/sanity/actions/get-category";

import SubCategoryCard from "@/components/SubCategoryCard";

export const revalidate = 1;

interface ShopCategoryPageProps {
  params: {
    category: string;
  };
}

const ShopCategoryPage: React.FC<ShopCategoryPageProps> = async ({
  params,
}) => {
  const category: Category | null = await getCategoryBySlug(params.category);

  if (!category) {
    // Handle case where category is not found
    return <div>Kategorija nije pronađena</div>;
  }

  const subcategories: Subcategory[] = await getSubcategoriesByCategoryShop(
    params.category
  );

  const subcategoriesWithProd = subcategories.filter(
    (subcategory) => subcategory?.products.length > 0
  );

  return (
    <div className="shopCategoryPage">
      <div className="categoryPageTitle">{category?.title}</div>

      <div className="categoryGrid">
        {subcategoriesWithProd.map((subcategory) => (
          <SubCategoryCard
            subcategory={subcategory}
            subcategoryUrl={params.category}
            categoryUrl="ponuda"
            key={subcategory._id}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopCategoryPage;
