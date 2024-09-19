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
    <Link href={link} className="h-[200px] w-[150px] border-2 rounded-lg border-blue-600 hover:shadow-xl">
        <Image alt={categoryName} src={image} />
    </Link>
  );
};

export default CategoryCard;
