"use client";

import { useTransition } from "react";
import { deleteArticleAction, togglePublishAction } from "@/app/admin/actions";
import Link from "next/link";

interface AdminActionsProps {
  id: string;
  published: boolean;
}

export function AdminActions({ id, published }: AdminActionsProps) {
  const [deletePending, startDeleteTransition] = useTransition();
  const [publishPending, startPublishTransition] = useTransition();

  function handleDelete() {
    if (!confirm("Delete this article? This cannot be undone.")) return;
    startDeleteTransition(async () => {
      await deleteArticleAction(id);
    });
  }

  function handleToggle() {
    startPublishTransition(async () => {
      await togglePublishAction(id, !published);
    });
  }

  return (
    <div className="flex items-center gap-2 justify-end">
      {/* Edit — small outlined button */}
      <Link
        href={`/admin/edit/${id}`}
        className="inline-flex items-center text-[0.6rem] font-semibold uppercase tracking-wide px-3 py-1 border border-border text-steel hover:border-steel transition-all"
      >
        Edit
      </Link>

      {/* Publish / Unpublish — small colored pill button */}
      <button
        onClick={handleToggle}
        disabled={publishPending}
        className={`inline-flex items-center text-[0.6rem] font-semibold uppercase tracking-wide px-3 py-1 border transition-all disabled:opacity-50 ${
          published
            ? "bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100"
            : "bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
        }`}
      >
        {publishPending ? "…" : published ? "Unpublish" : "Publish"}
      </button>

      {/* Delete — subtle outlined, crimson on hover */}
      <button
        onClick={handleDelete}
        disabled={deletePending}
        className="inline-flex items-center text-[0.6rem] font-semibold uppercase tracking-wide px-3 py-1 border border-transparent text-muted hover:border-crimson/30 hover:text-crimson transition-all disabled:opacity-50"
      >
        {deletePending ? "…" : "Delete"}
      </button>
    </div>
  );
}
