"use client";
import React from "react";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  TikTokOutlined,
} from "@ant-design/icons";

import Img1 from "@/Data/Icon/bkash.png";
import Img2 from "@/Data/Icon/rocket.png";
import Img3 from "@/Data/Icon/Nagad.png";
import Img4 from "@/Data/Icon/upay.png";
import Img5 from "@/Data/Icon/cellfin.png";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="w-full h-auto bg-gray-200 ">
      <div className="w-full flex mb-16">
        <div className="w-1/2">
          <div className="w-[80%] ml-[10%] mt-16 flex flex-col items-start">
            <p className="text-2xl font-serif">About Us.</p>
            <p className="mt-4 opacity-60 w-[90%]">
              Shapla Mart E-Commerce is a dynamic and innovative online retail
              platform that offers a wide range of products to customers
              worldwide.
            </p>

            <div className="flex justify-center items-center mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 opacity-60 hover:opacity-100 hover:text-blue-500 cursor-pointer"
              >
                <FacebookOutlined className="text-[22px]" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 opacity-60 hover:opacity-100 hover:text-blue-500 cursor-pointer"
              >
                <TwitterOutlined className="text-[22px]" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 opacity-60 hover:opacity-100 hover:text-blue-500 cursor-pointer"
              >
                <InstagramOutlined className="text-[22px]" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 opacity-60 hover:opacity-100 hover:text-blue-500 cursor-pointer"
              >
                <YoutubeOutlined className="text-[22px]" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 opacity-60 hover:opacity-100 hover:text-blue-500 cursor-pointer"
              >
                <TikTokOutlined className="text-[22px]" />
              </a>
            </div>

            <p className="mt-4 text-lg font-serif">Guaranteed safe checkout</p>

            <div className="flex mt-2">
            <Image alt="" src={Img1} className="h-[40px] w-[55px] mr-2"/>
            <Image alt="" src={Img2} className="h-[40px] w-[55px] mr-2"/>
            <Image alt="" src={Img3} className="h-[40px] w-[55px] mr-2"/>
            <Image alt="" src={Img4} className="h-[40px] w-[55px] mr-2"/>
            <Image alt="" src={Img5} className="h-[40px] w-[55px] mr-2"/>
            </div>
          </div>
        </div>

        <div className="w-1/2">
        left
        </div>
      </div>

      <div className="h-[80px] w-full border border-t border-slate-400 flex justify-center items-center">
        <p>
          <span className="opacity-60">&copy; {new Date().getFullYear()}</span>{" "}
          <span className="opacity-100">ShaplaMart.</span>{" "}
          <samp className="opacity-60"> All rights reserved.</samp>
        </p>
      </div>
    </div>
  );
};

export default Footer;
