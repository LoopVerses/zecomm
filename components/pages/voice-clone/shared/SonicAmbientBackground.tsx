"use client";

import { motion } from "framer-motion";

export function SonicAmbientBackground() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(249,115,22,0.12) 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(139,92,246,0.08) 0%, transparent 50%)",
        }}
        aria-hidden
      />
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute left-1/2 top-[50%] rounded-full border border-orange-500/[0.06]"
          style={{
            width: 180 + i * 100,
            height: 180 + i * 100,
            marginLeft: -(90 + i * 50),
            marginTop: -(90 + i * 50),
          }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 5 + i * 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
          aria-hidden
        />
      ))}
    </>
  );
}
