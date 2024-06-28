// this component using menubar ui
"use client";
import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import { themes } from "@/constants/global";

/**  if we need to use it globaly, 
then we should move it to types folder! */
type Item = {
  value: "dark" | "light" | "system";
  label: "Dark" | "Light" | "System";
  icon: string;
};

interface ThemeProps {}

const Theme: React.FC<ThemeProps> = () => {
  const { mode, useMode } = useTheme();

  const handleToggleTheme = (item: Item) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useMode(item.value);

    if (item.value !== "system") {
      localStorage.setItem("theme", item.value);
    } else {
      localStorage.removeItem("theme");
    }
  };

  return (
    <Menubar className=" relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {mode === "dark" ? (
            <Image
              src={"/assets/icons/moon.svg"}
              alt="moon"
              width={20}
              height={20}
              className=""
            />
          ) : (
            <Image
              src={"/assets/icons/sun.svg"}
              alt="sun"
              width={20}
              height={20}
              className=""
            />
          )}
        </MenubarTrigger>
        <MenubarContent className=" absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300">
          {/** Theme Toggles */}
          {themes.map((item) => (
            <MenubarItem
              key={item.value}
              className=" flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
              onClick={() => handleToggleTheme(item as Item)}
            >
              <Image
                src={item.icon}
                alt={item.value}
                width={16}
                height={16}
                className={`${mode === item.value ? "text-primary-500" : " active-theme"}`}
              />
              <p
                className={` body-semibold text-light-500 ${
                  mode === item.value
                    ? "text-primary-500"
                    : " " // active-theme
                }`}
              >
                {item.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
