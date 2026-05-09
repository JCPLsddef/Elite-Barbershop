"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import "@/components/sections/faq/styles.css";

const QUESTION_KEYS = ["q1", "q2", "q3", "q4"] as const;

export function FAQ() {
  const t = useTranslations("faq");
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const currentYear = new Date().getFullYear();

  return (
    <section className="elite-faq-section" id="faq" aria-label={t("title")}>
      <div className="faq-container">
        <h2 className="faq-title">{t("title")}</h2>

        <div className="faq-accordion">
          {QUESTION_KEYS.map((key, idx) => {
            const isOpen = openIdx === idx;
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;
            return (
              <div
                key={key}
                className={`faq-item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  id={buttonId}
                  className="faq-question"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                >
                  <span className="faq-question-text">{t(`${key}.q`)}</span>
                  <span className="faq-icon" aria-hidden="true">
                    +
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="faq-answer"
                >
                  <div className="faq-answer-inner">
                    <p>{t(`${key}.a`)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="faq-copyright">
          <p>
            © {currentYear}{" "}
            <span className="gold">Elite Barbershop by Hadi</span>
            {" — "}
            {t("rights")}
          </p>
        </div>
      </div>
    </section>
  );
}
