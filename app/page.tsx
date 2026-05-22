import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ArticleCard from "@/app/components/ArticleCard";
import NewsSlider from "@/app/components/NewsSlider";
import {
  getPublishedArticles,
  getFeaturedArticle,
  slugifyCategory,
  CATEGORIES,
} from "@/lib/articles";
import { formatDate } from "@/lib/utils";
import { getCategoryColor } from "@/lib/constants";
export const dynamic = "force-dynamic";

function SectionLabel({ label, href }: { label: string; href: string }) {
  return (
    <div className="flex items-center justify-between mb-7">
      <div className="flex items-center gap-3">
        <div
          className="w-1 h-6 rounded-full"
          style={{ background: "linear-gradient(180deg, #C41E1E 0%, #7F1010 100%)" }}
        />
        <h2
          className="text-sm font-bold uppercase tracking-[0.2em] text-ink"
        >
          {label}
        </h2>
      </div>
      <Link
        href={href}
        className="text-[0.6rem] font-semibold uppercase tracking-wider text-muted hover:text-crimson transition-colors inline-flex items-center gap-1 rounded-full px-3 py-1 border border-border hover:border-crimson/30 hover:bg-crimson/5"
      >
        View All →
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

        {/* ── News slider ───────────────────────────────────────────── */}
        {recent.length > 0 && (
          <section className="mb-0">
            <NewsSlider articles={featured ? [featured, ...recent.slice(0, 5)] : recent.slice(0, 6)} />
          </section>
        )}


        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* ── Latest Investigations — editorial grid ─────────────── */}
          {recent.length > 0 && (
            <section className="mt-12 mb-14">
              <SectionLabel label="Latest Investigations" href="/" />

              {/* Row 1: lead (spans 2 rows) + two secondary */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-border border border-border">
                {/* Lead card — spans 2 rows */}
                {recent[0] && (
                  <div className="md:col-span-7 md:row-span-2 min-h-[300px] md:min-h-0">
                    <ArticleCard article={recent[0]} variant="lead" />
                  </div>
                )}
                {/* Secondary cards */}
                {recent[1] && (
                  <div className="md:col-span-5 min-h-[220px]">
                    <ArticleCard article={recent[1]} variant="lead" />
                  </div>
                )}
                {recent[2] && (
                  <div className="md:col-span-5 min-h-[220px]">
                    <ArticleCard article={recent[2]} variant="lead" />
                  </div>
                )}
              </div>

              {/* Row 2: remaining articles */}
              {recent.slice(3, 6).length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border-x border-b border-border">
                  {recent.slice(3, 6).map((a) => (
                    <div key={a.id} className="bg-cream px-5 pt-5 pb-1">
                      <ArticleCard article={a} />
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* ── Content + Sidebar ──────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_288px] gap-12 mb-14">

            {/* Left: category sections */}
            <div className="space-y-12">

              {epsteinArticles.length > 0 && (
                <section>
                  <SectionLabel label="Epstein Files" href="/category/epstein-files" />
                  <div className="bg-card rounded-2xl border border-border/60 shadow-sm px-5 divide-y divide-border/60">
                    {epsteinArticles.map((a) => (
                      <ArticleCard key={a.id} article={a} variant="wide" />
                    ))}
                  </div>
                </section>
              )}

              {trumpArticles.length > 0 && (
                <section>
                  <SectionLabel label="Trump" href="/category/trump" />
                  <div className="bg-card rounded-2xl border border-border/60 shadow-sm px-5 divide-y divide-border/60">
                    {trumpArticles.map((a) => (
                      <ArticleCard key={a.id} article={a} variant="wide" />
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8 lg:pt-0">

              {/* Sections directory */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-5 rounded-full bg-ink" />
                  <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-ink">Sections</h3>
                </div>
                <nav className="rounded-2xl overflow-hidden bg-card shadow-sm border border-border/60">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat}
                      href={`/category/${slugifyCategory(cat)}`}
                      className="group flex items-center gap-3 px-4 py-3 border-b border-border/50 last:border-0 hover:bg-[#F6F3ED] transition-colors"
                    >
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: getCategoryColor(cat) }}
                      />
                      <span className="text-[0.8125rem] text-steel group-hover:text-ink transition-colors flex-1">
                        {cat}
                      </span>
                      <svg className="w-3 h-3 text-muted opacity-0 group-hover:opacity-60 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Recent stories */}
              {nonFeatured.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-5 bg-ink rounded-full" />
                    <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-ink">Recent Stories</h3>
                  </div>
                  <div>
                    {nonFeatured.slice(0, 5).map((a) => (
                      <ArticleCard key={a.id} article={a} variant="compact" />
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
