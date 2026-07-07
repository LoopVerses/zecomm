"use client";

import Link from "next/link";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { COMPANY_OFFICES, getOfficeLines, getOfficeMapsUrl } from "@/lib/company-info";
import { FOOTER_COMPANY_LINKS, FOOTER_SERVICE_LINKS } from "@/lib/nav-links";

const FIGMA_NODE_ID = "6:112";

export default function Footer() {
  return (
    <footer
      className="w-full overflow-x-clip border-t border-white/8 bg-surface-base py-12 lg:py-16"
      data-header-surface="dark"
      data-figma-node={FIGMA_NODE_ID}
    >
      <SiteContainer>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="font-display text-lg font-bold text-ink-primary">Zeecom Automations</p>
            <p className="mt-2 max-w-sm font-poppins text-sm leading-relaxed text-ink-secondary">
              Zero effort e-commerce automations and AI-powered systems. We build the backend so your
              business can grow on autopilot.
            </p>
            <Link
              href="/services"
              className="mt-5 inline-flex h-10 items-center rounded-xl bg-accent-violet px-5 font-poppins text-sm font-semibold text-white shadow-glow transition-all hover:scale-[1.02]"
            >
              View all services
            </Link>
            <div className="mt-6 space-y-5">
              {COMPANY_OFFICES.map((office) => (
                <address key={office.label} className="not-italic">
                  <p className="font-poppins text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    {office.label}
                  </p>
                  <a
                    href={getOfficeMapsUrl(office)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block font-poppins text-sm leading-relaxed text-ink-secondary transition-colors hover:text-accent-violet"
                  >
                    {getOfficeLines(office).map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </a>
                </address>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <p className="font-poppins text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Services
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {FOOTER_SERVICE_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-poppins text-sm text-ink-secondary transition-colors hover:text-accent-violet"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="font-poppins text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Company
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {FOOTER_COMPANY_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-poppins text-sm text-ink-secondary transition-colors hover:text-accent-violet"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
          <p className="font-poppins text-xs text-ink-muted">© 2026 Zeecom Automations. All rights reserved.</p>
          <div className="flex gap-4">
            {["LinkedIn", "Twitter", "GitHub"].map((label) => (
              <a
                key={label}
                href="#"
                className="font-poppins text-xs text-ink-muted transition-colors hover:text-accent-violet"
                aria-label={label}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </SiteContainer>
    </footer>
  );
}

export { FIGMA_NODE_ID as FOOTER_FIGMA_NODE_ID };
