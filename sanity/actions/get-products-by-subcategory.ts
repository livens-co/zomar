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
import { Product, Subcategory } from "@/types";
import clientConfig from "../config/client-config";

export interface FilterOptions {
  selectedTags?: string[]; // Array of selected tag names
  selectedBrands?: string[]; // Array of selected brand IDs
  selectedFormats?: string[]; // Array of selected format IDs
}

export default async function getProductsBySubcategory(
  slug: string,
  options: FilterOptions = {}
): Promise<Product[] | null> {
  const { selectedTags, selectedBrands, selectedFormats } = options;

  try {
    // Constructing the dynamic tag conditions for the Groq query
    const tagConditions = selectedTags
      ?.map((tag) => `tags.${tag} == true`)
      .join(" && ");

   
    const brandConditions = selectedBrands
      ?.map((brand) => `brands._id == "${brand}"`)
      .join(" && ");

    const formatConditions = selectedFormats
      ?.map((format) => `formats._id == "${format}"`)
      .join(" && ");

    const response: Subcategory = await createClient(clientConfig).fetch(
      groq`*[_type == "subcategory" && slug.current == $slug][0] {
        title,
        'slug': slug.current,
        'products': *[_type == "products" && references(^._id) && productCategory == "noPriceProduct"
          ${tagConditions ? `&& (${tagConditions})` : ""}
          ${brandConditions ? `&& (${brandConditions})` : ""}
          ${formatConditions ? `&& (${formatConditions})` : ""}
        ] | order(_createdAt desc) {
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
