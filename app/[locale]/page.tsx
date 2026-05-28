import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutShowcase } from "@/components/sections/AboutShowcase";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { VisitSection } from "@/components/sections/VisitSection";
import { FAQ } from "@/components/sections/FAQ";

type HomeProps = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const typedLocale = locale === "en" ? "en" : "fr";

  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutShowcase locale={typedLocale} />
      <TestimonialsSection />
      <VisitSection />
      <FAQ />
    </>
  );
}
