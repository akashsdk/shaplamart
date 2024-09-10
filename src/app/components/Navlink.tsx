"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavlinkProps = {
  href: string;
  text: string | React.ReactNode;
  activeClasses?: string;
  className?: string;
  onClick?: () => void; // Added onClick prop
};

const Navlink: React.FC<NavlinkProps> = ({
  href,
  text,
  activeClasses,
  className = "",
  onClick, // Added onClick prop
}) => {
  const path = usePathname();
  const isActive = path === href || (href === '/services' && path.startsWith('/services'));

  const combinedClasses = `${
    isActive && activeClasses ? activeClasses + " " : ""
  }text-colorF2 ${className}`.trim();

  return (
    <Link href={href} legacyBehavior>
      <a className={combinedClasses} onClick={onClick}>
        {text}
      </a>
    </Link>
  );
};

export default Navlink;
