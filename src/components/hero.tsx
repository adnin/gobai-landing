import Link from "next/link";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="pointer-events-none absolute inset-0 hero-backdrop" aria-hidden />
      <div className="pointer-events-none absolute inset-0 hero-grid" aria-hidden />
      <div className="container-12 relative grid gap-10 py-14 sm:gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-16">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-[13px] font-semibold text-[var(--muted-text)] shadow-sm">
            Enterprise mobility platform
          </div>

          <h1 className="mt-4 max-w-[36rem] text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Citywide mobility and delivery, governed by one platform.
          </h1>

          <p className="mt-4 max-w-[40rem] text-sm text-[var(--muted-text)] sm:text-base">
            GOBAI unifies customer booking, merchant fulfillment, and driver
            operations with real-time dispatch, audit-ready tracking, and SLA
            monitoring.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link
              href={`mailto:${site.contact.email}?subject=GOBAI%20Pilot%20Request`}
              className="w-full rounded-2xl bg-[var(--primary)] px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[var(--primary-hover)] active:scale-[0.99] sm:w-auto"
            >
              Request a pilot
            </Link>
            <Link
              href="/#platform"
              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-center text-sm font-semibold transition duration-200 hover:bg-[var(--muted-surface)] active:scale-[0.99] sm:w-auto"
            >
              View platform
            </Link>
          </div>

          <div className="mt-6 grid gap-3 text-[13px] text-[var(--muted-text)] sm:grid-cols-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[color:var(--primary)]/70" aria-hidden />
              Role-based access
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[color:var(--primary)]/70" aria-hidden />
              Policy-controlled pricing
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[color:var(--primary)]/70" aria-hidden />
              Audit-ready receipts
            </div>
          </div>
        </div>

        <div className="reveal reveal-delay-1">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-card)] md:mt-0">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[13px] text-[var(--muted-text)]">
                  Operations console
                </div>
                <div className="text-base font-semibold tracking-tight">
                  City control center
                </div>
              </div>
              <span className="rounded-full bg-[var(--primary-soft)] px-2.5 py-1 text-[13px] font-semibold text-[var(--primary-ink)]">
                Live
              </span>
            </div>

            <div className="mt-4 grid gap-3">
              <div className="rounded-2xl bg-[var(--muted-surface)] p-4">
                <div className="text-[13px] text-[var(--muted-text)]">Dispatch health</div>
                <div className="mt-1 text-sm font-semibold">
                  Balance demand, supply, and ETAs in real-time.
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-[13px] text-[var(--muted-text)]">
                  <span className="rounded-full bg-[var(--surface)] px-2 py-1">
                    Routing
                  </span>
                  <span className="rounded-full bg-[var(--surface)] px-2 py-1">
                    SLA alerts
                  </span>
                  <span className="rounded-full bg-[var(--surface)] px-2 py-1">
                    Surge rules
                  </span>
                </div>
              </div>

              <div className="rounded-2xl bg-[var(--muted-surface)] p-4">
                <div className="text-[13px] text-[var(--muted-text)]">Compliance trail</div>
                <div className="mt-1 text-sm font-semibold">
                  Every action logged for audit readiness.
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-[13px] text-[var(--muted-text)]">
                  <span className="rounded-full bg-[var(--surface)] px-2 py-1">
                    Verification
                  </span>
                  <span className="rounded-full bg-[var(--surface)] px-2 py-1">
                    Proof of delivery
                  </span>
                  <span className="rounded-full bg-[var(--surface)] px-2 py-1">
                    Incident notes
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
              <div className="text-[13px] text-[var(--muted-text)]">Role workspaces</div>
              <div className="mt-1 text-sm font-semibold">
                Customer, merchant, and driver flows stay aligned.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


