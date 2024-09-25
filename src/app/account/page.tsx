"use client";
import React, { useState } from "react";
import { Modal, message } from "antd";
import Image, { StaticImageData } from "next/image";
import { DeleteOutlined, CopyOutlined } from "@ant-design/icons";

import Img1 from "@/Data/Shopping-Data/bag_1.webp";
import Img2 from "@/Data/Shopping-Data/baby_2_600x.webp";
import Img3 from "@/Data/Shopping-Data/sunglass_1.webp";

const Account: React.FC = () => {
  const [orderHistory, setOrderHistory] = useState([
    {
      id: "01",
      img: Img1,
      productName: "Women Hand Purse",
      orderDate: "01-13-2024",
      deliveryDate: "01-19-2024",
      orderNumber: "#123Gh89005",
      totalItem: "01",
      totalPrice: "4300",
    },
    {
      id: "02",
      img: Img2,
      productName: "Baby Handwork Frock",
      orderDate: "01-13-2024",
      deliveryDate: "01-19-2024",
      orderNumber: "#123Gh8906",
      totalItem: "01",
      totalPrice: "2030",
    },
    {
      id: "03",
      img: Img3,
      productName: "Stylist Sunglass",
      orderDate: "03-21-2024",
      deliveryDate: "04-01-2024",
      orderNumber: "#123Gh89009",
      totalItem: "04",
      totalPrice: "7000",
    },
  ]);

  const handleDelete = (id: string) => {
    setOrderHistory(orderHistory.filter((order) => order.id !== id));
    message.success("Order deleted successfully.");
  };

  return (
    <div className="flex items-center justify-center flex-col border-t">
      <div className="w-[95%] tablet:w-[90%] mt-10 tablet:mt-20 flex justify-between">
        <p className="text-2xl tablet:text-4xl font-serif">My Account</p>
        <button className="font-serif hover:text-blue-600">Logout</button>
      </div>

      <div className="w-[95%] tablet:w-[90%] mt-2 flex justify-between border-t">
        <div className="tablet:w-[60%] tablet:mt-10">
          <p className="text-xl tablet:text-2xl font-serif">Order History</p>

          <div className="w-[90%] mb-10">
            {orderHistory.map((order) => (
              <OrderHistoryComponent
                key={order.id}
                {...order}
                onDelete={() => handleDelete(order.id)}
              />
            ))}
          </div>
        </div>

        <div className="tablet:w-[40%] tablet:mt-10">
          <p className="text-xl tablet:text-2xl font-serif">Account Details</p>
        </div>
      </div>
    </div>
  );
};

export default Account;

const OrderHistoryComponent: React.FC<{
  id: string;
  img: StaticImageData;
  productName: string;
  orderDate: string;
  deliveryDate: string;
  orderNumber: string;
  totalItem: string;
  totalPrice: string;
  onDelete: () => void;
}> = ({
  id,
  img,
  productName,
  orderDate,
  deliveryDate,
  orderNumber,
  totalItem,
  totalPrice,
  onDelete,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    onDelete();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(orderNumber);
    message.success("Order number copied!");
  };

  return (
    <div className="w-full flex items-start justify-between mt-5 border p-2">
      <div className="flex h-[140px] items-center">
        <p className="mr-3">{id}</p>

        <Image
          src={img}
          alt={productName}
          className="h-[80px] w-[80px] rounded-md"
        />

        <div className="ml-5">
          <p className="text-2xl text-blue-600 font-serif">{productName}</p>
          <p className="text-sm">
            Total Item: <span className=" text-red-400">{totalItem}</span>
          </p>
          <p className="text-sm">
            Order: <span className=" text-red-400">{orderDate}</span>{" "}
          </p>
          <p className="text-sm">
            Delivery: <span className=" text-red-400">{deliveryDate}</span>
          </p>
          <p
            className="text-sm relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Order Num:{" "}
            <span className="text-red-400 cursor-pointer">{orderNumber}</span>
            {/* {isHovered && ( */}
              <button
                className="absolute ml-2 px-2 py-1 bottom-1 flex bg-gray-200 hover:bg-gray-300 text-sm rounded-md"
                onClick={handleCopy}
              >
                <CopyOutlined /> Copy
              </button>
            
          </p>
          <p className="text-sm">
            Total Price: <span className=" text-red-400">{totalPrice}</span> tk
          </p>
        </div>
      </div>

      <div className="flex h-[140px] items-center">
        <button onClick={showModal}>
          <DeleteOutlined className="text-[30px] text-red-400 hover:text-red-600 mr-6" />
        </button>
      </div>

      {/* Modal for delete confirmation */}
      <Modal
        title="Delete Order"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Confirm"
        cancelText="Cancel"
      >
        <p>Are you sure you want to delete this order?</p>
      </Modal>
    </div>
  );
};
