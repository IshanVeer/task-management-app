import React from "react";
import { useTheme } from "@/context/ThemeProvider";
import { Switch } from "../ui/switch";

const Theme = () => {
  const { mode, setMode } = useTheme();
  const isDark = mode === "dark";
  return (
    <div className="flex mb-6 items-center justify-center gap-6 background-light800_dark300 px-2 py-3 rounded-sm ">
      <img src="/icons/icon-light-theme.svg" alt="light-theme" />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => {
          setMode(checked ? "dark" : "light");
        }}
      />
      <img src="/icons/icon-dark-theme.svg" alt="dark-theme" />
    </div>
  );
};

export default Theme;
