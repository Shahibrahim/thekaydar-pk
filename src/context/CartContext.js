// src/context/CartContext.js
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const localData = localStorage.getItem("cartItems");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

const clearCart = () => {
  setCartItems([]);
};

const addToCart = (product, quantity = 1, replace = false) => {
  const existing = cartItems.find((item) => item._id === product._id);
  if (existing) {
    const updated = cartItems.map((item) =>
      item._id === product._id
        ? {
            ...item,
            quantity: replace ? quantity : item.quantity + quantity,
            subtotal: (replace ? quantity : item.quantity + quantity) * item.price,
          }
        : item
    );
    setCartItems(updated);
  } else {
    setCartItems([
      ...cartItems,
      {
        ...product,
        quantity,
        subtotal: product.price * quantity,
      },
    ]);
  }
};


  const updateQuantity = (productId, newQuantity) => {
    const updated = cartItems.map((item) =>
      item._id === productId
        ? {
            ...item,
            quantity: newQuantity,
            subtotal: newQuantity * item.price,
          }
        : item
    );
    setCartItems(updated);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item._id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart , clearCart, }}>
      {children}
    </CartContext.Provider>
  );
};
