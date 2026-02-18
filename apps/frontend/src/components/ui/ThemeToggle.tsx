"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Changer le thème"
      className="button"
    >
      {theme === "dark" ? "☀️ Clair" : "🌙 Sombre"}
    </button>
  );
}

