"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextProps {
  mode: "dark" | "light";
  setMode: (mode: "dark" | "light") => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<"dark" | "light">("dark");

//   const handleThemeChange = () => {
//     if (mode === "dark") {
//       setMode("light");
//       document.documentElement.classList.add("light");
//     } else {
//       setMode("dark");
//       document.documentElement.classList.add("dark");
//     }
//   };

  useEffect(() => {
    // Apply the class to the document element when mode changes
    const className = mode === "dark" ? "dark" : "light";
    document.documentElement.classList.add(className);

    // Clean up: remove the class when the component unmounts or mode changes again
    return () => {
      document.documentElement.classList.remove(className);
    };
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
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
