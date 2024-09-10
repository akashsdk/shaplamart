import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navlink from "./Navlink";
import {
  MenuOutlined,
  CloseOutlined,
  HomeOutlined,
  AppstoreOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Drawer, Collapse } from "antd";

import Icon from "@/Data/Icon/profile (1).png";
import Logo from "@/Data/Icon/Web-Logo.png";

const { Panel } = Collapse;

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-full relative">
      <div className="Header-Body">
        <div className="w-11/12 h-[80px] md:h-[100px] flex justify-between items-center">
          <div className="flex-1">
            <Link href="/">
              <Image src={Logo} className="md:h-[50px] h-[40px] md:w-[200px] w-[180px]" alt="" />
            </Link>
          </div>

          {/* For desktop screen (min-width: 1000px) */}
          <div className="hidden md:flex md:justify-end md:items-center">
            <Navlink
              activeClasses="active-red"
              className="mr-5 text-[20px] font-bold uppercase hover:text-colorF3 hover:bg-slate-100 p-2 rounded-lg"
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
                className="mr-5 text-[20px] font-bold uppercase hover:text-colorF3 hover:bg-slate-100 p-2 rounded-lg"
                href="/services"
                text="Services"
              />

              {dropdownOpen && (
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

            <Navlink
              activeClasses="active-red"
              className="mr-5 text-[20px] font-bold hover:text-colorF3 uppercase hover:bg-slate-100 p-2 rounded-lg"
              href="/about"
              text="About Us"
            />

            <Navlink
              activeClasses="active-red"
              className="mr-5 text-[20px] font-bold uppercase hover:text-colorF3 hover:bg-slate-100 p-2 rounded-lg"
              href="/contact"
              text="Contact"
            />

            <Navlink
              activeClasses="active-red"
              className="text-[20px] font-bold uppercase hover:text-colorF3"
              href="/profile"
              text={
                <>
                  <Image src={Icon} alt="Icon" className="h-[40px] w-[40px]" />
                </>
              }
            />
          </div>

          {/* For mobile screen (max-width: 999px) */}
          <div className="flex md:hidden">
            {open ? (
              <CloseOutlined
                className="text-[25px] cursor-pointer"
                onClick={onClose}
              />
            ) : (
              <MenuOutlined
                className="text-[25px] cursor-pointer"
                onClick={showDrawer}
              />
            )}
          </div>

          <Drawer
            title={
              <Link href="/" onClick={onClose}>
                <Image src={Logo} className="md:h-[50px] h-[40px] md:w-[200px] w-[180px]" alt="" />
              </Link>
            }
            placement="left"
            closable={false}
            onClose={onClose}
            open={open}
            key="left"
          >
            <Navlink
              activeClasses="active-red"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 uppercase hover:text-colorF3"
              href="/"
              text={
                <>
                  <HomeOutlined className="mr-2" /> Home
                </>
              }
              onClick={onClose}
            />
            <Collapse bordered={false} ghost>
              <Panel
                header={
                  <span className="block mt-[-8px] px-4 py-2 text-gray-700 uppercase">
                    <AppstoreOutlined className="mr-2" /> Services{" "}
                    <DownOutlined className="ml-2" />
                  </span>
                }
                key="1"
              >
                <Navlink
                  activeClasses="active-red"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 uppercase hover:text-colorF3"
                  href="/services/contact-lenses"
                  text="Contact-Lenses"
                  onClick={onClose}
                />
                <Navlink
                  activeClasses="active-red"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 uppercase hover:text-colorF3"
                  href="/services/comprehensive"
                  text="comprehensive"
                  onClick={onClose}
                />
                <Navlink
                  activeClasses="active-red"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 uppercase hover:text-colorF3"
                  href="/services/keratoconus"
                  text="Keratoconus"
                  onClick={onClose}
                />
                <Navlink
                  activeClasses="active-red"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 uppercase hover:text-colorF3"
                  href="/services/phakic-lens"
                  text="Phakic-Lens"
                  onClick={onClose}
                />
                <Navlink
                  activeClasses="active-red"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 uppercase hover:text-colorF3"
                  href="/services/retina-care"
                  text="Retina-Care"
                  onClick={onClose}
                />
                <Navlink
                  activeClasses="active-red"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 uppercase hover:text-colorF3"
                  href="/services/glaucoma"
                  text="Glaucoma"
                  onClick={onClose}
                />
              </Panel>
            </Collapse>

            <Navlink
              activeClasses="active-red"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 uppercase hover:text-colorF3"
              href="/about"
              text={
                <>
                  <InfoCircleOutlined className="mr-2" /> About Us
                </>
              }
              onClick={onClose}
            />
            <Navlink
              activeClasses="active-red"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 uppercase hover:text-colorF3"
              href="/contact"
              text={
                <>
                  <PhoneOutlined className="mr-2" /> Contact
                </>
              }
              onClick={onClose}
            />
            <Navlink
              activeClasses="active-red"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 uppercase hover:text-colorF3"
              href="/profile"
              text={
                <>
                  <UserOutlined className="mr-2" /> Profile
                </>
              }
              onClick={onClose}
            />
          </Drawer>
        </div>
      </div>
    </div>
  );
}
