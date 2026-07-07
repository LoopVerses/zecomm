import { PageShell } from "@/components/layout/SiteContainer";
import {
  VoiceCloneCtaSection,
  VoiceCloneHeroSection,
  VoiceCloneReviewsSection,
  VoiceCloneSpecsSection,
  VoiceCloneTelemetrySection,
  VoiceStreamMarquee,
  VOICE_CLONE_FRAME_NODE,
  VOICE_CLONE_PAGE_NODE,
} from "@/components/pages/voice-clone";

import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("voiceClone");

/**
 * Voice Clone page — Figma section 6:792 / frame 6:701
 * Accent: orange/violet sonic studio theme
 */
export default function VoiceClonePage() {
  return (
    <PageShell className="bg-surface-base" data-figma-node={VOICE_CLONE_PAGE_NODE}>
      <div data-figma-node={VOICE_CLONE_FRAME_NODE}>
        <VoiceCloneHeroSection />
        <VoiceStreamMarquee />
        <VoiceCloneSpecsSection />
        <VoiceCloneTelemetrySection />
        <VoiceCloneReviewsSection />
        <VoiceCloneCtaSection />
      </div>
    </PageShell>
  );
}
