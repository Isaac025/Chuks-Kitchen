import React from "react";
import jollof from "../assets/jollof.png";
import jollof1 from "../assets/jollof1.png";
import catfish from "../assets/catfish.png";
import swallow2 from "../assets/swallow2.png";

const ChefSpecials = () => {
  const specials = [
    {
      id: 1,
      name: "Spicy Tilapia Pepper Soup",
      description:
        "A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.",
      price: 3500,
      image: catfish,
    },
    {
      id: 2,
      name: "Jollof Rice & Fried Chicken",
      description:
        "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      price: 3500,
      image: jollof,
    },
    {
      id: 3,
      name: "Jollof Rice & Fried Chicken",
      description:
        "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      price: 3500,
      image: jollof,
    },
    {
      id: 4,
      name: "Jollof Rice & Fried Chicken",
      description:
        "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      price: 3500,
      image: jollof,
    },
    {
      id: 5,
      name: "Jollof Rice & Fried Chicken",
      description:
        "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      price: 3500,
      image: jollof1,
    },
    {
      id: 6,
      name: "Egusi Soup & Pounded Yam",
      description:
        "Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.",
      price: 3500,
      image: swallow2,
    },
  ];

  return (
    <div className="bg-[#F3F4F6]">
      <div className="container py-10">
        <h1 className="text-[32px] font-bold text-[#1F2937] text-center mb-4">
          Chef's Specials
        </h1>
        <div className="flex flex-col md:flex-row md:flex-wrap items-center md:justify-between gap-5">
          {specials.map((special) => (
            <div
              key={special.id}
              className="bg-white rounded-[14px] shadow-md overflow-hidden w-90  md:w-80 h-100"
            >
              <img
                src={special.image}
                alt={special.name}
                className="w-full h-48 object-cover rounded-tl-[14px] rounded-tr-[14px]"
              />
              <div className="px-4.25 py-3">
                <h2 className="text-[20px] font-semibold  text-[#1F2937]">
                  {special.name}
                </h2>
                <p className="text-[#1F2937] font-medium text-[16px] mt-2 mb-5">
                  {special.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-[#FF7A18] font-medium text-[16px]">
                    ₦{special.price}
                  </p>
                  <button className="bg-[#FF7A18] w-40 h-13.5 rounded-[10px] text-[#FFFFFF] text-[16px] font-semibold">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefSpecials;
