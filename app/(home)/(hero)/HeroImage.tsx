"use client";

import Image from "next/image";
import { easeInOut, motion, useMotionValue, useTransform } from "motion/react";
import farmingV2 from "@/public/farming-v2.jpg";
import { useEffect } from "react";
import { animate } from "motion";

export default function HeroImage() {
  const progress = useMotionValue(0);
  const lightGradient = useTransform(
    progress,
    [0, 1],
    [
      "linear-gradient(to top right, #00B762, #00B762)",
      "linear-gradient(to top right, #000D5E, #00B762)",
    ],
  );
  const darkGradient = useTransform(
    progress,
    [0, 1],
    [
      "linear-gradient(to top right, #000D5E, #000D5E)",
      "linear-gradient(to top right, #00B762, #000D5E)",
    ],
  );

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration: 2,
      ease: easeInOut,
    });

    return () => controls.stop();
  }, [progress]);

  return (
    <>
      <motion.div
        // initial={{ opacity: 0, filter: "blur(10px)" }}
        // animate={{ opacity: 1, filter: "blur(0px)" }}
        // transition={{ duration: 1.5, ease: easeIn }}
        className="absolute inset-0 -z-20"
      >
        <Image
          src={farmingV2}
          alt="Agricultural harvester collecting corn in a field"
          fill
          className="object-cover"
          preload
        ></Image>
      </motion.div>
      {/* Light overlay */}
      <motion.div
        style={{ background: lightGradient }}
        className="absolute inset-0 -z-10 opacity-75 dark:hidden"
      ></motion.div>
      {/* Dark overlay */}
      <motion.div
        style={{ background: darkGradient }}
        className="absolute inset-0 -z-10 opacity-75 hidden dark:block"
      ></motion.div>
    </>
  );
}
