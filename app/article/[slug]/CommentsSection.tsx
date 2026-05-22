"use client";

import { useActionState, useState } from "react";
import { submitCommentAction } from "./actions";
import type { Comment } from "@/lib/comments";
import { signIn, signOut, useSession } from "next-auth/react";

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return "just now";
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d}d ago`;
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric",
  });
}

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
}

const AVATAR_COLORS = [
  "#C41E1E", "#1D4ED8", "#166534", "#B45309", "#7C3AED", "#0E7490", "#9D174D",
];
function avatarColor(name: string) {
  let h = 0;
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) & 0xffffffff;
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
}

interface Props {
  slug: string;
  initialComments: Comment[];
  accentColor?: string;
  googleEnabled?: boolean;
}

export default function CommentsSection({
  slug,
  initialComments,
  accentColor = "#C41E1E",
  googleEnabled = false,
}: Props) {
  const { data: session, status } = useSession();
  const [state, dispatch, pending] = useActionState(submitCommentAction, null);
  const [signingIn, setSigningIn] = useState(false);

  const handleGoogleSignIn = async () => {
    setSigningIn(true);
    await signIn("google");
    setSigningIn(false);
  };

  return (
    <section className="mt-16 pt-10 border-t border-border">

      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-6 rounded-full" style={{ background: accentColor }} />
        <h2 className="text-lg font-bold text-ink" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
          Discussion
          {initialComments.length > 0 && (
            <span className="ml-2.5 text-sm font-semibold text-muted">({initialComments.length})</span>
          )}
        </h2>
      </div>

      {/* Comments list */}
      {initialComments.length > 0 ? (
        <div className="space-y-5 mb-10">
          {initialComments.map((c) => (
            <div key={c.id} className="flex gap-4">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[0.65rem] font-bold shrink-0 mt-0.5"
                style={{ backgroundColor: avatarColor(c.name) }}
              >
                {initials(c.name)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-border/60">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[0.7rem] font-bold text-ink">{c.name}</span>
                    <span className="text-[0.575rem] text-muted shrink-0">{timeAgo(c.createdAt)}</span>
                  </div>
                  <p className="text-[0.875rem] text-steel leading-relaxed whitespace-pre-wrap">{c.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 mb-8 bg-white/60 rounded-2xl border border-border/40">
          <p className="text-sm text-muted">Be the first to comment on this investigation.</p>
        </div>
      )}

      {/* Comment form */}
      <div className="bg-white rounded-2xl border border-border/60 shadow-sm p-6">

        {state?.ok ? (
          <div
            className="rounded-xl px-5 py-4 text-sm font-semibold text-white"
            style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)` }}
          >
            ✓ Comment posted. Thank you for joining the discussion.
          </div>

        ) : googleEnabled && status === "loading" ? (
          <div className="flex items-center gap-2 text-sm text-muted">
            <div className="w-4 h-4 rounded-full border-2 border-muted/30 border-t-crimson animate-spin" />
            Loading…
          </div>

        ) : googleEnabled && !session ? (
          /* Google sign-in prompt */
          <div className="text-center py-2">
            <div className="w-12 h-12 rounded-full bg-border/40 flex items-center justify-center mx-auto mb-4">
              <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-ink mb-1">Sign in to join the discussion</p>
            <p className="text-xs text-muted mb-5">Use your Google account — no password needed.</p>
            <button
              onClick={handleGoogleSignIn}
              disabled={signingIn}
              className="inline-flex items-center gap-3 px-6 py-2.5 rounded-xl border border-border bg-white hover:bg-[#F6F3ED] transition-colors text-sm font-semibold text-ink disabled:opacity-60 shadow-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              {signingIn ? "Redirecting…" : "Continue with Google"}
            </button>
          </div>

        ) : googleEnabled && session ? (
          /* Signed in via Google */
          <form action={dispatch} className="space-y-4">
            <input type="hidden" name="slug" value={slug} />
            <input type="hidden" name="name" value={session.user?.name ?? "Anonymous"} />

            <div className="flex items-center justify-between gap-3 pb-4 border-b border-border/50">
              <div className="flex items-center gap-2.5">
                {session.user?.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={session.user.image} alt="" className="w-8 h-8 rounded-full" />
                ) : (
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: avatarColor(session.user?.name ?? "User") }}>
                    {initials(session.user?.name ?? "U")}
                  </div>
                )}
                <div>
                  <p className="text-[0.7rem] font-bold text-ink">{session.user?.name}</p>
                  <p className="text-[0.575rem] text-muted">{session.user?.email}</p>
                </div>
              </div>
              <button type="button" onClick={() => signOut()}
                className="text-[0.575rem] text-muted hover:text-crimson transition-colors uppercase tracking-wider">
                Sign out
              </button>
            </div>

            {state?.error && (
              <div className="rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs px-4 py-3">{state.error}</div>
            )}

            <div>
              <label className="block text-[0.625rem] font-bold uppercase tracking-widest text-muted mb-1.5">
                Your Comment <span className="text-crimson">*</span>
              </label>
              <textarea name="content" required rows={4}
                placeholder="Share your thoughts on this investigation…"
                className="w-full rounded-xl border border-border bg-[#FDFAF7] px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson/50 transition-all resize-none" />
            </div>

            <div className="flex items-center justify-between pt-1">
              <p className="text-[0.575rem] text-muted">Comments are public.</p>
              <button type="submit" disabled={pending}
                className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white px-6 py-2.5 rounded-xl hover:opacity-90 transition-all disabled:opacity-50 shadow-sm"
                style={{ background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}cc 100%)` }}>
                {pending ? "Posting…" : "Post Comment →"}
              </button>
            </div>
          </form>

        ) : (
          /* Simple name-based form (no Google required) */
          <form action={dispatch} className="space-y-4">
            <input type="hidden" name="slug" value={slug} />

            {state?.error && (
              <div className="rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs px-4 py-3">{state.error}</div>
            )}

            <div>
              <label className="block text-[0.625rem] font-bold uppercase tracking-widest text-muted mb-1.5">
                Your Name <span className="text-crimson">*</span>
              </label>
              <input type="text" name="name" required placeholder="e.g. John Smith"
                className="w-full rounded-xl border border-border bg-[#FDFAF7] px-4 py-2.5 text-sm text-ink placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson/50 transition-all" />
            </div>

            <div>
              <label className="block text-[0.625rem] font-bold uppercase tracking-widest text-muted mb-1.5">
                Comment <span className="text-crimson">*</span>
              </label>
              <textarea name="content" required rows={4}
                placeholder="Share your thoughts on this investigation…"
                className="w-full rounded-xl border border-border bg-[#FDFAF7] px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson/50 transition-all resize-none" />
            </div>

            <div className="flex items-center justify-between pt-1">
              <p className="text-[0.575rem] text-muted">Comments are public and moderated.</p>
              <button type="submit" disabled={pending}
                className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white px-6 py-2.5 rounded-xl hover:opacity-90 transition-all disabled:opacity-50 shadow-sm"
                style={{ background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}cc 100%)` }}>
                {pending ? "Posting…" : "Post Comment →"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
