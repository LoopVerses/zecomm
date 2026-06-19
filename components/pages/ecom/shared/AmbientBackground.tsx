"use client";

import { motion } from "framer-motion";

const PARTICLES = [
  { left: "8%", delay: "0s", size: 4, duration: 18 },
  { left: "18%", delay: "-4s", size: 3, duration: 22 },
  { left: "32%", delay: "-8s", size: 5, duration: 20 },
  { left: "48%", delay: "-2s", size: 3, duration: 24 },
  { left: "62%", delay: "-11s", size: 4, duration: 19 },
  { left: "74%", delay: "-6s", size: 3, duration: 21 },
  { left: "86%", delay: "-9s", size: 5, duration: 23 },
  { left: "94%", delay: "-3s", size: 3, duration: 17 },
] as const;

/** Animated mesh + particles + dot grid for ecom sections */
export function HeroAmbientBackground() {
  return (
    <>
      <div className="ecom-mesh-layer pointer-events-none absolute inset-0" aria-hidden />

      <div
        className="ecom-grid-flow pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(28,51,191,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />

      <div
        className="ecom-bg-orb pointer-events-none absolute -left-24 top-[10%] h-80 w-80 rounded-full bg-brand-blue/12 blur-[90px]"
        aria-hidden
      />
      <div
        className="ecom-bg-orb-delay pointer-events-none absolute -right-20 top-[35%] h-72 w-72 rounded-full bg-indigo-400/10 blur-[80px]"
        aria-hidden
      />
      <div
        className="ecom-mesh-blob pointer-events-none absolute left-[35%] bottom-[15%] h-64 w-64 rounded-full bg-sky-400/10 blur-[70px]"
        style={{ animationDelay: "-5s" }}
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="ecom-particle absolute bottom-0 rounded-full bg-brand-blue/25"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-blue/[0.03] via-transparent to-indigo-500/[0.04]"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <div
        className="ecom-wave pointer-events-none absolute inset-x-0 bottom-0 h-32 opacity-40"
        aria-hidden
      />
    </>
  );
}

/** Lighter variant for mid-page white sections */
export function SectionAmbientBackground() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(28,51,191,0.06) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div
        className="ecom-bg-orb pointer-events-none absolute -right-32 top-1/4 h-64 w-64 rounded-full bg-brand-blue/[0.06] blur-[80px]"
        aria-hidden
      />
    </>
  );
}

export function DarkSectionAmbient() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -left-[10%] top-[15%] h-[480px] w-[480px] rounded-full bg-brand-blue opacity-[0.07] blur-[100px]"
        animate={{ x: [0, 48, 0], y: [0, -36, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[5%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-brand-blue opacity-[0.05] blur-[90px]"
        animate={{ x: [0, -40, 0], y: [0, 28, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
}
