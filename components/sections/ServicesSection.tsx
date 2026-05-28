"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import { ICONS, type IconName, ArrowIcon } from "@/components/sections/services/Icons";

import "@/components/sections/services/styles.css";
import "@/components/sections/services/services-v6.css";

// ─────────────────────────────────────────────────────────────────────
// Image library — Shopify CDN existing photos
// ─────────────────────────────────────────────────────────────────────

const HERO_IMAGE =
  "https://cdn.shopify.com/s/files/1/0624/6059/2222/files/Facelab_2025-08-18_06-28-56.jpg?v=1755567059";

// ─────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────

type Service = {
  id: string;
  num: string;
  title: string;
  icon: IconName;
  desc: string;
  price: number;
  duration: number;
  image: string;
  cta: string;
  star?: boolean;
};

const SERVICES: Service[] = [
  {
    id: "adult",
    num: "01",
    title: "Adult Haircut",
    icon: "scissors",
    desc: "Precision cut tailored to your hair type, face shape, and style.",
    price: 40,
    duration: 30,
    image: "https://cdn.shopify.com/s/files/1/0624/6059/2222/files/4.jpg?v=1753454380",
    cta: "Book Now",
  },
  {
    id: "haircut-beard",
    num: "02",
    title: "Haircut & Beard",
    icon: "razor",
    desc: "The full Elite grooming session. Haircut, beard, lineup, finish.",
    price: 50,
    duration: 45,
    image: "https://cdn.shopify.com/s/files/1/0624/6059/2222/files/3.jpg?v=1753454379",
    cta: "Book Signature",
    star: true,
  },
  {
    id: "kids",
    num: "03",
    title: "Kids Haircut",
    icon: "child",
    desc: "A clean, patient, and precise experience for younger clients.",
    price: 30,
    duration: 25,
    image: "https://cdn.shopify.com/s/files/1/0624/6059/2222/files/2.jpg?v=1753454380",
    cta: "Book Now",
  },
  {
    id: "neck",
    num: "04",
    title: "Neck Lining",
    icon: "ear",
    desc: "A sharp refresh to keep your neckline and temple lines clean.",
    price: 20,
    duration: 15,
    image: "https://cdn.shopify.com/s/files/1/0624/6059/2222/files/DSC09256.jpg?v=1753454379",
    cta: "Book Now",
  },
  {
    id: "beard-neck",
    num: "05",
    title: "Beard & Neck",
    icon: "beard",
    desc: "Complete beard shaping, neck clean-up, and crisp lines.",
    price: 25,
    duration: 25,
    image: "https://cdn.shopify.com/s/files/1/0624/6059/2222/files/DSC09289.jpg?v=1753454377",
    cta: "Book Now",
  },
];

// ─────────────────────────────────────────────────────────────────────
// Proof icons
// ─────────────────────────────────────────────────────────────────────

function IconStar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3.5l2.6 5.3 5.9.86-4.25 4.15 1 5.85L12 16.9l-5.25 2.77 1-5.85L3.5 9.66l5.9-.86z" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21s-7-7.5-7-12.5a7 7 0 0114 0c0 5-7 12.5-7 12.5z" />
      <circle cx="12" cy="8.5" r="2.5" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="5" width="16" height="15" rx="1.5" />
      <line x1="4" y1="9" x2="20" y2="9" />
      <line x1="8" y1="3" x2="8" y2="6" />
      <line x1="16" y1="3" x2="16" y2="6" />
    </svg>
  );
}

function IconDiamond() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 3h12l3 5-9 13L3 8z" />
      <path d="M6 3l3 5h6l3-5" />
      <line x1="9" y1="8" x2="12" y2="21" />
      <line x1="15" y1="8" x2="12" y2="21" />
    </svg>
  );
}

// Perk icons
function PerkCrown() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 22 L8 11 L13 16 L16 7 L19 16 L24 11 L27 22 Z" />
      <line x1="5" y1="25" x2="27" y2="25" />
    </svg>
  );
}
function PerkClock() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="16" cy="16" r="11" />
      <path d="M16 9v7l5 3" />
    </svg>
  );
}
function PerkTowel() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="6" y="9" width="20" height="14" rx="1.5" />
      <path d="M10 9v14M22 9v14" />
      <path d="M14 6c0-1 1-2 2-2s2 1 2 2" />
    </svg>
  );
}
function PerkLock() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="8" y="14" width="16" height="13" rx="1.5" />
      <path d="M11 14V10a5 5 0 0110 0v4" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Atoms
// ─────────────────────────────────────────────────────────────────────

function CountUp({ to, duration = 0.7 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return <span ref={ref}>{display}</span>;
}

// ─────────────────────────────────────────────────────────────────────
// Service card
// ─────────────────────────────────────────────────────────────────────

function ServiceCard({ s }: { s: Service }) {
  const Icon = ICONS[s.icon];

  return (
    <article className={`svc-card ${s.star ? "svc-card--star" : ""}`}>
      {s.star && <span className="svc-card-pill">Most Booked</span>}

      <div className="svc-card-media">
        <span className="svc-card-num">{s.num}</span>
        <Image
          src={s.image}
          alt={s.title}
          width={520}
          height={520}
          sizes="(max-width: 900px) 100vw, 280px"
          className="svc-card-img"
        />
        <div className="svc-card-icon" aria-hidden>
          <Icon />
        </div>
      </div>

      <div className="svc-card-body">
        <h3 className="svc-card-title">{s.title}</h3>
        <p className="svc-card-desc">{s.desc}</p>

        <div className="svc-card-meta">
          <span className="svc-card-meta-duration">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="8" cy="8" r="6" />
              <path d="M8 5v3l2 1.5" />
            </svg>
            {s.duration} min
          </span>
          <span className="svc-card-meta-price">
            <span className="svc-card-currency">$</span>
            <span className="svc-card-amount">
              <CountUp to={s.price} />
            </span>
          </span>
        </div>

        <a
          href={BUSINESS.booking.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`svc-card-cta ${s.star ? "svc-card-cta--solid" : ""}`}
          aria-label={`${s.cta}: ${s.title}`}
        >
          <span>{s.cta}</span>
          <ArrowIcon />
        </a>
      </div>
    </article>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Main section
// ─────────────────────────────────────────────────────────────────────

export function ServicesSection() {
  return (
    <section id="services" className="elite-services-root svc-section">
      {/* ── Hero band ─────────────────────────────────── */}
      <div className="svc-hero">
        <div className="svc-hero-left">
          <span className="svc-hero-eyebrow">
            <span className="svc-hero-eyebrow-rule" />
            Our Services
          </span>
          <h2 className="svc-hero-title">
            Precision grooming,
            <br />
            built around <em>you</em>.
          </h2>
          <p className="svc-hero-copy">
            Every service is delivered with precision, attention to detail,
            and high standards.
          </p>

          <ul className="svc-hero-proof">
            <li>
              <span className="svc-hero-proof-icon">
                <IconStar />
              </span>
              <span className="svc-hero-proof-l1">5-Star</span>
              <span className="svc-hero-proof-l2">5-star reviews</span>
            </li>
            <li>
              <span className="svc-hero-proof-icon">
                <IconPin />
              </span>
              <span className="svc-hero-proof-l1">Laval</span>
              <span className="svc-hero-proof-l2">Chomedey</span>
            </li>
            <li>
              <span className="svc-hero-proof-icon">
                <IconCalendar />
              </span>
              <span className="svc-hero-proof-l1">By</span>
              <span className="svc-hero-proof-l2">Appointment</span>
            </li>
            <li>
              <span className="svc-hero-proof-icon">
                <IconDiamond />
              </span>
              <span className="svc-hero-proof-l1">Premium</span>
              <span className="svc-hero-proof-l2">Experience</span>
            </li>
          </ul>
        </div>

        <div className="svc-hero-right">
          <div className="svc-hero-media">
            <Image
              src={HERO_IMAGE}
              alt="Elite Barbershop — precision haircut in progress"
              fill
              sizes="(max-width: 1100px) 100vw, 55vw"
              className="svc-hero-image"
              priority={false}
            />
          </div>

          <aside className="svc-hero-quote" aria-label="Founder quote">
            <span className="svc-hero-quote-mark" aria-hidden>
              &ldquo;
            </span>
            <p className="svc-hero-quote-text">
              It&apos;s not just a haircut.
              <br />
              It&apos;s the Elite standard.
            </p>
            <span className="svc-hero-quote-sig">Hadi</span>
          </aside>
        </div>
      </div>

      {/* ── Choose your service eyebrow ───────────────── */}
      <div className="svc-choose">
        <span className="svc-choose-rule" aria-hidden />
        <span className="svc-choose-label">Choose Your Service</span>
        <span className="svc-choose-rule" aria-hidden />
      </div>

      {/* ── 5-card photo grid ─────────────────────────── */}
      <div className="svc-cards">
        {SERVICES.map((s) => (
          <ServiceCard key={s.id} s={s} />
        ))}
      </div>

      {/* ── Bottom perks bar ──────────────────────────── */}
      <ul className="svc-perks" aria-label="What sets us apart">
        <li>
          <span className="svc-perk-icon">
            <PerkCrown />
          </span>
          <div>
            <span className="svc-perk-l1">Premium Products</span>
            <span className="svc-perk-l2">Only the best.</span>
          </div>
        </li>
        <li>
          <span className="svc-perk-icon">
            <PerkClock />
          </span>
          <div>
            <span className="svc-perk-l1">On Time. Every Time.</span>
            <span className="svc-perk-l2">Respect for your time.</span>
          </div>
        </li>
        <li>
          <span className="svc-perk-icon">
            <PerkTowel />
          </span>
          <div>
            <span className="svc-perk-l1">Hot Towel Finish</span>
            <span className="svc-perk-l2">For that Elite feel.</span>
          </div>
        </li>
        <li>
          <span className="svc-perk-icon">
            <PerkLock />
          </span>
          <div>
            <span className="svc-perk-l1">Private &amp; Clean</span>
            <span className="svc-perk-l2">Comfort and privacy.</span>
          </div>
        </li>
      </ul>
    </section>
  );
}
