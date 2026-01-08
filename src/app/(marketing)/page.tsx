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
        id="platform"
        eyebrow="Platform"
        title="Enterprise mobility stack across ride, parcel, and food"
        subtitle="Unified dispatch, payments, and support policies that scale citywide."
      >
        <ServiceGrid
          items={[
            {
              title: "Mobility - Ride",
              description:
                "Role-based booking, real-time routing, and policy pricing.",
              href: "/customers",
              badge: "Core",
            },
            {
              title: "Logistics - Parcel",
              description:
                "Milestone tracking, proof of delivery, and audit-ready receipts.",
              href: "/customers",
              badge: "Ops-ready",
            },
            {
              title: "Commerce - Food",
              description:
                "Prep time visibility, merchant controls, and accurate ETAs.",
              href: "/customers",
              badge: "SLA-ready",
            },
          ]}
        />
      </Section>

      <StatsStrip
        title="Operational readiness metrics (replace with live data)"
        subtitle="Show SLA targets and outcomes once the ops dashboard is live."
        stats={[
          { label: "Dispatch SLA target", value: "99.9%" },
          { label: "Median pickup time", value: "< 5 min" },
          { label: "Citywide support coverage", value: "24/7" },
          { label: "Role-based workspaces", value: "3 apps" },
        ]}
      />

      <Section
        id="operations"
        eyebrow="Operations"
        title="Governance, safety, and support in one console"
        subtitle="Policy engine, audit trails, and escalation paths built for public trust."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            title="Policy engine"
            description="Define pricing, surge, and routing rules with approvals."
          />
          <FeatureCard
            title="Audit trail"
            description="Every action logged across customer, merchant, and driver flows."
          />
          <FeatureCard
            title="Incident response"
            description="Escalation workflows with clear ownership and timelines."
          />
        </div>
      </Section>

      <Section
        id="customers"
        eyebrow="Customers"
        title="Consumer experience backed by enterprise controls"
        subtitle="Predictable pricing, consistent ETAs, and support that resolves issues fast."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            title="Live status"
            description="Track movement, ETAs, and receipts in one clear view."
          />
          <FeatureCard
            title="Transparent pricing"
            description="Itemized receipts with consistent rules and fewer surprises."
          />
          <FeatureCard
            title="Support resolution"
            description="Ops-ready workflows so issues get handled quickly."
          />
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <a
            href="/customers"
            className="inline-flex h-11 items-center rounded-2xl bg-[var(--primary)] px-5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[var(--primary-hover)] active:scale-[0.99]"
          >
            Explore Customer App
          </a>
          <a
            href="/newsroom"
            className="inline-flex h-11 items-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 text-sm font-semibold transition duration-200 hover:bg-[var(--muted-surface)] active:scale-[0.99]"
          >
            Read updates
          </a>
        </div>
      </Section>

      <Section
        id="merchants"
        eyebrow="Merchants"
        title="Store operations that stay predictable"
        subtitle="Clear prep time, dispatch coordination, and payout accuracy."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            title="Order intake"
            description="Accept, schedule, and manage queues without chaos."
          />
          <FeatureCard
            title="Dispatch coordination"
            description="Request pickup without extra calls and chat threads."
          />
          <FeatureCard
            title="Payout audits"
            description="Settlement records and support workflows that are easy to verify."
          />
        </div>
        <div className="mt-6">
          <a
            href="/merchants"
            className="inline-flex h-11 items-center rounded-2xl bg-[var(--primary)] px-5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[var(--primary-hover)] active:scale-[0.99]"
          >
            Partner as a Merchant
          </a>
        </div>
      </Section>

      <Section
        id="drivers"
        eyebrow="Drivers"
        title="Driver partner workflow with safety and clarity"
        subtitle="Transparent offers, wallet visibility, and escalation support."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            title="Fair dispatch"
            description="Clear offer rules and consistent policies across services."
          />
          <FeatureCard
            title="Wallet tracking"
            description="Track earnings, fees, and incentives with audit-ready records."
          />
          <FeatureCard
            title="Safety support"
            description="Escalation pathways and verified trips when issues happen."
          />
        </div>
        <div className="mt-6">
          <a
            href="/drivers"
            className="inline-flex h-11 items-center rounded-2xl bg-[var(--primary)] px-5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[var(--primary-hover)] active:scale-[0.99]"
          >
            Drive with GOBAI
          </a>
        </div>
      </Section>

      <Section
        id="newsroom"
        eyebrow="Newsroom"
        title="Operations updates and launch notes"
        subtitle="A simple newsroom you can later power from your API or CMS."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <NewsCard
            date="2026-01-01"
            title="GOBAI pilot: what we ship first"
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
            excerpt="Verification, training, and safety first escalation pathways."
            href="/newsroom"
          />
        </div>
      </Section>

      <Section
        id="faq"
        eyebrow="FAQ"
        title="Common questions"
        subtitle="Clear answers improve conversion and reduce support load."
      >
        <FAQ
          items={[
            {
              q: "How does GOBAI launch in a new city?",
              a: "We launch citywide with a controlled rollout, then expand area by area once operations stabilize.",
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
        id="get-started"
        eyebrow="Get started"
        title="One platform. Three roles. One city at a time."
        subtitle="Start a pilot or explore the role-specific apps."
      >
        <div className="flex flex-wrap gap-2">
          <a
            href={`mailto:${site.contact.email}?subject=GOBAI%20Pilot%20Request`}
            className="inline-flex h-11 items-center rounded-2xl bg-[var(--primary)] px-5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[var(--primary-hover)] active:scale-[0.99]"
          >
            Request a pilot
          </a>
          <a
            href="/customers"
            className="inline-flex h-11 items-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 text-sm font-semibold transition duration-200 hover:bg-[var(--muted-surface)] active:scale-[0.99]"
          >
            For Customers
          </a>
          <a
            href="/merchants"
            className="inline-flex h-11 items-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 text-sm font-semibold transition duration-200 hover:bg-[var(--muted-surface)] active:scale-[0.99]"
          >
            For Merchants
          </a>
          <a
            href="/drivers"
            className="inline-flex h-11 items-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 text-sm font-semibold transition duration-200 hover:bg-[var(--muted-surface)] active:scale-[0.99]"
          >
            For Drivers
          </a>
        </div>
      </Section>
    </>
  );
}

