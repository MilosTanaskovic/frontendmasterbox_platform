"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextProps {
  mode: "light" | "dark";
  setMode: (mode: "light" | "dark") => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const handleThemeChange = () => {
    if (mode === "dark") {
      setMode("light");
      document.documentElement.classList.add("light");
    } else {
      setMode("dark");
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    handleThemeChange();
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
