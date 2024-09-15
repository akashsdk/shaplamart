import React, { useState } from "react";
import Link from "next/link";
import Navlink from "./Navlink";
import { DownOutlined } from "@ant-design/icons";

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

  return (
    <div className="w-full h-[90px] bg-white flex justify-center items-center">
      <div className="w-[25%] flex justify-center items-center">
        <h1 className="text-3xl font-bold">Site Name</h1>
      </div>

      <div className="w-[50%] flex justify-center items-center">
        <Navlink
          activeClasses="active-red"
          className="text-xl font-sans p-2 rounded-lg"
          href="/"
          text="Home"
        />

        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Navlink
            activeClasses="active-red"
            className="text-xl font-sans p-2 rounded-lg"
            href="/shop"
            text={
              <>
                Shop <DownOutlined className="text-[15px]" />
              </>
            }
          />

          {dropdownOpen && (
            <div className="absolute ml-[-44.5vw] top-full w-[90vw] bg-white shadow-xl rounded-lg p-6 flex justify-between">
              <div className="w-1/4">
                <h3 className="text-xl font-medium mb-2 opacity-90">Women&apos;s Fashion</h3>
                <div className="h-[1px] w-[80%] bg-slate-200"/>
                <ul>
                  <li className="mt-4" ><Navlink className="opacity-70 hover:opacity-100" href="/category/dresses" text="Dresses" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/tops" text="Tops & Blouses" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/sweaters" text="Sweaters & Cardigans" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/jackets" text="Jackets & Coats" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/" text="Pants & Jeans" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/" text="Skirts" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/" text="Activewear" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/" text="Lingerie & Sleepwear" /></li>
                </ul>
              </div>

              <div className="w-1/4">
                <h3 className="text-xl font-medium mb-2 opacity-90">Men&apos;s Fashion</h3>
                <div className="h-[1px] w-[80%] bg-slate-200"/>
                <ul>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/shirts" text="Shirts" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/tshirts" text="T-Shirts & Polos" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/sweaters" text="Sweaters & Hoodies" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/jackets" text="Jackets & Blazers" /></li>
                </ul>
              </div>

              <div className="w-1/4">
                <h3 className="text-xl font-medium mb-2 opacity-90">Accessories</h3>
                <div className="h-[1px] w-[80%] bg-slate-200"/>
                <ul>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/bags" text="Bags & Purses" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/hats" text="Hats & Caps" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/scarves" text="Scarves & Shawls" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/sunglasses" text="Sunglasses" /></li>
                </ul>
              </div>

              <div className="w-1/4">
                <h3 className="text-xl font-medium mb-2 opacity-90">Footwear</h3>
                <div className="h-[1px] w-[80%] bg-slate-200"/>
                <ul>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/flats" text="Flats & Loafers" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/sneakers" text="Sneakers & Athletic" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/dress-shoes" text="Dress Shoes" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/heels" text="Heels & Pumps" /></li>
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
          <Navlink
            activeClasses="active-red"
            className="text-xl font-sans p-2 rounded-lg"
            href="/shop"
            text={
              <>
                Categories <DownOutlined className="text-[15px]" />
              </>
            }
          />

          {dropdownOpen2 && (
            <div className="absolute ml-[-44.5vw] top-full w-[90vw] bg-white shadow-xl rounded-lg p-6 flex justify-between">
              <div className="w-1/4">
                <h3 className="text-xl font-medium mb-2 opacity-90">Women&apos;s Fashion 77</h3>
                <div className="h-[1px] w-[80%] bg-slate-200"/>
                <ul>
                  <li className="mt-4" ><Navlink className="opacity-70 hover:opacity-100" href="/category/dresses" text="Dresses" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/tops" text="Tops & Blouses" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/sweaters" text="Sweaters & Cardigans" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/jackets" text="Jackets & Coats" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/" text="Pants & Jeans" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/" text="Skirts" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/" text="Activewear" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/" text="Lingerie & Sleepwear" /></li>
                </ul>
              </div>

              <div className="w-1/4">
                <h3 className="text-xl font-medium mb-2 opacity-90">Men&apos;s Fashion</h3>
                <div className="h-[1px] w-[80%] bg-slate-200"/>
                <ul>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/shirts" text="Shirts" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/tshirts" text="T-Shirts & Polos" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/sweaters" text="Sweaters & Hoodies" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/jackets" text="Jackets & Blazers" /></li>
                </ul>
              </div>

              <div className="w-1/4">
                <h3 className="text-xl font-medium mb-2 opacity-90">Accessories</h3>
                <div className="h-[1px] w-[80%] bg-slate-200"/>
                <ul>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/bags" text="Bags & Purses" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/hats" text="Hats & Caps" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/scarves" text="Scarves & Shawls" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/sunglasses" text="Sunglasses" /></li>
                </ul>
              </div>

              <div className="w-1/4">
                <h3 className="text-xl font-medium mb-2 opacity-90">Footwear</h3>
                <div className="h-[1px] w-[80%] bg-slate-200"/>
                <ul>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/flats" text="Flats & Loafers" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/sneakers" text="Sneakers & Athletic" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/dress-shoes" text="Dress Shoes" /></li>
                  <li className="mt-4"><Navlink className="opacity-70 hover:opacity-100" href="/category/heels" text="Heels & Pumps" /></li>
                </ul>
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
            className="text-xl font-sans p-2 rounded-lg"
            href="/shop"
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
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 uppercase hover:text-colorF3"
              href="/services/contact-lenses"
              text="Contact Lenses"
            />
            <Navlink
              activeClasses="active-red"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 uppercase hover:text-colorF3"
              href="/services/comprehensive"
              text="Comprehensive"
            />
            <Navlink
              activeClasses="active-red"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 uppercase hover:text-colorF3"
              href="/services/keratoconus"
              text="Keratoconus"
            />
            <Navlink
              activeClasses="active-red"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 uppercase hover:text-colorF3"
              href="/services/phakic-lens"
              text="Phakic Lens"
            />
            <Navlink
              activeClasses="active-red"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 uppercase hover:text-colorF3"
              href="/services/retina-care"
              text="Retina Care"
            />
            <Navlink
              activeClasses="active-red"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 uppercase hover:text-colorF3"
              href="/services/glaucoma"
              text="Glaucoma"
            />
          </div>
          )} 
        </div>
      </div>

      <div className="w-[25%] flex justify-center items-center">
        {/* Right side content */}
      </div>
    </div>
  );
};

export default HeaderTow;
