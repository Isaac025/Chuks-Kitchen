import React from "react";
import { useState } from "react";
import NavBar from "../components/NavBar";
import food from "../assets/fooddetails.png";
import food1 from "../assets/fooddetails1.png";
import clock from "../assets/clock.png";

const FoodDetails = () => {
  const [protein, setProtein] = useState("fried");
  const [extra, setExtra] = useState("fries");

  return (
    <div>
      <NavBar />
      <div className="flex flex-col md:flex-row items-start md:gap-10 bg-[#F3F4F6]">
        <img
          src={food}
          alt="Food Details"
          className="w-165.25 h-265.25 object-cover hidden md:block"
        />
        <img
          src={food1}
          alt="Food Details"
          className="w-97.5 h-73.25  object-cover md:hidden"
        />
        <div className="bg-[#FFFFFF] w-full md:w-130 md:h-[1031.087890625px] relative p-5">
          <button className="absolute top-2 right-5 bg-[#000000] text-white px-3 ">
            x
          </button>
          <h1 className="font-semibold md:font-bold text-[#000000] mt-8 text-[24px] md:text-[32px] tracking-[0%] ">
            Jollof Rice with Fried Chicken
          </h1>
          <p className="text-[#FF7A18] text-[24px] font-semibold my-2">
            ₦2,800
          </p>
          <p className="text-[#000000] text-[16px] font-normal mb-5">
            Our signature Jollof rice, cooked to perfection with aromatic
            spices, served with juicy, golden-fried chicken. A classic Nigerian
            comfort food, rich in flavor and satisfying. Perfect for a quick
            lunch or a hearty dinner.
          </p>
          <div className="flex  items-center gap-3 flex-wrap md:flex-nowrap">
            <div className="flex items-center gap-2 bg-[#F3F4F6] md:bg-none py-1 px-1.5">
              <img src={clock} alt="Clock" />
              <p className="text-[#4B5563] text-[16px] md:text-[14px] font-normal">
                Mildly spicy
              </p>
            </div>
            <div className="flex items-center gap-2 bg-[#F3F4F6] md:bg-none py-1 px-1.5">
              <img src={clock} alt="Clock" />
              <p className="text-[#4B5563] text-[14px] font-normal">
                Vegetarian option available
              </p>
            </div>{" "}
            <div className="flex items-center gap-2 bg-[#F3F4F6] md:bg-none py-1 px-1.5">
              <img src={clock} alt="Clock" />
              <p className="text-[#1E88E5] text-[14px] font-normal">
                View Allergies
              </p>
            </div>
          </div>
          <h2 className="text-[#000000] text-[24px] font-medium mt-5 mb-3">
            Choose Your Protein
          </h2>
          <form className="space-y-4">
            {/* Fried Chicken */}
            <label className="flex items-center justify-between cursor-pointer border border-[#BDBDBD] py-2 px-2.75">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="protein"
                  value="fried"
                  checked={protein === "fried"}
                  onChange={(e) => setProtein(e.target.value)}
                  className="peer hidden"
                />
                <span className="w-5 h-5 rounded-full border-2 border-yellow-500 flex items-center justify-center peer-checked:bg-white peer-checked:border-[#FF7A18] bg-[#FF7A18]"></span>

                <span className="font-normal text-[16px] text-[#000000]">
                  Fried Chicken
                </span>
              </div>

              <span className="font-normal text-[16px] text-[#000000]">{`{Default}`}</span>
            </label>

            {/* Grilled Fish */}
            <label className="flex items-center justify-between cursor-pointer border border-[#BDBDBD] py-2 px-2.75">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="protein"
                  value="grilled"
                  checked={protein === "grilled"}
                  onChange={(e) => setProtein(e.target.value)}
                  className="peer hidden"
                />
                <span className="w-5 h-5 rounded-full border-2 border-yellow-500 flex items-center justify-center peer-checked:bg-white peer-checked:border-[#FF7A18] bg-[#FF7A18]"></span>
                <span className="font-normal text-[16px] text-[#000000]">
                  Grilled Fish
                </span>
              </div>

              <span className="font-normal text-[16px] text-[#000000]">
                +₦500
              </span>
            </label>

            {/* Beef */}
            <label className="flex items-center justify-between cursor-pointer border border-[#BDBDBD] py-2 px-2.75">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="protein"
                  value="beef"
                  checked={protein === "beef"}
                  onChange={(e) => setProtein(e.target.value)}
                  className="peer hidden"
                />
                <span className="w-5 h-5 rounded-full border-2 border-yellow-500 flex items-center justify-center peer-checked:bg-white peer-checked:[#FF7A18] bg-[#FF7A18]"></span>
                <span className="font-normal text-[16px] text-[#000000]">
                  Beef
                </span>
              </div>
              <span className="font-normal text-[16px] text-[#000000]">
                +₦700
              </span>
            </label>
          </form>
          <h2 className="text-[#000000] text-[24px] font-medium mt-5 mb-3">
            Extra Sides (Optional)
          </h2>
          <form className="space-y-4">
            {/* Fried Plantain */}
            <label className="flex items-center justify-between cursor-pointer border border-[#BDBDBD] py-2 px-2.75">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="extra"
                  value="fries"
                  checked={extra === "fries"}
                  onChange={(e) => setExtra(e.target.value)}
                  className="peer hidden"
                />
                <span className="w-8.25 h-8.25 rounded-md border-2 border-[#BDBDBD] flex items-center justify-center peer-checked:bg-white peer-checked:border-[#BDBDBD] bg-[#BDBDBD]"></span>

                <span className="font-normal text-[16px] text-[#000000]">
                  Fried Plantain
                </span>
              </div>

              <span className="font-normal text-[16px] text-[#000000]">
                +₦700
              </span>
            </label>

            {/* Coleslaw */}
            <label className="flex items-center justify-between cursor-pointer border border-[#BDBDBD] py-2 px-2.75">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="extra"
                  value="coleslaw"
                  checked={extra === "coleslaw"}
                  onChange={(e) => setExtra(e.target.value)}
                  className="peer hidden"
                />
                <span className="w-8.25 h-8.25 rounded-md border-2 border-[#BDBDBD] flex items-center justify-center peer-checked:bg-white peer-checked:border-[#BDBDBD] bg-[#BDBDBD]"></span>
                <span className="font-normal text-[16px] text-[#000000]">
                  Coleslaw
                </span>
              </div>

              <span className="font-normal text-[16px] text-[#000000]">
                +₦500
              </span>
            </label>

            {/* Etra Pepper Sauce */}
            <label className="flex items-center justify-between cursor-pointer border border-[#BDBDBD] py-2 px-2.75">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="extra"
                  value="pepper"
                  checked={extra === "pepper"}
                  onChange={(e) => setExtra(e.target.value)}
                  className="peer hidden"
                />
                <span className="w-8.25 h-8.25 rounded-md border-2 border-[#BDBDBD] flex items-center justify-center peer-checked:bg-white peer-checked:border-[#BDBDBD] bg-[#BDBDBD]"></span>
                <span className="font-normal text-[16px] text-[#000000]">
                  Extra Pepper Sauce
                </span>
              </div>
              <span className="font-normal text-[16px] text-[#000000]">
                +₦300
              </span>
            </label>
          </form>
          <h2 className="text-[#000000] text-[24px] font-medium mt-5 mb-3">
            Special Instructions
          </h2>
          <div className="border border-[#BDBDBD] w-full h-28 rounded-lg p-2.5 pb-13.5">
            <p className="text-[16px] font-medium text-[#000000]">
              E.g no onion, food is too spicy, food is too hot hhhhhhhhhh food
              is tasty
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
