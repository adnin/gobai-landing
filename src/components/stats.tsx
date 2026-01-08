export default function StatsStrip({
  title,
  subtitle,
  stats,
}: {
  title: string;
  subtitle?: string;
  stats: Array<{ label: string; value: string }>;
}) {
  return (
    <section className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--surface)] py-12">
      <div className="pointer-events-none absolute inset-0 hero-backdrop" aria-hidden />
      <div className="pointer-events-none absolute inset-0 hero-grid" aria-hidden />
      <div className="container-12 relative">
        <div className="reveal">
          <h2 className="font-semibold tracking-tight">{title}</h2>
          {subtitle ? (
            <p className="mt-3 max-w-2xl text-sm text-[var(--muted-text)]">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4 reveal reveal-delay-1">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-card)]"
            >
              <div className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-text)]">
                {s.label}
              </div>
              <div className="mt-2 text-2xl font-semibold tracking-tight">
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
