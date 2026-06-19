"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CountUp } from "@/components/shared/CountUp";

const TRAITS = [
  { label: "Tone cadence", icon: "fas fa-wave-square" },
  { label: "Closing logic", icon: "fas fa-brain" },
  { label: "Objection style", icon: "fas fa-shield-alt" },
  { label: "Phrase bank", icon: "fas fa-comment-dots" },
] as const;

export function IdentityTwinVisual() {
  const [syncIndex, setSyncIndex] = useState(0);
  const [match, setMatch] = useState(87.2);

  useEffect(() => {
    const interval = setInterval(() => {
      setSyncIndex((i) => (i + 1) % (TRAITS.length + 1));
      setMatch((m) => (m >= 99.4 ? 87.2 : Math.min(99.4, m + 3.1)));
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const r = 52;
  const c = 2 * Math.PI * r;
  const offset = c - (match / 100) * c;

  return (
    <div className="relative mx-auto w-full max-w-[880px]">
      <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-6">
        {/* Human */}
        <motion.div
          className="rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_8px_40px_rgba(28,51,191,0.06)]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-900 font-poppins text-xs font-bold text-white">
              YOU
            </div>
            <div>
              <p className="font-poppins text-xs font-bold text-gray-900">Original Identity</p>
              <p className="font-poppins text-[9px] text-gray-500">Source node · live</p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {TRAITS.map((t, i) => (
              <div
                key={t.label}
                className={`flex items-center gap-2 rounded-lg border px-3 py-2 transition-colors ${
                  syncIndex > i ? "border-brand-blue/25 bg-brand-blue/[0.04]" : "border-gray-100 bg-gray-50/80"
                }`}
              >
                <i className={`${t.icon} text-[10px] text-brand-blue`} aria-hidden />
                <span className="font-poppins text-[10px] font-medium text-gray-700">{t.label}</span>
                {syncIndex > i && (
                  <i className="fas fa-check ml-auto text-[9px] text-emerald-500" aria-hidden />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sync bridge */}
        <motion.div
          className="relative flex flex-col items-center py-4 sm:py-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35 }}
        >
          <div className="relative h-[120px] w-[120px] sm:h-[140px] sm:w-[140px]">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120" aria-hidden>
              <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(28,51,191,0.1)" strokeWidth="8" />
              <motion.circle
                cx="60"
                cy="60"
                r={r}
                fill="none"
                stroke="url(#cloneMatch)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={c}
                animate={{ strokeDashoffset: offset }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
              <defs>
                <linearGradient id="cloneMatch" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1C33BF" />
                  <stop offset="100%" stopColor="#818CF8" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <CountUp
                value={match}
                decimals={1}
                suffix="%"
                className="font-poppins text-2xl font-extrabold text-brand-blue"
              />
              <span className="font-poppins text-[8px] font-bold uppercase tracking-wider text-gray-500">
                Match
              </span>
            </div>
          </div>

          <div className="mt-3 hidden h-px w-16 bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent sm:block" aria-hidden />
          <motion.div
            className="mt-2 flex gap-1"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {[0, 1, 2, 3, 4].map((d) => (
              <motion.span
                key={d}
                className="h-1 w-1 rounded-full bg-brand-blue"
                animate={{ scale: syncIndex === d ? [1, 1.4, 1] : 1 }}
                transition={{ duration: 0.4 }}
              />
            ))}
          </motion.div>
          <p className="mt-2 font-poppins text-[9px] font-bold uppercase tracking-[0.2em] text-brand-blue">
            Neural Sync
          </p>
        </motion.div>

        {/* Clone */}
        <motion.div
          className="rounded-2xl border border-brand-blue/25 bg-gradient-to-br from-brand-blue/[0.06] to-indigo-500/[0.04] p-5"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
        >
          <div className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue font-poppins text-xs font-bold text-white">
              U4
              <motion.span
                className="absolute -inset-1 rounded-full border border-brand-blue/30"
                animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div>
              <p className="font-poppins text-xs font-bold text-gray-900">Clone Unit 04</p>
              <p className="flex items-center gap-1 font-poppins text-[9px] text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Syncing live
              </p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <AnimatePresence mode="popLayout">
              {TRAITS.slice(0, Math.max(1, syncIndex)).map((t) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 rounded-lg border border-brand-blue/20 bg-white/70 px-3 py-2 backdrop-blur-sm"
                >
                  <i className={`${t.icon} text-[10px] text-brand-blue`} aria-hidden />
                  <span className="font-poppins text-[10px] font-medium text-gray-800">{t.label}</span>
                  <span className="ml-auto font-poppins text-[8px] font-bold uppercase text-emerald-600">
                    synced
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
            {syncIndex === 0 && (
              <p className="rounded-lg border border-dashed border-brand-blue/20 px-3 py-4 text-center font-poppins text-[10px] text-gray-500">
                Awaiting trait stream...
              </p>
            )}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-4 flex flex-wrap items-center justify-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {["10K+ parallel chats", "50+ languages", "CRM memory"].map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-brand-blue/15 bg-white px-4 py-1.5 font-poppins text-[9px] font-semibold uppercase tracking-wider text-brand-blue"
          >
            {chip}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
