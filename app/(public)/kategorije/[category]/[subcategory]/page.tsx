"use client";

import { useEffect, useState } from "react";

import { Brand, Format, Product, Subcategory } from "@/types";
import "./style.scss";
import getProductsBySubcategory from "@/sanity/actions/get-products-by-subcategory";
import Link from "next/link";
import Image from "next/image";
import getSubcategoryBySlug from "@/sanity/actions/get-subcategory";
import PaginationControls from "@/components/PaginationControls";

import ProductFilters from "@/components/ProductFilters";
import getBrands from "@/sanity/actions/get-brands";
import getFormats from "@/sanity/actions/get-formats";
import { PortableText } from "@portabletext/react";
import ProductCard from "@/components/ProductCard";
import { useRouter } from "next/navigation";

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

  const router = useRouter();

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
      const subcategory: Subcategory | null = await getSubcategoryBySlug(
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

      // Check if the current page is out of range after filtering
      const currentPage = parseInt((searchParams["page"] as string) ?? "1", 10);
      const totalProducts = products?.length ?? 0;
      const totalPages = Math.ceil(totalProducts / 12);
      if (currentPage > totalPages) {
        // Navigate to the first page if out of range
        router.push(`/kategorije/${params.category}/${params.subcategory}`);
      }
    };

    fetchData();
  }, [
    params.category,
    params.subcategory,
    searchParams,
    selectedTags,
    selectedBrands,
    selectedFormats,
    router,
  ]);

  const page = parseInt((searchParams["page"] as string) ?? "1", 10);
  const per_page = parseInt((searchParams["per_page"] as string) ?? "12", 10);
  const start = (page - 1) * per_page;
  const end = start + per_page;

  const entries = products?.slice(start, end);

  const productsNum = products?.length;

  return (
    <div className="subcategoryPage">
      <div className="header">
        <div className="image">
          <Image
            priority
            src={subcategory?.image || ""}
            width={600}
            height={400}
            alt={subcategory?.title || ""}
          />
          <div className="overlay" />
        </div>
        <h1>{subcategory?.title}</h1>
      </div>

      <div className="subcategoryDescription">
        <PortableText value={subcategory?.description || []} />
      </div>

      {/* FILTERS */}
       {/* Render ProductFilters only if category is /kategorije/keramika */}
       {params.category === "keramika" && (
        <ProductFilters
          onTagsChange={handleTagsChange}
          onBrandsChange={handleBrandsChange}
          onFormatsChange={handleFormatsChange}
          brands={brands}
          formats={formats}
          productsNum={productsNum}
        />
      )}

      <div className="productsGrid">
        {entries?.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
      <div>
        <PaginationControls
          hasNextPage={end < (products?.length ?? 0)}
          hasPrevPage={start > 0}
          productNum={products?.length ?? 0}
          subcategory={params.subcategory}
          category={params.category}
          mainRoute="kategorije"
        />
      </div>
    </div>
  );
};

export default SubcategoryPage;
