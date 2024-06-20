import { Reference } from "@/types";
import "./style.scss";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponent/RichTextComponents";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";
import getReference from "@/sanity/actions/get-reference";
import getReferences from "@/sanity/actions/get-references";

export const revalidate = 1;

interface ReferencePageProps {
  params: {
    slug: string;
  };
}

const ReferencePage: React.FC<ReferencePageProps> = async ({
  params: { slug },
}) => {
  const reference: Reference | null = await getReference(slug)
  let recommendedReferences: Reference[] = [];

  if (reference) {
    recommendedReferences =
      (await getReferences()) ?? [];

    // Filter out the current reference from recommended references
    recommendedReferences = recommendedReferences.filter(
      (recommendedReference) => recommendedReference._id !== reference._id
    ).slice(0,3);
  } else {
    return <div>Referenca nije pronađena</div>;
  }

  if (!reference) {
    return <div>Referenca nije pronađena</div>;
  }
  
  return (
    <div className="referencePage">
      reference page
      {/* <div className="headerImage">
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
      </div> */}
    </div>
  );
};

export default ReferencePage;
