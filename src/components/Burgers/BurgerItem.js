import React, { useContext } from "react";
import CartContext from "../../context/cart-context";
import { IoMdAddCircle } from "react-icons/io";

const BurgerItem = ({ id, img, name, description, price }) => {

  const { addItems } = useContext(CartContext);

  const addToCartHandler = () => {
    addItems({
      id: id,
      img: img,
      name: name,
      amount: 1,
      price: price,
    });
  };

  return (
    <li className="shadow-xl rounded-lg flex flex-col justify-between h-[16rem] w-[13rem] text-center p-1">
      <div className="mx-[auto] m-3 flex justify-center bg-[#7c7c7c27] rounded-2xl h-[8rem] w-[8rem]">
        <img className="w-[100%]" src={img} alt="burger" />
      </div>
      <div>
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-xs mx-2">{description}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="ml-3 text-x font-semibold ">${price.toFixed(2)}</p>
        <button onClick={addToCartHandler}>
          <IoMdAddCircle className="mr-3  text-2xl text-[#b45309]" />
        </button>
      </div>
    </li>
  );
};

export default BurgerItem;
