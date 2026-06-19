"use client";

import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { LANDING_BG } from "@/lib/landing-theme";

export const TESTIMONIALS_NODE = "6:230";

const REVIEWS = [
  {
    quote: "We cut morning email time from 3 hours to 20 minutes. The email scanner triages everything perfectly.",
    author: "Aaron S.",
    role: "CEO, Apex Logistics",
    initials: "AS",
  },
  {
    quote: "WhatsApp cart recovery alone paid for the platform in the first month. Setup was straightforward.",
    author: "Michelle L.",
    role: "Founder, Eco-Brand",
    initials: "ML",
  },
  {
    quote: "Our chat agent handles 80% of sales questions. The team now focuses on closing, not answering.",
    author: "Brian K.",
    role: "Director, Axora",
    initials: "BK",
  },
] as const;

export default function TestimonialsSection() {
  return (
    <section
      id="reviews"
      className="w-full py-16 sm:py-20"
      style={{ backgroundColor: LANDING_BG }}
      data-header-surface="light"
      data-figma-node={TESTIMONIALS_NODE}
    >
      <SiteContainer>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-poppins text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-gray-900">
            Trusted by growing businesses
          </h2>
          <p className="mt-3 font-poppins text-base text-gray-500">
            See what founders and teams say about using Zeecomm.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <motion.blockquote
              key={review.author}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6"
            >
              <div className="flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="fas fa-star text-xs" aria-hidden />
                ))}
              </div>
              <p className="mt-4 flex-1 font-poppins text-sm leading-relaxed text-gray-600">
                &ldquo;{review.quote}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 font-poppins text-xs font-bold text-brand-blue">
                  {review.initials}
                </div>
                <div>
                  <cite className="not-italic font-poppins text-sm font-semibold text-gray-900">
                    {review.author}
                  </cite>
                  <p className="font-poppins text-xs text-gray-400">{review.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
