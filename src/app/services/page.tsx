"use client"; // Ensure this is the very first line

import React from "react";
import HeaderCart from "../card/HeaderCart";
import Image, { StaticImageData } from "next/image";
import { message } from "antd";

import Icon1 from "@/Data/Icon/tshirt_1_100x.png";
import Icon2 from "@/Data/Icon/cap_100x (1).png";
import Icon3 from "@/Data/Icon/jewelry_100x.png";
import Icon4 from "@/Data/Icon/handcraft_100x.png";
import Icon5 from "@/Data/Icon/knitting_100x.png";
import Icon6 from "@/Data/Icon/cosmetics_100x (1).png";
import Icon7 from "@/Data/Icon/barbershop_100x.webp";
import Icon8 from "@/Data/Icon/giftbox_100x.png";
import Icon9 from "@/Data/Icon/staircase_100x.webp";

const Services: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const warning = () => {
    messageApi.open({
      type: "warning",
      content:
        "Coming Soon !! We're working hard to bring you something amazing. Stay tuned!",
    });
  };

  return (
    <div className="w-full flex justify-center items-center flex-col">
      {contextHolder}
      <HeaderCart pageName="Services" />
      <div className="mt-5 tablet:mt-10 mb-10 tablet:mb-16 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6 tablet:gap-10">
        <ServicesComponent
          icon={Icon1}
          name="T-shirt Design"
          datals="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          onLearnMore={warning}
        />

        <ServicesComponent
          icon={Icon2}
          name="Cap Design"
          datals="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          onLearnMore={warning}
        />
        <ServicesComponent
          icon={Icon3}
          name="Jewelry Design"
          datals="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          onLearnMore={warning}
        />

        <ServicesComponent
          icon={Icon4}
          name="Handcraft"
          datals="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          onLearnMore={warning}
        />

        <ServicesComponent
          icon={Icon5}
          name="Knitting & Sewing"
          datals="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          onLearnMore={warning}
        />

        <ServicesComponent
          icon={Icon6}
          name="Cosmetic Ideas"
          datals="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          onLearnMore={warning}
        />

        <ServicesComponent
          icon={Icon7}
          name="Barber Ideas"
          datals="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          onLearnMore={warning}
        />

        <ServicesComponent
          icon={Icon8}
          name="Gift Ideas"
          datals="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          onLearnMore={warning}
        />

        <ServicesComponent
          icon={Icon9}
          name="Home Decoration"
          datals="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          onLearnMore={warning}
        />
      </div>
    </div>
  );
};

export default Services;

const ServicesComponent: React.FC<{
  icon: StaticImageData;
  name: string;
  datals: string;
  onLearnMore: () => void;
}> = ({ icon, name, datals, onLearnMore }) => {
  return (
    <div className="tablet:w-[350px] w-[90%] ml-[5%] tablet:ml-0 tablet:h-[350px] h-auto border rounded-xl flex flex-col justify-center items-center hover:shadow-xl">
      <div className="w-full flex tablet:flex-col justify-center items-center">
        <div className="w-[20%] ml-[5%] tablet:w-full tablet:ml-0 tablet:flex justify-center items-center">
          <Image alt={name} src={icon} className="w-15 h-15" />
        </div>

        <div className="w-[75%] tablet:w-full tablet:flex justify-center items-center tablet:flex-col">
          <p className="mt-4 text-3xl font-serif">{name}</p>
          <p className="w-[98%] tablet:w-[90%] tablet:text-center mt-3 opacity-70">
            {datals}
          </p>
        </div>
      </div>
      <button
        className="mt-5 mb-5 tablet:mb-0 hover:text-blue-600"
        onClick={onLearnMore}
      >
        Learn More
      </button>
    </div>
  );
};
