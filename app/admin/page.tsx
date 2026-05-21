"use client";

import { useActionState } from "react";
import { loginAction } from "./actions";

export default function AdminLoginPage() {
  const [state, action, pending] = useActionState(loginAction, null);

  return (
    <div className="min-h-screen bg-ink flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-2xl font-bold text-white uppercase tracking-widest mb-1"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            The American Reveal
          </h1>
          <div className="h-px w-10 bg-crimson mx-auto mt-2 mb-4" />
          <p className="text-xs text-white/40 uppercase tracking-widest">Admin Access</p>
        </div>

        {/* Form */}
        <form action={action} className="space-y-4">
          {state?.error && (
            <div className="bg-crimson/10 border border-crimson/30 text-crimson text-sm px-4 py-3">
              {state.error}
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-white/50 mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              autoComplete="username"
              required
              className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-crimson/50 focus:bg-white/8 transition-colors"
              placeholder="Enter username"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-white/50 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              required
              className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-crimson/50 focus:bg-white/8 transition-colors"
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className="w-full bg-crimson text-white text-xs font-bold uppercase tracking-widest py-3 hover:bg-crimson-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            {pending ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
