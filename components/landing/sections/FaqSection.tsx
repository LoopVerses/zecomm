"use client";

import { useState } from "react";
import { SiteContainer } from "@/components/layout/SiteContainer";

export const FAQ_NODE = "6:240";

const FAQS = [
  {
    q: "Do I need to use all 8 services?",
    a: "No. Pick only what your business needs. Many customers start with one tool, like WhatsApp or Email, and add more later.",
  },
  {
    q: "Is it hard to set up?",
    a: "Each service has its own setup page with clear steps. Most teams are live within a day. No coding required.",
  },
  {
    q: "Can the AI match my brand voice?",
    a: "Yes. Chat, email, and voice tools learn your tone from examples and guidelines you provide during setup.",
  },
  {
    q: "What if I need help?",
    a: "Every service page includes detailed info and examples. You can also reach out through our contact options in the footer.",
  },
  {
    q: "Is my data secure?",
    a: "We process data only to run your automations. Your inbox, chats, and store data stay under your control.",
  },
] as const;

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="w-full bg-white py-16 sm:py-20"
      data-header-surface="light"
      data-figma-node={FAQ_NODE}
    >
      <SiteContainer>
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h2 className="font-poppins text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-gray-900">
              Common questions
            </h2>
            <p className="mt-3 font-poppins text-base text-gray-500">
              Quick answers before you get started.
            </p>
          </div>

          <div className="mt-10 divide-y divide-gray-200 rounded-2xl border border-gray-200">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-gray-50"
                    aria-expanded={isOpen}
                  >
                    <span className="font-poppins text-sm font-semibold text-gray-900">{faq.q}</span>
                    <i
                      className={`fas fa-chevron-down shrink-0 text-xs text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4">
                      <p className="font-poppins text-sm leading-relaxed text-gray-500">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
