"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { VOICE_CLONE_SECTIONS } from "@/lib/voice-clone-tokens";
import { VoiceCloneSectionReveal } from "../shared/VoiceCloneSectionReveal";

const QUEUE = [
  { id: "JOB-01", task: "VSL EN-US · Urgency", status: "Rendering", pct: 78 },
  { id: "JOB-02", task: "Clone calibration", status: "Complete", pct: 100 },
  { id: "JOB-03", task: "DE ad variant · Authority", status: "Queued", pct: 12 },
] as const;

export default function VoiceCloneCtaSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-violet-600 py-24 lg:py-32"
      data-header-surface="dark"
      data-figma-node={VOICE_CLONE_SECTIONS.cta}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.2) 0%, transparent 50%)",
        }}
        aria-hidden
      />

      <SiteContainer className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <VoiceCloneSectionReveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-white">
              Limited sonic slots
            </span>

            <h2
              className="font-poppins text-[40px] font-light uppercase leading-[1.05] tracking-[-0.03em] text-white sm:text-[56px]"
              data-figma-node="6:779"
            >
              MULTIPLY YOUR
              <br />
              <span className="font-extrabold">RESONANCE.</span>
            </h2>

            <p
              className="mt-5 max-w-[440px] font-poppins text-sm leading-relaxed text-white/85 sm:text-base"
              data-figma-node="6:780"
            >
              Limited deployment slots for Unit 05 high-velocity cloning. Start your sonic
              transformation today.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/voice-clone"
                className="inline-flex h-14 items-center justify-center rounded-xl bg-[#0C0A14] px-8 font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-white transition-all hover:bg-black"
                data-figma-node="6:781"
              >
                Deploy Unit 05
              </Link>
              <Link
                href="/"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-xl border border-white/30 bg-white/10 px-8 font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-white transition-all hover:bg-white/15"
                data-figma-node="6:783"
              >
                <span className="relative z-10">Request Voice Sample</span>
                <motion.span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                  initial={{ x: "-120%" }}
                  whileHover={{ x: "120%" }}
                  transition={{ duration: 0.6 }}
                  aria-hidden
                />
              </Link>
            </div>
          </VoiceCloneSectionReveal>

          <VoiceCloneSectionReveal delay={0.15}>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <p className="font-poppins text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">
                Synthesis queue
              </p>
              <p className="mt-1 font-poppins text-xl font-extrabold text-white">Live renders</p>

              <div className="mt-5 space-y-3">
                {QUEUE.map((job, i) => (
                  <motion.div
                    key={job.id}
                    className="rounded-xl border border-white/15 bg-white/[0.08] px-4 py-3"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-poppins text-[11px] font-bold text-white">{job.id}</p>
                      <p className="font-poppins text-[10px] font-extrabold text-white">{job.pct}%</p>
                    </div>
                    <p className="mt-0.5 font-poppins text-[9px] text-white/70">{job.task}</p>
                    <p className="font-poppins text-[8px] uppercase tracking-wider text-white/50">{job.status}</p>
                    <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-white"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${job.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </VoiceCloneSectionReveal>
        </div>
      </SiteContainer>
    </section>
  );
}
