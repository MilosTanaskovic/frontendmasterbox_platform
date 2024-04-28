/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextProps {
  mode: "dark" | "light" | "system";
  useMode: (mode: "dark" | "light" | "system") => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, useMode] = useState<"dark" | "light" | "system">("light");

  const handleThemeChange = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      useMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      useMode("light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    handleThemeChange();
  }, [mode]);

  // useEffect(() => {
  //   // Apply the class to the document element when mode changes
  //   const className = mode === "dark" ? "dark" : "light";
  //   document.documentElement.classList.add(className);

  //   // Clean up: remove the class when the component unmounts or mode changes again
  //   return () => {
  //     document.documentElement.classList.remove(className);
  //   };
  // }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, useMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
