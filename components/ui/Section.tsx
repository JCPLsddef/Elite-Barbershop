import { forwardRef } from "react";

type SectionProps = {
  as?: "section" | "div" | "article" | "header" | "footer" | "main";
  rhythm?: "sm" | "md" | "lg" | "xl" | "none";
  container?: "narrow" | "default" | "wide" | "full";
  textured?: boolean;
  goldMesh?: boolean;
  surface?: "0" | "1" | "2" | "3" | "4";
  children: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabel?: string;
};

const rhythmMap = {
  sm: "py-[var(--spacing-section-sm)]",
  md: "py-[var(--spacing-section-md)]",
  lg: "py-[var(--spacing-section-lg)]",
  xl: "py-[var(--spacing-section-xl)]",
  none: "",
} as const;

const containerMap = {
  narrow: "max-w-[var(--container-narrow)]",
  default: "max-w-[var(--container-default)]",
  wide: "max-w-[var(--container-wide)]",
  full: "max-w-none",
} as const;

const surfaceMap = {
  "0": "bg-[color:var(--color-surface-0)]",
  "1": "bg-[color:var(--color-surface-1)]",
  "2": "bg-[color:var(--color-surface-2)]",
  "3": "bg-[color:var(--color-surface-3)]",
  "4": "bg-[color:var(--color-surface-4)]",
} as const;

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  {
    as = "section",
    rhythm = "lg",
    container = "default",
    textured = false,
    goldMesh = false,
    surface,
    children,
    className = "",
    id,
    ariaLabel,
  },
  ref
) {
  const Tag = as as "section";
  const wrapperClasses = [
    "relative",
    rhythmMap[rhythm],
    surface ? surfaceMap[surface] : "",
    textured ? "section-textured" : "",
    goldMesh ? "gold-mesh" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref}
      id={id}
      aria-label={ariaLabel}
      className={wrapperClasses}
    >
      <div
        className={`relative mx-auto ${containerMap[container]} px-6 md:px-10 lg:px-14`}
      >
        {children}
      </div>
    </Tag>
  );
});
