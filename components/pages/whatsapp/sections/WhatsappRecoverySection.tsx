"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { WHATSAPP_SECTIONS } from "@/lib/whatsapp-tokens";
import { WhatsappPhoneMockup } from "../shared/WhatsappPhoneMockup";
import { WhatsappSectionReveal } from "../shared/WhatsappSectionReveal";

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
      className="group flex gap-4 rounded-r-2xl border-l-4 border-green-500 bg-white py-4 pl-5 pr-4 transition-colors duration-300 hover:bg-green-50/40"
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ x: 6 }}
    >
      <span className="font-poppins text-2xl font-black text-green-500/30 transition-colors group-hover:text-green-500/50">
        {step.step}
      </span>
      <div>
        <p className="font-poppins text-xs font-bold uppercase tracking-wide text-gray-900 group-hover:text-green-700">
          {step.label}
        </p>
        <p className="mt-1 font-poppins text-[11px] leading-relaxed text-gray-500">{step.detail}</p>
      </div>
    </motion.div>
  );
}

export default function WhatsappRecoverySection() {
  const phoneRef = useRef<HTMLDivElement>(null);
  const phoneInView = useInView(phoneRef, { once: true, margin: "-80px" });

  return (
    <section
      id="recovery"
      className="relative w-full overflow-hidden border-t border-green-100 bg-white py-20 lg:py-28"
      data-header-surface="light"
      data-figma-node={WHATSAPP_SECTIONS.recovery}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(34,197,94,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      <SiteContainer>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-16">
          <WhatsappSectionReveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-4 py-1.5 font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-green-600">
              <i className="fab fa-whatsapp text-[10px]" aria-hidden />
              Abandoned cart protocol
            </span>

            <h2
              className="font-poppins text-[32px] font-light uppercase leading-[1.1] tracking-[-0.03em] text-gray-900 sm:text-[44px] lg:text-[48px]"
              data-figma-node="6:824"
            >
              THE ABANDONED
              <br />
              <span className="relative inline-block bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text font-extrabold text-transparent">
                RECOVERY ENGINE.
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-gradient-to-r from-green-500/80 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </span>
            </h2>

            <p
              className="mt-5 font-poppins text-sm leading-relaxed text-gray-600 sm:text-[15px]"
              data-figma-node="6:825"
            >
              Unlike email at ~20% open rates, WA-Z lands in your customer&apos;s pocket at{" "}
              <span className="font-semibold text-green-600">98%</span>. Real WhatsApp Business
              features — catalog, templates, broadcasts, read receipts.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {WA_CAPABILITIES.map((cap, i) => (
                <motion.div
                  key={cap.label}
                  className="rounded-xl border border-green-100 bg-green-50/30 p-3 transition-colors hover:border-green-300/50 hover:bg-green-50/60"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <i className={`${cap.icon} text-sm text-green-600`} aria-hidden />
                  <p className="mt-2 font-poppins text-[10px] font-bold uppercase tracking-wide text-gray-800">
                    {cap.label}
                  </p>
                  <p className="mt-0.5 font-poppins text-[9px] leading-snug text-gray-500">{cap.desc}</p>
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
                  className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2 transition-colors hover:border-green-100 hover:bg-green-50/50"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  data-figma-node={item.node}
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500/10">
                    <i
                      className="fas fa-check text-[10px] text-green-500"
                      data-figma-node={item.iconNode}
                      aria-hidden
                    />
                  </span>
                  <span
                    className="font-poppins text-[11px] font-bold uppercase tracking-wide text-gray-800"
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
          <p className="font-poppins text-sm text-gray-500">
            Ready to recover lost revenue on autopilot?
          </p>
          <Link
            href="/whatsapp"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-green-500 px-10 py-4 font-poppins text-[10px] font-bold uppercase tracking-[0.25em] text-white shadow-[0_8px_28px_rgba(34,197,94,0.3)] transition-all hover:bg-green-600"
          >
            Activate WA-Z Node 01
          </Link>
        </WhatsappSectionReveal>
      </SiteContainer>
    </section>
  );
}
