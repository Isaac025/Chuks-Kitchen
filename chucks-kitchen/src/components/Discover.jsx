import React from "react";

const Discover = () => {
  return (
    <div className="bgg1 w-full h-screen max-h-152.5 bg-cover bg-center">
      <div className="container">
        <div className="flex flex-col gap-5 text-[#FFFFFF] py-[30%] md:py-[15%]">
          <h1 className="font-extrabold text-[32px] md:text-[48px] md:w-[90%] ">
            Introducing Our New Menu Additions!
          </h1>
          <p className="text-[20px] md:text-[24px] font-semibold md:w-[60%]">
            Explore exciting new dishes, crafted with the freshest ingredients
            and authentic Nigerian flavors. Limited time offer!
          </p>
          <button className="bg-[#FF7A18] w-53.75 h-13.5 rounded-[10px] text-[16px] font-semibold ">
            Discover what’s new
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discover;
