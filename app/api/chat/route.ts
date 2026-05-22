import { NextRequest, NextResponse } from "next/server";
import { getPublishedArticles } from "@/lib/articles";
import type { Article } from "@/lib/articles";

// ── Smart local fallback (no API needed) ──────────────────────────────────────
function localSearch(message: string, articles: Article[]): string {
  const q = message.toLowerCase();

  // Keyword → article match
  const scored = articles.map((a) => {
    let score = 0;
    const haystack = `${a.title} ${a.excerpt} ${a.category} ${a.content}`.toLowerCase();
    const words = q.split(/\s+/).filter((w) => w.length > 3);
    for (const w of words) if (haystack.includes(w)) score++;
    if (haystack.includes(q)) score += 5;
    return { a, score };
  });

  const top = scored.filter((s) => s.score > 0).sort((a, b) => b.score - a.score).slice(0, 3);

  if (top.length === 0) {
    return "I couldn't find articles matching that query. Try asking about Epstein, Trump, Maxwell, Acosta, Bill Gates, or Little St. James.";
  }

  const links = top.map((s) => `• [${s.a.title}](/article/${s.a.slug}) — ${s.a.excerpt.slice(0, 100)}…`).join("\n");
  return `Here are the most relevant articles I found:\n\n${links}`;
}

export async function POST(req: NextRequest) {
  const { message, history } = (await req.json()) as {
    message: string;
    history: { role: "user" | "assistant"; content: string }[];
  };

  if (!message?.trim()) {
    return NextResponse.json({ error: "No message provided." }, { status: 400 });
  }

  const articles = await getPublishedArticles();

  // ── Try Groq first ────────────────────────────────────────────────────────
  const groqKey = process.env.GROQ_API_KEY;
  if (groqKey) {
    try {
      const articleContext = articles
        .slice(0, 25)
        .map((a) => `- "${a.title}" [/article/${a.slug}] (${a.category}): ${a.excerpt}`)
        .join("\n");

      const { Groq } = await import("groq-sdk");
      const groq = new Groq({ apiKey: groqKey });

      const completion = await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",
        max_tokens: 500,
        messages: [
          {
            role: "system",
            content: `You are Arham's assistant at The American Reveal, an independent investigative journalism site.
If asked who you are, say "I'm Arham's assistant at The American Reveal."
Help readers find articles, get summaries, and understand investigations.

PUBLISHED ARTICLES:
${articleContext}

Rules:
- Keep answers to 2-4 sentences
- Reference articles as [Title](/article/slug)
- Cite sources from the article list
- Stay factual and journalistic
- Only discuss content from this publication`,
          },
          ...history.map((m) => ({
            role: m.role as "user" | "assistant",
            content: m.content,
          })),
          { role: "user" as const, content: message },
        ],
      });

      const reply = completion.choices[0]?.message?.content ?? "No response.";
      return NextResponse.json({ reply });
    } catch (err) {
      console.error("Groq error:", err);
      // Fall through to local search
    }
  }

  // ── Try Gemini fallback ───────────────────────────────────────────────────
  const geminiKey = process.env.GEMINI_API_KEY;
  if (geminiKey) {
    try {
      const articleContext = articles
        .slice(0, 25)
        .map((a) => `- "${a.title}" [/article/${a.slug}] (${a.category}): ${a.excerpt}`)
        .join("\n");

      const { GoogleGenerativeAI } = await import("@google/generative-ai");
      const genAI = new GoogleGenerativeAI(geminiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
        systemInstruction: `You are an assistant for The American Reveal investigative journalism site.
ARTICLES:\n${articleContext}
Keep answers short (2-4 sentences). Reference articles as [Title](/article/slug).`,
      });

      const chatHistory = history.map((m) => ({
        role: m.role === "assistant" ? "model" as const : "user" as const,
        parts: [{ text: m.content }],
      }));

      const chat = model.startChat({ history: chatHistory });
      const result = await chat.sendMessage(message);
      return NextResponse.json({ reply: result.response.text() });
    } catch (err) {
      console.error("Gemini error:", err);
      // Fall through to local search
    }
  }

  // ── Local keyword search (always works, no API needed) ────────────────────
  const reply = localSearch(message, articles);
  return NextResponse.json({ reply });
}
