"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LogIn: React.FC = () => {
  return (
    <div className=" w-full flex justify-center items-center">
      {/* Left-Box */}
      <div className="h-screen w-[50%] flex justify-center items-center flex-col">
        <p className="font-medium text-4xl">Sign In</p>
      </div>
      <div className="h-screen w-[50%] flex justify-center items-center flex-col">Right</div>
    </div>
  );
};

export default LogIn;
