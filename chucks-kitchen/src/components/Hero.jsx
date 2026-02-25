import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="bgg w-full h-screen max-h-235.25 bg-cover bg-center pb-10">
      <div className="container">
        <div className="flex flex-col items-start justify-start translate-y-full md:translate-y-[70%]  gap-5 text-[#FFFFFF]">
          <h1 className="font-bold text-[32px] w-93.25 md:text-[48px] md:w-200">
            The Heart of Nigerian Home Cooking
          </h1>
          <p className="font-medium text-[16px] md:text-[32px] ">
            Handcrafted with passion, delivered with care.
          </p>
          <button className="w-53.75 h-13.5 bg-[#FF7A18] rounded-[10px]">
            Discover what’s new
          </button>
        </div>
        <div className="w-87.75 md:w-200 h-19.5 rounded-lg bg-[#FFFFFF]  md:ml-25 translate-y-[550%] md:translate-y-[320%] flex items-center gap-4 p-4">
          <IoSearchOutline className="text-[#807373] w-11.5 h-11.5" />
          <input
            type="text"
            placeholder="What are you craving for today?"
            className="border-none outline-none text-[#1F2937] text-[16px]  md:text-[24px] font-semibold w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
