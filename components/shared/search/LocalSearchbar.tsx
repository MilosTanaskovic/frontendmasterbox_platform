"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

interface LocalSearchbarProps {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placholder: string;
  className?: string;
}

const LocalSearchbar: React.FC<LocalSearchbarProps> = ({
  route,
  iconPosition,
  imgSrc,
  placholder,
  className,
}) => {
  return (
    <div
      className={` background-light800_darkgradient flex min-h-[56px] grow items-center gap-1 rounded-xl px-4 ${className}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          width={24}
          height={24}
          alt="search"
          className=" cursor-pointer"
        />
      )}

      <Input
        type="text"
        placeholder={placholder}
        value={""}
        onChange={() => {}}
        className=" paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
      />
      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          width={24}
          height={24}
          alt="search"
          className=" cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearchbar;
