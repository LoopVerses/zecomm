import { PageShell } from "@/components/layout/SiteContainer";
import {
  EcomFinalCtaSection,
  EcomHeroSection,
  EcomModelsSection,
  EcomPlatformsSection,
  EcomProcessSection,
  EcomReviewsSection,
  EcomServicesSection,
  EcomWhySection,
  ECOM_FRAME_NODE,
  ECOM_PAGE_NODE,
} from "@/components/pages/ecom";

import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("ecom");

export default function EcomPage() {
  return (
    <PageShell className="bg-transparent" data-figma-node={ECOM_PAGE_NODE}>
      <div data-figma-node={ECOM_FRAME_NODE}>
        <EcomHeroSection />
        <EcomWhySection />
        <EcomServicesSection />
        <EcomPlatformsSection />
        <EcomProcessSection />
        <EcomModelsSection />
        <EcomReviewsSection />
        <EcomFinalCtaSection />
      </div>
    </PageShell>
  );
}
