"use client";

import { useActionState } from "react";
import { subscribeAction } from "@/app/newsletter-action";

export default function NewsletterSignup({ variant = "full" }: { variant?: "full" | "mini" }) {
  const [state, dispatch, pending] = useActionState(subscribeAction, null);

  if (variant === "mini") {
    return (
      <div>
        <p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-white/30 mb-4">
          Newsletter
        </p>
        {state?.ok ? (
          <p className="text-[0.8125rem] text-crimson font-semibold">
            ✓ {state.message}
          </p>
        ) : (
          <form action={dispatch} className="space-y-2">
            {state?.message && (
              <p className="text-[0.75rem] text-red-400">{state.message}</p>
            )}
            <div className="flex gap-0">
              <input
                type="email"
                name="email"
                required
                placeholder="Your email address"
                className="flex-1 bg-white/8 border border-white/15 text-white text-[0.8125rem] px-3 py-2 placeholder:text-white/30 focus:outline-none focus:border-crimson/60 transition-colors min-w-0"
              />
              <button
                type="submit"
                disabled={pending}
                className="bg-crimson text-white text-[0.6rem] font-bold uppercase tracking-widest px-3 py-2 hover:bg-crimson-dark transition-colors disabled:opacity-50 whitespace-nowrap shrink-0"
              >
                {pending ? "…" : "Subscribe"}
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }

  // Full variant (homepage)
  return (
    <div className="bg-ink">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="max-w-2xl mx-auto text-center">
          {/* Label */}
          <p className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-crimson mb-4">
            The American Reveal Dispatch
          </p>

          {/* Headline */}
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Stay Informed. Stay Independent.
          </h2>

          <p className="text-[0.875rem] text-white/45 mb-8 leading-relaxed">
            Investigative updates on the Epstein network, American political power,
            and the stories that demand accountability — delivered directly to your inbox.
            No spam. Unsubscribe anytime.
          </p>

          {state?.ok ? (
            <div className="border border-crimson/30 bg-crimson/5 px-6 py-5">
              <p className="text-crimson font-semibold text-sm">✓ {state.message}</p>
              <p className="text-white/40 text-xs mt-1">Thank you for subscribing to The American Reveal.</p>
            </div>
          ) : (
            <form action={dispatch} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <div className="flex-1">
                {state?.message && (
                  <p className="text-red-400 text-xs mb-2 text-left">{state.message}</p>
                )}
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full bg-white/[0.07] border border-white/15 text-white text-sm px-5 py-3.5 placeholder:text-white/30 focus:outline-none focus:border-crimson/50 transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={pending}
                className="bg-crimson text-white text-[0.625rem] font-bold uppercase tracking-[0.18em] px-7 py-3.5 hover:bg-crimson-dark transition-colors disabled:opacity-50 whitespace-nowrap"
              >
                {pending ? "Subscribing…" : "Subscribe"}
              </button>
            </form>
          )}

          <p className="text-[0.6rem] text-white/20 mt-5 uppercase tracking-widest">
            We respect your privacy. Read our editorial commitment above.
          </p>
        </div>
      </div>
    </div>
  );
}
