"use client";
import React, { useState } from "react";
import ShoppingCart from "../card/ShoppingCart";

import Img1 from "@/Data/Shopping-Data/metal-earring_1_600x.webp";
import Img2 from "@/Data/Shopping-Data/metal-earring_2_600x.webp";

const BestSelling: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Women");

  const tabStyles = (tab: string) => {
    return `cursor-pointer text-xl font-serif ${
      activeTab === tab ? "text-blue-600" : "text-black"
    }`;
  };

  return (
    <div className="w-[95%] ml-[2.5%] mt-16">
      <div className="w-full flex justify-between items-center">
        <p className="text-2xl tablet:text-4xl text-blue-600 font-serif">
          Best Selling
        </p>

        <div className="w-[20%] flex justify-between items-center">
          <div className="flex flex-col items-center">
            <button
              className={tabStyles("Men")}
              onClick={() => setActiveTab("Men")}
            >
              Men
            </button>
            {activeTab === "Men" && (
              <div className="w-10 h-[2px] bg-blue-600 mt-1"></div>
            )}
          </div>

          <div className="flex flex-col items-center">
            <button
              className={tabStyles("Women")}
              onClick={() => setActiveTab("Women")}
            >
              Women
            </button>
            {activeTab === "Women" && (
              <div className="w-10 h-[2px] bg-blue-600 mt-1"></div>
            )}
          </div>

          <div className="flex flex-col items-center">
            <button
              className={tabStyles("Baby")}
              onClick={() => setActiveTab("Baby")}
            >
              Baby
            </button>
            {activeTab === "Baby" && (
              <div className="w-10 h-[2px] bg-blue-600 mt-1"></div>
            )}
          </div>
        </div>
      </div>

      <div>
        <ShoppingCart
          id="1"
          categories="woman"
          name="Ma. Metal Earring with Topaz"
          originalPrice={15800} 
          discount={15} 
          imageUrl={Img1}
          imageUrl2={Img2}
          details="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        />
      </div>
    </div>
  );
};

export default BestSelling;
