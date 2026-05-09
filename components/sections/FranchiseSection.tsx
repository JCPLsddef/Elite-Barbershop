import { FranchiseHero } from "@/components/sections/franchise/FranchiseHero";
import { FranchiseForm } from "@/components/sections/franchise/FranchiseForm";
import "@/components/sections/franchise/styles.css";

type FranchiseSectionProps = {
  locale: "fr" | "en";
};

export function FranchiseSection({ locale }: FranchiseSectionProps) {
  return (
    <main className="franchise-page">
      <FranchiseHero locale={locale} />
      <FranchiseForm locale={locale} />
    </main>
  );
}
