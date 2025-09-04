import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <div className="relative border rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-200 bg-white w-full">
      {/* Wishlist Icon */}
      <div>
        <button className="absolute top-3 right-3 text-gray-500 hover:text-red-500">
          <FaHeart size={20} />
        </button>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full p-4 h-56 rounded-xl object-contain bg-[#F7F5F7]"
        />
      </div>

      {/* Title & Category */}
      <div className="p-4">
        <h3 className="mt-4 text-gray-800 font-semibold truncate">
          {product.title}
        </h3>
        <p className="text-gray-500 text-sm">5 types of shoes available</p>

        {/* Rating */}
        <div className="flex items-center mt-2">
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-gray-300" />
          <span className="ml-2 text-sm text-gray-500">(121)</span>
        </div>

        {/* Price & Buttons */}
        <div className="flex justify-between items-center mt-3">
          <span className="text-lg font-bold text-gray-900">
            ₹{product.price}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mt-3">
          <button className="flex-1 bg-[#3A4980] text-white px-3 py-2 rounded-[15px] text-sm font-medium hover:bg-blue-700">
            Add To Cart
          </button>

          <button className="flex-1 border px-3 py-2 rounded-[15px] text-sm font-medium hover:bg-gray-100">
            Add Shortlist
          </button>
        </div>

      </div>
    </div>
  );
}
