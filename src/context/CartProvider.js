import React, { useReducer, useState } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedTotalAmount = state.totalAmount + action.item.price;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    case "REMOVE":
      const removeExistingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const removeExistingCartItem = state.items[removeExistingCartItemIndex];
      
      const removeUpdatedTotalAmount = state.totalAmount - removeExistingCartItem.price;

      let removeUpdatedItems;

      if (removeExistingCartItem.amount === 1) {
        removeUpdatedItems = state.items.filter(
          (item) => item.id !== action.id
        );
      } else {
        const removeUpdatedItem = {
          ...removeExistingCartItem,
          amount: removeExistingCartItem.amount - 1,
        };
        removeUpdatedItems = [...state.items];
        removeUpdatedItems[removeExistingCartItemIndex] = removeUpdatedItem;
      }
      return {
        items: removeUpdatedItems,
        totalAmount: removeUpdatedTotalAmount,
      };

    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(showCart ? false : true);
  };

  const addItemsHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    showCartHandler,
    showCart,
    addItems: addItemsHandler,
    removeItem: removeItemHandler,
    items: cartState.items,
    totalAmount: cartState.totalAmount,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
