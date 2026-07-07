"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type EliteCardProps = {
  children: ReactNode;
  className?: string;
  glow?: "violet" | "cyan" | "lime" | "red";
  onClick?: () => void;
};

const GLOW_STYLES = {
  violet:
    "hover:border-accent-violet/40 hover:shadow-[0_24px_64px_rgba(108,76,241,0.18)]",
  cyan: "hover:border-accent-cyan/40 hover:shadow-glow-cyan",
  lime: "hover:border-accent-lime/40 hover:shadow-glow-lime",
  red: "hover:border-red-400/40 hover:shadow-[0_24px_64px_rgba(239,68,68,0.14)]",
} as const;

export function EliteCard({
  children,
  className = "",
  glow = "violet",
  onClick,
}: EliteCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [canTilt, setCanTilt] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 220,
    damping: 22,
  });

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanTilt(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-card transition-[box-shadow,border-color] duration-300 ${GLOW_STYLES[glow]} ${className}`}
      style={{ transformStyle: "preserve-3d" }}
      onMouseMove={(e) => {
        if (!canTilt || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        mouseX.set((e.clientX - r.left) / r.width - 0.5);
        mouseY.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
    >
      {/* Corner glow bloom */}
      <span
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-violet/0 blur-2xl transition-all duration-500 group-hover:bg-accent-violet/20"
        aria-hidden
      />

      {/* Shine sweep on hover */}
      <span
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.07] to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100"
        aria-hidden
      />

      <motion.div
        style={
          canTilt
            ? { rotateX, rotateY, transformStyle: "preserve-3d" as const }
            : undefined
        }
        className="relative h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/** Section ambient floating orbs */
export function SectionAmbience({
  variant = "violet",
}: {
  variant?: "violet" | "cyan" | "mixed" | "red";
}) {
  const colors =
    variant === "red"
      ? ["bg-red-500/15", "bg-red-600/10", "bg-accent-violet/8"]
      : variant === "cyan"
        ? ["bg-accent-cyan/15", "bg-accent-cyan/10"]
        : variant === "mixed"
          ? ["bg-accent-violet/15", "bg-accent-cyan/12", "bg-accent-lime/10"]
          : ["bg-accent-violet/15", "bg-accent-violet/10"];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {colors.map((bg, i) => (
        <motion.span
          key={i}
          className={`absolute rounded-full blur-3xl ${bg}`}
          style={{
            width: `${120 + i * 40}px`,
            height: `${120 + i * 40}px`,
            left: `${10 + i * 30}%`,
            top: `${15 + i * 20}%`,
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}
