"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { MeshGradient } from "@/components/shared/MeshGradient";
import { YOUTUBE_SECTIONS } from "@/lib/youtube-tokens";
import { YoutubeSectionReveal } from "../shared/YoutubeSectionReveal";

export default function YoutubeCtaSection() {
  return (
    <section
      id="contact"
      className="zc-grain relative w-full overflow-x-clip bg-surface-base py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={YOUTUBE_SECTIONS.cta}
    >
      <MeshGradient className="opacity-40" />
      <SectionAmbience variant="red" />

      <SiteContainer className="relative z-10 flex flex-col items-center text-center">
        <YoutubeSectionReveal className="w-full max-w-[800px]">
          <EliteCard glow="red" className="overflow-hidden">
            <div className="relative px-8 py-14 sm:px-14 sm:py-16">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(220,38,38,0.2),transparent)]"
                aria-hidden
              />

              <motion.span
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-600/15 px-4 py-1.5 font-poppins text-[11px] font-semibold text-red-400"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="zc-live-dot h-1.5 w-1.5 rounded-full bg-red-500" />
                Ready to start?
              </motion.span>

              <h2
                className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight text-ink-primary"
                data-figma-node="6:266"
              >
                Grow your YouTube channel the smart way
              </h2>

              <p
                className="mx-auto mt-5 max-w-[560px] font-poppins text-base leading-relaxed text-ink-secondary"
                data-figma-node="6:267"
              >
                Let us handle everything for your YouTube channel: content research, script writing,
                video editing, thumbnails, uploads, SEO, channel management, and monetization support.
                Contact us today to discuss your goals and get started with a complete YouTube
                automation plan.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/services#contact"
                  className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-xl bg-red-600 px-8 font-poppins text-sm font-semibold text-white shadow-[0_8px_32px_rgba(220,38,38,0.35)] transition-all hover:scale-[1.02] hover:bg-red-500 sm:w-auto sm:min-w-[220px]"
                  data-figma-node="6:268"
                >
                  <span className="relative z-10">Contact Us Today</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-400 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
                <Link
                  href="mailto:hello@zeecom.com"
                  className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 font-poppins text-sm font-semibold text-ink-primary transition-all hover:border-red-500/40 hover:bg-white/10 sm:w-auto sm:min-w-[220px]"
                  data-figma-node="6:271"
                >
                  Email Us
                </Link>
              </div>
            </div>
          </EliteCard>
        </YoutubeSectionReveal>
      </SiteContainer>
    </section>
  );
}
