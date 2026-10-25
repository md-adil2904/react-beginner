import React from "react";

const ProductCard = ({ product }) => {
return ( <div className="w-full max-w-xs overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">

  {/* Product Image */}
  <div className="flex h-52 items-center justify-center bg-gray-50 p-4">
    <img
      src={product.thumbnail}
      alt={product.title}
      className="h-full w-full object-contain"
    />
  </div>

  {/* Product Details */}
  <div className="p-4">

    <h2 className="truncate text-lg font-semibold text-gray-800">
      {product.title}
    </h2>

    <div className="mt-2 flex items-center justify-between">
      <p className="text-xl font-bold text-gray-900">
        ${product.price}
      </p>

      <p className="text-sm text-yellow-600">
        ★ {product.rating}
      </p>
    </div>

    {/* Add to Cart Button */}
    <button
      
      className="mt-4 w-full rounded-lg bg-indigo-600 px-4 py-2.5 font-medium text-white transition hover:bg-indigo-700 active:scale-95"
    >
      Add to Cart
    </button>

  </div>
</div>


);
};

export default ProductCard;
