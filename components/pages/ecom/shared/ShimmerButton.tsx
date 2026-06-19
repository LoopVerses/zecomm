"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";

type ShimmerButtonProps = ComponentProps<typeof Link> & {
  children: ReactNode;
  shimmerOnHover?: boolean;
};

export function ShimmerButton({
  children,
  className = "",
  shimmerOnHover = true,
  ...props
}: ShimmerButtonProps) {
  return (
    <Link
      className={`group relative inline-flex overflow-hidden ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {shimmerOnHover && (
        <motion.span
          className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: "-120%" }}
          whileHover={{ x: "120%" }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
          aria-hidden
        />
      )}
    </Link>
  );
}
