import getProducts from "@/sanity/actions/get-products";
import "./style.scss";
import { Category, Product } from "@/types";
import getCategories from "@/sanity/actions/get-categories";
import Link from "next/link";

export const revalidate = 1;

const ShopPage = async () => {
  // const products: Product[] = await getProducts();

  // console.log(products);
  const categories: Category[] = await getCategories();

  console.log(categories);

  return (
    <div>
      sve kategorije
      <ul>
        {categories.map((category) => (
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
