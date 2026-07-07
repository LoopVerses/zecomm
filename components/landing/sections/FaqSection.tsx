"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionAmbience } from "@/components/shared/EliteCard";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { LANDING_BG } from "@/lib/landing-theme";

export const FAQ_NODE = "6:240";

const FAQS = [
  {
    q: "Do I need to use all services?",
    a: "No. Pick only what your business needs. Many customers start with one tool, like WhatsApp or Email, and add more later.",
  },
  {
    q: "Is it hard to set up?",
    a: "Each service has its own setup page with clear steps. Most teams are live within a day. No coding required.",
  },
  {
    q: "Can the AI match my brand voice?",
    a: "Yes. Chat, email, and voice tools learn your tone from examples and guidelines you provide during setup.",
  },
  {
    q: "What if I need help?",
    a: "Reach out through our contact page. Every service includes detailed info and examples to get you started.",
  },
  {
    q: "Is my data secure?",
    a: "We process data only to run your automations. Your inbox, chats, and store data stay under your control.",
  },
] as const;

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative w-full overflow-x-clip py-14 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: LANDING_BG }}
      data-header-surface="dark"
      data-figma-node={FAQ_NODE}
    >
      <SectionAmbience variant="mixed" />

      <SiteContainer className="relative z-10">
        <div className="mx-auto max-w-2xl">
          <ScrollReveal className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 font-poppins text-[11px] font-semibold text-ink-secondary">
              FAQ
            </span>
            <h2 className="mt-4 font-display text-[clamp(1.65rem,4.5vw,2.75rem)] font-bold text-ink-primary">
              Common questions
            </h2>
          </ScrollReveal>

          <div className="mt-10 space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -2 }}
                  className={`overflow-hidden rounded-xl border backdrop-blur-sm transition-all duration-300 ${
                    isOpen
                      ? "border-accent-violet/35 bg-surface-card shadow-glow"
                      : "border-white/8 bg-surface-card/50 hover:border-accent-violet/20 hover:bg-surface-card/80"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="zc-focus-ring flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-poppins text-sm font-semibold text-ink-primary">{faq.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0, backgroundColor: isOpen ? "rgba(108,76,241,0.15)" : "rgba(255,255,255,0.05)" }}
                      transition={{ duration: 0.25 }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                    >
                      <i className={`fas fa-chevron-down text-[10px] ${isOpen ? "text-accent-violet" : "text-ink-muted"}`} aria-hidden />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="px-5 pb-4 font-poppins text-sm leading-relaxed text-ink-secondary">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
