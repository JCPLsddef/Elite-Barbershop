import {
  ABOUT_BLOCKS,
  ABOUT_HERO_IMAGE,
  GALLERY_IMAGES,
} from "@/components/sections/about/content";
import { Gallery } from "@/components/sections/about/Gallery";
import "@/components/sections/about/styles.css";

type AboutSectionProps = {
  locale: "fr" | "en";
};

export function AboutSection({ locale }: AboutSectionProps) {
  const isFr = locale === "fr";

  return (
    <>
      <div className="section-about-aesop" id="apropos">
      {ABOUT_HERO_IMAGE && (
        <div className="hero-image-wrapper-full">
          {/* Full-bleed editorial hero — uses raw <img> on purpose to preserve
              the original 100vw / object-fit behavior from the source. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ABOUT_HERO_IMAGE}
            alt={isFr ? "À propos d'Elite Barbershop" : "About Elite Barbershop"}
            className="hero-image-full"
          />
        </div>
      )}

      {ABOUT_BLOCKS.map((block, index) => {
        const delayClass =
          index === 0 ? "fade-delay-1" : index === 1 ? "fade-delay-2" : "";

        if (block.type === "textblock") {
          const layoutClass =
            block.imagePosition === "left"
              ? "reverse"
              : block.imagePosition === "center"
              ? "center"
              : "";

          const title = isFr ? block.title_fr : block.title_en;
          const text = isFr ? block.text_fr : block.text_en;

          return (
            <div className={`about-block ${delayClass}`} key={index}>
              <div className={`about-text-image ${layoutClass}`}>
                <div className="about-text center barber-text">
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>

                {block.image && (
                  <div className="about-image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={block.image}
                      alt={block.imageAlt || title}
                      className="about-barber-full"
                    />
                  </div>
                )}
              </div>
            </div>
          );
        }

        if (block.type === "quote") {
          const quote = isFr ? block.quote_fr : block.quote_en;
          return (
            <div className="about-quote" key={index}>
              {quote}
              <div className="signature">
                {isFr ? "— Hadi, Fondateur" : "— Hadi, Founder"}
              </div>
            </div>
          );
        }

        // heroblock
        const title = isFr ? block.title_fr : block.title_en;
        const text = isFr ? block.text_fr : block.text_en;
        return (
          <div className="about-block" key={index}>
            <div
              className="about-text center"
              style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}
            >
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
            {block.hero_image && (
              <div className="hero-image-wrapper-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={block.hero_image}
                  alt={title}
                  className="hero-image-full"
                />
              </div>
            )}
          </div>
        );
      })}
      </div>

      <Gallery
        title={isFr ? "Notre Galerie" : "Our Gallery"}
        images={GALLERY_IMAGES}
        prevLabel={isFr ? "Précédent" : "Previous"}
        nextLabel={isFr ? "Suivant" : "Next"}
      />
    </>
  );
}
