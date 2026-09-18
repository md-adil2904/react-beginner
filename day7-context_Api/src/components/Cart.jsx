import React, { useContext } from "react";
import { MyShop } from "../context/MyWebsite";

const Cart = () => {
  const { cartItems } = useContext(MyShop);
  return (
    <div className="min-h-screen bg-gray-100 px-5 py-8">
      {/* Heading */}
      <div className="mx-auto mb-8 max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>

        <p className="mt-1 text-sm text-gray-500">
          {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your
          cart
        </p>
      </div>

      {/* Cart */}
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
        {/* Products */}
        <div className="space-y-4 lg:col-span-2">
          {cartItems.length === 0 ? (
            <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
              <p className="text-xl font-semibold text-gray-700">
                Your cart is empty
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Add some products to your cart.
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-sm sm:flex-row"
              >
                {/* Image */}
                <div className="flex h-40 w-full shrink-0 items-center justify-center rounded-xl bg-gray-50 p-4 sm:w-40">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Product Information */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                      {item.category}
                    </p>

                    <h2 className="line-clamp-2 text-lg font-semibold text-gray-800">
                      {item.title}
                    </h2>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="rounded-md bg-yellow-400 px-2 py-1 text-xs font-semibold text-white">
                        ★ {item.rating.rate}
                      </span>

                      <span className="text-xs text-gray-500">
                        {item.rating.count} reviews
                      </span>
                    </div>
                  </div>

                  {/* Bottom */}
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                    <p className="text-2xl font-bold text-gray-900">
                      ${item.price}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center overflow-hidden rounded-lg border border-gray-200">
                      <button className="px-3 py-1.5 text-lg hover:bg-gray-100">
                        −
                      </button>

                      <span className="border-x border-gray-200 px-4 py-1.5">
                        1
                      </span>

                      <button className="px-3 py-1.5 text-lg hover:bg-gray-100">
                        +
                      </button>
                    </div>

                    {/* Remove */}
                    <button className="text-sm font-medium text-red-500 hover:text-red-700">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Summary */}
        <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>

          <div className="my-5 space-y-3 border-b border-gray-200 pb-5">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>

              <span>
                $
                {cartItems
                  .reduce((total, item) => total + item.price, 0)
                  .toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Shipping</span>
              <span className="text-green-600">FREE</span>
            </div>
          </div>

          <div className="flex justify-between">
            <span className="text-lg font-semibold text-gray-900">Total</span>

            <span className="text-2xl font-bold text-gray-900">
              $
              {cartItems
                .reduce((total, item) => total + item.price, 0)
                .toFixed(2)}
            </span>
          </div>

          <button className="mt-6 w-full rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-gray-800">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
