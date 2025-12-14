export type ProductType = {
  id: number;
  title: string;
  quantity: number;
  categoryTitle: string | null;
  price: number | null;
};

export type CartItemType = ProductType & {
  quantity: number;
};

export type CartStoreStateType = {
  cart: CartItemType[];
};

export type CartStoreActionsType = {
  addToCart: (product: CartItemType) => void;
  removeFromCart: (product: CartItemType) => void;
  clearCart: () => void;
};
