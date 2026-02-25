import React from "react";
import jollof from "../assets/jollof.png";
import eba from "../assets/eba.png";
import poundedyam from "../assets/poundedyam.png";
import snail from "../assets/snail.png";
import tilapia from "../assets/tilapia.png";
import jollof1 from "../assets/jollof1.png";
import amala from "../assets/amala.png";
import okro from "../assets/okro.png";

const MenuCategories = () => {
  const popular = [
    {
      id: 1,
      title: "Jollof Rice & Fried Chicken",
      description:
        "Our signature Jollof rice, served with crispy fried chicken and plantain.",
      price: 3500,
      img: jollof,
    },
    {
      id: 2,
      title: "Eba & Egusi Soup (Goat Meat)",
      description:
        "Hearty Egusi soup with tender goat meat, served with soft Eba.",
      price: 3500,
      img: eba,
    },
    {
      id: 3,
      title: "Pounded Yam & Edikaikong",
      description: "Traditional pounded yam with rich, leafy Edikaikong soup.",
      price: 3800,
      img: poundedyam,
    },
    {
      id: 4,
      title: "Peppered Snail",
      description: "Spicy and savory peppered snail, perfect as a starter.",
      price: 2500,
      img: snail,
    },
    {
      id: 5,
      title: "Grilled Tilapia Fish",
      description: "Whole grilled tilapia seasoned with our special spices.",
      price: 4500,
      img: tilapia,
    },
    {
      id: 6,
      title: "Jollof Rice & Fried Chicken",
      description:
        "Our signature Jollof rice, served with crispy fried chicken and plantain.",
      price: 3500,
      img: jollof,
    },
  ];

  const jollofRiceEntrees = [
    {
      id: 1,
      title: "Jollof Rice & Smoked Fish",
      description: "Flavorful jollof rice served with perfectly smoked fish.",
      price: 3500,
      img: jollof1,
    },
    {
      id: 2,
      title: "Party Jollof Rice (Veg)",
      description: "Vegetarian party jollof, full of rich flavors.",
      price: 2800,
      img: jollof,
    },
    {
      id: 3,
      title: "Party Jollof Rice (Veg)",
      description: "Vegetarian party jollof, full of rich flavors.",
      price: 3500,
      img: jollof,
    },
  ];

  const swallowSoups = [
    {
      id: 1,
      title: "Amala with Gbegiri & Ewedu",
      description:
        "Classic Amala served with Gbegiri (beans) and Ewedu (jute leaf) soup.",
      price: 3100,
      img: amala,
    },
    {
      id: 2,
      title: "Fufu & Okra Soup (Fish)",
      description: "Light Fufu served with fresh okra soup and tilapia fish.",
      price: 3500,
      img: okro,
    },
    {
      id: 3,
      title: "Fufu & Okra Soup (Veg)",
      description: "Light Fufu served with fresh okra soup and vegetables.",
      price: 3500,
      img: okro,
    },
  ];

  return (
    <div className="bg-[#F3F4F6]">
      <div className="container">
        <div className="bg-[#FFFFFF] w-full rounded-tl-[14px] rounded-tr-[14px] py-6.5 px-5 text-[#000000]">
          <h2 className="font-semibold text-[24px] ">Menu Categories</h2>
          <ul className="text-[24px] font-medium tracking-[0%]">
            <li className="px-5 hover:bg-[#FFE1C4]  hover:border-l-4 hover:border-[#FF7A18]">
              Popular
            </li>
            <li className="px-5 hover:bg-[#FFE1C4]  hover:border-l-4 hover:border-[#FF7A18]">
              Jollof Rice & Entrees
            </li>
            <li className="px-5 hover:bg-[#FFE1C4]  hover:border-l-4 hover:border-[#FF7A18]">
              Swallow & Soups
            </li>
            <li className="px-5 hover:bg-[#FFE1C4]  hover:border-l-4 hover:border-[#FF7A18]">
              Grills & sides
            </li>
            <li className="px-5 hover:bg-[#FFE1C4]  hover:border-l-4 hover:border-[#FF7A18]">
              Beverages
            </li>
            <li className=" px-5 hover:bg-[#FFE1C4] hover:border-l-4 hover:border-[#FF7A18]">
              Desserts
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <h2 className="text-[16px] md:text-[32px] font-bold text-[#1F2937] mb-3">
            Popular
          </h2>
          <div className="flex flex-col md:flex-row md:flex-wrap items-center md:justify-between gap-5">
            {popular.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-md md:rounded-[14px] p-2 shadow-md overflow-hidden flex flex-row md:flex-col w-90 h-27.75 md:w-80 md:h-100"
              >
                <img
                  src={category.img}
                  alt={category.title}
                  className="w-[108.14px] md:w-[95%] h-24.75 md:h-55.5 object-cover rounded-[3.18px] md:rounded-tl-[14px] md:rounded-tr-[14px]"
                />
                <div>
                  <div className="md:mt-5 px-4.25  text-[#1F2937]">
                    <h3 className=" text-[16px] md:text-[20px] font-semibold ">
                      {category.title}
                    </h3>
                    <p className="text-[12px] md:text-[16px] font-medium">
                      {category.description}
                    </p>
                  </div>
                  <div className="flex md:mt-5 items-center justify-between px-4.25">
                    <p className="text-[#FF7A18]">{`₦${category.price.toLocaleString()}`}</p>
                    <button className="bg-[#FF7A18] text-[#ffffff] text-[16px] md:text-[30px] rounded-[100%] w-5 h-5 md:w-8 md:h-8 flex items-center justify-center">
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-[16px] md:text-[32px] font-bold text-[#1F2937] mb-3">
            Jollof Rice & Entrees
          </h2>
          <div className="flex flex-col md:flex-row md:flex-wrap items-center md:justify-between gap-5">
            {jollofRiceEntrees.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-md md:rounded-[14px] p-2 shadow-md overflow-hidden flex flex-row md:flex-col w-90 h-27.75 md:w-80 md:h-100"
              >
                <img
                  src={category.img}
                  alt={category.title}
                  className="w-[108.14px] md:w-[95%] h-24.75 md:h-55.5 object-cover rounded-[3.18px] md:rounded-tl-[14px] md:rounded-tr-[14px]"
                />
                <div>
                  <div className="md:mt-5 px-4.25  text-[#1F2937]">
                    <h3 className=" text-[16px] md:text-[20px] font-semibold ">
                      {category.title}
                    </h3>
                    <p className="text-[12px] md:text-[16px] font-medium">
                      {category.description}
                    </p>
                  </div>
                  <div className="flex md:mt-5 items-center justify-between px-4.25">
                    <p className="text-[#FF7A18]">{`₦${category.price.toLocaleString()}`}</p>
                    <button className="bg-[#FF7A18] text-[#ffffff] text-[16px] md:text-[30px] rounded-[100%] w-5 h-5 md:w-8 md:h-8 flex items-center justify-center">
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-[16px] md:text-[32px] font-bold text-[#1F2937] mb-3">
            Swallow & Soups
          </h2>
          <div className="flex flex-col md:flex-row md:flex-wrap items-center md:justify-between gap-5">
            {swallowSoups.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-md md:rounded-[14px] p-2 shadow-md overflow-hidden flex flex-row md:flex-col w-90 h-27.75 md:w-80 md:h-100"
              >
                <img
                  src={category.img}
                  alt={category.title}
                  className="w-[108.14px] md:w-[95%] h-24.75 md:h-55.5 object-cover rounded-[3.18px] md:rounded-tl-[14px] md:rounded-tr-[14px]"
                />
                <div>
                  <div className="md:mt-5 px-4.25  text-[#1F2937]">
                    <h3 className=" text-[16px] md:text-[20px] font-semibold ">
                      {category.title}
                    </h3>
                    <p className="text-[12px] md:text-[16px] font-medium">
                      {category.description}
                    </p>
                  </div>
                  <div className="flex md:mt-5 items-center justify-between px-4.25">
                    <p className="text-[#FF7A18]">{`₦${category.price.toLocaleString()}`}</p>
                    <button className="bg-[#FF7A18] text-[#ffffff] text-[16px] md:text-[30px] rounded-[100%] w-5 h-5 md:w-8 md:h-8 flex items-center justify-center">
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default MenuCategories;
