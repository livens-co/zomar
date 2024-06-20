import { createClient, groq } from "next-sanity";
import { Project } from "@/types";
import clientConfig from "../config/client-config";

export default function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" ] | order(_createdAt desc) {
      _id,
      title,
      'slug': slug.current,
      'image': image.asset->url,
    }
    `
  );
}
