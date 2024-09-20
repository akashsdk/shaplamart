
"use client";
import React, { useState } from "react";

const Banner: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="w-full h-[100px] mt-5 tablet:mt-10 overflow-hidden text-2xl bg-gray-200 py-3 flex justify-center items-center opacity-70">
      <div
        className="marquee"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`marquee-content ${isPaused ? "paused" : ""}`}
        >
          <span className="mx-10">• No final sale items</span>
          <span className="mx-10">• 100% Payment Secure</span>
          <span className="mx-10">• Online Support</span>
          <span className="mx-10">• Returns accepted for 7 days</span>
          <span className="mx-10">• Free return shipping</span>
          <span className="mx-10">• No restocking fee</span>
          {/* Duplicate content for smooth looping */}
          <span className="mx-10">• No final sale items</span>
          <span className="mx-10">• 100% Payment Secure</span>
          <span className="mx-10">• Online Support</span>
          <span className="mx-10">• Returns accepted for 7 days</span>
          <span className="mx-10">• Free return shipping</span>
          <span className="mx-10">• No restocking fee</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
