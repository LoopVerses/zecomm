"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { WHATSAPP_SECTIONS } from "@/lib/whatsapp-tokens";
import { WhatsappPhoneMockup } from "../shared/WhatsappPhoneMockup";
import { WhatsappSectionReveal } from "../shared/WhatsappSectionReveal";

const GLOWS = ["violet", "cyan", "lime", "red"] as const;

const WA_CAPABILITIES = [
  { icon: "fab fa-whatsapp", label: "Business API", desc: "Official Meta Cloud API" },
  { icon: "fas fa-file-alt", label: "Templates", desc: "Pre-approved messages" },
  { icon: "fas fa-store", label: "Catalog", desc: "Product cards in chat" },
  { icon: "fas fa-bullhorn", label: "Broadcasts", desc: "Segmented campaigns" },
  { icon: "fas fa-reply-all", label: "Quick Replies", desc: "One-tap responses" },
  { icon: "fas fa-robot", label: "24/7 Bot", desc: "Always-on recovery" },
  { icon: "fas fa-check-double", label: "Read receipts", desc: "Delivered & seen" },
  { icon: "fas fa-plug", label: "CRM Sync", desc: "Shopify + HubSpot" },
] as const;

const FEATURES = [
  { node: "6:828", iconNode: "6:829", textNode: "6:830", text: "Native Shopify / CRM Integration" },
  { node: "6:831", iconNode: "6:832", textNode: "6:833", text: "Smart Decision-Tree Logic" },
  { node: "6:834", iconNode: "6:835", textNode: "6:836", text: "Auto-Upselling via Chat" },
] as const;

const FLOW_STEPS = [
  { step: "01", label: "Cart abandoned", detail: "High-intent visitor leaves checkout" },
  { step: "02", label: "WA-Z triggers", detail: "Personalized WhatsApp within 60s" },
  { step: "03", label: "Objection handled", detail: "Shipping, sizing, payment resolved" },
  { step: "04", label: "Sale recovered", detail: "One-time nudge closes the loop" },
] as const;

function RecoveryFlowCard({
  step,
  index,
}: {
  step: (typeof FLOW_STEPS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <EliteCard
        glow={GLOWS[index % GLOWS.length]}
        className="rounded-r-2xl border-l-4 border-emerald-500 hover:border-emerald-400/60"
      >
        <div className="group flex gap-4 py-4 pl-5 pr-4">
          <span className="font-poppins text-2xl font-black text-emerald-500/30 transition-colors group-hover:text-emerald-500/50">
            {step.step}
          </span>
          <div>
            <p className="font-poppins text-xs font-bold uppercase tracking-wide text-ink-primary group-hover:text-emerald-400">
              {step.label}
            </p>
            <p className="mt-1 font-poppins text-[11px] leading-relaxed text-ink-muted">{step.detail}</p>
          </div>
        </div>
      </EliteCard>
    </motion.div>
  );
}

export default function WhatsappRecoverySection() {
  const phoneRef = useRef<HTMLDivElement>(null);
  const phoneInView = useInView(phoneRef, { once: true, margin: "-80px" });

  return (
    <section
      id="recovery"
      className="relative w-full overflow-x-clip overflow-hidden border-t border-white/10 bg-surface-base py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={WHATSAPP_SECTIONS.recovery}
    >
      <SectionAmbience variant="mixed" />

      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(34,197,94,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      <SiteContainer className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-16">
          <WhatsappSectionReveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-emerald-400">
              <motion.i
                className="fab fa-whatsapp text-[10px]"
                whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                transition={{ duration: 0.45 }}
                aria-hidden
              />
              Abandoned cart protocol
            </span>

            <h2
              className="font-display text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.1] tracking-tight text-ink-primary"
              data-figma-node="6:824"
            >
              THE ABANDONED
              <br />
              <span className="relative inline-block bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                RECOVERY ENGINE.
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-gradient-to-r from-emerald-500/80 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </span>
            </h2>

            <p
              className="mt-5 font-poppins text-sm leading-relaxed text-ink-secondary sm:text-[15px]"
              data-figma-node="6:825"
            >
              Unlike email at ~20% open rates, WA-Z lands in your customer&apos;s pocket at{" "}
              <span className="font-semibold text-emerald-400">98%</span>. Real WhatsApp Business
              features — catalog, templates, broadcasts, read receipts.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {WA_CAPABILITIES.map((cap, i) => (
                <motion.div
                  key={cap.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <EliteCard glow={GLOWS[i % GLOWS.length]}>
                    <div className="p-3">
                      <motion.i
                        className={`${cap.icon} text-sm text-emerald-400`}
                        whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                        transition={{ duration: 0.45 }}
                        aria-hidden
                      />
                      <p className="mt-2 font-poppins text-[10px] font-bold uppercase tracking-wide text-ink-primary">
                        {cap.label}
                      </p>
                      <p className="mt-0.5 font-poppins text-[9px] leading-snug text-ink-muted">{cap.desc}</p>
                    </div>
                  </EliteCard>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 space-y-2.5">
              {FLOW_STEPS.map((step, i) => (
                <RecoveryFlowCard key={step.step} step={step} index={i} />
              ))}
            </div>

            <ul className="mt-8 flex flex-col gap-2.5" data-figma-node="6:827">
              {FEATURES.map((item, i) => (
                <motion.li
                  key={item.node}
                  className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2 transition-colors hover:border-emerald-500/20 hover:bg-emerald-500/[0.06]"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  data-figma-node={item.node}
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15">
                    <motion.i
                      className="fas fa-check text-[10px] text-emerald-400"
                      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                      transition={{ duration: 0.45 }}
                      data-figma-node={item.iconNode}
                      aria-hidden
                    />
                  </span>
                  <span
                    className="font-poppins text-[11px] font-bold uppercase tracking-wide text-ink-primary"
                    data-figma-node={item.textNode}
                  >
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </WhatsappSectionReveal>

          <motion.div
            ref={phoneRef}
            className="relative flex w-full justify-center px-2 sm:px-4 lg:justify-end lg:px-0"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={phoneInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <WhatsappPhoneMockup inView={phoneInView} size="recovery" />
          </motion.div>
        </div>

        <WhatsappSectionReveal className="mt-16 text-center" delay={0.15}>
          <p className="font-poppins text-sm text-ink-muted">
            Ready to recover lost revenue on autopilot?
          </p>
          <Link
            href="/contact"
            className="zc-focus-ring mt-6 inline-flex items-center justify-center rounded-xl bg-emerald-500 px-10 py-4 font-poppins text-[10px] font-bold uppercase tracking-[0.25em] text-white shadow-[0_8px_28px_rgba(34,197,94,0.3)] transition-all hover:bg-emerald-400"
          >
            Activate WA-Z Node 01
          </Link>
        </WhatsappSectionReveal>
      </SiteContainer>
    </section>
  );
}
