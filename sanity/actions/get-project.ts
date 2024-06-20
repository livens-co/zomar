import { createClient, groq } from "next-sanity";
import { Project } from "@/types";
import clientConfig from "../config/client-config";

export default async function getProject(
  slug: string
): Promise<Project | null> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      'slug': slug.current,
      description,
      'image': image.asset->url,
      'images': images[].asset->url
    }
    `,
    { slug }
  );
}
