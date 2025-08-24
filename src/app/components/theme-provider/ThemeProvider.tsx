"use client";

import { createContext, useContext } from "react";

type Theme = {
  color: {
    primary: string;
    secondary: string;
  };
};

const defaultTheme: Theme = {
  color: {
    primary: " #DFFF00",
    secondary: "#00FFFF",
  },
};

const ThemeContent = createContext<Theme>(defaultTheme);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeContent.Provider value={defaultTheme}>
        {children}
      </ThemeContent.Provider>
    </>
  );
}

export const useTheme = () => useContext(ThemeContent);
