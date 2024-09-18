"use client";
import React, { useState } from "react";

import Img1 from "@/Data/Shopping-Data/Countdown_banner_4_570x.webp";
import Link from "next/link";

const BestOffer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("man");

  return (
    <div className="w-full h-auto mt-10 mb-10 bg-gray-200">
      <div className="w-1/2 h-[550px] flex flex-col justify-center items-center">
        <p className="text-3xl tablet:text-5xl font-medium text-black font-serif">
          Best Offer - Up to{" "}
          <samp className="text-blue-600 font-serif">50%</samp>
        </p>

        <p className="mt-5 opacity-60">Explore our latest New Arrivals & unlock discounts of up to 50% off!</p>

        <div className="flex mt-10">
            <div className="h-[80px] w-[80px] mr-1 bg-white rounded-lg flex flex-col justify-center items-center">
                <p className="text-2xl font-serif">50</p>
                <p className="opacity-70">Days</p>
            </div>

            <div className="h-[80px] w-[80px] mr-1 bg-white rounded-lg flex flex-col justify-center items-center">
                <p className="text-2xl font-serif">20</p>
                <p className="opacity-70">Hrs</p>
            </div>

            <div className="h-[80px] w-[80px] mr-1 bg-white rounded-lg flex flex-col justify-center items-center">
                <p className="text-2xl font-serif">49</p>
                <p className="opacity-70">Mins</p>
            </div>

            <div className="h-[80px] w-[80px] mr-1 bg-white rounded-lg flex flex-col justify-center items-center">
                <p className="text-2xl font-serif">59</p>
                <p className="opacity-70">Secs</p>
            </div>
        </div>

        <Link href='/shop' className="mt-10">Shop now</Link>
        
      </div>
    </div>
  );
};

export default BestOffer;
