"use client";

import { Globe } from "@/components/sections/franchise/Globe";

type FranchiseHeroProps = {
  locale: "fr" | "en";
};

const Ornament = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 64 8" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="franchise-orna" x1="0" x2="1">
        <stop offset="0" stopColor="#8C6B3F" stopOpacity="0" />
        <stop offset="0.5" stopColor="#D4AF37" stopOpacity="0.9" />
        <stop offset="1" stopColor="#8C6B3F" stopOpacity="0" />
      </linearGradient>
    </defs>
    <line x1="0" y1="4" x2="26" y2="4" stroke="url(#franchise-orna)" strokeWidth="0.6" />
    <g transform="translate(32 4)">
      <circle r="0.8" fill="#D4AF37" />
      <circle r="2.6" fill="none" stroke="#B68B3C" strokeWidth="0.4" opacity="0.65" />
      <g stroke="#8C6B3F" strokeWidth="0.4" opacity="0.5">
        <line x1="-4" y1="0" x2="-3" y2="0" />
        <line x1="3"  y1="0" x2="4"  y2="0" />
        <line x1="0"  y1="-4" x2="0" y2="-3" />
        <line x1="0"  y1="3"  x2="0" y2="4" />
      </g>
    </g>
    <line x1="38" y1="4" x2="64" y2="4" stroke="url(#franchise-orna)" strokeWidth="0.6" />
  </svg>
);

export function FranchiseHero({ locale }: FranchiseHeroProps) {
  const isFr = locale === "fr";

  const eyebrow = isFr ? "La Franchise — Vol. I" : "The Franchise — Vol. I";
  const titleLead = isFr ? "Devenez propriétaire d'un" : "Own an";
  const titleAccent = "Elite";
  const titleTrail = isFr ? "Barbershop" : "Barbershop";
  const subtitle = isFr
    ? "Un concept de barbershop de luxe conçu pour s'étendre au-delà d'une seule ville."
    : "A luxury barbershop concept built to expand beyond one city.";
  const body = isFr
    ? "De Laval au monde, Elite Barbershop est conçu pour les propriétaires qui cherchent plus qu'une entreprise —"
    : "From Laval to the world, Elite Barbershop is designed for owners who want more than a business —";
  const bodyAccent = isFr ? " ils veulent un héritage." : " they want a legacy.";
  const cta = isFr ? "Devenir propriétaire Elite" : "Become an Elite Owner";
  const ctaCaption = isFr ? "Sur candidature uniquement" : "By application only";
  const captionFrom = isFr ? "De Laval" : "From Laval";
  const captionTo = isFr ? "Vers le monde" : "To the World";

  const stats: Array<{ k: string; l: string; s: string }> = [
    { k: "01", l: isFr ? "Phare" : "Flagship", s: isFr ? "Laval, QC" : "Laval, QC" },
    { k: "12", l: isFr ? "Villes" : "Cities", s: isFr ? "En projet" : "In pipeline" },
    { k: "∞", l: isFr ? "Héritage" : "Legacy", s: isFr ? "En mouvement" : "In motion" },
  ];

  return (
    <section className="franchise-grain relative min-h-screen overflow-hidden pt-[140px] md:pt-[180px]">
      {/* Decorative corner marks */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="franchise-corner top-5 left-5 border-l border-t" />
        <div className="franchise-corner top-5 right-5 border-r border-t" />
        <div className="franchise-corner bottom-5 left-5 border-l border-b" />
        <div className="franchise-corner bottom-5 right-5 border-r border-b" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-10 pb-16 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="fade-up flex items-center gap-3 mb-8 md:mb-10" style={{ animationDelay: "0.25s" }}>
          <span className="w-10 h-px bg-gradient-to-r from-transparent to-[#8a6d3b]" />
          <span className="font-jost text-[10px] md:text-[11px] uppercase tracking-[0.4em] gold-text">
            {eyebrow}
          </span>
          <span className="w-10 h-px bg-gradient-to-l from-transparent to-[#8a6d3b]" />
        </div>

        {/* Headline */}
        <h1
          className="fade-up font-cormorant font-light text-[44px] leading-[1.02] md:text-[88px] md:leading-[0.98] tracking-[-0.01em] text-[#f5efe0]"
          style={{ animationDelay: "0.45s" }}
        >
          {titleLead}{" "}
          <span className="italic font-light gold-text-bright">{titleAccent}</span>
          <br />
          {titleTrail}
        </h1>

        {/* Subtitle */}
        <p
          className="fade-up mt-6 md:mt-8 max-w-2xl font-cormorant text-lg md:text-2xl text-[#cfc6b3] italic font-light leading-[1.5]"
          style={{ animationDelay: "0.7s" }}
        >
          {subtitle}
        </p>

        {/* Globe */}
        <div
          className="fade-in relative w-full flex items-center justify-center mt-8 md:mt-10"
          style={{ animationDelay: "0.9s" }}
        >
          <div className="globe-mount">
            <Globe />
          </div>

          {/* Origin caption */}
          <div className="absolute -bottom-1 md:bottom-4 left-1/2 -translate-x-1/2 fade-up" style={{ animationDelay: "2s" }}>
            <div className="flex items-center gap-2 font-jost text-[9px] md:text-[10px] uppercase tracking-[0.35em] text-white">
              <span className="w-1 h-1 rounded-full bg-[#ecd590] pulse-soft" />
              {captionFrom}
              <span className="opacity-50">·</span>
              {captionTo}
            </div>
          </div>
        </div>

        {/* Body paragraph */}
        <p
          className="fade-up mt-8 md:mt-12 max-w-xl font-jost font-light text-[14px] md:text-[15px] leading-[1.85] text-[#b9b1a0]"
          style={{ animationDelay: "1.2s" }}
        >
          {body}
          <span className="gold-text">{bodyAccent}</span>
        </p>

        {/* CTA */}
        <div className="fade-up mt-9 md:mt-11 flex flex-col items-center gap-5" style={{ animationDelay: "1.4s" }}>
          <a
            href="#apply"
            className="btn-gold font-jost font-medium text-[12px] md:text-[13px] uppercase tracking-[0.34em] px-9 md:px-12 py-4 md:py-[18px] rounded-none inline-flex items-center gap-3"
          >
            <span>{cta}</span>
            <svg width="18" height="10" viewBox="0 0 18 10" fill="none" aria-hidden="true">
              <path d="M0 5h16M12 1l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="square" />
            </svg>
          </a>

          <div className="font-jost text-[10px] uppercase tracking-[0.3em] text-[#6f6858]">
            {ctaCaption}
          </div>
        </div>

        {/* Ornament */}
        <div className="fade-up mt-12 md:mt-16 mb-6 md:mb-10" style={{ animationDelay: "1.55s" }}>
          <Ornament className="w-40 h-3 opacity-90" />
        </div>

        {/* Stats */}
        <div
          className="fade-up flex items-center gap-6 md:gap-12 justify-center font-jost text-center"
          style={{ animationDelay: "1.6s" }}
        >
          {stats.map((s, i) => (
            <div key={s.k} className="flex items-center gap-6 md:gap-12">
              {i > 0 && <div className="w-px h-9 bg-gradient-to-b from-transparent via-[#5a4a2a] to-transparent" />}
              <div>
                <div className="font-cormorant text-2xl md:text-3xl gold-text-bright leading-none">
                  {s.k}
                </div>
                <div className="mt-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#b9b1a0]">
                  {s.l}
                </div>
                <div className="mt-0.5 text-[9px] md:text-[10px] tracking-[0.22em] text-[#6f6858]">
                  {s.s}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
