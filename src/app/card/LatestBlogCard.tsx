"use client";
import React from "react";

interface LatestBlogCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

const LatestBlogCard: React.FC<LatestBlogCardProps> = ({
  title,
  description,
  date,
  imageUrl,
}) => {
  return (
    <div className="w-[300px] h-auto m-4 rounded-lg shadow-lg overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <p className="text-xs text-gray-400">{date}</p>
      </div>
    </div>
  );
};

export default LatestBlogCard;
