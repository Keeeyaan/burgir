import React, { useContext } from "react";
import CartContext from "../../context/cart-context";

const Showcase = () => {
  const { items } = useContext(CartContext);

  console.log(items);
  return (
    <React.Fragment>
      <h1 className="text-center font-semibold text-[2rem] mb-[2rem]">
        OUR TRENDING ORDERS
      </h1>
      <div className="flex justify-center gap-[1rem]">
        <div className="flex justify-center">
          <li className="shadow-xl rounded-lg flex flex-col justify-between h-[16rem] w-[13rem] text-center p-1">
            <div className="mx-[auto] m-3 flex justify-center bg-[#7c7c7c27] rounded-2xl h-[8rem] w-[8rem]">
              <img
                className="w-[100%]"
                src="/images/cheeseBurger.svg"
                alt="burger"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold">Cheese Burger</h2>
              <p className="text-xs mx-2">
                200 gr meat + Lettuce cheese + onion + tomato
              </p>
            </div>
            <div className="flex justify-center items-center">
              <p className="ml-3 text-x font-semibold ">$25.00</p>
            </div>
          </li>
        </div>
        <div className="flex justify-center">
          <li className="shadow-xl rounded-lg flex flex-col justify-between h-[16rem] w-[13rem] text-center p-1">
            <div className="mx-[auto] m-3 flex justify-center bg-[#7c7c7c27] rounded-2xl h-[8rem] w-[8rem]">
              <img
                className="w-[100%]"
                src="/images/doublePatty.svg"
                alt="burger"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold">Cheese Burger</h2>
              <p className="text-xs mx-2">
                200 gr meat + Lettuce cheese + onion + tomato
              </p>
            </div>
            <div className="flex justify-center items-center">
              <p className="ml-3 text-x font-semibold ">$25.00</p>
            </div>
          </li>
        </div>
        <div className="flex justify-center">
          <li className="shadow-xl rounded-lg flex flex-col justify-between h-[16rem] w-[13rem] text-center p-1">
            <div className="mx-[auto] m-3 flex justify-center bg-[#7c7c7c27] rounded-2xl h-[8rem] w-[8rem]">
              <img
                className="w-[100%]"
                src="/images/chickenBurger.svg"
                alt="burger"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold">Cheese Burger</h2>
              <p className="text-xs mx-2">
                200 gr meat + Lettuce cheese + onion + tomato
              </p>
            </div>
            <div className="flex justify-center items-center">
              <p className="ml-3 text-x font-semibold ">$25.00</p>
            </div>
          </li>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Showcase;
