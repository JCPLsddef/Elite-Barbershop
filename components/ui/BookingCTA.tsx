import { BUSINESS } from "@/lib/constants";

type BookingCTAProps = {
  variant?: "primary" | "ghost" | "compact" | "pill";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  className?: string;
};

export function BookingCTA({
  variant = "primary",
  size = "md",
  children,
  className = "",
}: BookingCTAProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-[11px]",
    md: "px-7 py-3.5 text-xs",
    lg: "px-10 py-5 text-sm",
  } as const;

  const pillSizeClasses = {
    sm: "px-7 py-3 text-xs",
    md: "px-8 py-3.5 text-sm",
    lg: "px-10 py-4 text-sm",
  } as const;

  const variantClasses = {
    primary: "cta-gold",
    ghost:
      "border border-[color:var(--color-gold-400)] text-[color:var(--color-gold-200)] hover:bg-[color:var(--color-gold-500)] hover:text-black hover:border-[color:var(--color-gold-500)] transition-all duration-400",
    compact:
      "bg-transparent text-[color:var(--color-gold-200)] hover:text-[color:var(--color-gold-50)] underline-offset-4 hover:underline transition-colors duration-300",
    pill: "cta-gold-pill",
  } as const;

  const finalSize = variant === "pill" ? pillSizeClasses[size] : sizeClasses[size];

  return (
    <a
      href={BUSINESS.booking.url}
      target="_blank"
      rel="noopener noreferrer"
      data-track="booking_cta"
      data-variant={variant}
      className={`inline-flex items-center justify-center font-semibold uppercase ${finalSize} ${variantClasses[variant]} ${className}`}
      style={{
        letterSpacing: variant === "pill" ? "var(--tracking-wider)" : "var(--tracking-widest)",
        fontFamily: "var(--font-body), system-ui, sans-serif",
      }}
    >
      {children ?? "Réserver"}
    </a>
  );
}
