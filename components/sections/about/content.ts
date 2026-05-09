export type AboutTextBlock = {
  type: "textblock";
  imagePosition: "left" | "right" | "center";
  image?: string;
  imageAlt?: string;
  title_fr: string;
  title_en: string;
  text_fr: string;
  text_en: string;
};

export type AboutQuoteBlock = {
  type: "quote";
  quote_fr: string;
  quote_en: string;
};

export type AboutHeroBlock = {
  type: "heroblock";
  title_fr: string;
  title_en: string;
  text_fr: string;
  text_en: string;
  hero_image?: string;
};

export type AboutBlock = AboutTextBlock | AboutQuoteBlock | AboutHeroBlock;

// Hero banner image at the top of the page (full-bleed).
// 👉 Replace with the URL Hadi sends you.
export const ABOUT_HERO_IMAGE: string | null =
  "https://cdn.shopify.com/s/files/1/0624/6059/2222/files/Facelab_2025-08-18_06-28-56.jpg?v=1755567059";

export const ABOUT_BLOCKS: AboutBlock[] = [
  {
    type: "textblock",
    imagePosition: "right",
    image:
      "https://cdn.shopify.com/s/files/1/0624/6059/2222/files/Facelab_2025-08-18_06-28-56.jpg?v=1755567059",
    imageAlt: "Hadi — Founder of Elite Barbershop",
    title_fr: "Hadi — Fondateur",
    title_en: "Hadi — Founder",
    text_fr:
      "Visionnaire derrière Elite Barbershop, Hadi a fondé la maison à Laval avec une obsession simple : élever chaque coupe au rang d'art. Formé à l'école du détail, il transforme un rendez-vous en rituel — précision du rasoir, chaleur d'une serviette chaude, finition au talc. Sa signature n'est pas un style, c'est une exigence : la vôtre, sans compromis.",
    text_en:
      "The visionary behind Elite Barbershop, Hadi founded the house in Laval with one obsession: elevating every cut to the level of craft. Trained in the school of detail, he turns an appointment into a ritual — razor precision, the warmth of a hot towel, a clean finish in talc. His signature isn't a style, it's a standard: yours, without compromise.",
  },
  {
    type: "textblock",
    imagePosition: "left",
    image:
      "https://cdn.shopify.com/s/files/1/0624/6059/2222/files/IMG_9439.jpg?v=1755567060",
    imageAlt: "Evan — Master Barber at Elite Barbershop",
    title_fr: "Evan — Maître Barbier",
    title_en: "Evan — Master Barber",
    text_fr:
      "Calme, méthodique, irréprochable. Evan est l'âme silencieuse du salon — celui à qui l'on confie les transitions impossibles, les barbes architecturées, les retours en confiance. Sa lame ne ment pas : elle écoute, ajuste, sculpte. Chaque client repart avec plus que des cheveux taillés. Il repart avec une posture.",
    text_en:
      "Calm, methodical, exacting. Evan is the quiet soul of the shop — the one entrusted with impossible transitions, architectural beards, and the kind of clean lines that bring confidence back. His blade doesn't lie: it listens, adjusts, sculpts. Every client leaves with more than a fresh cut. He leaves standing taller.",
  },
  {
    type: "quote",
    quote_fr:
      "Nous ne coupons pas des cheveux. Nous façonnons la confiance d'un homme.",
    quote_en:
      "We don't cut hair. We shape a man's confidence.",
  },
];
