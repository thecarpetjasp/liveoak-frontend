"use client";

import { easeOut, motion } from "motion/react";

type Fact = {
  value: string;
  label: string;
};

const FACTS: Fact[] = [
  { value: "Northeast Nebraska", label: "Location" },
  { value: "250 MW", label: "Electrolysis capacity" },
  { value: "~75,000 t/yr", label: "e-NG production capacity" },
  { value: "5", label: "Global industrial partners" },
  { value: "2027", label: "Target FID" },
  { value: "2030", label: "Target operations" },
];

export default function LiveOakAtAGlance() {
  return (
    <section className="section-padding container-padding">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: easeOut }}
          className="flex flex-col gap-2"
        >
          <h2 className="text-lg font-semibold tracking-tight text-secondary dark:text-primary">
            Key Facts
          </h2>
          <h3 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Live Oak at a Glance
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACTS.map((fact, i) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: easeOut, delay: i * 0.08 }}
              className="flex flex-col gap-2 p-8 rounded-xl border border-current/10 bg-foreground/3"
            >
              <p className="text-2xl sm:text-3xl font-semibold tracking-tight">
                {fact.value}
              </p>
              <p className="text-current/70 text-sm leading-relaxed">
                {fact.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
