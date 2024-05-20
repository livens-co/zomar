import { Category, Subcategory } from "@/types";
import Image from "next/image";
import Link from "next/link";
import './style.scss'

type Props = {
  category: Subcategory;
  subcategoryUrl: string;
  categoryUrl: string;
};

const CategoryCard = ({ category, subcategoryUrl, categoryUrl }: Props) => {

  return (
    <>
      <Link
        className="categoryCard"
        key={category._id}
        href={`/${categoryUrl}/${subcategoryUrl}/${category.slug}`}
      >
        <div className="image">
          <Image
            src={category.image}
            width={200}
            height={400}
            alt={category.title}
          />
        </div>
        <div className="title">
          <h2>{category.title}</h2>
        </div>
      </Link>
    </>
  );
};

export default CategoryCard;
