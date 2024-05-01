import { createClient, groq } from "next-sanity";
import { Subcategory } from "@/types";
import clientConfig from "../config/client-config";

export default async function getSubcategoryBySlug(
  subcategorySlug: string
): Promise<Subcategory | null> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "subcategory" && slug.current == $subcategorySlug][0] {
    _id,
    title,
    'slug': slug.current,
    description,
    'images': images[].asset->url,
  }`,
    { subcategorySlug }
  );
}
