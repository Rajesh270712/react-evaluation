import React, { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart,setCart] = React.useState(0)

  function handleCart(val){
    setCart(cart+val)
  }

  return <CartContext.Provider value={{cart,handleCart}} >{children}</CartContext.Provider>;
};
