"use client";

import Link from "next/link";
import { useState } from "react";
import { slugifyCategory, CATEGORIES } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-header text-white">
      {/* Thin crimson accent bar — the signature mark of the publication */}
      <div className="h-[3px] bg-crimson" />

      {/* Masthead strip */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <p className="text-[0.6rem] text-white/30 uppercase tracking-[0.22em] font-medium hidden sm:block">
            Independent Investigative Journalism
          </p>
          <p className="text-[0.6rem] text-white/30 tracking-wider">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Logo */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <Link href="/" className="group inline-block">
            <h1
              className="text-[1.85rem] md:text-[3rem] font-bold text-white uppercase tracking-[0.1em] group-hover:opacity-90 transition-opacity leading-none"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              The American Reveal
            </h1>
          </Link>
          {/* Decorative divider */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-white/15" />
            <div className="h-[3px] w-6 bg-crimson" />
            <div className="h-px w-16 bg-white/15" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav>
        <div className="max-w-7xl mx-auto px-6">
          {/* Desktop */}
          <ul className="hidden md:flex items-center justify-center">
            {[{ label: "Home", href: "/" }, ...CATEGORIES.map((c) => ({ label: c, href: `/category/${slugifyCategory(c)}` }))].map(
              ({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block px-3.5 py-4 text-[0.625rem] font-semibold uppercase tracking-[0.15em] text-white/45 hover:text-white border-b-2 border-transparent hover:border-crimson transition-all duration-150 whitespace-nowrap"
                  >
                    {label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center justify-between py-3">
            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-white/35">Sections</span>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle navigation"
              className="text-white/50 hover:text-white p-1 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {mobileOpen && (
            <ul className="md:hidden border-t border-white/[0.06] pb-3">
              {[{ label: "Home", href: "/" }, ...CATEGORIES.map((c) => ({ label: c, href: `/category/${slugifyCategory(c)}` }))].map(
                ({ label, href }) => (
                  <li key={href} className="border-b border-white/[0.05] last:border-0">
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2.5 text-[0.625rem] font-semibold uppercase tracking-[0.15em] text-white/45 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
