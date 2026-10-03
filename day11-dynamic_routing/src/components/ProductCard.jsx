import React from "react";
import { useNavigate, useParams } from "react-router";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`./productDetail/${product.id}`);
      }}
      className="w-72 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
    >
      {/* Product Image */}
      <div className="h-64 bg-gray-100 flex items-center justify-center p-6">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Category */}
        <p className="text-sm text-gray-500 uppercase tracking-wide">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="mt-2 text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-yellow-500">★</span>
          <span className="text-sm text-gray-600">
            {product.rating?.rate || "N/A"}
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-5">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>

          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
