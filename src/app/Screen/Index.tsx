"use client";
import React from "react";

import { FacebookOutlined } from "@ant-design/icons";

import Img1 from "@/Data/Img/Index-1.webp";
import Image from "next/image";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen w-[95%] ml-[2.5%] rounded-2xl flex items-center justify-center bg-gray-200">
      <div className="flex flex-col items-start space-y-4">
        <p className="text-5xl font-medium text-black font-serif">Women Collection</p>
        <p className="text-lg font-medium text-gray-600">
          Elevate Your Everyday Fashion Aesthetics.
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition-all duration-300 ease-in-out">
          Shop Now
        </button>
      </div>

      <div className="ml-10">
        <Image alt="Women Collection Image" src={Img1} className="rounded-lg" />
      </div>
    </div>
  );
};

export default Index;
