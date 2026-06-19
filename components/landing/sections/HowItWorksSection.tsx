"use client";

import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";

export const HOW_IT_WORKS_NODE = "6:200";

const STEPS = [
  {
    step: "1",
    title: "Pick your tools",
    description: "Browse 8 AI services: e-commerce, WhatsApp, email, and more. Use one or combine several.",
    icon: "fas fa-th-large",
  },
  {
    step: "2",
    title: "Connect & configure",
    description: "Link your store, inbox, or channels. Setup takes minutes with guided steps on each page.",
    icon: "fas fa-plug",
  },
  {
    step: "3",
    title: "Let AI run",
    description: "Agents handle replies, triage, content, and sales 24/7. You review and approve when needed.",
    icon: "fas fa-rocket",
  },
] as const;

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="w-full bg-white py-16 sm:py-20"
      data-header-surface="light"
      data-figma-node={HOW_IT_WORKS_NODE}
    >
      <SiteContainer>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-poppins text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-gray-900">
            How it works
          </h2>
          <p className="mt-3 font-poppins text-base text-gray-500">
            Get started in three simple steps. No technical background required.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {STEPS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative text-center"
            >
              {index < STEPS.length - 1 && (
                <div
                  className="pointer-events-none absolute left-[calc(50%+2rem)] top-8 hidden h-px w-[calc(100%-4rem)] bg-gray-200 md:block"
                  aria-hidden
                />
              )}
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                <i className={`${item.icon} text-lg`} aria-hidden />
              </div>
              <span className="mt-4 inline-block font-poppins text-xs font-bold uppercase tracking-wider text-brand-blue">
                Step {item.step}
              </span>
              <h3 className="mt-2 font-poppins text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 font-poppins text-sm leading-relaxed text-gray-500">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
