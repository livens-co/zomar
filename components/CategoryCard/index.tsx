import Link from "next/link";
import "./style.scss";
import Image from "next/image";
import { Category } from "@/types";

type Props = {
  category: Category;
  url: string;
};

const CategoryCard = ({ category, url }: Props) => {
  return (
    <>
      <Link
        className="categoryCard"
        href={`/${url}/${category.slug}`}
        key={category._id}
      >
        <div className="image">
          {category.image && (
            <Image
              src={category.image}
              width={200}
              height={400}
              alt={category.title || ""}
            />
          )}
        </div>
        <div className="title">
          <h2>{category.title}</h2>
        </div>
      </Link>
    </>
  );
};

export default CategoryCard;
