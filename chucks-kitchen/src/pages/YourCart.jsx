import React, { useState } from "react";
import NavBar from "../components/NavBar";
import jollof2 from "../assets/jollof2.png";
import snail1 from "../assets/snail1.png";
import egusi from "../assets/egusi.png";

const initialCart = [
  {
    id: 1,
    name: "Jollof Rice & Fried Chicken",
    desc: "With plantain, extra pepper sauce",
    price: 3500,
    image: jollof2,
    qty: 1,
  },
  {
    id: 2,
    name: "Jollof Rice & Fried Chicken",
    desc: "With plantain, extra pepper sauce",
    price: 3500,
    image: egusi,
    qty: 1,
  },
  {
    id: 3,
    name: "Jollof Rice & Fried Chicken",
    desc: "With plantain, extra pepper sauce",
    price: 3500,
    image: snail1,
    qty: 1,
  },
  {
    id: 4,
    name: "Jollof Rice & Fried Chicken",
    desc: "With plantain, extra pepper sauce",
    price: 3500,
    image: jollof2,
    qty: 1,
  },
];

const YourCart = () => {
  const [cart, setCart] = useState(initialCart);

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <NavBar />
      <div className="bg-[#F3F4F6] py-20">
        <div className="container">
          <div className="bg-[#FFFFFF] w-full py-5.25 px-2.5 rounded-sm">
            <h2 className="text-[32px] text-[#000000] font-bold mb-4">
              Your Cart
            </h2>

            <div className="space-y-4 md:hidden">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="border-[0.5px] border-[#BDBDBD] rounded-[5px] shadow-sm 
             p-4 md:px-6 md:h-[187.93px] 
             flex flex-col md:flex-row md:items-center md:justify-between"
                >
                  {/* LEFT SECTION */}
                  <div className="flex gap-4 w-full md:w-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 md:w-47.5 md:h-[173.93px] object-cover rounded-md"
                    />

                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-[#1F2937] md:text-[#000000] text-[16px] md:text-[24px]">
                          {item.name}
                        </h3>
                        <p className="text-[#4B5563] text-[14px] md:text-[20px]">
                          {item.desc}
                        </p>
                      </div>

                      {/* PRICE (mobile only) */}
                      <p className="text-orange-500 font-semibold mt-2 md:hidden">
                        ₦{item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT SECTION */}
                  <div className="flex items-center justify-between md:justify-end gap-4 mt-4 md:mt-0 w-full md:w-auto">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="w-7 h-7 flex items-center justify-center font-bold bg-[#BDBDBD] rounded-lg"
                      >
                        +
                      </button>

                      <span className="text-[24px] md:text-[32px] font-medium w-6 text-center">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="w-7 h-7 flex items-center justify-center font-bold bg-[#BDBDBD] rounded-lg"
                      >
                        −
                      </button>
                    </div>

                    {/* PRICE (desktop only) */}
                    <p className="hidden md:block text-[#FF7A18] font-bold text-[24px]">
                      ₦{item.price.toLocaleString()}
                    </p>

                    {/* REMOVE BUTTON */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-8 h-8 flex items-center justify-center bg-[#FF7A18] text-white rounded"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 hidden md:block">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="border-[0.5px] border-[#BDBDBD] rounded-[5px] shadow-sm 
             p-4 md:px-6 md:h-[187.93px] 
             flex items-center justify-between"
                >
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 md:w-47.5 md:h-[173.93px] object-cover rounded-md"
                    />

                    <div className="mt-10">
                      <h3 className="font-bold text-[#000000] text-[24px]">
                        {item.name}
                      </h3>
                      <p className="text-[#4B5563] text-[20px]">{item.desc}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-7">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-8">
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="w-7 h-7 flex items-center justify-center font-bold bg-[#BDBDBD] rounded-lg"
                      >
                        +
                      </button>

                      <span className="text-[24px] md:text-[32px] font-medium w-6 text-center">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="w-7 h-7 flex items-center justify-center font-bold bg-[#BDBDBD] rounded-lg"
                      >
                        −
                      </button>
                    </div>

                    {/* PRICE (desktop only) */}
                    <p className="hidden md:block text-[#FF7A18] font-bold text-[24px]">
                      ₦{item.price.toLocaleString()}
                    </p>

                    {/* REMOVE BUTTON */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-8 h-8 flex items-center justify-center bg-[#FF7A18] text-white rounded"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ADD MORE */}
            <button className="flex items-center gap-2 text-[#1E88E5] text-[16px] mt-6 font-medium">
              <span className="text-2xl">+</span>
              Add more items from Chuks Kitchen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourCart;
