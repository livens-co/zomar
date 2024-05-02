import { Article } from "@/types";
import "./style.scss";
import getArticles from "@/sanity/actions/get-articles";
import Link from "next/link";
import PaginationControls from "@/components/PaginationControls";
import Image from "next/image";

export const revalidate = 1;

interface NewsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const NewsPage: React.FC<NewsPageProps> = async ({ searchParams }) => {
  const articles: Article[] = await getArticles();

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "14";

  const start = (Number(page) - 1) * Number(per_page); 
  const end = start + Number(per_page);

  const entries = articles.slice(start, end);

  return (
    <div className="newsPage">
      <div className="header">
        <div className="image">
          <Image
            src="/test/bahrein1.jpeg"
            width={600}
            height={400}
            alt="Novosti"
          />
          <div className="overlay"/>
        </div>
        <h1>Novosti</h1>
      </div>
      <div className="articleGrid">
        {entries?.map((article) => (
          <Link href={`/novosti/${article.slug}`} key={article._id}>
            <h1>{article.title}</h1>
          </Link>
        ))}
      </div>
      <div className="pagination">
        <PaginationControls
          hasNextPage={end < (articles?.length ?? 0)}
          hasPrevPage={start > 0}
          productNum={articles?.length ?? 0}
          subcategory={''}
          category={''}
          mainRoute="novosti"
        />
      </div>
    </div>
  );
};

export default NewsPage;
