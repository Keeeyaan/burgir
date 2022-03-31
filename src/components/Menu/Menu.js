import React from "react";
import Burgers from "../Burgers/Burgers";

const Menu = () => {
  return (
    <React.Fragment>
      <div className=" bg-auto h-52 mb-10 bg-[#2e2e2e] items-center flex justify-center">
        <h1 className="font-bold text-4xl text-white">BURGER MENU</h1>
      </div>
      <Burgers />
    </React.Fragment>
  );
};

export default Menu;
