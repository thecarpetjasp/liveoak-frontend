"use client";

import { Mail } from "lucide-react";
import { easeOut, motion } from "motion/react";

export default function Contact() {
  return (
    <section className="section-padding container-padding">
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: easeOut }}
          className="flex flex-col items-center text-center gap-8 py-8"
        >
          {/* Icon */}
          <div className="flex items-center justify-center size-16 rounded-2xl bg-secondary/10 dark:bg-primary/10 border border-secondary/20 dark:border-primary/20">
            <Mail className="size-8 text-secondary dark:text-primary" />
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold tracking-tight text-secondary dark:text-primary">
              Contact
            </h2>
            <h3 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              Get in touch with us
            </h3>
            <p className="mt-2 text-lg text-current/60 leading-relaxed max-w-lg">
              Have a question about the Live Oak project? We&apos;d love to hear
              from you — we aim to respond within one business day.
            </p>
          </div>

          {/* Email link */}
          <motion.a
            href="mailto:contact@live-oak-eng.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-secondary/20 dark:border-primary/20 bg-secondary/5 dark:bg-primary/5 hover:bg-secondary/10 dark:hover:bg-primary/10 hover:border-secondary/40 dark:hover:border-primary/40 transition-all duration-300 group"
          >
            <Mail className="size-5 text-secondary dark:text-primary shrink-0" />
            <span className="text-xl font-semibold tracking-tight text-secondary dark:text-primary group-hover:underline underline-offset-4">
              contact@live-oak-eng.com
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
