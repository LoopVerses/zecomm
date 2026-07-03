"use client";

import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { YOUTUBE_SECTIONS } from "@/lib/youtube-tokens";
import { YOUTUBE_AUDIENCE, YOUTUBE_WHY_CHOOSE } from "@/lib/youtube-content";
import { YoutubeSectionReveal } from "../shared/YoutubeSectionReveal";

export default function YoutubeWhySection() {
  return (
    <section
      className="relative w-full overflow-x-hidden bg-[#0A0A0A] py-16 sm:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={YOUTUBE_SECTIONS.why}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />

      <SiteContainer>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <YoutubeSectionReveal>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-600/25 bg-red-600/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-red-400">
              Who this is for
            </span>
            <h2 className="font-poppins text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight text-white">
              Perfect for creators and business owners
            </h2>
            <p className="mt-4 font-poppins text-base leading-relaxed text-gray-400">
              Our YouTube automation service is perfect for anyone who wants a professional channel
              without managing every step themselves.
            </p>
            <ul className="mt-6 space-y-3">
              {YOUTUBE_AUDIENCE.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 font-poppins text-sm text-gray-300"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600/20 text-red-400">
                    <i className="fas fa-check text-[10px]" aria-hidden />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </YoutubeSectionReveal>

          <YoutubeSectionReveal delay={0.1}>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-600/25 bg-red-600/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-red-400">
              Why choose us
            </span>
            <h3 className="font-poppins text-xl font-bold text-white">
              We build a complete YouTube content system
            </h3>
            <p className="mt-3 font-poppins text-sm leading-relaxed text-gray-400">
              We don&apos;t just create videos. We help your channel grow with strategy, consistency,
              and professional execution.
            </p>
            <ul className="mt-6 space-y-2.5">
              {YOUTUBE_WHY_CHOOSE.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-poppins text-sm text-gray-300"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </YoutubeSectionReveal>
        </div>

        <YoutubeSectionReveal delay={0.15} className="mt-14 text-center">
          <p className="mx-auto max-w-2xl font-poppins text-base leading-relaxed text-gray-400">
            YouTube growth takes time, consistency, and the right strategy. With our automation
            service, you don&apos;t have to manage everything alone. We help you save time, avoid
            guesswork, and build a professional channel with a clear content plan and complete
            production support.
          </p>
        </YoutubeSectionReveal>
      </SiteContainer>
    </section>
  );
}
