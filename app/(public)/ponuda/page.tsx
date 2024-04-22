import getProducts from "@/sanity/actions/get-products";
import "./style.scss";
import { Category, Product } from "@/types";
import getCategories from "@/sanity/actions/get-categories";
import Link from "next/link";
import getCategoriesShop from "@/sanity/actions/get-categories-shop";

export const revalidate = 1;

const ShopPage = async () => {
  // const products: Product[] = await getProducts();

  // console.log(products);
  const categories: Category[] = await getCategoriesShop();

  const categoriesWithProd = categories.filter(
    (category) => category?.products.length > 0
  )

  console.log(categoriesWithProd)

  return (
    <div>
      sve kategorije
      <ul>
        {categoriesWithProd.map((category) => (
          <Link key={category._id} href={`ponuda/${category.slug}`}>
            {category.title}
            {/* <ul>
              {category.subcategories.map((subcategory) => (
                <li key={subcategory.slug}>{subcategory.title}</li>
              ))}
            </ul> */}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ShopPage;
