'use client'
import React, { useState, createContext,useEffect} from "react";

const ContextProvider = createContext();

function AppProvider({ children }) {

    const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
  };


  return <ContextProvider.Provider value={values}>{children}</ContextProvider.Provider>;
}

export { ContextProvider, AppProvider };
