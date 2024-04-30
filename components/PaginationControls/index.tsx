"use client";

import "./style.scss";

import { useRouter, useSearchParams } from "next/navigation";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  productNum?: number;
  subcategory: string;
  category: string;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  productNum = 0,
  subcategory,
  category,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get("page") ?? "1", 10);

  const per_page = 12;

  const totalPages = Math.ceil(productNum / per_page);

  return (
    <>
      <div className="pagination">
        <button
          className="prevBtn"
          disabled={!hasPrevPage}
          onClick={() =>
            router.push(
              `/kategorije/${category}/${subcategory}?page=${Number(page) - 1}`
            )
          }
        >
          <FaArrowLeft />
        </button>
        <div className="pages"> {`${page} / ${totalPages}`}</div>
        <button
          className="nextBtn"
          disabled={!hasNextPage}
          onClick={() => {
            router.push(
              `/kategorije/${category}/${subcategory}?page=${Number(page) + 1}`
            );
          }}
        >
          <FaArrowRight />
        </button>
      </div>
    </>
  );
};

export default PaginationControls;
