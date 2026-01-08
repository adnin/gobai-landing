"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
      <div className="container-12 flex flex-col gap-3 py-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Mark />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">{site.name}</div>
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

          <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-end md:w-auto">
            <Link
              href={`mailto:${site.contact.email}?subject=GOBAI%20Pilot%20Request`}
              className="hidden h-11 items-center rounded-2xl border border-[var(--border)] px-4 text-sm font-semibold text-[var(--text)] transition duration-200 hover:bg-[var(--muted-surface)] active:scale-[0.99] md:inline-flex"
            >
              Request pilot
            </Link>
            <a
              href={site.appUrl}
              className="w-full rounded-2xl bg-[var(--primary)] px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[var(--primary-hover)] active:scale-[0.99] sm:w-auto"
            >
              Get the App
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
              <Link
                href={`mailto:${site.contact.email}?subject=GOBAI%20Pilot%20Request`}
                onClick={() => setMenuOpen(false)}
                className="text-base font-semibold text-[var(--text)] hover:text-[var(--primary)]"
              >
                Request pilot
              </Link>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
