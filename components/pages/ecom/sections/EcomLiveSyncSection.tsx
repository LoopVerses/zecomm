"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { ECOM_SECTIONS } from "@/lib/ecom-tokens";
import { SectionAmbientBackground } from "../shared/AmbientBackground";
import { EcomSectionReveal } from "../shared/EcomSectionReveal";
import { OmnichannelSyncHub } from "../shared/OmnichannelSyncHub";

const FEATURES = [
  {
    node: "6:504",
    titleNode: "6:505",
    bodyNode: "6:506",
    icon: "fas fa-boxes",
    title: "Store setup & sync",
    body: "Connect your stores once. Inventory, orders, and product data stay aligned across every marketplace.",
  },
  {
    node: "6:507",
    titleNode: "6:508",
    bodyNode: "6:509",
    icon: "fas fa-chart-line",
    title: "Performance tracking",
    body: "Track sales, margins, and channel health in one dashboard. Spot what is working and scale it.",
  },
  {
    node: "6:510",
    titleNode: "6:511",
    bodyNode: "6:512",
    icon: "fas fa-shipping-fast",
    title: "Order automation",
    body: "Labels, tracking updates, and customer emails go out automatically after every purchase.",
  },
] as const;

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof FEATURES)[number];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(28,51,191,0.06)]"
      data-figma-node={feature.node}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
        <i className={`${feature.icon} text-sm`} aria-hidden />
      </div>
      <div>
        <h3
          className="font-poppins text-sm font-semibold text-gray-900"
          data-figma-node={feature.titleNode}
        >
          {feature.title}
        </h3>
        <p
          className="mt-1.5 font-poppins text-sm leading-relaxed text-gray-500"
          data-figma-node={feature.bodyNode}
        >
          {feature.body}
        </p>
      </div>
    </motion.article>
  );
}

export default function EcomLiveSyncSection() {
  const visualRef = useRef<HTMLDivElement>(null);
  const visualInView = useInView(visualRef, { once: true, margin: "-60px" });

  return (
    <section
      id="sync"
      className="relative w-full overflow-x-clip overflow-hidden bg-white py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="light"
      data-figma-node={ECOM_SECTIONS.liveSync}
    >
      <SectionAmbientBackground />

      <SiteContainer className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <EcomSectionReveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue/5 px-3 py-1 font-poppins text-[11px] font-semibold text-brand-blue">
            Everything in one place
          </span>
          <h2
            className="mt-4 font-poppins text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight text-gray-900"
            data-figma-node="6:503"
          >
            Everything you need to sell &amp; scale
          </h2>
          <p className="mt-3 font-poppins text-base text-gray-500">
            Whether you&apos;re launching your first store or running multiple channels, we handle
            the operations so you can grow with confidence.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {FEATURES.map((feature, i) => (
              <FeatureCard key={feature.node} feature={feature} index={i} />
            ))}
          </div>
        </EcomSectionReveal>

        <motion.div
          ref={visualRef}
          className="relative flex w-full items-center justify-center"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={visualInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-full max-w-[560px] scale-[0.88] sm:scale-95 lg:scale-100">
            <OmnichannelSyncHub inView={visualInView} />
          </div>
        </motion.div>
      </SiteContainer>
    </section>
  );
}
