import Link from "next/link";
import { getAllArticles, isScheduled, slugifyCategory } from "@/lib/articles";
import { formatDate } from "@/lib/utils";
import { AdminActions } from "../components/AdminActions";
import { getAllViews, getAllGeoViews } from "@/lib/views";

export const dynamic = "force-dynamic";

const COUNTRY_NAMES: Record<string, string> = {
  US: "United States", GB: "United Kingdom", CA: "Canada", AU: "Australia",
  DE: "Germany", FR: "France", IN: "India", PK: "Pakistan", AE: "UAE",
  SA: "Saudi Arabia", MX: "Mexico", BR: "Brazil", NG: "Nigeria", ZA: "South Africa",
  NL: "Netherlands", SE: "Sweden", NO: "Norway", PH: "Philippines", SG: "Singapore",
  NZ: "New Zealand", IE: "Ireland", IT: "Italy", ES: "Spain", JP: "Japan",
  KR: "South Korea", TR: "Turkey", PL: "Poland", EG: "Egypt", KE: "Kenya",
};

export default async function AdminDashboardPage() {
  const [articles, views, geo] = await Promise.all([getAllArticles(), getAllViews(), getAllGeoViews()]);
  const liveCount = articles.filter((a) => a.published && !isScheduled(a)).length;
  const scheduledCount = articles.filter((a) => isScheduled(a)).length;
  const drafts = articles.filter((a) => !a.published).length;
  const totalViews = Object.values(views).reduce((sum, n) => sum + n, 0);
  const topCountries = Object.entries(geo)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  const stats = [
    {
      label: "Live",
      value: liveCount,
      borderColor: "#16a34a",
      textColor: "#15803d",
      bg: "#f0fdf4",
    },
    {
      label: "Scheduled",
      value: scheduledCount,
      borderColor: "#d97706",
      textColor: "#b45309",
      bg: "#fffbeb",
    },
    {
      label: "Drafts",
      value: drafts,
      borderColor: "#9ca3af",
      textColor: "#6b7280",
      bg: "#f9fafb",
    },
    {
      label: "Total Articles",
      value: articles.length,
      borderColor: "#0A0A0A",
      textColor: "#0A0A0A",
      bg: "#ffffff",
    },
    {
      label: "Total Views",
      value: totalViews.toLocaleString(),
      borderColor: "#B91C1C",
      textColor: "#B91C1C",
      bg: "#fff1f2",
    },
  ];

  return (
    <div>
      {/* Page header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1
            className="text-2xl font-bold text-ink"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Article Dashboard
          </h1>
          <p className="text-sm text-steel mt-1">
            {liveCount} live · {scheduledCount} scheduled · {drafts} draft{drafts !== 1 ? "s" : ""}
          </p>
        </div>
        <Link
          href="/admin/new"
          className="bg-ink text-white text-[0.6rem] font-bold uppercase tracking-[0.18em] px-5 py-2.5 hover:opacity-85 transition-opacity"
        >
          + New Article
        </Link>
      </div>

      {/* Stats — 4 clean cards with accent left border */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map(({ label, value, borderColor, textColor, bg }) => (
          <div
            key={label}
            className="p-5 border border-border/70"
            style={{
              backgroundColor: bg,
              borderLeft: `3px solid ${borderColor}`,
            }}
          >
            <p
              className="text-3xl font-bold leading-none mb-1.5"
              style={{ color: textColor }}
            >
              {value}
            </p>
            <p
              className="text-[0.6rem] uppercase tracking-[0.18em] font-semibold"
              style={{ color: textColor, opacity: 0.65 }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Geo breakdown */}
      <div className="mb-8 bg-white border border-border p-5">
        <h2 className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-muted mb-4">
          Views by Country
        </h2>
        {topCountries.length === 0 ? (
          <p className="text-xs text-muted">No location data yet — will populate as readers visit articles.</p>
        ) : (
          <div className="space-y-2">
            {topCountries.map(([code, count]) => {
              const pct = totalViews > 0 ? Math.round((count / totalViews) * 100) : 0;
              return (
                <div key={code} className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-ink w-36 shrink-0 truncate">
                    {COUNTRY_NAMES[code] ?? code}
                  </span>
                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-crimson"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-xs tabular-nums text-steel w-10 text-right shrink-0">
                    {count.toLocaleString()}
                  </span>
                  <span className="text-[0.6rem] text-muted w-8 text-right shrink-0">
                    {pct}%
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Articles table */}
      {articles.length === 0 ? (
        <div className="bg-white border border-border p-12 text-center">
          <p className="text-steel mb-4">No articles yet.</p>
          <Link
            href="/admin/new"
            className="text-[0.6rem] font-bold uppercase tracking-widest text-crimson hover:opacity-75 transition-opacity"
          >
            Create your first article →
          </Link>
        </div>
      ) : (
        <div className="bg-white border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-5 py-3.5">
                  <span className="text-[0.6rem] uppercase tracking-[0.18em] text-muted font-semibold">Title</span>
                </th>
                <th className="text-left px-3 py-3.5 hidden md:table-cell">
                  <span className="text-[0.6rem] uppercase tracking-[0.18em] text-muted font-semibold">Category</span>
                </th>
                <th className="text-left px-3 py-3.5 hidden lg:table-cell">
                  <span className="text-[0.6rem] uppercase tracking-[0.18em] text-muted font-semibold">Date</span>
                </th>
                <th className="text-left px-3 py-3.5">
                  <span className="text-[0.6rem] uppercase tracking-[0.18em] text-muted font-semibold">Status</span>
                </th>
                <th className="text-center px-3 py-3.5 hidden sm:table-cell">
                  <span className="text-[0.6rem] uppercase tracking-[0.18em] text-muted font-semibold">Views</span>
                </th>
                <th className="text-right px-5 py-3.5">
                  <span className="text-[0.6rem] uppercase tracking-[0.18em] text-muted font-semibold">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr
                  key={article.id}
                  className="border-b border-border/40 last:border-0 transition-colors hover:bg-[#FDFAF6]"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-start gap-3">
                      {article.coverImage && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={article.coverImage}
                          alt=""
                          className="w-12 h-10 object-cover shrink-0 border border-border hidden sm:block"
                        />
                      )}
                      <div className="min-w-0">
                        <Link
                          href={`/article/${article.slug}`}
                          target="_blank"
                          className="font-medium text-ink hover:text-crimson transition-colors leading-snug line-clamp-2"
                          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                        >
                          {article.title}
                        </Link>
                        <div className="flex gap-1.5 mt-1 flex-wrap">
                          {article.featured && (
                            <span className="text-[0.55rem] bg-crimson/10 text-crimson px-1.5 py-0.5 font-bold uppercase tracking-wide border border-crimson/20">
                              Featured
                            </span>
                          )}
                          {article.pdfUrl && (
                            <span className="text-[0.55rem] bg-slate-100 text-slate-600 px-1.5 py-0.5 font-bold uppercase tracking-wide border border-slate-200">
                              PDF
                            </span>
                          )}
                          {article.accentColor && (
                            <span
                              className="inline-block w-4 h-4 border border-border rounded-sm self-center"
                              style={{ backgroundColor: article.accentColor }}
                              title={`Accent: ${article.accentColor}`}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-4 hidden md:table-cell">
                    <Link
                      href={`/category/${slugifyCategory(article.category)}`}
                      className="text-[0.6rem] font-semibold uppercase tracking-widest text-steel hover:text-crimson transition-colors"
                    >
                      {article.category}
                    </Link>
                  </td>
                  <td className="px-3 py-4 hidden lg:table-cell">
                    <span className="text-xs text-muted">{formatDate(article.publishedAt)}</span>
                  </td>
                  <td className="px-3 py-4">
                    {isScheduled(article) ? (
                      <div>
                        {/* Scheduled pill */}
                        <span className="inline-flex items-center text-[0.55rem] font-bold uppercase tracking-wide px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200">
                          Scheduled
                        </span>
                        {article.scheduledAt && (
                          <p className="text-[0.6rem] text-muted mt-0.5">
                            {formatDate(article.scheduledAt)}
                          </p>
                        )}
                      </div>
                    ) : article.published ? (
                      <span className="inline-flex items-center text-[0.55rem] font-bold uppercase tracking-wide px-2 py-0.5 bg-green-50 text-green-700 border border-green-200">
                        Live
                      </span>
                    ) : (
                      <span className="inline-flex items-center text-[0.55rem] font-bold uppercase tracking-wide px-2 py-0.5 bg-gray-100 text-gray-500 border border-gray-200">
                        Draft
                      </span>
                    )}
                  </td>
                  <td className="px-3 py-4 hidden sm:table-cell text-center">
                    <span className="text-xs font-semibold text-steel tabular-nums">
                      {(views[article.slug] ?? 0).toLocaleString()}
                    </span>
                    <p className="text-[0.55rem] text-muted uppercase tracking-wide">views</p>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <AdminActions id={article.id} published={article.published} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
