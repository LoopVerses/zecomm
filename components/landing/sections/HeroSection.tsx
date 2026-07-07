"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard } from "@/components/shared/EliteCard";
import { LiveAgentPanel } from "@/components/shared/LiveAgentPanel";
import { MeshGradient } from "@/components/shared/MeshGradient";
import { EASE_OUT } from "@/lib/design-system";
import { LANDING_BG } from "@/lib/landing-theme";
import { HERO_NAV_CHIPS } from "@/lib/nav-links";

export const HERO_FIGMA_NODE = "6:83";

const HEADLINE_WORDS = ["Smart", "automation", "for", "every", "part", "of", "your", "business"] as const;

const GRADIENT_WORDS = new Set(["automation", "every"]);

function EliteHeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: EASE_OUT }}
      className="relative max-w-full"
    >
      {/* Ambient orbs — no lines */}
      <motion.span
        className="pointer-events-none absolute -left-4 -top-6 h-16 w-16 rounded-full bg-accent-violet/25 blur-2xl"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.span
        className="pointer-events-none absolute -bottom-4 right-2 h-14 w-14 rounded-full bg-accent-cyan/20 blur-2xl"
        animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        aria-hidden
      />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface-card/80 p-4 backdrop-blur-xl sm:p-5">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-violet/10 via-transparent to-accent-cyan/8"
          aria-hidden
        />

        {/* Top status row */}
        <div className="relative flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-2 rounded-lg border border-accent-lime/25 bg-accent-lime/10 px-2.5 py-1 font-poppins text-[10px] font-semibold text-accent-lime">
            <span className="zc-live-dot h-1.5 w-1.5 rounded-full bg-accent-lime" />
            Live automations
          </span>
          <span className="font-poppins text-[10px] font-medium text-ink-muted">8+ tools active</span>
        </div>

        {/* Brand line */}
        <p className="relative mt-3 font-display text-[13px] font-bold leading-snug text-ink-primary sm:text-sm">
          <span className="bg-gradient-to-r from-accent-violet to-accent-cyan bg-clip-text text-transparent">
            Zeecom Automations
          </span>
          <span className="text-ink-primary"> — </span>
          <span className="font-poppins text-[11px] font-medium leading-relaxed text-ink-secondary sm:text-xs">
            Automating E-Commerce, AI Systems, and YouTube Growth Under One Roof
          </span>
        </p>

        {/* Nav chips */}
        <div className="relative mt-3 flex flex-wrap gap-1.5 sm:gap-2">
          {HERO_NAV_CHIPS.map((chip, i) => (
            <motion.div
              key={chip.label}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 + i * 0.05, duration: 0.35 }}
            >
              <Link
                href={chip.href}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/8 bg-surface-base/60 px-2 py-1.5 font-poppins text-[9px] font-medium text-ink-secondary transition-all hover:border-accent-violet/30 hover:bg-accent-violet/10 hover:text-ink-primary sm:px-2.5 sm:text-[10px]"
              >
                <i className={`${chip.icon} text-[8px] sm:text-[9px] ${chip.accent}`} aria-hidden />
                {chip.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mini metrics strip */}
        <div className="relative mt-3 grid grid-cols-3 gap-2">
          {[
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "Running" },
            { value: "8+", label: "Services" },
          ].map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.06 }}
              className="rounded-lg bg-white/[0.04] px-2 py-2 text-center"
            >
              <p className="font-display text-xs font-bold text-ink-primary sm:text-sm">{m.value}</p>
              <p className="font-poppins text-[9px] text-ink-muted">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const QUICK_STATS = [
  { value: "8+", label: "Automation tools", glow: "violet" as const },
  { value: "99.9%", label: "Uptime", glow: "cyan" as const },
  { value: "24/7", label: "Always on", glow: "lime" as const },
] as const;

export default function HeroSection() {
  return (
    <section
      className="zc-grain relative min-h-0 lg:min-h-[100dvh] w-full overflow-x-clip overflow-hidden pt-[max(5.5rem,calc(4rem+env(safe-area-inset-top,0px)))] pb-20 sm:pt-28 sm:pb-24"
      style={{ backgroundColor: LANDING_BG }}
      data-header-surface="dark"
      data-figma-node={HERO_FIGMA_NODE}
    >
      <MeshGradient />

      {/* Floating accent orbs */}
      <motion.div
        className="pointer-events-none absolute left-[8%] top-[18%] h-2 w-2 rounded-full bg-accent-violet/60 blur-[1px]"
        animate={{ y: [0, -12, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute right-[12%] top-[32%] h-1.5 w-1.5 rounded-full bg-accent-cyan/70"
        animate={{ y: [0, 10, 0], opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute bottom-[22%] left-[20%] h-1 w-1 rounded-full bg-accent-lime/80"
        animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        aria-hidden
      />

      <SiteContainer className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <EliteHeroBadge />

            <h1 className="mt-5 font-display text-[clamp(1.85rem,4.8vw,3.75rem)] font-bold leading-[1.1] tracking-[-0.03em] text-ink-primary sm:mt-6">
              <span className="flex flex-wrap gap-x-[0.28em] gap-y-1">
                {HEADLINE_WORDS.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.045, ease: EASE_OUT }}
                    className={`inline-block ${
                      GRADIENT_WORDS.has(word)
                        ? "bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-violet bg-clip-text text-transparent"
                        : ""
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: EASE_OUT }}
              className="mt-6 max-w-lg font-poppins text-base leading-relaxed text-ink-secondary sm:text-lg"
            >
              Launch, manage, and scale your online business without handling daily operations yourself.
              E-commerce, AI systems, and YouTube automation — we build the backend so you grow on
              autopilot.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: EASE_OUT }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                href="#services"
                className="zc-focus-ring group relative inline-flex h-11 w-full items-center justify-center overflow-hidden rounded-xl bg-accent-violet px-8 font-poppins text-sm font-semibold text-white shadow-glow transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(108,76,241,0.4)] sm:h-12 sm:w-auto"
              >
                <span className="relative z-10">Explore all services</span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent-violet to-accent-cyan opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
              <Link
                href="/ecom"
                className="zc-focus-ring inline-flex h-11 w-full items-center justify-center rounded-xl border border-white/12 bg-white/5 px-8 font-poppins text-sm font-semibold text-ink-primary backdrop-blur-sm transition-all duration-200 hover:border-accent-violet/40 hover:bg-white/8 sm:h-12 sm:w-auto"
              >
                Start with E-Commerce
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-10 grid grid-cols-3 gap-3 sm:gap-4"
            >
              {QUICK_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.06 }}
                >
                  <EliteCard glow={stat.glow} className="rounded-xl">
                    <div className="px-3 py-3 text-center sm:px-4">
                      <p className="font-display text-xl font-bold text-ink-primary sm:text-2xl">{stat.value}</p>
                      <p className="mt-0.5 font-poppins text-[10px] text-ink-muted sm:text-xs">{stat.label}</p>
                    </div>
                  </EliteCard>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE_OUT }}
            style={{ perspective: 1200 }}
          >
            <LiveAgentPanel />
          </motion.div>
        </div>
      </SiteContainer>
    </section>
  );
}
