"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function AppStore() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = expanded ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [expanded]);
  return (
    <>
      {/* Background overlay */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setExpanded(false)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence mode="popLayout">
        {!expanded ? (
          /* =========================
             COLLAPSED CARD
             ========================= */
          <motion.div
            key="collapsed"
            layoutId="card"
            onClick={() => setExpanded(true)}
            className="relative z-50 size-64 cursor-pointer overflow-hidden rounded-xl"
          >
            {/* Image container */}
            <motion.div
              layoutId="card-image-container"
              className="absolute inset-0"
            >
              {/* Actual image */}
              <motion.div layoutId="card-image" className="absolute inset-0">
                <Image
                  src="/youcodeme-small-logo.png"
                  alt="youcodeme"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          /* =========================
             EXPANDED CARD
             ========================= */
          <motion.div
            key="expanded"
            layoutId="card"
            className="fixed left-1/2 top-1/2 z-50 w-[min(90vw,600px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            {/* Hero */}
            <motion.div layout className="relative h-[400px] overflow-hidden">
              {/* Image container */}
              <motion.div
                layoutId="card-image-container"
                className="absolute inset-0"
              >
                {/* Actual image */}
                <motion.div layoutId="card-image" className="absolute inset-0">
                  <Image
                    src="/youcodeme-small-logo.png"
                    alt="youcodeme"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>

              {/* Gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Title */}
              <motion.div
                layoutId="card-title-container"
                className="absolute bottom-0 left-0 z-20 p-8 text-white"
              >
                <motion.span
                  layoutId="card-category"
                  className="block text-sm font-medium uppercase tracking-wider text-white/70"
                >
                  YouCodeMe
                </motion.span>

                <motion.h2
                  layoutId="card-title"
                  className="mt-2 text-4xl font-semibold tracking-tight"
                >
                  This is a title
                </motion.h2>

                {/* This doesn't exist in the collapsed card,
                    so it gets a normal enter animation. */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                  className="mt-2 max-w-md text-white/80"
                >
                  A short description about this project goes here.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Expanded content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="p-8"
            >
              <p className="text-gray-600">
                This is where you can put the full content for your expanded
                card. You could have additional information, buttons, links,
                statistics, or anything else you need.
              </p>

              <div className="mt-6 flex gap-3">
                <button
                  className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  View project
                </button>

                <button
                  className="rounded-full bg-gray-100 px-5 py-2.5 text-sm font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  Learn more
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
