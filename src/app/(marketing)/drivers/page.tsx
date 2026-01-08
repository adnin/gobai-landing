import type { Metadata } from "next";

import { FeatureCard } from "@/components/cards";
import JsonLd from "@/components/jsonld";
import Section from "@/components/section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Driver Partners",
  description:
    "Drive with GOBAI: flexible earning, transparent offer rules, and support.",
  alternates: { canonical: "/drivers" },
};

export default function DriversPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "GOBAI Driver Partners",
          url: `${site.url}/drivers`,
        }}
      />

      <Section
        eyebrow="Drivers"
        title="Earn with structure, not stress"
        subtitle="Transparent offers, consistent rules, and a support flow that works."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            title="Clear offer rules"
            description="Simple timeouts and consistent policies across ride, parcel, and food."
          />
          <FeatureCard
            title="Wallet-ready tracking"
            description="Track earnings, fees, and incentives with audit-friendly records."
          />
          <FeatureCard
            title="Safety-first support"
            description="Escalation pathways when issues happen—built for real operations."
          />
        </div>

        <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-card)]">
          <h3 className="text-base font-semibold tracking-tight">Requirements (example)</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted-text)]">
            <li>Valid license</li>
            <li>Vehicle details</li>
            <li>Basic verification</li>
            <li>Orientation / training</li>
          </ul>
        </div>
      </Section>
    </>
  );
}
