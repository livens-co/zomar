import Link from "next/link";
import "./style.scss";
import Image from "next/image";
import { Product } from "@/types";
import ProductCard from "../ProductCard";

interface RecommendedProductsProps {
  recommendedProducts: Product[];
}

const RecommendedProducts: React.FC<RecommendedProductsProps> = ({
  recommendedProducts,
}) => {
  return (
    <div className="recommendedProducts">
      <h3>Preporučeni proizvodi</h3>

      <div className="recommendedProductsContainer">
        <div className="recommendedProductsContainerInner">
          {recommendedProducts?.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedProducts;
