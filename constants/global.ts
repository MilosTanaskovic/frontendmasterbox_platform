import {
  AppLinkType,
  ThemeType,
} from "@/types";

export const themes: ThemeType[] = [
  {
    value: "light",
    label: "Light",
    icon: "./assets/icons/sun.svg",
  },
  {
    value: "dark",
    label: "Dark",
    icon: "./assets/icons/moon.svg",
  },
  {
    value: "system",
    label: "System",
    icon: "./assets/icons/computer.svg",
  },
];

/** Main Apps routes */
export const AppLinks: AppLinkType[] = [
  {
    route: "/home",
    name: "DevOverflow",
  },
  {
    route: "/home-classroom",
    name: "DevFinder",
  },
  {
    route: "/home-app1",
    name: "App3",
  },
  {
    route: "/home-app2",
    name: "App4",
  },
];