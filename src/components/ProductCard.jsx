import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="w-full h-40 object-contain" />
      <h3 className="mt-4 text-gray-700 font-semibold">{product.title}</h3>
      <p className="text-gray-500 text-sm">{product.category}</p>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500">★★★★☆</span>
        <span className="ml-2 text-sm text-gray-500">(200)</span>
      </div>
      <div className="flex justify-between items-center mt-3">
        <span className="text-lg font-bold text-gray-800">₹{product.price}</span>
        <button className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
