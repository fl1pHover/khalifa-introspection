"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import useCartStore from "@/store/cartState";
import { ProductType } from "@/types/cart";

export default function ProductCard({ product }: { product: ProductType }) {
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
      categoryTitle: product.categoryTitle,
    });
    console.log(product);
  };

  return (
    <div key={product.id} className="flex gap-3 p-4 bg-slate-200 flex-col">
      <Link href={`/product/${product.id}`} className="flex flex-col gap-3">
        <span>title: {product.title}</span>
        <span className="text-red-500 font-bold">{product.categoryTitle}</span>
        <span className="font-bold">{product.price} MNT</span>
      </Link>

      <Button onClick={handleAddToCart} className="mt-2">
        Add to Cart
      </Button>
    </div>
  );
}
