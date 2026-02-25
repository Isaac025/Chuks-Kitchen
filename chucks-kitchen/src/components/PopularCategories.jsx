import React from "react";
import jollof from "../assets/jollof.png";
import swallow from "../assets/swallow.png";
import grills from "../assets/grills.png";
import treat from "../assets/treat.png";
import swallow1 from "../assets/swallow1.png";
import grills1 from "../assets/grills1.png";

const PopularCategories = () => {
  const categories = [
    { id: 1, name: "Jollof Delights", image: jollof },
    { id: 2, name: "Swallow & Soups", image: swallow },
    { id: 3, name: "Grills & BBQ", image: grills },
    { id: 4, name: "Sweet Treats", image: treat },
    { id: 5, name: "Jollof Delights", image: swallow1 },
    { id: 6, name: "Jollof Delights", image: grills1 },
  ];

  return (
    <div className="bg-[#F3F4F6]">
      <div className="container py-8">
        <h2 className="font-bold text-[24px] md:text-[32px] text-[#1F2937] text-center mb-5">
          Popular Categories
        </h2>
        <div className="flex flex-col md:flex-row md:flex-wrap items-center md:justify-between gap-5">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-[14px] shadow-md overflow-hidden w-90 h-65 md:w-80 md:h-90"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-55.5 object-cover rounded-tl-[14px] rounded-tr-[14px]"
              />
              <h3 className="md:mt-10 text-[14px] md:text-[24px] font-semibold text-[#1F2937] text-center ">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
        <p className="text-center text-[#1E88E5] font-normal text-[16px] mt-3">
          View All Categories
        </p>
      </div>
    </div>
  );
};

export default PopularCategories;
