import { createClient, groq } from "next-sanity";
import { Product, Subcategory } from "@/types";
import clientConfig from "../config/client-config";

export default async function getProductsBySubcategoryShop(
  slug: string
): Promise<Product[]> {
  try {
    // Fetch the subcategory based on the provided slug
    const subcategoryQuery = groq`*[_type == "subcategory" && slug.current == $slug][0] {
      title,
      'slug': slug.current,
      'products': *[_type == "products" && references(^._id) && productCategory == "priceProduct"] | order(_createdAt desc) {
        _id,
        title,
        productCategory,
        'slug': slug.current,
        price,
        salePrice,
        'images': images[].asset->url,
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
          'sjaj': tags.sjaj,
          'satinado': tags.satinado,
          'klasican': tags.klasican,
          'gres': tags.gres,
          'sugar': tags.sugar,
          'class': tags.class
        }
      }
    }`;

    const subcategory: Subcategory = await createClient(clientConfig).fetch(
      subcategoryQuery,
      { slug }
    );

    // Check if the subcategory and its products exist
    if (subcategory && subcategory.products) {
      return subcategory.products;
    } else {
      // Handle case where subcategory or its products are not found
      console.error("Subcategory or products not found for slug:", slug);
      return [];
    }
  } catch (error) {
    console.error("Error fetching products by subcategory:", error);
    throw error;
  }
}
