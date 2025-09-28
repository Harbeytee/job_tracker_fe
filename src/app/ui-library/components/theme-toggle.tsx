"use client";

import { useTheme } from "next-themes";
enum Themes {
  Dark = "dark",
  Light = "light",
  System = "system",
}

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();

  const current = theme === Themes.System ? systemTheme : theme;

  return (
    <button
      className={`${current === Themes.Dark ? "text-white" : "text-black-950"}`}
      onClick={() =>
        setTheme(current === Themes.Dark ? Themes.Light : Themes.Dark)
      }
    >
      Switch to {current === Themes.Dark ? Themes.Light : Themes.Dark} mode
    </button>
  );
}
