"use client";
import React from "react";
import { UserOutlined, MailOutlined, PhoneOutlined, FileTextOutlined, EditOutlined } from "@ant-design/icons";
import HeaderCart from "../card/HeaderCart";

const Contact: React.FC = () => {
  return (
    <div className="w-full">
      <HeaderCart pageName="Contact" />

      <div className="w-full mt-5 tablet:mt-16">
        <div className="w-full flex flex-col tablet:flex-row justify-around items-center">
          <div className="w-[90%] tablet:w-[28%] h-[150px] border flex flex-col justify-center items-center">
            <p className="text-2xl tablet:text-3xl font-medium font-serif">
              Email Address
            </p>
            <p className="text-xl opacity-60 mt-3">example@example.com</p>
          </div>

          <div className="w-[90%] tablet:w-[28%] mt-4 tablet:mt-0 h-[150px] border flex flex-col justify-center items-center">
            <p className="text-2xl tablet:text-3xl font-medium font-serif">
              Phone Number
            </p>
            <p className="text-xl opacity-60 mt-3">+0123-456789</p>
          </div>

          <div className="w-[90%] tablet:w-[28%] mt-4 tablet:mt-0 h-[150px] border flex flex-col justify-center items-center">
            <p className="text-2xl tablet:text-3xl font-medium font-serif">
              Office Address
            </p>
            <p className="text-xl opacity-60 mt-3 text-center">
              Your Street Address, City Name, State, ZIP Code, Country.
            </p>
          </div>
        </div>

        {/* Input Fields */}
        <div className="w-[90%] h-auto mt-5 tablet:mt-16 ml-[5%] bg-gray-200 rounded-xl">
          <div className="p-[5%]">
            <p className="text-2xl tablet:text-3xl font-medium font-serif">
              Send Message
            </p>

            <div className="mt-5 grid grid-cols-1 tablet:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-4 pl-10 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />

                <span className="absolute left-3 top-4 text-xl text-blue-500">
                  <UserOutlined />
                </span>
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-4 pl-10 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <span className="absolute left-3 top-4 text-xl text-blue-500">
                  <MailOutlined />
                </span>
              </div>

              {/* Phone Number */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full p-4 pl-10 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <span className="absolute left-3 top-4 text-xl text-blue-500">
                  <PhoneOutlined />
                </span>
              </div>

              {/* Subject Field */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full p-4 pl-10 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <span className="absolute left-3 top-4 text-xl text-blue-500">
                  <FileTextOutlined />
                </span>
              </div>

              {/* Message Field */}
              <div className="col-span-2 relative">
                <textarea
                  placeholder="Enter message"
                  className="w-full p-4 pl-10 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  rows={4}
                />
                <span className="absolute left-3 top-4 text-xl text-blue-500">
                  <EditOutlined />
                </span>
              </div>
            </div>

            <div className="mt-5">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
