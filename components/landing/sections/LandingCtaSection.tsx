"use client";

import Link from "next/link";
import { SiteContainer } from "@/components/layout/SiteContainer";

export const LANDING_CTA_NODE = "6:250";

export default function LandingCtaSection() {
  return (
    <section
      className="w-full py-16 sm:py-20"
      data-header-surface="light"
      data-figma-node={LANDING_CTA_NODE}
    >
      <SiteContainer>
        <div className="rounded-3xl bg-brand-blue px-8 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="font-poppins text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-white">
            Ready to automate your business?
          </h2>
          <p className="mx-auto mt-3 max-w-lg font-poppins text-base text-blue-100">
            Explore our AI tools and find the right fit for your team. Start free, scale when you&apos;re ready.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#services"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-8 font-poppins text-sm font-semibold text-brand-blue transition-colors hover:bg-blue-50"
            >
              Browse all services
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/30 px-8 font-poppins text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              See how it works
            </Link>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
