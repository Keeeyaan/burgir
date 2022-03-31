import React, { useContext } from "react";
import Modal from "../UI/Modal";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";

const Cart = () => {
  const { showCartHandler, items, totalAmount, addItems, removeItem } =
    useContext(CartContext);

  const cartItemAddHandler = (item) => {
    addItems({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };

  const cartItemList = (
    <ul className="list-none max-h-[30rem] overflow-auto">
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          img={item.img}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          // onAdd={() => cartItemAddHandler(item)}  <-- Other method, using anonymous function
          onRemove={() => cartItemRemoveHandler(item.id)}
        />
      ))}
    </ul>
  );

  return (
    <React.Fragment>
      <Modal className="p-[1rem]">
        <div className="border-black pb-[0.5rem] w-full flex items-center border-b-[1px] border-solid">
          <AiOutlineShoppingCart className="mr-[1rem] text-[2rem] font-bold" />
          <h1 className="text-[1.2rem] font-bold">Your Cart</h1>
        </div>
        {cartItemList}
        <div className="flex justify-end  my-4">
          <h1 className="text-[1.5rem] font-semibold">
            Total: ${totalAmount.toFixed(2)}
          </h1>
        </div>
        <div className="flex justify-end ">
          <button
            type="button"
            onClick={showCartHandler}
            className="h-[2.2rem] w-[5rem] mr-5 rounded-[12px] justify-center text-white font-semibold items-center flex bg-[#f84848]"
          >
            <small className="text-[0.9rem]">Close</small>
          </button>
          <button
            type="submit"
            className="h-[2.2rem] w-[5rem] rounded-[12px] justify-center text-white font-semibold items-center flex bg-[#ee8534]"
          >
            <small className="text-[0.9rem]">Order</small>
          </button>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default Cart;
