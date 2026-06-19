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
    description: "Manage inventory, recover carts, and scale conversions automatically.",
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
    figmaNode: "6:27",
    title: "WhatsApp Agent",
    description: "Instant replies, cart recovery, and customer support on WhatsApp.",
    href: "/whatsapp",
    badge: "98% open rate",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.92 1.786c-.082.095-.08.236.005.329a.21.21 0 00.156.06c.05 0 .1-.016.143-.048a10.422 10.422 0 002.834-1.63c.273-.122.585-.111.85.03A8.86 8.86 0 0012 20.25z" />
      </svg>
    ),
  },
  {
    figmaNode: "6:34",
    title: "YouTube Factory",
    description: "Schedule content, optimize for the algorithm, and grow your channel.",
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
  {
    figmaNode: "6:41",
    title: "Chat Closer",
    description: "On-site AI chat that handles sales questions and closes deals.",
    href: "/chat-agent",
    badge: "Sales",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.596.596 0 01-.474-.065.598.598 0 01-.22-.622 4.632 4.632 0 01.422-1.228A9.761 9.761 0 013 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    figmaNode: "6:48",
    title: "Clone Agent",
    description: "Replicate your best rep's style, memory, and workflow into an AI agent.",
    href: "/clone-agent",
    badge: "99.8% match",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    figmaNode: "6:55",
    title: "Market Intel",
    description: "Track competitors, search trends, and market gaps in real time.",
    href: "/market-intel",
    badge: "Research",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
      </svg>
    ),
  },
  {
    figmaNode: "6:62",
    title: "Voice Clone",
    description: "Realistic multi-language voice for sales calls and video content.",
    href: "/voice-clone",
    badge: "Audio",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
  },
  {
    figmaNode: "6:69",
    title: "Email Scanner",
    description: "Sort inbox by intent, auto-draft replies, and never miss a lead.",
    href: "/email",
    badge: "Inbox",
    iconBg: "bg-gray-100",
    iconColor: "text-gray-600",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
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
            Each service works on its own or together. Click any card to see details and get started.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((service, index) => (
            <ServiceCardItem key={service.figmaNode} service={service} index={index} />
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
