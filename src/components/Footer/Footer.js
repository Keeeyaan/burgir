import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex gap-2 flex-col items-center justify-center bg-[rgba(180,83,9,0.8)] h-[16rem] w-full">
      <div className="flex text-white text-[2rem] mt-10 justify-center">
        <AiFillTwitterCircle className="mr-[1rem]" />
        <FaFacebook className="mr-[1rem]" />
        <AiFillInstagram className="mb-2" />
      </div>
      <div className="flex text-white">
        <p className="mr-[1rem]">Home</p>
        <p className="mr-[1rem]">About</p>
        <p>Service</p>
      </div>
      <div className="flex text-white">
        <p className="mr-[1rem]">Terms Conditions</p>
        <p>Privacy Policy</p>
      </div>
      <p className="text-white mt-[2rem] font-light">© 2022 Burgir</p>
    </div>
  );
};

export default Footer;
