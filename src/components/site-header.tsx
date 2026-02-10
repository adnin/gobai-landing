"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type SiteHeaderProps = {
  siteName: string;
  appUrl: string;
};

function Mark({ siteName }: { siteName: string }) {
  return (
    <Image
      src="/logo-name.png"
      alt={`${siteName} logo`}
      width={48}
      height={48}
      className="h-12 w-12 object-contain"
      priority
    />
  );
}

export default function SiteHeader({
  siteName,
  appUrl,
}: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#platform", label: "Platform" },
    { href: "/customers", label: "Customers" },
    { href: "/merchants", label: "Merchants" },
    { href: "/drivers", label: "Drivers" },
    { href: "/newsroom", label: "Newsroom" },
  ];

  const toggleMenu = () => setMenuOpen((value) => !value);

  return (
    <header className="relative sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--bg)]/90 backdrop-blur">
      <div className="container-12 flex flex-col gap-2 py-3 md:flex-row md:items-center md:justify-between md:gap-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Mark siteName={siteName} />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">{siteName}</div>
              <div className="text-[13px] text-[var(--muted-text)]">
                Mobility and delivery platform
              </div>
            </div>
          </Link>
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--border)] text-[var(--muted-text)] md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="flex h-3 w-5 flex-col justify-between">
              {[0, 1, 2].map((line) => (
                <span
                  key={line}
                  className="h-[2px] w-full rounded-full bg-[var(--muted-text)] transition-transform duration-200"
                  style={{
                    transform:
                      menuOpen && line === 1
                        ? "scaleX(0)"
                        : menuOpen && line === 0
                        ? "translateY(4px) rotate(45deg)"
                        : menuOpen && line === 2
                        ? "translateY(-4px) rotate(-45deg)"
                        : "none",
                  }}
                />
              ))}
            </div>
          </button>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 md:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="text-sm text-[var(--muted-text)] hover:text-[var(--text)]"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex w-full items-center justify-center md:w-auto md:justify-end">
            <a
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download GOBAI on Google Play"
              className="inline-flex w-full items-center justify-center transition duration-200 hover:opacity-90 active:scale-[0.99] md:w-auto"
            >
              <Image
                src="/google-play-badge.png"
                alt="Get it on Google Play"
                width={646}
                height={250}
                className="h-auto w-[170px] md:w-[150px]"
                sizes="(max-width: 767px) 170px, 150px"
              />
            </a>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div className="md:hidden">
          <div className="container-12 rounded-b-3xl border-t border-[var(--border)] bg-[var(--bg)]/90 pb-4">
            <nav className="flex flex-col gap-3 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-semibold text-[var(--text)] hover:text-[var(--primary)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
