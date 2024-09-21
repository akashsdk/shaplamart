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
  onClick,
}) => {
  const path = usePathname();
  const isActive =
    path === href || (href === "/services" && path.startsWith("/services"));

  const combinedClasses = `${
    isActive && activeClasses ? activeClasses + " " : ""
  }text-colorF2 ${className}`.trim();

  return (
    <Link href={href} className={combinedClasses} onClick={onClick}>
      {text}
    </Link>
  );
};

export default Navlink;
