"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, easeOut, motion, useAnimate } from "motion/react";

// ─── Data ──────────────────────────────────────────────────────────────────

const PARTNERS = [
  {
    name: "TotalEnergies",
    logo: "https://totalenergies.com/themes/custom/totalenergies_com/dist/img/logo_totalenergies.png",
    url: "https://www.totalenergies.com",
    description:
      "Global integrated energy company bringing expertise in renewable power, hydrogen, LNG and large-scale project development.",
  },
  {
    name: "TES",
    logo: "/Logo_TES_RGB_Main_White.png",
    url: "https://www.tes-h2.com",
    description:
      "e-NG developer bringing expertise in the development and integration of large-scale e-NG value chains.",
  },
  {
    name: "Osaka Gas",
    logo: "https://www.osakagas.co.jp/en/assets/images/shared/logo.png",
    url: "https://www.osakagas.co.jp/en/",
    description:
      "Japanese gas utility and primary future offtaker supporting the deployment of e-NG in Japan.",
  },
  {
    name: "Toho Gas",
    logo: "https://www.tohogas.co.jp/resource/images/header-logo01-gl.svg",
    url: "https://www.tohogas.co.jp/lang/en/",
    description:
      "Japanese gas utility and primary future offtaker advancing the decarbonization of city gas.",
  },
  {
    name: "ITOCHU",
    logo: "https://www.itochu.co.jp/en/home_assets/img/header-logo.svg",
    url: "https://www.itochu.co.jp/en/",
    description:
      "Global trading and investment company supporting the development and coordination of the Japanese e-NG value chain and leveraging Japanese project financing.",
  },
] as const;

type Partner = (typeof PARTNERS)[number];

// ─── Marquee track ─────────────────────────────────────────────────────────
// Isolated component: parent state changes never cause a re-render here, so
// the Framer Motion animation runs uninterrupted from mount.

function MarqueeTrack({
  onEnter,
  onLeave,
}: {
  onEnter: (p: Partner) => void;
  onLeave: () => void;
}) {
  const [scope, animate] = useAnimate();
  const controls = useRef<{ pause: () => void; play: () => void } | null>(null);

  useEffect(() => {
    const el = scope.current as HTMLDivElement | null;
    if (!el) return;
    // 4 copies in the DOM — one copy is exactly 1/4 of total scrollWidth
    const copyWidth = el.scrollWidth / 4;
    controls.current = animate(
      el,
      { x: [0, -copyWidth] },
      { duration: 30, ease: "linear", repeat: Infinity, repeatType: "loop" },
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleEnter = (partner: Partner) => {
    controls.current?.pause();
    onEnter(partner);
  };

  const handleLeave = () => {
    controls.current?.play();
    onLeave();
  };

  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
      onMouseLeave={handleLeave}
    >
      <div ref={scope} className="flex items-center">
        {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map(
          (partner, i) => (
            <Link
              key={i}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center justify-center px-16 py-6 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              onMouseEnter={() => handleEnter(partner)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 w-auto object-contain"
              />
            </Link>
          ),
        )}
      </div>
    </div>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────

export default function OurPartners() {
  const [activePartner, setActivePartner] = useState<Partner | null>(null);

  return (
    <section id="our-partners" className="section-padding container-padding">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16">
        {/* ── Header ──────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: easeOut }}
          className="flex flex-col gap-4 max-w-3xl"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold tracking-tight text-secondary dark:text-primary">
              Our Partners
            </h2>
            <h3 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              Jointly developed by five global leaders
            </h3>
          </div>
          <p className="text-lg text-current/80 leading-relaxed">
            Live Oak is being jointly developed by TotalEnergies, TES, Osaka
            Gas, Toho Gas and ITOCHU — five partners whose complementary
            expertise spans renewable energy, e&#8209;NG development, LNG
            infrastructure, Japanese gas distribution, and international project
            finance.
          </p>
        </motion.div>

        {/* ── Desktop: infinite marquee ────────────────────────────────────── */}
        <div className="hidden sm:flex flex-col gap-10">
          <MarqueeTrack
            onEnter={setActivePartner}
            onLeave={() => setActivePartner(null)}
          />

          {/* Description panel — fades in below on hover */}
          <div className="min-h-20 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {activePartner ? (
                <motion.div
                  key={activePartner.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: easeOut }}
                  className="flex flex-col items-center gap-1.5 text-center max-w-lg"
                >
                  <p className="text-lg font-bold text-secondary dark:text-primary">
                    {activePartner.name}
                  </p>
                  <p className="text-current/60">{activePartner.description}</p>
                </motion.div>
              ) : (
                <motion.p
                  key="hint"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-current/30 tracking-wide"
                >
                  Hover a logo to learn more
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ── Mobile: stacked cards ────────────────────────────────────────── */}
        <div className="sm:hidden flex flex-col gap-3">
          {PARTNERS.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: easeOut, delay: i * 0.08 }}
            >
              <Link
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-xl border border-current/10 bg-foreground/3 hover:border-secondary/40 dark:hover:border-primary/40 transition-colors"
              >
                <div className="shrink-0 w-20 h-10 flex items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 w-auto max-w-20 object-contain object-left"
                  />
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <p className="text-sm font-semibold leading-tight">
                    {partner.name}
                  </p>
                  <p className="text-xs text-current/60 leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
