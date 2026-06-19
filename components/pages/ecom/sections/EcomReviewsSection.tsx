"use client";

import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { ECOM_SECTIONS } from "@/lib/ecom-tokens";
import { SectionAmbientBackground } from "../shared/AmbientBackground";
import { EcomSectionReveal } from "../shared/EcomSectionReveal";

const REVIEWS = [
  {
    card: "6:551",
    stars: "6:552",
    quote: "6:553",
    avatar: "6:554",
    initials: "6:555",
    name: "6:556",
    role: "6:557",
    text: "The automation setup saved us 20+ hours per week. We finally focus on product development instead of manual order processing.",
    initialsText: "AS",
    author: "Alex S.",
    roleText: "CEO, GearHouse",
    metric: "+34% margin",
    metricColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
  },
  {
    card: "6:558",
    stars: "6:559",
    quote: "6:560",
    avatar: "6:561",
    initials: "6:562",
    name: "6:563",
    role: "6:564",
    text: "Scaling to TikTok Shop was a nightmare until we synced everything. Now we manage 4 platforms from one Zeecomm screen. Fully automated.",
    initialsText: "KD",
    author: "Kevin D.",
    roleText: "Founder, SwiftShip",
    metric: "4 channels",
    metricColor: "text-brand-blue bg-blue-50 border-blue-200",
  },
  {
    card: "6:565",
    stars: "6:566",
    quote: "6:567",
    avatar: "6:568",
    initials: "6:569",
    name: "6:570",
    role: "6:571",
    text: "The fulfillment automation is flawless. No more manual CSV uploads to our 3PL. Everything runs while we sleep. Worth every cent.",
    initialsText: "JR",
    author: "Jasim R.",
    roleText: "Director, Axora",
    metric: "Zero manual CSV",
    metricColor: "text-violet-600 bg-violet-50 border-violet-200",
  },
] as const;

function ReviewCard({
  review,
  index,
}: {
  review: (typeof REVIEWS)[number];
  index: number;
}) {
  return (
    <motion.article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-8 transition-colors duration-300 hover:border-brand-blue/35 hover:bg-brand-blue/[0.02] sm:p-10"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      data-figma-node={review.card}
    >
      <motion.span
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-brand-blue/[0.07] to-transparent opacity-0"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%", opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        aria-hidden
      />

      <span
        className="pointer-events-none absolute right-6 top-4 font-montserrat text-6xl font-black leading-none text-brand-blue/[0.06] transition-colors duration-300 group-hover:text-brand-blue/10"
        aria-hidden
      >
        &ldquo;
      </span>

      <div className="relative flex items-center justify-between gap-3">
        <div className="flex gap-0.5 text-brand-blue" data-figma-node={review.stars}>
          {[...Array(5)].map((_, i) => (
            <motion.i
              key={i}
              className="fas fa-star text-sm"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 + i * 0.06, type: "spring", stiffness: 400 }}
              aria-hidden
            />
          ))}
        </div>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 font-poppins text-[8px] font-bold uppercase tracking-wider ${review.metricColor}`}
        >
          {review.metric}
        </span>
      </div>

      <p
        className="relative mt-6 flex-1 font-poppins text-sm leading-relaxed text-gray-600"
        data-figma-node={review.quote}
      >
        <span className="text-brand-blue/40">&ldquo;</span>
        {review.text}
        <span className="text-brand-blue/40">&rdquo;</span>
      </p>

      <div className="relative mt-10 flex items-center gap-4 border-t border-gray-100 pt-6">
        <motion.div
          className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-blue-500"
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          data-figma-node={review.avatar}
        >
          <motion.span
            className="absolute inset-0 rounded-full border border-brand-blue/30"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: index * 0.4 }}
          />
          <span
            className="relative font-poppins text-xs font-bold text-white"
            data-figma-node={review.initials}
          >
            {review.initialsText}
          </span>
        </motion.div>
        <div>
          <p
            className="font-poppins text-xs font-bold uppercase text-gray-900 transition-colors duration-300 group-hover:text-brand-blue"
            data-figma-node={review.name}
          >
            {review.author}
          </p>
          <p
            className="mt-0.5 font-poppins text-[9px] font-medium uppercase tracking-wider text-gray-500"
            data-figma-node={review.role}
          >
            {review.roleText}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function EcomReviewsSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white py-16 sm:py-20"
      data-header-surface="light"
      data-figma-node={ECOM_SECTIONS.reviews}
    >
      <SectionAmbientBackground />

      <SiteContainer className="relative">
        <EcomSectionReveal className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-white px-3 py-1 font-poppins text-[11px] font-semibold text-brand-blue shadow-sm">
            Customer stories
          </span>

          <h2
            className="mt-4 font-poppins text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-gray-900"
            data-figma-node="6:550"
          >
            Trusted by store owners like you
          </h2>

          <p className="mt-3 max-w-xl font-poppins text-base leading-relaxed text-gray-500">
            See how teams save time, fix inventory issues, and scale across multiple marketplaces.
          </p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {[
              { value: "4.9", label: "Avg rating" },
              { value: "48h", label: "Avg deploy" },
              { value: "34%", label: "Margin lift" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6">
                {i > 0 && <span className="hidden h-8 w-px bg-gray-200 sm:block" aria-hidden />}
                <div className="text-center">
                  <p className="font-montserrat text-2xl font-black text-gray-900">{stat.value}</p>
                  <p className="font-poppins text-[9px] font-semibold uppercase tracking-wider text-gray-400">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </EcomSectionReveal>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <ReviewCard key={review.card} review={review} index={i} />
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
