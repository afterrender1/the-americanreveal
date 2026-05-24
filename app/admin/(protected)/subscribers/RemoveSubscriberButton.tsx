"use client";

import { useTransition } from "react";
import { removeSubscriberAction } from "@/app/admin/actions";

export default function RemoveSubscriberButton({ email }: { email: string }) {
  const [pending, startTransition] = useTransition();

  function handleClick() {
    if (!confirm(`Remove ${email} from subscribers?`)) return;
    startTransition(() => removeSubscriberAction(email));
  }

  return (
    <button
      onClick={handleClick}
      disabled={pending}
      className="text-xs text-red-500 hover:text-red-700 transition-colors disabled:opacity-40"
    >
      {pending ? "Removing…" : "Remove"}
    </button>
  );
}
