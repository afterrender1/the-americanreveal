"use client";

import { useEffect } from "react";

export default function ViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    const key = `viewed:${slug}`;
    const stored = localStorage.getItem(key);
    const now = Date.now();

    // Only count once per 24 hours per device
    if (stored && now - Number(stored) < 86_400_000) return;

    localStorage.setItem(key, String(now));
    fetch("/api/view", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    }).catch(() => {});
  }, [slug]);

  return null;
}
