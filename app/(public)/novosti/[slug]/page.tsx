import { Article } from "@/types";
import "./style.scss";
import getArticle from "@/sanity/actions/get-article";
import getArticles from "@/sanity/actions/get-articles";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponent/RichTextComponents";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";

export const revalidate = 1;

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

const ArticlePage: React.FC<ArticlePageProps> = async ({
  params: { slug },
}) => {
  const article: Article | null = await getArticle(slug);
  let recommendedArticles: Article[] = [];

  if (article) {
    recommendedArticles =
      (await getArticles()) ?? [];

    // Filter out the current article from recommended articles
    recommendedArticles = recommendedArticles.filter(
      (recommendedArticle) => recommendedArticle._id !== article._id
    ).slice(0,3);
  } else {
    return <div>Članak nije pronađen</div>;
  }

  if (!article) {
    return <div>Članak nije pronađen</div>;
  }
  
  return (
    <div className="articlePage">
      <div className="headerImage">
        <Image
          priority
          src={article.image}
          alt={article.title}
          height={400}
          width={600}
        />
      </div>
      <div className="title">
        <h1>{article.title}</h1>
      </div>
      <article>
        <PortableText value={article.body} components={RichTextComponents} />
      </article>
      
        <Link href={'/novosti'} className="moreArticles">Više članaka</Link>
    
      <div className="recommendedArticles">
        <div className="title">
          <h2>Možda će vas zanimati</h2>
        </div>
        <div className="articlesList">
          {recommendedArticles.map((article) => (
            <ArticleCard article={article} key={article._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
