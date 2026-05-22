"use client";

import { useActionState } from "react";
import { submitCommentAction } from "./actions";
import type { Comment } from "@/lib/comments";
import GoogleCommentsForm from "./GoogleCommentsForm";

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
  const [state, dispatch, pending] = useActionState(submitCommentAction, null);

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

        ) : googleEnabled ? (
          /* Google sign-in flow — useSession lives in this child component only */
          <GoogleCommentsForm
            slug={slug}
            accentColor={accentColor}
            dispatch={dispatch}
            pending={pending}
            error={state?.error}
          />

        ) : (
          /* Simple name-based form — no auth needed */
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
