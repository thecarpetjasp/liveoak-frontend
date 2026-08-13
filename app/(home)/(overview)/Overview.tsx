"use client";

import { Atom, Blocks, LucideProps, Road } from "lucide-react";
import Image from "next/image";
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";
import { easeOut, motion } from "motion/react";

import renewableEnergy from "@/public/renewable_energy.jpg";

export default function Overview() {
  return (
    <section className="container-padding section-padding">
      <div className="max-w-7xl w-full mx-auto flex max-lg:flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: easeOut }}
          className="flex flex-col gap-8 lg:w-1/2"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold tracking-tight text-secondary dark:text-primary">
              Project Overview
            </h2>
            <h3 className="text-4xl font-semibold tracking-tight">
              Project Live Oak is advancing a new way to produce natural gas
              with a lower carbon footprint.
            </h3>
          </div>
          <div className="flex flex-col gap-6 text-current/80">
            <p>
              Located near Norfolk, Nebraska, the project will produce e-NG
              using renewable electricity, water, and captured carbon dioxide.
              Through this process, the facility will create methane that is
              chemically identical to conventional natural gas.
            </p>
            <p>
              That compatibility is one of the project&apos;s key advantages
              because:
            </p>
            <div className="flex flex-col gap-3 pl-3">
              <OverviewBullet
                text={
                  "e-NG is the same molecule as the natural gas already in use"
                }
                Icon={Atom}
              ></OverviewBullet>
              <OverviewBullet
                text={
                  "it can be transported through existing natural gas pipelines"
                }
                Icon={Road}
              ></OverviewBullet>
              <OverviewBullet
                text={
                  "used by existing customers without requiring new equipment or infrastructure"
                }
                Icon={Blocks}
              ></OverviewBullet>
            </div>
            <OverviewQuote>
              Project Live Oak is being developed by TotalEnergies, together
              with TES, Osaka Gas, Itochu, and Toho Gas.
            </OverviewQuote>
            <p>
              The project is now entering Front End Engineering Design (FEED)—a
              critical stage in which the facility&apos;s design, expected
              costs, and schedule are developed in detail ahead of a final
              investment decision
            </p>
          </div>
        </motion.div>
        {/* Image for desktop */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: easeOut }}
          className="lg:w-1/2 max-lg:hidden"
        >
          <div className="relative w-full lg:h-full h-96 overflow-hidden rounded-4xl">
            <Image
              src={renewableEnergy}
              alt="test"
              fill
              className="object-cover"
            ></Image>
            \
          </div>
        </motion.div>
        {/* Image for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: easeOut }}
          className="lg:w-1/2 lg:hidden"
        >
          <div className="relative w-full lg:h-full h-96 overflow-hidden rounded-4xl">
            <Image
              src={renewableEnergy}
              alt="test"
              fill
              className="object-cover"
            ></Image>
            \
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function OverviewBullet({
  text,
  Icon,
}: {
  text: string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}) {
  return (
    <div className="flex items-start gap-2">
      <Icon className="shrink-0 size-5 mt-0.5 text-secondary dark:text-primary"></Icon>
      <p className="font-semibold text-black dark:text-white">{text}</p>
    </div>
  );
}

export function OverviewQuote({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="block self-stretch w-1 bg-secondary dark:bg-primary"></span>
      <p>{children}</p>
    </div>
  );
}
