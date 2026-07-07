"use client";

import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { YOUTUBE_SECTIONS } from "@/lib/youtube-tokens";
import { YoutubeSectionReveal } from "../shared/YoutubeSectionReveal";

const HIGHLIGHTS = [
  {
    icon: "fas fa-film",
    title: "Full production",
    detail: "Script to publish — we handle every step",
    glow: "red" as const,
  },
  {
    icon: "fas fa-chart-line",
    title: "Growth strategy",
    detail: "SEO, thumbnails, and consistent scheduling",
    glow: "violet" as const,
  },
  {
    icon: "fas fa-dollar-sign",
    title: "Monetization path",
    detail: "Built toward watch time, subs, and revenue",
    glow: "lime" as const,
  },
] as const;

export default function YoutubeAboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-x-clip bg-surface-base py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={YOUTUBE_SECTIONS.about}
    >
      <SectionAmbience variant="red" />

      <SiteContainer className="relative z-10">
        <YoutubeSectionReveal className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-600/25 bg-red-600/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-red-400">
            <span className="zc-live-dot h-1.5 w-1.5 rounded-full bg-red-500" />
            Done-for-you automation
          </span>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight text-ink-primary">
            Complete done-for-you YouTube automation
          </h2>
          <p className="mt-4 font-poppins text-base leading-relaxed text-ink-secondary">
            Our YouTube automation service is designed for business owners, creators, entrepreneurs,
            and brands who want to grow on YouTube without handling the daily content production
            process.
          </p>
          <p className="mt-4 font-poppins text-base leading-relaxed text-ink-muted">
            From planning to publishing, our team takes care of every step needed to keep your channel
            active, optimized, and ready for growth.
          </p>
        </YoutubeSectionReveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <EliteCard glow={item.glow} className="h-full">
                <div className="p-6 text-center">
                  <motion.div
                    className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/25 bg-red-600/10 text-red-400"
                    whileHover={{ rotate: 360, scale: 1.08 }}
                    transition={{ duration: 0.55 }}
                  >
                    <i className={`${item.icon} text-base`} aria-hidden />
                  </motion.div>
                  <h3 className="mt-4 font-poppins text-sm font-semibold text-ink-primary">{item.title}</h3>
                  <p className="mt-2 font-poppins text-xs leading-relaxed text-ink-muted">{item.detail}</p>
                </div>
              </EliteCard>
            </motion.div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
