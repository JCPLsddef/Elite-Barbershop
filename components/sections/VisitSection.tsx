"use client";

import { useTranslations, useLocale } from "next-intl";
import { InstagramIcon, TikTokIcon } from "@/components/ui/SocialIcon";
import { BUSINESS } from "@/lib/constants";
import "@/components/sections/visit/styles.css";

const MAPS_URL =
  "https://www.google.com/maps?q=3871+boul.+Saint-Martin+Ouest,+Laval,+QC+H7T+1C7";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.848221935773!2d-73.7863479844457!3d45.58313327910245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91913e1904d95%3A0x16c9092e6aa7e6d!2s3871%20Boulevard%20Saint-Martin%20Ouest%2C%20Laval%2C%20QC%20H7P%201C8!5e0!3m2!1sfr!2sca!4v1721340000000!5m2!1sfr!2sca";

type Copy = {
  eyebrow: string;
  title: string;
  titleEm: string;
  body: string;
  addressLabel: string;
  hoursLabel: string;
  hours: string[];
  contactLabel: string;
  ctaMaps: string;
  ctaBook: string;
  followLabel: string;
  caption: string;
};

const COPY: Record<"fr" | "en", Copy> = {
  en: {
    eyebrow: "Visit Us · Laval / Chomedey",
    title: "Come enjoy an",
    titleEm: "Elite experience.",
    body: "Tucked on boulevard Saint-Martin in the heart of Chomedey, Elite Barbershop welcomes you in a setting designed for precision, comfort, and a moment that belongs entirely to you.",
    addressLabel: "Address",
    hoursLabel: "Hours",
    hours: ["Monday – Sunday", "10:00 AM – 8:00 PM"],
    contactLabel: "Contact",
    ctaMaps: "Open in Google Maps",
    ctaBook: "Book Your Visit",
    followLabel: "Follow",
    caption: "Elite Barbershop by Hadi · Laval, QC",
  },
  fr: {
    eyebrow: "Nous visiter · Laval / Chomedey",
    title: "Venez vivre l'",
    titleEm: "expérience Elite.",
    body: "Niché sur le boulevard Saint-Martin au cœur de Chomedey, Elite Barbershop vous accueille dans un cadre pensé pour la précision, le confort et un moment qui n'appartient qu'à vous.",
    addressLabel: "Adresse",
    hoursLabel: "Heures",
    hours: ["Lundi – Dimanche", "10h00 – 20h00"],
    contactLabel: "Contact",
    ctaMaps: "Ouvrir dans Google Maps",
    ctaBook: "Réserver ma visite",
    followLabel: "Nous suivre",
    caption: "Elite Barbershop by Hadi · Laval, QC",
  },
};

export function VisitSection() {
  const t = useTranslations("visit");
  const locale = useLocale() as "fr" | "en";
  const c = COPY[locale];

  return (
    <section
      id="visit"
      className="visit-section-cream"
      aria-label={t("title")}
    >
      <article className="visit-card">
        {/* ──────────────── LEFT COLUMN ──────────────── */}
        <div className="visit-card-left">
          <span className="visit-eyebrow">
            <span className="visit-eyebrow-rule" />
            {c.eyebrow}
          </span>

          <h2 className="visit-title">
            {c.title} <em>{c.titleEm}</em>
          </h2>

          <p className="visit-body">{c.body}</p>

          <dl className="visit-details">
            <div className="visit-detail">
              <dt>{c.addressLabel}</dt>
              <dd>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  3871 boul. Saint-Martin Ouest
                  <br />
                  Laval, QC H7T 1C7
                </a>
              </dd>
            </div>

            <div className="visit-detail">
              <dt>{c.hoursLabel}</dt>
              <dd>
                {c.hours[0]}
                <br />
                {c.hours[1]}
              </dd>
            </div>

            <div className="visit-detail">
              <dt>{c.contactLabel}</dt>
              <dd>
                <a href={BUSINESS.phone.href}>{BUSINESS.phone.display}</a>
                <br />
                <a href={BUSINESS.email.href}>{BUSINESS.email.address}</a>
              </dd>
            </div>
          </dl>

          <div className="visit-ctas">
            <a
              href={BUSINESS.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="visit-cta visit-cta--solid"
            >
              {c.ctaBook}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M3 7h8M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="visit-cta visit-cta--ghost"
            >
              {c.ctaMaps}
            </a>
          </div>

          <div className="visit-social">
            <span className="visit-social-label">{c.followLabel}</span>
            <a
              href={BUSINESS.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="visit-social-link"
            >
              <InstagramIcon size={18} strokeWidth={1.6} />
            </a>
            <a
              href={BUSINESS.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="visit-social-link"
            >
              <TikTokIcon size={18} strokeWidth={1.6} />
            </a>
          </div>
        </div>

        {/* ──────────────── RIGHT COLUMN — MAP ──────────────── */}
        <div className="visit-card-right">
          <div className="visit-map-frame">
            <span className="visit-map-corner tl" aria-hidden />
            <span className="visit-map-corner tr" aria-hidden />
            <span className="visit-map-corner bl" aria-hidden />
            <span className="visit-map-corner br" aria-hidden />
            <iframe
              className="visit-map-iframe"
              src={MAP_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title={t("title")}
            />
          </div>
          <figcaption className="visit-map-caption">
            <span className="visit-map-caption-rule" />
            {c.caption}
          </figcaption>
        </div>
      </article>
    </section>
  );
}
