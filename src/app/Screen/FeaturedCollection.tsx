"use client";
import React, { useRef } from "react";

import Link from "next/link";
import Image from "next/image";

import ShoppingCart from "../card/ShoppingCart";

import Img1 from "@/Data/Shopping-Data/metal-earring_1_600x.webp";
import Img2 from "@/Data/Shopping-Data/metal-earring_2_600x.webp";
import Img3 from "@/Data/Shopping-Data/soap_1_1024x1024.webp";
import Img4 from "@/Data/Shopping-Data/soap_2_600x.webp";
import Img5 from "@/Data/Shopping-Data/TheHydratingMoisturizer_600x.webp";
import Img16 from "@/Data/Shopping-Data/shirt_1.webp";
import Img17 from "@/Data/Shopping-Data/shirt_2_600x.webp";
import Img18 from "@/Data/Shopping-Data/blueshoe_1.webp";
import Img19 from "@/Data/Shopping-Data/blueshoe_2_600x.webp";
import Img26 from "@/Data/Shopping-Data/baby-hat_1.webp";
import Img27 from "@/Data/Shopping-Data/baby-hat_2_600x.webp";
import Img28 from "@/Data/Shopping-Data/baby_1.webp";
import Img29 from "@/Data/Shopping-Data/baby_2_600x.webp";

const FeaturedCollection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Function to handle scroll left and right
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth;
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="w-full mt-5 tablet:mt-16 flex justify-center items-center flex-col">
      <p className="text-2xl tablet:text-4xl text-blue-600 font-serif">Featured Collection</p>

      {/* Parent container */}
      <div className="w-[90%] ml-[5%] mt-4 tablet:mt-10 flex items-center relative">
        
        {/* Left button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-10 bg-gray-400 hover:bg-gray-600 text-white p-2 rounded-full"
        >
          Left
        </button>

        {/* Child container to display 4 items */}
        <div
          ref={scrollRef}
          className="w-full flex overflow-hidden space-x-4 overflow-x-auto scroll-smooth"
        >
            <ShoppingCart
              id="W-1"
              categories="woman"
              name="Ma. Metal Earring with Topaz"
              originalPrice={15800}
              discount={15}
              imageUrl={Img1}
              imageUrl2={Img2}
              imageUrl3={Img1}
              review={4}
              details="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
            />

            <ShoppingCart
              id="W-2"
              categories="woman"
              name="Wb. Flower Flavor Liquid Soap"
              originalPrice={2400}
              discount={8}
              imageUrl={Img3}
              imageUrl2={Img4}
              imageUrl3={Img5}
              review={3}
              details="Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam"
            />

            <ShoppingCart
              id="M-1"
              categories="man"
              name="Men Formal T-shirt"
              originalPrice={2400}
              discount={12}
              imageUrl={Img16}
              imageUrl2={Img17}
              imageUrl3={Img16}
              review={0}
              details="Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum"
            />

            <ShoppingCart
              id="M-2"
              categories="man"
              name="Blue Shoes"
              originalPrice={9800}
              discount={33}
              imageUrl={Img18}
              imageUrl2={Img19}
              imageUrl3={Img18}
              review={4}
              details="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            />

            <ShoppingCart
              id="B-1"
              categories="baby"
              name="Baby Knit Hat"
              originalPrice={3400}
              discount={12}
              imageUrl={Img26}
              imageUrl2={Img27}
              imageUrl3={Img26}
              review={5}
              details="Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis."
            />

            <ShoppingCart
              id="B-2"
              categories="baby"
              name="Baby Handwork Frock"
              originalPrice={1800}
              discount={54}
              imageUrl={Img28}
              imageUrl2={Img29}
              imageUrl3={Img28}
              review={5}
              details="The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar."
            />
        </div>

        {/* Right button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 z-10 bg-gray-400 hover:bg-gray-600 text-white p-2 rounded-full"
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default FeaturedCollection;
