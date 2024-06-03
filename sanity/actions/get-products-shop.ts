import { createClient, groq } from "next-sanity";
import { Product } from "@/types";
import clientConfig from "../config/client-config";

export default function getProductsShop(): Promise<Product[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "products"
    //  && productCategory == "priceProduct" 
     && isFeatured == true] | order(_createdAt desc) {
      _id,
      title,
      price,
      salePrice,
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
          isFeatured
    }
    `
  );
}
