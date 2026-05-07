"use client";

import type React from "react";
import { createContext, useContext } from "react";

type ThemeType = "system" | BasicThemeType;

import { useTheme } from "next-themes";
import type { BasicThemeType } from "@/types/global.types";

interface Props {
  children: React.ReactNode;
}

interface AppThemeContext {
  theme: "dark" | "light";
  handleChangeTheme: (config: ThemeType) => void;
}

const AppThemeContext = createContext<AppThemeContext>({
  theme: "dark",
  handleChangeTheme: () => {},
});

export const useAppThemeContext = () => useContext(AppThemeContext);

export const AppThemeProvider = ({ children }: Props) => {
  const { theme = "system", systemTheme, setTheme } = useTheme();

  const handleChangeTheme = (config: ThemeType) => {
    setTheme(config);
  };

  const finalTheme =
    theme === "system" ? systemTheme || "dark" : (theme as BasicThemeType);

  return (
    <AppThemeContext.Provider
      value={{
        theme: finalTheme,
        handleChangeTheme,
      }}
    >
      {children}
    </AppThemeContext.Provider>
  );
};
