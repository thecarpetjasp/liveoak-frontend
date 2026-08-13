"use client";

import { easeOut, motion } from "motion/react";
import { NEBRASKA_FIPS, US_STATES } from "./us-state-paths";

// Norfolk, NE — Albers USA projection, 960×600 viewport
const NORFOLK = { x: 503, y: 224 };

const nebraskaPath = US_STATES.find(([id]) => id === NEBRASKA_FIPS)![2];
const otherStates = US_STATES.filter(([id]) => id !== NEBRASKA_FIPS);

export default function Location() {
  return (
    <section className="relative isolate overflow-hidden min-h-120 sm:min-h-140 lg:min-h-160 flex items-center justify-center bg-linear-to-tr from-secondary to-primary dark:from-background dark:to-secondary text-white">
      {/* Full-bleed SVG map as background */}
      <motion.div
        initial={{ scale: 1.06, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 2, ease: easeOut }}
        className="absolute inset-0 -z-10"
      >
        <svg
          viewBox="0 0 960 600"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {/* Other states */}
          {otherStates.map(([id, , d]) => (
            <path
              key={id}
              d={d}
              fill="rgba(255,255,255,0.10)"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="0.75"
            />
          ))}

          {/* Nebraska — brand green */}
          <path
            d={nebraskaPath}
            fill="#00B762"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="0.75"
          />

          {/* Norfolk, NE — pulsing pin */}
          <motion.circle
            cx={NORFOLK.x}
            cy={NORFOLK.y}
            r={10}
            fill="white"
            animate={{ r: [10, 26], opacity: [0.35, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          />
          <circle
            cx={NORFOLK.x}
            cy={NORFOLK.y}
            r="6"
            fill="white"
            opacity="0.5"
          />
          <circle cx={NORFOLK.x} cy={NORFOLK.y} r="3.5" fill="white" />
        </svg>
      </motion.div>

      {/* Centered headings */}
      <motion.div
        initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: easeOut }}
        className="relative z-10 flex flex-col items-center gap-4 text-center text-balance px-6"
      >
        <h2 className="text-lg font-semibold tracking-tight text-white">
          Location
        </h2>
        <h3 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
          Norfolk, Nebraska.
        </h3>
      </motion.div>
    </section>
  );
}
