"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import useCartStore from "@/store/cartState";

import { Trash } from "lucide-react";
import ShoppingCartIcon from "../shopping-cart-icon";

export default function Cart({
  openCart,
  setOpenCart,
}: {
  openCart: boolean;
  setOpenCart: (open: boolean) => void;
}) {
  const { cart, removeFromCart } = useCartStore();

  return (
    <Drawer direction="right" open={openCart} onOpenChange={setOpenCart}>
      <DrawerTrigger asChild>
        <Button className="flex flex-col items-center px-4 py-0 gap-0.5 group w-fit">
          <ShoppingCartIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>asdasd</DrawerTitle>
        </DrawerHeader>

        {cart.length === 0 ? (
          <p className="p-4 text-center text-gray-500">Cart is empty</p>
        ) : (
          cart.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-between items-center bg-slate-100 p-3 rounded border-b"
              >
                <div className="">
                  <div>
                    <p className="font-medium">{item.title}</p>
                  </div>

                  <div className="flex gap-2 flex-col">
                    <span className="bold">Category: {item.categoryTitle}</span>
                    <span>Quantity: {item.quantity}</span>
                    <span>Price: {item.price} MNT</span>
                  </div>
                </div>
                <Button
                  variant={"destructive"}
                  onClick={() => removeFromCart(item)}
                >
                  <Trash />
                </Button>
              </div>
            );
          })
        )}
      </DrawerContent>
    </Drawer>
  );
}
