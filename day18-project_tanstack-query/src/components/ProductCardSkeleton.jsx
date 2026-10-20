import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="w-full max-w-sm animate-pulse overflow-hidden rounded-2xl border border-gray-800 bg-gray-900">
      {/* Image Skeleton */}{" "}
      <div className="flex h-56 items-center justify-center bg-gray-800 p-4">
        {" "}
        <div className="h-full w-full rounded-lg bg-gray-700"></div>{" "}
      </div>
      {/* Product Details Skeleton */}
      <div className="space-y-4 p-5">
        {/* Product Title */}
        <div className="h-5 w-3/4 rounded-md bg-gray-700"></div>

        {/* Price and Stock */}
        <div className="flex items-center justify-between">
          <div className="h-7 w-20 rounded-md bg-gray-700"></div>
          <div className="h-6 w-16 rounded-full bg-gray-700"></div>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center justify-between">
          <div className="h-4 w-16 rounded-md bg-gray-700"></div>

          <div className="flex items-center gap-3 rounded-lg border border-gray-700 px-2 py-1">
            <div className="h-6 w-5 rounded bg-gray-700"></div>
            <div className="h-4 w-5 rounded bg-gray-700"></div>
            <div className="h-6 w-5 rounded bg-gray-700"></div>
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="h-12 w-full rounded-xl bg-gray-700"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
