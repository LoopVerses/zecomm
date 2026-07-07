import { PageShell } from "@/components/layout/SiteContainer";
import {
  ChatAgentAnalyticsSection,
  ChatAgentCtaSection,
  ChatAgentHeroSection,
  ChatAgentLogicFeedSection,
  ChatAgentReviewsSection,
  ChatAgentCloserMarquee,
  CHAT_AGENT_FRAME_NODE,
  CHAT_AGENT_PAGE_NODE,
} from "@/components/pages/chat-agent";

import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("chatAgent");

/**
 * Chat Agent page — Figma section 6:387 / frame 6:281
 * Accent: brand-blue (#1C33BF — Figma fill_6RGSFX / ts5)
 */
export default function ChatAgentPage() {
  return (
    <PageShell className="bg-surface-base" data-figma-node={CHAT_AGENT_PAGE_NODE}>
      <div data-figma-node={CHAT_AGENT_FRAME_NODE}>
        <ChatAgentHeroSection />
        <ChatAgentCloserMarquee />
        <ChatAgentLogicFeedSection />
        <ChatAgentAnalyticsSection />
        <ChatAgentReviewsSection />
        <ChatAgentCtaSection />
      </div>
    </PageShell>
  );
}
