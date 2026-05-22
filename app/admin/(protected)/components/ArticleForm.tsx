"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { CATEGORIES, ACCENT_COLORS } from "@/lib/constants";
import { slugify } from "@/lib/utils";
import RichTextEditor from "./RichTextEditor";

interface ArticleFormProps {
  action: (
    prevState: { error: string } | null,
    formData: FormData
  ) => Promise<{ error: string }>;
  initial?: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: string;
    author: string;
    published: boolean;
    featured: boolean;
    coverImage?: string;
    pdfUrl?: string;
    scheduledAt?: string;
    accentColor?: string;
  };
  submitLabel: string;
}

export default function ArticleForm({ action, initial, submitLabel }: ArticleFormProps) {
  const [state, dispatch, pending] = useActionState(action, null);
  const slugRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);

  const [coverImage, setCoverImage] = useState(initial?.coverImage ?? "");
  const [pdfUrl, setPdfUrl] = useState(initial?.pdfUrl ?? "");
  const [accentColor, setAccentColor] = useState(initial?.accentColor ?? "#B91C1C");
  const [imageUploading, setImageUploading] = useState(false);
  const [pdfUploading, setPdfUploading] = useState(false);
  const [imageError, setImageError] = useState("");
  const [pdfError, setPdfError] = useState("");

  useEffect(() => {
    if (!initial && titleRef.current && slugRef.current) {
      const el = titleRef.current;
      const handler = () => {
        if (slugRef.current) slugRef.current.value = slugify(el.value);
      };
      el.addEventListener("input", handler);
      return () => el.removeEventListener("input", handler);
    }
  }, [initial]);

  async function uploadFile(
    file: File,
    setUploading: (v: boolean) => void,
    setUrl: (url: string) => void,
    setError: (msg: string) => void
  ) {
    setUploading(true);
    setError("");
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Upload failed");
      setUrl(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  const inputCls =
    "w-full bg-[#FDFAF6] border border-border text-ink px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson/50 transition-all";
  const labelCls =
    "block text-[0.6rem] font-bold uppercase tracking-widest text-muted mb-1.5";
  const cardCls =
    "bg-white border border-border/80 p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]";
  const sidebarCardCls =
    "bg-[#FDFAF6] border border-border p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]";

  return (
    <form action={dispatch}>
      {/* Hidden inputs */}
      <input type="hidden" name="coverImage" value={coverImage} />
      <input type="hidden" name="pdfUrl" value={pdfUrl} />
      <input type="hidden" name="accentColor" value={accentColor} />

      <div className="flex flex-col lg:flex-row gap-6 items-start">

        {/* ── Main content ─────────────────────── */}
        <div className="flex-1 min-w-0 space-y-4">

          {/* Title — huge, serif, borderless */}
          <div className={cardCls}>
            <input
              ref={titleRef}
              type="text"
              name="title"
              defaultValue={initial?.title}
              required
              className="w-full bg-transparent text-[1.6rem] font-bold text-ink border-0 focus:outline-none leading-snug"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "#0A0A0A",
              }}
              placeholder="Article headline…"
            />
            <style>{`input[name="title"]::placeholder { color: rgba(10,10,10,0.18); }`}</style>
          </div>

          {/* Slug + Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className={cardCls}>
              <label className={labelCls}>Slug</label>
              <input
                ref={slugRef}
                type="text"
                name="slug"
                defaultValue={initial?.slug}
                required
                className={inputCls}
                placeholder="url-friendly-slug"
              />
            </div>
            <div className={cardCls}>
              <label className={labelCls}>Category</label>
              <select
                name="category"
                defaultValue={initial?.category ?? ""}
                required
                className={inputCls}
              >
                <option value="" disabled>Select a category…</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Excerpt */}
          <div className={cardCls}>
            <label className={labelCls}>Excerpt</label>
            <textarea
              name="excerpt"
              defaultValue={initial?.excerpt}
              required
              rows={3}
              className={inputCls}
              placeholder="Brief summary shown in listings and previews…"
            />
          </div>

          {/* Author */}
          <div className={cardCls}>
            <label className={labelCls}>Author</label>
            <input
              type="text"
              name="author"
              defaultValue={initial?.author ?? "Editorial Staff"}
              className={inputCls}
              placeholder="Editorial Staff"
            />
          </div>

          {/* Article Body */}
          <div className={`${cardCls} space-y-2`}>
            <label className={labelCls}>Article Body</label>
            <RichTextEditor
              name="content"
              defaultValue={initial?.content}
              placeholder="Begin writing your article…"
            />
          </div>
        </div>

        {/* ── Sidebar ──────────────────────────── */}
        <aside className="w-full lg:w-72 shrink-0 space-y-3 lg:sticky lg:top-6">

          {/* Submit button — full-width crimson with loading state */}
          <button
            type="submit"
            disabled={pending || imageUploading || pdfUploading}
            className="w-full bg-crimson text-white text-[0.65rem] font-bold uppercase tracking-[0.18em] py-3.5 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {pending ? "Saving…" : submitLabel}
          </button>
          <a
            href="/admin/dashboard"
            className="block text-center text-[0.6rem] font-semibold uppercase tracking-widest text-muted hover:text-steel transition-colors py-1"
          >
            Cancel
          </a>

          {/* Error */}
          {state?.error && (
            <div className="bg-crimson/10 border border-crimson/30 text-crimson text-xs px-3 py-2.5">
              {state.error}
            </div>
          )}

          {/* Cover Image */}
          <div className={`${sidebarCardCls} space-y-2`}>
            <label className={labelCls}>Cover Image</label>
            {coverImage ? (
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={coverImage}
                  alt="Cover"
                  className="w-full h-36 object-cover border border-border"
                />
                <button
                  type="button"
                  onClick={() => setCoverImage("")}
                  className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 hover:bg-black transition-colors"
                >
                  Remove
                </button>
              </div>
            ) : (
              <label className="block cursor-pointer border-2 border-dashed border-border hover:border-steel/40 transition-colors p-5 text-center">
                {imageUploading ? (
                  <span className="text-xs text-muted">Uploading…</span>
                ) : (
                  <>
                    <span className="text-xs text-muted block mb-0.5">Click to upload</span>
                    <span className="text-[0.6rem] text-muted/50">JPG, PNG, WebP, GIF</span>
                  </>
                )}
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  className="hidden"
                  disabled={imageUploading}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) uploadFile(file, setImageUploading, setCoverImage, setImageError);
                  }}
                />
              </label>
            )}
            <input
              type="text"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              className={`${inputCls} text-xs`}
              placeholder="Or paste image URL…"
            />
            {imageError && <p className="text-xs text-crimson">{imageError}</p>}
          </div>

          {/* Status */}
          <div className={`${sidebarCardCls} space-y-3`}>
            <label className={labelCls}>Status</label>
            <label className="flex items-start gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                name="published"
                defaultChecked={initial?.published ?? false}
                className="w-4 h-4 mt-0.5 accent-crimson shrink-0"
              />
              <div>
                <span className="text-sm font-medium text-ink leading-none block">Published</span>
                <span className="text-[0.6rem] text-muted mt-0.5 block">Visible to readers</span>
              </div>
            </label>
            <label className="flex items-start gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                name="featured"
                defaultChecked={initial?.featured ?? false}
                className="w-4 h-4 mt-0.5 accent-crimson shrink-0"
              />
              <div>
                <span className="text-sm font-medium text-ink leading-none block">Featured</span>
                <span className="text-[0.6rem] text-muted mt-0.5 block">Homepage hero slot</span>
              </div>
            </label>
            <div className="pt-1 border-t border-border/50">
              <label className={labelCls}>Schedule</label>
              <input
                type="datetime-local"
                name="scheduledAt"
                defaultValue={
                  initial?.scheduledAt
                    ? new Date(initial.scheduledAt).toISOString().slice(0, 16)
                    : ""
                }
                className={inputCls}
              />
            </div>
          </div>

          {/* PDF */}
          <div className={`${sidebarCardCls} space-y-2`}>
            <label className={labelCls}>Source Document</label>
            {pdfUrl ? (
              <div className="flex items-center gap-2 text-xs text-steel bg-slate-50 border border-border px-3 py-2">
                <svg className="w-4 h-4 shrink-0 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="hover:text-crimson underline truncate flex-1">
                  PDF attached
                </a>
                <button type="button" onClick={() => setPdfUrl("")} className="text-muted hover:text-crimson shrink-0 font-bold">
                  ✕
                </button>
              </div>
            ) : (
              <label className="block cursor-pointer border border-dashed border-border hover:border-steel/40 transition-colors p-3 text-center">
                <span className="text-xs text-muted">
                  {pdfUploading ? "Uploading…" : "Upload PDF"}
                </span>
                <input
                  type="file"
                  accept="application/pdf"
                  className="hidden"
                  disabled={pdfUploading}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) uploadFile(file, setPdfUploading, setPdfUrl, setPdfError);
                  }}
                />
              </label>
            )}
            <input
              type="text"
              value={pdfUrl}
              onChange={(e) => setPdfUrl(e.target.value)}
              className={`${inputCls} text-xs`}
              placeholder="Or paste PDF URL…"
            />
            {pdfError && <p className="text-xs text-crimson">{pdfError}</p>}
          </div>

          {/* Accent Color */}
          <div className={`${sidebarCardCls} space-y-2`}>
            <label className={labelCls}>Accent Color</label>
            <div className="flex flex-wrap gap-2 items-center">
              {ACCENT_COLORS.map((c) => (
                <button
                  key={c.value}
                  type="button"
                  title={c.label}
                  onClick={() => setAccentColor(c.value)}
                  className="w-6 h-6 border-2 transition-transform hover:scale-110 rounded-sm"
                  style={{
                    backgroundColor: c.value,
                    borderColor: accentColor === c.value ? "#0A0A0A" : "transparent",
                    boxShadow: accentColor === c.value ? `0 0 0 1px ${c.value}` : "none",
                  }}
                />
              ))}
              <input
                type="color"
                value={accentColor}
                onChange={(e) => setAccentColor(e.target.value)}
                className="w-6 h-6 border border-border cursor-pointer rounded-sm"
                title="Custom color"
              />
            </div>
          </div>
        </aside>
      </div>
    </form>
  );
}
