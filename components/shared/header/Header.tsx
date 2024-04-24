import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header
      id="header"
      className=" flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 sm:px-12 dark:shadow-none"
    >
      {/** Logo */}
      <Link href={"/"} className=" flex items-center gap-1">
        <Image
          src={"/assets/images/site-logo.svg"}
          width={23}
          height={23}
          alt="FrontMasterBox Logo"
        />
        <p className=" h2-bold font-spaceGrotesk text-dark-100 max-sm:hidden dark:text-light-900">
          Frontent<span className="text-primary-500">Box</span>
        </p>
      </Link>
      {/** Global Search */}
      GlobalSearch
      {/** Theme & User Profile */}
      <div className=" flex-between gap-5">
        Theme
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
                elements: {
                  avatarBox: 'h-10 w-10',
                },
                variables: {
                  colorPrimary: '#ff7000',
                },
              }}
          />
        </SignedIn>

        {/** Mobile Menu */}
      </div>
    </header>
  );
};

export default Header;