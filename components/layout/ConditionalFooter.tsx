"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { Footer } from "@/components/layout/Footer";

// Hide the global footer on routes where the page should "end" on its own
// (e.g. /a-propos and /en/about end on the gallery section).
const HIDDEN_ON: ReadonlyArray<string | null> = ["about"];

export function ConditionalFooter() {
  const segment = useSelectedLayoutSegment();
  if (HIDDEN_ON.includes(segment)) return null;
  return <Footer />;
}
