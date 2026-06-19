"use client";

import Link from "next/link";
import { SiteContainer } from "@/components/layout/SiteContainer";

const FIGMA_NODE_ID = "6:112";

const MODULE_LINKS = [
  { label: "E-Commerce", href: "/ecom" },
  { label: "WhatsApp", href: "/whatsapp" },
  { label: "YouTube", href: "/youtube" },
  { label: "Market Intel", href: "/market-intel" },
  { label: "Chat Agent", href: "/chat-agent" },
  { label: "Email", href: "/email" },
] as const;

const LEGAL_LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
  { label: "Privacy", href: "/" },
] as const;

export default function Footer() {
  return (
    <footer
      className="w-full border-t border-gray-200 bg-white py-12 lg:py-16"
      data-header-surface="light"
      data-figma-node={FIGMA_NODE_ID}
    >
      <SiteContainer>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="font-poppins text-lg font-bold text-gray-900">Zeecomm</p>
            <p className="mt-2 max-w-sm font-poppins text-sm leading-relaxed text-gray-500">
              AI automation for sales, support, content, and email. Simple tools that work together.
            </p>
            <Link
              href="#services"
              className="mt-5 inline-flex h-10 items-center rounded-lg bg-brand-blue px-5 font-poppins text-sm font-semibold text-white transition-colors hover:bg-brand-blue/90"
            >
              View all services
            </Link>
          </div>

          <div className="lg:col-span-4">
            <p className="font-poppins text-xs font-semibold uppercase tracking-wider text-gray-400">
              Services
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {MODULE_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-poppins text-sm text-gray-600 transition-colors hover:text-brand-blue"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="font-poppins text-xs font-semibold uppercase tracking-wider text-gray-400">
              Company
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {LEGAL_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-poppins text-sm text-gray-600 transition-colors hover:text-brand-blue"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 sm:flex-row">
          <p className="font-poppins text-xs text-gray-400">© 2026 Zeecomm. All rights reserved.</p>
          <div className="flex gap-4">
            {["LinkedIn", "Twitter", "GitHub"].map((label) => (
              <a
                key={label}
                href="#"
                className="font-poppins text-xs text-gray-400 transition-colors hover:text-brand-blue"
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
