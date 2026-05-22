"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { Article } from "@/lib/articles";
import { slugifyCategory } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

interface Props {
  articles: Article[];
}

export default function NewsSlider({ articles }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);
  const [selected, setSelected] = useState(0);

  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative overflow-hidden rounded-none" ref={emblaRef}>
      <div className="flex">
        {articles.map((a) => {
          const accent = a.accentColor ?? "#B91C1C";
          return (
            <div
              key={a.id}
              className="relative min-w-full min-h-[480px] md:min-h-[560px] flex items-end flex-shrink-0"
            >
              {/* Background image */}
              {a.coverImage ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.coverImage}
                    alt={a.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10" />
                </>
              ) : (
                <div className="absolute inset-0 bg-ink" />
              )}

              {/* Content */}
              <div className="relative z-10 w-full px-8 md:px-14 pb-16">
                <div className="max-w-3xl">
                  {/* Category + LIVE badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <Link
                      href={`/category/${slugifyCategory(a.category)}`}
                      className="inline-block text-[0.55rem] font-bold uppercase tracking-[0.2em] text-white px-3 py-1 rounded-full hover:opacity-85 transition-opacity"
                      style={{ backgroundColor: accent }}
                    >
                      {a.category}
                    </Link>
                    {a.featured && (
                      <span className="inline-flex items-center gap-1.5 text-[0.55rem] font-bold uppercase tracking-[0.2em] text-white/80 border border-white/25 px-2.5 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h2
                    className="font-bold text-white leading-[1.06] mb-4"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: "clamp(1.75rem, 4vw, 3.25rem)",
                    }}
                  >
                    <Link href={`/article/${a.slug}`} className="hover:opacity-90 transition-opacity">
                      {a.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-white/60 text-base leading-relaxed mb-6 max-w-2xl line-clamp-2">
                    {a.excerpt}
                  </p>

                  {/* Meta + CTA */}
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-[0.575rem] text-white/35 uppercase tracking-widest">
                      {a.author} &nbsp;·&nbsp; {formatDate(a.publishedAt)}
                    </span>
                    <Link
                      href={`/article/${a.slug}`}
                      className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-white px-5 py-2.5 rounded-full hover:opacity-90 transition-all"
                      style={{
                        background: `linear-gradient(135deg, ${accent} 0%, ${accent}cc 100%)`,
                      }}
                    >
                      Read Investigation →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
        style={{ backgroundColor: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.15)" }}
        aria-label="Previous"
      >
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
        style={{ backgroundColor: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.15)" }}
        aria-label="Next"
      >
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot navigation */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {articles.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: selected === i ? "24px" : "6px",
              height: "6px",
              backgroundColor: selected === i ? "#C41E1E" : "rgba(255,255,255,0.4)",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div
        className="absolute top-4 right-4 z-20 text-[0.55rem] font-bold text-white/50 tabular-nums"
        style={{ letterSpacing: "0.1em" }}
      >
        {String(selected + 1).padStart(2, "0")} / {String(articles.length).padStart(2, "0")}
      </div>
    </div>
  );
}
