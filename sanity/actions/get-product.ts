import { createClient, groq } from "next-sanity";
import { Product } from "@/types";
import clientConfig from "../config/client-config";

export default async function getProduct(slug: string): Promise<Product | null> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "products" && slug.current == $slug][0] {
      _id,
      productCategory,
      title,
      'slug': slug.current,
      description,
      price,
      salePrice,
      'images': images[].asset->url,
      'categories': categories[]->{
        title,
        'slug': slug.current,
        _id
      },
      'subcategories': subcategories[]->{
        title,
        'slug': slug.current,
        _id
      },
      'formats': formats[]->{
        title,
        _id
      },
      colorList,
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
        'sjaj': tags.sjaj,
        'satinado': tags.satinado,
        'klasican': tags.klasican,
        'gres': tags.gres,
        'sugar': tags.sugar,
        'class': tags.class 
      }
    }
    `,
     { slug } 
  );
}