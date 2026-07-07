import { PageShell } from "@/components/layout/SiteContainer";
import { ContactHeroSection, ContactSection } from "@/components/pages/contact";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("contact");

export default function ContactPage() {
  return (
    <PageShell className="bg-surface-base">
      <ContactHeroSection />
      <ContactSection />
    </PageShell>
  );
}
