import { Category, Product, Subcategory } from "@/types";
import "./style.scss";
import getSubcategoriesByCategory from "@/sanity/actions/get-subcategories";
import getCategoryBySlug from "@/sanity/actions/get-category";
import Image from "next/image";
import SubCategoryCard from "@/components/SubCategoryCard";
import RecommendedProducts from "@/components/RecommendedProducts";
import getProductsBySubcategory from "@/sanity/actions/get-products-by-subcategory";

export const revalidate = 1;

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  const category: Category | null = await getCategoryBySlug(params.category);
  const products: Product[] | null = await getProductsBySubcategory("mramor");
  const subcategories: Subcategory[] = await getSubcategoriesByCategory(
    params.category
  );

  if (!category) {
    // Handle case where category is not found
    return <div>Kategorija nije pronađena</div>;
  }

  const subcategoriesWithProd = subcategories.filter(
    (subcategory) => subcategory?.products.length > 0
  );

  // If products is null, initialize it as an empty array
  const recommendedProducts = (products || []).slice(0, 6);

  return (
    <div className="categoryPage">
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
            categoryUrl="kategorije"
            key={subcategory._id}
          />
        ))}
      </div>
      <RecommendedProducts recommendedProducts={recommendedProducts} />
    </div>
  );
};

export default CategoryPage;
