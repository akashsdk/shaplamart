"use client";
import React, { useState } from "react";
import { UpOutlined, DownOutlined } from "@ant-design/icons";

const Shop: React.FC = () => {
  const [page, setPage] = useState(1);

  const pageTitles = [
    "Contact Lenses",
    "Comprehensive",
    "Keratoconus",
    "Phakic Lens",
    "Retina Care",
    "Glaucoma",
  ];
  
  const [showCategories, setShowCategories] = useState(true); 

  const toggleCategories = () => {
    setShowCategories(prevState => !prevState); 
  };

  return (
    <div className="w-full flex justify-center items-center border-t">
      <div className="w-[30%] mt-20">
        <button
          onClick={toggleCategories} 
          className="w-[80%] ml-[10%] flex justify-between items-center hover:text-blue-600"
        >
          <p className="text-2xl">Categories</p>
          {showCategories ? <UpOutlined /> : <DownOutlined />} 
        </button>

        
        <div
          className={`w-[80%] ml-[10%] mt-5 flex flex-col justify-start items-start overflow-hidden transition-all duration-500 ${
            showCategories ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <button className="mb-2 opacity-70 hover:opacity-100">Accessories (22)</button>
          <button className="mb-2 opacity-70 hover:opacity-100">Baby (10)</button>
        </div>
      </div>

      <div className="w-[70%] mt-20">Right</div>
    </div>
  );
};

export default Shop;
