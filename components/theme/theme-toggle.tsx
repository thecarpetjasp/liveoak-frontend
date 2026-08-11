"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Cycles light → dark → system → light
const NEXT_THEME: Record<string, string> = {
  light: "dark",
  dark: "system",
  system: "light",
};

const ICON: Record<string, string> = {
  light: "☀️",
  dark: "🌙",
  system: "💻",
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // `theme` is undefined on the server so we must wait until the client has
  // hydrated before rendering. The lint rule flags setState in effects, but
  // this is a single fire-once mount check with no cascade risk.
  useEffect(() => {
    setMounted(true); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);

  if (!mounted) return null;

  const current = theme ?? "system";

  return (
    <button
      onClick={() => setTheme(NEXT_THEME[current] ?? "light")}
      className="rounded-md p-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
      aria-label={`Switch theme (current: ${current})`}
    >
      {ICON[current]}
    </button>
  );
}
