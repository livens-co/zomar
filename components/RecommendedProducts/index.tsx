import Link from "next/link";
import "./style.scss";
import Image from "next/image";
import { Product } from "@/types";

interface RecommendedProductsProps {
  recommendedProducts: Product[];
}

const RecommendedProducts: React.FC<RecommendedProductsProps> = ({
  recommendedProducts,
}) => {
  return (
    <div className="recommendedProducts">
      <h3>Preporučeni proizvodi</h3>

      <div className="recommendedProductsGrid">
        {recommendedProducts
          ?.map((product) => (
            <Link
              key={product._id}
              href={`/proizvod/${product.slug}`}
              className="recommendedProductCard"
            >
              <div className="image">
                <Image
                  src={product.images[0]?.toString()}
                  width={200}
                  height={400}
                  alt={product.title}
                />
              </div>
              <div className="title">
                <h2>{product.title}</h2>
              </div>
            </Link>
          ))
          .slice(0, 4)}
      </div>
    </div>
  );
};

export default RecommendedProducts;
