"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";

const LIVE_EVENTS = [
  { type: "cart", text: "Cart recovered — $847", time: "2s ago", color: "text-accent-lime" },
  { type: "email", text: "847 emails triaged", time: "5s ago", color: "text-accent-cyan" },
  { type: "whatsapp", text: "WhatsApp reply sent", time: "8s ago", color: "text-accent-lime" },
  { type: "youtube", text: "3 videos scheduled", time: "12s ago", color: "text-accent-violet" },
  { type: "chat", text: "Sale closed via chat agent", time: "18s ago", color: "text-accent-lime" },
] as const;

const METRICS = [
  { label: "Active agents", value: 8, suffix: "" },
  { label: "Tasks today", value: 1247, suffix: "" },
  { label: "Uptime", value: 99.9, suffix: "%", decimals: 1 },
] as const;

function AnimatedMetric({
  target,
  suffix = "",
  decimals = 0,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
}) {
  const [display, setDisplay] = useState("0");
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 2000, bounce: 0 });

  useEffect(() => {
    motionVal.set(target);
    return spring.on("change", (v) => {
      setDisplay(decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString());
    });
  }, [target, motionVal, spring, decimals]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export function LiveAgentPanel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });
  const [eventIndex, setEventIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setEventIndex((i) => (i + 1) % LIVE_EVENTS.length), 2800);
    return () => clearInterval(id);
  }, []);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const currentEvent = LIVE_EVENTS[eventIndex];

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-lg lg:max-w-none"
      style={{ perspective: 1200 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="zc-float-3d relative"
      >
        <div className="zc-pulse-glow relative overflow-hidden rounded-2xl border border-white/10 bg-surface-card/90 p-1 shadow-card backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/10 via-transparent to-accent-cyan/5" aria-hidden />

          <div className="relative rounded-xl bg-surface-raised/80 p-5 sm:p-6">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/8 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-violet/20">
                  <span className="font-display text-sm font-bold text-accent-violet">Z</span>
                </div>
                <div>
                  <p className="font-poppins text-sm font-semibold text-ink-primary">Agent Command</p>
                  <p className="font-poppins text-[10px] text-ink-muted">Live automation hub</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 rounded-full border border-accent-lime/30 bg-accent-lime/10 px-2.5 py-1 font-poppins text-[10px] font-semibold text-accent-lime">
                <span className="zc-live-dot h-1.5 w-1.5 rounded-full bg-accent-lime" />
                Live
              </span>
            </div>

            {/* Metrics row */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {METRICS.map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg border border-white/6 bg-surface-base/60 px-3 py-2.5 text-center"
                >
                  <p className="font-display text-base font-bold text-ink-primary sm:text-lg">
                    <AnimatedMetric
                      target={m.value}
                      suffix={m.suffix}
                      decimals={"decimals" in m ? m.decimals : 0}
                    />
                  </p>
                  <p className="font-poppins text-[9px] uppercase tracking-wider text-ink-muted">{m.label}</p>
                </div>
              ))}
            </div>

            {/* Live event feed */}
            <div className="mt-4 overflow-hidden rounded-xl border border-white/6 bg-surface-base/50 p-4">
              <p className="font-poppins text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
                Real-time activity
              </p>
              <motion.div
                key={currentEvent.text}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="mt-2 flex min-w-0 items-center justify-between gap-3"
              >
                <p className={`min-w-0 font-poppins text-xs font-medium ${currentEvent.color}`}>{currentEvent.text}</p>
                <span className="shrink-0 font-poppins text-[10px] text-ink-muted">{currentEvent.time}</span>
              </motion.div>

              {/* Mini chart bars */}
              <div className="mt-4 flex h-12 items-end gap-1">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-accent-violet/40 to-accent-cyan/60"
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.5, delay: i * 0.04 }}
                  />
                ))}
              </div>
            </div>

            {/* Service pills */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                { name: "E-Com", href: "/ecom", glow: "hover:border-blue-400/40" },
                { name: "YouTube", href: "/youtube", glow: "hover:border-red-400/40" },
                { name: "All", href: "/services", glow: "hover:border-accent-violet/40" },
              ].map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  className={`rounded-lg border border-white/8 bg-surface-base/40 px-2 py-2 text-center font-poppins text-[10px] font-semibold text-ink-secondary transition-all hover:bg-white/5 ${s.glow}`}
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Floating depth cards */}
        <motion.div
          className="absolute -right-4 top-8 z-20 hidden rounded-xl border border-white/10 bg-surface-card/90 px-3 py-2 shadow-glow sm:block"
          style={{ transform: "translateZ(40px)" }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="font-poppins text-[10px] font-semibold text-accent-lime">+$42,400</p>
          <p className="font-poppins text-[8px] text-ink-muted">recovered today</p>
        </motion.div>

        <motion.div
          className="absolute -left-3 bottom-16 z-20 hidden rounded-xl border border-white/10 bg-surface-card/90 px-3 py-2 shadow-glow-cyan sm:block"
          style={{ transform: "translateZ(30px)" }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <p className="font-poppins text-[10px] font-semibold text-accent-cyan">42K+ emails</p>
          <p className="font-poppins text-[8px] text-ink-muted">processed daily</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
