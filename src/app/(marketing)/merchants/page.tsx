import type { Metadata } from "next";

import { FeatureCard } from "@/components/cards";
import JsonLd from "@/components/jsonld";
import Section from "@/components/section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Merchant Partners",
  description:
    "Partner with GOBAI to accept food orders and delivery requests, manage prep time, and grow citywide.",
  alternates: { canonical: "/merchants" },
};

export default function MerchantsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "GOBAI Merchant Partners",
          url: `${site.url}/merchants`,
        }}
      />

      <Section
        eyebrow="Merchants"
        title="Sell more with food delivery and on-demand dispatch"
        subtitle="Designed for real store ops: clear acceptance, prep time, and pickup coordination."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            title="Order board"
            description="Accept/reject, set prep time, and keep queues manageable."
          />
          <FeatureCard
            title="Dispatch built-in"
            description="Request pickup without extra chat threads and missed calls."
          />
          <FeatureCard
            title="Payout clarity"
            description="Settlement records and support workflows that are easy to audit."
          />
        </div>

        <div className="mt-8 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
          <h3 className="text-base font-semibold tracking-tight">Onboarding checklist</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted-text)]">
            <li>Store details + operating hours</li>
            <li>Pickup location + contact person</li>
            <li>Menu/catalog (can start small)</li>
            <li>Verification + activation</li>
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <a
            href={`mailto:${site.contact.email}?subject=GOBAI%20Merchant%20Partnership`}
            className="inline-flex h-11 items-center rounded-2xl bg-[var(--primary)] px-4 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[var(--primary-hover)] active:scale-[0.99]"
          >
            Apply as Merchant
          </a>
          <a
            href="/newsroom"
            className="inline-flex h-11 items-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm font-semibold transition duration-200 hover:bg-[var(--muted-surface)] active:scale-[0.99]"
          >
            See Updates
          </a>
        </div>
      </Section>
    </>
  );
}
