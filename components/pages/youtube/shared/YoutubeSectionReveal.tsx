"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

type YoutubeSectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  "data-figma-node"?: string;
};

export function YoutubeSectionReveal({
  children,
  className,
  delay = 0,
  id,
  "data-figma-node": figmaNode,
}: YoutubeSectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <motion.div
      ref={ref}
      id={id}
      data-figma-node={figmaNode}
      custom={delay}
      variants={revealVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};
