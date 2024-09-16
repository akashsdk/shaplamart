"use client";
import React from "react";

import {
  MailOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  TikTokOutlined,
} from "@ant-design/icons";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500">Welcome to Next.js!</h1>
      <p className="mt-4 text-lg text-gray-700">
        This is your Home Page using Next.js with TypeScript.
      </p>

      <FacebookOutlined className="mr-2 opacity-60 hover:opacity-100 hover:text-blue-500 cursor-pointer" />
    </div>
  );
};

export default Index;
