import { PageShell } from "@/components/layout/SiteContainer";
import {
  MarketIntelCtaSection,
  MarketIntelGapSection,
  MarketIntelHeroSection,
  MarketIntelReconSection,
  MarketIntelReviewsSection,
  MarketIntelSignalMarquee,
  MARKET_INTEL_FRAME_NODE,
  MARKET_INTEL_PAGE_NODE,
} from "@/components/pages/market-intel";

import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("marketIntel");

/**
 * Market Intel page — Figma section 6:957 / frame 6:890
 * Accent: emerald recon / surveillance theme
 */
export default function MarketIntelPage() {
  return (
    <PageShell className="bg-transparent" data-figma-node={MARKET_INTEL_PAGE_NODE}>
      <div data-figma-node={MARKET_INTEL_FRAME_NODE}>
        <MarketIntelHeroSection />
        <MarketIntelSignalMarquee />
        <MarketIntelReconSection />
        <MarketIntelGapSection />
        <MarketIntelReviewsSection />
        <MarketIntelCtaSection />
      </div>
    </PageShell>
  );
}
