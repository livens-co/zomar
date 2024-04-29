"use client";

import { useEffect, useState } from "react";

import { Brand, Format, Product, Subcategory } from "@/types";
import "./style.scss";
import getProductsBySubcategory from "@/sanity/actions/get-products-by-subcategory";
import Link from "next/link";
import Image from "next/image";
import getSubategoryBySlug from "@/sanity/actions/get-subcategory";
import PaginationControls from "@/components/PaginationControls";

import ProductFilters from "@/components/ProductFilters";
import getBrands from "@/sanity/actions/get-brands";
import getFormats from "@/sanity/actions/get-formats";

interface SubcategoryPageProps {
  params: {
    subcategory: string;
    category: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

const SubcategoryPage: React.FC<SubcategoryPageProps> = ({
  params,
  searchParams,
}) => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [subcategory, setSubcategory] = useState<Subcategory | null>(null);
  const [brands, setBrands] = useState<Brand[] | null>(null);
  const [formats, setFormats] = useState<Format[] | null>(null);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedFormats, setSelectedFormats] = useState<string[]>([]);

  const handleTagsChange = (selectedTags: string[]) => {
    setSelectedTags(selectedTags);
    // Here you can perform any additional logic based on the selected tags
  };

  const handleBrandsChange = (selectedBrands: string[]) => {
    setSelectedBrands(selectedBrands);
    // Here you can perform any additional logic based on the selected brands
  };

  const handleFormatsChange = (selectedFormats: string[]) => {
    setSelectedFormats(selectedFormats);
    // Here you can perform any additional logic based on the selected formats
  };

  useEffect(() => {
    const fetchData = async () => {
      const subcategory: Subcategory | null = await getSubategoryBySlug(
        params.subcategory
      );

      if (!subcategory) {
        // Handle case where category is not found
        return <div>Potkategorija nije pronađena</div>;
      }

      const products: Product[] | null = await getProductsBySubcategory(
        params.subcategory,
        {
          selectedTags,
          selectedBrands,
          selectedFormats,
        }
      );

      const brands: Brand[] | null = await getBrands();
      const formats: Format[] | null = await getFormats();

      setProducts(products);
      setSubcategory(subcategory);
      setBrands(brands);
      setFormats(formats);
    };

    fetchData();
  }, [
    params.category,
    params.subcategory,
    searchParams,
    selectedTags,
    selectedBrands,
    selectedFormats,
  ]);

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "12";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = products?.slice(start, end);

  return (
    <div className="subcategoryPage">
      <div className="subcategoryPageTitle">{subcategory?.title}</div>

      {/* FILTERS */}
      <ProductFilters
        onTagsChange={handleTagsChange}
        onBrandsChange={handleBrandsChange}
        onFormatsChange={handleFormatsChange}
        brands={brands}
        formats={formats}
      />

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
        />
      </div>
    </div>
  );
};

export default SubcategoryPage;
