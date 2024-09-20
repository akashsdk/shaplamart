"use client";
import React, { useRef } from "react";
import LatestBlogCard from "../card/LatestBlogCard";

import Img1 from "@/Data/Img/blog-1_1200x.webp";
import Img2 from "@/Data/Img/blog-2_1200x.webp";
import Img3 from "@/Data/Img/blog-3_1200x.webp";
import Img4 from "@/Data/Img/blog-4_1200x.webp";
import Img5 from "@/Data/Img/blog-5_1200x.webp";
import Img6 from "@/Data/Img/blog-6_1200x.webp";

const LatestBlog: React.FC = () => {
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
    <div className="w-[97%] ml-[1.5%] mt-5 mb-5 tablet:mt-16 flex justify-center items-center flex-col">
      <p className="text-2xl tablet:text-4xl text-blue-600 font-serif">
        Latest Blog
      </p>

      <div className="mt-5 tablet:mt-10 relative w-full flex justify-center items-center">
        <button
          onClick={scrollLeft}
          className="absolute z-10 text-blue-500 text-[25px] left-10 border border-blue-600 p-2 rounded-lg hover:bg-blue-600 hover:text-white "
        >
          ◀
        </button>

        <div
          ref={scrollRef}
          className="w-full h-auto flex overflow-hidden overflow-x-scroll scroll-smooth space-x-5"
        >
          <div className="w-[205px] tablet:w-[310px] h-auto">
            <LatestBlogCard
              imageUrl={Img1}
              date="August 01, 2023"
              title="The Art of Layering: Creating Stylish and Functional Outfits."
            />
          </div>

          <div className="w-[205px] tablet:w-[310px] h-auto">
            <LatestBlogCard
              imageUrl={Img2}
              date="August 01, 2023"
              title="A Glimpse into Men's Fashion Trends: What's Hot & What's Not"
            />
          </div>

          <div className="w-[205px] tablet:w-[310px] h-auto">
            <LatestBlogCard
              imageUrl={Img3}
              date="August 01, 2023"
              title="Fashion Dos and Don'ts Every Woman Should Know That"
            />
          </div>

          <div className="w-[205px] tablet:w-[310px] h-auto">
            <LatestBlogCard
              imageUrl={Img4}
              date="August 01, 2023"
              title="Dressing to Impress: Men's Fashion for Special Occasions"
            />
          </div>

          <div className="w-[205px] tablet:w-[310px] h-auto">
            <LatestBlogCard
              imageUrl={Img5}
              date="August 01, 2023"
              title="The Best Affordable Fashion Brands for Women on a Budget"
            />
          </div>

          <div className="w-[205px] tablet:w-[310px] h-auto">
            <LatestBlogCard
              imageUrl={Img6}
              date="August 01, 2023"
              title="Essential Wardrobe Staples for Every Stylish Man"
            />
          </div>
        </div>

        <button
          onClick={scrollRight}
          className="absolute z-10 text-blue-500 text-[25px] right-10 border border-blue-600 p-2 rounded-lg hover:bg-blue-600 hover:text-white "
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default LatestBlog;
