import type { Metadata } from "next";

import Section from "@/components/section";
import { NewsCard } from "@/components/cards";

export const metadata: Metadata = {
  title: "Newsroom",
  description: "Updates, launches, and community programs from GOBAI.",
  alternates: { canonical: "/newsroom" },
};

export default function NewsroomPage() {
  // Later: connect this to your API or a CMS.
  const items = [
    {
      date: "2026-01-01",
      title: "GOBAI pilot: what we build first",
      excerpt:
        "Operational reliability first: dispatch, tracking, and support workflows.",
    },
    {
      date: "2026-01-01",
      title: "Merchant onboarding",
      excerpt:
        "How stores get verified, activated, and supported during rollout.",
    },
    {
      date: "2026-01-01",
      title: "Driver orientation",
      excerpt:
        "Verification, training, and safety-first escalation pathways.",
    },
  ];

  return (
    <Section
      eyebrow="Newsroom"
      title="Updates and announcements"
      subtitle="Short, readable posts. Easy to expand later."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((x) => (
          <NewsCard
            key={x.title}
            date={x.date}
            title={x.title}
            excerpt={x.excerpt}
            href="#"
          />
        ))}
      </div>
    </Section>
  );
}
