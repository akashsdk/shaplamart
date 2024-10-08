"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { message, Modal } from "antd";

// Sample images for wishlist items
import Img1 from "@/Data/Shopping-Data/bag_1.webp";
import Img2 from "@/Data/Shopping-Data/baby_2_600x.webp";
import Img3 from "@/Data/Shopping-Data/sunglass_1.webp";

const Wishlist: React.FC = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: "01",
      img: Img1,
      productName: "Women Hand Purse",
      price: "4300",
    },
    {
      id: "02",
      img: Img2,
      productName: "Baby Handwork Frock",
      price: "2030",
    },
    {
      id: "03",
      img: Img3,
      productName: "Stylist Sunglass",
      price: "7000",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleDelete = (id: string) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
    message.success("Item removed from wishlist.");
  };

  const handleOrder = (productName: string) => {
    message.success(`${productName} has been added to your cart!`);
  };

  const showDeleteConfirm = (id: string) => {
    setSelectedItem(id);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    handleDelete(selectedItem);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-[95%] ml-[2.5%] tablet:w-[90%] tablet:ml-[5%] mt-10 tablet:mt-20">
      <p className="text-2xl tablet:text-4xl font-serif mb-5">My Wishlist</p>

      {wishlist.length > 0 ? (
        wishlist.map((item) => (
          <div
            key={item.id}
            className="w-full flex items-center justify-between border-b p-4"
          >
            <div className="flex items-center">
              <Image
                src={item.img}
                alt={item.productName}
                className="h-[100px] w-[100px] rounded-md mr-5"
              />
              <div>
                <p className="text-xl font-serif">{item.productName}</p>
                <p className="text-lg text-red-500">{item.price} tk</p>
              </div>
            </div>
            <div className="flex flex-col tablet:flex-row items-center">
              {/* Order Now Button */}
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mb-2 tablet:mb-0 tablet:mr-4 flex items-center justify-center"
                onClick={() => handleOrder(item.productName)}
              >
                <ShoppingCartOutlined className="mr-2" />
                <span className="hidden tablet:block">Order Now</span>
              </button>
              {/* Delete Button styled like Order Now Button */}
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center justify-center"
                onClick={() => showDeleteConfirm(item.id)}
              >
                <DeleteOutlined className="mr-2" />
                <span className="hidden tablet:block">Delete</span>
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">Your wishlist is empty!</p>
      )}

      {/* Modal for delete confirmation */}
      <Modal
        title="Remove Item"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Confirm"
        cancelText="Cancel"
      >
        <p>Are you sure you want to remove this item from your wishlist?</p>
      </Modal>
    </div>
  );
};

export default Wishlist;
