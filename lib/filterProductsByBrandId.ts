import { Product } from "@/types";

// Function to filter products by brand IDs
const filterProductsByBrandId = (
  products: Product[] | null,
  brandIds: string[]
): Product[] => {
  if (!products || !brandIds || brandIds.length === 0) {
    return []; // Return an empty array if no products or brand IDs are provided
  }

  // Filter products by brand IDs
  const filteredProducts = products.filter((product) => {
    if (product.brands && product.brands.length > 0) {
      // Check if any of the product's brand IDs match with the specified brandIds
      return product.brands.some((brand) => brandIds.includes(brand._id));
    }
    return false;
  });

  return filteredProducts; // Always return an array of products, even if empty
};

export default filterProductsByBrandId;
