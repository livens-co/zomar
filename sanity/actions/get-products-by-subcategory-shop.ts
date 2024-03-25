import { createClient, groq } from "next-sanity";
import { Product, Category, Subcategory } from "@/types";
import clientConfig from "../config/client-config";

export default async function getProductsBySubcategoryShop(
  slug: string
): Promise<Product[]> {
  try {
    const response: Subcategory = await createClient(clientConfig).fetch(
      groq`*[_type == "subcategory" && slug.current == $slug][0] {
      title,
      'slug': slug.current,
      'products': *[_type == "products" && references(^._id) && ( productCategory == "priceProduct")] | order(_createdAt desc) {
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
      price,
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
    }`,
      { slug }
    );

    const products: Product[] = response?.products || [];

    return products;
  } catch (error) {
    console.error("Error fetching products by subcategory:", error);
    // Handle the error or throw it if you want to propagate it
    throw error;
  }
}
