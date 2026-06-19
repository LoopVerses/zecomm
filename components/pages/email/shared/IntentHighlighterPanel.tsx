"use client";

import { useEffect, useRef, useState } from "react";

const BODY_PARTS = [
  { text: "We are looking to scale our ", plain: true },
  { text: "fulfillment to 50k units", plain: false, color: "#059669", label: "High-Ticket Lead" },
  { text: " per month and need a partner who can handle enterprise-level logistics. Our current vendor is ", plain: true },
  { text: "failing on SLA targets", plain: false, color: "#C2410C", label: "Urgency Signal" },
  { text: ". Can we schedule a call this week to discuss ", plain: true },
  { text: "pricing and onboarding", plain: false, color: "#7C3AED", label: "Intent: Purchase" },
  { text: " timeline?", plain: true },
] as const;

export function IntentHighlighterPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [activePart, setActivePart] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActivePart((p) => (p % 3) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [isInView]);

  const highlightedLabels = BODY_PARTS.filter((p) => !p.plain && "label" in p);

  return (
    <div ref={ref} className="relative overflow-hidden border-2 border-stone-300 bg-white" data-figma-node="6:630">
      <div className="flex items-center justify-between border-b border-stone-200 bg-[#FAF8F5] px-5 py-4">
        <div>
          <p className="font-poppins text-[9px] font-bold uppercase tracking-wider text-violet-800">
            Intent Highlighter
          </p>
          <p className="font-poppins text-xs text-stone-500">sarah@apex.io · Re: Fulfillment scale</p>
        </div>
        <span className="border border-orange-200 bg-orange-50 px-2 py-1 font-poppins text-[8px] font-bold uppercase text-orange-700">
          Scanning
        </span>
      </div>

      <div className="relative overflow-hidden px-5 py-6">
        {isInView && (
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <div className="email-scan-beam absolute inset-y-4 w-1/4 bg-gradient-to-r from-transparent via-violet-400/20 to-transparent" />
          </div>
        )}

        <p className="relative font-poppins text-sm leading-[1.85] text-stone-700">
          {BODY_PARTS.map((part, i) => {
            if (part.plain) return <span key={i}>{part.text}</span>;
            const partIdx = highlightedLabels.findIndex((h) => h.label === part.label) + 1;
            const isActive = activePart === partIdx;
            return (
              <span
                key={i}
                className="transition-colors duration-300"
                style={{
                  backgroundColor: isActive ? `${part.color}33` : `${part.color}15`,
                  color: isActive ? part.color : undefined,
                  fontWeight: isActive ? 600 : 500,
                }}
              >
                {part.text}
              </span>
            );
          })}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {highlightedLabels.map((hl, i) => (
            <span
              key={hl.label}
              className="border px-2.5 py-1 font-poppins text-[8px] font-bold uppercase transition-all duration-300"
              style={{
                borderColor: hl.color,
                color: hl.color,
                backgroundColor: activePart === i + 1 ? `${hl.color}18` : "transparent",
                transform: activePart === i + 1 ? "scale(1.04)" : "scale(1)",
              }}
            >
              {hl.label}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-stone-200 bg-[#FAF8F5] px-5 py-4">
        <div className="flex items-center justify-between">
          <span className="font-poppins text-[9px] font-bold uppercase text-stone-400">Draft confidence</span>
          <span className="font-poppins text-sm font-extrabold text-violet-700">99.7%</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden bg-stone-200">
          <div
            className={`h-full bg-violet-600 transition-[width] duration-1000 ease-out ${isInView ? "w-[99.7%]" : "w-0"}`}
          />
        </div>
      </div>
    </div>
  );
}
