"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { EASE_OUT } from "@/lib/design-system";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function ScrollReveal({ children, className = "", delay = 0, y = 32 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.6, delay, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
