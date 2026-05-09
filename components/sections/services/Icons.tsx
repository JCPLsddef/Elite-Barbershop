/* Hand-tuned SVG icons. Each icon exposes hover-triggered animations.
   Drawn lean and architectural — single weight, no fills, gold stroke.
   Ported verbatim from the claude.ai/design handoff. */

const STROKE = 1.4;

export function IconScissors() {
  return (
    <svg viewBox="0 0 64 64" className="svc-icon svc-icon--scissors" aria-hidden="true">
      <circle cx="32" cy="32" r="2.2" fill="currentColor" />
      <g className="ic-blade ic-blade--top">
        <circle cx="20" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth={STROKE} />
        <path d="M25.2 23.4 L52 50" fill="none" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" />
      </g>
      <g className="ic-blade ic-blade--bot">
        <circle cx="20" cy="44" r="6" fill="none" stroke="currentColor" strokeWidth={STROKE} />
        <path d="M25.2 40.6 L52 14" fill="none" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function IconRazor() {
  return (
    <svg viewBox="0 0 64 64" className="svc-icon svc-icon--razor" aria-hidden="true">
      <g className="ic-razor">
        <path d="M10 44 L40 14 L46 20 L16 50 Z" fill="none" stroke="currentColor" strokeWidth={STROKE} strokeLinejoin="round" />
        <path d="M40 14 L48 6" fill="none" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" />
        <circle cx="44" cy="10" r="1.6" fill="currentColor" />
      </g>
      <path
        className="ic-trace"
        d="M14 56 L58 56"
        fill="none"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
        strokeDasharray="44"
        strokeDashoffset="44"
      />
    </svg>
  );
}

export function IconChild() {
  return (
    <span className="svc-icon svc-icon--child ic-child-img-wrap" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="ic-child-img"
        src="https://cdn.shopify.com/s/files/1/0624/6059/2222/files/ChatGPT_Image_25_juil._2025_11_51_34.png?v=1753458719"
        alt=""
      />
    </span>
  );
}

export function IconEar() {
  return (
    <svg viewBox="0 0 64 64" className="svc-icon svc-icon--ear" aria-hidden="true">
      <path
        className="ic-ear-outline"
        d="M32 12 C 22 12, 16 20, 16 30 C 16 40, 20 46, 22 50 C 24 54, 28 56, 32 54 C 36 52, 36 48, 34 46 C 32 44, 32 42, 34 40 C 38 38, 42 36, 42 30 C 42 22, 40 14, 32 12 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeDasharray="120"
        strokeDashoffset="0"
      />
      <path
        d="M28 28 C 30 26, 34 26, 34 32 C 34 36, 30 36, 30 40"
        fill="none"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

export function IconBeard() {
  return (
    <span className="svc-icon svc-icon--beard ic-child-img-wrap" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="ic-child-img"
        src="https://cdn.shopify.com/s/files/1/0624/6059/2222/files/ChatGPT_Image_25_juil._2025_11_54_31.png?v=1753458890"
        alt=""
      />
    </span>
  );
}

export function IconMoon() {
  return (
    <svg viewBox="0 0 64 64" className="svc-icon svc-icon--moon" aria-hidden="true">
      <path
        className="ic-moon"
        d="M44 18 A 18 18 0 1 0 44 50 A 14 14 0 1 1 44 18 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinejoin="round"
      />
      <g className="ic-stars">
        <path d="M14 14 L14 20 M11 17 L17 17" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" />
        <path d="M52 46 L52 50 M50 48 L54 48" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" opacity="0.8" />
      </g>
    </svg>
  );
}

export function IconCrown() {
  return (
    <svg viewBox="0 -10 64 64" className="svc-icon svc-icon--crown" aria-hidden="true" style={{ overflow: "visible" }}>
      <g className="ic-crown">
        <path
          d="M10 44 L14 22 L24 32 L32 16 L40 32 L50 22 L54 44 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinejoin="round"
        />
        <path
          d="M13 41 L16.5 24 L24 31 L32 19 L40 31 L47.5 24 L51 41 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.7"
          strokeLinejoin="round"
          opacity="0.55"
        />
        <line x1="10" y1="48" x2="54" y2="48" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" />
        <line x1="12" y1="45.5" x2="52" y2="45.5" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" opacity="0.55" />
        <circle cx="22" cy="46.8" r="0.9" fill="currentColor" opacity="0.7" />
        <circle cx="32" cy="46.8" r="1.1" fill="currentColor" />
        <circle cx="42" cy="46.8" r="0.9" fill="currentColor" opacity="0.7" />
        <circle cx="14" cy="22" r="1.8" fill="currentColor" />
        <circle cx="32" cy="16" r="2.2" fill="currentColor" />
        <circle cx="50" cy="22" r="1.8" fill="currentColor" />
        <circle cx="31.3" cy="15.3" r="0.5" fill="#fff8e0" opacity="0.85" />
        <circle cx="24" cy="32" r="1" fill="none" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="40" cy="32" r="1" fill="none" stroke="currentColor" strokeWidth="0.7" />
      </g>
      <g className="ic-rays">
        <line className="ic-ray" x1="14" y1="22" x2="14" y2="4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line className="ic-ray ic-ray--side" x1="14" y1="22" x2="4" y2="14" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <line className="ic-ray" x1="32" y1="16" x2="32" y2="-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line className="ic-ray ic-ray--side" x1="32" y1="16" x2="24" y2="2" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <line className="ic-ray ic-ray--side" x1="32" y1="16" x2="40" y2="2" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <line className="ic-ray" x1="50" y1="22" x2="50" y2="4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line className="ic-ray ic-ray--side" x1="50" y1="22" x2="60" y2="14" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <circle className="ic-ray-dot" cx="14" cy="4" r="1.2" fill="currentColor" />
        <circle className="ic-ray-dot" cx="32" cy="-4" r="1.5" fill="currentColor" />
        <circle className="ic-ray-dot" cx="50" cy="4" r="1.2" fill="currentColor" />
      </g>
    </svg>
  );
}

export function GlassIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3.6 2 H 10.4 L 9.4 11 Q 9.2 12.2, 8 12.2 H 6 Q 4.8 12.2, 4.6 11 Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path d="M5 5 H 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none">
      <path
        d="M2 6 H 10 M 7 3 L 10 6 L 7 9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none">
      <path
        d="M2 7.5 L 6 11 L 12 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const ICONS = {
  scissors: IconScissors,
  razor: IconRazor,
  child: IconChild,
  ear: IconEar,
  beard: IconBeard,
  moon: IconMoon,
  crown: IconCrown,
} as const;

export type IconName = keyof typeof ICONS;
