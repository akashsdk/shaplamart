"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GooglePlusOutlined,
  FacebookOutlined,
  XOutlined,
  AppleOutlined,
  MailOutlined,
  LockOutlined,
} from "@ant-design/icons";

import img1 from "@/Data/SVG/Sign Up.svg";

const LogIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="w-full flex justify-center items-center">
      {/* Left-Box */}
      <div className="h-screen w-full md:w-[50%] flex justify-center items-center flex-col bg-gray-50 p-8">
        <p className="font-medium text-4xl font-mono bounce-animation">
          Sign In
        </p>
        <div className="mt-[30px] flex justify-center items-center">
          <button className="h-[45px] w-[45px] mr-[20px] flex justify-center items-center rounded-xl border-2 border-rose-200 shadow-xl ">
            <GooglePlusOutlined className="text-[25px]" />
          </button>

          <button className="h-[45px] w-[45px] mr-[20px] flex justify-center items-center rounded-xl border-2 border-rose-200 shadow-xl ">
            <FacebookOutlined className="text-[25px]" />
          </button>

          <button className="h-[45px] w-[45px] mr-[20px] flex justify-center items-center rounded-xl border-2 border-rose-200 shadow-xl ">
            <XOutlined className="text-[25px]" />
          </button>

          <button className="h-[45px] w-[45px] mr-[20px] flex justify-center items-center rounded-xl border-2 border-rose-200 shadow-xl ">
            <AppleOutlined className="text-[25px]" />
          </button>
        </div>
        <p className="mt-[30px] opacity-60">or use your email and password</p>

        {/* Email and Password Input */}
        <form onSubmit={handleSubmit} className="mt-[10px] w-[80%]">
          <div className="mb-[20px]">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <MailOutlined className="text-[20px]" />
              </span>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                className="pl-10 pr-4 py-2 block w-full rounded-md border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="mb-[30px]">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <LockOutlined className="text-[20px]" />
              </span>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                className="pl-10 pr-4 py-2 block w-full rounded-md border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button className="cursor-pointer mb-[7px] opacity-70 hover:opacity-100">
            Forget Your Password?
          </button>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign In
          </button>
        </form>

        <Link
          href="/signup"
          className="md:hidden w-[80%] text-center mt-5 py-2 px-4 border-[3px] border-indigo-700 rounded-md shadow-sm text-lg font-medium text-indigo-700 hover:text-white bg-transparent hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign Up
        </Link>
      </div>

      {/* Right-Box */}
      <div className="h-screen w-[50%] hidden md:flex justify-center items-center flex-col bg-indigo-600 text-white p-8 rounded-tl-[15%] rounded-bl-[15%] overflow-hidden">
        <Image alt="Sign Up" src={img1} className="h-[300px] mt-[-100px]" />

        <svg className="w-[80%] h-auto" viewBox="0 0 600 100">
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
            Hello, Friend! 🤗
          </text>
        </svg>

        <p className="mt-0 text-lg text-center typewriter-animation">
          To keep connected with us please login <br /> with your personal
          info...!
        </p>
        <Link
          href="/signup"
          className="mt-8 py-2 px-4 border border-rose-200 rounded-md shadow-lg text-lg text-rose-200 font-medium bg-transparent  focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-white"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
