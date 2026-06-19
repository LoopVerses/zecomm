"use client";

import { motion } from "framer-motion";

export function WhatsappAmbientBackground() {
  return (
    <>
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(34,197,94,0.12) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
        animate={{ opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-green-500/[0.04] via-transparent to-emerald-500/[0.06]"
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
    </>
  );
}
