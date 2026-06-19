"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const LAYERS = [
  { label: "Voice patterns", value: 100, color: "stroke-brand-blue" },
  { label: "Sales logic tree", value: 98, color: "stroke-indigo-400" },
  { label: "Tone & emotion map", value: 99.4, color: "stroke-cyan-500" },
] as const;

function Ring({
  value,
  radius,
  strokeClass,
  delay,
  active,
}: {
  value: number;
  radius: number;
  strokeClass: string;
  delay: number;
  active: boolean;
}) {
  const c = 2 * Math.PI * radius;
  const offset = c - (value / 100) * c;

  return (
    <circle
      cx="100"
      cy="100"
      r={radius}
      fill="none"
      className={strokeClass}
      strokeWidth="6"
      strokeLinecap="round"
      strokeDasharray={c}
      strokeDashoffset={active ? offset : c}
      style={{ transition: `stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s` }}
    />
  );
}

export function NeuralSyncDial() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl border border-gray-200 bg-[#080C1A] p-8"
      data-figma-node="6:406"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(28,51,191,0.15),transparent_65%)]"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
        aria-hidden
      />

      <div className="relative flex flex-col items-center">
        <p className="font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-brand-blue">
          Identity sync progress
        </p>

        <div className="relative mt-6 h-[200px] w-[200px]">
          <svg className="h-full w-full -rotate-90" viewBox="0 0 200 200" aria-hidden>
            <circle cx="100" cy="100" r="78" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
            <circle cx="100" cy="100" r="62" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
            <circle cx="100" cy="100" r="46" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
            <Ring value={LAYERS[0].value} radius={78} strokeClass="stroke-brand-blue" delay={0.2} active={inView} />
            <Ring value={LAYERS[1].value} radius={62} strokeClass="stroke-indigo-400" delay={0.35} active={inView} />
            <Ring value={LAYERS[2].value} radius={46} strokeClass="stroke-cyan-400" delay={0.5} active={inView} />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span
              className="font-poppins text-3xl font-extrabold text-white"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              99.4%
            </motion.span>
            <span className="font-poppins text-[8px] font-bold uppercase tracking-wider text-gray-500">
              Optimal
            </span>
          </div>
        </div>

        <div className="mt-6 w-full space-y-2">
          {LAYERS.map((layer, i) => (
            <motion.div
              key={layer.label}
              className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5"
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <span className="font-poppins text-[10px] font-medium text-gray-400">{layer.label}</span>
              <span className="font-poppins text-sm font-extrabold text-white">{layer.value}%</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-5 font-poppins text-[10px] text-emerald-400"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
        >
          ✓ Ready for global deployment
        </motion.p>
      </div>
    </div>
  );
}
