/* eslint-disable tailwindcss/no-custom-classname */
// this component using sheet ui
"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import NavContent from "../sidebar/NavContent";
import SignOut from "../sidebar/SignOut";

type MobileNavProps = {};

const MobileNav: React.FC<MobileNavProps> = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src={"/assets/icons/hamburger.svg"}
          alt="menu"
          width={36}
          height={36}
          className=" invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className=" background-light900_dark200 border-none"
      >
        {/** Logo */}
        <SheetHeader>
          <Link href={"/"} className=" flex items-center gap-1">
            <Image
              src={"/assets/images/site-logo.svg"}
              width={23}
              height={23}
              alt="FrontMasterBox Logo"
            />
            <p className=" h2-bold text-dark100_light900 font-spaceGrotesk">
              Frontend<span className="text-primary-500">Box</span>
            </p>
          </Link>
        </SheetHeader>
        {/** Nav Content */}
        <div>
          <SheetClose asChild>
            <NavContent className="flex h-full flex-col gap-6 pt-16" />
          </SheetClose>
        </div>
        {/** Signup & Logout btns */}
        <SheetFooter>
          <SignOut />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
