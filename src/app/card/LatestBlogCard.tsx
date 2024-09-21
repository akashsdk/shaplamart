"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { CalendarOutlined } from "@ant-design/icons";
import Link from "next/link";

interface LatestBlogCardProps {
  title: string;
  date: string;
  imageUrl: StaticImageData;
}

const LatestBlogCard: React.FC<LatestBlogCardProps> = ({
  title,
  date,
  imageUrl,
}) => {
  return (
    <Link href="/blog">
      <div className="w-[200px] tablet:w-[300px] h-auto group mb-6 cursor-pointer">
        <Image alt="" src={imageUrl} className="mt-2 rounded-xl" />

        <div className="mt-5 flex opacity-60">
          <CalendarOutlined />
          <p className="ml-3">{date}</p>
        </div>
        <div className="mt-3">
          <h3 className="text-sm tablet:text-xl text-justify mb-2 font-serif group-hover:text-blue-600">
            {title}
          </h3>
        </div>

        <p className="text-blue-600 font-serif opacity-80 hover:opacity-100">
          Read More...
        </p>
      </div>
    </Link>
  );
};

export default LatestBlogCard;
