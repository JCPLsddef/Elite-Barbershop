import Image from "next/image";
import { Link } from "@/i18n/navigation";
import "@/components/sections/about/showcase.css";

const SHOWCASE_IMAGE =
  "https://cdn.shopify.com/s/files/1/0624/6059/2222/files/IMG_9444.jpg?v=1755567060";

type Copy = {
  eyebrow: string;
  title: string;
  titleEm: string;
  body1: string;
  body2: string;
  valueLine: string;
  caption: string;
  proof: string[];
  cta: string;
};

const COPY: Record<"fr" | "en", Copy> = {
  en: {
    eyebrow: "Our Story · Since 2024",
    title: "More than a haircut.",
    titleEm: "A standard.",
    body1:
      "Elite was built on precision, loyalty, and consistency. Every appointment is designed to make clients leave sharper, cleaner, and more confident than when they walked in.",
    body2:
      "From the consultation to the final styling finish, the goal is simple: deliver a premium grooming experience that clients can trust every time they sit in the chair.",
    valueLine: "Precision is not a detail here. It is the standard.",
    caption: "Elite Barbershop by Hadi · Laval",
    proof: ["Since 2024", "Laval / Chomedey", "Premium grooming", "Built by Hadi"],
    cta: "See More About Us",
  },
  fr: {
    eyebrow: "Notre histoire · Depuis 2024",
    title: "Plus qu'une coupe.",
    titleEm: "Une exigence.",
    body1:
      "Elite a été bâti sur la précision, la fidélité et la constance. Chaque rendez-vous est pensé pour que les clients repartent plus nets, plus affûtés et plus confiants qu'à leur arrivée.",
    body2:
      "De la consultation à la finition, l'objectif est simple : livrer une expérience de soin premium à laquelle les clients peuvent faire confiance, à chaque visite.",
    valueLine: "La précision n'est pas un détail ici. C'est la norme.",
    caption: "Elite Barbershop by Hadi · Laval",
    proof: ["Depuis 2024", "Laval / Chomedey", "Grooming premium", "Bâti par Hadi"],
    cta: "En Savoir Plus",
  },
};

type AboutShowcaseProps = {
  locale: "fr" | "en";
};

export function AboutShowcase({ locale }: AboutShowcaseProps) {
  const t = COPY[locale];

  return (
    <section className="about-showcase" aria-label={t.eyebrow}>
      <div className="about-showcase-inner">
        <figure className="about-showcase-media-wrap">
          <div className="about-showcase-media">
            <span className="about-showcase-corner tl" aria-hidden />
            <span className="about-showcase-corner br" aria-hidden />
            <Image
              src={SHOWCASE_IMAGE}
              alt="Inside Elite Barbershop"
              width={1200}
              height={1500}
              sizes="(max-width: 900px) 100vw, 50vw"
              className="about-showcase-img"
              priority={false}
            />
          </div>
          <figcaption className="about-showcase-caption">
            <span className="about-showcase-caption-rule" aria-hidden />
            {t.caption}
          </figcaption>
        </figure>

        <div className="about-showcase-body">
          <span className="about-showcase-eyebrow">{t.eyebrow}</span>
          <h2 className="about-showcase-title">
            {t.title}
            <br />
            <em>{t.titleEm}</em>
          </h2>
          <p className="about-showcase-copy">{t.body1}</p>
          <p className="about-showcase-copy about-showcase-copy--secondary">
            {t.body2}
          </p>

          <blockquote className="about-showcase-value">{t.valueLine}</blockquote>

          <ul className="about-showcase-proof">
            {t.proof.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>

          <Link href="/about" className="about-showcase-cta">
            <span>{t.cta}</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 7h8M7.5 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
