"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
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
      className="relative w-full overflow-hidden bg-brand-blue py-24 lg:py-32"
      data-header-surface="dark"
      data-figma-node={CLONE_AGENT_SECTIONS.cta}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.15) 0%, transparent 50%)",
        }}
        aria-hidden
      />

      <SiteContainer className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <CloneAgentSectionReveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-white">
              Limited calibration slots
            </span>

            <h2
              className="font-poppins text-[40px] font-light uppercase leading-[1.05] tracking-[-0.03em] text-white sm:text-[56px]"
              data-figma-node="6:462"
            >
              MULTIPLY
              <br />
              <span className="font-extrabold">YOURSELF.</span>
            </h2>

            <p
              className="mt-5 max-w-[440px] font-poppins text-sm leading-relaxed text-white/80 sm:text-base"
              data-figma-node="6:463"
            >
              Limited slots for identity calibration. Secure your Clone Unit 04 node and deploy your
              digital twin in days.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/clone-agent"
                className="inline-flex h-14 items-center justify-center rounded-xl bg-[#080C1A] px-8 font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-white transition-all hover:bg-black"
                data-figma-node="6:464"
              >
                Begin Sync Process
              </Link>
              <Link
                href="/"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-xl border border-white/25 bg-white/10 px-8 font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-white transition-all hover:bg-white/15"
                data-figma-node="6:466"
              >
                <span className="relative z-10">Request Case Study</span>
                <motion.span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                  initial={{ x: "-120%" }}
                  whileHover={{ x: "120%" }}
                  transition={{ duration: 0.6 }}
                  aria-hidden
                />
              </Link>
            </div>
          </CloneAgentSectionReveal>

          <CloneAgentSectionReveal delay={0.15}>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <p className="font-poppins text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">
                Deployment queue
              </p>
              <p className="mt-1 font-poppins text-xl font-extrabold text-white">Live calibrations</p>

              <div className="mt-5 space-y-3">
                {DEPLOY_QUEUE.map((item, i) => (
                  <motion.div
                    key={item.node}
                    className="rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-poppins text-[11px] font-bold text-white">{item.node}</p>
                      <p className="font-poppins text-[10px] font-extrabold text-white">{item.pct}%</p>
                    </div>
                    <p className="mt-0.5 font-poppins text-[9px] text-white/60">{item.status}</p>
                    <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-white"
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
          </CloneAgentSectionReveal>
        </div>
      </SiteContainer>
    </section>
  );
}
