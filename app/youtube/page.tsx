import { PageShell } from "@/components/layout/SiteContainer";
import {
  YoutubeAnalyticsSection,
  YoutubeCtaSection,
  YoutubeHeroSection,
  YoutubePipelineSection,
  YoutubeReviewsSection,
  YoutubeTickerSection,
  YOUTUBE_FRAME_NODE,
  YOUTUBE_PAGE_NODE,
} from "@/components/pages/youtube";

import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("youtube");

/**
 * YouTube page — Figma section 6:280 / frame 6:181
 * Accent: red-600 (#DC2626 — Figma fill_52GLPR / ts2)
 */
export default function YoutubePage() {
  return (
    <PageShell className="bg-transparent" data-figma-node={YOUTUBE_PAGE_NODE}>
      <div data-figma-node={YOUTUBE_FRAME_NODE}>
        <YoutubeHeroSection />
        <YoutubeTickerSection />
        <YoutubePipelineSection />
        <YoutubeAnalyticsSection />
        <YoutubeReviewsSection />
        <YoutubeCtaSection />
      </div>
    </PageShell>
  );
}
