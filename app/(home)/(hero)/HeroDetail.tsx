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
        Project Live Oak is developing a lower-carbon e-NG facility near
        Norfolk, Nebraska, producing synthetic natural gas from renewable
        electricity, water, and captured CO₂ — compatible with the
        infrastructure and applications used today.
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
        We can place a promotional message here.{" "}
        <a
          href="#"
          className="inline-flex items-center gap-1 cursor-pointer text-yellow-200 font-semibold hover:underline"
        >
          Read more <ArrowRight className="size-5" />
        </a>
      </p>
    </motion.div>
  );
}
