"use client";
import React, { useState } from "react";
import Link from "next/link";
import { UpOutlined, DownOutlined, SendOutlined } from "@ant-design/icons";

const Shop: React.FC = () => {
  const [page, setPage] = useState(1);

  const pageTitles = [
    "Accessories",
    "Baby",
    "Women's Fashion",
    "Men's Fashion",
    "Footwear",
    "New Arrivals",
  ];

  const [showCategories, setShowCategories] = useState(true);

  const toggleCategories = () => {
    setShowCategories((prevState) => !prevState);
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
            showCategories ? "opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          

            {pageTitles.map((title, index) => (
              <button
                key={index}
                className={`mb-2 opacity-70 hover:opacity-100 group ${
                  page === index + 1 ? "text-blue-600" : ""
                }`}

                onClick={() => {
                  setPage(index + 1);
                }}
              >
               <p className="ml-3 font-semibold">{title}</p>
              </button>
            ))}
        </div>
      </div>

      <div className="w-[70%] mt-20">Rhuhhh</div>
    </div>
  );
};

export default Shop;
