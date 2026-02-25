import React from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="container flex items-center justify-between py-4">
      <h1 className="text-[40.81px]  text-[#FF7A18] font-['Island_Moments'] ">
        Chuks Kitchen
      </h1>
      <div className="md:flex items-center md:gap-20 font-medium text-[16px] text-[#1F2937] hidden ">
        <Link className="hover:text-[#FF7A18]">Home</Link>
        <Link className="hover:text-[#FF7A18]">Explore</Link>
        <Link className="hover:text-[#FF7A18]">My Orders</Link>
        <Link className="hover:text-[#FF7A18]">Account</Link>
      </div>

      <MdMenu className="w-6 h-6 md:hidden" />
      <button className="bg-[#FF7A18] rounded-[10px] text-white w-40 h-13.5 text-[16px] font-semibold hidden md:block">
        Login
      </button>
    </div>
  );
};

export default NavBar;
