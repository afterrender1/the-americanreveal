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
    <div className="flex items-center gap-3">
      <Link
        href={`/admin/edit/${id}`}
        className="text-xs font-semibold uppercase tracking-wide text-steel hover:text-ink transition-colors"
      >
        Edit
      </Link>
      <button
        onClick={handleToggle}
        disabled={publishPending}
        className={`text-xs font-semibold uppercase tracking-wide transition-colors disabled:opacity-50 ${
          published
            ? "text-crimson hover:text-crimson-dark"
            : "text-green-700 hover:text-green-900"
        }`}
      >
        {publishPending ? "..." : published ? "Unpublish" : "Publish"}
      </button>
      <button
        onClick={handleDelete}
        disabled={deletePending}
        className="text-xs font-semibold uppercase tracking-wide text-muted hover:text-crimson transition-colors disabled:opacity-50"
      >
        {deletePending ? "..." : "Delete"}
      </button>
    </div>
  );
}
