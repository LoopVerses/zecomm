"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { MeshGradient } from "@/components/shared/MeshGradient";
import { CLONE_AGENT_SECTIONS } from "@/lib/clone-agent-tokens";
import { CloneAgentSectionReveal } from "../shared/CloneAgentSectionReveal";

const DEPLOY_QUEUE = [
  { node: "Client_A", status: "Calibrating tone", pct: 72 },
  { node: "Client_B", status: "Logic tree mapped", pct: 91 },
  { node: "Client_C", status: "Ready to deploy", pct: 100 },
] as const;

export default function CloneAgentCtaSection() {
  return (
    <section
      className="zc-grain relative w-full overflow-x-clip overflow-hidden bg-surface-base py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={CLONE_AGENT_SECTIONS.cta}
    >
      <MeshGradient className="opacity-60" />
      <SectionAmbience variant="mixed" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_100%_50%,rgba(108,76,241,0.18),transparent)]"
        aria-hidden
      />

      <SiteContainer className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <CloneAgentSectionReveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-violet/30 bg-accent-violet/15 px-4 py-1.5 font-poppins text-[11px] font-semibold text-accent-violet">
              Limited calibration slots
            </span>

            <h2
              className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-ink-primary"
              data-figma-node="6:462"
            >
              MULTIPLY
              <br />
              <span className="bg-gradient-to-r from-accent-violet to-violet-400 bg-clip-text text-transparent">
                YOURSELF.
              </span>
            </h2>

            <p
              className="mt-5 max-w-[440px] font-poppins text-sm leading-relaxed text-ink-secondary sm:text-base"
              data-figma-node="6:463"
            >
              Limited slots for identity calibration. Secure your Clone Unit 04 node and deploy your
              digital twin in days.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/services#contact"
                className="zc-focus-ring inline-flex h-11 w-full items-center sm:h-12 sm:w-auto justify-center rounded-xl bg-accent-violet px-8 font-poppins text-sm font-semibold text-white shadow-glow transition-all hover:scale-[1.02]"
                data-figma-node="6:464"
              >
                Begin Sync Process
              </Link>
              <Link
                href="/"
                className="group relative inline-flex h-11 w-full items-center sm:h-12 sm:w-auto justify-center overflow-hidden rounded-xl border border-white/15 bg-white/5 px-8 font-poppins text-sm font-semibold text-ink-primary transition-all hover:border-accent-violet/30 hover:bg-white/10"
                data-figma-node="6:466"
              >
                <span className="relative z-10">Request Case Study</span>
                <motion.span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-accent-violet/15 to-transparent"
                  initial={{ x: "-120%" }}
                  whileHover={{ x: "120%" }}
                  transition={{ duration: 0.6 }}
                  aria-hidden
                />
              </Link>
            </div>
          </CloneAgentSectionReveal>

          <CloneAgentSectionReveal delay={0.15}>
            <EliteCard glow="violet" className="backdrop-blur-sm bg-surface-card/80">
              <div className="p-6">
                <p className="font-poppins text-[9px] font-bold uppercase tracking-[0.2em] text-accent-violet">
                  Deployment queue
                </p>
                <p className="mt-1 font-poppins text-xl font-extrabold text-ink-primary">Live calibrations</p>

                <div className="mt-5 space-y-3">
                  {DEPLOY_QUEUE.map((item, i) => (
                    <motion.div
                      key={item.node}
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-poppins text-[11px] font-bold text-ink-primary">{item.node}</p>
                        <p className="font-poppins text-[10px] font-extrabold text-accent-violet">{item.pct}%</p>
                      </div>
                      <p className="mt-0.5 font-poppins text-[9px] text-ink-muted">{item.status}</p>
                      <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-accent-violet to-violet-400"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </EliteCard>
          </CloneAgentSectionReveal>
        </div>
      </SiteContainer>
    </section>
  );
}
