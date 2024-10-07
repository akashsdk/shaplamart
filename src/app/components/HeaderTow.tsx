"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navlink from "./Navlink";
import Image from "next/image";
import { Drawer } from "antd";
import {
  DownOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  PicCenterOutlined,
  CloseOutlined,
  PlusOutlined,
  MinusOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  TikTokOutlined,
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

  // Mobile Screen
  const [open, setOpen] = useState(false);
  const [animateClose, setAnimateClose] = useState(false);
  const [animateClose2, setAnimateClose2] = useState(false);

  const showDrawer = () => {
    setAnimateClose2(true);

    setTimeout(() => {
      setOpen(true);
      setAnimateClose2(false);
    }, 500);
  };
  const onClose2 = () => {
    setAnimateClose(true);

    setTimeout(() => {
      setOpen(false);
      setAnimateClose(false);
    }, 500);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [submenuOpen, setSubmenuOpen] = useState(true);
  const [submenuOpen2, setSubmenuOpen2] = useState(false);
  const [submenuOpen3, setSubmenuOpen3] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
    setSubmenuOpen2(false);
    setSubmenuOpen3(false);
  };

  const toggleSubmenu2 = () => {
    setSubmenuOpen2(!submenuOpen2);
    setSubmenuOpen(false);
    setSubmenuOpen3(false);
  };

  const toggleSubmenu3 = () => {
    setSubmenuOpen3(!submenuOpen3);
    setSubmenuOpen(false);
    setSubmenuOpen2(false);
  };

  return (
    <div className="w-full h-[90px] bg-white flex justify-center items-center">
      <div className="w-[10%] ml-[5%] tablet:hidden">
        <button onClick={showDrawer}>
          <PicCenterOutlined
            className={`text-2xl transition-transform duration-500 ${
              animateClose2 ? "rotate-animation" : ""
            }`}
          />
        </button>
      </div>

      <div className="w-[50%] tablet:w-[25%] flex justify-center items-center">
        <Link href="/" className="text-3xl font-bold font-serif">
          Shapla<span className="text-blue-600">Mart</span>
        </Link>
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
                href="/size-chart"
                text="Size-Chart"
              />
              <Navlink
                activeClasses="active-red"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-colorF3"
                href="/purchase-now"
                text="Purchase Now"
              />
            </div>
          )}
        </div>
      </div>

      <div className="flex w-[30%] tablet:w-[25%] justify-center items-center">
        <div
          className="relative"
          onMouseEnter={handleMouseEnter4}
          onMouseLeave={handleMouseLeave4}
        >
          <div className="text-red-600 opacity-90 hover:opacity-100 font-serif">
            Eng <DownOutlined className="text-[15px] hidden tablet:block" />
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
            <div className="absolute top-full mt-0 tablet:left-0 ml-[-70px] tablet:ml-[-3vw] w-40 bg-white shadow-lg z-30">
              <Navlink
                activeClasses="active-red"
                className="block px-4 mt-2 py-2 text-gray-700 hover:bg-gray-100  hover:text-colorF3"
                href="/account"
                text="My Account"
                onClick={handleMouseLeave5}
              />

              <Navlink
                activeClasses="active-red"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100  hover:text-colorF3"
                href="/wishlist"
                text="Wishlist"
                onClick={handleMouseLeave5}
              />

              <Navlink
                activeClasses="active-red"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100  hover:text-colorF3"
                href="/login"
                text="LogIn"
                onClick={handleMouseLeave5}
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

      {/* Mobile Screen */}
      <Drawer
        title=""
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
      >
        <div className="w-full">
          <div className="flex justify-between items-center">
            <p className="text-3xl font-semibold font-serif">
              Shapla<span className="text-blue-600">Mart</span>
            </p>
            <button onClick={onClose2}>
              <CloseOutlined
                className={`text-2xl transition-transform duration-500 ${
                  animateClose ? "rotate-animation" : ""
                }`}
              />
            </button>
          </div>
          <div className="h-[1px] w-full bg-slate-300 mt-5" />

          <div className="mt-3">
            <Link
              href="/"
              onClick={onClose}
              className="text-xl font-serif hover:text-blue-600"
            >
              Home
            </Link>

            {/* Shop */}
            <div className="w-full flex justify-between items-center mt-5">
              <div className="h-[15px] w-[32px] absolute mt-[-35px] ml-[20px] bg-red-500 flex justify-center items-center text-white">
                <p className="text-[10px]">New</p>
              </div>
              <Link
                href="/shop"
                onClick={onClose}
                className="text-xl font-serif hover:text-blue-600"
              >
                Shop
              </Link>

              <button onClick={toggleSubmenu} className="w-[15%]">
                {submenuOpen ? (
                  <MinusOutlined className="text-xl" />
                ) : (
                  <PlusOutlined className="text-xl" />
                )}
              </button>
            </div>
            <div
              className={`ml-[10%] mt-3 mb-4 opacity-70 flex flex-col overflow-hidden transition-all duration-500 ${
                submenuOpen ? "max-h-[300px]" : "max-h-0"
              }`}
            >
              <Link
                href="/"
                onClick={onClose}
                className="text-lg font-serif hover:text-blue-600"
              >
                Women's Fashion
              </Link>

              <Link
                href="/"
                onClick={onClose}
                className="text-lg mt-2 font-serif hover:text-blue-600"
              >
                Men's Fashion
              </Link>

              <Link
                href="/"
                onClick={onClose}
                className="text-lg mt-2 font-serif hover:text-blue-600"
              >
                Baby Fashion
              </Link>

              <Link
                href="/"
                onClick={onClose}
                className="text-lg mt-2 font-serif hover:text-blue-600"
              >
                Accessories
              </Link>

              <Link
                href="/"
                onClick={onClose}
                className="text-lg mt-2 font-serif hover:text-blue-600"
              >
                Footwear
              </Link>
            </div>

            {/* Categories */}
            <div className="w-full flex justify-between items-center mt-2">
              <div className="h-[15px] w-[32px] absolute mt-[-35px] ml-[50px] bg-blue-600 flex justify-center items-center text-white">
                <p className="text-[10px]">Hot</p>
              </div>
              <Link
                href="/categories"
                onClick={onClose}
                className="text-xl font-serif hover:text-blue-600"
              >
                Categories
              </Link>

              <button onClick={toggleSubmenu2} className="w-[15%]">
                {submenuOpen2 ? (
                  <MinusOutlined className="text-xl" />
                ) : (
                  <PlusOutlined className="text-xl" />
                )}
              </button>
            </div>
            <div
              className={`ml-[10%] mt-3 opacity-70 flex flex-col overflow-hidden transition-all duration-500 ${
                submenuOpen2 ? "max-h-[350px]" : "max-h-0"
              }`}
            >
              <Link
                href="/categories"
                onClick={onClose}
                className="text-lg font-serif hover:text-blue-600"
              >
                Featured Product
              </Link>

              <Link
                href="/categories"
                onClick={onClose}
                className="text-lg mt-2 font-serif hover:text-blue-600"
              >
                New Arrivals
              </Link>

              <Link
                href="/categories"
                onClick={onClose}
                className="text-lg mt-2 font-serif hover:text-blue-600"
              >
                Summer Styles
              </Link>

              <Link
                href="/categories"
                onClick={onClose}
                className="text-lg mt-2 font-serif hover:text-blue-600"
              >
                Winter Fashion
              </Link>

              <Link
                href="/categories"
                onClick={onClose}
                className="text-lg mt-2 font-serif hover:text-blue-600"
              >
                Footwear
              </Link>

              <Link
                href="/categories"
                onClick={onClose}
                className="text-lg mt-2 font-serif hover:text-blue-600"
              >
                Accessories
              </Link>

              <Link
                href="/categories"
                onClick={onClose}
                className="text-lg mt-2 font-serif hover:text-blue-600"
              >
                Footwear
              </Link>

              <Link
                href="/categories"
                onClick={onClose}
                className="text-lg mt-2 font-serif hover:text-blue-600"
              >
                Men
              </Link>

              <Link
                href="/categories"
                onClick={onClose}
                className="text-lg mt-2 font-serif hover:text-blue-600"
              >
                Women
              </Link>
            </div>

            {/* Blog */}
            <Link
              href="/Blog"
              onClick={onClose}
              className="text-xl font-serif hover:text-blue-600"
            >
              Blog
            </Link>

            {/* Pages */}
            <div className="w-full flex justify-between items-center mt-5">
              <Link
                href="/categories"
                onClick={onClose}
                className="text-xl font-serif hover:text-blue-600"
              >
                Pages
              </Link>

              <button onClick={toggleSubmenu3} className="w-[15%]">
                {submenuOpen3 ? (
                  <MinusOutlined className="text-xl" />
                ) : (
                  <PlusOutlined className="text-xl" />
                )}
              </button>
            </div>
            <div
              className={`ml-[10%] mt-3 opacity-70 flex flex-col overflow-hidden transition-all duration-500 ${
                submenuOpen3 ? "max-h-[300px]" : "max-h-0"
              }`}
            >
              <Link
                href="/contact"
                onClick={onClose}
                className="text-lg font-serif hover:text-blue-600"
              >
                Contact
              </Link>

              <Link
                href="/about-us"
                onClick={onClose}
                className="text-lg mt-2 font-serif hover:text-blue-600"
              >
                About Us
              </Link>

              <Link
                href="/services"
                onClick={onClose}
                className="text-lg mt-2 font-serif hover:text-blue-600"
              >
                Services
              </Link>

              <Link
                href="/faq"
                onClick={onClose}
                className="text-lg mt-2 font-serif hover:text-blue-600"
              >
                FAQ
              </Link>

              <Link
                href="/size-chart"
                onClick={onClose}
                className="text-lg mt-2 font-serif hover:text-blue-600"
              >
                Size Chart
              </Link>

              <Link
                href="/purchase-now"
                onClick={onClose}
                className="text-lg mt-2 font-serif hover:text-blue-600"
              >
                Purchase Now
              </Link>
            </div>
          </div>
          <div className="h-[1px] w-full bg-slate-300 mt-5" />

          <div className="w-full mt-5 flex justify-evenly items-center">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" opacity-60 hover:opacity-100 hover:text-blue-500 cursor-pointer"
            >
              <FacebookOutlined className="text-[35px]" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" opacity-60 hover:opacity-100 hover:text-blue-500 cursor-pointer"
            >
              <TwitterOutlined className="text-[35px]" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" opacity-60 hover:opacity-100 hover:text-blue-500 cursor-pointer"
            >
              <InstagramOutlined className="text-[35px]" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" opacity-60 hover:opacity-100 hover:text-blue-500 cursor-pointer"
            >
              <YoutubeOutlined className="text-[35px]" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" opacity-60 hover:opacity-100 hover:text-blue-500 cursor-pointer"
            >
              <TikTokOutlined className="text-[35px]" />
            </a>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default HeaderTow;
