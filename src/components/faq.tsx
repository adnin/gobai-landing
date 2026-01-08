function ChevronDownIcon() {
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
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function FAQ({
  items,
}: {
  items: Array<{ q: string; a: string }>;
}) {
  return (
    <div className="space-y-3">
      {items.map((x) => (
        <details
          key={x.q}
          className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-card)]"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">
            <span>{x.q}</span>
            <span className="text-[var(--muted-text)] transition duration-200 group-open:rotate-180">
              <ChevronDownIcon />
            </span>
          </summary>
          <p className="mt-3 text-sm text-[var(--muted-text)]">{x.a}</p>
        </details>
      ))}
    </div>
  );
}
