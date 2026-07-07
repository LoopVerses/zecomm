"use client";

import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { LANDING_BG } from "@/lib/landing-theme";

export const TESTIMONIALS_NODE = "6:230";

const REVIEWS = [
  {
    quote: "We cut morning email time from 3 hours to 20 minutes. The email scanner triages everything perfectly.",
    author: "Aaron S.",
    role: "CEO, Apex Logistics",
    company: "Apex",
    gradient: "from-blue-500/30 to-accent-violet/20",
    glow: "violet" as const,
  },
  {
    quote: "WhatsApp cart recovery alone paid for the platform in the first month. Setup was straightforward.",
    author: "Michelle L.",
    role: "Founder, Eco-Brand",
    company: "Eco",
    gradient: "from-emerald-500/30 to-accent-cyan/20",
    glow: "lime" as const,
  },
  {
    quote: "Our chat agent handles 80% of sales questions. The team now focuses on closing, not answering.",
    author: "Brian K.",
    role: "Director, Axora",
    company: "Axora",
    gradient: "from-accent-violet/30 to-accent-cyan/20",
    glow: "cyan" as const,
  },
  {
    quote: "YouTube automation gave us consistent weekly uploads without me touching scripts or edits.",
    author: "Marcus J.",
    role: "Founder, Apex Gear",
    company: "Gear",
    gradient: "from-red-500/30 to-rose-500/20",
    glow: "red" as const,
  },
] as const;

const doubled = [...REVIEWS, ...REVIEWS];

export default function TestimonialsSection() {
  return (
    <section
      id="reviews"
      className="relative w-full overflow-x-clip py-14 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: LANDING_BG }}
      data-header-surface="dark"
      data-figma-node={TESTIMONIALS_NODE}
    >
      <SectionAmbience variant="violet" />

      <SiteContainer className="relative z-10">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-violet/25 bg-accent-violet/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-accent-violet">
            Client feedback
          </span>
          <h2 className="mt-4 font-display text-[clamp(1.65rem,4.5vw,3rem)] font-bold text-ink-primary">
            Trusted by growing businesses
          </h2>
        </ScrollReveal>
      </SiteContainer>

      <div className="relative z-10 mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#0E1117] to-transparent sm:w-20" aria-hidden />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#0E1117] to-transparent sm:w-20" aria-hidden />

        <div className="zc-marquee flex w-max gap-4 px-4 sm:gap-5">
          {doubled.map((review, index) => (
            <EliteCard key={`${review.author}-${index}`} glow={review.glow} className="zc-marquee-card shrink-0">
              <div className="p-6">
                <div className="flex gap-0.5 text-accent-lime" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i key={i} className="fas fa-star text-[10px]" aria-hidden />
                  ))}
                </div>
                <p className="mt-4 font-poppins text-sm leading-relaxed text-ink-secondary">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <footer className="mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${review.gradient} font-poppins text-xs font-bold text-ink-primary`}
                  >
                    {review.company.slice(0, 2)}
                  </div>
                  <div className="min-w-0">
                    <cite className="not-italic font-poppins text-sm font-semibold text-ink-primary">
                      {review.author}
                    </cite>
                    <p className="truncate font-poppins text-xs text-ink-muted">{review.role}</p>
                  </div>
                </footer>
              </div>
            </EliteCard>
          ))}
        </div>
      </div>
    </section>
  );
}
