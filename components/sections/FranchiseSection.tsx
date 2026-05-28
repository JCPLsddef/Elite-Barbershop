import { FranchiseHero } from "@/components/sections/franchise/FranchiseHero";
import { FullScreenSignup } from "@/components/ui/full-screen-signup";
import "@/components/sections/franchise/styles.css";

type FranchiseSectionProps = {
  locale: "fr" | "en";
};

export function FranchiseSection({ locale }: FranchiseSectionProps) {
  return (
    <main className="franchise-page">
      <FranchiseHero locale={locale} />
      <FullScreenSignup locale={locale} />
    </main>
  );
}
