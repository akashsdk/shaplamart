"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import Img1 from "@/Data/Shopping-Data/Countdown_banner_4_570x.webp";

const BestOffer: React.FC = () => {
  const initialTime = {
    days: 50,
    hours: 20,
    minutes: 49,
    seconds: 59,
  };

  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          minutes = 59;
          seconds = 59;
          hours--;
        } else if (days > 0) {
          hours = 23;
          minutes = 59;
          seconds = 59;
          days--;
        } else {
          return initialTime;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="w-full h-auto flex mt-10 mb-10 bg-gray-200">
      <div className="w-[95%] ml-[2.5%] tablet:ml-0 tablet:w-1/2 h-[550px] flex flex-col justify-center items-center">
        <p className="text-3xl tablet:text-5xl font-medium text-black font-serif">
          Best Offer - Up to{" "}
          <samp className="text-blue-600 font-serif">50%</samp>
        </p>

        <p className="mt-5 opacity-60">
          Explore our latest New Arrivals & unlock discounts of up to 50% off!
        </p>

        <div className="flex mt-5">
          <div className="h-[80px] w-[80px] mr-1 bg-white rounded-lg flex flex-col justify-center items-center">
            <p className="text-2xl font-serif">{timeLeft.days}</p>
            <p className="opacity-70">Days</p>
          </div>

          <div className="h-[80px] w-[80px] mr-1 bg-white rounded-lg flex flex-col justify-center items-center">
            <p className="text-2xl font-serif">{timeLeft.hours}</p>
            <p className="opacity-70">Hrs</p>
          </div>

          <div className="h-[80px] w-[80px] mr-1 bg-white rounded-lg flex flex-col justify-center items-center">
            <p className="text-2xl font-serif">{timeLeft.minutes}</p>
            <p className="opacity-70">Mins</p>
          </div>

          <div className="h-[80px] w-[80px] mr-1 bg-white rounded-lg flex flex-col justify-center items-center">
            <p className="text-2xl font-serif">{timeLeft.seconds}</p>
            <p className="opacity-70">Secs</p>
          </div>
        </div>

        <Link
          href="/shop"
          className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group mt-10"
        >
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Shop now
          </span>
        </Link>
      </div>

      <div className="w-1/2 h-[550px] hidden tablet:flex">
        <Image alt="" src={Img1} className="rounded-lg w-[80%] ml-[10%]" />
      </div>
    </div>
  );
};

export default BestOffer;
