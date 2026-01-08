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
    <section className="border-y border-[var(--border)] bg-[var(--muted-surface)] py-12">
      <div className="container-12">
        <div>
          <h2 className="font-semibold tracking-tight">{title}</h2>
          {subtitle ? (
            <p className="mt-3 max-w-2xl text-sm text-[var(--muted-text)]">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm"
            >
              <div className="text-2xl font-semibold tracking-tight">
                {s.value}
              </div>
              <div className="mt-2 text-[13px] text-[var(--muted-text)]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
