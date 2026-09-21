import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const ProductCard = ({ product, isInCart }) => {
  const { setCartItems, incrementQuantity, decrementQuantity } =
    useContext(MyStore);

  const addToCart = () => {
    setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    alert("product added in cart");
  };
  return (
    <div className="w-72 overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center bg-gray-100 p-6">
        <span className="absolute left-3 top-3 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
          {product.category}
        </span>

        <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow hover:bg-red-500 hover:text-white">
          ♥
        </button>

        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 hover:scale-105"
        />
      </div>

      {/* Product Information */}
      <div className="p-5">
        <h2 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        <p className="mb-3 line-clamp-2 text-sm text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mb-4 flex items-center gap-2">
          <span className="rounded-md bg-green-600 px-2 py-1 text-sm font-semibold text-white">
            {product.rating.rate} ★
          </span>

          <span className="text-sm text-gray-500">
            {product.rating.count} ratings
          </span>
        </div>

        {/* Price */}
        <div className="mb-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ${(product.price * 1.2).toFixed(2)}
          </span>
        </div>

        {/* Button */}

        {isInCart ? (
          <div className="w-full flex items-center justify-center text-4xl gap-5 bg-gray-500 rounded-xl ">
            {" "}
            <span
              className="cursor-pointer"
              onClick={() => {
                decrementQuantity(product.id);
              }}
            >
              -
            </span>{" "}
            <span>{isInCart.quantity}</span>{" "}
            <span
              onClick={() => {
                incrementQuantity(product.id);
              }}
              className="cursor-pointer"
            >
              +
            </span>
          </div>
        ) : (
          <button
            onClick={addToCart}
            className="w-full rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-gray-800"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
