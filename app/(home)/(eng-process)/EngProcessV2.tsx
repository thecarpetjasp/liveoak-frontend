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

// ─── Value-chain data ──────────────────────────────────────────────────────

const VALUE_CHAIN: { Icon: LucideIcon; label: string }[] = [
  { Icon: MapPin, label: "Nebraska" },
  { Icon: Road, label: "Pipeline" },
  { Icon: Factory, label: "Liquefaction" },
  { Icon: Ship, label: "LNG shipping" },
  { Icon: Factory, label: "Regasification" },
  { Icon: Building2, label: "City-gas networks" },
  { Icon: MapPin, label: "Japan" },
];

// ─── Section ──────────────────────────────────────────────────────────────

export default function EngProcessV2() {
  return (
    <section className="section-padding container-padding">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16">

        {/* ── Header ─────────────────────────────────────────────────────── */}
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
              Same gas&nbsp;•&nbsp;Same infrastructure&nbsp;•&nbsp;A different
              carbon story.
            </h3>
          </div>
          <p className="text-lg text-current/80 leading-relaxed">
            e&#8209;NG — electric natural gas — is produced by combining
            renewable hydrogen with biogenic CO₂. The result is chemically
            identical to conventional natural gas, meaning it works with
            existing pipelines, LNG facilities, and customer equipment without
            requiring any changes to the energy system it serves.
          </p>
        </motion.div>

        {/* ── Three process steps ────────────────────────────────────────── */}
        <div className="flex flex-col gap-6">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: easeOut }}
            className="flex flex-col gap-5 p-8 rounded-xl border border-current/10 bg-foreground/3"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center size-8 rounded-full bg-secondary dark:bg-primary text-white text-sm font-bold shrink-0">
                1
              </span>
              <h4 className="text-xl font-semibold tracking-tight">
                Renewable electricity + water → Renewable hydrogen
              </h4>
            </div>
            {/* Input → output visual */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex flex-col gap-2">
                <InputPill Icon={Zap} label="Renewable electricity" />
                <InputPill Icon={Droplets} label="Water" />
              </div>
              <ArrowRight className="size-5 shrink-0 text-secondary dark:text-primary" />
              <OutputPill
                Icon={Atom}
                label="Renewable hydrogen"
                badge="Very low carbon"
              />
            </div>
            <p className="text-current/70 leading-relaxed text-sm">
              Live Oak uses renewable electricity from the Midwest&apos;s
              abundant wind and solar resources to power a large-scale
              electrolyser. The electrolyser splits water into hydrogen and
              oxygen. Because no fossil fuels are involved, the hydrogen
              produced carries a very low carbon intensity.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: easeOut, delay: 0.1 }}
            className="flex flex-col gap-5 p-8 rounded-xl border border-current/10 bg-foreground/3"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center size-8 rounded-full bg-secondary dark:bg-primary text-white text-sm font-bold shrink-0">
                2
              </span>
              <h4 className="text-xl font-semibold tracking-tight">
                Biogenic CO₂ + renewable hydrogen → e&#8209;NG
              </h4>
            </div>
            {/* Input → output visual */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex flex-col gap-2">
                <InputPill
                  Icon={Leaf}
                  label="Biogenic CO₂"
                  sublabel="From Nebraska's bioethanol industry"
                />
                <InputPill Icon={Atom} label="Renewable hydrogen" />
              </div>
              <ArrowRight className="size-5 shrink-0 text-secondary dark:text-primary" />
              <OutputPill
                Icon={Flame}
                label="e&#8209;NG"
                badge="Electric natural gas • Very low carbon"
              />
            </div>
            <p className="text-current/70 leading-relaxed text-sm">
              The renewable hydrogen is combined with biogenic CO₂ — captured
              from bioethanol production in Nebraska — in a methanation
              reaction. This produces methane that is chemically identical to
              conventional natural gas. Because the CO₂ originates from
              biological rather than fossil sources, and the hydrogen is made
              with renewable electricity, the resulting e&#8209;NG achieves a
              very low lifecycle carbon footprint.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
            className="flex flex-col gap-5 p-8 rounded-xl border border-current/10 bg-foreground/3"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center size-8 rounded-full bg-secondary dark:bg-primary text-white text-sm font-bold shrink-0">
                3
              </span>
              <h4 className="text-xl font-semibold tracking-tight">
                e&#8209;NG → existing gas and LNG infrastructure
              </h4>
            </div>
            {/* Input → output visual */}
            <div className="flex flex-wrap items-center gap-3">
              <InputPill Icon={Flame} label="e&#8209;NG" />
              <ArrowRight className="size-5 shrink-0 text-secondary dark:text-primary" />
              <OutputPill
                Icon={Road}
                label="Existing infrastructure"
                badge="Pipelines • LNG • City-gas networks"
              />
            </div>
            <p className="text-current/70 leading-relaxed text-sm">
              e&#8209;NG enters the existing natural gas supply chain without
              modification. It can be transported through pipelines, liquefied
              and shipped as LNG, then regasified and distributed through
              city&#8209;gas networks. Customers can use it in existing
              equipment and appliances — no new infrastructure required.
            </p>
          </motion.div>
        </div>

        {/* ── e-NG Coalition link ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="flex items-center gap-2 text-sm text-current/60"
        >
          <span>Want to learn more about e&#8209;NG?</span>
          <a
            href="https://www.engcoalition.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-secondary dark:text-primary font-semibold hover:underline"
          >
            Visit the e&#8209;NG Coalition
            <ExternalLink className="size-3.5" />
          </a>
        </motion.div>

        {/* ── "Turning local by-products…" group ────────────────────────── */}
        <div className="flex flex-col gap-6">
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

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Card 1: Recycling carbon */}
            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: easeOut }}
              className="flex flex-col gap-4 p-8 rounded-xl border border-current/10 bg-foreground/3"
            >
              <h4 className="text-lg font-semibold tracking-tight">
                Recycling carbon already in the natural cycle
              </h4>
              <p className="text-current/70 leading-relaxed text-sm">
                Live Oak uses biogenic CO₂ captured from the Midwest&apos;s
                bioethanol industry — a carbon stream that would otherwise be
                released to the atmosphere — and combines it with renewable
                hydrogen to create e&#8209;NG. Unlike fossil natural gas, which
                brings additional carbon out of geological reservoirs and into
                the atmosphere, Live Oak recycles carbon that was recently
                absorbed from the atmosphere by plants as they grew. By turning
                this biogenic CO₂ into a valuable fuel, Live Oak creates a
                circular carbon pathway: plants capture CO₂, the bioethanol
                industry concentrates it, Live Oak recycles it into e&#8209;NG,
                and the carbon returns to the atmosphere when the fuel is used,
                ready to enter the biological cycle again. Combined with
                renewable electricity, this circular use of biogenic carbon
                enables Live Oak e&#8209;NG to achieve a very low lifecycle
                carbon footprint compared with conventional fossil natural gas.
              </p>
            </motion.div>

            {/* Card 2: Recycling water */}
            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: easeOut, delay: 0.15 }}
              className="flex flex-col gap-4 p-8 rounded-xl border border-current/10 bg-foreground/3"
            >
              <h4 className="text-lg font-semibold tracking-tight">
                Recycling water, preserving a vital local resource
              </h4>
              <p className="text-current/70 leading-relaxed text-sm">
                Live Oak is working in close collaboration with the City of
                Norfolk to develop a water solution based on the reuse of
                treated wastewater rather than relying on fresh water resources
                for its industrial needs. In Nebraska, water is a vital resource
                for agriculture, communities and the wider economy. By giving
                wastewater a second productive use, Live Oak can reduce pressure
                on freshwater supplies while supporting the development of a new
                industrial activity.
              </p>
              <p className="text-current/70 leading-relaxed text-sm">
                This collaboration with the City of Norfolk illustrates how Live
                Oak is being designed as part of the local ecosystem, working
                with the community to make efficient use of existing resources
                and infrastructure while protecting the resources the region
                depends on most. It reflects a broader principle behind the
                project: integrate locally, reuse resources intelligently, and
                create new value while minimising pressure on the region&apos;s
                natural resources.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── From Nebraska to Japan ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: easeOut }}
          className="flex flex-col gap-8 p-8 rounded-xl border border-current/10 bg-foreground/3"
        >
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-semibold tracking-tight">
              From Nebraska to Japan
            </h4>
            <p className="text-current/70 leading-relaxed text-sm">
              Live Oak e&#8209;NG is designed to enter the existing natural gas
              and LNG supply chain, from pipelines and liquefaction to shipping,
              regasification and city&#8209;gas distribution. In Japan, it can
              progressively substitute for fossil natural gas while using
              infrastructure and customer equipment already in place.
            </p>
          </div>

          {/* Value chain visual */}
          <div className="overflow-x-auto -mx-2 px-2">
            <div className="flex items-start gap-2 min-w-max">
              {VALUE_CHAIN.map((node, i) => (
                <div key={node.label} className="flex items-center gap-2">
                  <div className="flex flex-col items-center gap-2 text-center w-20">
                    <div className="flex items-center justify-center size-12 rounded-full bg-secondary/10 dark:bg-primary/10 border border-secondary/30 dark:border-primary/30">
                      <node.Icon className="size-5 text-secondary dark:text-primary" />
                    </div>
                    <p className="text-xs font-medium text-current/70 leading-snug">
                      {node.label}
                    </p>
                  </div>
                  {i < VALUE_CHAIN.length - 1 && (
                    <ArrowRight className="size-4 text-current/30 shrink-0 mb-5" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// ─── Sub-components ────────────────────────────────────────────────────────

function InputPill({
  Icon,
  label,
  sublabel,
}: {
  Icon: LucideIcon;
  label: string;
  sublabel?: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-current/15 bg-foreground/5 text-sm">
      <Icon className="size-4 shrink-0 text-secondary dark:text-primary" />
      <div>
        <p className="font-medium leading-tight">{label}</p>
        {sublabel && (
          <p className="text-xs text-current/50 leading-tight">{sublabel}</p>
        )}
      </div>
    </div>
  );
}

function OutputPill({
  Icon,
  label,
  badge,
}: {
  Icon: LucideIcon;
  label: string;
  badge?: string;
}) {
  return (
    <div className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl bg-secondary/10 dark:bg-primary/10 border border-secondary/30 dark:border-primary/30">
      <Icon className="size-5 shrink-0 text-secondary dark:text-primary" />
      <div>
        <p className="font-semibold leading-tight">{label}</p>
        {badge && (
          <p className="text-xs text-secondary dark:text-primary font-medium mt-0.5">
            {badge}
          </p>
        )}
      </div>
    </div>
  );
}
