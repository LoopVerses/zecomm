"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { LANDING_BG } from "@/lib/landing-theme";

export const HERO_FIGMA_NODE = "6:83";

const QUICK_STATS = [
  { value: "8+", label: "Automation tools" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Automation" },
] as const;

const PREVIEW_SERVICES = [
  { name: "E-Commerce", href: "/ecom", color: "bg-blue-50 text-blue-700 border-blue-100" },
  { name: "YouTube", href: "/youtube", color: "bg-rose-50 text-rose-700 border-rose-100" },
  { name: "WhatsApp", href: "/services", color: "bg-emerald-50 text-emerald-700 border-emerald-100" },
  { name: "Chat Agent", href: "/services", color: "bg-indigo-50 text-indigo-700 border-indigo-100" },
  { name: "Email", href: "/services", color: "bg-violet-50 text-violet-700 border-violet-100" },
  { name: "All Services", href: "/services", color: "bg-gray-50 text-gray-700 border-gray-200" },
] as const;

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pb-24"
      style={{ backgroundColor: LANDING_BG }}
      data-header-surface="light"
      data-figma-node={HERO_FIGMA_NODE}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(28,51,191,0.06) 0%, transparent 55%)",
        }}
        aria-hidden
      />

      <SiteContainer className="relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue/5 px-3 py-1 font-poppins text-[11px] font-semibold text-brand-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
              Zero Effort Ecommerce Automations Solutions
            </span>

            <h1 className="mt-5 font-poppins text-[clamp(2.25rem,5.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-gray-900">
              Smart automation for{" "}
              <span className="text-brand-blue">every part</span> of your business
            </h1>

            <p className="mt-5 font-poppins text-base leading-relaxed text-gray-600 sm:text-lg">
              Launch, manage, and scale your online business without handling the daily operations
              yourself. From e-commerce store management to AI-powered systems and YouTube automation,
              we build the backend so your business can grow on autopilot.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#services"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-brand-blue px-8 font-poppins text-sm font-semibold text-white transition-colors hover:bg-brand-blue/90"
              >
                Explore all services
              </Link>
              <Link
                href="/ecom"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-gray-200 bg-white px-8 font-poppins text-sm font-semibold text-gray-700 transition-colors hover:border-brand-blue/30 hover:text-brand-blue"
              >
                Start with E-Commerce
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 border-t border-gray-200 pt-8">
              {QUICK_STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-poppins text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="font-poppins text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Service preview panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div>
                  <p className="font-poppins text-sm font-semibold text-gray-900">Your dashboard</p>
                  <p className="font-poppins text-xs text-gray-500">All services in one place</p>
                </div>
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 font-poppins text-[10px] font-semibold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  All active
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2.5">
                {PREVIEW_SERVICES.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={`rounded-xl border px-3 py-3 font-poppins text-xs font-semibold transition-all hover:shadow-sm ${service.color}`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <div className="mt-4 rounded-xl bg-gray-50 px-4 py-3">
                <p className="font-poppins text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                  Recent activity
                </p>
                <p className="mt-1 font-poppins text-xs text-gray-600">
                  WhatsApp recovered 12 carts · Email triaged 847 messages · YouTube scheduled 3 posts
                </p>
              </div>

              <Link
                href="/services"
                className="mt-4 flex items-center justify-center gap-1 font-poppins text-xs font-semibold text-brand-blue hover:underline"
              >
                View all services
                <span aria-hidden>→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </SiteContainer>
    </section>
  );
}
