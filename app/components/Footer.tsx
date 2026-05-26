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
              <a
                href="mailto:theamericanreveal@gmail.com"
                className="inline-block text-[0.6rem] mt-3 transition-colors hover:text-white/70"
                style={{ color: "rgba(255,255,255,0.38)" }}
              >
                theamericanreveal@gmail.com
              </a>
              {/* Social */}
              <div className="mt-5 flex items-center gap-3">
                <a
                  href="https://www.facebook.com/share/1HcJSYePw3/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.42)" }}
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.514c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                  </svg>
                  Follow on Facebook
                </a>
              </div>
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
            <div className="flex items-center gap-5">
              <a
                href="https://www.facebook.com/share/1HcJSYePw3/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[0.575rem] uppercase tracking-widest transition-colors hover:text-white/60"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.514c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
                Facebook
              </a>
              <Link
                href="/"
                className="text-[0.6rem] uppercase tracking-widest transition-colors hover:text-white/50"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                Back to top ↑
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
