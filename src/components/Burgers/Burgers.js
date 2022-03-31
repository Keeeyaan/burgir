import React from "react";
import BurgerList from "./BurgerList";
import Wrapper from "../UI/Wrapper";

const Burgers = () => {
  return (
    <Wrapper className="flex justify-center">
      <BurgerList />
    </Wrapper>
  );
};

export default Burgers;
