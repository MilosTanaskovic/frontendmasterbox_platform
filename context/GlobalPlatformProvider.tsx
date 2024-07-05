import React from "react";

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "./ThemeProvider";

export default function GlobalPlatformProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-text-gradient hover:text-primary-500",
        },
      }}
    >
      <ThemeProvider>{children}</ThemeProvider>
    </ClerkProvider>
  );
}
