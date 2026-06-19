"use client";

import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { LANDING_BG } from "@/lib/landing-theme";

export const BENEFITS_NODE = "6:210";

const BENEFITS = [
  {
    title: "Save hours every week",
    description: "Automate repetitive tasks like email sorting, chat replies, and cart recovery.",
    icon: "fas fa-clock",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Never miss a lead",
    description: "AI flags high-value emails and messages so your team responds to what matters.",
    icon: "fas fa-bullseye",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Works while you sleep",
    description: "24/7 agents handle support and sales across WhatsApp, chat, and email.",
    icon: "fas fa-moon",
    color: "bg-violet-50 text-violet-600",
  },
  {
    title: "Grows with you",
    description: "Start with one tool and add more as your business scales. All from one hub.",
    icon: "fas fa-chart-line",
    color: "bg-amber-50 text-amber-600",
  },
] as const;

export default function BenefitsSection() {
  return (
    <section
      className="w-full py-16 sm:py-20"
      style={{ backgroundColor: LANDING_BG }}
      data-header-surface="light"
      data-figma-node={BENEFITS_NODE}
    >
      <SiteContainer>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-poppins text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight text-gray-900">
              Built for busy teams who want results, not complexity
            </h2>
            <p className="mt-4 font-poppins text-base leading-relaxed text-gray-500">
              Zeecomm replaces manual workflows with AI that&apos;s easy to understand and simple to
              manage. No coding, no long onboarding. Just tools that work.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-2xl border border-gray-200 bg-white p-5"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${benefit.color}`}>
                  <i className={`${benefit.icon} text-sm`} aria-hidden />
                </div>
                <h3 className="mt-3 font-poppins text-sm font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-1.5 font-poppins text-xs leading-relaxed text-gray-500">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
