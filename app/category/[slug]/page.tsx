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

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Category header */}
        <div className="bg-ink text-white">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <nav className="flex items-center gap-2 text-[0.6rem] text-white/30 mb-6 uppercase tracking-widest">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span>{category}</span>
            </nav>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {category}
            </h1>
            <div className="flex items-center gap-3 mt-4">
              <div
                className="h-[3px] w-10"
                style={{ backgroundColor: getCategoryColor(category) }}
              />
              <p className="text-[0.6rem] text-white/30 uppercase tracking-[0.2em]">
                {articles.length} {articles.length === 1 ? "story" : "stories"}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-10">
          {articles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-steel mb-2" style={{ fontFamily: "Georgia, serif" }}>
                No stories published yet in this section.
              </p>
              <p className="text-[0.75rem] text-muted uppercase tracking-widest mt-2">
                Check back soon for investigative coverage.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
