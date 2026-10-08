import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {/* Product Image */}
      <div className="h-64 flex items-center justify-center p-6 bg-gray-50">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Category */}
        <p className="text-sm text-gray-500 capitalize">{product.category}</p>

        {/* Title */}
        <h2 className="text-lg font-semibold mt-2 line-clamp-2">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <span className="bg-green-600 text-white text-sm px-2 py-1 rounded">
            ⭐ {product.rating.rate}
          </span>

          <span className="text-sm text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price */}
        <p className="text-2xl font-bold mt-4">${product.price}</p>

        {/* Buttons */}
        <div className="flex gap-3 mt-5">
          <button className="flex-1 border border-black py-2 rounded-lg hover:bg-gray-100">
            View
          </button>

          <button className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
