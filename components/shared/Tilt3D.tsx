"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Tilt3DProps = {
  children: ReactNode;
  className?: string;
  intensity?: number;
};

/** Lightweight 3D tilt — desktop only; static on touch for perf */
export function Tilt3D({ children, className = "", intensity = 12 }: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [canTilt, setCanTilt] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [intensity, -intensity]), {
    stiffness: 180,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-intensity, intensity]), {
    stiffness: 180,
    damping: 22,
  });

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCanTilt(mq.matches);
    const handler = () => setCanTilt(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    if (!canTilt || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width - 0.5);
    mouseY.set((e.clientY - r.top) / r.height - 0.5);
  };

  const onLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={ref}
      className={`min-w-0 max-w-full ${className}`}
      style={{ perspective: canTilt ? 1000 : undefined }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <motion.div
        style={
          canTilt
            ? { rotateX, rotateY, transformStyle: "preserve-3d" }
            : undefined
        }
        className="min-w-0 max-w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
