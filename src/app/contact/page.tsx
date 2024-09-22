"use client";
import React, { useState } from "react";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  FileTextOutlined,
  EditOutlined,
} from "@ant-design/icons";
import HeaderCart from "../card/HeaderCart";
import { notification } from "antd";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    if (!name.trim()) {
      api.warning({
        message: "Name Required",
        description: "Please enter your name.",
        placement: "topRight",
      });
      return;
    }

    if (!validateEmail(email)) {
      api.warning({
        message: "Invalid Email",
        description: "Please enter a valid email address.",
        placement: "topRight",
      });
      return;
    }

    // Log all form data
    console.log({
      name,
      email,
      phone,
      subject,
      message,
    });

    api.success({
      message: "Success",
      description: "Your message has been sent successfully.",
      placement: "topRight",
    });

    // Simulate submission delay and reset the form
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      // Clear all form fields
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    }, 2000);
  };

  return (
    <div className="w-full">
      {contextHolder}
      <HeaderCart pageName="Contact" />

      <div className="w-full mt-5 tablet:mt-16">
        {/* Box Fields */}
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
        <div className="w-[90%] h-auto mt-8 tablet:mt-16 mb-8 tablet:mb-16 ml-[5%] bg-gray-200 rounded-xl">
          <div className="p-[5%]">
            <p className="text-2xl tablet:text-3xl font-medium font-serif">
              Send Message
            </p>

            <div className="mt-5 flex flex-col">
              <div className="w-full tablet:flex">
                <div className="relative tablet:w-[48%]">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-4 pl-10 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <span className="absolute left-3 top-4 text-xl text-blue-500">
                    <UserOutlined />
                  </span>
                </div>

                <div className="relative  mt-5 tablet:mt-0 tablet:w-[48%] tablet:ml-[4%]">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-4 pl-10 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <span className="absolute left-3 top-4 text-xl text-blue-500">
                    <MailOutlined />
                  </span>
                </div>
              </div>

              <div className="tablet:flex tablet:mt-8">
                <div className="relative mt-5 tablet:mt-0 tablet:w-[48%]">
                  <input
                    type="text"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-4 pl-10 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <span className="absolute left-3 top-4 text-xl text-blue-500">
                    <PhoneOutlined />
                  </span>
                </div>

                <div className="relative mt-5 tablet:mt-0 tablet:w-[48%] tablet:ml-[4%]">
                  <input
                    type="text"
                    placeholder="Enter subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full p-4 pl-10 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <span className="absolute left-3 top-4 text-xl text-blue-500">
                    <FileTextOutlined />
                  </span>
                </div>
              </div>

              <div className="col-span-2 relative mt-5 tablet:mt-10">
                <textarea
                  placeholder="Enter message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-4 pl-10 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  rows={4}
                />
                <span className="absolute left-3 top-4 text-xl text-blue-500">
                  <EditOutlined />
                </span>
              </div>
            </div>

            <div className="mt-5 tablet:mt-8">
              <a
                href="#_"
                onClick={handleSubmit}
                className={`relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-600 rounded-xl shadow-md group ${
                  isSubmitting ? "cursor-not-allowed" : ""
                }`}
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-600 group-hover:translate-x-0 ease">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-blue-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Submit
                </span>
                <span className="relative invisible">Submit</span>
              </a>
            </div>
          </div>
        </div>

        {/* Map Fields */}
        <div className="w-[90%] ml-[5%] h-auto mb-8 tablet:mb-16 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29203.532332265764!2d90.35419184642619!3d23.802893092335093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d33532b3fb%3A0x2b27b0c01cb2bc0d!2sMirpur-10%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1727034919002!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl shadow-xl"
        />
      </div>
      </div>
    </div>
  );
};

export default Contact;
