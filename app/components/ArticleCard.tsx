import Link from "next/link";
import { Article, slugifyCategory } from "@/lib/articles";
import { formatDate } from "@/lib/utils";
import { getCategoryColor } from "@/lib/constants";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "wide" | "compact";
}

function categoryColor(a: Article) {
  return a.accentColor ?? getCategoryColor(a.category);
}

export default function ArticleCard({ article, variant = "default" }: ArticleCardProps) {
  const color = categoryColor(article);
  const catHref = `/category/${slugifyCategory(article.category)}`;
  const articleHref = `/article/${article.slug}`;

  /* ── Compact sidebar ──────────────────────────────── */
  if (variant === "compact") {
    return (
      <article
        className="compact-hover py-4 border-b border-border last:border-0 flex gap-3 group px-2 -mx-2"
        style={{ '--card-accent': color } as React.CSSProperties}
      >
        {article.coverImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-14 h-12 object-cover shrink-0"
          />
        )}
        <div className="min-w-0">
          <Link
            href={catHref}
            className="text-[0.575rem] font-bold uppercase tracking-[0.18em] hover:opacity-70 transition-opacity"
            style={{ color }}
          >
            {article.category}
          </Link>
          <h4 className="mt-1">
            <Link
              href={articleHref}
              className="text-[0.875rem] font-bold leading-snug text-ink hover:text-crimson transition-colors line-clamp-2"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {article.title}
            </Link>
          </h4>
          <p className="text-[0.6rem] text-muted mt-1.5 uppercase tracking-wider">
            {formatDate(article.publishedAt)}
          </p>
        </div>
      </article>
    );
  }

  /* ── Wide card ────────────────────────────────────── */
  if (variant === "wide") {
    return (
      <article
        className="bg-card card-shadow group overflow-hidden"
        style={{ '--card-accent': color } as React.CSSProperties}
      >
        {article.coverImage && (
          <div className="h-48 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-600"
            />
          </div>
        )}
        <div className="p-6">
          <Link
            href={catHref}
            className="text-[0.575rem] font-bold uppercase tracking-[0.18em] hover:opacity-70 transition-opacity"
            style={{ color }}
          >
            {article.category}
          </Link>
          <h3 className="mt-2 mb-3">
            <Link
              href={articleHref}
              className="text-[1.125rem] font-bold leading-snug text-ink hover:text-crimson transition-colors"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {article.title}
            </Link>
          </h3>
          <p className="text-steel text-[0.875rem] leading-relaxed mb-5 line-clamp-3">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-2 text-[0.625rem] text-muted border-t border-border pt-4">
            <span className="uppercase tracking-wider">{article.author}</span>
            <span>·</span>
            <time>{formatDate(article.publishedAt)}</time>
            {article.pdfUrl && (
              <>
                <span>·</span>
                <a
                  href={article.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-bold hover:text-crimson transition-colors uppercase tracking-wider"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M5 20h14a2 2 0 002-2V8l-5-5H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  PDF
                </a>
              </>
            )}
          </div>
        </div>
      </article>
    );
  }

  /* ── Default grid card ────────────────────────────── */
  return (
    <article
      className="bg-card card-shadow group flex flex-col overflow-hidden"
      style={{ '--card-accent': color } as React.CSSProperties}
    >
      {article.coverImage && (
        <div className="h-44 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-600"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <Link
          href={catHref}
          className="text-[0.575rem] font-bold uppercase tracking-[0.18em] hover:opacity-70 transition-opacity mb-3"
          style={{ color }}
        >
          {article.category}
        </Link>
        <h3 className="flex-1 mb-3">
          <Link
            href={articleHref}
            className="text-[1.0625rem] font-bold leading-snug text-ink hover:text-crimson transition-colors line-clamp-3"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            {article.title}
          </Link>
        </h3>
        <p className="text-steel text-[0.875rem] leading-relaxed mb-5 line-clamp-2">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-2 text-[0.625rem] text-muted mt-auto border-t border-border pt-4">
          <span className="uppercase tracking-wider">{article.author}</span>
          <span>·</span>
          <time>{formatDate(article.publishedAt)}</time>
        </div>
      </div>
    </article>
  );
}
