import React, { useContext } from "react";
import { MyShop } from "../context/MyWebsite";

const ProductCard = ({ product }) => {
  const { setCartItmes } = useContext(MyShop);
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="flex h-64 items-center justify-center bg-gray-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="mb-3 line-clamp-2 h-12 text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mb-4 flex items-center gap-2">
          <span className="rounded-md bg-yellow-400 px-2 py-1 text-sm font-semibold text-white">
            ★ {product.rating.rate}
          </span>

          <span className="text-sm text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-gray-900">${product.price}</p>

          <button
            onClick={() => setCartItmes((prev) => [...prev, product])}
            className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
