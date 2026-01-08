import Link from "next/link";

function ChevronRightIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function ServiceGrid({
  items,
}: {
  items: Array<{
    title: string;
    description: string;
    href: string;
    badge?: string;
  }>;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((x) => (
        <Link
          key={x.title}
          href={x.href}
          className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)] active:scale-[0.99]"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-semibold tracking-tight">{x.title}</h3>
            {x.badge ? (
              <span className="rounded-full bg-[var(--primary-soft)] px-2.5 py-1 text-[13px] font-semibold text-[var(--primary-ink)]">
                {x.badge}
              </span>
            ) : null}
          </div>
          <p className="mt-2 text-sm text-[var(--muted-text)]">{x.description}</p>
          <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary)]">
            Learn more{" "}
            <span className="transition duration-200 group-hover:translate-x-0.5">
              <ChevronRightIcon />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-card)]">
      <h3 className="text-base font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-[var(--muted-text)]">{description}</p>
    </div>
  );
}

export function NewsCard({
  date,
  title,
  excerpt,
  href,
}: {
  date: string;
  title: string;
  excerpt: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)] active:scale-[0.99]"
    >
      <div className="text-[13px] font-semibold text-[var(--muted-text)]">{date}</div>
      <div className="mt-2 text-base font-semibold tracking-tight">{title}</div>
      <p className="mt-2 text-sm text-[var(--muted-text)]">{excerpt}</p>
      <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary)]">
        Read more <ChevronRightIcon />
      </div>
    </Link>
  );
}
