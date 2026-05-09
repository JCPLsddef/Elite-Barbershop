import { useTranslations, useLocale } from "next-intl";
import { InstagramIcon, TikTokIcon } from "@/components/ui/SocialIcon";
import { BUSINESS } from "@/lib/constants";
import "@/components/sections/visit/styles.css";

const MAPS_URL =
  "https://www.google.com/maps?q=3871+boul.+Saint-Martin+Ouest,+Laval,+QC+H7T+1C7";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.848221935773!2d-73.7863479844457!3d45.58313327910245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91913e1904d95%3A0x16c9092e6aa7e6d!2s3871%20Boulevard%20Saint-Martin%20Ouest%2C%20Laval%2C%20QC%20H7P%201C8!5e0!3m2!1sfr!2sca!4v1721340000000!5m2!1sfr!2sca";

export function VisitSection() {
  const t = useTranslations("visit");
  const locale = useLocale() as "fr" | "en";
  const hoursLines =
    locale === "fr"
      ? ["Lundi – Dimanche", "10h00 – 20h00"]
      : ["Monday – Sunday", "10:00 AM – 8:00 PM"];

  return (
    <section className="elite-visit-section" id="visit" aria-label={t("title")}>
      <h2 className="visit-title">{t("title")}</h2>
      <p className="visit-subtitle">{t("subtitle")}</p>

      <div className="visit-info-columns">
        <div className="visit-box">
          <h4>{t("addressTitle")}</h4>
          <p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              3871 boul. Saint-Martin Ouest
              <br />
              Laval, QC H7T 1C7
            </a>
          </p>
        </div>

        <div className="visit-box">
          <h4>{t("hoursTitle")}</h4>
          <p>
            {hoursLines[0]}
            <br />
            {hoursLines[1]}
          </p>
        </div>

        <div className="visit-box">
          <h4>{t("contactTitle")}</h4>
          <p>
            <a href={BUSINESS.phone.href}>{BUSINESS.phone.display}</a>
            <br />
            <a href={BUSINESS.email.href}>{BUSINESS.email.address}</a>
          </p>
        </div>
      </div>

      <div className="visit-map-wrapper">
        <iframe
          className="visit-map-iframe"
          src={MAP_EMBED_URL}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          title={t("title")}
        />
      </div>

      <a
        href={MAPS_URL}
        className="visit-map-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("mapLink")}
      </a>

      <div className="visit-social">
        <a
          href={BUSINESS.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <InstagramIcon size={22} strokeWidth={1.6} />
        </a>
        <a
          href={BUSINESS.social.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <TikTokIcon size={22} strokeWidth={1.6} />
        </a>
      </div>
    </section>
  );
}
