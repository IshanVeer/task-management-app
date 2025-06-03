"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeType {
  mode: string;
  themeToggleHandler: () => void;
}

// initialise theme context
const ThemeContext = createContext<ThemeType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState("light");

  // create a function to handle theme change

  const themeToggleHandler = () => {
    setMode((prev) => {
      const newMode = prev === "light" ? "dark" : "light";
      console.log(newMode, "current theme");
      return newMode;
    });
  };

  useEffect(() => {
    document.documentElement.className = mode;
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ themeToggleHandler, mode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

// Custom use Context Hook
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used inside theme provider");
  }

  return context;
};
