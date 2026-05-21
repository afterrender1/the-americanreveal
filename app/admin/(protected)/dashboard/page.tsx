import Link from "next/link";
import { getAllArticles, isScheduled, slugifyCategory } from "@/lib/articles";
import { formatDate } from "@/lib/utils";
import { AdminActions } from "../components/AdminActions";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const articles = await getAllArticles();
  const liveCount = articles.filter((a) => a.published && !isScheduled(a)).length;
  const scheduledCount = articles.filter((a) => isScheduled(a)).length;
  const drafts = articles.filter((a) => !a.published).length;

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
          className="bg-ink text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 hover:bg-steel transition-colors"
        >
          + New Article
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Articles", value: articles.length },
          { label: "Live", value: liveCount },
          { label: "Scheduled", value: scheduledCount },
          { label: "Drafts", value: drafts },
        ].map(({ label, value }) => (
          <div key={label} className="bg-white border border-border p-4">
            <p className="text-2xl font-bold text-ink">{value}</p>
            <p className="text-xs text-muted uppercase tracking-widest mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Articles table */}
      {articles.length === 0 ? (
        <div className="bg-white border border-border p-12 text-center">
          <p className="text-steel mb-4">No articles yet.</p>
          <Link
            href="/admin/new"
            className="text-xs font-bold uppercase tracking-widest text-crimson hover:text-crimson-dark"
          >
            Create your first article →
          </Link>
        </div>
      ) : (
        <div className="bg-white border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-xs font-semibold uppercase tracking-widest text-muted px-5 py-3">
                  Title
                </th>
                <th className="text-left text-xs font-semibold uppercase tracking-widest text-muted px-3 py-3 hidden md:table-cell">
                  Category
                </th>
                <th className="text-left text-xs font-semibold uppercase tracking-widest text-muted px-3 py-3 hidden lg:table-cell">
                  Date
                </th>
                <th className="text-left text-xs font-semibold uppercase tracking-widest text-muted px-3 py-3">
                  Status
                </th>
                <th className="text-right text-xs font-semibold uppercase tracking-widest text-muted px-5 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article.id} className="border-b border-border/50 last:border-0 hover:bg-[#F8F5EF] transition-colors">
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
                            <span className="text-xs bg-crimson/10 text-crimson px-1.5 py-0.5 font-semibold uppercase tracking-wide">
                              Featured
                            </span>
                          )}
                          {article.pdfUrl && (
                            <span className="text-xs bg-slate-100 text-slate-600 px-1.5 py-0.5 font-semibold uppercase tracking-wide">
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
                      className="text-xs font-semibold uppercase tracking-widest text-steel hover:text-crimson transition-colors"
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
                        <span className="text-xs font-semibold uppercase tracking-wide text-amber-600">
                          Scheduled
                        </span>
                        {article.scheduledAt && (
                          <p className="text-xs text-muted mt-0.5">
                            {formatDate(article.scheduledAt)}
                          </p>
                        )}
                      </div>
                    ) : (
                      <span
                        className={`text-xs font-semibold uppercase tracking-wide ${
                          article.published ? "text-green-700" : "text-muted"
                        }`}
                      >
                        {article.published ? "Live" : "Draft"}
                      </span>
                    )}
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
