import type { Metadata } from "next";
import "./globals.css";

import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Rides, Parcel & Food Delivery`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} — Rides, Parcel & Food Delivery`,
    description: site.description,
    siteName: site.name,
    locale: site.locale,
    images: [
      {
        url: "/gobai-og.png",
        width: 1200,
        height: 630,
        alt: `${site.name} preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Rides, Parcel & Food Delivery`,
    description: site.description,
    images: ["/gobai-og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-dvh bg-[var(--bg)] text-[var(--text)]">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-zinc-900 focus:shadow"
        >
          Skip to content
        </a>

        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
