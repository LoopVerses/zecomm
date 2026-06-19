import { PageShell } from "@/components/layout/SiteContainer";
import {
  EmailCtaSection,
  EmailHeroSection,
  EmailReviewsSection,
  EmailTelemetrySection,
  EmailTriageSection,
  ThreadRibbonSection,
  EMAIL_FRAME_NODE,
  EMAIL_PAGE_NODE,
} from "@/components/pages/email";

import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("email");

/**
 * Email page — Inbox Purifier
 * Identity: warm parchment editorial + plum/violet + terracotta
 */
export default function EmailPage() {
  return (
    <PageShell className="bg-transparent" data-figma-node={EMAIL_PAGE_NODE}>
      <div data-figma-node={EMAIL_FRAME_NODE}>
        <EmailHeroSection />
        <ThreadRibbonSection />
        <EmailTriageSection />
        <EmailTelemetrySection />
        <EmailReviewsSection />
        <EmailCtaSection />
      </div>
    </PageShell>
  );
}
