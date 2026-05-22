"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

interface Message {
  role: "user" | "assistant";
  content: string;
}

function parseLinks(text: string) {
  // Convert [Title](/path) markdown links to JSX
  const parts = text.split(/(\[([^\]]+)\]\(([^)]+)\))/g);
  const result: (string | React.ReactNode)[] = [];
  let i = 0;
  while (i < parts.length) {
    if (parts[i].match(/^\[([^\]]+)\]\(([^)]+)\)$/)) {
      const match = parts[i].match(/^\[([^\]]+)\]\(([^)]+)\)$/)!;
      result.push(
        <Link
          key={i}
          href={match[2]}
          className="underline underline-offset-2 font-semibold hover:opacity-80 transition-opacity"
          style={{ color: "#f87171" }}
        >
          {match[1]}
        </Link>
      );
    } else if (parts[i]) {
      result.push(parts[i]);
    }
    i++;
  }
  return result;
}

const SUGGESTIONS = [
  "What is the Epstein network?",
  "Summarize the Acosta deal",
  "What happened to Ghislaine Maxwell?",
  "Show me Trump-related articles",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content:
            "Hi! I'm Arham's assistant at The American Reveal. I can summarize investigations, help you find articles, or answer questions about the stories covered here. What would you like to know?",
        },
      ]);
    }
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open, messages.length]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = useCallback(
    async (text?: string) => {
      const msg = (text ?? input).trim();
      if (!msg || loading) return;

      const newMessages: Message[] = [...messages, { role: "user", content: msg }];
      setMessages(newMessages);
      setInput("");
      setLoading(true);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: msg,
            history: newMessages.slice(-8).slice(0, -1),
          }),
        });
        const data = await res.json();
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply ?? data.error ?? "Sorry, something went wrong." },
        ]);
      } catch {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Connection error. Please try again." },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [input, messages, loading]
  );

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full text-white shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
        style={{
          background: open
            ? "linear-gradient(135deg, #7F1010 0%, #C41E1E 100%)"
            : "linear-gradient(135deg, #C41E1E 0%, #9B1515 100%)",
          boxShadow: "0 8px 32px rgba(196,30,30,0.4)",
        }}
        aria-label={open ? "Close assistant" : "Open assistant"}
      >
        {open ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] flex flex-col rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{ maxHeight: "520px", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 px-4 py-3.5 shrink-0"
          style={{ background: "linear-gradient(135deg, #C41E1E 0%, #9B1515 100%)" }}
        >
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M9 12l2 2 4-4M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-[0.75rem] font-bold text-white leading-none">TAR Assistant</p>
            <p className="text-[0.575rem] text-white/65 mt-0.5">Ask about investigations & articles</p>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[0.55rem] text-white/60">Online</span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ backgroundColor: "#0F0E0D" }}>
          {messages.map((m, i) => (
            <div key={i} className={`flex gap-2 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
              {m.role === "assistant" && (
                <div className="w-6 h-6 rounded-full shrink-0 mt-0.5 flex items-center justify-center text-[0.5rem] font-bold text-white"
                  style={{ backgroundColor: "#C41E1E" }}>
                  T
                </div>
              )}
              <div
                className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-[0.8rem] leading-relaxed ${
                  m.role === "user"
                    ? "text-white rounded-tr-sm"
                    : "text-white/85 rounded-tl-sm"
                }`}
                style={{
                  backgroundColor: m.role === "user"
                    ? "rgba(196,30,30,0.75)"
                    : "rgba(255,255,255,0.07)",
                  border: m.role === "assistant" ? "1px solid rgba(255,255,255,0.08)" : "none",
                }}
              >
                {m.role === "assistant" ? parseLinks(m.content) : m.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-[0.5rem] font-bold text-white"
                style={{ backgroundColor: "#C41E1E" }}>T</div>
              <div className="px-3.5 py-3 rounded-2xl rounded-tl-sm" style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Suggestions (first message only) */}
          {messages.length === 1 && !loading && (
            <div className="flex flex-wrap gap-2 pt-1">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-[0.6rem] font-semibold px-3 py-1.5 rounded-full transition-all hover:scale-105"
                  style={{
                    backgroundColor: "rgba(196,30,30,0.15)",
                    border: "1px solid rgba(196,30,30,0.3)",
                    color: "#f87171",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={(e) => { e.preventDefault(); send(); }}
          className="flex gap-2 p-3 shrink-0"
          style={{ backgroundColor: "#1A1615", borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about investigations…"
            disabled={loading}
            className="flex-1 bg-white/[0.07] border border-white/10 text-white text-[0.8rem] px-3.5 py-2.5 rounded-xl placeholder:text-white/30 focus:outline-none focus:border-crimson/50 transition-colors disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all hover:opacity-90 disabled:opacity-30 shrink-0"
            style={{ background: "linear-gradient(135deg, #C41E1E 0%, #9B1515 100%)" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}
