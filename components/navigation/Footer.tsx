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

  return (
    <>
      <div ref={triggerRef} className="h-px w-full" />

      <motion.footer className="sticky bottom-0 z-0 w-full bg-primary dark:bg-foreground text-background">
        <div className="relative">
          <motion.div
            className="relative flex h-full w-full"
            style={{
              scale,
              opacity,
            }}
          >
            <FooterContent></FooterContent>
          </motion.div>
        </div>
      </motion.footer>
    </>
  );
}

export function FooterContent() {
  const getLink = (href: string) =>
    NAV_LINKS.find((link) => link.href === href);

  const exploreLinks = [
    getLink("/"),
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
    <div className="w-full pt-10 pb-6 container-padding">
      <div className="mx-auto max-w-7xl">
        {/* Branding */}
        <div className="flex flex-col gap-3">
          <div className="text-3xl font-semibold tracking-tight">
            <Image
              src={"/live-oak-vertical-light.svg"}
              alt="LiveOak e-NG"
              width={1851}
              height={346}
              className="h-auto w-32 hidden dark:block"
            ></Image>
            <Image
              src={"/live-oak-vertical-blue-text.svg"}
              alt="LiveOak e-NG"
              width={1851}
              height={346}
              className="h-auto w-32 dark:hidden"
            ></Image>
          </div>

          <p className="max-w-lg leading-7 text-current/80 tracking-widest font-semibold uppercase text-sm">
            The future of natural gas, made differently.
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-10 grid grid-cols-2 gap-x-12 gap-y-12 border-t border-current/25 pt-10 md:mt-28 md:grid-cols-3 md:gap-x-16">
          {/* Explore */}
          <FooterColumnLinks
            title={"Explore"}
            links={exploreLinks}
          ></FooterColumnLinks>
          {/* Discover */}
          <FooterColumnLinks
            title={"Discover"}
            links={discoverLinks}
          ></FooterColumnLinks>
          {/* Connect */}
          <FooterColumnLinks
            title={"Connect"}
            links={connectLinks}
          ></FooterColumnLinks>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col gap-4 border-t border-black/10 pt-6 text-sm sm:mt-28 sm:flex-row sm:items-center sm:justify-between">
          <FooterCopyright></FooterCopyright>
          <FooterMadeBy></FooterMadeBy>
        </div>
      </div>
    </div>
  );
}

export function FooterColumnLinks({
  title,
  links,
}: {
  title: string;
  links: ({ href: string; label: string } | undefined)[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold tracking-widest text-secondary">
        {title}
      </h3>

      <ul className="mt-5 space-y-3 text-sm">
        {links.map((link) => (
          <li key={link!.href}>
            <a
              href={link!.href}
              className="transition-colors hover:text-current text-current/80 relative group py-1"
            >
              {link!.label}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary origin-left scale-x-0 group-hover:scale-x-100 transition"></span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FooterCopyright() {
  const currentYear = new Date().getFullYear();

  return (
    <p className="text-current/80">
      © {currentYear} LiveOak e-NG. All rights reserved.
    </p>
  );
}

export function FooterMadeBy() {
  return (
    <div className="flex items-center gap-2">
      <p className="text-current/80">Made by</p>
      <motion.a
        rel="noopener noreferrer"
        target="_blank"
        href="https://youcodeme.com"
        className="flex items-center gap-1 hover:text-current text-current/80 transition"
        whileHover="hover"
      >
        <motion.div
          className="size-6 relative rounded-sm overflow-hidden origin-left"
          variants={{
            hover: {
              scale: 2,
            },
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Image
            src={"/youcodeme-small-logo.png"}
            alt="YouCodeMe Ltd."
            fill
          ></Image>
        </motion.div>
        <div className="overflow-hidden">
          <motion.p
            variants={{
              hover: {
                x: "-100%",
              },
            }}
          >
            YouCodeMe Ltd.
          </motion.p>
        </div>
      </motion.a>
    </div>
  );
}
