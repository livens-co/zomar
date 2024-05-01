import { Article } from "@/types";
import "./style.scss";
import getArticle from "@/sanity/actions/get-article";
import getArticles from "@/sanity/actions/get-articles";

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
  const articles: Article[] = await getArticles();

  if (!article) {
    return <div>Članak nije pronađen</div>;
  }

  return <div className="articlePage">{article.title}</div>;
};

export default ArticlePage;
