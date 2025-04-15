import { useContext, createContext, useState, useEffect } from "react";

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setMode(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = (newMode: string) => {
    localStorage.setItem("theme", newMode);
    setMode(newMode);
    document.documentElement.classList.toggle("dark", newMode === "dark");
    console.log("theme changed", newMode);
  };

  return (
    <ThemeContext.Provider value={{ mode, setMode: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside of ThemeProvider");
  }
  return context;
};

export default ThemeProvider;
