"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EMAIL_SECTIONS } from "@/lib/email-tokens";
import { EMAIL_PARCHMENT_DEEP, EMAIL_PLUM } from "@/lib/email-theme";
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
      className="relative w-full overflow-hidden py-20 lg:py-28"
      style={{ backgroundColor: EMAIL_PARCHMENT_DEEP }}
      data-header-surface="light"
      data-figma-node={EMAIL_SECTIONS.triage}
    >
      <SiteContainer className="relative">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <EmailSectionReveal>
              <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.25em] text-violet-700">
                Zero-delay pipeline
              </p>
              <h2 className="mt-2 font-poppins text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-tight tracking-[-0.02em] text-stone-900">
                Zero-delay{" "}
                <span className="font-extrabold italic" style={{ color: EMAIL_PLUM }}>
                  triage.
                </span>
              </h2>
            </EmailSectionReveal>

            <div ref={lineRef} className="relative mt-10">
              <motion.div
                className="absolute bottom-0 left-[18px] top-0 w-px bg-stone-300"
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
                    <span
                      className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center border-2 bg-white font-poppins text-[10px] font-bold"
                      style={{ borderColor: EMAIL_PLUM, color: EMAIL_PLUM }}
                    >
                      {step.number}
                    </span>
                    <h3 className="font-poppins text-lg font-bold text-stone-800">{step.title}</h3>
                    <p className="mt-2 font-poppins text-sm leading-relaxed text-stone-600">{step.body}</p>
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
