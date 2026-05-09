/**
 * 9 verified Google Reviews — verbatim FR (brief section 11).
 * EN versions are marketing-adapted, not literal translations.
 * No emojis (matches site tone).
 */

export type Testimonial = {
  name: string;
  location_fr: string;
  location_en: string;
  rating: 5;
  quote_fr: string;
  quote_en: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Hiten Patel",
    location_fr: "Laval, QC",
    location_en: "Laval, QC",
    rating: 5,
    quote_fr:
      "J'y suis allée pour la première fois et Hadi ne m'a pas déçue. Il a vraiment pris le temps de s'assurer que la coupe que je souhaitais était parfaite et m'a donné d'excellents conseils pour la sublimer. Je suis très exigeante en matière de coupe de cheveux et ce coiffeur a été formidable.",
    quote_en:
      "First visit and Hadi exceeded every expectation. He took the time to make sure the cut I wanted was exactly right, and gave thoughtful advice on how to wear it. I'm extremely particular about my hair, and this is the best service I've had.",
  },
  {
    name: "Jason Khalil",
    location_fr: "Laval, QC",
    location_en: "Laval, QC",
    rating: 5,
    quote_fr:
      "Superbe salon de coiffure à visiter absolument. Les deux coiffeurs sont compétents et font exactement ce que vous demandez. J'y vais au moins une fois par mois pour une coupe de cheveux et c'est un endroit où je n'ai pas à craindre une mauvaise coupe.",
    quote_en:
      "An exceptional shop. Both barbers are skilled and deliver exactly what you ask for. I come at least once a month — never once worried about walking out with a bad cut.",
  },
  {
    name: "Zack Corie",
    location_fr: "Montréal, QC",
    location_en: "Montreal, QC",
    rating: 5,
    quote_fr:
      "Très propre et professionnel, très sympathique et accueillant. Personnellement, j'ai eu une excellente expérience et ils ont pu réparer les dégâts causés par mon précédent coiffeur. Ils m'ont sauvé la mise.",
    quote_en:
      "Spotless, professional, and warm. They fixed the damage from my last barber when I'd given up on a clean recovery. Genuinely saved me.",
  },
  {
    name: "Alex",
    location_fr: "Laval, QC",
    location_en: "Laval, QC",
    rating: 5,
    quote_fr:
      "Très content de ma première expérience chez Élite Barbershop. Personnel professionnel et à l'écoute. Salon propre et de qualité. Je le recommande.",
    quote_en:
      "Outstanding first experience at Elite. Professional staff who actually listen. Clean, refined space. I recommend it without reservation.",
  },
  {
    name: "Jad",
    location_fr: "Laval, QC",
    location_en: "Laval, QC",
    rating: 5,
    quote_fr:
      "J'y suis allé avec mon frère pour la première fois. Vous ne trouverez pas de coiffeurs aussi compétents dans le quartier. Ils vous accueillent comme un client et un ami, vous donnant ce que vous demandez et adaptant la coupe à votre style.",
    quote_en:
      "Went with my brother for the first time. You won't find barbers this skilled anywhere nearby. They treat you like a guest, not a number — and adapt the cut to your style.",
  },
  {
    name: "Eric Tiganasu",
    location_fr: "Laval, QC",
    location_en: "Laval, QC",
    rating: 5,
    quote_fr:
      "Très belle expérience chez Elite Barbershop! J'ai eu une merveilleuse coupe de cheveux et le service était excellent. Je recommande cet emplacement très fortement!",
    quote_en:
      "A genuinely beautiful experience. The cut was excellent and the service matched. Highly recommend this location.",
  },
  {
    name: "Maha TR",
    location_fr: "Laval, QC",
    location_en: "Laval, QC",
    rating: 5,
    quote_fr:
      "Le salon de coiffure préféré de mon mari. Hadi, le coiffeur et propriétaire, est incroyablement attentif aux détails. Je le recommande vivement.",
    quote_en:
      "My husband's favorite barbershop, hands down. Hadi, the owner, is unbelievably attentive to detail. I recommend him without hesitation.",
  },
  {
    name: "Bill Buffalo",
    location_fr: "Laval, QC",
    location_en: "Laval, QC",
    rating: 5,
    quote_fr:
      "Service impeccable! Très professionnel. Ma première fois ici et le propriétaire Hadi est super! Je recommande à 100%",
    quote_en:
      "Service was impeccable, professional from the door. First time at Elite — Hadi is the real deal. 100% recommend.",
  },
  {
    name: "Marien Meriaux",
    location_fr: "Laval, QC",
    location_en: "Laval, QC",
    rating: 5,
    quote_fr:
      "Excellent, Evan m'a transformé! Le Salon est très propre et l'accueil au top. Merci.",
    quote_en:
      "Excellent. Evan completely transformed the cut. The space is spotless and the welcome was first-class.",
  },
];
