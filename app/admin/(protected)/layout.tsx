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
    <div className="min-h-screen bg-[#F0EDE6] flex flex-col">
      {/* Admin header */}
      <header className="bg-ink text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-bold uppercase tracking-widest text-white hover:text-crimson transition-colors"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              The American Reveal
            </Link>
            <span className="text-white/20 text-xs">|</span>
            <nav className="flex items-center gap-4">
              <Link
                href="/admin/dashboard"
                className="text-xs font-semibold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/admin/new"
                className="text-xs font-semibold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
              >
                New Article
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              target="_blank"
              className="text-xs text-white/40 hover:text-white transition-colors"
            >
              View Site →
            </Link>
            <form action={logoutAction}>
              <button
                type="submit"
                className="text-xs font-semibold uppercase tracking-widest text-white/40 hover:text-crimson transition-colors"
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        {children}
      </main>
    </div>
  );
}
