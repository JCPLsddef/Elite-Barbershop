"use client";

import { useState } from "react";

type FranchiseFormProps = {
  locale: "fr" | "en";
};

const COUNTRY_LIST: string[] = [
  "Canada", "United States", "Mexico", "Panama", "Colombia", "Peru",
  "Brazil", "Argentina", "United Kingdom", "France", "Italy", "Spain",
  "Portugal", "Germany", "Netherlands", "Belgium", "Switzerland",
  "Sweden", "Norway", "Denmark", "United Arab Emirates", "Saudi Arabia",
  "Qatar", "Singapore", "Japan", "South Korea", "Australia", "Other",
];

const COUNTRY_LIST_FR: string[] = [
  "Canada", "États-Unis", "Mexique", "Panama", "Colombie", "Pérou",
  "Brésil", "Argentine", "Royaume-Uni", "France", "Italie", "Espagne",
  "Portugal", "Allemagne", "Pays-Bas", "Belgique", "Suisse",
  "Suède", "Norvège", "Danemark", "Émirats arabes unis", "Arabie saoudite",
  "Qatar", "Singapour", "Japon", "Corée du Sud", "Australie", "Autre",
];

export function FranchiseForm({ locale }: FranchiseFormProps) {
  const isFr = locale === "fr";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const t = {
    eyebrow: isFr ? "Candidature" : "Application",
    title: isFr ? "Demandez votre candidature" : "Request your application",
    subtitle: isFr
      ? "Une sélection rigoureuse. Un héritage en construction. Laissez-nous vos coordonnées et notre équipe reviendra vers vous personnellement."
      : "A rigorous selection. A legacy in the making. Leave your details and our team will return to you personally.",
    name: isFr ? "Nom complet" : "Full name",
    email: isFr ? "Adresse courriel" : "Email address",
    country: isFr ? "Pays" : "Country",
    countryPlaceholder: isFr ? "Sélectionnez un pays" : "Select a country",
    submit: isFr ? "Soumettre ma candidature" : "Submit my application",
    sending: isFr ? "Envoi en cours…" : "Sending…",
    privacy: isFr
      ? "Vos informations restent confidentielles. Une réponse sous 72 heures."
      : "Your information stays confidential. A reply within 72 hours.",
    successTitle: isFr ? "Candidature reçue" : "Application received",
    successBody: isFr
      ? "Merci pour votre intérêt. Notre équipe vous contactera personnellement sous peu."
      : "Thank you for your interest. Our team will contact you personally shortly.",
    errors: {
      name: isFr ? "Veuillez entrer votre nom complet." : "Please enter your full name.",
      email: isFr ? "Veuillez entrer une adresse courriel valide." : "Please enter a valid email address.",
      country: isFr ? "Veuillez sélectionner un pays." : "Please select a country.",
    },
  };

  const countries = isFr ? COUNTRY_LIST_FR : COUNTRY_LIST;

  function validate(): string | null {
    if (name.trim().length < 2) return t.errors.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return t.errors.email;
    if (!country) return t.errors.country;
    return null;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setError(null);
    // No backend wired yet — surface a luxe success state.
    // When ready, POST to an API route here with { name, email, country, locale }.
    setSubmitted(true);
  }

  return (
    <section
      id="apply"
      className="franchise-grain relative py-24 md:py-32 overflow-hidden"
    >
      {/* Soft gold halo behind the form */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] gold-halo"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-2xl px-6 md:px-10">
        {/* Hairline + eyebrow */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <div className="hairline w-32 mb-8" />
          <span className="font-jost text-[10px] md:text-[11px] uppercase tracking-[0.4em] gold-text">
            {t.eyebrow}
          </span>
          <h2 className="mt-5 font-cormorant font-light text-[34px] md:text-[54px] leading-[1.05] tracking-[-0.01em] text-[#f5efe0]">
            {t.title}
          </h2>
          <p className="mt-5 max-w-lg font-cormorant italic font-light text-base md:text-lg text-[#cfc6b3] leading-[1.6]">
            {t.subtitle}
          </p>
        </div>

        {submitted ? (
          <div className="form-success" role="status">
            <div className="form-success-mark">
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path d="M5 12l5 5 9-11" fill="none" stroke="#D4AF37" strokeWidth="1.4" strokeLinecap="square" />
              </svg>
            </div>
            <div className="font-cormorant text-2xl md:text-3xl text-[#f5efe0] font-light">
              {t.successTitle}
            </div>
            <p className="mt-3 font-jost text-[13px] tracking-[0.04em] text-[#b9b1a0] max-w-md mx-auto leading-[1.7]">
              {t.successBody}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-9 md:gap-10"
            aria-describedby={error ? "franchise-form-error" : undefined}
          >
            <div className="field">
              <input
                id="franchise-name"
                type="text"
                autoComplete="name"
                required
                placeholder=" "
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="field-input"
              />
              <label htmlFor="franchise-name" className="field-label">
                {t.name}
              </label>
            </div>

            <div className="field">
              <input
                id="franchise-email"
                type="email"
                autoComplete="email"
                required
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="field-input"
              />
              <label htmlFor="franchise-email" className="field-label">
                {t.email}
              </label>
            </div>

            <div className="field">
              <select
                id="franchise-country"
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="field-select"
              >
                <option value="" disabled>
                  {t.countryPlaceholder}
                </option>
                {countries.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <label htmlFor="franchise-country" className="field-label">
                {t.country}
              </label>
            </div>

            {error && (
              <div id="franchise-form-error" className="field-error" role="alert">
                {error}
              </div>
            )}

            <div className="flex flex-col items-center gap-5 mt-2">
              <button
                type="submit"
                className="btn-gold font-jost font-medium text-[12px] md:text-[13px] uppercase tracking-[0.34em] px-10 md:px-14 py-4 md:py-[18px] rounded-none inline-flex items-center gap-3"
              >
                <span>{t.submit}</span>
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none" aria-hidden="true">
                  <path d="M0 5h16M12 1l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="square" />
                </svg>
              </button>
              <p className="font-jost text-[10px] uppercase tracking-[0.3em] text-[#6f6858] text-center max-w-sm">
                {t.privacy}
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
