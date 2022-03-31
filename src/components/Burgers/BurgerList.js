import React from "react";
import BurgerItem from "./BurgerItem";

const BurgerList = () => {
  const burger = [
    {
      id: "b1",
      name: "Chicken Burger",
      img: "/images/chickenBurger.svg",
      description: "200 gr chicken + cheese  Lettuce + tomato",
      price: 22,
    },
    {
      id: "b2",
      name: "Cheese Burger",
      img: "/images/cheeseBurger.svg",
      description: "200 gr meat + Lettuce cheese + onion + tomato ",
      price: 25,
    },
    {
      id: "b3",
      name: "Double Burger",
      img: "/images/doublePatty.svg",
      description: "200 gr meat + Lettuce cheese + onion + tomato ",
      price: 25,
    },
    {
      id: "b4",
      name: "Chili Cheese Burger",
      img: "/images/chickenBurger.svg",
      description: "200 gr meat + Lettuce cheese + onion + tomato ",
      price: 25,
    },
    {
      id: "b5",
      name: "BBQ Cheese Burger",
      img: "/images/cheeseBurger.svg",
      description: "200 gr meat + Lettuce cheese + onion + tomato ",
      price: 25,
    },
    {
      id: "b6",
      name: "Pastrami Burger",
      img: "/images/doublePatty.svg",
      description: "200 gr meat + Lettuce cheese + onion + tomato ",
      price: 25,
    },
    {
      id: "b7",
      name: "SIX SIX ONE",
      img: "/images/chickenBurger.svg",
      description: "200 gr meat + Lettuce cheese + onion + tomato ",
      price: 25,
    },
  ];

  return (
    <ul className="grid grid-cols-4 gap-[2.5rem]">
      {burger.map((burger) => (
        <BurgerItem
          key={burger.id}
          id={burger.id}
          img={burger.img}
          name={burger.name}
          description={burger.description}
          price={burger.price}
        />
      ))}
    </ul>
  );
};

export default BurgerList;
