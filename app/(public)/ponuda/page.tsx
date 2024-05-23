import "./style.scss";
import { Category, Product } from "@/types";
import Link from "next/link";
import getCategoriesShop from "@/sanity/actions/get-categories-shop";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import CategoryCard from "@/components/CategoryCard";

export const revalidate = 1;

const ShopPage = async () => {
  const categories: Category[] = await getCategoriesShop();

  const categoriesWithProd = categories.filter(
    (category) => category?.products.length > 0
  );

  return (
    <div className="shopPage">
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
        <h1>Ponuda</h1>
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
        
          <CategoryCard category={category} url="ponuda" key={category._id} />
        ))}
      </div>
      {/* <div className="pagination">
        <button className="prevBtn">
          <FaArrowLeft />
        </button>
        <div className="pages">1 / 7</div>
        <button className="nextBtn">
          <FaArrowRight />
        </button>
      </div> */}
    </div>
  );
};

export default ShopPage;
