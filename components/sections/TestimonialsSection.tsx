"use client";

import { useCallback, useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowUpRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/testimonials";
import { BUSINESS } from "@/lib/constants";

import "@/components/sections/testimonials/styles.css";

function StarIcon() {
  return (
    <svg className="elite-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .587l3.668 7.568L24 9.75l-6 5.922L19.335 24 12 20.013 4.665 24 6 15.672 0 9.75l8.332-1.595z" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const locale = useLocale() as "fr" | "en";

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const onNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const onDotClick = useCallback(
    (idx: number) => emblaApi?.scrollTo(idx),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-rotate every 7s — pause on user interaction
  useEffect(() => {
    if (!emblaApi) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let id: ReturnType<typeof setInterval> | null = null;
    const start = () => {
      stop();
      id = setInterval(() => emblaApi.scrollNext(), 7000);
    };
    const stop = () => {
      if (id) clearInterval(id);
      id = null;
    };

    start();
    emblaApi.on("pointerDown", stop);
    emblaApi.on("pointerUp", start);
    return () => {
      stop();
      emblaApi.off("pointerDown", stop);
      emblaApi.off("pointerUp", start);
    };
  }, [emblaApi]);

  return (
    <section className="elite-testimonials-section" id="testimonials" aria-label="Testimonials">
      <h2 className="elite-testimonials-title">{t("title")}</h2>

      <div className="elite-rating-burst">
        <div className="elite-rating-text-group">
          <h3 className="elite-rating-h1">{t("ratingHeadline")}</h3>
          <p className="elite-rating-h2">{t("ratingDesc")}</p>
        </div>
      </div>

      <div className="elite-testimonials-carousel">
        <div className="elite-embla" ref={emblaRef}>
          <div className="elite-embla__container">
            {TESTIMONIALS.map((testimonial) => {
              const quote =
                locale === "fr" ? testimonial.quote_fr : testimonial.quote_en;
              const location =
                locale === "fr"
                  ? testimonial.location_fr
                  : testimonial.location_en;

              return (
                <div className="elite-embla__slide" key={testimonial.name}>
                  <article className="elite-testimonial-card">
                    <div>
                      <div className="elite-avatar" aria-hidden="true">
                        {getInitials(testimonial.name)}
                      </div>
                      <div className="elite-stars" aria-label={`${testimonial.rating} étoiles sur 5`}>
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <StarIcon key={i} />
                        ))}
                      </div>
                    </div>

                    <blockquote className="elite-quote">
                      &ldquo;{quote}&rdquo;
                    </blockquote>

                    <footer className="elite-author">
                      — {testimonial.name.toUpperCase()}
                      {location ? `, ${location.toUpperCase()}` : ""}
                    </footer>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* Arrows */}
        <div className="elite-carousel-arrows">
          <button
            type="button"
            className="elite-arrow elite-arrow-left"
            aria-label={t("previous")}
            onClick={onPrev}
            disabled={!canPrev && !emblaApi?.options?.()?.loop}
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            className="elite-arrow elite-arrow-right"
            aria-label={t("next")}
            onClick={onNext}
            disabled={!canNext && !emblaApi?.options?.()?.loop}
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="elite-dots" role="tablist" aria-label="Pagination">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={idx === selectedIndex}
              aria-label={`${idx + 1} / ${scrollSnaps.length}`}
              className={`elite-dot ${idx === selectedIndex ? "is-active" : ""}`}
              onClick={() => onDotClick(idx)}
            />
          ))}
        </div>
      </div>

      <div className="elite-testimonials-foot">
        <a
          href={BUSINESS.gbpUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("viewMore")}
          <ArrowUpRight size={14} strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}
