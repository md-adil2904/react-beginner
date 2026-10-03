import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();
  const [singleProductData, setSingleProductData] = useState({});

  const getSingleProductData = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setSingleProductData(response.data);
    } catch (error) {
      console.log("error in single product", error);
    }
  };

  useEffect(() => {
    getSingleProductData();
  }, []);

  getSingleProductData();
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT - Product Image */}
          <div className="flex items-center justify-center bg-gray-100 rounded-xl p-8">
            <img
              src={singleProductData.thumbnail}
              alt={singleProductData.title}
              className="w-full max-w-md h-96 object-contain"
            />
          </div>

          {/* RIGHT - Product Details */}
          <div className="flex flex-col justify-center">
            {/* Category */}
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
              {singleProductData.category}
            </p>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {singleProductData.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <span className="text-yellow-500 text-xl">★</span>

              <span className="font-semibold">{singleProductData.rating}</span>

              <span className="text-gray-500">/ 5</span>
            </div>

            {/* Price */}
            <p className="text-3xl font-bold text-gray-900 mt-6">
              ${singleProductData.price}
            </p>

            {/* Description */}
            <p className="text-gray-600 leading-7 mt-5">
              {singleProductData.description}
            </p>

            {/* Stock */}
            <div className="mt-5">
              <span className="text-green-600 font-medium">✓ In Stock</span>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mt-6">
              <button className="w-10 h-10 border rounded-lg text-xl">-</button>

              <span className="font-semibold">1</span>

              <button className="w-10 h-10 border rounded-lg text-xl">+</button>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <button className="flex-1 bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
                Add to Cart
              </button>

              <button className="flex-1 border border-black py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="border-t mt-10 pt-8">
          <h2 className="text-xl font-bold mb-5">Product Information</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div>
              <p className="text-gray-500 text-sm">Brand</p>
              <p className="font-semibold">
                {singleProductData.brand || "N/A"}
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Category</p>
              <p className="font-semibold capitalize">
                {singleProductData.category}
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Stock</p>
              <p className="font-semibold">{singleProductData.stock} units</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Discount</p>
              <p className="font-semibold">
                {singleProductData.discountPercentage}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
