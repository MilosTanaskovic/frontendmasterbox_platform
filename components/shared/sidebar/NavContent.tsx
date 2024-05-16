"use client";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavContentProps {
  className: string;
  sheetClose?: boolean;
}

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
          <Link
            key={link.route}
            href={link.route}
            prefetch={true}
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className={`${
              isActive
                ? " primary-gradient rounded-lg text-light-900"
                : " text-dark300_light900"
            } item-center flex justify-start gap-4 bg-transparent p-4`}
          >
            <Image
              src={link.imgURL}
              alt={link.label}
              width={20}
              height={20}
              className={`${isActive ? "" : "invert-colors"}`}
            />
            <p className={`${isActive ? "base-bold" : "base-medium"} max-lg:hidden`}>
              {link.label}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default NavContent;
