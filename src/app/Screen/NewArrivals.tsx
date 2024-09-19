"use client";
import React, { useRef } from "react";
import Link from "next/link";

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
    <div className="w-full mt-5 tablet:mt-16 flex justify-center items-center flex-col">
      <p className="text-2xl tablet:text-4xl text-blue-600 font-serif">
      New Arrivals
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
          </div>

          <div className="w-[205px] tablet:w-[310px] h-auto">
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
          </div>

          <div className="w-[205px] tablet:w-[310px] h-auto">
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
          </div>

          <div className="w-[205px] tablet:w-[310px] h-auto">
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
          </div>

          <div className="w-[205px] tablet:w-[310px] h-auto">
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
          </div>

          <div className="w-[205px] tablet:w-[310px] h-auto">
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
        </div>

        <button
          onClick={scrollRight}
          className="absolute z-10 text-blue-500 text-[25px] right-10 border border-blue-600 p-2 rounded-lg hover:bg-blue-600 hover:text-white "
        >
          ▶
        </button>
      </div>

      <div className="w-full mt-5 tablet:mt-10 mb-5 tablet:mb-10 flex justify-center items-center">
        <Link href="/shop">
          <span className=" rounded px-5 py-2.5 overflow-hidden group bg-blue-600 relative hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-500transition-all ease-out duration-300 cursor-pointer">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">View All</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NewArrivals;
