"use client";

import { useTransition } from "react";
import { deleteCommentAction } from "@/app/admin/actions";

export function DeleteCommentButton({ id, articleSlug }: { id: string; articleSlug: string }) {
  const [pending, startTransition] = useTransition();

  return (
    <button
      disabled={pending}
      onClick={() => {
        if (!confirm("Delete this comment? This cannot be undone.")) return;
        startTransition(() => deleteCommentAction(id, articleSlug));
      }}
      className="text-[0.55rem] font-bold uppercase tracking-[0.15em] px-3 py-1.5 border transition-colors disabled:opacity-40"
      style={{
        color: pending ? "#9ca3af" : "#dc2626",
        borderColor: pending ? "#e5e7eb" : "#fca5a5",
        backgroundColor: pending ? "#f9fafb" : "#fff5f5",
      }}
    >
      {pending ? "Deleting…" : "Delete"}
    </button>
  );
}
