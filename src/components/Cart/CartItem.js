import React from "react";

const CartItem = ({ name, img, price, amount, onAdd, onRemove }) => {
  return (
    <li className="flex items-center justify-between  my-[1rem] border-b-[1px] border-solid border-black">
      <div className="flex items-center w-[11rem] justify-between ">
        <div className="w-[5rem]">
          <img src={img} alt="burger" />
        </div>
        <h1>${price.toFixed(2)}</h1>
      </div>
      <div className="flex w-[13rem] items-center justify-between">
        <h1>{name}</h1>
        <h1>x {amount}</h1>
      </div>
      <div className=" font-bold text-center items-center m-[0.5rem]">
        <button
          onClick={onRemove}
          className="px-[0.8rem] text-black rounded-lg mr-[0.5rem] items-center border-[1px] border-[#ee8534]"
        >
          -
        </button>
        <button
          onClick={onAdd}
          className="px-[0.8rem] text-white bg-[#ee8534] rounded-lg mr-[0.5rem] items-center border-[1px] border-[#ee8534]"
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
