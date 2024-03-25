import { createClient, groq } from "next-sanity";
import { Category } from "@/types";
import clientConfig from "../config/client-config";

export default function getCategories(): Promise<Category[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "category"] | order(_createdAt desc) {
    _id,
    title,
    'slug': slug.current,
    'products': *[_type == "products" && references(^._id) && ( productCategory == "noPriceProduct")] {
        _id,
      title,
      
      
      },
    'subcategories': subcategories[]->{
      _id,
      title,
      slug
      
    }
  }`
  );
}
