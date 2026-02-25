import React from "react";
import welcome from "../assets/rectangle.png";
import fork from "../assets/fork.png";
import bus from "../assets/bus.png";
import meal from "../assets/meal1.png";

const welcomePage = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-start justify-center">
      <img
        src={welcome}
        alt="Welcome"
        className="w-1/2 h-256 object-cover hidden md:block"
      />
      <img src={meal} alt="" className="  md:hidden p-6" />
      <div className="max-w-143.5 w-full p-10">
        <div className="flex items-center justify-between ">
          <h1 className="text-[40.81px] hidden md:block text-[#FF7A18] font-['Island_Moments']">
            Chuks Kitchen
          </h1>
          <button className="md:w-40 md:h-13.5 w-29 h-11.5 border-2 border-[#1E88E5] text-[#1E88E5] text-[16px] font-semibold rounded-[10px] translate-x-[180%] md:translate-x-0">
            Sign In
          </button>
        </div>
        <div className="md:my-40 mt-3">
          <h1 className="text-[40.81px] text-center md:hidden text-[#FF7A18] font-['Island_Moments']">
            Chuks Kitchen
          </h1>
          <h1 className="font-bold text-[32px] text-[#1F2937]">
            Your Authentic Taste of Nigeria
          </h1>
          <p className="font-medium text-[16px] text-[#1F2937]  md:w-[110%] mt-3">
            Experience homemade flavors delivered fresh to your desk or home. We
            bring the rich culinary heritage of Nigeria right to your doorstep.
          </p>
          <div className="flex items-center flex-wrap justify-between my-10">
            <div className="flex items-center gap-3">
              <div className="bg-[#FFE1C4] h-11 w-11 rounded-[14px] flex items-center justify-center">
                <img src={fork} alt="Fork" />
              </div>
              <p>Freshly Prepared</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#FFE1C4] h-11 w-11 rounded-[14px] flex items-center justify-center">
                <img src={fork} alt="Fork" />
              </div>
              <p>Support Local Business</p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <div className="bg-[#FFE1C4] h-11 w-11 rounded-[14px] flex items-center justify-center">
                <img src={bus} alt="Bus" />
              </div>
              <p>Fast & Reliable Delivery</p>
            </div>
          </div>
          <button className="bg-[#FF7A18] w-full rounded-[10px] h-15 text-[#FFFFFF] mb-5 text-[16px] font-semibold">
            Start Your Order
          </button>
          <button className="rounded-[10px] w-full h-15 border-2 border-[#1E88E5] text-[#1E88E5] text-[16px] font-semibold">
            Learn More About Us
          </button>
        </div>
        <div className="md:flex items-center justify-center gap-3 hidden">
          <p className="text-[#1F2937] font-medium text-[14px] ">
            © 2026 Chuks Kitchen.
          </p>
          <p className="text-[#64B5F6] font-medium text-[14px] ">
            Privacy Policy
          </p>
          <p className="text-[#64B5F6] text-[14px] font-medium">
            Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default welcomePage;
