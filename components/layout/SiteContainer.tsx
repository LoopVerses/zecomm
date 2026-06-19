import type { ElementType, ReactNode } from "react";

/** Figma content width — 1280px inner container; responsive horizontal padding */
const SITE_CONTAINER_CLASS = "mx-auto w-full max-w-site px-4 sm:px-6 lg:px-8";

type SiteContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export function SiteContainer({
  children,
  className = "",
  as: Tag = "div",
}: SiteContainerProps) {
  return (
    <Tag className={`${SITE_CONTAINER_CLASS} ${className}`.trim()}>
      {children}
    </Tag>
  );
}

/** Figma artboard max width — 1920px centered on ultra-wide screens */
export function PageShell({
  children,
  className = "",
  ...props
}: {
  children: ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`mx-auto w-full max-w-page overflow-x-hidden ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}

export { SITE_CONTAINER_CLASS };
