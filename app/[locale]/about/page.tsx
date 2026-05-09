import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { AboutSection } from "@/components/sections/AboutSection";

type AboutProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: AboutProps): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";
  return {
    title: isFr ? "À propos" : "About Us",
    description: isFr
      ? "L'histoire d'Elite Barbershop — Hadi, Evan et la maison du style masculin à Laval."
      : "The story of Elite Barbershop — Hadi, Evan, and the home of men's style in Laval.",
  };
}

export default async function AboutPage({ params }: AboutProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const safeLocale = locale === "en" ? "en" : "fr";
  return <AboutSection locale={safeLocale} />;
}
