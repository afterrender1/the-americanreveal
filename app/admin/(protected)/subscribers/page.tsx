import { getAllSubscribers } from "@/lib/subscribers";

export const dynamic = "force-dynamic";

export default async function AdminSubscribersPage() {
  const subscribers = await getAllSubscribers();
  const sorted = [...subscribers].sort(
    (a, b) => new Date(b.subscribedAt).getTime() - new Date(a.subscribedAt).getTime()
  );

  return (
    <div>
      {/* Page header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1
            className="text-2xl font-bold text-ink"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Subscribers
          </h1>
          <p className="text-sm text-steel mt-1">
            {subscribers.length} total subscriber{subscribers.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {sorted.length === 0 ? (
        <div className="bg-white border border-border p-12 text-center">
          <p className="text-steel">No subscribers yet.</p>
        </div>
      ) : (
        <div className="bg-white border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-5 py-3.5">
                  <span className="text-[0.6rem] uppercase tracking-[0.18em] text-muted font-semibold">#</span>
                </th>
                <th className="text-left px-5 py-3.5">
                  <span className="text-[0.6rem] uppercase tracking-[0.18em] text-muted font-semibold">Email</span>
                </th>
                <th className="text-left px-5 py-3.5 hidden sm:table-cell">
                  <span className="text-[0.6rem] uppercase tracking-[0.18em] text-muted font-semibold">Subscribed</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((sub, i) => (
                <tr
                  key={sub.email}
                  className="border-b border-border/40 last:border-0 hover:bg-[#FDFAF6] transition-colors"
                >
                  <td className="px-5 py-4">
                    <span className="text-[0.65rem] text-muted font-semibold tabular-nums">
                      {sorted.length - i}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <a
                      href={`mailto:${sub.email}`}
                      className="text-sm font-medium text-ink hover:text-crimson transition-colors"
                    >
                      {sub.email}
                    </a>
                  </td>
                  <td className="px-5 py-4 hidden sm:table-cell">
                    <span className="text-xs text-muted">
                      {new Date(sub.subscribedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Footer total */}
          <div className="px-5 py-3 border-t border-border/40 bg-[#FDFAF6]">
            <p className="text-[0.6rem] uppercase tracking-[0.18em] text-muted font-semibold">
              {subscribers.length} subscriber{subscribers.length !== 1 ? "s" : ""} total
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
