import type { Metadata } from "next";

import { FeatureCard } from "@/components/cards";
import JsonLd from "@/components/jsonld";
import Section from "@/components/section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Customer App",
  description:
    "Book rides, send parcels, and order food with clear tracking and citywide support—on GOBAI.",
  alternates: { canonical: "/customers" },
};

export default function CustomersPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "GOBAI Customer App",
          url: `${site.url}/customers`,
        }}
      />

      <Section
        eyebrow="Customers"
        title="Rides and delivery that feel simple"
        subtitle="Fast booking, clear status, and a support flow that works in real life."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            title="Ride"
            description="Book a ride with live tracking and consistent pricing rules."
          />
          <FeatureCard
            title="Parcel"
            description="Send items across town with milestones and proof-of-delivery."
          />
          <FeatureCard
            title="Food"
            description="Order from merchants with prep-time visibility and accurate ETAs."
          />
        </div>

        <div className="mt-6 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
          <h3 className="text-base font-semibold tracking-tight">Downloads</h3>
          <p className="mt-2 text-sm text-[var(--muted-text)]">
            Add your Play Store / App Store links when ready.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              className="inline-flex h-11 items-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm font-semibold transition duration-200 hover:bg-[var(--muted-surface)] active:scale-[0.99]"
              href="#"
            >
              Android (soon)
            </a>
            <a
              className="inline-flex h-11 items-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm font-semibold transition duration-200 hover:bg-[var(--muted-surface)] active:scale-[0.99]"
              href="#"
            >
              iOS (soon)
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
