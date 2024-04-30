import { createClient, groq } from "next-sanity";
import { Article } from "@/types";
import clientConfig from "../config/client-config";

export default function getArticles(): Promise<Article[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "article" ] | order(_createdAt desc) {
      _id,
      title,
      'slug': slug.current,
      'image': image.asset->url,
      description
    }
    `
  );
}
