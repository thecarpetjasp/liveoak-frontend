"use client";

import Image from "next/image";
import { easeOut, motion } from "motion/react";

import team from "@/public/team.jpg";

export default function About() {
  return (
    <section className="section-padding container-padding relative isolate bg-linear-to-tr from-secondary to-primary dark:from-background dark:to-background text-white overflow-hidden">
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
      <div className="absolute inset-0 "></div>
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-12 z-10">
        <div className="text-center flex flex-col gap-6 text-balance">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            About Project Live Oak
          </h2>
          <p className="text-xl text-current/80">
            Discover how Project Live Oak is transforming renewable power and
            captured carbon dioxide into e-NG—a lower-carbon natural gas that
            works with the infrastructure already in place.
          </p>
        </div>
        <div className="flex max-lg:flex-col items-start gap-8 p-8 rounded-xl bg-background/20 backdrop-blur-xl">
          <div className="flex flex-col gap-8">
            <p>
              Project Live Oak will produce e-NG in Northeast, Nebraska. e-NG is
              made from renewable power and captured carbon dioxide instead of
              being pulled from underground. The finished fuel is the same
              molecule as conventional natural gas, so it works with the
              pipelines, storage, and equipment already in place.
            </p>
            <p>
              The project is a joint venture led by TotalEnergies, with partners
              TES, Osaka Gas, Itochu, and Toho Gas. Together, the partners bring
              extensive experience across energy, infrastructure, technology,
              and project development
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <p>
              Northeast Nebraska was chosen for access to renewable power, a
              local supply of biogenic carbon dioxide, and pipeline
              connectivity. The facility is designed to turn these local
              resources into a product that lets customers lower emissions
              without rebuilding their own infrastructure.
            </p>
            <p>
              Project Live Oak is now entering Front End Engineering Design. In
              this stage the partners complete the detailed engineering, cost
              estimate, and schedule that a final investment decision depends
              on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
