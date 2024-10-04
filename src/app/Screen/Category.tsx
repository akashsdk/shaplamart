"use client";
import React from "react";
import CategoryCard from "../card/CategoryCard";

import Icon1 from '@/Data/Icon/brand.png';
import Icon2 from '@/Data/Icon/accessories.png';
import Icon3 from '@/Data/Icon/new-arrivals.png';
import Icon4 from '@/Data/Icon/Footwear.png';
import Icon5 from '@/Data/Icon/summer.png';
import Icon6 from '@/Data/Icon/winter-clothing.png';
import Icon7 from '@/Data/Icon/fashion-style.png';
import Icon8 from '@/Data/Icon/woman.png';
import Icon9 from '@/Data/Icon/baby-dress.png';
import Icon10 from '@/Data/Icon/makeup-pouch.png';
import Icon11 from '@/Data/Icon/fashion-style.png';
import Icon12 from '@/Data/Icon/jewelry.png';
import Icon13 from '@/Data/Icon/loafers.png';
import Icon14 from '@/Data/Icon/skincare.png';
import Icon15 from '@/Data/Icon/high-heels.png';
import Icon16 from '@/Data/Icon/delivery-box.png';



const Category: React.FC = () => {
  return (
    <div className="w-[95%] ml-[2.5%] tablet:ml-0 tablet:w-full mt-10 flex justify-center items-center flex-col">
      <p className="text-2xl tablet:text-4xl text-blue-600 font-serif">
        Featured Categories
      </p>

      <div className=" mt-10 grid grid-cols-3 tablet:grid-cols-6 laptop:grid-cols-8 gap-6">
        <CategoryCard image={Icon1} categoryName="Featured Product" link="/shop" />
        <CategoryCard image={Icon2} categoryName="Accessories" link="/shop" />
        <CategoryCard image={Icon3} categoryName="New Arrivals" link="/shop" />
        <CategoryCard image={Icon4} categoryName="Footwear" link="/shop" />

        <CategoryCard image={Icon5} categoryName="Summer Styles" link="/shop" />
        <CategoryCard image={Icon6} categoryName="Winter Fashion" link="/shop" />
        <CategoryCard image={Icon7} categoryName="Men" link="/shop" />
        <CategoryCard image={Icon8} categoryName="Women" link="/shop" />

        <CategoryCard image={Icon9} categoryName="Baby" link="/shop" />
        <CategoryCard image={Icon10} categoryName="Beauty" link="/shop" />
        <CategoryCard image={Icon11} categoryName="Fashion" link="/shop" />
        <CategoryCard image={Icon12} categoryName="Jewelry" link="/shop" />

        <CategoryCard image={Icon13} categoryName="Flats & Loafers" link="/shop" />
        <CategoryCard image={Icon14} categoryName="Scene Care" link="/shop" />
        <CategoryCard image={Icon15} categoryName="Shoes" link="/shop" />
        <CategoryCard image={Icon16} categoryName="Other's" link="/shop" />
      </div>
    </div>
  );
};

export default Category;
