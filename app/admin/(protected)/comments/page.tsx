import { getAllComments } from "@/lib/comments";
import { DeleteCommentButton } from "./DeleteCommentButton";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function AdminCommentsPage() {
  const comments = await getAllComments();

  return (
    <div>
      {/* Page header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1
            className="text-2xl font-bold text-ink"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Comments
          </h1>
          <p className="text-sm text-steel mt-1">
            {comments.length} total comment{comments.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {comments.length === 0 ? (
        <div className="bg-white border border-border p-12 text-center">
          <p className="text-steel">No comments yet.</p>
        </div>
      ) : (
        <div className="bg-white border border-border divide-y divide-border/50">
          {comments.map((c) => (
            <div key={c.id} className="px-6 py-5 flex items-start justify-between gap-6">
              <div className="min-w-0 flex-1">
                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-[0.65rem] font-bold uppercase tracking-widest text-ink">
                    {c.name}
                  </span>
                  <span className="text-muted text-[0.6rem]">·</span>
                  <span className="text-[0.6rem] text-muted">
                    {formatDate(c.createdAt)}
                  </span>
                  <span className="text-muted text-[0.6rem]">·</span>
                  <a
                    href={`/article/${c.articleSlug}`}
                    target="_blank"
                    className="text-[0.6rem] text-crimson hover:underline font-semibold uppercase tracking-wider"
                  >
                    {c.articleSlug}
                  </a>
                </div>
                {/* Comment body */}
                <p className="text-sm text-steel leading-relaxed whitespace-pre-wrap">
                  {c.content}
                </p>
              </div>

              <div className="shrink-0 pt-0.5">
                <DeleteCommentButton id={c.id} articleSlug={c.articleSlug} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
