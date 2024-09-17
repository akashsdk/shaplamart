"use client";
import React from "react";

import Img1 from "@/Data/Img/Index-4.webp";
import Img2 from "@/Data/Img/Index-5.webp";
import Image from "next/image";
import Link from "next/link";

const IndexTow: React.FC = () => {
  return (
    <div className="h-full mt-10 mb-10 flex flex-col mobile:flex-row items-center justify-between">
      {/* First Image Container */}
      <div className="h-auto  mobile:w-[46.25%] w-[95%] mobile:ml-[2.5%] bg-gray-200 rounded-2xl overflow-hidden group flex items-center justify-start">
        <div className="absolute z-20">
          <p className=" text-3xl ml-5 font-medium text-black font-serif">
            Suits <samp className="text-blue-600">&</samp> Formalwear
          </p>
          <div className="h-5" />
          <Link
            href="/shop"
            className="text-xl ml-5 font-serif p-2 border-[1px] border-black hover:border-blue-600 rounded-md hover:text-blue-600"
          >
            Shop Now
          </Link>
        </div>
        <Image
          alt=""
          src={Img1}
          className="rounded-2xl transition-transform duration-500 ease-in-out transform group-hover:scale-110"
        />
      </div>

      {/* Second Image Container */}
      <div className="h-auto  mobile:w-[46.25%] w-[95%] mobile:ml-[2.5%] mt-5 mobile:mr-[2.5%] mobile:mt-0 bg-gray-200 rounded-2xl overflow-hidden group flex items-center justify-start">
        <div className="absolute  z-20">
          <p className=" text-3xl ml-5 font-medium text-black font-serif">
            Tops <samp className="text-blue-600">&</samp> Gowns
          </p>
          <div className="h-5" />
          <Link
            href="/shop"
            className="text-xl ml-5 font-serif p-2 border-[1px] border-black hover:border-blue-600 rounded-md hover:text-blue-600"
          >
            Shop Now
          </Link>
        </div>
        <Image
          alt=""
          src={Img2}
          className="rounded-2xl transition-transform duration-500 ease-in-out transform group-hover:scale-110"
        />
      </div>
    </div>
  );
};

export default IndexTow;
