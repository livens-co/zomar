import { createClient, groq } from "next-sanity";
import { Product, Subcategory } from "@/types";
import clientConfig from "../config/client-config";
import filterProductsByBrandId from "@/lib/filterProductsByBrandId";
import filterProductsByFormatId from "@/lib/filterProductsByFormatId";

export interface FilterOptions {
  selectedTags?: string[]; // Array of selected tag names
  selectedBrands?: string[]; // Array of selected brand IDs
  selectedFormats?: string[]; // Array of selected format IDs
}

export default async function getProductsBySubcategoryShop(
  slug: string,
  options: FilterOptions = {}
): Promise<Product[]> {
  const { selectedTags, selectedBrands, selectedFormats } = options;

  try {
    // Constructing the dynamic tag conditions for the Groq query
    

    const subcategory: Subcategory = await createClient(clientConfig).fetch(
      groq`*[_type == "subcategory" && slug.current == $slug][0] {
        title,
        'slug': slug.current,
        'products': *[_type == "products" && references(^._id) && productCategory == "priceProduct"
         
         

          
          
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

    // const products: Product[] = response?.products;

    // Apply brand filtering if selectedBrands are specified
    // if (selectedBrands && selectedBrands.length > 0) {
    //   products = filterProductsByBrandId(products, selectedBrands);
    // }

    // Apply format filtering if selectedFormats are specified
    // if (selectedFormats && selectedFormats.length > 0) {
    //   selectedFormats.forEach((formatId) => {
    //     products = filterProductsByFormatId(products, formatId);
    //   });
    // }
    // if (selectedFormats && selectedFormats.length > 0) {
    //   products = filterProductsByFormatId(products, selectedFormats);
    // }

    return subcategory.products || [];
  } catch (error) {
    console.error("Error fetching products by subcategory:", error);
    throw error;
  }
}
