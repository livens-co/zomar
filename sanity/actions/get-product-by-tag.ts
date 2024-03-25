import { createClient, groq } from "next-sanity";
import { Product } from "@/types";
import clientConfig from "../config/client-config";

export default async function getProducts(): Promise<Product[]> {
  try {
    const products: Product[] = await createClient(clientConfig).fetch(
      groq`*[_type == "products" && (
        tags.mat == true || 
        tags.protuklizna == true || 
        tags.zidna == true || 
        tags.podna == true || 
        tags.retificirana == true || 
        tags.mraz == true || 
        tags.unutarnja == true || 
        tags.vanjska == true ||
        tags.class in ["klasa1", "klasa2"]
      )] | order(_createdAt desc) {
        _id,
        title,
        'slug': slug.current,
        'images': images[0].asset->url,
        'categories': categories[]->{
          title,
          _id
        },
        'formats': formats[]->{
          title,
          _id
        },
        'brands': brands[]->{
          title,
          _id
        },
        'tags': {
          'mat': tags.mat,
          'protuklizna': tags.protuklizna,
          'zidna': tags.zidna,
          'podna': tags.podna,
          'retificirana': tags.retificirirana,
          'mraz': tags.mraz,
          'unutarnja': tags.unutarnja,
          'vanjska': tags.vanjska,
          'class': tags.class
        }
      }`
    );

    return products;
  } catch (error) {
    console.error("Error fetching products by tags:", error);
    throw error; // Propagate the error if needed
  }
}
