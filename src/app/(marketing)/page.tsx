import Hero from "@/components/hero";
import Section from "@/components/section";
import { FeatureCard, NewsCard, ServiceGrid } from "@/components/cards";
import FAQ from "@/components/faq";
import JsonLd from "@/components/jsonld";
import StatsStrip from "@/components/stats";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: site.legalName,
          url: site.url,
          logo: `${site.url}/gobai-og.png`,
          areaServed: "PH",
        }}
      />

      <Hero />

      <Section
        eyebrow="Services"
        title="Ride, Parcel, and Food—built to work citywide"
        subtitle="Three core services first. Expand only when operations are stable."
      >
        <ServiceGrid
          items={[
            {
              title: "Mobility • Ride",
              description:
                "Book a ride from A to B with clear pricing, live tracking, and safety-first design.",
              href: "/customers",
            },
            {
              title: "Delivery • Parcel",
              description:
                "Send items across town with reliable status updates and proof-of-delivery flows.",
              href: "/customers",
            },
            {
              title: "Delivery • Food",
              description:
                "Order food from partner merchants with prep-time visibility and accurate ETAs.",
              href: "/customers",
            },
          ]}
        />
      </Section>

      <StatsStrip
        title="GOBAI’s contribution (replace with real metrics)"
        subtitle="Once your ops dashboard is live, swap these placeholders with actual numbers."
        stats={[
          { label: "Daily completed rides", value: "—" },
          { label: "Daily parcel deliveries", value: "—" },
          { label: "Daily food orders", value: "—" },
          { label: "Partner earning opportunities", value: "—" },
        ]}
      />

      <Section
        eyebrow="For customers"
        title="Fast booking. Clear tracking. Simple experience."
        subtitle="A clean flow that reduces confusion and makes support easier."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            title="Live status"
            description="See driver movement, ETAs, and milestones in one screen."
          />
          <FeatureCard
            title="Fair pricing"
            description="Itemized receipts with consistent rules and fewer surprises."
          />
          <FeatureCard
            title="Support that answers"
            description="Ops-ready tools so issues get resolved quickly."
          />
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <a
            href="/customers"
            className="inline-flex h-11 items-center rounded-2xl bg-[var(--primary)] px-4 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[var(--primary-hover)] active:scale-[0.99]"
          >
            Explore Customer App
          </a>
          <a
            href="/newsroom"
            className="inline-flex h-11 items-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm font-semibold transition duration-200 hover:bg-[var(--muted-surface)] active:scale-[0.99]"
          >
            Read updates
          </a>
        </div>
      </Section>

      <Section
        eyebrow="For merchants"
        title="Turn your store into a delivery-ready business"
        subtitle="Tools that fit real store workflows: accept, prepare, dispatch."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            title="Order board"
            description="Accept/reject, set prep time, and keep operations smooth."
          />
          <FeatureCard
            title="Dispatch built-in"
            description="One tap to request pickup—no messy coordination."
          />
          <FeatureCard
            title="Payout clarity"
            description="Clear settlement records with support when something looks off."
          />
        </div>
        <div className="mt-6">
          <a
            href="/merchants"
            className="inline-flex h-11 items-center rounded-2xl bg-[var(--primary)] px-4 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[var(--primary-hover)] active:scale-[0.99]"
          >
            Partner as a Merchant
          </a>
        </div>
      </Section>

      <Section
        eyebrow="For drivers"
        title="Earn with confidence"
        subtitle="Transparent offers, clear rules, and a support flow that works."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            title="Fair dispatch"
            description="Clear offer timeouts and consistent rules across services."
          />
          <FeatureCard
            title="Wallet-ready"
            description="Track earnings, fees, and incentives with auditable records."
          />
          <FeatureCard
            title="Safety flow"
            description="Verified trips and escalation pathways when issues happen."
          />
        </div>
        <div className="mt-6">
          <a
            href="/drivers"
            className="inline-flex h-11 items-center rounded-2xl bg-[var(--primary)] px-4 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[var(--primary-hover)] active:scale-[0.99]"
          >
            Drive with GOBAI
          </a>
        </div>
      </Section>

      <Section
        eyebrow="Newsroom"
        title="Updates, launches, and community programs"
        subtitle="A simple newsroom you can later power from your API/CMS."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <NewsCard
            date="2026-01-01"
            title="GOBAI pilot: what we build first"
            excerpt="Operational reliability first: dispatch, tracking, and support workflows."
            href="/newsroom"
          />
          <NewsCard
            date="2026-01-01"
            title="Merchant onboarding"
            excerpt="How stores get verified, activated, and supported during rollout."
            href="/newsroom"
          />
          <NewsCard
            date="2026-01-01"
            title="Driver orientation"
            excerpt="Verification, training, and safety-first escalation pathways."
            href="/newsroom"
          />
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Common questions" subtitle="Clear answers help conversion and reduce support load.">
        <FAQ
          items={[
            {
              q: "Where is GOBAI available?",
              a: "GOBAI launches citywide first, then expands barangay-by-barangay after operations stabilize.",
            },
            {
              q: "How do merchants join?",
              a: "Apply, verify store details, set operating hours, then start receiving delivery-ready orders.",
            },
            {
              q: "How do drivers earn?",
              a: "Earn per ride or delivery with transparent tracking and clear support flows.",
            },
          ]}
        />
      </Section>

      <Section
        eyebrow="Get started"
        title="One platform. Three roles. One city at a time."
        subtitle="Choose your path and get moving with GOBAI."
      >
        <div className="flex flex-wrap gap-2">
          <a
            href="/customers"
            className="inline-flex h-11 items-center rounded-2xl bg-[var(--primary)] px-4 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[var(--primary-hover)] active:scale-[0.99]"
          >
            For Customers
          </a>
          <a
            href="/merchants"
            className="inline-flex h-11 items-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm font-semibold transition duration-200 hover:bg-[var(--muted-surface)] active:scale-[0.99]"
          >
            For Merchants
          </a>
          <a
            href="/drivers"
            className="inline-flex h-11 items-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm font-semibold transition duration-200 hover:bg-[var(--muted-surface)] active:scale-[0.99]"
          >
            For Drivers
          </a>
        </div>
      </Section>
    </>
  );
}
