"use client";

export const TICKER_FIGMA_NODE = "6:4";

const TICKER_ITEMS = [
  "E-Commerce hub deployed for Apex Retail",
  "$42,400 recovered from abandoned carts",
  "WhatsApp agent resolved 4,209 queries in under 1 second",
  "Market intel found 14 competitor gaps",
] as const;

export default function RealtimeTickerSection() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section
      className="w-full overflow-hidden border-y border-gray-200 bg-white py-3"
      data-header-surface="light"
      data-figma-node={TICKER_FIGMA_NODE}
      aria-label="Recent results"
    >
      <div className="landing-ticker-scroll flex w-max items-center gap-8">
        {doubled.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-2 whitespace-nowrap font-poppins text-xs text-gray-600"
          >
            <span className="h-1 w-1 rounded-full bg-brand-blue" aria-hidden />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
