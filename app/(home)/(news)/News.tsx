"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { easeOut, motion } from "motion/react";

type NewsArticle = {
  title: string;
  date: string;
  source: string;
  excerpt: string;
  href: string;
  image: string;
  archive?: boolean;
};

const NEWS_ARTICLES: NewsArticle[] = [
  {
    title:
      "Commencement of FEED for the Live Oak Project for e-NG Production in Nebraska",
    date: "August 21, 2026",
    source: "LiveOak e-NG",
    archive: false,
    excerpt:
      "Houston, August X, 2026 – The Live Oak consortium today announced the launch of Front-End Engineering Design (FEED) activities for the Live Oak project, a large-scale electric natural gas (e-NG, also known as e-methane) production facility currently under development in Nebraska, United States. The consortium comprises TotalEnergies and TES (each holding a 33.35% stake in Live Oak), alongside Osaka Gas, Toho Gas and ITOCHU (33.3% combined).",
    href: "/Live_Oak_PR_FEED_v20260821.pdf",
    image: "/LiveOakLogo.png",
  },
  {
    title:
      "TotalEnergies and TES Join Forces to Develop a Large-Scale e-NG Production Unit",
    date: "May 31, 2023",
    source: "TotalEnergies",
    archive: true,
    excerpt:
      "TotalEnergies has partnered with Tree Energy Solutions to develop a major synthetic natural gas facility in the United States, targeting 100,000–200,000 metric tons of e-NG per year using a 1 GW electrolyzer powered by wind and solar energy.",
    href: "https://totalenergies.com/newsroom/united-states-totalenergies-and-tes-join-forces-develop-large-scale-e-ng/",
    image:
      "https://totalenergies.com/newsroom/wp-content/uploads/2026/04/13bec32ee0f5cdf9d7649f88dbd8ecef-m.jpg",
  },
  {
    title:
      "TotalEnergies, TES, Osaka Gas, Toho Gas and ITOCHU Partner to Develop the Live Oak Project",
    date: "December 2, 2025",
    source: "TotalEnergies US",
    excerpt:
      "Five major energy companies announced a strategic partnership for the Live Oak project in Nebraska — a facility producing e-NG at 250 MW electrolysis capacity, with a Final Investment Decision anticipated in 2027 and commercial operations starting by 2030.",
    href: "https://corporate.totalenergies.us/news/totalenergies-tes-osaka-gas-toho-gas-and-itochu-partner-develop-live-oak-project-e-ng",
    image:
      "https://dxm.content-center.totalenergies.com/api/wedia/dam/transform/xysh7dg731ta7sogd81mhcik5c/cameron-lng-marks-1%2C000th-cargo-milestone.webp?option=default",
  },
];

const GAP = 16; // px — matches gap-4

export default function News() {
  const [active, setActive] = useState(0);
  const total = NEWS_ARTICLES.length;
  const touchStartX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [slideOffset, setSlideOffset] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      const w = el.offsetWidth;
      const isTwoUp = w >= 640;
      const cardW = isTwoUp ? (w - GAP) / 2 : w;
      setSlideOffset(cardW + (isTwoUp ? GAP : 0));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const prev = () => setActive((i) => Math.max(0, i - 1));
  const next = () => setActive((i) => Math.min(total - 1, i + 1));

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return (
    <section className="section-padding container-padding">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-12">
        {/* Header row */}
        <div className="flex items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: easeOut }}
            className="flex flex-col gap-2"
          >
            <h2 className="text-lg font-semibold tracking-tight text-secondary dark:text-primary">
              Latest News
            </h2>
            <h3 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              Project updates
            </h3>
          </motion.div>

          {/* Arrow controls */}
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: easeOut, delay: 0.1 }}
            className="flex items-center gap-3 shrink-0"
          >
            <CarouselButton
              onClick={prev}
              disabled={active === 0}
              direction="left"
            />
            <CarouselButton
              onClick={next}
              disabled={active === total - 1}
              direction="right"
            />
          </motion.div>
        </div>

        {/* Carousel — all screen sizes */}
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: easeOut, delay: 0.15 }}
        >
        <div
          ref={containerRef}
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            className="flex gap-4"
            animate={{ x: slideOffset > 0 ? -active * slideOffset : 0 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 30,
              mass: 1,
            }}
          >
            {NEWS_ARTICLES.map((article, i) => (
              <div key={i} className="shrink-0 w-full sm:w-[calc(50%-8px)]">
                <NewsCard article={article} />
              </div>
            ))}
          </motion.div>
        </div>
        </motion.div>

        {/* Dot indicators */}
        <div className="flex justify-center items-center gap-2">
          {NEWS_ARTICLES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to article ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 bg-secondary dark:bg-primary"
                  : "w-2 bg-current/20 hover:bg-current/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <div className="flex flex-col h-full rounded-xl overflow-hidden border border-current/10 bg-foreground/3 group">
      {/* Image */}
      <div className="relative w-full aspect-video overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {article.archive && (
          <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-xs font-bold tracking-widest uppercase bg-primary text-white">
            Archive
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        {/* Source + date */}
        <div className="flex items-center gap-2 text-sm text-current/50">
          <span className="font-semibold text-secondary dark:text-primary">
            {article.source}
          </span>
          <span className="size-1 rounded-full bg-current/30 shrink-0" />
          <span>{article.date}</span>
        </div>

        {/* Title */}
        <h4 className="text-xl font-semibold tracking-tight leading-snug">
          {article.title}
        </h4>

        {/* Excerpt */}
        <p className="text-current/60 text-sm leading-relaxed line-clamp-3 flex-1">
          {article.excerpt}
        </p>

        {/* Read more */}
        <a
          href={article.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary dark:text-primary hover:underline underline-offset-4 transition-colors mt-auto"
        >
          Read article
          <ExternalLink className="size-3.5" />
        </a>
      </div>
    </div>
  );
}

function CarouselButton({
  onClick,
  disabled,
  direction,
}: {
  onClick: () => void;
  disabled: boolean;
  direction: "left" | "right";
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Previous article" : "Next article"}
      className="flex items-center justify-center size-10 rounded-full border border-current/10 bg-foreground/3 text-current/60 hover:text-current hover:border-current/30 hover:bg-foreground/6 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
    >
      {direction === "left" ? (
        <ArrowLeft className="size-4" />
      ) : (
        <ArrowRight className="size-4" />
      )}
    </button>
  );
}
