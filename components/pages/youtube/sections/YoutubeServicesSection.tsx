"use client";

import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { YOUTUBE_SECTIONS } from "@/lib/youtube-tokens";
import { YOUTUBE_SERVICES } from "@/lib/youtube-content";
import { YoutubeSectionReveal } from "../shared/YoutubeSectionReveal";

const GLOWS = ["red", "violet", "cyan", "lime", "red", "violet", "cyan", "lime", "red", "violet"] as const;

export default function YoutubeServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full overflow-x-clip bg-surface-raised py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={YOUTUBE_SECTIONS.services}
    >
      <SectionAmbience variant="red" />

      <SiteContainer className="relative z-10">
        <YoutubeSectionReveal className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-600/25 bg-red-600/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-red-400">
            What&apos;s included
          </span>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight text-ink-primary">
            Full YouTube production support
          </h2>
          <p className="mt-3 font-poppins text-base text-ink-secondary">
            We manage the full process from content research to monetization, helping you build a
            professional channel with consistent, high-quality content.
          </p>
        </YoutubeSectionReveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {YOUTUBE_SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.03 }}
              className="h-full"
            >
              <EliteCard glow={GLOWS[index % GLOWS.length]} className="h-full">
                <div className="group relative p-5">
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
                  <motion.div
                    className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-red-600/20 bg-red-600/10 text-red-400"
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                    transition={{ duration: 0.45 }}
                  >
                    <i className={`${service.icon} text-sm`} aria-hidden />
                  </motion.div>
                  <h3 className="relative mt-3 font-poppins text-sm font-semibold text-ink-primary">{service.title}</h3>
                  <p className="relative mt-2 font-poppins text-xs leading-relaxed text-ink-muted">{service.description}</p>
                </div>
              </EliteCard>
            </motion.div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
