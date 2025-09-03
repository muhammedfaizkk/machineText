import React from "react";
import ProductCard from "./ProductCard";

const products = Array(16).fill({
  image: "/assets/products/shoe.png",
  title: "Nike Shoes",
  category: "Sneakers",
  price: 1799,
});

export default function ProductGrid() {
  return (
    <section>
      <h2 className="text-xl font-bold mb-6">All Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        <button className="px-3 py-1 border rounded">1</button>
        <button className="px-3 py-1 border rounded bg-blue-600 text-white">2</button>
        <button className="px-3 py-1 border rounded">3</button>
        <button className="px-3 py-1 border rounded">Next</button>
      </div>
    </section>
  );
}
