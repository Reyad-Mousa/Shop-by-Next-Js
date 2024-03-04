"use client";
import React from "react";

import { useContext } from "react";
import { CardFilterContext } from "@/context/CardFilterContext";

export default function FilterBtn({ uniqueCategories }) {
  const { setCategory } = useContext(CardFilterContext);

  return (
    <div className="mb-10 flex items-center gap-3">
      <h1>Sort By </h1>
      <select
        className="bg-purple-900 h-10  border cursor-pointer  text-white border-white text-center font-bold rounded-md "
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All</option>
        {uniqueCategories.map((category) => (
          <option
            className="bg-white text-black "
            key={category}
            value={category}
          >
            {category.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
