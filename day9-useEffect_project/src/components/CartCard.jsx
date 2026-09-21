import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const CartCard = ({ product }) => {
  const { removeCartItem,incrementQuantity,decrementQuantity } = useContext(MyStore);

  return (
    <div className="flex w-full items-center gap-6 rounded-2xl bg-white p-5 shadow-sm">
      {/* Product Image */}
      <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-xl bg-gray-100 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col gap-2">
        <h2 className="line-clamp-2 text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        <p className="text-sm capitalize text-gray-500">{product.category}</p>

        <p className="text-xl font-bold text-gray-900">${product.price}</p>
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-3">
        <button onClick={()=> decrementQuantity(product.id) } className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 text-lg hover:bg-gray-100">
          -
        </button>

        <span className="min-w-6 text-center font-semibold">
          {product.quantity}
        </span>

        <button onClick={()=> incrementQuantity(product.id) } className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 text-lg hover:bg-gray-100">
          +
        </button>
      </div>

      {/* Remove */}
      <button
        onClick={() => removeCartItem(product.id)}
        className="rounded-lg px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-50"
      >
        Remove
      </button>
    </div>
  );
};

export default CartCard;
