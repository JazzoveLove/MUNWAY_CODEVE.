"use client";

import { useState } from "react";
import { ProductVariation } from "@/app/types";

interface Props {
  variations: ProductVariation[];
}

export default function ProductSelector({ variations }: Props) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!variations) return <p>Brak wariantów</p>;

  return (
    <div className="flex gap-2 mb-6">
      {variations.map((variant) => {
        const isAvailable = variant.inventory_qty > 0;
        const isSelected = selectedSize === variant.size;

        return (
          <button
            key={variant.id}
            disabled={!isAvailable}
            onClick={() => isAvailable && setSelectedSize(variant.size)}
            className={`
              border rounded-md px-4 py-2 transition-all duration-200
              ${!isAvailable ? "line-through opacity-50 cursor-not-allowed bg-gray-100" : "hover:border-black"} 
              ${isSelected ? "bg-black text-white border-black" : "bg-white text-gray-900"}
            `}
          >
            {variant.size}
          </button>
        );
      })}
    </div>
  );
}
