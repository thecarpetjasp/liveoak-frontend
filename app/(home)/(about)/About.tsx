"use client";

import Image from "next/image";
import { easeOut, motion } from "motion/react";

import team from "@/public/team.jpg";

type Reason = {
  title: string;
  body: string;
};

const REASONS: Reason[] = [
  {
    title: "Built on Nebraska's strengths.",
    body: "The Midwest and Nebraska combine strong renewable energy potential with a well-established agricultural and bioethanol industry, providing the key resources needed to produce e-NG at industrial scale.",
  },
  {
    title: "Very low carbon, fully compatible.",
    body: "Live Oak e-NG is chemically equivalent to conventional natural gas, allowing it to use existing pipelines, liquefaction facilities, ships and customer equipment. This makes it possible to significantly reduce the carbon intensity of gas supply while leveraging infrastructure already in place.",
  },
  {
    title: "Connecting Nebraska to Japan.",
    body: "Developed by 5 global energy and industrial partners, Live Oak transforms local renewable resources and biogenic carbon into a very low-carbon fuel for customers seeking to reduce emissions from existing gas-based energy systems. Live Oak e-NG will primarily serve the decarbonization of gas distribution in Japan.",
  },
  {
    title: "Pioneering a new industrial value chain.",
    body: "Live Oak brings together technologies and infrastructure that already exist individually, but integrates them at a scale and across a value chain that remains pioneering for the e-NG industry. The project is designed not only to produce e-NG, but to establish a model that can be replicated as the market develops.",
  },
];

export default function About() {
  return (
    <section className="section-padding container-padding relative isolate bg-linear-to-tr from-secondary to-primary dark:from-background dark:to-background text-white overflow-hidden">
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 2, ease: easeOut }}
        className="absolute inset-0 -z-10 opacity-20 dark:opacity-20"
      >
        <Image
          src={team}
          alt="Team working together"
          fill
          className="object-cover"
        ></Image>
      </motion.div>

      <div className="max-w-7xl w-full mx-auto flex flex-col gap-12 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: easeOut }}
          className="flex flex-col gap-4 max-w-3xl"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold tracking-tight text-white/70">
              Why Live Oak?
            </h2>
            <h3 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              Local resources. Existing infrastructure. Very low-carbon energy.
            </h3>
          </div>
          <p className="text-lg text-current/80 leading-relaxed">
            Live Oak brings together renewable electricity, biogenic CO₂ from
            the Midwest&apos;s bioethanol industry, and existing natural gas
            infrastructure to produce e-NG with a very low lifecycle carbon
            footprint. By combining renewable hydrogen with recycled biogenic
            CO₂, Live Oak is designed to provide the same molecule as
            conventional natural gas, but with dramatically lower greenhouse-gas
            emissions across its lifecycle.
          </p>
        </motion.div>

        {/* Reason cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: easeOut, delay: i * 0.1 }}
              className="flex flex-col gap-3 p-8 rounded-xl bg-background/20 dark:bg-slate-700/20 backdrop-blur-xl"
            >
              <h4 className="text-lg font-semibold tracking-tight">
                {reason.title}
              </h4>
              <p className="text-current/80 leading-relaxed text-sm">
                {reason.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
