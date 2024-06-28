"use client";
import { sidebarLinks } from "@/constants/dev-overflow-app";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavContentProps {
  className: string;
  sheetClose?: boolean;
}

interface NavLinkProps {
  route: string;
  label: string;
  imgURL: string;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  route,
  imgURL,
  label,
  isActive,
}) => {
  return (
    <Link
      key={route}
      href={route}
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className={`${
        isActive
          ? " primary-gradient rounded-lg text-light-900"
          : " text-dark300_light900"
      } item-center flex justify-start gap-4 bg-transparent p-4`}
    >
      <Image
        src={imgURL}
        alt={label}
        width={20}
        height={20}
        className={`${isActive ? "" : "invert-colors"}`}
      />
      <span
        className={`${isActive ? "base-bold" : "base-medium"} max-lg:hidden`}
      >
        {label}
      </span>
    </Link>
  );
};

const NavContent: React.FC<NavContentProps> = ({ className, sheetClose }) => {
  // using to check active links
  const pathname = usePathname();

  return (
    <div className={className}>
      {sidebarLinks.map((link) => {
        const isActive =
          (pathname.includes(link.route) && link.route.length > 1) ||
          pathname === link.route;
        return (
          <NavLink
            key={link.route}
            route={link.route}
            label={link.label}
            imgURL={link.imgURL}
            isActive={isActive}
          />
        );
      })}
    </div>
  );
};

export default NavContent;
