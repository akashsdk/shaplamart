// shop.tsx
"use client";
import React from "react";
import { UpOutlined } from "@ant-design/icons";

const Shop: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center border-t">
      <div className="w-[30%] mt-20">
        <button className="w-[80%] ml-[10%] flex justify-between items-center hover:text-blue-600">
          <p className="text-2xl">Categories</p>
          <UpOutlined />
        </button>
        <div className="w-[80%] ml-[10%] mt-5 flex flex-col justify-start items-start">
          <button>Accessories (22)</button>

          <button>Baby (10)</button>
        </div>
      </div>
      <div className="w-[70%] mt-20">Right</div>
    </div>
  );
};

export default Shop;
