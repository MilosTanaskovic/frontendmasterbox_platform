"use client";
/* eslint-disable tailwindcss/no-custom-classname */
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";
import { AppLinks } from "@/constants/global";
import { AppLinkType } from "@/types";
import { usePathname } from "next/navigation";

interface HeaderProps {}

interface AppLinkProps {
  link: AppLinkType;
}

const AppLink: React.FC<AppLinkProps> = ({ link }) => {
  const { route, name } = link;
  const pathname = usePathname();

  const isActive =
    pathname.includes(route) && route.length > 1 && pathname === route;

  return (
    <Link key={route} href={route} className={`flex cursor-pointer flex-col`}>
      <span
        className={`${
          isActive
            ? "base-semibold text-primary-500"
            : "text-dark200_light900 hover:text-primary-500"
        }  base-medium py-4 `}
      >
        {name}
      </span>
      <span
        className={`${
          isActive ? "bg-primary-500" : ""
        } h-1 w-full`}
      ></span>
    </Link>
  );
};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header
      id="header"
      className="background-light900_dark200 fixed z-50 w-full gap-5 pt-6 shadow-light-300 sm:px-12 dark:shadow-none"
    >
      <div className=" flex-between flex">
        {/** Logo */}
        <Link href={"/"} className=" flex items-center gap-1">
          {/* <Image
          src={"/assets/images/site-logo.svg"}
          width={23}
          height={23}
          alt="FrontMasterBox Logo"
        /> */}
          <p className="h2-bold flex flex-col font-spaceGrotesk leading-5 text-dark-100 max-sm:hidden dark:text-light-900">
            <span>Frontend</span>
            <span className="text-primary-500">MasterBox</span>
          </p>
        </Link>
        {/** Global Search */}
        <GlobalSearch />
        {/** Theme & User Profile */}
        <div className=" flex-between gap-5">
          <Theme />
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-10 w-10",
                },
                variables: {
                  colorPrimary: "#ff7000",
                },
              }}
            />
          </SignedIn>

          {/** Mobile Menu */}
          <MobileNav />
        </div>
      </div>
      {/** App Links */}
      <nav aria-labelledby="AppLinks" className=" m-auto flex justify-center gap-8 pt-4 max-sm:overflow-x-auto">
        {AppLinks.map((link) => {
          return <AppLink key={link.route} link={link} />;
        })}
      </nav>
    </header>
  );
};

export default Header;
