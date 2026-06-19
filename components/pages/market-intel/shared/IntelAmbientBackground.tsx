"use client";

import { motion } from "framer-motion";

export function IntelAmbientBackground() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,185,129,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[55%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/[0.08]"
        animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -right-24 top-0 h-[350px] w-[350px] rounded-full bg-emerald-500/[0.06] blur-[100px]"
        animate={{ x: [0, -16, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
    </>
  );
}
