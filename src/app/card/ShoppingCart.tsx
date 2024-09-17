"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

import {
  EyeOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";

interface ShoppingCartProps {
  id: string;
  categories: string;
  name: string;
  originalPrice: number;
  discount: number;
  imageUrl: StaticImageData;
  imageUrl2?: StaticImageData;
  details: string;
  review: number;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  id,
  categories,
  name,
  originalPrice,
  discount,
  imageUrl,
  imageUrl2,
  details,
  review,
}) => {
  // Calculate discounted price
  const calculateDiscountedPrice = (
    originalPrice: number,
    discount: number
  ) => {
    return originalPrice * (1 - discount / 100);
  };

  const discountedPrice = calculateDiscountedPrice(originalPrice, discount);

  // Function to render star rating
  const renderStars = (rating: number) => {
    const totalStars = 5;
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      if (i <= rating) {
        stars.push(
          <StarFilled key={i} className="text-yellow-500 text-base" />
        );
      } else {
        stars.push(
          <StarOutlined key={i} className="text-yellow-500 text-base" />
        );
      }
    }

    return stars;
  };

  return (
    <div
      key={id}
      className="h-[400px] w-[300px] mb-3 flex flex-col justify-start items-center"
    >
      <Image
        src={imageUrl}
        alt={name}
        className="rounded-xl h-[280px] w-[280px]"
      />

      <div className="absolute h-[280px] w-[280px]">
        <div className="absolute h-[25px] w-[60px] mt-3 right-4 bg-white flex justify-center items-center rounded-md text-red-500">
          -{discount}%
        </div>

        <div className="absolute w-[80%] ml-[10%] bottom-3 flex justify-evenly">
          <button className="h-[50px] w-[50px] border border-blue-600 rounded-lg text-blue-600 hover:bg-blue-600 hover:text-white">
            <EyeOutlined className="text-[25px]" />
          </button>

          <button className="h-[50px] w-[50px] border border-blue-600 rounded-lg text-blue-600 hover:bg-blue-600 hover:text-white">
            <ShoppingCartOutlined className="text-[25px]" />
          </button>

          <button className="h-[50px] w-[50px] border border-blue-600 rounded-lg text-blue-600 hover:bg-blue-600 hover:text-white">
            <HeartOutlined className="text-[25px]" />
          </button>
        </div>
      </div>

      <div className="">
        <p className="font-bold text-base text-zinc-600 mt-5 font-serif">
          {name}
        </p>

        <div className="flex justify-center items-center mt-2">
          <p className="text-red-500 line-through mr-2 opacity-70">
            Tk {originalPrice}
          </p>
          <p className="text-blue-600 font-medium">
            Tk {discountedPrice.toFixed(2)}
          </p>
        </div>

        <div className="flex justify-center mt-2">{renderStars(review)}</div>
      </div>
    </div>
  );
};

export default ShoppingCart;
