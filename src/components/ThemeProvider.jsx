"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("theme-light-blue");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Removemos a leitura antiga do localStorage para forçar o tema azul para todos
    localStorage.removeItem("rjprint-theme");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const html = document.documentElement;
    html.classList.remove("theme-dark", "theme-light-blue", "theme-light-orange");
    html.classList.add(theme);
    
  }, [theme, mounted]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
