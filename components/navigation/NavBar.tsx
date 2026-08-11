"use client";

import { useState } from "react";
import Link from "next/link";
import MobileMenuBtn from "./MobileMenuBtn";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import Image from "next/image";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ── Top bar ───────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-background/50 backdrop-blur-sm">
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
            ></Image>
            <Image
              src={"/live-oak-website-dark-bg.svg"}
              alt="LiveOak e-NG"
              width={1851}
              height={346}
              className="w-64 h-auto hidden dark:block"
            ></Image>
          </Link>

          {/* Desktop right controls — links stretch full height, toggle centred */}
          <DesktopMenu />

          {/* Mobile Menu Button — md:hidden so it doesn't occupy space on desktop */}
          <MobileMenuBtn menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </nav>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></MobileMenu>
    </>
  );
}
