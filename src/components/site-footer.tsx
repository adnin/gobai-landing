import Link from "next/link";
import { site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="container-12 grid gap-8 py-12 md:grid-cols-4">
        <div>
          <div className="text-sm font-semibold">{site.legalName}</div>
          <p className="mt-3 max-w-xs text-sm text-[var(--muted-text)]">
            {site.description}
          </p>
          <p className="mt-3 text-[13px] text-[var(--muted-text)]">
            {site.contact.city}, {site.contact.country}
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold">Customer</div>
          <ul className="mt-4 space-y-2 text-sm text-[var(--muted-text)]">
            <li>
              <Link className="hover:text-[var(--text)]" href="/customers">
                Customer App
              </Link>
            </li>
            <li>
              <Link className="hover:text-[var(--text)]" href="/customers">
                Rides
              </Link>
            </li>
            <li>
              <Link className="hover:text-[var(--text)]" href="/customers">
                Parcel
              </Link>
            </li>
            <li>
              <Link className="hover:text-[var(--text)]" href="/customers">
                Food
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold">Driver</div>
          <ul className="mt-4 space-y-2 text-sm text-[var(--muted-text)]">
            <li>
              <Link className="hover:text-[var(--text)]" href="/drivers">
                Drive with GOBAI
              </Link>
            </li>
            <li>
              <Link className="hover:text-[var(--text)]" href="/drivers">
                Deliver with GOBAI
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold">Merchant</div>
          <ul className="mt-4 space-y-2 text-sm text-[var(--muted-text)]">
            <li>
              <Link className="hover:text-[var(--text)]" href="/merchants">
                Partner with GOBAI
              </Link>
            </li>
            <li>
              <Link className="hover:text-[var(--text)]" href="/newsroom">
                Newsroom
              </Link>
            </li>
            <li>
              <a
                className="hover:text-[var(--text)]"
                href={`mailto:${site.contact.email}`}
              >
                {site.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--border)]">
        <div className="container-12 flex flex-col gap-2 py-6 text-sm text-[var(--muted-text)] md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a className="hover:text-[var(--text)]" href={site.url}>
              {site.url.replace("https://", "")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
