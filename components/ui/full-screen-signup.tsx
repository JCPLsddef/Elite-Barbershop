"use client";

import { Crown } from "lucide-react";
import { useState } from "react";
import "@/components/ui/full-screen-signup.css";

type Copy = {
  leftHeadline: string;
  leftSub: string;
  eyebrow: string;
  title: string;
  welcome: string;
  fullName: string;
  fullNamePh: string;
  email: string;
  emailPh: string;
  phone: string;
  phonePh: string;
  country: string;
  countryPh: string;
  message: string;
  messagePh: string;
  submit: string;
  sending: string;
  errorEmail: string;
  errorRequired: string;
  successTitle: string;
  successBody: string;
  privacy: string;
};

const COPY: Record<"fr" | "en", Copy> = {
  en: {
    leftHeadline: "Open your own Elite Barbershop.",
    leftSub: "Luxury. Loyalty. Leadership.",
    eyebrow: "Franchise · Application",
    title: "Apply for your territory",
    welcome:
      "A rigorous selection. A legacy in the making. Leave your details and our team will return to you personally.",
    fullName: "Full name",
    fullNamePh: "Jean Dupont",
    email: "Email address",
    emailPh: "you@example.com",
    phone: "Phone number",
    phonePh: "+1 (514) 000-0000",
    country: "Country / Region",
    countryPh: "Select a country",
    message: "Tell us about you (optional)",
    messagePh:
      "Background, target city, timeline, why Elite — anything relevant.",
    submit: "Submit Application",
    sending: "Sending…",
    errorEmail: "Please enter a valid email address.",
    errorRequired: "This field is required.",
    successTitle: "Application received",
    successBody:
      "Thank you for your interest. Our team will contact you personally within 72 hours.",
    privacy: "Your information stays confidential. Reply within 72 hours.",
  },
  fr: {
    leftHeadline: "Ouvrez votre propre Elite Barbershop.",
    leftSub: "Luxe. Loyauté. Leadership.",
    eyebrow: "Franchise · Candidature",
    title: "Demandez votre territoire",
    welcome:
      "Une sélection rigoureuse. Un héritage en construction. Laissez-nous vos coordonnées et notre équipe reviendra vers vous personnellement.",
    fullName: "Nom complet",
    fullNamePh: "Jean Dupont",
    email: "Adresse courriel",
    emailPh: "vous@exemple.com",
    phone: "Téléphone",
    phonePh: "+1 (514) 000-0000",
    country: "Pays / Région",
    countryPh: "Sélectionnez un pays",
    message: "Parlez-nous de vous (optionnel)",
    messagePh:
      "Parcours, ville cible, échéancier, pourquoi Elite — tout ce qui est pertinent.",
    submit: "Soumettre ma candidature",
    sending: "Envoi en cours…",
    errorEmail: "Veuillez entrer une adresse courriel valide.",
    errorRequired: "Ce champ est obligatoire.",
    successTitle: "Candidature reçue",
    successBody:
      "Merci pour votre intérêt. Notre équipe vous contactera personnellement sous 72 heures.",
    privacy:
      "Vos informations restent confidentielles. Réponse sous 72 heures.",
  },
};

const COUNTRIES_EN = [
  "Canada", "United States", "Mexico", "United Kingdom", "France",
  "Italy", "Spain", "Portugal", "Germany", "Switzerland",
  "United Arab Emirates", "Saudi Arabia", "Qatar", "Singapore",
  "Japan", "South Korea", "Australia", "Other",
];
const COUNTRIES_FR = [
  "Canada", "États-Unis", "Mexique", "Royaume-Uni", "France",
  "Italie", "Espagne", "Portugal", "Allemagne", "Suisse",
  "Émirats arabes unis", "Arabie saoudite", "Qatar", "Singapour",
  "Japon", "Corée du Sud", "Australie", "Autre",
];

type FullScreenSignupProps = {
  locale?: "fr" | "en";
};

export const FullScreenSignup = ({ locale = "en" }: FullScreenSignupProps) => {
  const t = COPY[locale];
  const countries = locale === "fr" ? COUNTRIES_FR : COUNTRIES_EN;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: { [k: string]: string } = {};
    if (!name.trim()) next.name = t.errorRequired;
    if (!validateEmail(email)) next.email = t.errorEmail;
    if (!country) next.country = t.errorRequired;
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    try {
      // TODO: wire to real endpoint when available
      await new Promise((r) => setTimeout(r, 800));
      setSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setCountry("");
      setMessage("");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fss-root">
      <div className="fss-card">
        {/* Decorative gradient bars (slim columns of subtle light) */}
        <div className="fss-bars" aria-hidden>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <span key={i} className="fss-bar" />
          ))}
        </div>

        {/* Decorative bronze glow blob (replaces orange sun) */}
        <span className="fss-glow" aria-hidden />
        <span className="fss-glow-pad fss-glow-pad--1" aria-hidden />
        <span className="fss-glow-pad fss-glow-pad--2" aria-hidden />

        {/* LEFT — tagline panel */}
        <div className="fss-left">
          <h2 className="fss-left-headline">
            {t.leftHeadline.split(" Elite ")[0]}{" "}
            <em>Elite</em>{" "}
            {t.leftHeadline.split(" Elite ")[1] || ""}
          </h2>
          <p className="fss-left-sub">{t.leftSub}</p>

          <ul className="fss-left-bullets" aria-hidden>
            <li><span className="fss-bullet-dot" />Proven luxury concept</li>
            <li><span className="fss-bullet-dot" />Brand training & systems</li>
            <li><span className="fss-bullet-dot" />Global expansion in progress</li>
          </ul>
        </div>

        {/* RIGHT — form panel */}
        <div className="fss-right">
          <div className="fss-right-head">
            <div className="fss-icon" aria-hidden>
              <Crown className="h-8 w-8" strokeWidth={1.25} />
            </div>
            <span className="fss-eyebrow">{t.eyebrow}</span>
            <h3 className="fss-title">{t.title}</h3>
            <p className="fss-welcome">{t.welcome}</p>
          </div>

          {success ? (
            <div className="fss-success" role="status" aria-live="polite">
              <h4 className="fss-success-title">{t.successTitle}</h4>
              <p className="fss-success-body">{t.successBody}</p>
            </div>
          ) : (
            <form className="fss-form" onSubmit={handleSubmit} noValidate>
              <div className="fss-field">
                <label htmlFor="fss-name">{t.fullName}</label>
                <input
                  id="fss-name"
                  type="text"
                  placeholder={t.fullNamePh}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={errors.name ? "is-invalid" : ""}
                  aria-invalid={!!errors.name}
                  required
                />
                {errors.name && <span className="fss-err">{errors.name}</span>}
              </div>

              <div className="fss-field">
                <label htmlFor="fss-email">{t.email}</label>
                <input
                  id="fss-email"
                  type="email"
                  placeholder={t.emailPh}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={errors.email ? "is-invalid" : ""}
                  aria-invalid={!!errors.email}
                  required
                />
                {errors.email && <span className="fss-err">{errors.email}</span>}
              </div>

              <div className="fss-field fss-field--row">
                <div>
                  <label htmlFor="fss-phone">{t.phone}</label>
                  <input
                    id="fss-phone"
                    type="tel"
                    placeholder={t.phonePh}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="fss-country">{t.country}</label>
                  <select
                    id="fss-country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className={errors.country ? "is-invalid" : ""}
                    aria-invalid={!!errors.country}
                    required
                  >
                    <option value="">{t.countryPh}</option>
                    {countries.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  {errors.country && (
                    <span className="fss-err">{errors.country}</span>
                  )}
                </div>
              </div>

              <div className="fss-field">
                <label htmlFor="fss-message">{t.message}</label>
                <textarea
                  id="fss-message"
                  rows={3}
                  placeholder={t.messagePh}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="fss-submit"
                disabled={submitting}
              >
                {submitting ? t.sending : t.submit}
              </button>

              <p className="fss-privacy">{t.privacy}</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default FullScreenSignup;
