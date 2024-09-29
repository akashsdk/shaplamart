"use client";
import React, { useState } from "react";
import { Modal, message, Input, Form, Button } from "antd";
import Image, { StaticImageData } from "next/image";
import { DeleteOutlined, CopyOutlined, FormOutlined } from "@ant-design/icons";

import profileImg from "@/Data/Img/profile.png";
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
      orderNumber: "#123Gh89006",
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

  // Profile data
  const [profileData, setProfileData] = useState({
    name: "Mr. Tasnim Shahriar",
    email: "example@gmail.com",
    address: "Los Angeles, California, USA",
    phone: "0123456789",
    country: "Los Angeles",
    city: "California, USA",
    postCode: "ERT 62574",
  });

  // State for modal visibility
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Temporary state for form inputs
  const [form] = Form.useForm();

  const handleDelete = (id: string) => {
    setOrderHistory(orderHistory.filter((order) => order.id !== id));
    message.success("Order deleted successfully.");
  };

  // Show and hide modal
  const showModal = () => {
    setIsModalVisible(true);
    // Pre-fill form with existing data
    form.setFieldsValue(profileData);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Update profile information
  const handleUpdateProfile = (values: typeof profileData) => {
    setProfileData(values);
    message.success("Profile updated successfully.");
    setIsModalVisible(false);
  };

  return (
    <div className="flex items-center justify-center flex-col border-t">
      <div className="w-[95%] tablet:w-[90%] mt-10 tablet:mt-20 flex justify-between">
        <p className="text-2xl tablet:text-4xl font-serif">My Account</p>
        <button className="font-serif hover:text-blue-600">Logout</button>
      </div>

      <div className="w-[95%] tablet:w-[90%] mt-2 flex flex-col tablet:flex-row justify-between border-t">
        <div className="w-full tablet:w-[60%] tablet:mt-10 mt-5 ">
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

        <div className="w-full tablet:w-[40%] tablet:mt-10 mt-5 mb-5">
          <p className="text-xl tablet:text-2xl font-serif">My Profile</p>

          <div className="mt-5 flex items-center justify-between border rounded-md p-3">
            <Image
              alt="Profile Picture"
              src={profileImg}
              className="h-[80px] w-[80px] rounded-full"
            />
            <div className="ml-4">
              <p className="text-lg font-serif">{profileData.name}</p>
              <p className="text-sm opacity-70">{profileData.email}</p>
              <p className="text-sm opacity-70">{profileData.address}</p>
            </div>

            <button onClick={showModal} className="hover:text-red-500">
              <FormOutlined className="text-[20px]" />
            </button>
          </div>

          <div className="mt-5 flex items-center justify-between border rounded-md p-3">
            <div className="w-full">
              <div className="flex justify-between">
                <p className="text-xl font-serif">Address</p>

                <button onClick={showModal} className="hover:text-red-500">
                  <FormOutlined className="text-[20px]" />
                </button>
              </div>
              <div className="mt-5 w-full flex ">
                <div>
                  <p>Country</p>
                  <p className="opacity-70 mt-3">{profileData.country}</p>
                </div>

                <div className="ml-[40%]">
                  <p>City / State</p>
                  <p className="opacity-70 mt-3">{profileData.city}</p>
                </div>
              </div>

              <div className="mt-5 w-full flex">
                <div>
                  <p>Postal Code</p>
                  <p className="opacity-70 mt-3">{profileData.postCode}</p>
                </div>

                <div className="ml-[40%]">
                  <p>Phone No</p>
                  <p className="opacity-70 mt-3">{profileData.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for updating profile */}
      <Modal
        title="Update Profile"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleUpdateProfile}
          initialValues={profileData}
        >
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Address" name="address">
            <Input />
          </Form.Item>
          <Form.Item label="Phone" name="phone">
            <Input />
          </Form.Item>
          <Form.Item label="Country" name="country">
            <Input />
          </Form.Item>
          <Form.Item label="City / State" name="city">
            <Input />
          </Form.Item>
          <Form.Item label="Postal Code" name="postCode">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </Modal>
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
            {isHovered && (
              <button
                className="absolute px-2 py-1 bottom-1 ml-[175px] flex items-center justify-evenly bg-gray-200 hover:bg-gray-300 text-sm rounded-md"
                onClick={handleCopy}
              >
                <CopyOutlined /> Copy
              </button>
            )}
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
