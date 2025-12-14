import { CartStoreActionsType, CartStoreStateType } from "@/types/cart";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
  persist(
    (set) => ({
      cart: [],
      hasHydrated: false,
      addToCart: (product) =>
        set((state) => {
          const existindIndex = state.cart.findIndex(
            (p) => p.id === product.id
          );
          if (existindIndex !== -1) {
            const updatedCart = [...state.cart];
            updatedCart[existindIndex].quantity += product.quantity || 1;
            return { cart: updatedCart };
          }
          return { cart: [...state.cart, product] };
        }),
      removeFromCart: (product) =>
        set((state) => ({
          cart: state.cart.filter((p) => p.id !== product.id),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;
