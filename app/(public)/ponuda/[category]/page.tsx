import { Category, Subcategory } from "@/types";
import "./style.scss";
import Link from "next/link";
import getSubcategoriesByCategoryShop from "@/sanity/actions/get-subcategories-shop";
import getCategoryBySlug from "@/sanity/actions/get-category";
import Image from "next/image";

export const revalidate = 1;

interface ShopCategoryPageProps {
  params: {
    category: string;
  };
}

const ShopCategoryPage: React.FC<ShopCategoryPageProps> = async ({
  params,
}) => {
  const category: Category | null = await getCategoryBySlug(
    params.category
  );

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
        {subcategoriesWithProd.map((sc) => (
          <Link
            className="categoryCard"
            key={sc._id}
            href={`/ponuda/${params.category}/${sc.slug}`}
          >
            <div className="image">
              <Image
                src="/test/bahrein1.jpeg"
                width={200}
                height={400}
                alt="Bahrein"
              />
            </div>
            <div className="title">
              <h2>{sc.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopCategoryPage;
