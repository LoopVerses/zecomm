"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

/** Lightweight page fade — no y-shift to avoid scroll jank */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
