import { Product } from "@/types";

// Function to filter products by format ID
const filterProductsByFormatId = (products: Product[] | null, formatId: string): Product[] => {
  if (!products) {
    return []; // Return an empty array if products is null
  }

  // Filter products by format ID
  const filteredProducts = products.filter((product) => {
    if (product.formats && product.formats.length > 0) {
      // Check if the format ID exists in the product's formats array
      return product.formats.some((format) => format._id === formatId);
    }
    return false;
  });

  return filteredProducts; // Always return an array of products, even if empty
};

export default filterProductsByFormatId;
