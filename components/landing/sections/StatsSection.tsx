"use client";

import { SiteContainer } from "@/components/layout/SiteContainer";

export const STATS_NODE = "6:220";

const STATS = [
  { value: "42K+", label: "Emails processed daily" },
  { value: "98%", label: "WhatsApp open rate" },
  { value: "4.2x", label: "Avg. cart recovery" },
  { value: "14hr", label: "Saved per founder / week" },
] as const;

export default function StatsSection() {
  return (
    <section
      className="w-full border-y border-gray-200 bg-white py-12 sm:py-14"
      data-header-surface="light"
      data-figma-node={STATS_NODE}
    >
      <SiteContainer>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-poppins text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-brand-blue">
                {stat.value}
              </p>
              <p className="mt-1 font-poppins text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
