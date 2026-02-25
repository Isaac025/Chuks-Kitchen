import React from "react";
import welcome from "../assets/rectangle.png";
import lock from "../assets/lock.png";
import { MdEmail } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center">
      <div className="w-1/2 h-256 relative hidden md:block">
        <img src={welcome} alt="Welcome" className=" object-cover " />
        <div className="absolute inset-0 bg-[#FF7A18B2] "></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-[#FFFFFF] font-bold text-[48px] ">
              Chuks Kitchen
            </h2>
            <p className="w-101  text-[#ffffff] text-[24px] font-medium">
              Your journey to delicious, authentic Nigerian meals starts here.
              Sign up or log in to order your favorites today!
            </p>
          </div>
        </div>
      </div>
      <div className="p-25">
        <h1 className="text-[40.81px]  text-[#FF7A18] font-['Island_Moments'] text-center">
          Chuks Kitchen
        </h1>
        <h1 className="text-[#000000] font-medium text-[24px] max-md:mb-2 text-center">
          Create Your Account
        </h1>
        <form>
          <label
            htmlFor="email"
            className="text-[#3B4758] font-medium text-[14px] block "
          >
            Email
          </label>
          <div className="relative">
            <MdEmail className="absolute left-4 top-5 w-4 h-4 text-[#000000]" />

            <input
              type="text"
              id="email"
              className="pl-10 border border-[#BDBDBD] rounded-lg w-87.5 md:w-112.5 h-13.5 outline-none placeholder-[#000000] text-[16px] font-normal"
              placeholder="name@gmail.com"
            />
          </div>
          <label
            htmlFor="email"
            className="text-[#3B4758] font-medium text-[14px] block mt-3 "
          >
            Phone number
          </label>
          <div className="relative">
            <FaPhoneAlt className="absolute left-4 top-5 w-4 h-4 text-[#000000]" />

            <input
              type="text"
              id="phone"
              className="pl-10 border border-[#BDBDBD] rounded-lg w-87.5 md:w-112.5 h-13.5 outline-none placeholder-[#000000] text-[16px] font-normal"
              placeholder="8012345678"
            />
          </div>
          <label
            htmlFor="password"
            className="text-[#3B4758] font-medium text-[14px] block mt-4"
          >
            Password
          </label>
          <div className="relative">
            <img
              src={lock}
              alt="Lock Icon"
              className="absolute left-4 top-5 w-4 h-4"
            />
            <input
              type="password"
              id="password"
              className="pl-10 border border-[#BDBDBD] rounded-lg w-87.5 md:w-112.5 h-13.5 outline-none placeholder-[#292535] text-[16px] font-normal"
              placeholder="QWE123#"
            />
            <FaEyeSlash className="absolute right-4 top-5 w-4 h-4" />
          </div>
          <label
            htmlFor="password"
            className="text-[#3B4758] font-medium text-[14px] block mt-4"
          >
            Confirm password
          </label>
          <div className="relative">
            <img
              src={lock}
              alt="Lock Icon"
              className="absolute left-4 top-5 w-4 h-4"
            />
            <input
              type="password"
              id="password"
              className="pl-10 border border-[#BDBDBD] rounded-lg w-87.5 md:w-112.5 h-13.5 outline-none placeholder-[#292535] text-[16px] font-normal"
              placeholder="QWE123#"
            />
            <FaEye className="absolute right-4 top-5 w-4 h-4" />
          </div>
          <div className=" flex items-center gap-2  mt-2">
            <input type="checkbox" id="terms" />
            <label
              htmlFor="terms"
              className="text-[14px] font-medium text-[#616161]"
            >
              I agree to the{" "}
              <span className="text-[#1E88E5]">Terms & Conditions</span> and{" "}
              <span className="text-[#1E88E5]">Privacy Policy</span>
            </label>
          </div>
          <button className="bg-[#FF7A18] w-87.5 md:w-112.5 h-15 rounded-[10px] text-[#FFFFFF] font-medium mt-6 mb-4 text-[16px]">
            Continue
          </button>
          <p className="text-center font-normal text-[12px] text-[#1F2937]">
            Or continue with
          </p>
          <button className="flex items-center justify-center w-87.5 md:w-112.5 h-12 border border-[#BDBDBD] rounded-md text-[14px] font-normal text-[#000000]  mt-4 mb-6">
            <FcGoogle className="mr-2 w-5 h-5" />
            Continue with Google
          </button>
          <button className="flex items-center justify-center w-87.5 md:w-112.5 h-12 border border-[#BDBDBD] rounded-md text-[14px] font-normal text-[#000000]   mb-4">
            <RiFacebookFill className=" w-5 h-5 text-[#337FFF]" />
            Continue with Facebook
          </button>
          <p className="text-center font-normal text-[12px] ">
            Already have an account?{" "}
            <span className="text-[#1C7FF9]">Sign In</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
