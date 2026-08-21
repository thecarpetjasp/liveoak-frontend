"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, easeOut, motion } from "motion/react";

// ─── Data ──────────────────────────────────────────────────────────────────

const FAQS = [
  {
    question: "Where will the project be located?",
    answer:
      "Project Live Oak will be located in Northeast Nebraska. The site was chosen because the region brings together the key ingredients for e-NG: strong renewable energy potential, a well-established bioethanol industry that supplies biogenic carbon dioxide, and access to existing energy infrastructure.",
  },
  {
    question: "Where does the CO₂ come from?",
    answer:
      "The carbon dioxide is biogenic, meaning it comes from plants rather than fossil sources. It is captured from the Midwest's ethanol industry, a stream of CO₂ that would otherwise be released to the atmosphere. Live Oak recycles it into a useful fuel instead.",
  },
  {
    question: "Where will the water come from?",
    answer:
      "Live Oak is working closely with local authorities on a water solution based on reusing treated wastewater rather than drawing on fresh water for its industrial needs. Water is a vital resource for agriculture and communities across Nebraska, and giving treated wastewater a second productive use reduces pressure on freshwater supplies while supporting a new local industry.",
  },
  {
    question: "Is the facility safe?",
    answer:
      "Safety is central to how the project is being designed and will be operated. The facility will be engineered, built and run to meet applicable safety and environmental standards and regulatory requirements. The technologies involved, including renewable hydrogen production and methanation, are well understood and already used in industry today. As the project moves through engineering and permitting, we will continue working with regulators and the local community.",
  },
  {
    question: "When could construction begin?",
    answer:
      "Live Oak is currently in Front-End Engineering Design, the detailed engineering phase that precedes a decision to build. A final investment decision is targeted for 2027, and construction would follow that decision, with commercial operations targeted for 2030.",
  },
  {
    question: "Where will the gas go?",
    answer:
      "Live Oak e-NG is designed to enter the existing natural gas and LNG supply chain, from pipelines and liquefaction through shipping, regasification and city-gas distribution. It will primarily serve customers in Japan, where it can gradually substitute for fossil natural gas in existing city-gas networks. Two of the project partners, Osaka Gas and Toho Gas, are the primary future offtakers.",
  },
  {
    question: "Will there be local jobs?",
    answer:
      "Yes. Live Oak is expected to support jobs during construction and ongoing operations, along with opportunities for local businesses and suppliers. As a major industrial investment in the region, the project aims to contribute to the local economy. Specific figures will be shared as the project develops.",
  },
] as const;

// ─── Section ───────────────────────────────────────────────────────────────

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section id="faq" className="section-padding container-padding">
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
              FAQ
            </h2>
            <h3 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              Frequently asked questions
            </h3>
          </div>
          <p className="text-lg text-current/80 leading-relaxed">
            Answers to common questions about the Live Oak project, the
            technology, and what it means for the region.
          </p>
        </motion.div>

        {/* ── Accordion ───────────────────────────────────────────────────── */}
        <div className="flex flex-col divide-y divide-current/10">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: easeOut, delay: i * 0.06 }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left group cursor-pointer"
                aria-expanded={openIndex === i}
              >
                <span className="text-base sm:text-lg font-semibold tracking-tight leading-snug group-hover:text-secondary dark:group-hover:text-primary transition-colors duration-200">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: easeOut }}
                  className="shrink-0 flex items-center justify-center size-7 rounded-full border border-current/15 bg-foreground/3 text-secondary dark:text-primary"
                >
                  <Plus className="size-3.5" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: easeOut }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-current/65 leading-relaxed text-sm sm:text-base max-w-3xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
