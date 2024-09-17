"use client";
import Image from "next/image";
import React from "react";

interface ShoppingCartProps {
  id: string;
  categories: string;
  name: string;
  originalPrice: number;
  discount: number;
  imageUrl: StaticImageData;
  imageUrl2?: StaticImageData;
  details: string;
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
}) => {
  // Calculate discounted price
  const calculateDiscountedPrice = (originalPrice: number, discount: number) => {
    return originalPrice * (1 - discount / 100);
  };

  const discountedPrice = calculateDiscountedPrice(originalPrice, discount);

  return (
    <div key={id} className="border rounded-md p-4 mb-4">
      <div className="flex justify-between">
        <div className="w-1/2">
          {/* Main Product Image */}
          <Image src={imageUrl} alt={name} className="rounded-lg w-full" />
          
        </div>

        {imageUrl2 && (
          <div className="w-1/2 ml-4">
            {/* Secondary Product Image */}
            <Image src={imageUrl2} alt={`${name} secondary image`} className="rounded-lg w-full" />
          </div>
        )}
      </div>

      <div className="mt-4">
        <p className="font-bold text-lg">{name}</p>
        <p className="text-gray-500">{categories}</p>
        <p className="text-gray-600 mt-2">{details}</p>

        <div className="flex items-center mt-2">
          <p className="text-red-500 line-through mr-2">Tk {originalPrice}</p>
          <p className="text-blue-600 font-bold">Tk {discountedPrice.toFixed(2)}</p>
        </div>

        <p className="text-green-600">{discount}% Off</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
