import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { FranchiseSection } from "@/components/sections/FranchiseSection";

type FranchiseProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: FranchiseProps): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";
  return {
    title: isFr ? "Franchise" : "Franchise",
    description: isFr
      ? "Devenez propriétaire d'un Elite Barbershop. Un concept de luxe conçu pour s'étendre au-delà d'une seule ville."
      : "Own an Elite Barbershop. A luxury concept built to expand beyond one city.",
  };
}

export default async function FranchisePage({ params }: FranchiseProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const safeLocale = locale === "en" ? "en" : "fr";
  return <FranchiseSection locale={safeLocale} />;
}
