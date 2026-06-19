import {
  BenefitsSection,
  FaqSection,
  HeroSection,
  HowItWorksSection,
  LandingCtaSection,
  LANDING_PAGE_FIGMA_NODE,
  RealtimeTickerSection,
  ServiceGridSection,
  StatsSection,
  TestimonialsSection,
} from "@/components/landing";
import { PageShell } from "@/components/layout/SiteContainer";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("home");

/**
 * Landing Page — clean light homepage
 * Hero → Ticker → How it works → Services → Benefits → Stats → Reviews → FAQ → CTA
 */
export default function LandingPage() {
  return (
    <PageShell className="bg-[#FAFBFC]" data-figma-node={LANDING_PAGE_FIGMA_NODE}>
      <HeroSection />
      <RealtimeTickerSection />
      <HowItWorksSection />
      <ServiceGridSection />
      <BenefitsSection />
      <StatsSection />
      <TestimonialsSection />
      <FaqSection />
      <LandingCtaSection />
    </PageShell>
  );
}
