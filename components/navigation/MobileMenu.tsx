"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ThemeToggle } from "../theme/theme-toggle";
import { NAV_LINKS } from "./navigation-constants";
import { MenuStateProps } from "./navigation-types";

export default function MobileMenu({ menuOpen, setMenuOpen }: MenuStateProps) {
  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [setMenuOpen]);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  return (
    <AnimatePresence>
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 ml:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Blur backdrop — click to close */}
          <motion.div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMenuOpen(false)}
          />

          {/* Slide-in panel — from the right */}
          <motion.div
            className="absolute inset-y-0 right-0 xs:w-1/2 w-5/6 flex flex-col bg-background shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          >
            {/* Panel header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <span className="text-sm font-semibold">Menu</span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
                className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <line x1="2" y1="2" x2="14" y2="14" />
                  <line x1="14" y1="2" x2="2" y2="14" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <nav
              className="flex flex-col gap-0.5 mb-auto overflow-y-auto isolate"
              onMouseLeave={() => setHoveredLink(null)}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-4 py-2.5 text-sm font-medium relative transition duration-75"
                  onMouseEnter={() => setHoveredLink(link.href)}
                >
                  {link.label}
                  {hoveredLink == link.href && (
                    <motion.span
                      layoutId="link-bg"
                      transition={{ duration: 0.2 }}
                      className="absolute top-0 left-0 h-full w-px bg-foreground"
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Theme toggle pinned to the bottom */}
            <div className="border-t border-gray-200 dark:border-gray-800 px-4 py-3 flex items-center justify-between">
              <span className="text-sm text-foreground/60">Theme</span>
              <ThemeToggle />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
