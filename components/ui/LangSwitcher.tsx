"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";

export function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const switchTo = (next: "fr" | "en") => {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  const linkBase =
    "uppercase font-medium transition-colors duration-300";
  const activeStyle = { color: "var(--color-gold-200)" };
  const inactiveStyle = { color: "var(--color-ink-faint)" };

  return (
    <div
      className={`flex items-center gap-3 text-[11px] ${isPending ? "opacity-60" : ""}`}
      style={{
        letterSpacing: "var(--tracking-widest)",
        fontFamily: "var(--font-body), system-ui, sans-serif",
      }}
      aria-label="Language switcher"
    >
      <button
        type="button"
        onClick={() => switchTo("fr")}
        aria-current={locale === "fr" ? "true" : undefined}
        className={`${linkBase} hover:text-[color:var(--color-gold-100)]`}
        style={locale === "fr" ? activeStyle : inactiveStyle}
      >
        FR
      </button>
      <span aria-hidden style={{ color: "var(--color-border-strong)" }}>
        ·
      </span>
      <button
        type="button"
        onClick={() => switchTo("en")}
        aria-current={locale === "en" ? "true" : undefined}
        className={`${linkBase} hover:text-[color:var(--color-gold-100)]`}
        style={locale === "en" ? activeStyle : inactiveStyle}
      >
        EN
      </button>
    </div>
  );
}
