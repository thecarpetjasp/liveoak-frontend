"use client";

import { LucideProps, Mail, MapPin, Phone } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { easeOut, motion } from "motion/react";

type ContactMethod = {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  label: string;
  value: string;
  href: string | null;
  description: string;
};

const CONTACT_METHODS: ContactMethod[] = [
  {
    Icon: Phone,
    label: "Phone",
    value: "+1 (402) 555-0100",
    href: "tel:+14025550100",
    description: "Monday – Friday, 9 am – 5 pm CT",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "info@liveoak-eng.com",
    href: "mailto:info@liveoak-eng.com",
    description: "We aim to respond within one business day.",
  },
  {
    Icon: MapPin,
    label: "Address",
    value: "Norfolk, Nebraska",
    href: null,
    description: "Northeast Nebraska, United States",
  },
];

export default function Contact() {
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
            Contact
          </h2>
          <h3 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Get in touch with us.
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {CONTACT_METHODS.map(
            ({ Icon, label, value, href, description }, i) => (
              <ContactCard
                key={label}
                Icon={Icon}
                label={label}
                value={value}
                href={href}
                description={description}
                index={i}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  Icon,
  label,
  value,
  href,
  description,
  index,
}: ContactMethod & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: easeOut, delay: index * 0.15 }}
      className="flex flex-col gap-6 p-8 rounded-xl border border-current/10 bg-foreground/3"
    >
      <div className="flex items-center justify-center size-12 rounded-lg bg-secondary/10 dark:bg-primary/10">
        <Icon className="size-6 text-secondary dark:text-primary" />
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-xs font-semibold tracking-widest uppercase text-current/50">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            className="text-xl font-semibold tracking-tight hover:text-secondary dark:hover:text-primary transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-xl font-semibold tracking-tight">{value}</p>
        )}
        <p className="mt-1 text-sm text-current/60">{description}</p>
      </div>
    </motion.div>
  );
}
