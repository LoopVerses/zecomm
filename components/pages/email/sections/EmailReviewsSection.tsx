"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EMAIL_SECTIONS } from "@/lib/email-tokens";
import { EMAIL_PARCHMENT, EMAIL_PLUM } from "@/lib/email-theme";
import {
  EmailSectionReveal,
  staggerContainer,
  staggerItem,
} from "../shared/EmailSectionReveal";

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
      className="relative w-full overflow-hidden py-20 lg:py-28"
      style={{ backgroundColor: EMAIL_PARCHMENT }}
      data-header-surface="light"
      data-figma-node={EMAIL_SECTIONS.reviews}
    >
      <SiteContainer>
        <EmailSectionReveal>
          <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.25em] text-violet-700">
            Operator verdicts
          </p>
          <h2 className="mt-2 font-poppins text-[clamp(2rem,4.5vw,3.25rem)] font-light text-stone-900">
            What founders{" "}
            <span className="font-extrabold italic" style={{ color: EMAIL_PLUM }}>
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
          <motion.article
            variants={staggerItem}
            className="relative border-l-4 bg-white p-10 lg:p-12"
            style={{ borderColor: EMAIL_PLUM }}
          >
            <span className="font-poppins text-6xl font-extrabold leading-none text-violet-200" aria-hidden>
              &ldquo;
            </span>
            <p className="mt-2 font-poppins text-xl font-medium leading-relaxed text-stone-700 lg:text-2xl">
              {featured.text}
            </p>
            <div className="mt-10 flex items-center gap-4 border-t border-stone-200 pt-8">
              <div
                className="flex h-12 w-12 items-center justify-center font-poppins text-xs font-bold text-white"
                style={{ backgroundColor: EMAIL_PLUM }}
              >
                {featured.initials}
              </div>
              <div>
                <p className="font-poppins text-sm font-bold text-stone-900">{featured.author}</p>
                <p className="font-poppins text-[10px] font-semibold uppercase tracking-wider text-stone-400">
                  {featured.role}
                </p>
              </div>
            </div>
          </motion.article>

          <div className="flex flex-col gap-6">
            {others.map((review) => (
              <motion.article
                key={review.author}
                variants={staggerItem}
                className="flex flex-1 flex-col border border-stone-300 bg-white p-6"
              >
                <p className="flex-1 font-poppins text-sm leading-relaxed text-stone-600">{review.text}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center border-2 font-poppins text-[9px] font-bold text-violet-800" style={{ borderColor: EMAIL_PLUM }}>
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-poppins text-xs font-bold text-stone-800">{review.author}</p>
                    <p className="font-poppins text-[9px] uppercase tracking-wider text-stone-400">{review.role}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </SiteContainer>
    </section>
  );
}
