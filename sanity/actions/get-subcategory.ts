import { createClient, groq } from "next-sanity";
import { Subcategory } from "@/types";
import clientConfig from "../config/client-config";

export default function getSubcategoryBySlug(
  slug: string
): Promise<Subcategory | null> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "subcategory" && slug.current == $slug][0] {
    _id,
    title,
    'slug': slug.current,
    description,
    'images': images[].asset->url,
  }`,
    { slug }
  );
}
