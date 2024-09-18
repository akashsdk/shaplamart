"use client";
import React, { useState } from "react";
import ShoppingCart from "../card/ShoppingCart";

import Img1 from "@/Data/Shopping-Data/metal-earring_1_600x.webp";
import Img2 from "@/Data/Shopping-Data/metal-earring_2_600x.webp";
import Img3 from "@/Data/Shopping-Data/soap_1_1024x1024.webp";
import Img4 from "@/Data/Shopping-Data/soap_2_600x.webp";
import Img5 from "@/Data/Shopping-Data/TheHydratingMoisturizer_600x.webp";
import Img6 from "@/Data/Shopping-Data/longt-shirt_1.webp";
import Img7 from "@/Data/Shopping-Data/longt-shirt_2_600x.webp";
import Img8 from "@/Data/Shopping-Data/lipstick_1.webp";
import Img9 from "@/Data/Shopping-Data/lipstick_2_600x.webp";
import Img10 from "@/Data/Shopping-Data/skin-care_1.webp";
import Img11 from "@/Data/Shopping-Data/skin-care_2_600x.webp";
import Img12 from "@/Data/Shopping-Data/silver-rign_1.webp";
import Img13 from "@/Data/Shopping-Data/silver-rign_2_600x.webp";
import Img14 from "@/Data/Shopping-Data/fitnesstracker_1.webp";
import Img15 from "@/Data/Shopping-Data/fitnesstracker_2_600x.webp";

const BestSelling: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Women");

  const tabStyles = (tab: string) => {
    return `cursor-pointer text-xl font-serif ${
      activeTab === tab ? "text-blue-600" : "text-black"
    }`;
  };

  return (
    <div className="w-[95%] ml-[2.5%] mt-16">
      <div className="w-full flex justify-between items-center">
        <p className="text-2xl tablet:text-4xl text-blue-600 font-serif">
          Best Selling
        </p>

        <div className="w-[20%] flex justify-between items-center">
          <div className="flex flex-col items-center">
            <button
              className={tabStyles("Men")}
              onClick={() => setActiveTab("Men")}
            >
              Men
            </button>
            {activeTab === "Men" && (
              <div className="w-10 h-[2px] bg-blue-600 mt-1"></div>
            )}
          </div>

          <div className="flex flex-col items-center">
            <button
              className={tabStyles("Women")}
              onClick={() => setActiveTab("Women")}
            >
              Women
            </button>
            {activeTab === "Women" && (
              <div className="w-10 h-[2px] bg-blue-600 mt-1"></div>
            )}
          </div>

          <div className="flex flex-col items-center">
            <button
              className={tabStyles("Baby")}
              onClick={() => setActiveTab("Baby")}
            >
              Baby
            </button>
            {activeTab === "Baby" && (
              <div className="w-10 h-[2px] bg-blue-600 mt-1"></div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-10 flex">
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
          id="W-3"
          categories="woman"
          name="Ja. Hydrating Moisturizer"
          originalPrice={4800}
          discount={0}
          imageUrl={Img5}
          imageUrl2={Img5}
          imageUrl3={Img5}
          review={5}
          details="The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar"
        />

        <ShoppingCart
          id="W-4"
          categories="woman"
          name="Ca. Long T Shirt for Summer"
          originalPrice={3400}
          discount={24}
          imageUrl={Img6}
          imageUrl2={Img7}
          imageUrl3={Img6}
          review={4}
          details="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        />
        <ShoppingCart
          id="W-5"
          categories="woman"
          name="Dark Lipstick"
          originalPrice={800}
          discount={5}
          imageUrl={Img8}
          imageUrl2={Img9}
          imageUrl3={Img9}
          review={5}
          details="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph"
        />

        <ShoppingCart
          id="W-6"
          categories="woman"
          name="Glossy cosmetic skin care"
          originalPrice={1200}
          discount={21}
          imageUrl={Img10}
          imageUrl2={Img11}
          imageUrl3={Img10}
          review={2}
          details="Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Aenean viverra rhoncus pede. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non enim eleifend felis pretium feugiat."
        />
        <ShoppingCart
          id="W-7"
          categories="woman"
          name="Silver Ring with Diamond"
          originalPrice={1200}
          discount={0}
          imageUrl={Img12}
          imageUrl2={Img13}
          imageUrl3={Img12}
          review={0}
          details="Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Aenean viverra rhoncus pede. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non enim eleifend felis pretium feugiat."
        />

        <ShoppingCart
          id="W-8"
          categories="woman"
          name="Realistic Fitness Trackers"
          originalPrice={1240}
          discount={0}
          imageUrl={Img14}
          imageUrl2={Img15}
          imageUrl3={Img14}
          review={3}
          details="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        />

      </div>

      <div className="mt-10">

        {/* <ShoppingCart
          id=""
          categories="woman"
          name=""
          originalPrice={}
          discount={}
          imageUrl={}
          imageUrl2={}
          imageUrl3={}
          review={}
          details=""
        /> */}
      </div>
    </div>
  );
};

export default BestSelling;
