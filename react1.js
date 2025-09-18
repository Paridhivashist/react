
import React from "react";
import ProductCard from "./ProductCard";

export default function App() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* Passing product data as props */}
      <ProductCard name="iPhone 15" price="₹79,999" inStock={true} />
      <ProductCard name="Samsung Galaxy S23" price="₹69,999" inStock={false} />
      <ProductCard name="OnePlus 11R" price="₹44,999" inStock={true} />
    </div>
  );
}
import React from "react";

export default function ProductCard({ name, price, inStock }) {
  return (
    <div className="border rounded-2xl shadow-md p-4 text-center hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-lg text-gray-700">{price}</p>
      <p
        className={`mt-2 font-semibold ${
          inStock ? "text-green-600" : "text-red-600"
        }`}
      >
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}

