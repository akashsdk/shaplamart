"use client";
import React from "react";
import HeaderCart from "../card/HeaderCart";

const PurchaseNow: React.FC = () => {
  return (
    <div className="w-full">
      <HeaderCart pageName="Purchase Now"/>

      <div className="w-full mt-5 tablet:mt-10">
      PurchaseNow
      </div>
    </div>
  );
};

export default PurchaseNow;
