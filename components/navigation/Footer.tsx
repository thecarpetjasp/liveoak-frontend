"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { NAV_LINKS } from "./navigation-constants";
import Image from "next/image";

export default function Footer() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [endProgress, setEndProgress] = useState(1);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const calculate = () => {
      if (!triggerRef.current) return;

      const triggerTop =
        triggerRef.current.getBoundingClientRect().top + window.scrollY;

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const revealStart = triggerTop - window.innerHeight;

      const progressRange = maxScroll - revealStart;

      if (progressRange <= 0) {
        setEndProgress(1);
        return;
      }

      setEndProgress(Math.min(1, Math.max(0, progressRange / maxScroll)));
    };

    calculate();

    window.addEventListener("resize", calculate);
    window.addEventListener("load", calculate);

    return () => {
      window.removeEventListener("resize", calculate);
      window.removeEventListener("load", calculate);
    };
  }, []);

  const revealProgress = useTransform(
    scrollYProgress,
    [endProgress === 1 ? 0 : 1 - endProgress, 1],
    [0, 1],
  );

  // Footer opacity
  const opacity = useTransform(revealProgress, [0, 1], [0, 1]);

  // Footer content scale
  const scale = useTransform(revealProgress, [0, 1], [0.9, 1]);

  // Blur overlay
  const blur = useTransform(revealProgress, [0, 1], [5, 0]);

  const backdropFilter = useTransform(blur, (value) => `blur(${value}px)`);

  return (
    <>
      <div ref={triggerRef} className="h-px w-full" />

      <motion.footer
        className="sticky bottom-0 z-0 w-full bg-white text-black"
        style={{
          opacity,
        }}
      >
        <motion.div
          className="relative flex h-full w-full"
          style={{
            scale,
          }}
        >
          <FooterContent></FooterContent>
          {/* Blur layer */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{
              backdropFilter,
              WebkitBackdropFilter: backdropFilter,
            }}
          />
        </motion.div>
      </motion.footer>
    </>
  );
}

export function FooterContent() {
  const getLink = (href: string) =>
    NAV_LINKS.find((link) => link.href === href);

  const exploreLinks = [
    getLink("#home"),
    getLink("#about"),
    getLink("#news"),
  ].filter(Boolean);

  const discoverLinks = [
    getLink("#emethane-process"),
    getLink("#project-map"),
    getLink("#faq"),
  ].filter(Boolean);

  const connectLinks = [getLink("#contact")].filter(Boolean);

  return (
    <div className="w-full bg-white text-black pt-10 pb-6 container-padding">
      <div className="mx-auto max-w-7xl">
        {/* Branding */}
        <div className="flex flex-col gap-3">
          <div className="text-3xl font-semibold tracking-tight">
            <Image
              src={"/live-oak-vertical-light.svg"}
              alt="LiveOak e-NG"
              width={1851}
              height={346}
              className="h-auto w-32"
            ></Image>
          </div>

          <p className="max-w-md leading-7 text-black/50">
            The future of natural gas, made differently.
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-10 grid grid-cols-2 gap-x-12 gap-y-12 border-t border-black/10 pt-10 md:mt-28 md:grid-cols-3 md:gap-x-16">
          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold">Explore</h3>

            <ul className="mt-5 space-y-3 text-sm text-black/50">
              {exploreLinks.map((link) => (
                <li key={link!.href}>
                  <a
                    href={link!.href}
                    className="transition-colors hover:text-black"
                  >
                    {link!.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h3 className="text-sm font-semibold">Discover</h3>

            <ul className="mt-5 space-y-3 text-sm text-black/50">
              {discoverLinks.map((link) => (
                <li key={link!.href}>
                  <a
                    href={link!.href}
                    className="transition-colors hover:text-black"
                  >
                    {link!.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold">Connect</h3>

            <ul className="mt-5 space-y-3 text-sm text-black/50">
              {connectLinks.map((link) => (
                <li key={link!.href}>
                  <a
                    href={link!.href}
                    className="transition-colors hover:text-black"
                  >
                    {link!.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col gap-4 border-t border-black/10 pt-6 text-sm text-black/40 sm:mt-28 sm:flex-row sm:items-center sm:justify-between">
          <FooterCopyright></FooterCopyright>
          <FooterMadeBy></FooterMadeBy>
        </div>
      </div>
    </div>
  );
}

export function FooterCopyright() {
  const currentYear = new Date().getFullYear();

  return <p>© {currentYear} LiveOak e-NG. All rights reserved.</p>;
}

export function FooterMadeBy() {
  return (
    <div className="flex items-center gap-2">
      <p>Made by</p>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://youcodeme.com"
        className="flex items-center gap-1 hover:text-black transition"
      >
        <div className="size-5 relative rounded-sm overflow-hidden">
          <Image
            src={"/youcodeme-small-logo.png"}
            alt="YouCodeMe Ltd."
            width={180}
            height={180}
          ></Image>
        </div>
        <p>YouCodeMe Ltd.</p>
      </a>
    </div>
  );
}
