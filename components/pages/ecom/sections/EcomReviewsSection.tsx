"use client";

import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { ECOM_SECTIONS } from "@/lib/ecom-tokens";
import { ECOM_THEME } from "@/lib/ecom-theme";
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
    text: "The automation setup saved us 20+ hours per week. Zeecom handles orders, suppliers, and fulfillment so we can focus on scaling the business.",
    initialsText: "AS",
    author: "Alex S.",
    roleText: "CEO, GearHouse",
    metric: "+34% margin",
    metricColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    glow: "lime" as const,
  },
  {
    card: "6:558",
    stars: "6:559",
    quote: "6:560",
    avatar: "6:561",
    initials: "6:562",
    name: "6:563",
    role: "6:564",
    text: "Scaling to TikTok Shop and Walmart was smooth. Zeecom manages listings, suppliers, and daily operations from one professional system.",
    initialsText: "KD",
    author: "Kevin D.",
    roleText: "Founder, SwiftShip",
    metric: "4 channels",
    metricColor: "text-accent-violet bg-accent-violet/10 border-accent-violet/30",
    glow: "violet" as const,
  },
  {
    card: "6:565",
    stars: "6:566",
    quote: "6:567",
    avatar: "6:568",
    initials: "6:569",
    name: "6:570",
    role: "6:571",
    text: "From product research to payout tracking, everything is handled. No more manual CSV uploads or chasing suppliers. True zero-effort management.",
    initialsText: "JR",
    author: "Jasim R.",
    roleText: "Director, Axora",
    metric: "Zero manual CSV",
    metricColor: "text-accent-cyan bg-accent-cyan/10 border-accent-cyan/30",
    glow: "cyan" as const,
  },
] as const;

const STAT_GLOWS = ["violet", "cyan", "lime"] as const;

function ReviewCard({
  review,
  index,
}: {
  review: (typeof REVIEWS)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      data-figma-node={review.card}
      className="h-full"
    >
      <EliteCard glow={review.glow} className="h-full">
        <div className="group relative flex h-full flex-col p-8 sm:p-10">
          <span
            className="pointer-events-none absolute right-6 top-4 font-display text-6xl font-black leading-none text-accent-violet/10 transition-colors duration-300 group-hover:text-accent-violet/20"
            aria-hidden
          >
            &ldquo;
          </span>

          <div className="relative flex items-center justify-between gap-3">
            <div className="flex gap-0.5 text-accent-violet" data-figma-node={review.stars}>
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
            className={`relative mt-6 flex-1 text-sm leading-relaxed ${ECOM_THEME.textMuted}`}
            data-figma-node={review.quote}
          >
            <span className="text-accent-violet/40">&ldquo;</span>
            {review.text}
            <span className="text-accent-violet/40">&rdquo;</span>
          </p>

          <div className={`relative mt-10 flex items-center gap-4 border-t ${ECOM_THEME.border} pt-6`}>
            <motion.div
              className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-violet to-accent-cyan"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              data-figma-node={review.avatar}
            >
              <motion.span
                className="absolute inset-0 rounded-full border border-accent-violet/30"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: index * 0.4 }}
              />
              <span className="relative font-poppins text-xs font-bold text-white" data-figma-node={review.initials}>
                {review.initialsText}
              </span>
            </motion.div>
            <div>
              <p
                className="text-xs font-bold uppercase text-ink-primary transition-colors duration-300 group-hover:text-accent-violet"
                data-figma-node={review.name}
              >
                {review.author}
              </p>
              <p
                className={`mt-0.5 text-[9px] font-medium uppercase tracking-wider ${ECOM_THEME.textSubtle}`}
                data-figma-node={review.role}
              >
                {review.roleText}
              </p>
            </div>
          </div>
        </div>
      </EliteCard>
    </motion.div>
  );
}

export default function EcomReviewsSection() {
  return (
    <section
      className={`relative w-full overflow-x-clip py-14 sm:py-16 md:py-20 lg:py-24 ${ECOM_THEME.bg}`}
      data-header-surface={ECOM_THEME.surface}
      data-figma-node={ECOM_SECTIONS.reviews}
    >
      <SectionAmbience variant="mixed" />

      <SiteContainer className="relative z-10">
        <EcomSectionReveal className="flex flex-col items-center text-center">
          <span className={ECOM_THEME.badge}>Customer stories</span>

          <h2
            className={`mt-4 text-[clamp(1.75rem,4vw,2.25rem)] font-bold ${ECOM_THEME.headline} ${ECOM_THEME.text}`}
            data-figma-node="6:550"
          >
            Trusted by store owners like you
          </h2>

          <p className={`mt-3 max-w-xl text-base leading-relaxed ${ECOM_THEME.textSubtle}`}>
            See how teams save time, fix inventory issues, and scale across multiple marketplaces.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {[
              { value: "4.9", label: "Avg rating" },
              { value: "48h", label: "Avg deploy" },
              { value: "34%", label: "Margin lift" },
            ].map((stat, i) => (
              <EliteCard key={stat.label} glow={STAT_GLOWS[i]} className="min-w-[100px] rounded-xl">
                <div className="px-5 py-3 text-center">
                  <p className={`${ECOM_THEME.headline} text-2xl font-black text-ink-primary`}>{stat.value}</p>
                  <p className={`text-[9px] font-semibold uppercase tracking-wider ${ECOM_THEME.textSubtle}`}>
                    {stat.label}
                  </p>
                </div>
              </EliteCard>
            ))}
          </div>
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
