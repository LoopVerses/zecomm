"use client";

import { motion } from "framer-motion";

export function ChatAgentAmbientBackground() {
  return (
    <>
      {/* Single centered pulse — behind hero visual */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[62%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(28,51,191,0.14)_0%,rgba(28,51,191,0.04)_45%,transparent_70%)] blur-[60px]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[62%] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/50"
        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
    </>
  );
}
