import { createClient, groq } from "next-sanity";
import { Category, Subcategory } from "@/types";
import clientConfig from "../config/client-config";

export default async function getSubcategoriesByCategoryShop(
  slug: string
): Promise<Subcategory[]> {
  try {
    if (!slug) {
      throw new Error("Category slug is required.");
    } 

    // Fetch the category based on the provided slug
    const category: Category | null = await createClient(clientConfig).fetch(
      groq`*[_type == "category" && slug.current == $slug ][0] {
        _id,
        title,
        'image': image.asset->url,
        'slug': slug.current,
        'subcategories': subcategories[]->{
          _id,
          title,
          'image': image.asset->url,
          'slug': slug.current,
          'products': *[_type == "products" && references(^._id) && ( productCategory == "priceProduct")] {
        _id,
      title,
      
      
      }
        },
      }`,
      { slug }
    );

    if (!category) {
      throw new Error("Category not found.");
    }

    return category.subcategories || [];
  } catch (error) {
    console.error("Error fetching subcategories by category slug:", error);
    throw error;
  }
}
