/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable camelcase */
import React from "react";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import GlobalPlatformProvider from "@/context/GlobalPlatformProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spaceGrotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "JavaScript CodeDancing Solution",
  description:
    "A community-driven platform for asking and aswering frontend programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in frontend web development, mobile app development, algorithms, data structure and more.",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <script src="http://localhost:8097"></script>
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <GlobalPlatformProvider>{children}</GlobalPlatformProvider>
      </body>
    </html>
  );
}
