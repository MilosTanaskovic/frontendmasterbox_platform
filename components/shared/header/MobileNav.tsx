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
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className=" flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map((link) => {
        const isActive =
          (pathname.includes(link.route) && link.route.length > 1) ||
          pathname === link.route;
        return (
          <SheetClose key={link.route} asChild>
            <Link
              href={link.route}
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
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {link.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

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
            <NavContent />
          </SheetClose>
        </div>
        {/** Signup & Logout btns */}
        <SheetFooter>
          <SignedOut>
            <div className=" flex flex-col gap-3">
              {/** Login btn */}
              <SheetClose asChild>
                <Link href={"/sign-in"}>
                  <Button className=" small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    <span className=" primary-text-gradient">Log In</span>
                  </Button>
                </Link>
              </SheetClose>
              {/** SignUp btn */}
              <SheetClose asChild>
                <Link href={"/sign-up"}>
                  <Button className=" small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    Sign Up
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
