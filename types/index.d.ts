export type ThemeType = {
  value: "dark" | "light" | "system";
  label: "Dark" | "Light" | "System";
  icon: string;
}

export type AppLinkType = {
  route: string;
  name: string;
}
export type SidebarLinkType = {
  imgURL: string;
  route: string;
  label: string;
}
