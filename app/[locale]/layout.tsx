import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { ConditionalFooter } from "@/components/layout/ConditionalFooter";
import "../globals.css";

// Bodoni Moda — display serif. Carries optical-size axis automatically.
// Used via --font-display for: h1-h4, hero/section/service titles, prices.
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Manrope — modern geometric sans. Used via --font-body for:
// body text, navigation, buttons, labels, meta, inputs.
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Elite Barbershop · Laval",
    template: "%s · Elite Barbershop",
  },
  description: "Luxe. Loyauté. Leadership. Le barbier de référence à Laval.",
  metadataBase: new URL("https://elitebyhadi.com"),
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${bodoni.variable} ${manrope.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[color:var(--color-surface-1)]">
        <NextIntlClientProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <ConditionalFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
