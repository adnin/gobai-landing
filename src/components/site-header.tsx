import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

function Mark() {
  return (
    <Image
      src="/logo-name.png"
      alt={`${site.name} logo`}
      width={48}
      height={48}
      className="h-12 w-12 object-contain"
      priority
    />
  );
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--bg)]/90 backdrop-blur">
      <div className="container-12 flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <Mark />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">{site.name}</div>
            <div className="text-[13px] text-[var(--muted-text)]">
              Mobility and delivery platform
            </div>
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          <Link
            className="text-sm text-[var(--muted-text)] hover:text-[var(--text)]"
            href="/#platform"
          >
            Platform
          </Link>
          <Link
            className="text-sm text-[var(--muted-text)] hover:text-[var(--text)]"
            href="/customers"
          >
            Customers
          </Link>
          <Link
            className="text-sm text-[var(--muted-text)] hover:text-[var(--text)]"
            href="/merchants"
          >
            Merchants
          </Link>
          <Link
            className="text-sm text-[var(--muted-text)] hover:text-[var(--text)]"
            href="/drivers"
          >
            Drivers
          </Link>
          <Link
            className="text-sm text-[var(--muted-text)] hover:text-[var(--text)]"
            href="/newsroom"
          >
            Newsroom
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={`mailto:${site.contact.email}?subject=GOBAI%20Pilot%20Request`}
            className="hidden h-11 items-center rounded-2xl border border-[var(--border)] px-4 text-sm font-semibold text-[var(--text)] transition duration-200 hover:bg-[var(--muted-surface)] active:scale-[0.99] md:inline-flex"
          >
            Request pilot
          </Link>
          <a
            href={site.appUrl}
            className="inline-flex h-11 items-center rounded-2xl bg-[var(--primary)] px-4 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[var(--primary-hover)] active:scale-[0.99]"
          >
            Get the App
          </a>
        </div>
      </div>
    </header>
  );
}
