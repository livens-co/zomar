import Image from "next/image";
import "./style.scss";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import getCategories from "@/sanity/actions/get-categories";
import { Category } from "@/types";
import Link from "next/link";
import RecommendedProducts from "@/components/RecommendedProducts";

export const revalidate = 1;

const CategoryPage = async () => {
  const categories: Category[] = await getCategories();

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
          <div className="overlay"/>
        </div>
        <h1>Kategorije</h1>
      </div>

      {/* COLLECTIONS */}
      <div className="collectionsGrid">
        {categoriesWithProd.map((c) => (
          <Link
            className="collectionCard"
            href={`/kategorije/${c.slug}`}
            key={c._id}
          >
            <div className="image">
              <Image
                src={c.image}
                width={200}
                height={400}
                alt={c.title}
              />
            </div>
            <div className="title">
              <h2>{c.title}</h2>
            </div>
          </Link>
        ))}
      </div>
      {/* <div className="recommendedProducts">
        <h1>Preporučeni proizvodi</h1>
        <RecommendedProducts/>
      </div> */}
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

export default CategoryPage;
