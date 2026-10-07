import { useMemo, useState } from "react";
import { CartContext } from "./cart-context.js";

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setItems((currentItems) => [...currentItems, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (indexToRemove) => {
    setItems((currentItems) =>
      currentItems.filter((_, index) => index !== indexToRemove),
    );
  };

  const value = useMemo(
    () => ({
      items,
      cartCount: items.length,
      addToCart,
      removeFromCart,
      isCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
    }),
    [items, isCartOpen],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
