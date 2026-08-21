"use client";

import {
  ArrowRight,
  Atom,
  Building2,
  Droplets,
  ExternalLink,
  Factory,
  Flame,
  Leaf,
  MapPin,
  Road,
  Ship,
  Zap,
} from "lucide-react";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { easeOut, motion } from "motion/react";

type LucideIcon = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

// ─── Data ──────────────────────────────────────────────────────────────────

type Step = {
  number: string;
  Icon: LucideIcon;
  title: string;
  description: string;
  inputs: { Icon: LucideIcon; label: string; sublabel?: string }[];
  output: { Icon: LucideIcon; label: string; badge: string };
};

const STEPS: Step[] = [
  {
    number: "01",
    Icon: Zap,
    title: "Renewable electricity + water",
    description:
      "Live Oak uses renewable electricity from the Midwest's abundant wind and solar resources to power a large-scale electrolyser. The electrolyser splits water into hydrogen and oxygen. Because no fossil fuels are involved, the hydrogen produced carries a very low carbon intensity.",
    inputs: [
      { Icon: Zap, label: "Renewable electricity" },
      { Icon: Droplets, label: "Water" },
    ],
    output: {
      Icon: Atom,
      label: "Renewable hydrogen",
      badge: "Very low carbon",
    },
  },
  {
    number: "02",
    Icon: Leaf,
    title: "Biogenic CO₂ + renewable hydrogen",
    description:
      "The renewable hydrogen is combined with biogenic CO₂ — captured from bioethanol production in Nebraska — in a methanation reaction. This produces methane chemically identical to conventional natural gas, with a very low lifecycle carbon footprint.",
    inputs: [
      {
        Icon: Leaf,
        label: "Biogenic CO₂",
        sublabel: "From Nebraska's bioethanol industry",
      },
      { Icon: Atom, label: "Renewable hydrogen" },
    ],
    output: {
      Icon: Flame,
      label: "e‑NG",
      badge: "Electric natural gas • Very low carbon",
    },
  },
  {
    number: "03",
    Icon: Road,
    title: "e‑NG into existing infrastructure",
    description:
      "e‑NG can enter the existing natural gas supply chain without modification. It can be transported through pipelines, liquefied and shipped as LNG, then regasified and distributed through city‑gas networks — with no new infrastructure required.",
    inputs: [{ Icon: Flame, label: "e‑NG" }],
    output: {
      Icon: Building2,
      label: "Existing infrastructure",
      badge: "Pipelines • LNG • City-gas",
    },
  },
];

const VALUE_CHAIN: { Icon: LucideIcon; label: string }[] = [
  { Icon: MapPin, label: "Nebraska" },
  { Icon: Road, label: "Pipeline" },
  { Icon: Factory, label: "Liquefaction" },
  { Icon: Ship, label: "LNG shipping" },
  { Icon: Factory, label: "Regasification" },
  { Icon: Building2, label: "City-gas networks" },
  { Icon: MapPin, label: "Japan" },
];

// ─── Section ───────────────────────────────────────────────────────────────

export default function EngProcessV3() {
  return (
    <section
      id="emethane-process"
      className="section-padding container-padding"
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-20">
        {/* ── Header ──────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: easeOut }}
          className="flex flex-col gap-6 max-w-3xl"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold tracking-tight text-secondary dark:text-primary">
              The Process
            </h2>
            <h3 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              Same gas&nbsp;&bull;&nbsp;Same infrastructure&nbsp;&bull;&nbsp;A
              different carbon story.
            </h3>
          </div>
          <p className="text-lg text-current/80 leading-relaxed">
            e&#8209;NG &mdash; electric natural gas &mdash; is produced by
            combining renewable hydrogen with biogenic CO&#8322;. The result is
            chemically identical to conventional natural gas, meaning it works
            with existing pipelines, LNG facilities, and customer equipment
            without requiring any changes to the energy system it serves.
          </p>
        </motion.div>

        {/* ── Three-column steps ───────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-3 gap-px bg-current/10 rounded-2xl overflow-hidden">
          {STEPS.map((step, i) => (
            /* Outer wrapper stays fully opaque at all times so the gap colour
               never bleeds through during the fade-in animation. */
            <div
              key={step.number}
              className="relative bg-background overflow-hidden flex flex-col"
            >
              {/* Decorative number — fades in with a scale-down reveal,
                  slightly after the card content, for a layered effect */}
              <motion.span
                initial={{ opacity: 0, scale: 1.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 1.6,
                  ease: easeOut,
                  delay: i * 0.12 + 0.25,
                }}
                className="absolute -bottom-3 -right-1 text-9xl font-black leading-none select-none pointer-events-none text-secondary/6 dark:text-primary/12"
              >
                {step.number}
              </motion.span>

              {/* Animated inner content */}
              <motion.div
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 1, ease: easeOut, delay: i * 0.12 }}
                className="relative flex flex-col gap-6 p-8 flex-1"
              >
                {/* Icon in a rounded square */}
                <div className="flex items-center justify-center size-14 rounded-2xl bg-secondary/10 dark:bg-primary/10 border border-secondary/20 dark:border-primary/20 shrink-0">
                  <step.Icon className="size-7 text-secondary dark:text-primary" />
                </div>

                {/* Title */}
                <h4 className="text-xl font-semibold tracking-tight leading-snug">
                  {step.title}
                </h4>

                {/* Description — flex-1 fills all space above the divider so
                    the divider line lands at the same height on every card */}
                <p className="text-current/70 leading-relaxed text-sm flex-1">
                  {step.description}
                </p>

                {/* Clean input → output summary — fixed height so the divider
                    is always the same distance from the bottom of the card;
                    justify-between pins the flow row to the top and the badge
                    to the very bottom of this section */}
                <div className="flex flex-col justify-between pt-4 border-t border-current/10 h-28">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-current/60">
                    {step.inputs.flatMap((inp, j) => [
                      ...(j > 0
                        ? [
                            <span key={`plus-${j}`} className="text-current/30">
                              +
                            </span>,
                          ]
                        : []),
                      <span
                        key={inp.label}
                        className="inline-flex items-center gap-1"
                      >
                        <inp.Icon className="size-3.5 shrink-0 text-secondary dark:text-primary" />
                        {inp.label}
                      </span>,
                    ])}
                    <ArrowRight className="size-3.5 shrink-0 text-secondary dark:text-primary" />
                    <span className="inline-flex items-center gap-1 font-semibold text-current/80">
                      <step.output.Icon className="size-3.5 shrink-0 text-secondary dark:text-primary" />
                      {step.output.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="block w-0.5 self-stretch rounded-full bg-secondary dark:bg-primary shrink-0" />
                    <p className="text-xs font-medium text-secondary dark:text-primary">
                      {step.output.badge}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* ── e-NG Coalition link ─────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="text-sm text-current/50 -mt-12"
        >
          Want to learn more about e&#8209;NG?{" "}
          <a
            href="https://www.engcoalition.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-secondary dark:text-primary font-semibold hover:underline"
          >
            Visit the e&#8209;NG Coalition <ExternalLink className="size-3.5" />
          </a>
        </motion.p>

        {/* ── "Turning local by-products…" group ──────────────────────────── */}
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: easeOut }}
            className="flex flex-col gap-2"
          >
            <h2 className="text-lg font-semibold tracking-tight text-secondary dark:text-primary">
              Local by-products
            </h2>
            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Turning local by-products into valuable resources
            </h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {/* Card: Recycling carbon */}
            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: easeOut }}
              className="flex gap-4"
            >
              <span className="block self-stretch w-1 rounded-full bg-secondary dark:bg-primary shrink-0" />
              <div className="flex flex-col gap-3">
                <h4 className="text-lg font-semibold tracking-tight">
                  Recycling carbon already in the natural cycle
                </h4>
                <p className="text-current/70 leading-relaxed text-sm">
                  Live Oak uses biogenic CO&#8322; captured from the
                  Midwest&apos;s bioethanol industry &mdash; a carbon stream
                  that would otherwise be released to the atmosphere &mdash; and
                  combines it with renewable hydrogen to create e&#8209;NG.
                  Unlike fossil natural gas, which brings additional carbon out
                  of geological reservoirs and into the atmosphere, Live Oak
                  recycles carbon that was recently absorbed from the atmosphere
                  by plants as they grew. By turning this biogenic CO&#8322;
                  into a valuable fuel, Live Oak creates a circular carbon
                  pathway: plants capture CO&#8322;, the bioethanol industry
                  concentrates it, Live Oak recycles it into e&#8209;NG, and the
                  carbon returns to the atmosphere when the fuel is used, ready
                  to enter the biological cycle again. Combined with renewable
                  electricity, this circular use of biogenic carbon enables Live
                  Oak e&#8209;NG to achieve a very low lifecycle carbon
                  footprint compared with conventional fossil natural gas.
                </p>
              </div>
            </motion.div>

            {/* Card: Recycling water */}
            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: easeOut, delay: 0.12 }}
              className="flex gap-4"
            >
              <span className="block self-stretch w-1 rounded-full bg-secondary dark:bg-primary shrink-0" />
              <div className="flex flex-col gap-3">
                <h4 className="text-lg font-semibold tracking-tight">
                  Recycling water, preserving a vital local resource
                </h4>
                <p className="text-current/70 leading-relaxed text-sm">
                  Live Oak is working in close collaboration with the City of
                  Norfolk to develop a water solution based on the reuse of
                  treated wastewater rather than relying on fresh water
                  resources for its industrial needs. In Nebraska, water is a
                  vital resource for agriculture, communities and the wider
                  economy. By giving wastewater a second productive use, Live
                  Oak can reduce pressure on freshwater supplies while
                  supporting the development of a new industrial activity.
                </p>
                <p className="text-current/70 leading-relaxed text-sm">
                  This collaboration with the City of Norfolk illustrates how
                  Live Oak is being designed as part of the local ecosystem,
                  working with the community to make efficient use of existing
                  resources and infrastructure while protecting the resources
                  the region depends on most. It reflects a broader principle
                  behind the project: integrate locally, reuse resources
                  intelligently, and create new value while minimising pressure
                  on the region&apos;s natural resources.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── From Nebraska to Japan ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: easeOut }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold tracking-tight text-secondary dark:text-primary">
              The supply chain
            </h2>
            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              From Nebraska to Japan
            </h3>
            <p className="mt-3 text-current/70 leading-relaxed text-sm max-w-2xl">
              Live Oak e&#8209;NG is designed to enter the existing natural gas
              and LNG supply chain, from pipelines and liquefaction to shipping,
              regasification and city&#8209;gas distribution. In Japan, it can
              progressively substitute for fossil natural gas while using
              infrastructure and customer equipment already in place.
            </p>
          </div>

          {/* Timeline value chain */}
          <div className="overflow-x-auto -mx-4 px-4 pb-2">
            <div className="relative flex items-start gap-0 min-w-max">
              {/* Connecting line */}
              <div className="absolute top-6 left-6 right-6 h-px bg-current/10" />

              {VALUE_CHAIN.map((node, i) => (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    ease: easeOut,
                    delay: i * 0.08,
                  }}
                  className="relative flex flex-col items-center gap-3 w-28"
                >
                  {/* Node circle */}
                  <div className="relative z-10 flex items-center justify-center size-12 rounded-full bg-background border-2 border-secondary/40 dark:border-primary/40">
                    <node.Icon className="size-5 text-secondary dark:text-primary" />
                  </div>
                  {/* Label */}
                  <p className="text-xs font-medium text-current/60 text-center whitespace-nowrap">
                    {node.label}
                  </p>
                  {/* Step number */}
                  <span className="text-xs text-current/30 font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
