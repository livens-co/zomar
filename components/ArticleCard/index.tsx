import { Article } from "@/types";
import "./style.scss";
import Link from "next/link";
import Image from "next/image";

type Props = {
  article: Article;
};

const ArticleCard = ({ article }: Props) => {
  return (
    <>
      <Link
        href={`/novosti/${article.slug}`}
        className="articleCard"
        key={article._id}
      >
        <div className="image">
          <Image
            src={article.image}
            width={200}
            height={400}
            alt={article.title}
          />
        </div>
        <div className="title">
          <p>{article.title}</p>
        </div>
      </Link>
    </>
  );
};

export default ArticleCard;
