import { Product } from "@/types";
import "./style.scss";
import getProductsBySubcategory from "@/sanity/actions/get-products-by-subcategory";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 1;

interface SubcategoryPageProps {
  params: {
    subcategory: string;
  };
}

const SubcategoryPage: React.FC<SubcategoryPageProps> = async ({ params }) => {
  const products: Product[] = await getProductsBySubcategory(
    params.subcategory
  );

  // console.log(products.images[0]);

  return (
    <div className="subcategoryPage">
      <div className="subcategoryPageTitle">SubcategoryPage</div>
      <div className="productsGrid">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/proizvod/${product.slug}`}
            className="productCard"
          >
            <div className="image">
              <Image
                // src='https://cdn.sanity.io/images/2jjxauuu/production/37fd54119ffa815fdd15a3d03a3c6f63986f2c94-1545x1079.png'
                src={product.images[0]?.toString()}
                width={200}
                height={400}
                alt="Bahrein"
              />
              
            </div>
            <div className="title">
              <h2>{product.title}</h2>
              {/* <p>{product.images[0]}</p> */}
            </div>
          </Link>
        ))}
      </div>
      {/* <ul>
        {products.map((product) => (
          <Link key={product.slug} href={`/proizvod/${product.slug}`}>
            {product.title}
          </Link>
        ))}
      </ul> */}
    </div>
  );
};

export default SubcategoryPage;
