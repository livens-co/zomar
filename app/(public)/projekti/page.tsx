import { Project } from "@/types";
import "./style.scss";

import Link from "next/link";
import PaginationControls from "@/components/PaginationControls";
import Image from "next/image";
import getProjects from "@/sanity/actions/get-projects";

// import ArticleCard from "@/components/ArticleCard";

export const revalidate = 1;

interface ProjectsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const ProjectsPage: React.FC<ProjectsPageProps> = async ({
  searchParams,
}) => {
  const projects: Project[] = await getProjects();

  return (
    <div className="projectsPage">
      <div className="header">
        <div className="image">
          <Image
            src="/test/bahrein1.jpeg"
            width={600}
            height={400}
            alt="Novosti"
          />
          <div className="overlay" />
        </div>
        <h1>Projekti</h1>
      </div>
      <div className="articleGrid">
        {/* {entries?.map((article) => (
          <ArticleCard article={article} key={article._id}/>
        ))} */}
      </div>
    </div>
  );
};

export default ProjectsPage;
