'use client'

import { useEffect, useState } from "react";

interface ProductFilterProps {
  onTagsChange: (selectedTags: string[]) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ onTagsChange }) => {
  const [filters, setFilters] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      setFilters((prevFilters) => [...prevFilters, id]);
    } else {
      setFilters((prevFilters) => prevFilters.filter((tag) => tag !== id));
    }
  };

  // Notify parent component of selected tags change
  useEffect(() => {
    onTagsChange(filters);
  }, [filters, onTagsChange]);

  console.log(filters)

  return (
    <div>
      <form>
        <label htmlFor="mat">
          <input
            type="checkbox"
            name="Mat"
            id="mat"
            onChange={handleCheckboxChange}
          />
          Mat
        </label>
        <br />
        <label htmlFor="sjaj">
          <input
            type="checkbox"
            name="Sjaj"
            id="sjaj"
            onChange={handleCheckboxChange}
          />
          Sjaj
        </label>
        <br />
        <label htmlFor="sugar">
          <input
            type="checkbox"
            name="Sugar"
            id="sugar"
            onChange={handleCheckboxChange}
          />
          Sugar
        </label>
      </form>
    </div>
  );
};

export default ProductFilter;
