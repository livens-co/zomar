import { createClient, groq } from "next-sanity";
import { Product } from "@/types";
import clientConfig from "../config/client-config";

export default async function getProduct(slug: string): Promise<Product[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "products" && slug.current == $slug][0] {
      _id,
      title,
      'slug': slug.current,
      description,
      'images': images[].asset->url,
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
        'retificirana': tags.retificirana,
        'mraz': tags.mraz,
        'unutarnja': tags.unutarnja,
        'vanjska': tags.vanjska,
        'class': tags.class
      }
    }
    `,
     { slug } 
  );
}