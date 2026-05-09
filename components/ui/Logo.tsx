import Link from "next/link";

type LogoProps = {
  variant?: "full" | "compact" | "mark";
  href?: string;
  className?: string;
};

export function Logo({ variant = "full", href = "/", className = "" }: LogoProps) {
  const content = (
    <span className={`inline-flex flex-col items-start leading-none ${className}`}>
      <span
        className="font-display text-white"
        style={{
          fontStyle: "italic",
          fontWeight: 500,
          fontSize: variant === "compact" ? "1.5rem" : "1.75rem",
          letterSpacing: "var(--tracking-tight)",
          lineHeight: 1,
        }}
      >
        Elite<span style={{ color: "var(--color-gold-300)" }}>.</span>
      </span>
      {variant !== "compact" && (
        <span
          className="text-[color:var(--color-ink-muted)] mt-1.5"
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            fontWeight: 500,
            fontSize: "0.6875rem",
            letterSpacing: "var(--tracking-widest)",
            textTransform: "uppercase",
          }}
        >
          Barbershop · Laval
        </span>
      )}
    </span>
  );

  if (variant === "mark") {
    return (
      <Link href={href} aria-label="Elite Barbershop" className="inline-flex">
        <span
          className="font-display text-white"
          style={{
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: "1.5rem",
            letterSpacing: "var(--tracking-tight)",
          }}
        >
          E<span style={{ color: "var(--color-gold-300)" }}>.</span>
        </span>
      </Link>
    );
  }

  return (
    <Link href={href} aria-label="Elite Barbershop" className="inline-flex">
      {content}
    </Link>
  );
}
