"use client";

import React, { useState } from "react";
import {
  CloseOutlined,
  PlusOutlined,
  MinusOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { Checkbox } from "antd";

import Img1 from "@/Data/Shopping-Data/baby-dress_1.webp";
import Img2 from "@/Data/Shopping-Data/earring_2_600x.webp";
import Img3 from "@/Data/Shopping-Data/shirt_1.webp";

const Cart: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center border-t">
      <div className="w-[90%] mt-5 tablet:mt-10 border-b-2">
        <p className="text-3xl font-bold font-serif text-blue-600">Cart<samp className="text-3xl font-bold font-serif text-red-500">&apos;s</samp></p>
      </div>

      <div className="w-[90%] mt-5 tablet:mt-10 mb-5 p-2 border-b flex justify-between items-center">
        <div className="flex justify-center items-center">
          <Checkbox value="1"></Checkbox>
          <Image
            alt="product"
            src={Img1}
            className="ml-5 h-[80px] w-[80px] rounded-lg"
          />

          <div className="ml-5">
            <p className="text-xl text-blue-600 font-medium">Product Name</p>
            <p className="opacity-60">
              Size: <samp>2xl</samp>
            </p>
            <p className="text-xl text-red-400 font-serif">2300TK</p>
          </div>
        </div>

        <div className="ml-5 h-10 flex justify-center items-center border-2 p-2 rounded-md">
          <PlusOutlined className="text-2xl cursor-pointer hover:text-red-500" />
          <p className="text-2xl w-4 ml-2 mr-2">1</p>
          <MinusOutlined className="text-2xl cursor-pointer hover:text-red-500" />
        </div>

        <div className="flex flex-col justify-center items-end">
          <DeleteOutlined className="text-2xl cursor-pointer text-red-400 hover:text-red-500 mb-5" />
          <p>
            Sub Total: <span className="text-red-500">2300</span> TK.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
