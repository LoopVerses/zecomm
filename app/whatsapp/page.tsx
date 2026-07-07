import { PageShell } from "@/components/layout/SiteContainer";
import {
  WhatsappHeroSection,
  WhatsappRecoverySection,
  WHATSAPP_FRAME_NODE,
  WHATSAPP_PAGE_NODE,
} from "@/components/pages/whatsapp";

import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("whatsapp");

/**
 * WhatsApp page — Figma section 6:886 / frame 6:795
 * Accent: green-500 (#22C55E — Figma fill_OLUIL5)
 */
export default function WhatsappPage() {
  return (
    <PageShell className="bg-surface-base" data-figma-node={WHATSAPP_PAGE_NODE}>
      <div data-figma-node={WHATSAPP_FRAME_NODE}>
        <WhatsappHeroSection />
        <WhatsappRecoverySection />
      </div>
    </PageShell>
  );
}
