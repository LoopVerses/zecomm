import { PageShell } from "@/components/layout/SiteContainer";
import {
  YoutubeAboutSection,
  YoutubeCtaSection,
  YoutubeHeroSection,
  YoutubePipelineSection,
  YoutubeReviewsSection,
  YoutubeServicesSection,
  YoutubeTickerSection,
  YoutubeWhySection,
  YOUTUBE_FRAME_NODE,
  YOUTUBE_PAGE_NODE,
} from "@/components/pages/youtube";

import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("youtube");

export default function YoutubePage() {
  return (
    <PageShell className="bg-transparent" data-figma-node={YOUTUBE_PAGE_NODE}>
      <div data-figma-node={YOUTUBE_FRAME_NODE}>
        <YoutubeHeroSection />
        <YoutubeTickerSection />
        <YoutubeAboutSection />
        <YoutubeServicesSection />
        <YoutubePipelineSection />
        <YoutubeWhySection />
        <YoutubeReviewsSection />
        <YoutubeCtaSection />
      </div>
    </PageShell>
  );
}
