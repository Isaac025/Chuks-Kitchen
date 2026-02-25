import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="hidden md:block bg-[#5a3b2e] h-112.25 py-16.25 px-27.5 text-white  relative">
      <div className=" flex  gap-25 flex-wrap">
        {/* Brand */}
        <div className="w-[250.25px] font-normal">
          <h2 className="text-[37.02px]  text-[#FF7A18] font-['Island_Moments'] ">
            Chuks Kitchen
          </h2>
          <p className="leading-9 text-[24px] text-start text-[#FFFFFF]">
            Bringing the authentic flavors of Nigerian home cooking to your
            table, with passion and care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-normal text-[24px] mb-3 text-[#ffffff] font-['jost']">
            Quick Links
          </h3>
          <ul className="space-y-2 mt-5 text-[#FFFFFF] text-[12px] font-normal font-['Poppins']">
            <li className="hover:opacity-70 cursor-pointer">Home</li>
            <li className="hover:opacity-70 cursor-pointer">Explore</li>
            <li className="hover:opacity-70 cursor-pointer">My Order</li>
            <li className="hover:opacity-70 cursor-pointer">Account</li>
            <li className="hover:opacity-70 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-normal text-[24px] mb-3 text-[#ffffff] font-['jost']">
            Contact Us
          </h3>
          <p className="mb-1 text-[#FFFFFF] text-[12px] font-normal font-['Poppins']">
            +234 801 234 5678
          </p>
          <p className="mb-1 text-[#FFFFFF] text-[12px] font-normal font-['Poppins']">
            hello@chukskitchen.com
          </p>
          <p className="mb-1 text-[#FFFFFF] text-[12px] font-normal font-['Poppins']">
            123 Taste Blvd, Lagos, Nigeria
          </p>
        </div>

        {/* Socials */}
        <div>
          <ul className="space-y-2 mt-3 text-[#FFFFFF] text-[12px] font-normal font-['Poppins']">
            <li className="hover:opacity-70 cursor-pointer">Facebook</li>
            <li className="hover:opacity-70 cursor-pointer">Twitter</li>
            <li className="hover:opacity-70 cursor-pointer">LinkedIn</li>
            <li className="hover:opacity-70 cursor-pointer">Instagram</li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-10 flex justify-between items-center">
        <p className="text-[#FFFFFF] text-[12px] font-normal font-['Poppins'] opacity-80">
          © 2026 Lift Media. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="w-13 h-13 rounded-full bg-[#0081FE] flex items-center justify-center text-lg hover:scale-105 transition"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
