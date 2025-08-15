"use client";
import React, { useState, createContext, useEffect } from "react";

const ContextProvider = createContext();

function AppProvider({ children }) {
  // ⏳ Countdown timer state
  const [now, setNow] = useState(2 * 24 * 60 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(now / (24 * 60 * 60));
  const hours = Math.floor((now % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((now % 3600) / 60);
  const seconds = now % 60;

  // 🎯 Show/hide toggle state
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow((prev) => !prev);

  // 🛒 Cart state — start empty, fill from localStorage after mount
  const [cart, setCart] = useState([]);

  // Load cart from localStorage after component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      const cartData = localStorage.getItem("cart");
      if (cartData) {
        setCart(JSON.parse(cartData));
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // 🛒 Cart operations
  const addToCart = (item) => {
    const isItemInCart = cart.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const reduceQuantity = (item) => {
    const isItemInCart = cart.find((cartItem) => cartItem.id === item.id);
    if (!isItemInCart) return;

    if (isItemInCart.quantity === 1) {
      setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const deleteProduct = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };

  const getCartTotal = () => {
    return cart.reduce(
      (total, item) => total + item.priceAfter * item.quantity,
      0
    );
  };

  // 💰 Currency formatter
  const currency = Intl.NumberFormat("EGP", {
    style: "currency",
    currency: "EGP",
  });

  // ✅ Values exposed to all components
  const values = {
    show,
    setShow,
    toggleShow,
    now,
    days,
    hours,
    minutes,
    seconds,
    cart,
    setCart,
    addToCart,
    reduceQuantity,
    deleteProduct,
    getCartTotal,
    currency,
  };

  return (
    <ContextProvider.Provider value={values}>
      {children}
    </ContextProvider.Provider>
  );
}

export { ContextProvider, AppProvider };
