"use client";
import React from "react";

import Img1 from "@/Data/Img/Index-4.webp";
import Img2 from "@/Data/Img/Index-5.webp";
import Image from "next/image";
import Link from "next/link";

import Icon from "@/Data/SVG/Index Icon-1.svg";
import Icon2 from "@/Data/SVG/Index Icon-2.svg";
import Icon3 from "@/Data/SVG/Index Icon-3.svg";
import Icon4 from "@/Data/SVG/Index Icon-4.svg";

const IndexTow: React.FC = () => {
  return (
    <div className="w-full">
      <div className="h-full mt-10 mb-10 flex flex-col mobile:flex-row items-center justify-between">
        {/* First Image Container */}
        <div className="h-auto  mobile:w-[46.25%] w-[95%] mobile:ml-[2.5%] bg-gray-200 rounded-2xl overflow-hidden group flex items-center justify-start">
          <div className="absolute z-20">
            <p className=" text-3xl ml-5 font-medium text-black font-serif">
              Suits <samp className="text-blue-600">&</samp> Formalwear
            </p>
            <div className="h-5" />

            <Link href="/shop">
              <span className="ml-5 rounded px-5 py-2.5 overflow-hidden group bg-blue-600 relative hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-500transition-all ease-out duration-300 cursor-pointer">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Shop Now</span>
              </span>
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

            <Link href="/shop">
              <span className="ml-5 rounded px-5 py-2.5 overflow-hidden group bg-blue-600 relative hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-500transition-all ease-out duration-300 cursor-pointer">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Shop Now</span>
              </span>
            </Link>
          </div>
          <Image
            alt=""
            src={Img2}
            className="rounded-2xl transition-transform duration-500 ease-in-out transform group-hover:scale-110"
          />
        </div>
      </div>

      <div className="w-full flex flex-col tablet:flex-row justify-center items-center">
        <div className="w-full tablet:w-1/2 flex flex-col  mobile:flex-row items-center justify-evenly">
          <div className="flex">
            <Image alt="" src={Icon} className="h-[60px] w-[60px]" />
            <div className="ml-5">
              <p className="text-xl font-semibold font-serif">Free Shipping</p>
              <p>
                On orders over <span className="font-semibold">$99.</span>
              </p>
            </div>
          </div>

          <div className="flex mt-5 mobile:mt-0">
            <Image alt="" src={Icon2} className="h-[60px] w-[60px]" />
            <div className="ml-5">
              <p className="text-xl font-semibold font-serif">Money Back</p>
              <p>
              Money back in  <span className="font-semibold">7 Days.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mt-5 tablet:mt-0 tablet:w-1/2 flex flex-col  mobile:flex-row items-center justify-evenly">
          <div className="flex">
            <Image alt="" src={Icon3} className="h-[60px] w-[60px]" />
            <div className="ml-5">
              <p className="text-xl font-semibold font-serif">Secure Checkout</p>
              <p>
              <span className="font-semibold">100%</span> Payment Secure.
              </p>
            </div>
          </div>

          <div className="flex mt-5 mobile:mt-0">
            <Image alt="" src={Icon4} className="h-[60px] w-[60px]" />
            <div className="ml-5">
              <p className="text-xl font-semibold font-serif">Online Support</p>
              <p>
              Ensure the <span className="font-semibold">product</span> quality. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexTow;
