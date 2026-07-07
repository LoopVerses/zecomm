"use client";

import { motion } from "framer-motion";

export function MeshGradient({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className="zc-mesh-animated absolute inset-0 bg-mesh-violet" />
      <motion.div
        className="absolute -left-[20%] top-[10%] h-[500px] w-[500px] rounded-full bg-accent-violet/20 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[15%] top-[30%] h-[400px] w-[400px] rounded-full bg-accent-cyan/15 blur-[100px]"
        animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-[5%] left-[30%] h-[350px] w-[350px] rounded-full bg-accent-violet/10 blur-[90px]"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
