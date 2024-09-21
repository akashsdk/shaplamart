"use client";
import Link from "next/link";
import React from "react";
import { RightOutlined } from "@ant-design/icons";

interface HeaderCartProps {
    pageName: string;
  }

const HeaderCart: React.FC <HeaderCartProps> = ({pageName}) => {
  return (
    <div className="w-full h-[100px] tablet:h-[120px] bg-gray-200 flex flex-col justify-center items-center">
      <p className="text-2xl tablet:text-5xl font-medium font-serif">{pageName}</p>

      <div className="flex mt-3">
        <Link href='/' className="mr-3">Home</Link>
        <RightOutlined  className="mr-3"/>
        <p className="text-blue-600">{pageName}</p>
      </div>
    </div>
  );
};

export default HeaderCart;
