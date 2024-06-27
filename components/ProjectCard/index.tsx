import { Project } from "@/types";
import "./style.scss";
import Link from "next/link";
import Image from "next/image";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <>
      <Link
        href={`/projekti/${project.slug}`}
        className="projectCard"
        key={project._id}
      >
        <div className="image">
          <Image
            src={project.image}
            width={200}
            height={400}
            alt={project.title}
          />
        </div>
        <div className="title">
          <p>{project.title}</p>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
