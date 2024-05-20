import { Category, Subcategory } from "@/types";
import Image from "next/image";
import Link from "next/link";
import './style.scss'

type Props = {
  subcategory: Subcategory;
  subcategoryUrl: string;
  categoryUrl: string;
};

const SubCategoryCard = ({ subcategory, subcategoryUrl, categoryUrl }: Props) => {

  return (
    <>
      <Link
        className="subCategoryCard"
        key={subcategory?._id}
        href={`/${categoryUrl}/${subcategoryUrl}/${subcategory?.slug}`}
      >
        <div className="image">
          <Image
            src={subcategory?.image}
            width={200}
            height={400}
            alt={subcategory?.title}
          />
        </div>
        <div className="title">
          <h2>{subcategory?.title}</h2>
        </div>
      </Link>
    </>
  );
};

export default SubCategoryCard;
