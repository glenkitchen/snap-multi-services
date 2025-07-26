"use client";

import { categories } from "@/data/products";

interface ProductFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProductFilter({
  selectedCategory,
  onCategoryChange,
}: ProductFilterProps) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-foreground mb-4">Categories</h3>
      <div className="space-y-2">
        <button
          onClick={() => onCategoryChange("")}
          className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
            selectedCategory === ""
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          }`}
        >
          All Products ({categories.length} categories)
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
