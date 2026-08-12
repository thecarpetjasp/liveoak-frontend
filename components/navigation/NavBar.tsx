"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import MobileMenuBtn from "./MobileMenuBtn";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import Image from "next/image";
import { motion } from "motion/react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  // Height of the invisible trip-wire zone at the top of the viewport.
  // When the navbar is hidden, hovering into this area brings it back.
  const HOVER_THRESHOLD = 80;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 56) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Invisible trip-wire: fixed zone at the top of the viewport that
          reveals the navbar when hovered. Only active while navbar is hidden. */}
      {hidden && (
        <div
          className="fixed top-0 left-0 w-full z-50"
          style={{ height: HOVER_THRESHOLD }}
          onMouseEnter={() => setHidden(false)}
        />
      )}

      {/* ── Top bar ───────────────────────────────────────────────── */}
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-background/80 backdrop-blur-sm"
      >
        <nav className="flex items-stretch justify-between container-padding h-14">
          {/* Brand — opts out of stretch */}
          <Link
            href="/"
            className="xs:shrink-0 self-center hover:opacity-80 transition-opacity"
          >
            <Image
              src={"/live-oak-website-light-bg.svg"}
              alt="LiveOak e-NG"
              width={1851}
              height={346}
              className="w-64 h-auto dark:hidden"
              preload
            ></Image>
            <Image
              src={"/live-oak-website-dark-bg.svg"}
              alt="LiveOak e-NG"
              width={1851}
              height={346}
              className="w-64 h-auto hidden dark:block"
              preload
            ></Image>
          </Link>

          {/* Desktop right controls — links stretch full height, toggle centred */}
          <DesktopMenu />

          {/* Mobile Menu Button — md:hidden so it doesn't occupy space on desktop */}
          <MobileMenuBtn menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </nav>
      </motion.header>

      {/* Mobile Drawer */}
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></MobileMenu>
    </>
  );
}
