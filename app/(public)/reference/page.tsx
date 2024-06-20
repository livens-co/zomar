import { Reference } from "@/types";
import "./style.scss";

import Link from "next/link";
import PaginationControls from "@/components/PaginationControls";
import Image from "next/image";
import getReferences from "@/sanity/actions/get-references";
// import ArticleCard from "@/components/ArticleCard";

export const revalidate = 1;

interface ReferencesPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const ReferencesPage: React.FC<ReferencesPageProps> = async ({ searchParams }) => {
  const references: Reference[] = await getReferences();



  return (
    <div className="referencesPage">
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
        <h1>Reference</h1>
      </div>
      <div className="articleGrid">
        {/* {entries?.map((article) => (
          <ArticleCard article={article} key={article._id}/>
        ))} */}
      </div>
    </div>
  );
};

export default ReferencesPage;
