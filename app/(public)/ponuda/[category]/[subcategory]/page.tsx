import { Product, Subcategory } from "@/types";
import "./style.scss";
import Link from "next/link";
import getProductsBySubcategoryShop from "@/sanity/actions/get-products-by-subcategory-shop";
import getSubcategoryBySlug from "@/sanity/actions/get-subcategory";
import PaginationControls from "@/components/PaginationControls";
import Image from "next/image";

export const revalidate = 1;

interface ShopSubcategoryPageProps {
  params: {
    subcategory: string;
    category: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

const ShopSubcategoryPage: React.FC<ShopSubcategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const subcategory: Subcategory | null = await getSubcategoryBySlug(
    params.subcategory
  );
  const products: Product[] | null = await getProductsBySubcategoryShop(
    params.subcategory
  );

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "12";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = products?.slice(start, end);

  const productsNum = products?.length;

  return (
    <div className="shopSubcategoryPage">
      <div className="subcategoryPageTitle">{subcategory?.title}</div>
      <div>Broj proizvoda: {productsNum}</div>

      <div className="productsGrid">
        {entries?.map((product) => (
          <Link
            key={product._id}
            href={`/proizvod/${product.slug}`}
            className="productCard"
          >
            <div className="image">
              <Image
                src={product.images[0]?.toString()}
                width={200}
                height={400}
                alt="Bahrein"
              />
            </div>
            <div className="title">
              <h2>{product.title}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div>
        <PaginationControls
          hasNextPage={end < (products?.length ?? 0)}
          hasPrevPage={start > 0}
          productNum={products?.length ?? 0}
          subcategory={params.subcategory}
          category={params.category}
          mainRoute="ponuda"
        />
      </div>
    </div>
  );
};

export default ShopSubcategoryPage;
