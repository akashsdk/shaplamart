"use client";
import React from "react";
import HeaderCart from "../card/HeaderCart";
import AboutUsScreen from "../Screen/AboutUsScreen";

const AboutUs: React.FC = () => {
  return (
    <div className="w-full">
      <HeaderCart pageName="About Us"/>

      <div className="w-full mt-5 tablet:mt-10">
      <AboutUsScreen />
      </div>
    </div>
  );
};

export default AboutUs;
