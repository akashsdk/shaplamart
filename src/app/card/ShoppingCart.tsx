"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";

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
  imageUrl3?: StaticImageData;
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
  imageUrl3,
  details,
  review,
}) => {
  // State to track hover status
  const [isHovered, setIsHovered] = useState(false);

  // State to manage product quantity
  const [quantity, setQuantity] = useState(1); // Default quantity is 1
  const [subTotal, setSubTotal] = useState(0); // State to manage subtotal

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

  // Handle quantity increment
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Handle quantity decrement
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1)); // Prevent quantity going below 1
  };

  // Update subtotal when quantity or price changes
  useEffect(() => {
    setSubTotal(discountedPrice * quantity);
  }, [quantity, discountedPrice]);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // State to manage the currently selected image for display
  const [selectedImage, setSelectedImage] = useState<StaticImageData>(imageUrl);

  // Update the displayed image when one of the thumbnails is clicked
  const handleImageClick = (image: StaticImageData) => {
    setSelectedImage(image);
  };

  return (
    <div
      key={id}
      className="relative h-[400px] w-[300px] mb-3 flex flex-col justify-start items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <Image
          src={isHovered && imageUrl2 ? imageUrl2 : imageUrl}
          alt={name}
          className="rounded-xl h-[280px] w-[280px] object-cover"
        />

        {/* Icon Button Overlay */}
        <div className="absolute w-full bottom-3 bg-transparent opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
          <div className="w-[80%] flex justify-evenly">
            <button
              className="h-[50px] w-[50px] border border-blue-600 rounded-lg text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
              onClick={showModal}
            >
              <EyeOutlined className="text-[25px]" />
            </button>

            <button className="h-[50px] w-[50px] border border-blue-600 rounded-lg text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
              <ShoppingCartOutlined className="text-[25px]" />
            </button>

            <button className="h-[50px] w-[50px] border border-blue-600 rounded-lg text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
              <HeartOutlined className="text-[25px]" />
            </button>
          </div>
        </div>

        <div className="absolute top-3 right-4 h-[25px] w-[60px] bg-white flex justify-center items-center rounded-md text-red-500">
          -{discount}%
        </div>
      </div>

      <div className="mt-5">
        <button
          onClick={showModal}
          className="font-bold text-base text-zinc-600 hover:text-blue-600 font-serif"
        >
          {name}
        </button>

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

      <Modal
        title="Add to Cart"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
        footer={null}
      >
        <div className="h-auto">
          <div className="flex">
            {/* Product Image */}
            <div className="w-1/2 p-4">
              <Image
                src={selectedImage}
                alt={name}
                className="rounded-xl object-cover"
              />

              <div className="w-full flex justify-evenly mt-6">
                <button onClick={() => handleImageClick(imageUrl)}>
                  <Image
                    src={imageUrl}
                    alt={name}
                    className="h-[80px] w-[80px] rounded-xl"
                  />
                </button>

                {imageUrl2 && (
                  <button onClick={() => handleImageClick(imageUrl2)}>
                    <Image
                      src={imageUrl2}
                      alt={name}
                      className="h-[80px] w-[80px] rounded-xl"
                    />
                  </button>
                )}

                {imageUrl3 && (
                  <button onClick={() => handleImageClick(imageUrl3)}>
                    <Image
                      src={imageUrl3}
                      alt={name}
                      className="h-[80px] w-[80px] rounded-xl"
                    />
                  </button>
                )}
              </div>
            </div>

            {/* Product Details */}
            <div className="w-1/2 p-4">
              <p className="font-bold text-2xl font-serif">{name}</p>
              <p className="font-bold font-serif opacity-60">
                Categories: {categories}
              </p>
              <p className="text-red-500 line-through opacity-70">
                Tk {originalPrice}
              </p>
              <p className="text-blue-600 font-medium text-2xl mb-4">
                Tk {discountedPrice.toFixed(2)}
              </p>
              <p className="mb-4">{details}</p>

              {/* Size and Color selectors */}
              <div className="mb-4">
                <label className="block font-medium">Size:</label>
                <select className="border p-2 rounded w-full">
                  <option>s</option>
                  <option>m</option>
                  <option>l</option>
                  <option>xl</option>
                  <option>2xl</option>
                  <option>3xl</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block font-medium">Color:</label>
                <select className="border p-2 rounded w-full">
                  <option>red</option>
                  <option>blue</option>
                  <option>green</option>
                </select>
              </div>

              {/* Quantity Selector */}
              <div className="flex justify-between items-center">
                <div className="flex items-center mb-4 ">
                  <button
                    className="px-3 p-1 border text-xl rounded-md"
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>

                  <p className="px-3 p-1 text-xl border-t border-b rounded-md">
                    {quantity}
                  </p>
                  <button
                    className="px-3 p-1 border text-xl rounded-md"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>

                {/* Display Subtotal */}
                <p className="text-lg font-semibold">
                  Sub Total:{" "}
                  <samp className="text-red-500">{subTotal.toFixed(2)}</samp>Tk
                </p>
              </div>

              <Button
                type="primary"
                className="bg-blue-600"
                onClick={handleCancel}
                block
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ShoppingCart;
