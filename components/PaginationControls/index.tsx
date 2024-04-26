"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  productNum?: number;
  subcategory: string;
  category: string;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  productNum = 0,
  subcategory,
  category
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // const page = searchParams.get("page") ?? "1";
  // const per_page = searchParams.get("per_page") ?? "14";
  const page = parseInt(searchParams.get("page") ?? "1", 10);
  // const per_page = parseInt(searchParams.get("per_page") ?? "14", 10);
  const per_page = 14;

  const totalPages = Math.ceil(productNum / per_page);

  // const goToPage = (newPage: number) => {
  //   router.push(`/blog?page=${newPage}`);
  // };

  return (
    <>
      <button
        disabled={!hasPrevPage}
        onClick={() => router.push(`/kategorije/${category}/${subcategory}?page=${Number(page) - 1}`)}
        className="navibationBtn"
      >
        <FaArrowLeftLong />
      </button>

      {/* {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => goToPage(index + 1)}
          className={index + 1 === page ? "pageBtn activePageBtn" : "pageBtn"}
        >
          {index + 1}
        </button>
      ))} */}
       {`${page} / ${totalPages}`}

      <button
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/kategorije/${category}/${subcategory}?page=${Number(page) + 1}`);
        }}
        className="navibationBtn"
      >
        <FaArrowRightLong />
      </button>
    </>
  );
};

export default PaginationControls;
