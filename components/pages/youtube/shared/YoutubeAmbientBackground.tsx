"use client";

import { motion } from "framer-motion";

export function YoutubeAmbientBackground() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-red-600/[0.08] blur-[120px]"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -left-24 bottom-1/4 h-[400px] w-[400px] rounded-full bg-red-600/[0.05] blur-[100px]"
        animate={{ x: [0, 24, 0], y: [0, -16, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        aria-hidden
      />
    </>
  );
}
