import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import Link from "next/link";
import { logoutAction } from "@/app/admin/actions";

export default async function AdminProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authed = await isAuthenticated();
  if (!authed) redirect("/admin");

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#F5F2EC" }}>
      {/* Admin header */}
      <header
        className="text-white sticky top-0 z-50"
        style={{
          backgroundColor: "#0a0a0a",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 py-3.5 flex items-center justify-between">
          {/* Left: logo with crimson dot */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              {/* Crimson dot */}
              <span className="w-2 h-2 rounded-full bg-crimson shrink-0" />
              <Link
                href="/"
                className="text-sm font-bold text-white hover:text-white/80 transition-colors"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                The American Reveal
              </Link>
            </div>

            {/* Separator */}
            <span style={{ color: "rgba(255,255,255,0.12)", fontSize: "0.75rem" }}>|</span>

            {/* Center nav */}
            <nav className="flex items-center gap-5">
              <Link
                href="/admin/dashboard"
                className="text-[0.6rem] uppercase tracking-[0.18em] text-white/40 hover:text-white transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/admin/new"
                className="text-[0.6rem] uppercase tracking-[0.18em] text-white/40 hover:text-white transition-colors"
              >
                New Article
              </Link>
              <Link
                href="/admin/comments"
                className="text-[0.6rem] uppercase tracking-[0.18em] text-white/40 hover:text-white transition-colors"
              >
                Comments
              </Link>
            </nav>
          </div>

          {/* Right: view site + sign out */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              target="_blank"
              className="text-[0.6rem] uppercase tracking-[0.18em] transition-colors"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              View Site →
            </Link>
            <form action={logoutAction}>
              <button
                type="submit"
                className="text-[0.6rem] uppercase tracking-[0.18em] transition-colors px-3 py-1.5 border"
                style={{
                  color: "rgba(255,255,255,0.35)",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-5 py-8">
        {children}
      </main>
    </div>
  );
}
