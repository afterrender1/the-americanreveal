import Link from "next/link";
import { CATEGORIES, slugifyCategory } from "@/lib/constants";
import NewsletterSignup from "./NewsletterSignup";

export default function Footer() {
  return (
    <footer className="bg-header text-white mt-auto">
      {/* Red accent bar mirrors the header */}
      <div className="h-[3px] bg-crimson" />

      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Top grid: brand + sections + newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1.4fr] gap-12 mb-12">

          {/* Brand */}
          <div>
            <Link href="/">
              <h3
                className="text-[1.375rem] font-bold uppercase text-white hover:opacity-85 transition-opacity"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", letterSpacing: "0.08em" }}
              >
                The American Reveal
              </h3>
            </Link>
            <div className="mt-3 mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-white/15" />
              <div className="h-[3px] w-5 bg-crimson" />
            </div>
            <p className="text-[0.8125rem] text-white/45 leading-relaxed max-w-xs">
              Independent investigative journalism covering the Epstein network,
              American political power, and the stories that demand accountability.
            </p>
          </div>

          {/* Sections */}
          <div>
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-white/30 mb-5">
              Sections
            </p>
            <ul className="space-y-2.5">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/category/${slugifyCategory(cat)}`}
                    className="text-[0.8125rem] text-white/50 hover:text-white transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter mini */}
          <div>
            <NewsletterSignup variant="mini" />
          </div>
        </div>

        {/* Bottom rule */}
        <div className="border-t border-white/[0.07] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.6rem] text-white/25 uppercase tracking-widest">
            © {new Date().getFullYear()} The American Reveal. All rights reserved.
          </p>
          <p className="text-[0.6rem] text-white/25 uppercase tracking-widest">
            First Amendment Protected
          </p>
        </div>
      </div>
    </footer>
  );
}
