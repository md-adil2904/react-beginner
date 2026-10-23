import React from "react";
import { useAllCategories } from "../../hooks/useProductHooks";

const ProductFilter = ({ search, setSearch, category, setCategory }) => {
  const { data, isPending, error } = useAllCategories();

  console.log("my all categories", data);
  if (isPending) return <h1>Loading categories</h1>;
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Search Bar - Left */}
      <div className="w-full sm:max-w-md">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      {/* Category Select - Right */}
      <div className="w-full sm:w-56">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        >
          <option value="all">All Categories</option>

          {data.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;
