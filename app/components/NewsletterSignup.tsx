"use client";

import { useActionState } from "react";
import { subscribeAction } from "@/app/newsletter-action";

export default function NewsletterSignup({ variant = "full" }: { variant?: "full" | "mini" }) {
  const [state, dispatch, pending] = useActionState(subscribeAction, null);

  /* ── Mini (footer) ───────────────────────────────────────── */
  if (variant === "mini") {
    return (
      <div>
        <p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-white/35 mb-4">
          Newsletter
        </p>
        {state?.ok ? (
          <p className="text-[0.8125rem] font-semibold" style={{ color: "#f87171" }}>
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
                className="flex-1 bg-white/8 border border-white/15 text-white text-[0.8125rem] px-3 py-2 placeholder:text-white/30 focus:outline-none focus:border-crimson/60 transition-colors min-w-0 rounded-l-lg"
              />
              <button
                type="submit"
                disabled={pending}
                className="text-white text-[0.6rem] font-bold uppercase tracking-widest px-4 py-2 hover:opacity-90 transition-opacity disabled:opacity-50 whitespace-nowrap shrink-0 rounded-r-lg"
                style={{ background: "linear-gradient(135deg, #C41E1E 0%, #9B1515 100%)" }}
              >
                {pending ? "…" : "Subscribe"}
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }

  /* ── Full (homepage) ─────────────────────────────────────── */
  return (
    <section
      id="newsletter"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0D0B0A 0%, #1A0808 50%, #0D0B0A 100%)",
      }}
    >
      {/* Crimson glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(196,30,30,0.18) 0%, transparent 70%)",
        }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-[0.575rem] font-bold uppercase tracking-[0.22em] border"
            style={{ color: "#f87171", borderColor: "rgba(196,30,30,0.35)", backgroundColor: "rgba(196,30,30,0.08)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
            The American Reveal Dispatch
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Stay Informed.
            <br />
            <span style={{ color: "rgba(255,255,255,0.45)" }}>Stay Independent.</span>
          </h2>

          <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
            Investigations delivered to your inbox — the Epstein network, political power, and
            the stories that demand accountability. No noise. Unsubscribe anytime.
          </p>

          {state?.ok ? (
            <div className="rounded-2xl border px-6 py-5"
              style={{ borderColor: "rgba(196,30,30,0.3)", backgroundColor: "rgba(196,30,30,0.07)" }}>
              <p className="font-semibold text-sm" style={{ color: "#f87171" }}>✓ {state.message}</p>
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>
                You'll receive notifications for all future published articles.
              </p>
            </div>
          ) : (
            <>
              <form action={dispatch} className="flex flex-col sm:flex-row gap-2 sm:gap-0 max-w-sm mx-auto">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email address"
                  className="flex-1 text-white text-sm px-5 py-3.5 placeholder:text-white/30 focus:outline-none transition-colors min-w-0 rounded-xl sm:rounded-r-none sm:rounded-l-xl"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
                />
                <button
                  type="submit"
                  disabled={pending}
                  className="text-white text-[0.6rem] font-bold uppercase tracking-[0.18em] px-6 py-3.5 hover:opacity-90 transition-opacity disabled:opacity-50 whitespace-nowrap shrink-0 rounded-xl sm:rounded-l-none sm:rounded-r-xl shadow-xl"
                  style={{ background: "linear-gradient(135deg, #C41E1E 0%, #9B1515 100%)" }}
                >
                  {pending ? "…" : "Subscribe"}
                </button>
              </form>
              {state?.message && (
                <p className="text-red-400 text-xs mt-3">{state.message}</p>
              )}
            </>
          )}

          <p className="text-[0.55rem] uppercase tracking-widest mt-5" style={{ color: "rgba(255,255,255,0.2)" }}>
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
}
