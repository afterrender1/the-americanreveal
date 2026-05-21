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
    "w-full bg-white border border-border text-ink px-4 py-2.5 text-sm focus:outline-none focus:border-steel/60 transition-colors";
  const labelCls =
    "block text-xs font-semibold uppercase tracking-widest text-steel mb-1.5";
  const sectionCls = "border border-border bg-white/60 p-5 space-y-5";

  return (
    <form action={dispatch} className="space-y-6">
      {state?.error && (
        <div className="bg-crimson/10 border border-crimson/30 text-crimson text-sm px-4 py-3">
          {state.error}
        </div>
      )}

      {/* Hidden inputs for file-managed fields */}
      <input type="hidden" name="coverImage" value={coverImage} />
      <input type="hidden" name="pdfUrl" value={pdfUrl} />
      <input type="hidden" name="accentColor" value={accentColor} />

      {/* ── Core Content ─────────────────────────────── */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-ink mb-3 flex items-center gap-2">
          <span className="w-4 h-px bg-crimson inline-block" />
          Content
        </h3>
        <div className={sectionCls}>
          <div>
            <label className={labelCls}>Title</label>
            <input
              ref={titleRef}
              type="text"
              name="title"
              defaultValue={initial?.title}
              required
              className={inputCls}
              placeholder="Article headline..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
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
              <p className="text-xs text-muted mt-1">Auto-generated from title.</p>
            </div>
            <div>
              <label className={labelCls}>Category</label>
              <select
                name="category"
                defaultValue={initial?.category ?? ""}
                required
                className={inputCls}
              >
                <option value="" disabled>
                  Select a category...
                </option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className={labelCls}>Excerpt</label>
            <textarea
              name="excerpt"
              defaultValue={initial?.excerpt}
              required
              rows={3}
              className={inputCls}
              placeholder="Brief summary shown in listings and previews..."
            />
          </div>

          <div>
            <label className={labelCls}>Author</label>
            <input
              type="text"
              name="author"
              defaultValue={initial?.author ?? "Editorial Staff"}
              className={inputCls}
              placeholder="Editorial Staff"
            />
          </div>

          <div>
            <label className={labelCls}>Article Body</label>
            <p className="text-xs text-muted mb-2">
              Rich editor — bold, italic, colors, headings, lists, images. Paste or drag images directly into the editor.
            </p>
            <RichTextEditor
              name="content"
              defaultValue={initial?.content}
              placeholder="Begin writing your article…"
            />
          </div>
        </div>
      </div>

      {/* ── Media ────────────────────────────────────── */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-ink mb-3 flex items-center gap-2">
          <span className="w-4 h-px bg-crimson inline-block" />
          Media
        </h3>
        <div className={sectionCls}>
          {/* Cover Image */}
          <div>
            <label className={labelCls}>Cover Image</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                className={`${inputCls} flex-1`}
                placeholder="https://example.com/image.jpg  or upload →"
              />
              <label className="cursor-pointer shrink-0 flex items-center gap-1.5 bg-ink text-white text-xs font-semibold uppercase tracking-widest px-4 hover:bg-steel transition-colors">
                {imageUploading ? "Uploading…" : "Upload"}
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
            </div>
            {imageError && <p className="text-xs text-crimson mt-1">{imageError}</p>}
            {coverImage && (
              <div className="mt-3 relative group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={coverImage}
                  alt="Cover preview"
                  className="h-48 w-full object-cover border border-border"
                />
                <button
                  type="button"
                  onClick={() => setCoverImage("")}
                  className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 hover:bg-black transition-colors"
                >
                  Remove
                </button>
              </div>
            )}
          </div>

          {/* PDF Document */}
          <div>
            <label className={labelCls}>PDF Source Document</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={pdfUrl}
                onChange={(e) => setPdfUrl(e.target.value)}
                className={`${inputCls} flex-1`}
                placeholder="https://example.com/document.pdf  or upload →"
              />
              <label className="cursor-pointer shrink-0 flex items-center gap-1.5 bg-ink text-white text-xs font-semibold uppercase tracking-widest px-4 hover:bg-steel transition-colors">
                {pdfUploading ? "Uploading…" : "Upload"}
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
            </div>
            {pdfError && <p className="text-xs text-crimson mt-1">{pdfError}</p>}
            {pdfUrl && (
              <div className="mt-2 flex items-center gap-2 text-xs text-steel">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="hover:text-crimson underline truncate max-w-xs">
                  {pdfUrl}
                </a>
                <button type="button" onClick={() => setPdfUrl("")} className="text-muted hover:text-crimson ml-auto shrink-0">
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Publishing ───────────────────────────────── */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-ink mb-3 flex items-center gap-2">
          <span className="w-4 h-px bg-crimson inline-block" />
          Publishing
        </h3>
        <div className={sectionCls}>
          <div className="flex flex-wrap gap-6">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                name="published"
                defaultChecked={initial?.published ?? false}
                className="w-4 h-4 accent-crimson"
              />
              <span className="text-sm font-medium text-steel">Published</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                name="featured"
                defaultChecked={initial?.featured ?? false}
                className="w-4 h-4 accent-crimson"
              />
              <span className="text-sm font-medium text-steel">Featured (homepage hero)</span>
            </label>
          </div>

          {/* Schedule */}
          <div>
            <label className={labelCls}>Schedule Publication</label>
            <input
              type="datetime-local"
              name="scheduledAt"
              defaultValue={
                initial?.scheduledAt
                  ? new Date(initial.scheduledAt).toISOString().slice(0, 16)
                  : ""
              }
              className={`${inputCls} max-w-xs`}
            />
            <p className="text-xs text-muted mt-1">
              If set with "Published" checked, the article goes live at this date/time.
              Leave empty to publish immediately.
            </p>
          </div>

          {/* Accent Color */}
          <div>
            <label className={labelCls}>Accent Color</label>
            <div className="flex flex-wrap gap-2">
              {ACCENT_COLORS.map((c) => (
                <button
                  key={c.value}
                  type="button"
                  title={c.label}
                  onClick={() => setAccentColor(c.value)}
                  className="w-8 h-8 border-2 transition-transform hover:scale-110"
                  style={{
                    backgroundColor: c.value,
                    borderColor: accentColor === c.value ? "#0A0A0A" : "transparent",
                    boxShadow: accentColor === c.value ? `0 0 0 1px ${c.value}` : "none",
                  }}
                />
              ))}
              <div className="flex items-center gap-2 ml-2">
                <label className="text-xs text-muted">Custom:</label>
                <input
                  type="color"
                  value={accentColor}
                  onChange={(e) => setAccentColor(e.target.value)}
                  className="w-8 h-8 border border-border cursor-pointer"
                />
              </div>
            </div>
            <p className="text-xs text-muted mt-1.5">
              Applied to category badge and card border on the public site.
            </p>
          </div>
        </div>
      </div>

      {/* ── Submit ───────────────────────────────────── */}
      <div className="flex items-center justify-between pt-2">
        <button
          type="submit"
          disabled={pending || imageUploading || pdfUploading}
          className="bg-ink text-white text-xs font-bold uppercase tracking-widest px-8 py-3 hover:bg-steel transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {pending ? "Saving…" : submitLabel}
        </button>
        <a
          href="/admin/dashboard"
          className="text-xs font-semibold uppercase tracking-widest text-muted hover:text-steel transition-colors"
        >
          Cancel
        </a>
      </div>
    </form>
  );
}
