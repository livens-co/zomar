import { createClient, groq } from "next-sanity";
import { Product } from "@/types";
import clientConfig from "../config/client-config";

export default function getProducts(): Promise<Product[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "products" && (
      // tags.mat == true || 
      // tags.protuklizna == true || 
      // tags.zidna == true || 
      // tags.podna == true || 
      // tags.retificirana == true || 
      // tags.mraz == true || 
      // tags.unutarnja == true || 
      // tags.vanjska == true ||
      // tags.class in ["klasa1", "klasa2"] &&
      ( productCategory == "noPriceProduct")
    )] | order(_createdAt desc) {
      _id,
      title,
      productCategory,
      'slug': slug.current,
      'images': images[0].asset->url,
      'categories': categories[]->{
        title,
        slug,
        _id
      },
      'subcategories': subcategories[]->{
        title,
        slug,
        _id
      },
      'formats': formats[]->{
        title,
        slug,
        _id
      },
      'brands': brands[]->{
        title,
        slug,
        _id
      },
      'tags': {
        'mat': tags.mat,
        'protuklizna': tags.protuklizna,
        'zidna': tags.zidna,
        'podna': tags.podna,
        'retificirana': tags.retificirana,
        'mraz': tags.mraz,
        'unutarnja': tags.unutarnja,
        'vanjska': tags.vanjska,
        'class': tags.class
      }
    }
    `
  );
}
