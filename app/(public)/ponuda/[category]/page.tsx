import { Category, Product, Subcategory } from "@/types";
import "./style.scss";
import getSubcategoriesByCategoryShop from "@/sanity/actions/get-subcategories-shop";
import getCategoryBySlug from "@/sanity/actions/get-category";

import SubCategoryCard from "@/components/SubCategoryCard";
import Image from "next/image";
import RecommendedProducts from "@/components/RecommendedProducts";
import getProductsBySubcategoryShop from "@/sanity/actions/get-products-by-subcategory-shop";

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
  const products: Product[] | null = await getProductsBySubcategoryShop("mramor")

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

  // If products is null, initialize it as an empty array
  const recommendedProducts = (products || []).slice(0, 6);

  return (
    <div className="shopCategoryPage">
      <div className="header">
        <div className="image">
          <Image
            src={category.image}
            width={600}
            height={400}
            alt={category.title}
          />
          <div className="overlay" />
        </div>
        <h1>{category?.title}</h1>
      </div>

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

      <RecommendedProducts recommendedProducts={recommendedProducts}/>
    </div>
  );
};

export default ShopCategoryPage;
