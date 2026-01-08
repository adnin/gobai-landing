export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-12 md:py-16">
      <div className="container-12">
        <div className="reveal">
          {eyebrow ? (
            <div className="flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-text)]">
              <span className="h-[2px] w-8 rounded-full bg-[var(--primary)]" aria-hidden />
              <span>{eyebrow}</span>
            </div>
          ) : null}

          <h2 className="mt-3 max-w-2xl font-semibold tracking-tight">{title}</h2>

          {subtitle ? (
            <p className="mt-3 max-w-2xl text-sm text-[var(--muted-text)]">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="mt-8 reveal reveal-delay-1">{children}</div>
      </div>
    </section>
  );
}
