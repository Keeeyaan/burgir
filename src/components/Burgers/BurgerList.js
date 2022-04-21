import React, { useCallback, useEffect, useState } from "react";
import BurgerItem from "./BurgerItem";

const BurgerList = () => {
  const [burgers, setBugers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBurgersHandler = useCallback(async () => {
    setIsLoading(true);
    setIsError(null);

    try {
      const res = await fetch(
        `${FIREBASE_URL}/json`
      );
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await res.json();

      const loadedBugers = [];

      for (const key in data) {
        loadedBugers.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          img: data[key].img,
          price: data[key].price,
        });
      }
      setBugers(loadedBugers);
    } catch (error) {
      setIsError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchBurgersHandler();
  }, [fetchBurgersHandler]);

  let content = <p>No burgers available.</p>;

  if (burgers.length > 0) {
    content = burgers.map((burger) => (
      <BurgerItem
        key={burger.id}
        id={burger.id}
        img={burger.img}
        name={burger.name}
        description={burger.description}
        price={burger.price}
      />
    ));
  }

  if (isError) {
    content = <p className="text-center ">{isError}</p>;
  }

  if (isLoading) {
    content = <p className="text-center">Loading...</p>;
  }

  return <ul className="grid grid-cols-4 gap-[2.5rem]">{content}</ul>;
};

export default BurgerList;
