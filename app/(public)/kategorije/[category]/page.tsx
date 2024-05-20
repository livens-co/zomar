import { Category, Subcategory } from "@/types";
import "./style.scss";
import getSubcategoriesByCategory from "@/sanity/actions/get-subcategories";
import Link from "next/link";
import getCategoryBySlug from "@/sanity/actions/get-category";
import Image from "next/image";
import SubCategoryCard from "@/components/SubCategoryCard";

export const revalidate = 1;

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  const category: Category | null = await getCategoryBySlug(params.category);

  if (!category) {
    // Handle case where category is not found
    return <div>Kategorija nije pronađena</div>;
  }

  const subcategories: Subcategory[] = await getSubcategoriesByCategory(
    params.category
  );

  const subcategoriesWithProd = subcategories.filter(
    (subcategory) => subcategory?.products.length > 0
  );

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
    </div>
  );
};

export default CategoryPage;
