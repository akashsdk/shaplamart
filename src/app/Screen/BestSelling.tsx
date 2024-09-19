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
import Img16 from "@/Data/Shopping-Data/shirt_1.webp";
import Img17 from "@/Data/Shopping-Data/shirt_2_600x.webp";
import Img18 from "@/Data/Shopping-Data/blueshoe_1.webp";
import Img19 from "@/Data/Shopping-Data/blueshoe_2_600x.webp";
import Img20 from "@/Data/Shopping-Data/watch.webp";
import Img21 from "@/Data/Shopping-Data/watch_1_600x.webp";
import Img22 from "@/Data/Shopping-Data/jacket_8_1024x1024.webp";
import Img23 from "@/Data/Shopping-Data/jacket_9_600x.webp";
import Img24 from "@/Data/Shopping-Data/sunglass_1.webp";
import Img25 from "@/Data/Shopping-Data/sunglass_2_600x.webp";
import Img26 from "@/Data/Shopping-Data/baby-hat_1.webp";
import Img27 from "@/Data/Shopping-Data/baby-hat_2_600x.webp";
import Img28 from "@/Data/Shopping-Data/baby_1.webp";
import Img29 from "@/Data/Shopping-Data/baby_2_600x.webp";
import Img30 from "@/Data/Shopping-Data/1.webp";
import Img31 from "@/Data/Shopping-Data/2_600x.webp";
import Img32 from "@/Data/Shopping-Data/baby-and-kid-shoe_1.webp";
import Img33 from "@/Data/Shopping-Data/baby-and-kid-shoe_2_600x.webp";
import Img34 from "@/Data/Shopping-Data/baby-dress_1.webp";
import Img35 from "@/Data/Shopping-Data/baby-dress_2_600x.webp";

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
        <p className="w-[50%] tablet:w-[80%] text-2xl tablet:text-4xl text-blue-600 font-serif">
          Best Selling
        </p>

        <div className="w-[50%] tablet:w-[20%] flex justify-evenly items-center">
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

      <div className="w-full">
        {activeTab === "Men" && (
          <div className="mt-10 grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-6">
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
              id="M-3"
              categories="man"
              name="Smart Watch M-34"
              originalPrice={3400}
              discount={21}
              imageUrl={Img20}
              imageUrl2={Img21}
              imageUrl3={Img20}
              review={4}
              details="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
            />

            <ShoppingCart
              id="M-4"
              categories="man"
              name="Mokmol Jacket"
              originalPrice={2300}
              discount={21}
              imageUrl={Img22}
              imageUrl2={Img23}
              imageUrl3={Img22}
              review={3}
              details="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot."
            />

            <ShoppingCart
              id="M-5"
              categories="man"
              name="Stylist Sunglass"
              originalPrice={3220}
              discount={15}
              imageUrl={Img24}
              imageUrl2={Img25}
              imageUrl3={Img24}
              review={3}
              details="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
            />
          </div>
        )}
        {activeTab === "Women" && (
          <div className="mt-10 grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-6">
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
        )}
        {activeTab === "Baby" && (
          <div className="mt-10 grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-6">
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

            <ShoppingCart
              id="B-3"
              categories="baby"
              name="Baby Stylist Sunglass"
              originalPrice={300}
              discount={0}
              imageUrl={Img30}
              imageUrl2={Img31}
              imageUrl3={Img30}
              review={2}
              details="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
            />

            <ShoppingCart
              id="B-4"
              categories="baby"
              name="Baby and Kid Shoe"
              originalPrice={6700}
              discount={78}
              imageUrl={Img32}
              imageUrl2={Img33}
              imageUrl3={Img32}
              review={4}
              details="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
            />

            <ShoppingCart
              id="B-5"
              categories="baby"
              name="Baby frock"
              originalPrice={840}
              discount={0}
              imageUrl={Img34}
              imageUrl2={Img35}
              imageUrl3={Img34}
              review={5}
              details="Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttit."
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BestSelling;
