import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { InstagramIcon, TikTokIcon } from "@/components/ui/SocialIcon";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui/Section";
import { Logo } from "@/components/ui/Logo";
import { BUSINESS, SIGNATURE_QUOTE, FOOTER_TAGLINE } from "@/lib/constants";

export function Footer() {
  const t = useTranslations();
  const locale = useLocale() as "fr" | "en";
  const currentYear = new Date().getFullYear();
  const sig = SIGNATURE_QUOTE[locale];

  return (
    <Section
      as="footer"
      surface="2"
      rhythm="xl"
      container="wide"
      textured
      goldMesh
      ariaLabel="Site footer"
      className="relative mt-0"
    >
      {/* ───── Tension row: signature quote breaks the grid ───── */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20 max-w-5xl">
        <p
          className="font-display text-white text-3xl md:text-4xl lg:text-5xl"
          style={{
            fontStyle: "italic",
            fontWeight: 400,
            letterSpacing: "var(--tracking-tight)",
            lineHeight: 1.1,
          }}
        >
          <span style={{ color: "var(--color-gold-300)" }}>“</span>
          {sig.quote}
          <span style={{ color: "var(--color-gold-300)" }}>”</span>
        </p>
        <p
          className="text-[color:var(--color-ink-muted)] text-xs uppercase whitespace-nowrap"
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            letterSpacing: "var(--tracking-editorial)",
          }}
        >
          — {sig.attribution}
        </p>
      </div>

      <hr className="rule-gold mb-16" />

      {/* ───── 4-col asymmetric grid: brand 5 / visit 3 / contact 2 / connect 2 ───── */}
      <div className="grid grid-cols-2 md:grid-cols-12 gap-y-12 gap-x-8">
        {/* Brand column — wider */}
        <div className="col-span-2 md:col-span-5 flex flex-col gap-6">
          <Logo variant="full" />
          <p
            className="text-[color:var(--color-ink-muted)] text-sm max-w-xs"
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              lineHeight: 1.7,
            }}
          >
            {FOOTER_TAGLINE[locale]}
          </p>
          <p
            className="text-[10px] uppercase text-[color:var(--color-ink-faint)] mt-2"
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              letterSpacing: "var(--tracking-widest)",
            }}
          >
            {t("common.since")} {BUSINESS.foundedYear} · {BUSINESS.ratings.average}★ · {BUSINESS.ratings.count}+ {locale === "fr" ? "avis" : "reviews"}
          </p>
        </div>

        {/* Visit column */}
        <div className="col-span-1 md:col-span-3 flex flex-col gap-5">
          <FooterHeading>{t("footer.visit")}</FooterHeading>
          <FooterRow icon={<MapPin size={14} strokeWidth={1.5} />}>
            <address className="not-italic text-sm leading-[1.7] text-[color:var(--color-ink-secondary)]">
              {BUSINESS.address.street}
              <br />
              {BUSINESS.address.locality}, {BUSINESS.address.region} {BUSINESS.address.postalCode}
            </address>
          </FooterRow>
          <FooterRow icon={<Clock size={14} strokeWidth={1.5} />}>
            <p className="text-sm leading-[1.7] text-[color:var(--color-ink-secondary)]">
              {locale === "fr" ? BUSINESS.hours.fr : BUSINESS.hours.en}
            </p>
          </FooterRow>
          <a
            href={BUSINESS.gbpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-[11px] uppercase text-[color:var(--color-gold-200)] hover:text-[color:var(--color-gold-50)] transition-colors duration-300 mt-1"
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              letterSpacing: "var(--tracking-widest)",
            }}
          >
            {t("footer.directions")}
            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Contact column */}
        <div className="col-span-1 md:col-span-2 flex flex-col gap-5">
          <FooterHeading>{t("footer.contact")}</FooterHeading>
          <FooterRow icon={<Phone size={14} strokeWidth={1.5} />}>
            <a
              href={BUSINESS.phone.href}
              className="text-sm text-[color:var(--color-ink-secondary)] hover:text-[color:var(--color-gold-200)] transition-colors duration-300"
            >
              {BUSINESS.phone.display}
            </a>
          </FooterRow>
          <FooterRow icon={<Mail size={14} strokeWidth={1.5} />}>
            <a
              href={BUSINESS.email.href}
              className="text-sm text-[color:var(--color-ink-secondary)] hover:text-[color:var(--color-gold-200)] transition-colors duration-300 break-all"
            >
              {BUSINESS.email.address}
            </a>
          </FooterRow>
          <a
            href={BUSINESS.booking.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-[11px] uppercase text-[color:var(--color-gold-200)] hover:text-[color:var(--color-gold-50)] transition-colors duration-300 mt-1"
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              letterSpacing: "var(--tracking-widest)",
            }}
          >
            {t("nav.book")}
            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Connect column */}
        <div className="col-span-2 md:col-span-2 flex flex-col gap-5">
          <FooterHeading>{t("footer.connect")}</FooterHeading>
          <div className="flex items-center gap-4">
            <a
              href={BUSINESS.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center w-10 h-10 border border-[color:var(--color-border-default)] text-[color:var(--color-ink-secondary)] hover:text-[color:var(--color-gold-200)] hover:border-[color:var(--color-gold-400)] transition-colors duration-300"
            >
              <InstagramIcon size={16} strokeWidth={1.5} />
            </a>
            <a
              href={BUSINESS.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="inline-flex items-center justify-center w-10 h-10 border border-[color:var(--color-border-default)] text-[color:var(--color-ink-secondary)] hover:text-[color:var(--color-gold-200)] hover:border-[color:var(--color-gold-400)] transition-colors duration-300"
            >
              <TikTokIcon size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>

      <hr className="rule-gold mt-20 mb-8" />

      {/* ───── Bottom bar ───── */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p
          className="text-[10px] uppercase text-[color:var(--color-ink-faint)]"
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            letterSpacing: "var(--tracking-widest)",
          }}
        >
          © {currentYear} {BUSINESS.legalName} · {t("footer.rights")}
        </p>
        <nav
          aria-label="Footer secondary"
          className="flex items-center gap-6 text-[10px] uppercase text-[color:var(--color-ink-faint)]"
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            letterSpacing: "var(--tracking-widest)",
          }}
        >
          <Link
            href="/contact"
            className="hover:text-[color:var(--color-gold-200)] transition-colors duration-300"
          >
            {t("nav.contact")}
          </Link>
          <Link
            href="/franchise"
            className="hover:text-[color:var(--color-gold-200)] transition-colors duration-300"
          >
            {t("nav.franchise")}
          </Link>
        </nav>
      </div>
    </Section>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-[11px] uppercase text-[color:var(--color-gold-300)]"
      style={{
        fontFamily: "var(--font-body), system-ui, sans-serif",
        letterSpacing: "var(--tracking-eyebrow)",
        fontWeight: 500,
      }}
    >
      {children}
    </h2>
  );
}

function FooterRow({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span
        className="mt-1 flex-shrink-0 text-[color:var(--color-gold-400)]"
        aria-hidden
      >
        {icon}
      </span>
      <div className="flex-1">{children}</div>
    </div>
  );
}
