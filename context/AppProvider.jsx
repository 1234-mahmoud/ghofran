"use client";
import React, { useState, createContext, useEffect } from "react";

const ContextProvider = createContext();

function AppProvider({ children }) {
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



  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };

  /*
  const [cart, setCart] = useState(
    localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : []
  );

  const addToCart = (item) => {

    const isItemInCart = cart.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
      );

    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const deleteFromCart = (item) => {
    const isItemInCart = cart.find((cartItem) => cartItem.id === item.id);

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

  const getCartTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

useEffect(() => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    setCart(JSON.parse(cart));
  }
}, []);
  const currency = Intl.NumberFormat("EGP", {
    style: "currency",
    currency: "EGP",
  });
*/
  const values = {
    show,
    setShow,
    toggleShow,
    now,
    days,
    hours,
    minutes,
    seconds,
  };

  return (
    <ContextProvider.Provider value={values}>
      {children}
    </ContextProvider.Provider>
  );
}

export { ContextProvider, AppProvider };
