// import { createClient, groq } from "next-sanity";
// import { Product, Category, Subcategory } from "@/types";
// import clientConfig from "../config/client-config";

// export default async function getProductsBySubcategory(
//   slug: string
// ): Promise<Product[] | null> {
//   try {
//     const response: Subcategory = await createClient(clientConfig).fetch(
//       groq`*[_type == "subcategory" && slug.current == $slug][0] {
//       title,
//       'slug': slug.current,
//       'products': *[_type == "products" && references(^._id) && ( productCategory == "noPriceProduct")] | order(_createdAt desc) {
//         _id,
//       title,
//       productCategory,
//       'slug': slug.current,
//       'images': images[].asset->url,
//       'categories': categories[]->{
//         title,
//         slug,
//         _id
//       },
//       'subcategories': subcategories[]->{
//         title,
//         slug,
//         _id
//       },
//       'formats': formats[]->{
//         title,
//         slug,
//         _id
//       },
//       'brands': brands[]->{
//         title,
//         slug,
//         _id
//       },
//       'tags': {
//         'mat': tags.mat,
//         'protuklizna': tags.protuklizna,
//         'zidna': tags.zidna,
//         'podna': tags.podna,
//         'retificirana': tags.retificirana,
//         'mraz': tags.mraz,
//         'unutarnja': tags.unutarnja,
//         'vanjska': tags.vanjska,
//         'class': tags.class
//       }
//       }
//     }`,
//       { slug }
//     );

//     const products: Product[] = response?.products || [];

//     return products;
//   } catch (error) {
//     console.error("Error fetching products by subcategory:", error);
//     // Handle the error or throw it if you want to propagate it
//     throw error;
//   }
// }

import { createClient, groq } from "next-sanity";
import { Product, Category, Subcategory } from "@/types";
import clientConfig from "../config/client-config";

export interface FilterOptions {
  selectedTags?: string[]; // Array of selected tag names
}

export default async function getProductsBySubcategory(
  slug: string,
  options: FilterOptions = {}
): Promise<Product[] | null> {
  const { selectedTags } = options;

  try {
    // Constructing the dynamic tag conditions for the Groq query
    const tagConditions = selectedTags?.map((tag) => `tags.${tag} == true`).join(" && ");

    const response: Subcategory = await createClient(clientConfig).fetch(
      groq`*[_type == "subcategory" && slug.current == $slug][0] {
        title,
        'slug': slug.current,
        'products': *[_type == "products" && references(^._id) && productCategory == "noPriceProduct"
          ${tagConditions ? `&& (${tagConditions})` : ""}
        ] | order(_createdAt desc) {
          _id,
          title,
          productCategory,
          'slug': slug.current,
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
    throw error;
  }
}
