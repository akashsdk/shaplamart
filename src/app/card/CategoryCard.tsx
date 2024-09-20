"use client";
import Link from "next/link";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface CategoryCardProps {
  categoryName: string;
  link:string;
  image: StaticImageData;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ categoryName, link, image }) => {
  return (
    <Link href={link} className="h-[150px] tablet:h-[170px] w-[120px] tablet:w-[140px] border-2 rounded-lg hover:shadow-xl opacity-80 hover:opacity-100 flex flex-col justify-center items-center">
        <Image alt={categoryName} src={image} className="h-[60px] tablet:h-[80px] w-[60px] tablet:w-[80px]"/>
        <p className="text-base tablet:text-xl text-center opacity-70  font-serif p-1 gap-0">{categoryName}</p>
    </Link>
  );
};

export default CategoryCard;
