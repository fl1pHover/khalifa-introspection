"use client";

import { ProductType } from "@/types/cart";
import ProductCard from "./product-card";

export default function ProductGrid({ products }: { products: ProductType[] }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.length !== 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="h-40 text-red-500">No products found.</div>
      )}
    </div>
  );
}
