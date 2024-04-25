import { createClient, groq } from "next-sanity";
import { Category } from "@/types";
import clientConfig from "../config/client-config";

export default function getCategoryBySlug(slug: string): Promise<Category | null> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "category" && slug.current == $slug][0] {
    _id,
    title,
  }`,
    { slug }
  )
}
