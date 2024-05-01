
import "./style.scss";
import { Category, Product } from "@/types";
import Link from "next/link";
import getCategoriesShop from "@/sanity/actions/get-categories-shop";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export const revalidate = 1;

const ShopPage = async () => {
  const categories: Category[] = await getCategoriesShop();

  const categoriesWithProd = categories.filter(
    (category) => category?.products.length > 0
  );

  return (
    <div className="shopPage">
      <div className="header">
        <h1>Ponuda</h1>
      </div>
      
      {/* COLLECTIONS */}
      <div className="collectionsGrid">
        {categoriesWithProd.map((c) => (
          <Link
            className="collectionCard"
            href={`/ponuda/${c.slug}`}
            key={c._id}
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
              <h2>{c.title}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination">
        <button className="prevBtn">
          <FaArrowLeft />
        </button>
        <div className="pages">1 / 7</div>
        <button className="nextBtn">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ShopPage;
