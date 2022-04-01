import React from "react";
import BurgerList from "./BurgerList";
import Wrapper from "../UI/Wrapper";

const Burgers = () => {
  return (
    <Wrapper className="flex justify-center mb-[5rem]">
      <BurgerList />
    </Wrapper>
  );
};

export default Burgers;
