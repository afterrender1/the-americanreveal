import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ArticleCard from "@/app/components/ArticleCard";
import {
  getPublishedArticles,
  getFeaturedArticle,
  slugifyCategory,
  CATEGORIES,
} from "@/lib/articles";
import { formatDate } from "@/lib/utils";
import { getCategoryColor } from "@/lib/constants";
import NewsletterSignup from "@/app/components/NewsletterSignup";

export const dynamic = "force-dynamic";

function SectionHeader({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <div className="flex items-center gap-4 mb-7">
      <h2 className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-ink whitespace-nowrap">
        {label}
      </h2>
      <div className="flex-1 h-px bg-border" />
      <Link
        href={href}
        className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted hover:text-ink transition-colors whitespace-nowrap"
      >
        All Stories →
      </Link>
    </div>
  );
}

export default async function HomePage() {
  const [featured, articles] = await Promise.all([
    getFeaturedArticle(),
    getPublishedArticles(),
  ]);

  const nonFeatured = articles.filter((a) => a.id !== featured?.id);
  const recent = nonFeatured.slice(0, 6);

  const epsteinArticles = articles
    .filter((a) => slugifyCategory(a.category) === "epstein-files" && a.id !== featured?.id)
    .slice(0, 4);

  const trumpArticles = articles
    .filter((a) => slugifyCategory(a.category) === "trump")
    .slice(0, 4);

  return (
    <>
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-10">

          {/* ── Featured article ────────────────────── */}
          {featured && (
            <section className="mb-14">
              {featured.coverImage ? (
                /* With cover image — dark overlay hero */
                <div className="relative overflow-hidden min-h-[460px] md:min-h-[560px] flex items-end group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featured.coverImage}
                    alt={featured.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/55 to-transparent" />
                  <div className="relative z-10 p-8 md:p-14 w-full">
                    <div className="max-w-3xl">
                      <Link
                        href={`/category/${slugifyCategory(featured.category)}`}
                        className="inline-block text-[0.6rem] font-bold uppercase tracking-[0.22em] mb-5 hover:opacity-75 transition-opacity"
                        style={{ color: featured.accentColor ?? getCategoryColor(featured.category) }}
                      >
                        {featured.category}
                      </Link>
                      <h2
                        className="text-4xl md:text-6xl font-bold leading-[1.05] text-white mb-5"
                        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                      >
                        <Link href={`/article/${featured.slug}`} className="hover:opacity-90 transition-opacity">
                          {featured.title}
                        </Link>
                      </h2>
                      <p className="text-white/65 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                        {featured.excerpt}
                      </p>
                      <div className="flex items-center gap-5 flex-wrap">
                        <span className="text-[0.625rem] text-white/40 uppercase tracking-widest">
                          {featured.author} · {formatDate(featured.publishedAt)}
                        </span>
                        <Link
                          href={`/article/${featured.slug}`}
                          className="text-[0.625rem] font-bold uppercase tracking-[0.16em] text-white bg-crimson px-5 py-2.5 hover:bg-crimson-dark transition-colors"
                        >
                          Read Investigation →
                        </Link>
                        {featured.pdfUrl && (
                          <a
                            href={featured.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[0.625rem] font-semibold uppercase tracking-widest text-white/45 hover:text-white/80 transition-colors flex items-center gap-1.5"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M5 20h14a2 2 0 002-2V8l-5-5H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            Source PDF
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* No image — dark editorial card */
                <div
                  className="bg-ink featured-hover"
                  style={{ '--card-accent': featured.accentColor ?? '#B91C1C' } as React.CSSProperties}
                >
                  <div className="p-10 md:p-16 max-w-4xl">
                    <Link
                      href={`/category/${slugifyCategory(featured.category)}`}
                      className="inline-block text-[0.6rem] font-bold uppercase tracking-[0.22em] mb-6 hover:opacity-75 transition-opacity"
                      style={{ color: featured.accentColor ?? getCategoryColor(featured.category) }}
                    >
                      {featured.category}
                    </Link>
                    <h2
                      className="text-4xl md:text-[3.5rem] font-bold leading-[1.07] text-white mb-6"
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      <Link href={`/article/${featured.slug}`} className="hover:opacity-90 transition-opacity">
                        {featured.title}
                      </Link>
                    </h2>
                    <p className="text-white/55 text-lg leading-relaxed mb-9 max-w-2xl">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-5 flex-wrap">
                      <span className="text-[0.625rem] text-white/35 uppercase tracking-widest">
                        {featured.author} · {formatDate(featured.publishedAt)}
                      </span>
                      <Link
                        href={`/article/${featured.slug}`}
                        className="text-[0.625rem] font-bold uppercase tracking-[0.16em] text-white bg-crimson px-5 py-2.5 hover:bg-crimson-dark transition-colors"
                      >
                        Read Full Investigation →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </section>
          )}

          {/* ── Latest Investigations ───────────────── */}
          {recent.length > 0 && (
            <section className="mb-14">
              <SectionHeader label="Latest Investigations" href="/" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {recent.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </section>
          )}

          {/* ── Main content + Sidebar ──────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-14">

            {/* Left: category sections */}
            <div className="space-y-14">
              {epsteinArticles.length > 0 && (
                <section>
                  <SectionHeader label="Epstein Files" href="/category/epstein-files" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {epsteinArticles.map((article) => (
                      <ArticleCard key={article.id} article={article} variant="wide" />
                    ))}
                  </div>
                </section>
              )}

              {trumpArticles.length > 0 && (
                <section>
                  <SectionHeader label="Trump" href="/category/trump" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {trumpArticles.map((article) => (
                      <ArticleCard key={article.id} article={article} variant="wide" />
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Right: sidebar */}
            <aside className="space-y-10">
              {/* Sections directory */}
              <div>
                <div className="flex items-center gap-3 mb-5 pb-3 border-b-2 border-ink">
                  <h3 className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-ink">
                    Sections
                  </h3>
                </div>
                <ul>
                  {CATEGORIES.map((cat) => (
                    <li key={cat}>
                      <Link
                        href={`/category/${slugifyCategory(cat)}`}
                        className="flex items-center justify-between py-2.5 border-b border-border last:border-0 group"
                      >
                        <span
                          className="text-[0.75rem] font-medium text-steel group-hover:text-ink transition-colors"
                        >
                          {cat}
                        </span>
                        <span
                          className="text-[0.6rem] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ color: getCategoryColor(cat) }}
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* More stories */}
              {nonFeatured.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b-2 border-ink">
                    <h3 className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-ink">
                      More Stories
                    </h3>
                  </div>
                  {nonFeatured.slice(0, 5).map((article) => (
                    <ArticleCard key={article.id} article={article} variant="compact" />
                  ))}
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>

      {/* ── Newsletter ──────────────────────────────────── */}
      <NewsletterSignup />

      <Footer />
    </>
  );
}
