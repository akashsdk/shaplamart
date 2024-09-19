"use client";
import React, { useRef } from "react";

const NewArrivals: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300, // Adjust this value to control scroll distance
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300, // Adjust this value to control scroll distance
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="w-[100%] h-[350px] flex overflow-hidden overflow-x-scroll scroll-smooth space-x-5"
      >
        <div className="tablet:w-[300px] w-[200px] bg-red-500 flex-shrink-0"></div>
        <div className="h-[300px] w-[300px] bg-blue-500 flex-shrink-0"></div>
        <div className="h-[300px] w-[300px] bg-green-500 flex-shrink-0"></div>
        <div className="h-[300px] w-[300px] bg-yellow-500 flex-shrink-0"></div>
        <div className="h-[300px] w-[300px] bg-purple-500 flex-shrink-0"></div>
        <div className="h-[300px] w-[300px] bg-pink-500 flex-shrink-0"></div>
        <div className="h-[300px] w-[300px] bg-orange-500 flex-shrink-0"></div>
        <div className="h-[300px] w-[300px] bg-gray-500 flex-shrink-0"></div>
      </div>

      {/* Left button */}
      <button
        onClick={scrollLeft}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
      >
        ◀
      </button>

      {/* Right button */}
      <button
        onClick={scrollRight}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
      >
        ▶
      </button>
    </div>
  );
};

export default NewArrivals;
