import React from "react";
import Wrapper from "../../components/UI/Wrapper";
import Showcase from "./Showcase";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Wrapper className="mx-[20rem] mb-[4rem]">
      <div className="flex items-center justify-between my-[2rem] h-[40rem] w-full">
        <div>
          <h1 className="font-bold text-[3rem] uppercase mb-[1.5rem] text-[#bd6726]">
            The best classic burgers you will <bl /> ever find!
          </h1>
          <p className="font-bold text-[1.5rem] pb-[0.5rem] uppercase">
            Fresh & Delicious
          </p>
          <p className="pb-[1.5rem] leading-[1.7rem]">
            Ut sit sunt magna non tempor cillum anim anim quis dolore nisi. Elit
            mollit adipisicing minim excepteur labore minim sunt. Esse quis
            labore aliqua Lorem.
          </p>
          <div>
            <Link to="/menu">
              <button className="h-[2.8rem] bg-[#d68547] text-white font-semibold rounded w-[7rem]">
                Our Menu
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img className="w-[90rem]" src="/images/cheeseBurger.svg" />
        </div>
      </div>
      <Showcase />
    </Wrapper>
  );
};

export default Home;
