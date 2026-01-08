import Link from "next/link";

export default function Hero() {
  return (
    <section className="border-b border-[var(--border)] bg-gradient-to-b from-green-50/70 to-[var(--bg)]">
      <div className="container-12 grid gap-10 py-14 md:grid-cols-2 md:items-center">
        <div>
          <p className="inline-flex items-center rounded-full border border-green-200 bg-white px-3 py-1 text-[13px] font-semibold text-green-700 shadow-sm">
            Citywide launch • Built for local communities
          </p>

          <h1 className="mt-4 max-w-[34rem] font-semibold tracking-tight">
            Ride, send, and order food — with one GOBAI app
          </h1>

          <p className="mt-4 max-w-[42rem] text-base text-[var(--muted-text)]">
            A single platform for customers, merchants, and drivers. Designed for
            clear tracking, fast dispatch, and real support.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href="/customers"
              className="inline-flex h-11 items-center rounded-2xl bg-[var(--primary)] px-4 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[var(--primary-hover)] active:scale-[0.99]"
            >
              I’m a Customer
            </Link>
            <Link
              href="/merchants"
              className="inline-flex h-11 items-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm font-semibold transition duration-200 hover:bg-[var(--muted-surface)] active:scale-[0.99]"
            >
              I’m a Merchant
            </Link>
            <Link
              href="/drivers"
              className="inline-flex h-11 items-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm font-semibold transition duration-200 hover:bg-[var(--muted-surface)] active:scale-[0.99]"
            >
              I’m a Driver
            </Link>
          </div>

          <p className="mt-4 text-[13px] text-[var(--muted-text)]">
            Services: <span className="font-semibold text-[var(--text)]">Ride</span>,{" "}
            <span className="font-semibold text-[var(--text)]">Parcel</span>,{" "}
            <span className="font-semibold text-[var(--text)]">Food</span>
          </p>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
            <div className="rounded-2xl bg-[var(--muted-surface)] p-4">
              <div className="text-sm font-semibold">How it works</div>
              <div className="mt-4 grid gap-3">
                <div className="rounded-2xl bg-[var(--surface)] p-4 shadow-sm">
                  <div className="text-[13px] text-[var(--muted-text)]">Customer</div>
                  <div className="mt-1 text-sm font-semibold">
                    Choose Ride / Parcel / Food
                  </div>
                  <div className="mt-2 h-2 w-2/3 rounded-full bg-zinc-200/70" />
                </div>
                <div className="rounded-2xl bg-[var(--surface)] p-4 shadow-sm">
                  <div className="text-[13px] text-[var(--muted-text)]">Merchant</div>
                  <div className="mt-1 text-sm font-semibold">
                    Accept order and prepare
                  </div>
                  <div className="mt-2 h-2 w-1/2 rounded-full bg-zinc-200/70" />
                </div>
                <div className="rounded-2xl bg-[var(--surface)] p-4 shadow-sm">
                  <div className="text-[13px] text-[var(--muted-text)]">Driver</div>
                  <div className="mt-1 text-sm font-semibold">
                    Pick up and deliver with tracking
                  </div>
                  <div className="mt-2 h-2 w-3/4 rounded-full bg-zinc-200/70" />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-3xl bg-green-600/10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-3xl bg-green-600/10"
          />
        </div>
      </div>
    </section>
  );
}
