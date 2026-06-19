"use client";

import { motion } from "framer-motion";

export function CloneAmbientBackground() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(125deg, rgba(28,51,191,0.04) 0%, transparent 40%, rgba(99,102,241,0.05) 100%)",
        }}
        aria-hidden
      />
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full border border-brand-blue/[0.07]"
          style={{
            width: 200 + i * 120,
            height: 200 + i * 120,
            left: "50%",
            top: "55%",
            marginLeft: -(100 + i * 60),
            marginTop: -(100 + i * 60),
          }}
          animate={{ rotate: [0, 180, 360], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 18 + i * 4, repeat: Infinity, ease: "linear", delay: i * 2 }}
          aria-hidden
        />
      ))}
    </>
  );
}
