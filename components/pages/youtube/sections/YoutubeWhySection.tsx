"use client";

import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { YOUTUBE_SECTIONS } from "@/lib/youtube-tokens";
import { YOUTUBE_AUDIENCE, YOUTUBE_WHY_CHOOSE } from "@/lib/youtube-content";
import { YoutubeSectionReveal } from "../shared/YoutubeSectionReveal";

const AUDIENCE_GLOWS = ["red", "violet", "cyan", "lime", "red"] as const;
const WHY_GLOWS = ["violet", "cyan", "lime", "red", "violet", "cyan"] as const;

export default function YoutubeWhySection() {
  return (
    <section
      className="relative w-full overflow-x-clip bg-surface-raised py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={YOUTUBE_SECTIONS.why}
    >
      <SectionAmbience variant="red" />

      <SiteContainer className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <YoutubeSectionReveal>
            <EliteCard glow="red" className="mb-8 lg:mb-0">
              <div className="p-6 sm:p-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-red-600/25 bg-red-600/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-red-400">
                  Who this is for
                </span>
                <h2 className="mt-4 font-display text-[clamp(1.5rem,3.5vw,2rem)] font-bold leading-tight text-ink-primary">
                  Perfect for creators and business owners
                </h2>
                <p className="mt-4 font-poppins text-sm leading-relaxed text-ink-secondary">
                  Our YouTube automation service is perfect for anyone who wants a professional channel
                  without managing every step themselves.
                </p>
              </div>
            </EliteCard>

            <ul className="space-y-3">
              {YOUTUBE_AUDIENCE.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <EliteCard glow={AUDIENCE_GLOWS[index % AUDIENCE_GLOWS.length]} className="rounded-xl">
                    <div className="flex items-start gap-3 p-4">
                      <motion.span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600/20 text-red-400"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.45 }}
                      >
                        <i className="fas fa-check text-[10px]" aria-hidden />
                      </motion.span>
                      <span className="font-poppins text-sm text-ink-secondary">{item}</span>
                    </div>
                  </EliteCard>
                </motion.li>
              ))}
            </ul>
          </YoutubeSectionReveal>

          <YoutubeSectionReveal delay={0.1}>
            <EliteCard glow="violet" className="mb-6">
              <div className="p-6 sm:p-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/25 bg-accent-cyan/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-accent-cyan">
                  Why choose us
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-ink-primary">
                  We build a complete YouTube content system
                </h3>
                <p className="mt-3 font-poppins text-sm leading-relaxed text-ink-secondary">
                  We don&apos;t just create videos. We help your channel grow with strategy, consistency,
                  and professional execution.
                </p>
              </div>
            </EliteCard>

            <ul className="space-y-3">
              {YOUTUBE_WHY_CHOOSE.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                >
                  <EliteCard glow={WHY_GLOWS[index % WHY_GLOWS.length]} className="rounded-xl">
                    <p className="p-4 font-poppins text-sm text-ink-secondary">{item}</p>
                  </EliteCard>
                </motion.li>
              ))}
            </ul>
          </YoutubeSectionReveal>
        </div>

        <YoutubeSectionReveal delay={0.15} className="mt-14">
          <EliteCard glow="red">
            <p className="p-6 text-center font-poppins text-base leading-relaxed text-ink-secondary sm:p-8">
              YouTube growth takes time, consistency, and the right strategy. With our automation
              service, you don&apos;t have to manage everything alone. We help you save time, avoid
              guesswork, and build a professional channel with a clear content plan and complete
              production support.
            </p>
          </EliteCard>
        </YoutubeSectionReveal>
      </SiteContainer>
    </section>
  );
}
