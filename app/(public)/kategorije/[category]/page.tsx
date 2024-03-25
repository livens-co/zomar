import { Subcategory } from "@/types";
import "./style.scss";
import getSubcategoriesByCategory from "@/sanity/actions/get-subcategories";
import Link from "next/link";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  const subcategories: Subcategory[] = await getSubcategoriesByCategory(
    params.category
  );

  const subcategoriesWithProd = subcategories.filter(
    (subcategory) => subcategory?.products.length > 0
  );

  console.log(subcategoriesWithProd)

  return (
<>
    <div>CategoryPage Single</div>
    <ul>
      {subcategoriesWithProd.map((sc) => (
        <Link key={sc._id} href={`/kategorije/${params.category}/${sc.slug}`}>
          {sc.title}
        </Link>
      ))}
    </ul>
</>
  )
  
};

export default CategoryPage;
