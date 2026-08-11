"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

// next-themes renders an inline <script> for FOUC prevention that is
// intentionally SSR-only. React 19 warns about it because it won't re-execute
// the script on the client — which is correct and expected behaviour.
// Intercept just this one message so it doesn't pollute the console.
if (typeof console !== "undefined") {
  const _consoleError = console.error.bind(console);
  console.error = (...args: Parameters<typeof console.error>) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Encountered a script tag")
    ) {
      return;
    }
    _consoleError(...args);
  };
}

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}
