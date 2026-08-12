import { useState } from "react";
import { ThemeToggle } from "../theme/theme-toggle";
import { NAV_LINKS } from "./navigation-constants";
import { motion } from "framer-motion";

export default function DesktopMenu() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  return (
    <div className="hidden ml:flex items-stretch gap-7">
      <ul
        className="flex items-stretch -gap-7"
        onMouseLeave={() => setHoveredLink(null)}
      >
        {NAV_LINKS.map((link) => (
          <li
            key={link.href}
            className="relative flex items-stretch"
            onMouseEnter={() => setHoveredLink(link.href)}
          >
            <a
              href={link.href}
              className="flex items-center text-sm text-foreground/65 hover:text-foreground transition-colors tracking-wide p-3"
            >
              {link.label}
            </a>
            {hoveredLink === link.href && (
              <motion.span
                layoutId="nav-underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary dark:bg-primary"
                transition={{ duration: 0.2 }}
              />
            )}
          </li>
        ))}
      </ul>
      <div className="self-center">
        <ThemeToggle />
      </div>
    </div>
  );
}
