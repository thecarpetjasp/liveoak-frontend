"use client";

import { easeOut, motion } from "motion/react";

// ─── Data ──────────────────────────────────────────────────────────────────

const EVENTS = [
  {
    year: "2023",
    title: "Foundation",
    description: "Initial TotalEnergies–TES partnership formed.",
    status: "past",
  },
  {
    year: "2025",
    title: "Partnership expands",
    description: "Osaka Gas, Toho Gas and ITOCHU join the project.",
    status: "past",
  },
  {
    year: "2026–2027",
    title: "FEED",
    description: "Live Oak is in Front-End Engineering Design.",
    status: "current",
  },
  {
    year: "End 2027",
    title: "Target FID",
    description: "Final Investment Decision.",
    status: "future",
  },
  {
    year: "End 2030",
    title: "Target operations",
    description: "Target commercial operations.",
    status: "future",
  },
] as const;

type Status = (typeof EVENTS)[number]["status"];

// ─── Helpers ───────────────────────────────────────────────────────────────

function yearColor(status: Status) {
  if (status === "current") return "text-secondary dark:text-primary";
  if (status === "future") return "text-current/35";
  return "text-current/55";
}

function titleColor(status: Status) {
  if (status === "current") return "text-secondary dark:text-primary";
  if (status === "future") return "text-current/40";
  return "text-current/80";
}

function descColor(status: Status) {
  return status === "future" ? "text-current/30" : "text-current/55";
}

function NodeDot({ status }: { status: Status }) {
  return (
    <div className="relative flex items-center justify-center z-10">
      {status === "current" && (
        <motion.div
          animate={{ scale: [1, 2.2, 1], opacity: [0.35, 0, 0.35] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute size-5 rounded-full bg-secondary dark:bg-primary"
        />
      )}
      <div
        className={`relative z-10 rounded-full border-2 ${
          status === "current"
            ? "size-3.5 bg-secondary dark:bg-primary border-secondary dark:border-primary"
            : status === "future"
              ? "size-3 bg-background border-current/20"
              : "size-3 bg-secondary/50 dark:bg-primary/50 border-secondary/50 dark:border-primary/50"
        }`}
      />
    </div>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────

export default function ProjectTimeline() {
  return (
    <section className="section-padding container-padding">
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
              Project Timeline
            </h2>
            <h3 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              From partnership to production
            </h3>
          </div>
          <p className="text-lg text-current/80 leading-relaxed">
            Live Oak has moved rapidly from its founding partnership to active
            engineering — with a clear path to Final Investment Decision and
            commercial operations.
          </p>
        </motion.div>

        {/* ── Desktop horizontal timeline (lg+) ───────────────────────────── */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Background line */}
            <div className="absolute top-17 left-0 right-0 h-px bg-current/10" />

            {/* Animated fill line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.6, ease: easeOut, delay: 0.1 }}
              style={{ transformOrigin: "left" }}
              className="absolute top-17 left-0 right-0 h-px bg-secondary/40 dark:bg-primary/40"
            />

            {/* Event columns */}
            <div className="relative grid grid-cols-5">
              {EVENTS.map((event, i) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.8,
                    ease: easeOut,
                    delay: i * 0.1 + 0.2,
                  }}
                  className="flex flex-col items-center px-3"
                >
                  {/* Year — fixed height so all dots land at the same row */}
                  <div className="h-14 flex items-end pb-3">
                    <p
                      className={`text-sm font-semibold tabular-nums ${yearColor(event.status)}`}
                    >
                      {event.year}
                    </p>
                  </div>

                  {/* Dot (sits on the line) */}
                  <NodeDot status={event.status} />

                  {/* Description card */}
                  <div className="mt-6 flex flex-col gap-1.5 text-center w-full">
                    <p
                      className={`text-sm font-semibold leading-snug ${titleColor(event.status)}`}
                    >
                      {event.title}
                    </p>
                    <p
                      className={`text-xs leading-relaxed ${descColor(event.status)}`}
                    >
                      {event.description}
                    </p>
                    {event.status === "current" && (
                      <div className="mt-1 flex justify-center">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary/10 dark:bg-primary/10 text-secondary dark:text-primary text-xs font-semibold">
                          <span className="size-1.5 rounded-full bg-secondary dark:bg-primary animate-pulse" />
                          Current phase
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mobile / tablet vertical timeline (< lg) ────────────────────── */}
        <div className="lg:hidden relative">
          {/* Background line */}
          <div className="absolute top-0 bottom-0 left-2.5 w-px bg-current/10" />

          {/* Animated fill line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.8, ease: easeOut, delay: 0.1 }}
            style={{ transformOrigin: "top" }}
            className="absolute top-0 bottom-0 left-2.5 w-px bg-secondary/40 dark:bg-primary/40"
          />

          <div className="flex flex-col gap-0">
            {EVENTS.map((event, i) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: easeOut, delay: i * 0.08 }}
                className="flex gap-6 pb-10 last:pb-0"
              >
                {/* Node column — 22px wide so its centre sits on the line at left-[10px] */}
                <div className="shrink-0 w-5,5 flex justify-center pt-0.5">
                  <NodeDot status={event.status} />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1 min-w-0">
                  <p
                    className={`text-xs font-semibold uppercase tracking-widest ${yearColor(event.status)}`}
                  >
                    {event.year}
                  </p>
                  <p
                    className={`text-base font-semibold leading-snug ${titleColor(event.status)}`}
                  >
                    {event.title}
                  </p>
                  <p
                    className={`text-sm leading-relaxed ${descColor(event.status)}`}
                  >
                    {event.description}
                  </p>
                  {event.status === "current" && (
                    <span className="mt-1 self-start inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary/10 dark:bg-primary/10 text-secondary dark:text-primary text-xs font-semibold">
                      <span className="size-1.5 rounded-full bg-secondary dark:bg-primary animate-pulse" />
                      Current phase
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
