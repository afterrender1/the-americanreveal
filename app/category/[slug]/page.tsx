import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ArticleCard from "@/app/components/ArticleCard";
import { getArticlesByCategory, CATEGORIES, slugifyCategory } from "@/lib/articles";
import { getCategoryColor } from "@/lib/constants";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => slugifyCategory(c) === slug);
  if (!category) return {};
  return {
    title: `${category} — The American Reveal`,
    description: `Investigative coverage of ${category} from The American Reveal.`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => slugifyCategory(c) === slug);

  if (!category) notFound();

  const articles = await getArticlesByCategory(slug);
  const accent = getCategoryColor(category);

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Category header — dark with dot-grid texture */}
        <div
          className="bg-[#090909] text-white relative overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 relative z-10">
            <nav className="flex items-center gap-2 text-[0.6rem] text-white/30 mb-8 uppercase tracking-widest">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/50">{category}</span>
            </nav>

            {/* Colored accent line above title */}
            <div className="h-[3px] w-12 mb-5 rounded-full" style={{ backgroundColor: accent }} />

            <div className="flex flex-wrap items-end gap-4 justify-between">
              <h1
                className="text-[clamp(2.5rem,6vw,4rem)] font-bold text-white leading-[1.0]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {category}
              </h1>
              {/* Article count pill */}
              <span
                className="inline-flex items-center text-[0.55rem] font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full text-white/80 border border-white/10 bg-white/5 mb-1"
              >
                {articles.length} {articles.length === 1 ? "story" : "stories"}
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          {articles.length === 0 ? (
            <div className="text-center py-24 border border-border/50">
              <div
                className="h-[2px] w-8 mx-auto mb-6 rounded-full"
                style={{ backgroundColor: accent }}
              />
              <p
                className="text-steel text-lg mb-2"
                style={{ fontFamily: "Georgia, serif" }}
              >
                No stories published yet in this section.
              </p>
              <p className="text-[0.7rem] text-muted uppercase tracking-widest mt-3">
                Check back soon for investigative coverage.
              </p>
              <Link
                href="/"
                className="inline-block mt-6 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-white px-4 py-2 transition-opacity hover:opacity-80"
                style={{ backgroundColor: accent }}
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <>
              {/* Editorial grid — first article large, rest uniform */}
              {articles.length >= 1 && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
                  {/* First article — large lead card */}
                  <div className="lg:col-span-2">
                    <ArticleCard article={articles[0]} variant="lead" />
                  </div>

                  {/* Second + third stacked */}
                  {articles.length >= 2 && (
                    <div className="flex flex-col gap-5">
                      {articles.slice(1, 3).map((article) => (
                        <div key={article.id} className="flex-1">
                          <ArticleCard article={article} variant="lead" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Remaining articles in uniform grid */}
              {articles.length > 3 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {articles.slice(3).map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
