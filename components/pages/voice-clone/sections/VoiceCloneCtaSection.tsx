"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { MeshGradient } from "@/components/shared/MeshGradient";
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
      className="zc-grain relative w-full overflow-x-clip overflow-hidden bg-surface-base py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={VOICE_CLONE_SECTIONS.cta}
    >
      <MeshGradient className="opacity-60" />
      <SectionAmbience variant="mixed" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_30%_40%,rgba(108,76,241,0.18),transparent)]"
        aria-hidden
      />

      <SiteContainer className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <VoiceCloneSectionReveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-violet/30 bg-accent-violet/15 px-4 py-1.5 font-poppins text-[11px] font-semibold text-accent-violet">
              Limited sonic slots
            </span>

            <h2
              className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-ink-primary"
              data-figma-node="6:779"
            >
              MULTIPLY YOUR
              <br />
              <span className="bg-gradient-to-r from-accent-violet to-violet-400 bg-clip-text text-transparent">
                RESONANCE.
              </span>
            </h2>

            <p
              className="mt-5 max-w-[440px] font-poppins text-sm leading-relaxed text-ink-secondary sm:text-base"
              data-figma-node="6:780"
            >
              Limited deployment slots for Unit 05 high-velocity cloning. Start your sonic
              transformation today.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="zc-focus-ring inline-flex h-11 w-full items-center sm:h-12 sm:w-auto justify-center rounded-xl bg-accent-violet px-8 font-poppins text-sm font-semibold text-white shadow-glow transition-all hover:scale-[1.02]"
                data-figma-node="6:781"
              >
                Deploy Unit 05
              </Link>
              <Link
                href="/"
                className="group relative inline-flex h-11 w-full items-center sm:h-12 sm:w-auto justify-center overflow-hidden rounded-xl border border-white/15 bg-white/5 px-8 font-poppins text-sm font-semibold text-ink-primary transition-all hover:border-accent-violet/30 hover:bg-white/10"
                data-figma-node="6:783"
              >
                <span className="relative z-10">Request Voice Sample</span>
                <motion.span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-accent-violet/15 to-transparent"
                  initial={{ x: "-120%" }}
                  whileHover={{ x: "120%" }}
                  transition={{ duration: 0.6 }}
                  aria-hidden
                />
              </Link>
            </div>
          </VoiceCloneSectionReveal>

          <VoiceCloneSectionReveal delay={0.15}>
            <EliteCard glow="violet" className="backdrop-blur-sm bg-surface-card/80">
              <div className="p-6">
                <p className="font-poppins text-[9px] font-bold uppercase tracking-[0.2em] text-accent-violet">
                  Synthesis queue
                </p>
                <p className="mt-1 font-poppins text-xl font-extrabold text-ink-primary">Live renders</p>

                <div className="mt-5 space-y-3">
                  {QUEUE.map((job, i) => (
                    <motion.div
                      key={job.id}
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-poppins text-[11px] font-bold text-ink-primary">{job.id}</p>
                        <p className="font-poppins text-[10px] font-extrabold text-accent-violet">{job.pct}%</p>
                      </div>
                      <p className="mt-0.5 font-poppins text-[9px] text-ink-muted">{job.task}</p>
                      <p className="font-poppins text-[8px] uppercase tracking-wider text-ink-muted">{job.status}</p>
                      <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-accent-violet to-violet-400"
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
            </EliteCard>
          </VoiceCloneSectionReveal>
        </div>
      </SiteContainer>
    </section>
  );
}
