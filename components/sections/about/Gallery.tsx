"use client";

import { useState } from "react";

type GalleryProps = {
  title: string;
  images: string[];
  prevLabel: string;
  nextLabel: string;
};

export function Gallery({ title, images, prevLabel, nextLabel }: GalleryProps) {
  const [current, setCurrent] = useState(0);
  const move = (dir: number) =>
    setCurrent((c) => (c + dir + images.length) % images.length);

  if (images.length === 0) return null;

  return (
    <section className="elite-gallery-section" id="galerie">
      <h2>{title}</h2>
      <div className="elite-gallery-slider">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, i) => (
            <div className="slide" key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`Galerie ${i + 1}`} />
            </div>
          ))}
        </div>
        <button
          type="button"
          className="nav prev"
          aria-label={prevLabel}
          onClick={() => move(-1)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <button
          type="button"
          className="nav next"
          aria-label={nextLabel}
          onClick={() => move(1)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
          </svg>
        </button>
      </div>
    </section>
  );
}
