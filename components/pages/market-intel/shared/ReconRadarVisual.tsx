"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CountUp } from "@/components/shared/CountUp";

const BLIPS = [
  { id: 1, x: 72, y: 28, label: "Comp-X" },
  { id: 2, x: 22, y: 55, label: "Rival-A" },
  { id: 3, x: 78, y: 72, label: "Comp-Y" },
  { id: 4, x: 38, y: 18, label: "Gap-07" },
  { id: 5, x: 55, y: 82, label: "Comp-Z" },
  { id: 6, x: 15, y: 35, label: "Rival-B" },
] as const;

const SIDE_FEATURES = {
  left: [
    { icon: "fas fa-tags", title: "Price Track", value: "−12%", sub: "Comp-X live" },
    { icon: "fas fa-fire", title: "Trend Scan", value: "+240%", sub: "Tech accessories" },
    { icon: "fas fa-bullseye", title: "Gap Finder", value: "14", sub: "Zero-comp hits" },
  ],
  right: [
    { icon: "fas fa-ad", title: "Ad Intel", value: "+34%", sub: "Rival-A spend" },
    { icon: "fas fa-box", title: "SKU Watch", value: "3 new", sub: "Comp-Y catalog" },
    { icon: "fas fa-search", title: "Keyword Vol", value: "42K", sub: "Eco packaging" },
  ],
} as const;

const BOTTOM_METRICS = [
  { label: "Latency", value: "0.5s" },
  { label: "Accuracy", value: "94%" },
  { label: "Targets", value: "240+" },
  { label: "Signals/hr", value: "128" },
] as const;

export function ReconRadarVisual() {
  const [activeBlip, setActiveBlip] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBlip((b) => (b + 1) % BLIPS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[1000px]">
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-[#0A1A16]/95 p-5 sm:p-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Corner accents */}
        <div className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l border-t border-emerald-500/40" aria-hidden />
        <div className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r border-t border-emerald-500/40" aria-hidden />
        <div className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b border-l border-emerald-500/40" aria-hidden />
        <div className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b border-r border-emerald-500/40" aria-hidden />

        <div className="mb-5 flex items-center justify-between px-1">
          <div>
            <p className="font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-emerald-500">
              Recon Command Deck
            </p>
            <p className="font-poppins text-xs font-bold text-white">Unit 03 · Search Node</p>
          </div>
          <span className="flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="font-poppins text-[8px] font-bold uppercase text-emerald-400">Sweep live</span>
          </span>
        </div>

        {/* Bento: features flanking centered radar */}
        <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(260px,320px)_minmax(0,1fr)] lg:gap-5">
          {/* Left features */}
          <div className="flex flex-row gap-2 lg:flex-col lg:gap-2.5">
            {SIDE_FEATURES.left.map((feat, i) => (
              <motion.div
                key={feat.title}
                className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 lg:px-4 lg:py-3"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.08 }}
                whileHover={{ borderColor: "rgba(16,185,129,0.35)", backgroundColor: "rgba(16,185,129,0.06)" }}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15">
                  <i className={`${feat.icon} text-[11px] text-emerald-400`} aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="font-poppins text-[8px] font-bold uppercase tracking-wider text-gray-500">{feat.title}</p>
                  <p className="font-poppins text-sm font-extrabold text-white">{feat.value}</p>
                  <p className="truncate font-poppins text-[9px] text-emerald-500/80">{feat.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center radar */}
          <div className="relative mx-auto aspect-square w-full max-w-[300px]">
            {[100, 78, 56, 34].map((size) => (
              <div
                key={size}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/12"
                style={{ width: `${size}%`, height: `${size}%` }}
                aria-hidden
              />
            ))}

            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-emerald-500/10" aria-hidden />
            <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-emerald-500/10" aria-hidden />

            {/* Centered sweep — SVG */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 200" aria-hidden>
              <defs>
                <linearGradient id="sweepLine" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#34d399" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.g
                style={{ transformOrigin: "100px 100px" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <line x1="100" y1="100" x2="100" y2="14" stroke="url(#sweepLine)" strokeWidth="2" strokeLinecap="round" />
              </motion.g>
            </svg>

            {BLIPS.map((blip, i) => (
              <motion.div
                key={blip.id}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${blip.x}%`, top: `${blip.y}%` }}
                animate={activeBlip === i ? { scale: [1, 1.4, 1] } : { scale: 1 }}
                transition={{ duration: 0.45 }}
              >
                <span
                  className={`block h-2 w-2 rounded-full ${
                    activeBlip === i
                      ? "bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]"
                      : "bg-emerald-500/50"
                  }`}
                />
                {activeBlip === i && (
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-emerald-500/30 bg-[#050F0D] px-1.5 py-0.5 font-poppins text-[8px] font-bold text-emerald-400">
                    {blip.label}
                  </span>
                )}
              </motion.div>
            ))}

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <CountUp value={14} className="font-poppins text-4xl font-extrabold text-white" />
              <span className="font-poppins text-[9px] font-bold uppercase tracking-wider text-emerald-500">
                Gaps locked
              </span>
            </div>
          </div>

          {/* Right features */}
          <div className="flex flex-row gap-2 lg:flex-col lg:gap-2.5">
            {SIDE_FEATURES.right.map((feat, i) => (
              <motion.div
                key={feat.title}
                className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 lg:px-4 lg:py-3"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.08 }}
                whileHover={{ borderColor: "rgba(16,185,129,0.35)", backgroundColor: "rgba(16,185,129,0.06)" }}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15">
                  <i className={`${feat.icon} text-[11px] text-emerald-400`} aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="font-poppins text-[8px] font-bold uppercase tracking-wider text-gray-500">{feat.title}</p>
                  <p className="font-poppins text-sm font-extrabold text-white">{feat.value}</p>
                  <p className="truncate font-poppins text-[9px] text-emerald-500/80">{feat.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom metrics strip */}
        <div className="mt-5 grid grid-cols-2 gap-2 border-t border-white/10 pt-4 sm:grid-cols-4">
          {BOTTOM_METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              className="rounded-xl border border-emerald-500/10 bg-emerald-500/[0.04] px-3 py-2.5 text-center"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.06 }}
            >
              <p className="font-poppins text-sm font-extrabold text-white">{m.value}</p>
              <p className="font-poppins text-[8px] font-bold uppercase tracking-wider text-gray-500">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
