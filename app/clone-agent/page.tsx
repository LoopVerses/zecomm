import { PageShell } from "@/components/layout/SiteContainer";
import {
  CloneAgentCtaSection,
  CloneAgentHeroSection,
  CloneAgentInfoGridSection,
  CloneAgentReviewsSection,
  CloneAgentSyncSection,
  CloneSyncMarquee,
  CLONE_AGENT_FRAME_NODE,
  CLONE_AGENT_PAGE_NODE,
} from "@/components/pages/clone-agent";

import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("cloneAgent");

/**
 * Clone Agent page — Figma section 6:486 / frame 6:394
 * Accent: brand-blue (#1C33BF — Figma fill_6RGSFX / ts5)
 */
export default function CloneAgentPage() {
  return (
    <PageShell className="bg-transparent" data-figma-node={CLONE_AGENT_PAGE_NODE}>
      <div data-figma-node={CLONE_AGENT_FRAME_NODE}>
        <CloneAgentHeroSection />
        <CloneSyncMarquee />
        <CloneAgentSyncSection />
        <CloneAgentInfoGridSection />
        <CloneAgentReviewsSection />
        <CloneAgentCtaSection />
      </div>
    </PageShell>
  );
}
