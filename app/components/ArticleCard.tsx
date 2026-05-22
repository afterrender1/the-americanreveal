import Link from "next/link";
import { Article, slugifyCategory } from "@/lib/articles";
import { formatDate } from "@/lib/utils";
import { getCategoryColor } from "@/lib/constants";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "wide" | "compact" | "lead";
}

function accentOf(a: Article) {
  return a.accentColor ?? getCategoryColor(a.category);
}

function CategoryPill({ href, label, color }: { href: string; label: string; color: string }) {
  return (
    <Link
      href={href}
      className="inline-block text-[0.5rem] font-bold uppercase tracking-[0.18em] text-white px-2.5 py-1 rounded-full hover:opacity-85 transition-opacity"
      style={{ backgroundColor: color }}
    >
      {label}
    </Link>
  );
}

export default function ArticleCard({ article, variant = "default" }: ArticleCardProps) {
  const color = accentOf(article);
  const catHref = `/category/${slugifyCategory(article.category)}`;
  const artHref = `/article/${article.slug}`;

  /* ── Lead — dark image overlay ───────────────────────────── */
  if (variant === "lead") {
    return (
      <article className="group relative overflow-hidden bg-ink h-full min-h-[320px] flex flex-col justify-end rounded-none">
        {article.coverImage ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.coverImage}
              alt={article.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/50 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 bg-ink" />
        )}
        <div className="relative z-10 p-6 md:p-8">
          <CategoryPill href={catHref} label={article.category} color={color} />
          <h3
            className="text-xl md:text-2xl font-bold text-white leading-snug mt-3 mb-3"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            <Link href={artHref} className="hover:opacity-90 transition-opacity">
              {article.title}
            </Link>
          </h3>
          <p className="text-white/55 text-sm leading-relaxed line-clamp-2 mb-4 max-w-lg">
            {article.excerpt}
          </p>
          <p className="text-[0.575rem] text-white/35 uppercase tracking-widest">
            {article.author} · {formatDate(article.publishedAt)}
          </p>
        </div>
      </article>
    );
  }

  /* ── Compact sidebar ─────────────────────────────────────── */
  if (variant === "compact") {
    return (
      <article className="flex gap-3 py-3.5 border-b border-border last:border-0 group">
        {article.coverImage && (
          <div className="w-16 h-[52px] overflow-hidden shrink-0 rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <CategoryPill href={catHref} label={article.category} color={color} />
          <h4 className="mt-1.5">
            <Link
              href={artHref}
              className="text-[0.8125rem] font-bold leading-snug text-ink hover:text-crimson transition-colors line-clamp-2"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {article.title}
            </Link>
          </h4>
          <p className="text-[0.575rem] text-muted mt-1 uppercase tracking-wider">
            {formatDate(article.publishedAt)}
          </p>
        </div>
      </article>
    );
  }

  /* ── Wide — horizontal list item ────────────────────────── */
  if (variant === "wide") {
    return (
      <article className="group flex gap-4 py-5">
        {article.coverImage && (
          <div className="w-28 h-20 sm:w-32 sm:h-24 overflow-hidden shrink-0 rounded-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
            />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <CategoryPill href={catHref} label={article.category} color={color} />
          <h3 className="mt-2">
            <Link
              href={artHref}
              className="text-[1rem] font-bold leading-snug text-ink hover:text-crimson transition-colors line-clamp-2"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {article.title}
            </Link>
          </h3>
          <p className="text-steel text-[0.8125rem] leading-relaxed mt-1.5 line-clamp-2">
            {article.excerpt}
          </p>
          <p className="text-[0.575rem] text-muted mt-2.5 uppercase tracking-wider">
            {article.author} · {formatDate(article.publishedAt)}
          </p>
        </div>
      </article>
    );
  }

  /* ── Default grid card ───────────────────────────────────── */
  return (
    <article className="article-card group flex flex-col overflow-hidden bg-card rounded-2xl hover:-translate-y-1">
      <div className="aspect-video overflow-hidden rounded-t-2xl" style={{ backgroundColor: `${color}18` }}>
        {article.coverImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
          />
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <CategoryPill href={catHref} label={article.category} color={color} />
        </div>
        <h3 className="flex-1 mb-2.5">
          <Link
            href={artHref}
            className="text-[1.0625rem] font-bold leading-snug text-ink hover:text-crimson transition-colors line-clamp-3"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            {article.title}
          </Link>
        </h3>
        <p className="text-steel text-[0.875rem] leading-relaxed line-clamp-2 mb-4">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-2 text-[0.575rem] text-muted border-t border-border pt-3 mt-auto">
          <span className="uppercase tracking-wider">{article.author}</span>
          <span>·</span>
          <time>{formatDate(article.publishedAt)}</time>
        </div>
      </div>
    </article>
  );
}
