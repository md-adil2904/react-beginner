import { useState } from "react";

const ProductCard = ({ product}) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:border-gray-700 hover:shadow-2xl">
      {/* Product Image */}{" "}
      <div className="flex h-56 items-center justify-center bg-white p-4">
        <img
          src={product.thumbnail || product.images?.[0]}
          alt={product.title}
          className="h-full w-full object-contain"
        />{" "}
      </div>
    
      {/* Product Details */}
      <div className="space-y-4 p-5">
        <h2 className="truncate text-lg font-semibold text-gray-100">
          {product.title}
        </h2>

        {/* Price and Stock */}
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-emerald-400">
            ${product.price.toFixed(2)}
          </p>

          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            {product.availabilityStatus}
          </span>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">Quantity</span>

          <div className="flex items-center gap-3 rounded-lg border border-gray-700 px-2 py-1">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-2 text-lg text-gray-300 hover:text-white"
              aria-label="Decrease quantity"
            >
              −
            </button>

            <span className="min-w-5 text-center text-sm">{quantity}</span>

            <button
              onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
              disabled={quantity >= product.stock}
              className="px-2 text-lg text-gray-300 hover:text-white disabled:opacity-40"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart?.(product, quantity)}
          className="w-full rounded-xl bg-emerald-500 py-3 font-semibold text-gray-950 transition hover:bg-emerald-400 active:scale-[0.98]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
