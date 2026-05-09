"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { Footer } from "@/components/layout/Footer";

// Hide the global footer on routes where the page provides its own ending:
// - home (segment === null): VisitSection + FAQ act as the footer
// - /a-propos and /en/about: page ends on the gallery section
const HIDDEN_ON: ReadonlyArray<string | null> = [null, "about"];

export function ConditionalFooter() {
  const segment = useSelectedLayoutSegment();
  if (HIDDEN_ON.includes(segment)) return null;
  return <Footer />;
}
