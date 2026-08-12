"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

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
  const blur = useTransform(revealProgress, [0, 1], [3, 0]);

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
          className="relative flex h-full w-full items-center justify-center"
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
  return (
    <div className="w-full bg-white px-6 py-16 text-black md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Branding */}
        <div className="flex flex-col gap-6">
          <div className="text-3xl font-semibold tracking-tight">YourBrand</div>

          <p className="max-w-md text-base leading-7 text-black/50">
            Building thoughtful digital experiences with modern technology and
            clean design.
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 md:mt-28 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold">Product</h3>

            <ul className="mt-5 space-y-3 text-sm text-black/50">
              <li>
                <a href="#" className="transition-colors hover:text-black">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-black">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-black">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Company</h3>

            <ul className="mt-5 space-y-3 text-sm text-black/50">
              <li>
                <a href="#" className="transition-colors hover:text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-black">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-black">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Legal</h3>

            <ul className="mt-5 space-y-3 text-sm text-black/50">
              <li>
                <a href="#" className="transition-colors hover:text-black">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-black">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Social</h3>

            <ul className="mt-5 space-y-3 text-sm text-black/50">
              <li>
                <a href="#" className="transition-colors hover:text-black">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-black">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-black">
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col gap-4 border-t border-black/10 pt-6 text-sm text-black/40 sm:mt-28 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 YourBrand. All rights reserved.</p>

          <p>Made with care.</p>
        </div>
      </div>
    </div>
  );
}
