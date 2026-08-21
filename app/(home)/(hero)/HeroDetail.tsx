"use client";

import { ArrowRight } from "lucide-react";
import { easeInOut, motion } from "motion/react";

export default function HeroDetail() {
  return (
    <div className="w-full text-white text-center text-balance flex flex-col justify-center gap-4">
      <PromotionalMsg></PromotionalMsg>
      <motion.h1
        initial={{ y: 50, opacity: 0, filter: "blur(12px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: easeInOut }}
        className="z-10 lg:text-7xl md:text-6xl text-5xl font-semibold tracking-tighter"
      >
        The future of natural gas.
        <br />
        Made differently.
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0, filter: "blur(12px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: easeInOut, delay: 0.1 }}
        className="md:text-xl sm:text-lg text-base text-current/80"
      >
        Live Oak brings together the Midwest&apos;s renewable energy potential,
        Nebraska&apos;s biogenic CO₂ from the bioethanol industry and existing
        energy infrastructure to produce a new generation of natural gas, with a
        very low carbon intensity. From the heart of the Midwest, the project is
        building a supply chain designed to serve customers around the world
        such as Japan. There, it will gradually substitute for fossil natural
        gas across existing city-gas networks, delivering lower-carbon energy
        without requiring an entirely new energy system.
      </motion.p>
    </div>
  );
}

export function PromotionalMsg() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, filter: "blur(12px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1, ease: easeInOut, delay: 0.1 }}
      className="text-xs sm:text-base"
    >
      <p className="text-center inline-block px-3 py-1.5 rounded-full border-primary border-2 bg-primary/50">
        Live Oak consortium announced the launch of Front-End Engineering Design
        (FEED){" "}
        <a
          href="/Live_Oak_PR_FEED_v20260821.pdf"
          className="inline-flex items-center gap-1 cursor-pointer text-yellow-200 font-semibold hover:underline"
          target="_blank"
        >
          Read more <ArrowRight className="size-5" />
        </a>
      </p>
    </motion.div>
  );
}
