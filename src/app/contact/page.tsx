"use client";
import React from "react";
import HeaderCart from "../card/HeaderCart";

const Contact: React.FC = () => {
  return (
    <div className="w-full">
      <HeaderCart pageName="Contact" />

      <div className="w-full mt-5 tablet:mt-16">
        <div className="w-full flex flex-col tablet:flex-row justify-around items-center">
          <div className="w-[90%] tablet:w-[28%] h-[150px] border flex flex-col justify-center items-center">
            <p className="text-2xl tablet:text-3xl font-medium font-serif">
              Email Address
            </p>
            <p className="text-xl opacity-60 mt-3">example@example.com</p>
          </div>

          <div className="w-[90%] tablet:w-[28%] mt-4 tablet:mt-0 h-[150px] border flex flex-col justify-center items-center">
            <p className="text-2xl tablet:text-3xl font-medium font-serif">Phone Number</p>
            <p className="text-xl opacity-60 mt-3">+0123-456789</p>
          </div>

          <div className="w-[90%] tablet:w-[28%] mt-4 tablet:mt-0 h-[150px] border flex flex-col justify-center items-center">
            <p className="text-2xl tablet:text-3xl font-medium font-serif">Office Address</p>
            <p className="text-xl opacity-60 mt-3 text-center">
              Your Street Address,
              City Name, State, 
              ZIP Code, Country.
            </p>
          </div>
        </div>

        <div className="w-[90%] h-auto mt-5 tablet:mt-16 ml-[5%] bg-gray-200 rounded-xl">
          <div className="p-[5%]">
            <p className="text-2xl tablet:text-3xl font-medium font-serif">Send Message</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
