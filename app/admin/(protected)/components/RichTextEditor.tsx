"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Color from "@tiptap/extension-color";
import { TextStyle } from "@tiptap/extension-text-style";
import ImageExtension from "@tiptap/extension-image";
import LinkExtension from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import { useState, useRef, useEffect, useCallback } from "react";
import { renderContent } from "@/lib/utils";

/* ─── helpers ──────────────────────────────────────────────── */

function toHtml(content?: string): string {
  if (!content) return "";
  const t = content.trimStart();
  return t.startsWith("<") ? content : renderContent(content);
}

const PRESET_COLORS = [
  { label: "Crimson", value: "#B91C1C" },
  { label: "Navy", value: "#1D4ED8" },
  { label: "Forest", value: "#166534" },
  { label: "Amber", value: "#B45309" },
  { label: "Violet", value: "#7C3AED" },
  { label: "Teal", value: "#0E7490" },
];

const HIGHLIGHT_COLORS = [
  { label: "Yellow", value: "#FEF08A" },
  { label: "Green", value: "#BBF7D0" },
  { label: "Blue", value: "#BFDBFE" },
  { label: "Pink", value: "#FBCFE8" },
  { label: "Orange", value: "#FED7AA" },
];

/* ─── Toolbar atoms ─────────────────────────────────────────── */

function Btn({
  onClick,
  active,
  title,
  disabled,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  title?: string;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={`h-7 min-w-[28px] px-1.5 text-xs font-semibold border transition-colors select-none ${
        active
          ? "bg-ink text-white border-ink"
          : "border-transparent text-steel hover:border-border hover:bg-white"
      } disabled:opacity-30 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}

function Sep() {
  return <div className="w-px h-5 bg-border mx-0.5 shrink-0" />;
}

/* ─── Link dialog ────────────────────────────────────────────── */

function LinkPopover({ onSet }: { onSet: (url: string) => void }) {
  const [open, setOpen] = useState(false);
  const [val, setVal] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (val.trim()) onSet(val.trim());
    setVal("");
    setOpen(false);
  }

  return (
    <div className="relative">
      <Btn onClick={() => { setOpen((v) => !v); setTimeout(() => inputRef.current?.focus(), 50); }} title="Insert Link">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      </Btn>
      {open && (
        <form
          onSubmit={submit}
          className="absolute top-full left-0 mt-1 z-50 bg-white border border-border shadow-lg p-2 flex gap-1.5"
          style={{ minWidth: 260 }}
        >
          <input
            ref={inputRef}
            value={val}
            onChange={(e) => setVal(e.target.value)}
            placeholder="https://..."
            className="flex-1 border border-border px-2 py-1 text-xs focus:outline-none focus:border-steel/50"
          />
          <button type="submit" className="bg-ink text-white text-xs px-2 py-1 hover:bg-steel transition-colors">
            Add
          </button>
          <button type="button" onClick={() => setOpen(false)} className="text-xs text-muted px-1">✕</button>
        </form>
      )}
    </div>
  );
}

/* ─── Color pickers ──────────────────────────────────────────── */

function ColorPicker({ onColor }: { onColor: (c: string) => void }) {
  const [open, setOpen] = useState(false);
  const customRef = useRef<HTMLInputElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function close(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        title="Text Color"
        onClick={() => setOpen((v) => !v)}
        className="h-7 px-1.5 border border-transparent hover:border-border hover:bg-white transition-colors flex items-center gap-0.5 text-xs font-bold text-steel select-none"
      >
        <span className="underline decoration-2" style={{ textDecorationColor: "#B91C1C" }}>A</span>
        <svg className="w-2 h-2 text-muted" fill="currentColor" viewBox="0 0 16 16">
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 z-50 bg-white border border-border shadow-lg p-3 space-y-2" style={{ minWidth: 180 }}>
          <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-2">Text Color</p>
          <div className="flex flex-wrap gap-2">
            {PRESET_COLORS.map((c) => (
              <button
                key={c.value}
                type="button"
                title={c.label}
                onClick={() => { onColor(c.value); setOpen(false); }}
                className="w-6 h-6 border border-white/40 hover:scale-110 transition-transform shadow-sm"
                style={{ backgroundColor: c.value }}
              />
            ))}
            <button
              type="button"
              title="Remove color"
              onClick={() => { onColor(""); setOpen(false); }}
              className="w-6 h-6 border border-border hover:border-steel text-xs text-muted flex items-center justify-center"
            >
              ✕
            </button>
          </div>
          <div className="flex items-center gap-2 pt-1 border-t border-border">
            <label className="text-xs text-muted">Custom:</label>
            <input
              ref={customRef}
              type="color"
              defaultValue="#000000"
              className="w-6 h-6 cursor-pointer border border-border"
              onChange={(e) => onColor(e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function HighlightPicker({ onHighlight }: { onHighlight: (c: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function close(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        title="Highlight"
        onClick={() => setOpen((v) => !v)}
        className="h-7 px-1.5 border border-transparent hover:border-border hover:bg-white transition-colors flex items-center gap-0.5 text-xs font-bold text-steel select-none"
      >
        <span style={{ backgroundColor: "#FEF08A", padding: "0 3px" }}>H</span>
        <svg className="w-2 h-2 text-muted" fill="currentColor" viewBox="0 0 16 16">
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 z-50 bg-white border border-border shadow-lg p-3" style={{ minWidth: 160 }}>
          <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-2">Highlight</p>
          <div className="flex flex-wrap gap-2">
            {HIGHLIGHT_COLORS.map((c) => (
              <button
                key={c.value}
                type="button"
                title={c.label}
                onClick={() => { onHighlight(c.value); setOpen(false); }}
                className="w-6 h-6 border border-border hover:scale-110 transition-transform"
                style={{ backgroundColor: c.value }}
              />
            ))}
            <button
              type="button"
              title="Remove highlight"
              onClick={() => { onHighlight(""); setOpen(false); }}
              className="w-6 h-6 border border-border hover:border-steel text-xs text-muted flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────── */

interface RichTextEditorProps {
  name: string;
  defaultValue?: string;
  placeholder?: string;
}

export default function RichTextEditor({
  name,
  defaultValue,
  placeholder = "Begin writing your article…",
}: RichTextEditorProps) {
  const [html, setHtml] = useState(() => toHtml(defaultValue));
  const [imageUploading, setImageUploading] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
      ImageExtension.configure({ allowBase64: true }),
      LinkExtension.configure({ openOnClick: false, autolink: true }),
      Placeholder.configure({ placeholder }),
    ],
    content: toHtml(defaultValue),
    immediatelyRender: false,
    onUpdate({ editor }) {
      setHtml(editor.getHTML());
    },
    editorProps: {
      handlePaste(view, event) {
        // Handle pasted images
        const items = Array.from(event.clipboardData?.items ?? []);
        const imgItem = items.find((i) => i.type.startsWith("image/"));
        if (imgItem) {
          event.preventDefault();
          const file = imgItem.getAsFile();
          if (file) uploadImage(file);
          return true;
        }
        return false;
      },
      handleDrop(view, event, _slice, moved) {
        if (moved) return false;
        const files = Array.from(event.dataTransfer?.files ?? []);
        const img = files.find((f) => f.type.startsWith("image/"));
        if (img) {
          event.preventDefault();
          uploadImage(img);
          return true;
        }
        return false;
      },
    },
  });

  const uploadImage = useCallback(
    async (file: File) => {
      setImageUploading(true);
      try {
        const fd = new FormData();
        fd.append("file", file);
        const res = await fetch("/api/upload", { method: "POST", body: fd });
        const data = await res.json();
        if (data.url && editor) {
          editor.chain().focus().setImage({ src: data.url }).run();
        }
      } catch {
        // silently fail — image stays as-is
      } finally {
        setImageUploading(false);
      }
    },
    [editor]
  );

  if (!editor) {
    return <input type="hidden" name={name} value={html} />;
  }

  return (
    <div className="border border-border bg-white">
      {/* ── Toolbar ───────────────────────────────────────── */}
      <div className="border-b border-border bg-[#F5F2EC] px-2 py-1.5 flex flex-wrap items-center gap-0.5">
        {/* Paragraph style */}
        <select
          className="h-7 text-xs font-medium border border-border bg-white px-1.5 text-steel focus:outline-none cursor-pointer"
          onChange={(e) => {
            const v = e.target.value;
            if (v === "p") editor.chain().focus().setParagraph().run();
            else if (v === "h2") editor.chain().focus().toggleHeading({ level: 2 }).run();
            else if (v === "h3") editor.chain().focus().toggleHeading({ level: 3 }).run();
            else if (v === "h4") editor.chain().focus().toggleHeading({ level: 4 }).run();
            else if (v === "blockquote") editor.chain().focus().toggleBlockquote().run();
          }}
          value={
            editor.isActive("heading", { level: 2 })
              ? "h2"
              : editor.isActive("heading", { level: 3 })
              ? "h3"
              : editor.isActive("heading", { level: 4 })
              ? "h4"
              : editor.isActive("blockquote")
              ? "blockquote"
              : "p"
          }
        >
          <option value="p">Paragraph</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
          <option value="h4">Heading 4</option>
          <option value="blockquote">Quote</option>
        </select>

        <Sep />

        {/* Text formatting */}
        <Btn onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive("bold")} title="Bold (Ctrl+B)">
          <strong>B</strong>
        </Btn>
        <Btn onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive("italic")} title="Italic (Ctrl+I)">
          <em>I</em>
        </Btn>
        <Btn onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive("underline")} title="Underline (Ctrl+U)">
          <span className="underline">U</span>
        </Btn>
        <Btn onClick={() => editor.chain().focus().toggleStrike().run()} active={editor.isActive("strike")} title="Strikethrough">
          <span className="line-through">S</span>
        </Btn>

        <Sep />

        {/* Color */}
        <ColorPicker
          onColor={(c) => {
            if (c) editor.chain().focus().setColor(c).run();
            else editor.chain().focus().unsetColor().run();
          }}
        />
        {PRESET_COLORS.map((c) => (
          <button
            key={c.value}
            type="button"
            title={c.label}
            onClick={() => editor.chain().focus().setColor(c.value).run()}
            className="w-4.5 h-4.5 border border-white/30 hover:scale-125 transition-transform shadow-sm shrink-0"
            style={{ backgroundColor: c.value, width: 18, height: 18 }}
          />
        ))}

        <Sep />

        <HighlightPicker
          onHighlight={(c) => {
            if (c) editor.chain().focus().toggleHighlight({ color: c }).run();
            else editor.chain().focus().unsetHighlight().run();
          }}
        />

        <Sep />

        {/* Lists */}
        <Btn onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive("bulletList")} title="Bullet list">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Btn>
        <Btn onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive("orderedList")} title="Numbered list">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </Btn>
        <Btn onClick={() => editor.chain().focus().toggleCodeBlock().run()} active={editor.isActive("codeBlock")} title="Code block">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </Btn>

        <Sep />

        {/* Image upload */}
        <label className="cursor-pointer">
          <div
            className={`h-7 px-1.5 flex items-center gap-1 text-xs font-medium border border-transparent text-steel hover:border-border hover:bg-white transition-colors select-none ${imageUploading ? "opacity-50 pointer-events-none" : ""}`}
            title="Upload image"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{imageUploading ? "Uploading…" : "Image"}</span>
          </div>
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="hidden"
            disabled={imageUploading}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) uploadImage(file);
              e.target.value = "";
            }}
          />
        </label>

        {/* Link */}
        <LinkPopover
          onSet={(url) =>
            editor
              .chain()
              .focus()
              .extendMarkRange("link")
              .setLink({ href: url, target: "_blank" })
              .run()
          }
        />
        <Btn
          onClick={() => editor.chain().focus().unsetLink().run()}
          disabled={!editor.isActive("link")}
          title="Remove link"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </Btn>

        <Sep />

        {/* Undo / Redo */}
        <Btn
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          title="Undo (Ctrl+Z)"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
          </svg>
        </Btn>
        <Btn
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          title="Redo (Ctrl+Shift+Z)"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10H11a8 8 0 00-8 8v2m18-10l-6 6m6-6l-6-6" />
          </svg>
        </Btn>

        {imageUploading && (
          <span className="ml-2 text-xs text-muted animate-pulse">Uploading image…</span>
        )}
      </div>

      {/* ── Editor area ───────────────────────────────────── */}
      <EditorContent
        editor={editor}
        className="rich-editor px-6 py-5 min-h-[520px] cursor-text"
        onClick={() => editor.commands.focus()}
      />

      {/* Hidden form field */}
      <input type="hidden" name={name} value={html} />
    </div>
  );
}
