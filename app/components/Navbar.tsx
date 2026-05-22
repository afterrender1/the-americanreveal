"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { slugifyCategory, CATEGORIES } from "@/lib/constants";

const navLinks = [
  { label: "Home", href: "/" },
  ...CATEGORIES.map((c) => ({ label: c, href: `/category/${slugifyCategory(c)}` })),
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Sticky bar — slides down on scroll ───────────────────── */}
      <div
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out ${
          scrolled ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          style={{
            backgroundColor: "rgba(6,6,6,0.96)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div
            style={{
              height: "2px",
              background: "linear-gradient(90deg, #B91C1C 0%, #7F1010 70%, transparent 100%)",
            }}
          />
          <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-14 gap-6">
            <Link
              href="/"
              className="text-[0.85rem] font-bold uppercase text-white hover:text-crimson transition-colors shrink-0"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", letterSpacing: "0.1em" }}
            >
              The American Reveal
            </Link>

            <ul className="hidden lg:flex items-center flex-1 justify-center">
              {navLinks.slice(1).map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block px-3 py-4 text-[0.65rem] font-semibold uppercase tracking-wider text-white/55 hover:text-white transition-colors whitespace-nowrap"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="#newsletter"
              className="shrink-0 hidden md:block text-[0.6rem] font-bold uppercase tracking-[0.18em] bg-crimson text-white px-4 py-2 hover:bg-crimson-dark transition-colors"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main header ──────────────────────────────────────────── */}
      <header style={{ backgroundColor: "#070707" }} className="text-white">

        {/* Gradient accent bar */}
        <div
          style={{
            height: "3px",
            background: "linear-gradient(90deg, #C41E1E 0%, #9B1515 55%, #4A0A0A 100%)",
          }}
        />

        {/* Utility bar */}
        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-6 py-2.5 flex items-center justify-between">
            <span
              className="hidden sm:block text-[0.6rem] font-medium uppercase tracking-[0.28em]"
              style={{ color: "rgba(255,255,255,0.42)" }}
            >
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <Link
              href="#newsletter"
              className="ml-auto text-[0.575rem] font-bold uppercase tracking-[0.22em] transition-all px-3 py-1 hover:bg-crimson hover:text-white"
              style={{
                color: "#C41E1E",
                border: "1px solid rgba(185,28,28,0.4)",
              }}
            >
              Subscribe Free
            </Link>
          </div>
        </div>

        {/* Masthead */}
        <div className="relative px-5 sm:px-6 py-12 md:py-16 text-center overflow-hidden">
          {/* Crimson radial glow behind the title */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(185,28,28,0.12) 0%, transparent 70%)",
            }}
          />
          {/* Subtle dot grid texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.025]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />

          <Link href="/" className="group inline-block relative">
            <h1
              className="font-bold text-white uppercase leading-none group-hover:opacity-90 transition-opacity"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                letterSpacing: "0.06em",
                fontSize: "clamp(2.25rem, 6.5vw, 5.75rem)",
                textShadow: "0 4px 60px rgba(185,28,28,0.2), 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              The American Reveal
            </h1>
          </Link>

          <div className="flex items-center justify-center gap-4 mt-5">
            <div style={{ height: "1px", width: "56px", background: "rgba(255,255,255,0.1)" }} />
            <span
              className="font-semibold uppercase"
              style={{
                fontSize: "0.575rem",
                letterSpacing: "0.42em",
                color: "rgba(255,255,255,0.38)",
              }}
            >
              Independent &nbsp;·&nbsp; Investigative &nbsp;·&nbsp; Accountable
            </span>
            <div style={{ height: "1px", width: "56px", background: "rgba(255,255,255,0.1)" }} />
          </div>
        </div>

        {/* Navigation strip — hidden when sticky bar is active to avoid duplicate */}
        <nav
          className={scrolled ? "hidden" : ""}
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            backgroundColor: "rgba(0,0,0,0.25)",
          }}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-6">

            {/* Desktop */}
            <ul className="hidden md:flex items-center justify-center">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block px-4 py-3.5 text-[0.7rem] font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-150"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,1)";
                      e.currentTarget.style.borderBottom = "2px solid #B91C1C";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                      e.currentTarget.style.borderBottom = "2px solid transparent";
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile row */}
            <div className="md:hidden flex items-center justify-between py-3.5">
              <span
                className="text-[0.6rem] font-bold uppercase tracking-[0.25em]"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Sections
              </span>
              <button
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                style={{ color: "rgba(255,255,255,0.5)" }}
                className="hover:text-white p-1 transition-colors"
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

            {/* Mobile menu */}
            {mobileOpen && (
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }} className="pb-4">
                {navLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-[0.7rem] font-semibold uppercase tracking-wider hover:text-white transition-colors"
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                    }}
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="#newsletter"
                  onClick={() => setMobileOpen(false)}
                  className="block mt-4 text-center text-[0.6rem] font-bold uppercase tracking-[0.2em] bg-crimson text-white py-3 hover:bg-crimson-dark transition-colors"
                >
                  Subscribe to Newsletter
                </Link>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
