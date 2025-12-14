"use client";

import useCartStore from "@/store/cartState";
import React from "react";

export default function ShoppingCartIcon() {
  const { cart } = useCartStore();
  return <div>Cart - {cart.reduce((acc, item) => acc + item.quantity, 0)}</div>;
}
