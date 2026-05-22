"use client";

import { useActionState } from "react";
import { loginAction } from "./actions";

export default function AdminLoginPage() {
  const [state, action, pending] = useActionState(loginAction, null);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundColor: "#090909",
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.032) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >
      <div className="w-full max-w-sm">
        {/* Card */}
        <div
          className="p-10"
          style={{
            backgroundColor: "#111",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Logo / header */}
          <div className="text-center mb-8">
            <h1
              className="text-xl font-bold text-white tracking-wide"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              The American Reveal
            </h1>
            {/* Crimson 2px line below logo */}
            <div className="h-[2px] w-8 bg-crimson mx-auto mt-3 mb-4" />
            <p className="text-[0.65rem] text-white/40 uppercase tracking-[0.22em]">
              Admin Access
            </p>
          </div>

          {/* Form */}
          <form action={action} className="space-y-4">
            {state?.error && (
              <div
                className="text-sm px-4 py-3 text-crimson"
                style={{
                  backgroundColor: "rgba(185,28,28,0.08)",
                  border: "1px solid rgba(185,28,28,0.30)",
                }}
              >
                {state.error}
              </div>
            )}

            <div>
              <label className="block text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/40 mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                autoComplete="username"
                required
                className="w-full text-white text-sm px-4 py-3 transition-all placeholder:text-white/20 focus:outline-none"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(185,28,28,0.6)";
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)";
                }}
                placeholder="Enter username"
              />
            </div>

            <div>
              <label className="block text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/40 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                required
                className="w-full text-white text-sm px-4 py-3 transition-all placeholder:text-white/20 focus:outline-none"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(185,28,28,0.6)";
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)";
                }}
                placeholder="Enter password"
              />
            </div>

            <button
              type="submit"
              disabled={pending}
              className="w-full bg-crimson text-white text-[0.65rem] font-bold uppercase tracking-[0.18em] py-3.5 mt-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {pending ? "Signing In…" : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
