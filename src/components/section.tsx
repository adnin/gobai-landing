export default function Section({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-12 md:py-16">
      <div className="container-12">
        {eyebrow ? (
          <p className="text-[13px] font-semibold uppercase tracking-wide text-[var(--primary)]">
            {eyebrow}
          </p>
        ) : null}

        <h2 className="mt-2 font-semibold tracking-tight">{title}</h2>

        {subtitle ? (
          <p className="mt-3 max-w-2xl text-sm text-[var(--muted-text)]">
            {subtitle}
          </p>
        ) : null}

        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
