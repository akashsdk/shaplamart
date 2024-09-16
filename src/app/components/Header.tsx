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

const Header: React.FC = () => {
  return (
    <div className="h-[40px] bg-black text-white flex justify-center items-center">
      {/* Email and Location */}
      <div className="w-2/4 flex justify-center items-center">
        {/* Email */}
        <a href="mailto:example@example.com" className="flex items-center opacity-60 hover:opacity-90 hover:text-blue-500">
          <MailOutlined />
          <p className="ml-1 font-serif">example@example.com</p>
        </a>
        
        {/* Location */}
        <a
          href="https://maps.google.com/?q=City+State+ZIP+Code"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center ml-5 opacity-60 hover:opacity-90 hover:text-blue-500"
        >
          <EnvironmentOutlined />
          <p className="ml-1 font-serif">City, State, ZIP Code</p>
        </a>
      </div>

      <div className="w-1/4" />

      {/* Social Media Icons */}
      <div className="w-1/4 flex justify-center items-center">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2 opacity-60 hover:opacity-100 hover:text-blue-500 cursor-pointer"
        >
          <FacebookOutlined className="text-[18px]"/>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2 opacity-60 hover:opacity-100 hover:text-blue-500 cursor-pointer"
        >
          <TwitterOutlined className="text-[18px]"/>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2 opacity-60 hover:opacity-100 hover:text-blue-500 cursor-pointer"
        >
          <InstagramOutlined className="text-[18px]"/>
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2 opacity-60 hover:opacity-100 hover:text-blue-500 cursor-pointer"
        >
          <YoutubeOutlined className="text-[18px]"/>
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2 opacity-60 hover:opacity-100 hover:text-blue-500 cursor-pointer"
        >
          <TikTokOutlined className="text-[18px]"/>
        </a>
      </div>
    </div>
  );
};

export default Header;
