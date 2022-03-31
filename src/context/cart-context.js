import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: [],
  addItems: () => {},
  removeItem: () => {},
  showCartHandler: () => {},
  showCart: false,
});

export default CartContext;
