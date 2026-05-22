import Link from "next/link";
import { CATEGORIES, slugifyCategory, getCategoryColor } from "@/lib/constants";
import NewsletterSignup from "./NewsletterSignup";

export default function Footer() {
  return (
    <>
      <NewsletterSignup />
      <footer
        className="text-white mt-auto"
        style={{ backgroundColor: "#080706" }}
      >
        <div
          style={{
            height: "2px",
            background: "linear-gradient(90deg, #C41E1E 0%, #7F1010 60%, transparent 100%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 py-14">
          {/* Main grid */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1.5fr] gap-12 mb-10">

            {/* Brand */}
            <div>
              <Link href="/">
                <h3
                  className="text-xl font-bold uppercase tracking-widest text-white hover:text-crimson transition-colors"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif", letterSpacing: "0.09em" }}
                >
                  The American Reveal
                </h3>
              </Link>
              <div className="mt-4 mb-5 w-8 h-[2px] rounded-full" style={{ background: "linear-gradient(90deg, #C41E1E, #7F1010)" }} />
              <p className="text-sm leading-relaxed max-w-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                Independent investigative journalism covering the Epstein network,
                American political power, and the stories that demand accountability.
              </p>
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] mt-5" style={{ color: "rgba(255,255,255,0.22)" }}>
                First Amendment Protected
              </p>
            </div>

            {/* Sections */}
            <div>
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
                Sections
              </p>
              <ul className="space-y-3">
                {CATEGORIES.map((cat) => (
                  <li key={cat}>
                    <Link
                      href={`/category/${slugifyCategory(cat)}`}
                      className="flex items-center gap-2.5 group"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
                        style={{ backgroundColor: getCategoryColor(cat) }}
                      />
                      <span className="text-sm group-hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.52)" }}>
                        {cat}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mini newsletter */}
            <div>
              <NewsletterSignup variant="mini" />
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="text-[0.6rem] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.25)" }}>
              © {new Date().getFullYear()} The American Reveal. All rights reserved.
            </p>
            <Link
              href="/"
              className="text-[0.6rem] uppercase tracking-widest transition-colors hover:text-white/50"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              Back to top ↑
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
