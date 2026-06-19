"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  }),
};

type EcomSectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
  id?: string;
  "data-figma-node"?: string;
};

export function EcomSectionReveal({
  children,
  className,
  delay = 0,
  as = "div",
  id,
  "data-figma-node": figmaNode,
}: EcomSectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
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
