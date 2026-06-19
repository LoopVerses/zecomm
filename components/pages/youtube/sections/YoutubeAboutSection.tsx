"use client";

import { SiteContainer } from "@/components/layout/SiteContainer";
import { YOUTUBE_SECTIONS } from "@/lib/youtube-tokens";
import { YoutubeSectionReveal } from "../shared/YoutubeSectionReveal";

export default function YoutubeAboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#0A0A0A] py-16 sm:py-20"
      data-header-surface="dark"
      data-figma-node={YOUTUBE_SECTIONS.about}
    >
      <SiteContainer>
        <YoutubeSectionReveal className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-600/25 bg-red-600/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-red-400">
            Done-for-you automation
          </span>
          <h2 className="font-poppins text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight text-white">
            Complete done-for-you YouTube automation
          </h2>
          <p className="mt-4 font-poppins text-base leading-relaxed text-gray-400">
            Our YouTube automation service is designed for business owners, creators, entrepreneurs,
            and brands who want to grow on YouTube without handling the daily content production
            process.
          </p>
          <p className="mt-4 font-poppins text-base leading-relaxed text-gray-500">
            From planning to publishing, our team takes care of every step needed to keep your channel
            active, optimized, and ready for growth.
          </p>
        </YoutubeSectionReveal>
      </SiteContainer>
    </section>
  );
}
