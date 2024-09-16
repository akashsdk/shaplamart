"use client";
import React, { useState, useEffect } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import Img1 from "@/Data/Img/Index-1.webp";
import Img2 from "@/Data/Img/Index-2.webp";
import Img3 from "@/Data/Img/Index-3.webp";
import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "Men Collection",
    description: "Style that Defines Your Identity.",
    image: Img2,
  },
  {
    title: "Women Collection",
    description: "Elevate Your Everyday Fashion Aesthetics.",
    image: Img1,
  },
  {
    title: "Baby Collection",
    description: "Enchanting Styles for Dreamy Souls.",
    image: Img3,
  },
];

const Index: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slider every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % collections.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(slideInterval);
  }, []);

  // Handlers for manual navigation
  const handlePrev = () => {
    setCurrentSlide(
      currentSlide === 0 ? collections.length - 1 : currentSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % collections.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen w-[95%] ml-[2.5%] rounded-2xl flex flex-col mobile:flex-row items-center mobile:justify-center justify-evenly bg-gray-200 relative group">
      {/* Left Button */}
      <button
        onClick={handlePrev}
        className="hidden tablet:block absolute left-8 p-1 border-2 border-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-blue-600 hover:bg-blue-600 hover:text-white"
      >
        <LeftOutlined className="text-[28px]" />
      </button>

      <div className="mobile:hidden flex justify-center items-end transition-all duration-500 ease-in-out">
        <Image
          alt={collections[currentSlide].title}
          src={collections[currentSlide].image}
          className="rounded-lg w-full"
        />
      </div>

      {/* Main Content */}
      <div className=" mobile:w-1/2 flex flex-col tablet:items-start space-y-4 transition-all duration-500 ease-in-out">
        <p className="mobile:ml-20 text-3xl tablet:text-5xl font-medium text-black font-serif">
          {collections[currentSlide].title}
        </p>
        <p className="mobile:ml-20 text-lg font-medium text-gray-600">
          {collections[currentSlide].description}
        </p>
        <Link
          href="/shop"
          className="mobile:ml-20 relative font-serif flex items-center justify-center px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-blue-700 hover:to-blue-600 hover:shadow-2xl hover:text-white"
        >
          Shop Now
        </Link>
      </div>

      {/* Image */}
      <div className="hidden mobile:flex mobile:w-1/2 ml-10 justify-center items-end transition-all duration-500 ease-in-out">
        <Image
          alt={collections[currentSlide].title}
          src={collections[currentSlide].image}
          className="rounded-lg w-[80%]"
        />
      </div>

      {/* Right Button */}
      <button
        onClick={handleNext}
        className="hidden tablet:block absolute right-8 p-1 border-2 border-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-blue-600 hover:bg-blue-600 hover:text-white"
      >
        <RightOutlined className="text-[28px]" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute w-[100px] flex justify-between bottom-10">
        {collections.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentSlide ? "bg-blue-600" : "bg-white"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Index;
