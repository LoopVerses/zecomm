"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CountUp } from "@/components/shared/CountUp";

const MESSAGES = [
  { from: "visitor", text: "What's the difference between Pro and Elite?" },
  { from: "agent", text: "Great question! Elite includes API access + Search Intel — clients save avg $2,400/mo. Want the breakdown?" },
  { from: "visitor", text: "Price seems high compared to Competitor X..." },
  { from: "agent", text: "Totally fair. X doesn't include 24/7 intel or objection AI. Here's a case study from a similar agency →" },
  { from: "system", text: "✓ Objection cleared · Checkout initiated" },
] as const;

const FLOATING_CHIPS = [
  { label: "Intent AI", icon: "fas fa-brain", position: "top-16 -right-6 sm:-right-10", delay: 0.9 },
  { label: "Objection Kill", icon: "fas fa-shield-alt", position: "-bottom-2 -left-6 sm:-left-10", delay: 1.05 },
] as const;

export function ChatCloserVisual() {
  const [visibleCount, setVisibleCount] = useState(2);
  const [intent, setIntent] = useState(0.78);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= MESSAGES.length) {
          setIntent(0.78);
          return 2;
        }
        setTyping(true);
        setTimeout(() => setTyping(false), 700);
        setIntent((i) => Math.min(0.98, i + 0.05));
        return prev + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      {FLOATING_CHIPS.map((chip) => (
        <motion.div
          key={chip.label}
          className={`absolute z-30 hidden rounded-full border border-brand-blue/25 bg-[#0d1224]/95 px-3 py-1.5 backdrop-blur-sm sm:flex ${chip.position}`}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
          transition={{
            opacity: { delay: chip.delay, duration: 0.5 },
            scale: { delay: chip.delay, duration: 0.5 },
            y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: chip.delay },
          }}
        >
          <i className={`${chip.icon} mr-2 text-[9px] text-brand-blue`} aria-hidden />
          <span className="font-poppins text-[8px] font-bold uppercase tracking-wider text-white/80">{chip.label}</span>
        </motion.div>
      ))}

      <motion.div
        className="absolute -left-4 top-8 z-20 rounded-xl border border-brand-blue/30 bg-[#0d1224] px-4 py-3 shadow-[0_8px_32px_rgba(28,51,191,0.2)] sm:-left-8"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
      >
        <p className="font-poppins text-[9px] font-bold uppercase tracking-wider text-brand-blue">Buyer intent</p>
        <div className="relative">
          <motion.span
            className="pointer-events-none absolute -inset-2 rounded-lg border border-brand-blue/20"
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.08, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            aria-hidden
          />
          <p className="relative font-poppins text-xl font-extrabold text-white">
            {(intent * 100).toFixed(0)}
            <span className="text-brand-blue">%</span>
          </p>
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-2 bottom-24 z-20 rounded-xl border border-emerald-500/30 bg-[#0d1224] px-4 py-3 shadow-xl sm:-right-6"
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.75 }}
      >
        <p className="font-poppins text-[9px] font-bold uppercase tracking-wider text-emerald-400">
          Response
        </p>
        <p className="font-poppins text-xl font-extrabold text-white">
          0.2<span className="text-brand-blue">s</span>
        </p>
      </motion.div>

      <motion.div
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1e] shadow-[0_24px_64px_rgba(0,0,0,0.4)]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-brand-blue/60 to-transparent"
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          aria-hidden
        />
        <div className="flex items-center gap-2 border-b border-white/10 bg-[#111827] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-poppins text-[10px] text-gray-500">yourstore.com/pricing</span>
        </div>

        <div className="relative h-28 bg-gradient-to-br from-gray-900 to-[#0d1224] p-4">
          <div className="h-full rounded-lg border border-white/5 bg-white/[0.02] p-3">
            <div className="h-2 w-24 rounded bg-white/10" />
            <div className="mt-2 h-2 w-40 rounded bg-white/5" />
            <div className="mt-2 h-2 w-32 rounded bg-white/5" />
          </div>
        </div>

        <div className="border-t border-white/10 bg-[#0d1224] p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue">
                <i className="fas fa-robot text-xs text-white" aria-hidden />
              </div>
              <div>
                <p className="font-poppins text-xs font-bold text-white">Unit 07 · AI Closer</p>
                <p className="flex items-center gap-1 font-poppins text-[9px] text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Closing mode active
                </p>
              </div>
            </div>
            <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 font-poppins text-[8px] font-bold uppercase text-amber-400">
              Heat: High
            </span>
          </div>

          <div className="max-h-[220px] space-y-2.5 overflow-y-auto">
            <AnimatePresence mode="popLayout">
              {MESSAGES.slice(0, visibleCount).map((msg, i) => (
                <motion.div
                  key={`${i}-${msg.text.slice(0, 16)}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.from === "visitor" ? "justify-end" : "justify-start"}`}
                >
                  {msg.from === "system" ? (
                    <span className="mx-auto rounded-full bg-emerald-500/15 px-3 py-1 font-poppins text-[9px] font-semibold text-emerald-400">
                      {msg.text}
                    </span>
                  ) : (
                    <div
                      className={`max-w-[85%] rounded-2xl px-3 py-2 font-poppins text-[11px] leading-relaxed ${
                        msg.from === "visitor"
                          ? "rounded-tr-sm bg-white/10 text-gray-200"
                          : "rounded-tl-sm border border-brand-blue/20 bg-brand-blue/15 text-white"
                      }`}
                    >
                      {msg.text}
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            {typing && visibleCount < MESSAGES.length && (
              <div className="flex justify-start">
                <div className="flex gap-1 rounded-2xl rounded-tl-sm border border-brand-blue/20 bg-brand-blue/10 px-4 py-2.5">
                  {[0, 1, 2].map((d) => (
                    <motion.span
                      key={d}
                      className="h-1.5 w-1.5 rounded-full bg-brand-blue"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: d * 0.12 }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
            <input
              readOnly
              placeholder="Visitor typing..."
              className="flex-1 bg-transparent font-poppins text-[10px] text-gray-500 outline-none"
            />
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-blue">
              <i className="fas fa-paper-plane text-[9px] text-white" aria-hidden />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full border border-brand-blue/30 bg-[#0d1224] px-5 py-2 shadow-lg"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <CountUp value={1420} className="font-poppins text-sm font-extrabold text-brand-blue" />
        <span className="ml-1.5 font-poppins text-[9px] font-semibold uppercase text-gray-400">
          closed today
        </span>
      </motion.div>
    </div>
  );
}
