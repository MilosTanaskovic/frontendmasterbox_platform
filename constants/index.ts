import { SidebarLinkType, AppLinkType, ThemeType } from "@/types";

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

// App DevOverflow routes
export const sidebarLinks: SidebarLinkType[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/home",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];
