import "./style.scss";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <>
      <Link
        key={product._id}
        href={`/proizvod/${product.slug}`}
        className="productCard"
      >
        <div className="image">
          <Image
            src={product.images[0]?.toString()}
            width={400}
            height={400}
            alt={product.title}
          />
        </div>
        <div className="title">
          <h2>{product.title}</h2>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
