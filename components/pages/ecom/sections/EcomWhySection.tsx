"use client";

import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { ECOM_SECTIONS } from "@/lib/ecom-tokens";
import { ECOM_PAGE_BG } from "@/lib/ecom-theme";
import { HeroAmbientBackground } from "../shared/AmbientBackground";

const REASONS = [
  {
    icon: "fas fa-store",
    color: "bg-blue-50 text-brand-blue",
    title: "Launch to scale",
    description:
      "From first listing to multi-channel growth. Setup, sync, and optimization handled for you.",
  },
  {
    icon: "fas fa-sync-alt",
    color: "bg-emerald-50 text-emerald-600",
    title: "Always in sync",
    description:
      "Inventory, orders, and pricing update across every store automatically. No more overselling.",
  },
  {
    icon: "fas fa-chart-pie",
    color: "bg-violet-50 text-violet-600",
    title: "Track real profit",
    description:
      "See margins by channel, not just revenue. Adjust pricing based on fees, shipping, and ads.",
  },
  {
    icon: "fas fa-truck",
    color: "bg-amber-50 text-amber-600",
    title: "Hands-off fulfillment",
    description:
      "Labels, tracking emails, and 3PL updates run after every sale. No manual CSV uploads.",
  },
] as const;

export default function EcomWhySection() {
  return (
    <section
      className="relative w-full overflow-hidden py-16 sm:py-20"
      style={{ backgroundColor: ECOM_PAGE_BG }}
      data-header-surface="light"
      data-figma-node={ECOM_SECTIONS.why}
    >
      <HeroAmbientBackground />

      <SiteContainer className="relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-white px-3 py-1 font-poppins text-[11px] font-semibold text-brand-blue shadow-sm">
              Why Zeecomm
            </span>
            <h2 className="mt-4 font-poppins text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight text-gray-900">
              Your dedicated e-commerce growth partner
            </h2>
            <p className="mt-4 font-poppins text-base leading-relaxed text-gray-600">
              We handle the technical side so you can focus on products and customers. Real automation
              that saves hours every week and keeps every marketplace running smoothly.
            </p>

            <ul className="mt-8 space-y-3">
              {["No coding required", "Setup in days, not months", "Works 24/7 across all channels"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3 font-poppins text-sm text-gray-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                      <i className="fas fa-check text-[10px]" aria-hidden />
                    </span>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {REASONS.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-2xl border border-gray-200/80 bg-white/90 p-5 backdrop-blur-sm"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${reason.color}`}>
                  <i className={`${reason.icon} text-sm`} aria-hidden />
                </div>
                <h3 className="mt-3 font-poppins text-sm font-semibold text-gray-900">{reason.title}</h3>
                <p className="mt-1.5 font-poppins text-xs leading-relaxed text-gray-500">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
