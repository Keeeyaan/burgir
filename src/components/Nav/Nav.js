import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartContext from "../../context/cart-context";

const Nav = () => {
  const ctx = useContext(CartContext);

  const totalAmount = ctx.items.reduce((prev, curr) => {
    return prev + curr.amount;
  }, 0);

  return (
    <div className="flex justify-around h-20 items-center">
      <div className="flex items-center">
        <img src="/images/logo.svg" alt="burgir logo" />
        <h2 className="ml-4 mr-10 font-bold text-2xl">
          BUR<span className="text-amber-700">GIR</span>
        </h2>
        <button className="font-semibold cursor-pointer hover:text-amber-700">
          Home
        </button>
        <button className="px-6  font-semibold cursor-pointer">Menu</button>
        <button className=" font-semibold">Service</button>
      </div>
      <button className="flex items-center justify-center h-[3rem] w-[3rem]">
        <AiOutlineShoppingCart
          className="text-2xl "
          onClick={ctx.showCartHandler}
        />
        {totalAmount > 0 && (
          <div className="bg-[#fc5656] relative bottom-[0.7rem] text-white text-[14px] h-[24px] w-[24px] flex justify-center items-center rounded-[50%]">
            <span className="text-white font-semibold text-[12px]">
              {totalAmount}
            </span>
          </div>
        )}
      </button>
    </div>
  );
};

export default Nav;
