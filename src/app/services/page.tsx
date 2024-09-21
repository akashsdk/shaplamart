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
      content: "Coming Soon !! We're working hard to bring you something amazing. Stay tuned!",
    });
  };

  return (
    <div className="w-full">
      {contextHolder}
      <HeaderCart pageName="Services" />
      <div className="w-full mt-5 tablet:mt-10 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6">
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
    <div className="w-[350px] h-[350px] border rounded-xl flex flex-col justify-center items-center hover:shadow-xl">
      <Image alt={name} src={icon} className="w-15 h-15" />
      <p className="mt-4 text-3xl font-serif">{name}</p>
      <p className="w-[90%] text-center mt-3 opacity-70">{datals}</p>
      <button className="mt-5 hover:text-blue-600" onClick={onLearnMore}>
        Learn More
      </button>
    </div>
  );
};
