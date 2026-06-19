"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

const hoverGlow =
  "0px 24px 48px 0px var(--color-brand-blue-20), 0 0 28px rgba(28, 51, 191, 0.18)";

export const EcomHoverCard = forwardRef<HTMLElement, HTMLMotionProps<"article">>(
  function EcomHoverCard({ transition, ...props }, ref) {
    return (
      <motion.article
        ref={ref}
        whileHover={{
          scale: 1.02,
          boxShadow: hoverGlow,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          ...transition,
        }}
        {...props}
      />
    );
  }
);

export const EcomHoverCardDiv = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  function EcomHoverCardDiv({ transition, ...props }, ref) {
    return (
      <motion.div
        ref={ref}
        whileHover={{
          scale: 1.02,
          boxShadow: hoverGlow,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          ...transition,
        }}
        {...props}
      />
    );
  }
);
