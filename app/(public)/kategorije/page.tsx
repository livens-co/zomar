import Image from "next/image";
import "./style.scss";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import getCategories from "@/sanity/actions/get-categories";
import { Category, Product } from "@/types";
import Link from "next/link";
import RecommendedProducts from "@/components/RecommendedProducts";
import CategoryCard from "@/components/CategoryCard";
import getProductsBySubcategory from "@/sanity/actions/get-products-by-subcategory";

export const revalidate = 1;

const CategoryPage = async () => {
  const categories: Category[] = await getCategories();
  const products: Product[] | null = await getProductsBySubcategory("kamen");

  // If products is null, initialize it as an empty array
  const recommendedProducts = (products || []).slice(0, 6);

  const categoriesWithProd = categories.filter(
    (category) => category?.products.length > 0
  );

  return (
    <div className="categoriesPage">
      <div className="header">
        <div className="image">
          <Image
            src="/test/bahrein1.jpeg"
            width={600}
            height={400}
            alt="Bahrein"
          />
          <div className="overlay" />
        </div>
        <h1>Kategorije</h1>
      </div>

      <div className="description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          suscipit quas rem nobis id nesciunt eaque culpa est nemo, praesentium
          qui quam perspiciatis obcaecati iusto vitae voluptatem animi ratione
          soluta.
        </p>
      </div>
      {/* COLLECTIONS */}
      <div className="collectionsGrid">
        {categoriesWithProd.map((category) => (
          <CategoryCard
            category={category}
            url="kategorije"
            key={category._id}
          />
        ))}
      </div>

      <RecommendedProducts recommendedProducts={recommendedProducts} />
    </div>
  );
};

export default CategoryPage;
