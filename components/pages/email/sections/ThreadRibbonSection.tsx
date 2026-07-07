"use client";

import { EMAIL_SECTIONS } from "@/lib/email-tokens";

type ThreadItem = {
  from: string;
  subject: string;
  time: string;
  priority: boolean;
  purged?: boolean;
};

const THREADS: ThreadItem[] = [
  { from: "sarah@apex.io", subject: "Scale fulfillment to 50k units", time: "2m", priority: true },
  { from: "support@client.com", subject: "Package arrived damaged — urgent", time: "5m", priority: true },
  { from: "partner@agency.co", subject: "White-label partnership proposal", time: "12m", priority: false },
  { from: "billing@vendor.net", subject: "Invoice #8842 — payment due", time: "18m", priority: false },
  { from: "newsletter@spam.net", subject: "You've won a free iPhone!!!", time: "1m", priority: false, purged: true },
  { from: "ops@apex.io", subject: "Q3 contract renewal — $12k", time: "34m", priority: true },
];

function ThreadColumn({ items, direction }: { items: ThreadItem[]; direction: "up" | "down" }) {
  const doubled = [...items, ...items];

  return (
    <div className="relative h-[120px] overflow-hidden">
      <div
        className={`flex flex-col gap-2 ${direction === "up" ? "email-thread-scroll-up" : "email-thread-scroll-down"}`}
      >
        {doubled.map((thread, i) => (
          <div
            key={`${thread.from}-${i}`}
            className={`flex items-center gap-3 border-l-2 bg-white/[0.03] px-3 py-2 ${
              thread.purged
                ? "border-white/20 opacity-40 line-through"
                : thread.priority
                  ? "border-orange-500"
                  : "border-accent-violet/50"
            }`}
          >
            {thread.priority && !thread.purged && (
              <span className="zc-live-dot h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
            )}
            <div className="min-w-0 flex-1">
              <p className="truncate font-poppins text-[10px] font-semibold text-ink-primary">{thread.subject}</p>
              <p className="truncate font-poppins text-[8px] text-ink-muted">{thread.from}</p>
            </div>
            <span className="shrink-0 font-mono text-[8px] text-orange-400/80">{thread.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ThreadRibbonSection() {
  const col1 = THREADS.filter((_, i) => i % 2 === 0);
  const col2 = THREADS.filter((_, i) => i % 2 === 1);

  return (
    <section
      className="relative overflow-x-clip overflow-hidden border-y border-white/10 bg-surface-base"
      data-header-surface="dark"
      data-figma-node={EMAIL_SECTIONS.ribbon}
      aria-label="Live email thread ribbon"
    >
      <div className="flex flex-col lg:flex-row">
        <div className="flex shrink-0 flex-col justify-center gap-1 border-b border-white/10 bg-surface-raised px-6 py-4 lg:w-44 lg:border-b-0 lg:border-r">
          <p className="font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-orange-400">
            Thread feed
          </p>
          <p className="font-poppins text-sm font-bold text-ink-primary">Live stream</p>
        </div>

        <div className="grid min-w-0 flex-1 grid-cols-1 sm:grid-cols-2">
          <ThreadColumn items={col1} direction="up" />
          <ThreadColumn items={col2} direction="down" />
        </div>

        <div className="hidden shrink-0 flex-col justify-center gap-2 border-l border-white/10 px-4 py-3 xl:flex">
          {["Intent locked", "Draft ready", "Spam purged", "Lead flagged"].map((label) => (
            <span
              key={label}
              className="whitespace-nowrap rounded-md border border-orange-500/25 bg-orange-500/10 px-2.5 py-1 font-poppins text-[8px] font-bold uppercase tracking-wider text-orange-400"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
