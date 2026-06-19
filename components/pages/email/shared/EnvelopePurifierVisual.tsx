"use client";

import { memo, useEffect, useState } from "react";
import { EMAIL_PLUM } from "@/lib/email-theme";

const MAILS = [
  {
    from: "Sarah Chen",
    email: "sarah@apex.io",
    subject: "Scale fulfillment to 50k units",
    preview: "Enterprise logistics partner needed for Q3 ramp...",
    time: "2m",
    tag: "Lead",
    tagColor: "#059669",
    folder: "Priority",
    folderIdx: 1,
    intent: 98,
    draft: "Thanks Sarah — happy to discuss 50k scale next week.",
    unread: true,
  },
  {
    from: "Support Desk",
    email: "support@client.com",
    subject: "Package arrived damaged — urgent",
    preview: "SLA breach on shipment #8842. Need replacement today.",
    time: "5m",
    tag: "Crisis",
    tagColor: "#C2410C",
    folder: "Drafts",
    folderIdx: 2,
    intent: 96,
    draft: "We're issuing a replacement shipment within 24 hours.",
    unread: true,
  },
  {
    from: "Agency Co",
    email: "partner@agency.co",
    subject: "White-label partnership proposal",
    preview: "Interested in white-label integration for our Q3 clients.",
    time: "12m",
    tag: "Collab",
    tagColor: "#7C3AED",
    folder: "Priority",
    folderIdx: 1,
    intent: 91,
    draft: "Let's schedule a partnership call for Thursday.",
    unread: false,
  },
  {
    from: "Promo Mail",
    email: "newsletter@spam.net",
    subject: "You've won a free iPhone!!!",
    preview: "Click here to claim your prize now!!!",
    time: "1m",
    tag: "Spam",
    tagColor: "#78716C",
    folder: "Purged",
    folderIdx: 3,
    intent: 8,
    draft: "",
    unread: false,
  },
] as const;

const FOLDERS = [
  { label: "Inbox", count: 24, icon: "fas fa-inbox" },
  { label: "Priority", count: 12, icon: "fas fa-star" },
  { label: "Drafts", count: 8, icon: "fas fa-pen" },
  { label: "Purged", count: 847, icon: "fas fa-trash-alt" },
] as const;

const CYCLE_MS = 4000;

export const EnvelopePurifierVisual = memo(function EnvelopePurifierVisual() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [scanKey, setScanKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((i) => (i + 1) % MAILS.length);
      setScanKey((k) => k + 1);
    }, CYCLE_MS);
    return () => clearInterval(interval);
  }, []);

  const mail = MAILS[activeIdx];

  return (
    <div className="mx-auto w-full max-w-[620px]">
      <div className="overflow-hidden rounded-xl border border-stone-200/90 bg-white shadow-[0_12px_40px_rgba(46,16,101,0.08)]">
        {/* Toolbar */}
        <div className="flex items-center justify-between border-b border-stone-100 bg-stone-50/80 px-4 py-2.5">
          <div className="flex items-center gap-2.5">
            <div
              className="flex h-7 w-7 items-center justify-center rounded-md text-white"
              style={{ backgroundColor: EMAIL_PLUM }}
            >
              <i className="fas fa-envelope text-[10px]" aria-hidden />
            </div>
            <div>
              <p className="font-poppins text-[11px] font-semibold text-stone-800">Unit 06 Mail</p>
              <p className="font-poppins text-[9px] text-stone-400">Inbox Purifier</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-1.5 sm:flex">
              {["fa-reply", "fa-archive", "fa-flag"].map((icon) => (
                <span
                  key={icon}
                  className="flex h-6 w-6 items-center justify-center rounded text-stone-400"
                  aria-hidden
                >
                  <i className={`fas ${icon} text-[10px]`} />
                </span>
              ))}
            </div>
            <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5">
              <span className="email-pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="font-poppins text-[8px] font-semibold text-emerald-700">Live</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[168px_1fr]">
          {/* Folder sidebar */}
          <div className="border-b border-stone-100 bg-stone-50/50 p-2 sm:border-b-0 sm:border-r">
            {FOLDERS.map((folder, i) => (
              <div
                key={folder.label}
                className={`mb-0.5 flex items-center gap-2 rounded-md px-2.5 py-2 transition-colors duration-300 ${
                  mail.folderIdx === i ? "bg-white shadow-sm" : "text-stone-500"
                }`}
              >
                <i className={`${folder.icon} w-3 text-[10px]`} style={{ color: mail.folderIdx === i ? EMAIL_PLUM : undefined }} aria-hidden />
                <span className="flex-1 font-poppins text-[10px] font-medium">{folder.label}</span>
                <span className="font-poppins text-[9px] font-semibold text-stone-400">{folder.count}</span>
              </div>
            ))}
          </div>

          {/* Mail list + detail */}
          <div className="flex min-h-0 flex-col">
            {/* Compact list */}
            <div className="border-b border-stone-100 p-2">
              <div className="space-y-0.5">
                {MAILS.map((m, i) => (
                  <div
                    key={m.email}
                    className={`flex cursor-default items-start gap-2 rounded-md px-2 py-1.5 transition-all duration-300 ${
                      i === activeIdx ? "bg-violet-50 ring-1 ring-violet-100" : "hover:bg-stone-50"
                    }`}
                  >
                    {m.unread ? (
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-600" />
                    ) : (
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0" />
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="truncate font-poppins text-[10px] font-semibold text-stone-800">{m.from}</p>
                        <span className="shrink-0 font-poppins text-[8px] text-stone-400">{m.time}</span>
                      </div>
                      <p className="truncate font-poppins text-[9px] text-stone-600">{m.subject}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active mail detail — center focus */}
            <div key={activeIdx} className="email-fade-in p-3.5">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-poppins text-[11px] font-semibold text-stone-900">{mail.from}</p>
                  <p className="font-poppins text-[9px] text-stone-400">{mail.email}</p>
                </div>
                <span
                  className="shrink-0 rounded px-1.5 py-0.5 font-poppins text-[8px] font-bold uppercase"
                  style={{ color: mail.tagColor, backgroundColor: `${mail.tagColor}12` }}
                >
                  {mail.tag}
                </span>
              </div>

              <p className="mt-2 font-poppins text-xs font-semibold text-stone-800">{mail.subject}</p>
              <p className="mt-1.5 font-poppins text-[10px] leading-relaxed text-stone-500">{mail.preview}</p>

              {/* Mail features row */}
              <div className="mt-3 flex flex-wrap items-center gap-1.5">
                <FeaturePill icon="fa-brain" label={`Intent ${mail.intent}%`} />
                <FeaturePill icon="fa-bolt" label="0.1s scan" />
                {mail.draft && <FeaturePill icon="fa-magic" label="Draft ready" accent />}
                <FeaturePill icon="fa-route" label={`→ ${mail.folder}`} />
              </div>

              {/* Auto-draft preview */}
              {mail.draft && (
                <div className="mt-2.5 rounded-md border border-violet-100 bg-violet-50/60 px-2.5 py-2">
                  <p className="font-poppins text-[8px] font-bold uppercase tracking-wider text-violet-600">
                    Auto-draft
                  </p>
                  <p className="mt-0.5 font-poppins text-[10px] italic leading-snug text-stone-600">
                    &ldquo;{mail.draft}&rdquo;
                  </p>
                </div>
              )}

              {/* Scan bar */}
              <div className="mt-3">
                <div className="mb-1 flex justify-between font-poppins text-[8px] font-medium text-stone-400">
                  <span>Processing</span>
                  <span>99.7%</span>
                </div>
                <div className="h-1 overflow-hidden rounded-full bg-stone-100">
                  <div
                    key={scanKey}
                    className="email-scan-progress h-full rounded-full"
                    style={{ backgroundColor: mail.tagColor }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between border-t border-stone-100 bg-stone-50/60 px-3 py-2">
          <span className="font-poppins text-[8px] text-stone-400">
            Routed to <span className="font-semibold text-stone-600">{mail.folder}</span>
          </span>
          <div className="flex items-center gap-3 font-poppins text-[8px] text-stone-400">
            <span>42,801/day</span>
            <span className="text-stone-200">|</span>
            <span className="text-emerald-600">Neural tone on</span>
          </div>
        </div>
      </div>
    </div>
  );
});

function FeaturePill({
  icon,
  label,
  accent,
}: {
  icon: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-poppins text-[8px] font-medium ${
        accent ? "bg-violet-100 text-violet-700" : "bg-stone-100 text-stone-600"
      }`}
    >
      <i className={`fas ${icon} text-[7px]`} aria-hidden />
      {label}
    </span>
  );
}
