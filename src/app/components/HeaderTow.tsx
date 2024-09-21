"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navlink from "./Navlink";
import Image from "next/image";
import {
  DownOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

import Img1 from "@/Data/Img/Featured Product.webp";
import Img2 from "@/Data/Img/Accessories.webp";
import Img3 from "@/Data/Img/New Arrivals.webp";
import Img4 from "@/Data/Img/Footwear .webp";
import Img5 from "@/Data/Img/Summer Styles.webp";
import Img6 from "@/Data/Img/men.webp";
import Img7 from "@/Data/Img/Winter Fashion.webp";
import Img8 from "@/Data/Img/women.webp";

const HeaderTow: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const [dropdownOpen2, setDropdownOpen2] = useState(false);

  const handleMouseEnter2 = () => {
    setDropdownOpen2(true);
  };

  const handleMouseLeave2 = () => {
    setDropdownOpen2(false);
  };

  const [dropdownOpen3, setDropdownOpen3] = useState(false);

  const handleMouseEnter3 = () => {
    setDropdownOpen3(true);
  };

  const handleMouseLeave3 = () => {
    setDropdownOpen3(false);
  };

  const [dropdownOpen4, setDropdownOpen4] = useState(false);

  const handleMouseEnter4 = () => {
    setDropdownOpen4(true);
  };

  const handleMouseLeave4 = () => {
    setDropdownOpen4(false);
  };

  const [dropdownOpen5, setDropdownOpen5] = useState(false);

  const handleMouseEnter5 = () => {
    setDropdownOpen5(true);
  };

  const handleMouseLeave5 = () => {
    setDropdownOpen5(false);
  };

  return (
    <div className="w-full h-[90px] bg-white flex justify-center items-center">
      <div className="w-[25%] flex justify-center items-center">
        <Link href='/' className="text-3xl font-bold font-serif">Site Name</Link>
      </div>

      <div className="hidden tablet:flex w-[50%] justify-center items-center">
        <Navlink
          activeClasses="active-red"
          className="text-xl p-2 rounded-lg font-serif"
          href="/"
          text="Home"
        />

        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="h-[15px] w-[32px] absolute mt-[-15px] ml-[20px] bg-red-500 flex justify-center items-center text-white">
            <p className="text-[10px]">New</p>
          </div>
          <Navlink
            activeClasses="active-red"
            className="text-xl font-serif p-2 rounded-lg"
            href="/shop"
            text={
              <>
                Shop <DownOutlined className="text-[15px]" />
              </>
            }
          />

          {dropdownOpen && (
            <div className="absolute ml-[-37vw] top-full w-[90vw] bg-white shadow-xl rounded-lg p-6 flex justify-between z-30">
              <div className="w-1/4">
                <h3 className="text-xl font-medium mb-2 opacity-90">
                  Women&apos;s Fashion
                </h3>
                <div className="h-[1px] w-[80%] bg-slate-200" />
                <ul>
                  <li className="mt-4">
                    <Navlink
                      className="opacity-70 hover:opacity-100"
                      href="/category/dresses"
                      text="Dresses"
                    />
                  </li>
                  <li className="mt-4">
                    <Navlink
                      className="opacity-70 hover:opacity-100"
                      href="/category/tops"
                      text="Tops & Blouses"
                    />
                  </li>
                  <li className="mt-4">
                    <Navlink
                      className="opacity-70 hover:opacity-100"
                      href="/category/sweaters"
                      text="Sweaters & Cardigans"
                    />
                  </li>
                  <li className="mt-4">
                    <Navlink
                      className="opacity-70 hover:opacity-100"
                      href="/category/jackets"
                      text="Jackets & Coats"
                    />
                  </li>
                  <li className="mt-4">
                    <Navlink
                      className="opacity-70 hover:opacity-100"
                      href="/category/"
                      text="Pants & Jeans"
                    />
                  </li>
                  <li className="mt-4">
                    <Navlink
                      className="opacity-70 hover:opacity-100"
                      href="/category/"
                      text="Skirts"
                    />
                  </li>
                  <li className="mt-4">
                    <Navlink
                      className="opacity-70 hover:opacity-100"
                      href="/category/"
                      text="Activewear"
                    />
                  </li>
                  <li className="mt-4">
                    <Navlink
                      className="opacity-70 hover:opacity-100"
                      href="/category/"
                      text="Lingerie & Sleepwear"
                    />
                  </li>
                </ul>
              </div>

              <div className="w-1/4">
                <h3 className="text-xl font-medium mb-2 opacity-90">
                  Men&apos;s Fashion
                </h3>
                <div className="h-[1px] w-[80%] bg-slate-200" />
                <ul>
                  <li className="mt-4">
                    <Navlink
                      className="opacity-70 hover:opacity-100"
                      href="/category/shirts"
                      text="Shirts"
                    />
                  </li>
                  <li className="mt-4">
                    <Navlink
                      className="opacity-70 hover:opacity-100"
                      href="/category/tshirts"
                      text="T-Shirts & Polos"
                    />
                  </li>
                  <li className="mt-4">
                    <Navlink
                      className="opacity-70 hover:opacity-100"
                      href="/category/sweaters"
                      text="Sweaters & Hoodies"
                    />
                  </li>
                  <li className="mt-4">
                    <Navlink
                      className="opacity-70 hover:opacity-100"
                      href="/category/jackets"
                      text="Jackets & Blazers"
                    />
                  </li>
                </ul>
              </div>

              <div className="w-1/4">
                <h3 className="text-xl font-medium mb-2 opacity-90">
                  Accessories
                </h3>
                <div className="h-[1px] w-[80%] bg-slate-200" />
                <ul>
                  <li className="mt-4">
                    <Navlink
                      className="opacity-70 hover:opacity-100"
                      href="/category/bags"
                      text="Bags & Purses"
                    />
                  </li>
                  <li className="mt-4">
                    <Navlink
                      className="opacity-70 hover:opacity-100"
                      href="/category/hats"
                      text="Hats & Caps"
                    />
                  </li>
                  <li className="mt-4">
                    <Navlink
                      className="opacity-70 hover:opacity-100"
                      href="/category/scarves"
                      text="Scarves & Shawls"
                    />
                  </li>
                  <li className="mt-4">
                    <Navlink
                      className="opacity-70 hover:opacity-100"
                      href="/category/sunglasses"
                      text="Sunglasses"
                    />
                  </li>
                </ul>
              </div>

              <div className="w-1/4">
                <h3 className="text-xl font-medium mb-2 opacity-90">
                  Footwear
                </h3>
                <div className="h-[1px] w-[80%] bg-slate-200" />
                <ul>
                  <li className="mt-4">
                    <Navlink
                      className="opacity-70 hover:opacity-100"
                      href="/category/flats"
                      text="Flats & Loafers"
                    />
                  </li>
                  <li className="mt-4">
                    <Navlink
                      className="opacity-70 hover:opacity-100"
                      href="/category/sneakers"
                      text="Sneakers & Athletic"
                    />
                  </li>
                  <li className="mt-4">
                    <Navlink
                      className="opacity-70 hover:opacity-100"
                      href="/category/dress-shoes"
                      text="Dress Shoes"
                    />
                  </li>
                  <li className="mt-4">
                    <Navlink
                      className="opacity-70 hover:opacity-100"
                      href="/category/heels"
                      text="Heels & Pumps"
                    />
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div
          className="relative"
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          <div className="h-[15px] w-[32px] absolute mt-[-15px] ml-[50px] bg-blue-600 flex justify-center items-center text-white">
            <p className="text-[10px]">Hot</p>
          </div>
          <Navlink
            activeClasses="active-red"
            className="text-xl font-serif p-2 rounded-lg"
            href="/shop"
            text={
              <>
                Categories <DownOutlined className="text-[15px]" />
              </>
            }
          />

          {dropdownOpen2 && (
            <div className="absolute ml-[-43vw] top-full w-[90vw] bg-white shadow-xl rounded-lg p-6 flex justify-between z-30">
              <div className="w-1/4">
                <Link href="/category/">
                  <h3 className="text-xl font-medium mb-2 opacity-70 hover:opacity-100">
                    Featured Product
                  </h3>
                  <div className="h-[1px] w-[80%] bg-slate-200" />
                  <Image
                    alt="Img"
                    src={Img1}
                    className="mt-6 h-[250px] w-[250px] rounded-2xl shadow-pink-200"
                  />
                </Link>
                <div className="h-6" />
                <Link href="/category/">
                  <h3 className="text-xl font-medium mb-2 opacity-70 hover:opacity-100">
                    Accessories
                  </h3>
                  <div className="h-[1px] w-[80%] bg-slate-200" />
                  <Image
                    alt="Img"
                    src={Img2}
                    className="mt-6 h-[250px] w-[250px] rounded-2xl shadow-pink-200"
                  />
                </Link>
              </div>

              <div className="w-1/4">
                <Link href="/category/">
                  <h3 className="text-xl font-medium mb-2 opacity-70 hover:opacity-100">
                    New Arrivals
                  </h3>
                  <div className="h-[1px] w-[80%] bg-slate-200" />
                  <Image
                    alt="Img"
                    src={Img3}
                    className="mt-6 h-[250px] w-[250px] rounded-2xl shadow-pink-200"
                  />
                </Link>
                <div className="h-6" />
                <Link href="/category/">
                  <h3 className="text-xl font-medium mb-2 opacity-70 hover:opacity-100">
                    Footwear
                  </h3>
                  <div className="h-[1px] w-[80%] bg-slate-200" />
                  <Image
                    alt="Img"
                    src={Img4}
                    className="mt-6 h-[250px] w-[250px] rounded-2xl shadow-pink-200"
                  />
                </Link>
              </div>

              <div className="w-1/4">
                <Link href="/category/">
                  <h3 className="text-xl font-medium mb-2 opacity-70 hover:opacity-100">
                    Summer Styles
                  </h3>
                  <div className="h-[1px] w-[80%] bg-slate-200" />
                  <Image
                    alt="Img"
                    src={Img5}
                    className="mt-6 h-[250px] w-[250px] rounded-2xl shadow-pink-200"
                  />
                </Link>
                <div className="h-6" />
                <Link href="/category/">
                  <h3 className="text-xl font-medium mb-2 opacity-70 hover:opacity-100">
                    Men
                  </h3>
                  <div className="h-[1px] w-[80%] bg-slate-200" />
                  <Image
                    alt="Img"
                    src={Img6}
                    className="mt-6 h-[250px] w-[250px] rounded-2xl shadow-pink-200"
                  />
                </Link>
              </div>

              <div className="w-1/4">
                <Link href="/category/">
                  <h3 className="text-xl font-medium mb-2 opacity-70 hover:opacity-100">
                    Winter Fashion
                  </h3>
                  <div className="h-[1px] w-[80%] bg-slate-200" />
                  <Image
                    alt="Img"
                    src={Img7}
                    className="mt-6 h-[250px] w-[250px] rounded-2xl shadow-pink-200"
                  />
                </Link>
                <div className="h-6" />
                <Link href="/category/">
                  <h3 className="text-xl font-medium mb-2 opacity-70 hover:opacity-100">
                    Women
                  </h3>
                  <div className="h-[1px] w-[80%] bg-slate-200" />
                  <Image
                    alt="Img"
                    src={Img8}
                    className="mt-6 h-[250px] w-[250px] rounded-2xl shadow-pink-200"
                  />
                </Link>
              </div>
            </div>
          )}
        </div>

        <div
          className="relative"
          onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}
        >
          <Navlink
            activeClasses="active-red"
            className="text-xl font-serif p-2 rounded-lg"
            href="/page"
            text={
              <>
                Page <DownOutlined className="text-[15px]" />
              </>
            }
          />

          {dropdownOpen3 && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-30">
              <Navlink
                activeClasses="active-red"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100  hover:text-colorF3"
                href="/contact"
                text="Contact"
              />
              <Navlink
                activeClasses="active-red"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100  hover:text-colorF3"
                href="/about-us"
                text="About us"
              />
              <Navlink
                activeClasses="active-red"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100  hover:text-colorF3"
                href="/services"
                text="Service"
              />
              <Navlink
                activeClasses="active-red"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100  hover:text-colorF3"
                href="/faq"
                text="Faq"
              />
              <Navlink
                activeClasses="active-red"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100  hover:text-colorF3"
                href="/sizeChart"
                text="Size-Chart"
              />
              <Navlink
                activeClasses="active-red"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-colorF3"
                href="/PurchaseNow"
                text="Purchase Now"
              />
            </div>
          )}
        </div>
      </div>

      <div className="hidden tablet:flex w-[25%] justify-center items-center">
        <div
          className="relative"
          onMouseEnter={handleMouseEnter4}
          onMouseLeave={handleMouseLeave4}
        >
          <div className="text-red-600 opacity-90 hover:opacity-100 font-serif">
            Eng <DownOutlined className="text-[15px]" />
          </div>

          {dropdownOpen4 && (
            <div className="absolute top-full left-0 mt-2 ml-[-2vw] w-40 p-2 bg-slate-200 shadow-lg rounded-md z-30">
              English 🇬🇧
            </div>
          )}
        </div>

        <div
          className="relative"
          onMouseEnter={handleMouseEnter5}
          onMouseLeave={handleMouseLeave5}
        >
          <div className="opacity-90 hover:opacity-100 ml-3">
            <UserOutlined className="text-[22px]" />
          </div>

          {dropdownOpen5 && (
            <div className="absolute top-full mt-0 left-0 ml-[-3vw] w-40 bg-white shadow-lg z-30">
              <Navlink
                activeClasses="active-red"
                className="block px-4 mt-2 py-2 text-gray-700 hover:bg-gray-100  hover:text-colorF3"
                href="/account"
                text="My Account"
              />

              <Navlink
                activeClasses="active-red"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100  hover:text-colorF3"
                href="/wishlist"
                text="Wishlist"
              />

              <Navlink
                activeClasses="active-red"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100  hover:text-colorF3"
                href="/login"
                text="LogIn"
              />
            </div>
          )}
        </div>

        <Navlink
          activeClasses="active-red"
          className="ml-3"
          href="/cart"
          text={
            <div className="flex">
              <ShoppingCartOutlined className="text-[25px]" />
              <p className="mt-[-10px] opacity-70">0</p>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default HeaderTow;
