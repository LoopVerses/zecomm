"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { CountUp } from "@/components/shared/CountUp";
import { MeshGradient } from "@/components/shared/MeshGradient";
import { CHAT_AGENT_SECTIONS } from "@/lib/chat-agent-tokens";
import { ChatAgentAmbientBackground } from "../shared/ChatAgentAmbientBackground";
import { SalesCommandDeck } from "../shared/SalesCommandDeck";

const HERO_STATS = [
  { label: "Daily closes", value: 1420, suffix: "", decimals: 0 },
  { label: "Intent accuracy", value: 94, suffix: "%", decimals: 0 },
  { label: "Avg response", value: 0.2, suffix: "s", decimals: 1 },
] as const;

export default function ChatAgentHeroSection() {
  return (
    <section
      className="zc-grain relative w-full overflow-x-clip overflow-hidden bg-surface-base pt-[max(5.5rem,calc(4rem+env(safe-area-inset-top,0px)))] pb-12 sm:pt-28 sm:pb-16"
      data-header-surface="dark"
      data-figma-node={CHAT_AGENT_SECTIONS.hero}
    >
      <MeshGradient />
      <ChatAgentAmbientBackground />

      <SiteContainer className="relative z-10">
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-poppins text-[10px] font-semibold uppercase tracking-[0.15em] text-ink-secondary backdrop-blur-sm transition-all hover:border-brand-blue/40 hover:text-ink-primary"
            data-figma-node="8:995"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">←</span>
            Back to Hub
          </Link>
        </motion.div>

        {/* Copy on top */}
        <div className="mx-auto mb-12 max-w-[720px] text-center sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-1.5"
            data-figma-node="6:311"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-blue opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-blue" />
            </span>
            <span
              className="font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-brand-blue"
              data-figma-node="6:313"
            >
              Chat Sales Agent
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
            className="font-display text-[clamp(2.5rem,7vw,5rem)] font-bold uppercase leading-[0.95] tracking-tight text-ink-primary"
            data-figma-node="6:314"
          >
            DON&apos;T CHAT.
            <br />
            <span className="bg-gradient-to-r from-brand-blue via-blue-400 to-cyan-400 bg-clip-text font-extrabold text-transparent">
              CLOSE DEALS.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36 }}
            className="mx-auto mt-5 max-w-[520px] font-poppins text-sm leading-relaxed text-ink-secondary sm:text-[15px]"
            data-figma-node="6:315"
          >
            Reads buyer intent, handles objections, and guides high-ticket visitors to checkout.
            Like a senior sales rep on every page, 24/7.
          </motion.p>

          {/* Horizontal stat pills — not YouTube side box */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 backdrop-blur-sm"
              >
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  className="font-poppins text-lg font-extrabold text-brand-blue"
                />
                <span className="font-poppins text-[9px] font-bold uppercase tracking-wider text-ink-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52 }}
            className="mt-8"
          >
            <Link
              href="#logic-feed"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-brand-blue px-10 py-4 font-poppins text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_8px_32px_rgba(28,51,191,0.35)] transition-all hover:shadow-[0_12px_40px_rgba(28,51,191,0.45)]"
              data-figma-node="6:316"
            >
              <span className="relative z-10">See How It Closes</span>
              <motion.span
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-120%" }}
                whileHover={{ x: "120%" }}
                transition={{ duration: 0.55 }}
                aria-hidden
              />
            </Link>
          </motion.div>
        </div>

        {/* Agent box below */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <SalesCommandDeck />
        </motion.div>
      </SiteContainer>
    </section>
  );
}
