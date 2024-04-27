"use client";

import { Brand, Format } from "@/types";
import "./style.scss";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";

interface ProductFiltersProps {
  onTagsChange: (selectedTags: string[]) => void;
  onBrandsChange: (selectedBrands: string[]) => void;
  onFormatsChange: (selectedFormats: string[]) => void;
  brands: Brand[] | null;
  formats: Format[] | null;
}

const tagsList = [
  {
    name: "Mat",
    id: "mat",
  },
  {
    name: "Sjaj",
    id: "sjaj",
  },
  {
    name: "Satinado",
    id: "satinado",
  },
  {
    name: "Gres",
    id: "gres",
  },
  {
    name: "Sugar Effect",
    id: "sugar",
  },
  {
    name: "Retificirana",
    id: "retificirana",
  },
  {
    name: "Protuklizna",
    id: "protuklizna",
  },
  {
    name: "Zidna",
    id: "zidna",
  },
  {
    name: "Podna",
    id: "podna",
  },
  {
    name: "Unutarnja",
    id: "unutarnja",
  },
  {
    name: "Vanjska",
    id: "vanjska",
  },
  {
    name: "Otpornost na mraz",
    id: "mraz",
  },
  {
    name: "Klasičan rez",
    id: "klasican",
  },
];

const ProductFilters: React.FC<ProductFiltersProps> = ({
  onTagsChange,
  onBrandsChange,
  onFormatsChange,
  brands,
  formats,
}) => {
  // const [filters, setFilters] = useState<string[]>([]);

  const [filterTags, setFilterTags] = useState<string[]>([]);
  const [filterBrands, setFilterBrands] = useState<string[]>([]);
  const [filterFormats, setFilterFormats] = useState<string[]>([]);

  const handleTagsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      setFilterTags((prevFilters) => [...prevFilters, id]);
    } else {
      setFilterTags((prevFilters) => prevFilters.filter((tag) => tag !== id));
    }
  };

  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      setFilterBrands((prevBrands) => [...prevBrands, id]);
    } else {
      setFilterBrands((prevBrands) =>
        prevBrands.filter((brandId) => brandId !== id)
      );
    }
  };

  const handleFormatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      setFilterFormats((prevFormats) => [...prevFormats, id]);
    } else {
      setFilterFormats((prevFormats) =>
        prevFormats.filter((formatId) => formatId !== id)
      );
    }
  };

  // ADD ON BUTTON CLICK FILTER
  useEffect(() => {
    onTagsChange(filterTags);
    onBrandsChange(filterBrands);
    onFormatsChange(filterFormats);
  }, [
    filterTags,
    onTagsChange,
    onBrandsChange,
    filterBrands,
    onFormatsChange,
    filterFormats,
  ]);

  // console.log(filterBrands);

  return (
    <div className="filtersComponent">
      <div className="filterBar">
        <div className="innerContainer">
          <HiMenu />
          <p>Filteri</p>
        </div>
      </div>

      <div className="filtersContainer">
        <div className="filterColumn">
          <h4>Vrste pločica</h4>
          <div className="filterContainer">
            <div className="filterContainerInner">
              <ul>
                {tagsList.map((tag) => (
                  <li key={tag.id}>
                    <input
                      type="checkbox"
                      id={tag.id}
                      onChange={handleTagsChange}
                    />
                    <label htmlFor={tag.id}>{tag.name}</label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="filterColumn">
          <h4>Brendovi</h4>
          <div className="filterContainer">
            <div className="filterContainerInner">
              <ul>
                {brands?.map((brand) => (
                  <li key={brand._id}>
                    <input
                      type="checkbox"
                      id={brand._id}
                      onChange={handleBrandChange}
                    />
                    <label htmlFor={brand._id}>{brand.title}</label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="filterColumn">
          <h4>Dimenzije</h4>
          <div className="filterContainer">
            <div className="filterContainerInner">
              <ul>
                {formats?.map((format) => (
                  <li key={format._id}>
                    <input
                      type="checkbox"
                      id={format._id}
                      onChange={handleFormatChange}
                    />
                    <label htmlFor={format._id}>{format.title}</label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <button onClick={() => {}}>Filter</button>
      </div>
    </div>
  );
};

export default ProductFilters;
