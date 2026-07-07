"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { EMAIL_SECTIONS } from "@/lib/email-tokens";
import {
  EmailSectionReveal,
  staggerContainer,
  staggerItem,
} from "../shared/EmailSectionReveal";

const GLOWS = ["violet", "cyan", "lime", "red"] as const;

const REVIEWS = [
  {
    initials: "AS",
    author: "Aaron S.",
    role: "CEO, Apex Logistics",
    text: "I used to spend 3 hours every morning sorting through junk and customer complaints. Unit 06 handles the triage perfectly. I only see the high-value deals now.",
    featured: true,
  },
  {
    initials: "ML",
    author: "Michelle L.",
    role: "Founder, Eco-Brand",
    text: "The auto-drafting is scarily accurate. It captures our brand voice perfectly. We've scaled support to 100k users without hiring a single rep.",
    featured: false,
  },
  {
    initials: "BK",
    author: "Brian K.",
    role: "Director, Axora",
    text: "Unit 06 found a $12k contract hidden in our junk mail within the first hour of deployment.",
    featured: false,
  },
] as const;

export default function EmailReviewsSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });
  const featured = REVIEWS.find((r) => r.featured)!;
  const others = REVIEWS.filter((r) => !r.featured);

  return (
    <section
      className="relative w-full overflow-x-clip overflow-hidden border-t border-white/10 bg-surface-base py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={EMAIL_SECTIONS.reviews}
    >
      <SectionAmbience variant="mixed" />

      <SiteContainer className="relative z-10">
        <EmailSectionReveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-orange-400">
            Operator verdicts
          </span>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-tight text-ink-primary">
            What founders{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              say.
            </span>
          </h2>
        </EmailSectionReveal>

        <motion.div
          ref={gridRef}
          className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]"
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
        >
          <motion.div variants={staggerItem} className="h-full">
            <EliteCard glow="violet" className="h-full border-l-4 border-l-orange-500">
              <div className="relative p-10 lg:p-12">
                <span className="font-display text-6xl font-extrabold leading-none text-orange-500/15" aria-hidden>
                  &ldquo;
                </span>
                <p className="mt-2 font-poppins text-xl font-medium leading-relaxed text-ink-secondary lg:text-2xl">
                  {featured.text}
                </p>
                <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 font-poppins text-xs font-bold text-white">
                    {featured.initials}
                  </div>
                  <div>
                    <p className="font-poppins text-sm font-bold text-ink-primary">{featured.author}</p>
                    <p className="font-poppins text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
                      {featured.role}
                    </p>
                  </div>
                </div>
              </div>
            </EliteCard>
          </motion.div>

          <div className="flex flex-col gap-6">
            {others.map((review, i) => (
              <motion.div key={review.author} variants={staggerItem} className="flex flex-1">
                <EliteCard glow={GLOWS[(i + 1) % GLOWS.length]} className="flex flex-1 flex-col">
                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex-1 font-poppins text-sm leading-relaxed text-ink-secondary">{review.text}</p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 font-poppins text-[9px] font-bold text-orange-400">
                        {review.initials}
                      </div>
                      <div>
                        <p className="font-poppins text-xs font-bold text-ink-primary">{review.author}</p>
                        <p className="font-poppins text-[9px] uppercase tracking-wider text-ink-muted">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </EliteCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SiteContainer>
    </section>
  );
}
