import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ArticleCard from "@/app/components/ArticleCard";
import CommentsSection from "./CommentsSection";
import { getArticleBySlug, getPublishedArticles, slugifyCategory } from "@/lib/articles";
import { formatDate, getReadingTime, getContentHtml } from "@/lib/utils";
import { getCategoryColor } from "@/lib/constants";
import { getComments } from "@/lib/comments";
import { incrementView } from "@/lib/views";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: article.coverImage ? { images: [article.coverImage] } : undefined,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const [allArticles, comments] = await Promise.all([
    getPublishedArticles(),
    getComments(slug),
    incrementView(slug),
  ]);
  const related = allArticles
    .filter((a) => a.id !== article.id && slugifyCategory(a.category) === slugifyCategory(article.category))
    .slice(0, 3);

  const contentHtml = getContentHtml(article.content);
  const readingTime = getReadingTime(article.content);
  const accent = article.accentColor ?? getCategoryColor(article.category);

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Cover image — taller with stronger gradient */}
        {article.coverImage && (
          <div className="relative min-h-[480px] md:h-[560px] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.coverImage}
              alt={article.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/45 to-black/10" />
            {/* Category PILL badge bottom-left */}
            <div className="absolute bottom-8 left-6 md:left-8">
              <Link
                href={`/category/${slugifyCategory(article.category)}`}
                className="inline-block text-[0.5rem] font-bold uppercase tracking-[0.18em] text-white px-3 py-1.5 rounded-sm hover:opacity-85 transition-opacity"
                style={{ backgroundColor: accent }}
              >
                {article.category}
              </Link>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_296px] gap-16">

            {/* Article */}
            <article>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-[0.6rem] text-muted mb-8 uppercase tracking-widest">
                <Link href="/" className="hover:text-ink transition-colors">Home</Link>
                <span>/</span>
                <Link href={`/category/${slugifyCategory(article.category)}`} className="hover:text-ink transition-colors">
                  {article.category}
                </Link>
              </nav>

              {/* Category pill (when no cover image) */}
              {!article.coverImage && (
                <Link
                  href={`/category/${slugifyCategory(article.category)}`}
                  className="inline-block text-[0.5rem] font-bold uppercase tracking-[0.18em] mb-6 px-3 py-1.5 rounded-sm text-white hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: accent }}
                >
                  {article.category}
                </Link>
              )}

              {/* Title */}
              <h1
                className="text-3xl md:text-[2.75rem] font-bold leading-[1.1] text-ink mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {article.title}
              </h1>

              {/* Deck / excerpt — styled pull quote with left border */}
              <p
                className="text-steel text-lg md:text-xl leading-relaxed mb-8 pl-5 border-l-[3px]"
                style={{ borderLeftColor: accent, fontFamily: "Georgia, serif" }}
              >
                {article.excerpt}
              </p>

              {/* Meta bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-border mb-10">
                <div className="flex items-center gap-3 text-[0.6rem] text-muted uppercase tracking-widest">
                  <span className="font-bold text-steel">{article.author}</span>
                  <span>·</span>
                  <time>{formatDate(article.publishedAt)}</time>
                  <span>·</span>
                  {/* Pill-style reading time badge */}
                  <span
                    className="inline-flex items-center px-2 py-0.5 rounded-full text-[0.5rem] font-bold uppercase tracking-[0.12em] border"
                    style={{ color: accent, borderColor: `${accent}30`, backgroundColor: `${accent}0f` }}
                  >
                    {readingTime} min read
                  </span>
                </div>
                {article.pdfUrl && (
                  <a
                    href={article.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[0.575rem] font-bold uppercase tracking-[0.16em] text-white px-4 py-2 rounded-sm hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: accent }}
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M5 20h14a2 2 0 002-2V8l-5-5H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Source Document
                  </a>
                )}
              </div>

              {/* Body */}
              <div
                className="article-content max-w-[680px]"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />

              {/* Footer tag */}
              <div className="mt-14 pt-6 border-t border-border flex items-center justify-between flex-wrap gap-4">
                <p className="text-[0.6rem] text-muted uppercase tracking-widest">
                  Filed under{" "}
                  <Link
                    href={`/category/${slugifyCategory(article.category)}`}
                    className="font-bold hover:underline"
                    style={{ color: accent }}
                  >
                    {article.category}
                  </Link>
                </p>
                {article.pdfUrl && (
                  <a
                    href={article.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.6rem] font-semibold uppercase tracking-widest text-muted hover:text-steel transition-colors flex items-center gap-1.5"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M5 20h14a2 2 0 002-2V8l-5-5H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Download Source PDF
                  </a>
                )}
              </div>

              {/* Comments */}
              <CommentsSection
                slug={slug}
                initialComments={comments}
                accentColor={accent}
              />
            </article>

            {/* Sidebar */}
            <aside className="space-y-10">
              {related.length > 0 && (
                <div>
                  {/* "Related Stories" with crimson left border header */}
                  <div className="flex items-center gap-3 mb-5 pl-3 border-l-[3px] border-crimson">
                    <h3 className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-ink">
                      Related Stories
                    </h3>
                  </div>
                  {related.map((a) => (
                    <ArticleCard key={a.id} article={a} variant="compact" />
                  ))}
                </div>
              )}

              {/* About card with dot-grid texture on ink background */}
              <div
                className="bg-[#090909] p-6 relative overflow-hidden"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                }}
              >
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-white/40 mb-3 relative z-10">
                  About
                </p>
                <p className="text-[0.8125rem] text-white/60 leading-relaxed relative z-10">
                  The American Reveal is an independent investigative publication
                  covering the Epstein network, American political power, and the
                  stories that demand accountability.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
