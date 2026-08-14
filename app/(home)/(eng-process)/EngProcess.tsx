"use client";

import { useRef } from "react";
import { Droplets, Flame, Leaf, LucideProps, Zap } from "lucide-react";
import { easeOut, motion, useScroll } from "motion/react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────

type Step = {
  number: number;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    number: 1,
    Icon: Zap,
    title: "Renewable Electricity",
    description:
      "The process runs entirely on power from renewable sources such as wind and solar, producing no fossil-fuel emissions at the generation stage.",
  },
  {
    number: 2,
    Icon: Droplets,
    title: "Green Hydrogen",
    description:
      "That electricity powers an electrolyzer, which splits water into hydrogen and oxygen. Because the power is renewable, the hydrogen produced is often called green hydrogen.",
  },
  {
    number: 3,
    Icon: Leaf,
    title: "Biogenic CO₂",
    description:
      "The plant uses biogenic carbon dioxide — CO₂ that originates from plants rather than fossil sources, such as local bioethanol production in Northeast Nebraska.",
  },
  {
    number: 4,
    Icon: Flame,
    title: "Methanation",
    description:
      "The hydrogen and CO₂ are combined in a methanation reaction that produces methane and water. The methane is cleaned to pipeline quality and delivered to customers as e-NG.",
  },
];

// ─── Section ──────────────────────────────────────────────────────────────

export default function EngProcess() {
  const processRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start 0.85", "end 0.5"],
  });

  const scaleY = scrollYProgress;

  return (
    <section className="section-padding container-padding">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16">
        {/* Header + intro */}
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
              How e&#8209;NG works
            </h3>
          </div>
          <p className="text-lg text-current/80 leading-relaxed">
            e-NG is natural gas made from renewable electricity and captured
            carbon dioxide — also called e-methane or synthetic natural gas. The
            end product is the same molecule as conventional natural gas, which
            means it can be transported, stored, and used with today&apos;s
            infrastructure without modification.
          </p>
        </motion.div>

        {/* Animated process steps */}
        <div ref={processRef} className="relative max-w-2xl">
          {/* Track — faint background line */}
          <div className="absolute left-5 top-5 bottom-5 w-px bg-current/10" />

          {/* Scroll-driven fill */}
          <div className="absolute left-5 top-5 bottom-5 w-px overflow-hidden">
            <motion.div
              className="absolute inset-0 origin-top bg-secondary dark:bg-primary"
              style={{ scaleY }}
            />
          </div>

          <div className="flex flex-col gap-12">
            {STEPS.map((step, i) => (
              <ProcessStep key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* Bottom cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: easeOut }}
            className="flex flex-col gap-4 p-8 rounded-xl border border-current/10 bg-foreground/3"
          >
            <div className="flex items-start gap-3">
              {/* <span className="mt-1 block w-1 h-5 bg-secondary dark:bg-primary rounded-full shrink-0" /> */}
              <h4 className="text-lg font-semibold tracking-tight">
                Why it lowers carbon
              </h4>
            </div>
            <p className="text-current/70 leading-relaxed text-sm">
              The carbon in e-NG comes from CO₂ that plants had already removed
              from the atmosphere, and the hydrogen is made with renewable
              power. When the gas is burned, it returns that same biogenic
              carbon rather than adding new fossil carbon — that is what
              separates e-NG from conventional gas production.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: easeOut, delay: 0.15 }}
            className="flex flex-col gap-4 p-8 rounded-xl border border-current/10 bg-foreground/3"
          >
            <div className="flex items-start gap-3">
              {/* <span className="mt-1 block w-1 h-5 bg-secondary dark:bg-primary rounded-full shrink-0" /> */}
              <h4 className="text-lg font-semibold tracking-tight">
                Compatible with today&apos;s infrastructure
              </h4>
            </div>
            <p className="text-current/70 leading-relaxed text-sm">
              Because e-NG is identical to conventional natural gas, customers
              can reduce emissions without replacing pipelines, appliances, or
              industrial equipment — making it one of the lowest-friction paths
              to lower-carbon energy available today.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── ProcessStep ──────────────────────────────────────────────────────────

function ProcessStep({ step, index }: { step: Step; index: number }) {
  return (
    <div className="flex gap-8 items-start">
      {/* Numbered circle — spring pop on scroll into view */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 18,
          delay: index * 0.04,
        }}
        className="shrink-0 relative z-10 flex items-center justify-center size-10 rounded-full bg-secondary dark:bg-primary text-white text-sm font-bold"
      >
        {step.number}
      </motion.div>

      {/* Content — slide in from right with blur */}
      <motion.div
        initial={{ opacity: 0, x: 24, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.8,
          ease: easeOut,
          delay: 0.12 + index * 0.04,
        }}
        className="flex flex-col gap-2 pt-1.5"
      >
        <div className="flex items-center gap-2">
          <step.Icon className="size-4 shrink-0 text-secondary dark:text-primary" />
          <h4 className="text-xl font-semibold tracking-tight">{step.title}</h4>
        </div>
        <p className="text-current/70 leading-relaxed">{step.description}</p>
      </motion.div>
    </div>
  );
}
