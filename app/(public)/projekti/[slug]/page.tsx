import { Project } from "@/types";
import "./style.scss";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponent/RichTextComponents";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";
import getProject from "@/sanity/actions/get-project";
import getProjects from "@/sanity/actions/get-projects";


export const revalidate = 1;

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const ProjectPage: React.FC<ProjectPageProps> = async ({
  params: { slug },
}) => {
  const project: Project | null = await getProject(slug);
  let recommendedProjects: Project[] = [];

  if (project) {
    recommendedProjects = (await getProjects()) ?? [];

    // Filter out the current reference from recommended references
    recommendedProjects = recommendedProjects
      .filter(
        (recommendedReference) => recommendedReference._id !== project._id
      )
      .slice(0, 3);
  } else {
    return <div>Projekt nije pronađen</div>;
  }

  if (!project) {
    return <div>Projekt nije pronađen</div>;
  }

  console.log(project)
  return (
    <div className="projectPage">
      project page
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

export default ProjectPage;
