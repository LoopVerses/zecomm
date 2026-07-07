"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EMAIL_SECTIONS } from "@/lib/email-tokens";
import { IntentHighlighterPanel } from "../shared/IntentHighlighterPanel";
import {
  EmailSectionReveal,
  staggerContainer,
  staggerItem,
} from "../shared/EmailSectionReveal";

const STEPS = [
  {
    number: "01",
    title: "Intent extraction",
    body: 'It reads sentiment, not just words. "High-Ticket Leads," "Refund Crises," and "Vendor Collaboration" are identified with 99.7% accuracy.',
  },
  {
    number: "02",
    title: "Priority ranking",
    body: "High-value sales rise to the top of your stack. Routine inquiries enter automated drafting sequences without touching your focus time.",
  },
  {
    number: "03",
    title: "Smart drafting",
    body: "Using your brand tone guidelines, it drafts a contextually perfect reply and leaves it in your outbox for one-click confirmation.",
  },
] as const;

export default function EmailTriageSection() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsInView = useInView(stepsRef, { once: true, margin: "-60px" });
  const lineInView = useInView(lineRef, { once: true, margin: "-60px" });

  return (
    <section
      id="triage"
      className="relative w-full overflow-x-clip overflow-hidden border-t border-white/10 bg-surface-base py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={EMAIL_SECTIONS.triage}
    >
      <SiteContainer className="relative">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <EmailSectionReveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-orange-400">
                Zero-delay pipeline
              </span>
              <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-tight tracking-tight text-ink-primary">
                Zero-delay{" "}
                <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                  triage.
                </span>
              </h2>
            </EmailSectionReveal>

            <div ref={lineRef} className="relative mt-10">
              <motion.div
                className="absolute bottom-0 left-[18px] top-0 w-px bg-white/10"
                initial={{ scaleY: 0 }}
                animate={lineInView ? { scaleY: 1 } : { scaleY: 0 }}
                style={{ transformOrigin: "top" }}
                transition={{ duration: 0.8 }}
                aria-hidden
              />

              <motion.div
                ref={stepsRef}
                className="flex flex-col gap-8"
                variants={staggerContainer}
                initial="hidden"
                animate={stepsInView ? "visible" : "hidden"}
              >
                {STEPS.map((step) => (
                  <motion.article
                    key={step.number}
                    variants={staggerItem}
                    className="relative pl-12"
                  >
                    <span className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/10 font-poppins text-[10px] font-bold text-orange-400">
                      {step.number}
                    </span>
                    <h3 className="font-poppins text-lg font-bold text-ink-primary">{step.title}</h3>
                    <p className="mt-2 font-poppins text-sm leading-relaxed text-ink-secondary">{step.body}</p>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </div>

          <EmailSectionReveal delay={0.15}>
            <IntentHighlighterPanel />
          </EmailSectionReveal>
        </div>
      </SiteContainer>
    </section>
  );
}
