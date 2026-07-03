"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { LANDING_BG } from "@/lib/landing-theme";

export const SERVICE_GRID_FIGMA_NODE = "6:10";

type ServiceCard = {
  figmaNode: string;
  title: string;
  description: string;
  href: string;
  badge: string;
  iconBg: string;
  iconColor: string;
  icon: React.ReactNode;
};

const SERVICES: ServiceCard[] = [
  {
    figmaNode: "6:20",
    title: "E-Commerce Automation",
    description: "Manage inventory, recover carts, and scale conversions across every major marketplace.",
    href: "/ecom",
    badge: "Most popular",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    figmaNode: "6:34",
    title: "YouTube Automation",
    description: "Schedule content, optimize for the algorithm, and grow your channel on autopilot.",
    href: "/youtube",
    badge: "Content",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12l-6.75 3.897V8.103L15.75 12z" />
      </svg>
    ),
  },
];

function ServiceCardItem({ service, index }: { service: ServiceCard; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-brand-blue/20 hover:shadow-[0_8px_24px_rgba(28,51,191,0.08)]"
      data-figma-node={service.figmaNode}
    >
      <div className="flex items-start justify-between gap-3">
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${service.iconBg} ${service.iconColor}`}>
          {service.icon}
        </div>
        <span className="rounded-full bg-gray-100 px-2.5 py-0.5 font-poppins text-[10px] font-medium text-gray-500">
          {service.badge}
        </span>
      </div>

      <h3 className="mt-4 font-poppins text-lg font-semibold text-gray-900">{service.title}</h3>
      <p className="mt-2 flex-1 font-poppins text-sm leading-relaxed text-gray-500">{service.description}</p>

      <Link
        href={service.href}
        className="mt-5 inline-flex items-center gap-1 font-poppins text-sm font-semibold text-brand-blue transition-colors group-hover:gap-2"
      >
        Learn more
        <span aria-hidden>→</span>
      </Link>
    </motion.article>
  );
}

export default function ServiceGridSection() {
  return (
    <section
      id="services"
      className="relative w-full py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: LANDING_BG }}
      data-header-surface="light"
      data-figma-node={SERVICE_GRID_FIGMA_NODE}
    >
      <SiteContainer>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-poppins text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-gray-900">
            Choose your tools
          </h2>
          <p className="mt-3 font-poppins text-base text-gray-500">
            Start with our core services or explore the full automation stack on the services page.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mx-auto lg:max-w-3xl">
          {SERVICES.map((service, index) => (
            <ServiceCardItem key={service.figmaNode} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <Link
            href="/services"
            className="inline-flex h-11 items-center rounded-xl border border-gray-200 bg-white px-6 font-poppins text-sm font-semibold text-gray-700 transition-all hover:border-brand-blue/30 hover:text-brand-blue"
          >
            View all services — WhatsApp, Chat, Email & more
          </Link>
        </motion.div>
      </SiteContainer>
    </section>
  );
}
