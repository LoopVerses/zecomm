"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { EASE_OUT } from "@/lib/design-system";

/** Fast, GPU-friendly reveal — used across all inner pages */
const revealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: EASE_OUT },
  }),
};

type PremiumRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
  id?: string;
  "data-figma-node"?: string;
};

export function PremiumReveal({
  children,
  className,
  delay = 0,
  as = "div",
  id,
  "data-figma-node": figmaNode,
}: PremiumRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const Component = motion[as];

  return (
    <Component
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
    </Component>
  );
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};
