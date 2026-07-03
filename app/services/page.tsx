import { PageShell } from "@/components/layout/SiteContainer";
import {
  ServicesContactSection,
  ServicesGridSection,
  ServicesHeroSection,
  ServicesPlatformsSection,
} from "@/components/pages/services";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("services");

export default function ServicesPage() {
  return (
    <PageShell>
      <ServicesHeroSection />
      <ServicesGridSection />
      <ServicesPlatformsSection />
      <ServicesContactSection />
    </PageShell>
  );
}
