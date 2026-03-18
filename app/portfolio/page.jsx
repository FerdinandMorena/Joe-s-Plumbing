"use client";

import { useEffect, useMemo, useState } from "react";

const MEDIA = [
  // Images (from /public/images)
  {
    id: "img-1",
    type: "image",
    src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.46.jpeg",
    alt: "Plumbing work photo 1",
    title: "Recent job",
  },
  {
    id: "img-2",
    type: "image",
    src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.47.jpeg",
    alt: "Plumbing work photo 2",
    title: "Recent job",
  },

  {
    id: "img-4",
    type: "image",
    src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.50%20(1).jpeg",
    alt: "Plumbing work photo 4",
    title: "Recent job",
  },
  {
    id: "img-5",
    type: "image",
    src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.50.jpeg",
    alt: "Plumbing work photo 5",
    title: "Recent job",
  },
  {
    id: "img-6",
    type: "image",
    src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.51%20(1).jpeg",
    alt: "Plumbing work photo 6",
    title: "Recent job",
  },
  {
    id: "img-7",
    type: "image",
    src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.51.jpeg",
    alt: "Plumbing work photo 7",
    title: "Recent job",
  },
  {
    id: "img-8",
    type: "image",
    src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.52.jpeg",
    alt: "Plumbing work photo 8",
    title: "Recent job",
  },
  {
    id: "img-9",
    type: "image",
    src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.53%20(1).jpeg",
    alt: "Plumbing work photo 9",
    title: "Recent job",
  },
  {
    id: "img-10",
    type: "image",
    src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.53.jpeg",
    alt: "Plumbing work photo 10",
    title: "Recent job",
  },
  {
    id: "img-11",
    type: "image",
    src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.56.jpeg",
    alt: "Plumbing work photo 11",
    title: "Recent job",
  },
  {
    id: "img-12",
    type: "image",
    src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.57%20(1).jpeg",
    alt: "Plumbing work photo 12",
    title: "Recent job",
  },
  {
    id: "img-13",
    type: "image",
    src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.57.jpeg",
    alt: "Plumbing work photo 13",
    title: "Recent job",
  },
  {
    id: "img-14",
    type: "image",
    src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.58%20(1).jpeg",
    alt: "Plumbing work photo 14",
    title: "Recent job",
  },
  {
    id: "img-15",
    type: "image",
    src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.58.jpeg",
    alt: "Plumbing work photo 15",
    title: "Recent job",
  },
  {
    id: "img-16",
    type: "image",
    src: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.59.jpeg",
    alt: "Plumbing work photo 16",
    title: "Recent job",
  },

  // Videos (from /public/images)
  {
    id: "vid-1",
    type: "video",
    src: "/images/WhatsApp%20Video%202026-03-18%20at%2010.13.01.mp4",
    poster: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.46.jpeg",
    title: "Job video",
  },
  {
    id: "vid-2",
    type: "video",
    src: "/images/WhatsApp%20Video%202026-03-18%20at%2010.13.42.mp4",
    poster: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.47.jpeg",
    title: "Job video",
  },
  {
    id: "vid-3",
    type: "video",
    src: "/images/WhatsApp%20Video%202026-03-18%20at%2010.13.44.mp4",
    poster: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.49.jpeg",
    title: "Job video",
  },
  {
    id: "vid-4",
    type: "video",
    src: "/images/WhatsApp%20Video%202026-03-18%20at%2010.13.45.mp4",
    poster: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.50.jpeg",
    title: "Job video",
  },
  {
    id: "vid-5",
    type: "video",
    src: "/images/WhatsApp%20Video%202026-03-18%20at%2010.13.56%20(1).mp4",
    poster: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.51.jpeg",
    title: "Job video",
  },
  {
    id: "vid-6",
    type: "video",
    src: "/images/WhatsApp%20Video%202026-03-18%20at%2010.13.56.mp4",
    poster: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.52.jpeg",
    title: "Job video",
  },
  {
    id: "vid-7",
    type: "video",
    src: "/images/WhatsApp%20Video%202026-03-18%20at%2010.13.57.mp4",
    poster: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.53.jpeg",
    title: "Job video",
  },
  {
    id: "vid-8",
    type: "video",
    src: "/images/WhatsApp%20Video%202026-03-18%20at%2010.13.58.mp4",
    poster: "/images/WhatsApp%20Image%202026-03-18%20at%2010.13.56.jpeg",
    title: "Job video",
  },
];

const FILTERS = [
  { key: "all", label: "All" },
  { key: "image", label: "Images" },
  { key: "video", label: "Videos" },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all");
  const [activeItem, setActiveItem] = useState(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  const filtered = useMemo(() => {
    if (filter === "all") return MEDIA;
    return MEDIA.filter((m) => m.type === filter);
  }, [filter]);

  const openAt = (item) => {
    const idx = filtered.findIndex((x) => x.id === item.id);
    setActiveIndex(idx);
    setActiveItem(item);
  };

  const closeModal = () => {
    setActiveItem(null);
    setActiveIndex(-1);
  };

  const goTo = (idx) => {
    if (!filtered.length) return;
    const next = (idx + filtered.length) % filtered.length;
    setActiveIndex(next);
    setActiveItem(filtered[next]);
  };

  const goNext = () => goTo(activeIndex + 1);
  const goPrev = () => goTo(activeIndex - 1);

  useEffect(() => {
    if (!activeItem) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeItem, activeIndex, filtered.length]);

  return (
    <main className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Joe’s Work Showcase
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A quick look at real jobs—repairs, installations, and emergency
            callouts.
          </p>
        </header>

        {/* Filter switch */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-2xl border border-border bg-card p-1 shadow-sm">
            {FILTERS.map((f) => {
              const active = filter === f.key;
              return (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setFilter(f.key)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    active
                      ? "bg-primary text-primary-foreground shadow"
                      : "text-foreground hover:bg-muted"
                  }`}
                  aria-pressed={active}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <figure
              key={item.id}
              className="group rounded-3xl overflow-hidden border border-border bg-card shadow-sm transition-transform duration-300 hover:scale-[1.01]"
            >
              <button
                type="button"
                onClick={() => openAt(item)}
                className="block w-full text-left"
                aria-label={`Open ${item.type} preview: ${item.title}`}
              >
                <div className="relative">
                  {item.type === "image" ? (
                    <>
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-80 md:h-96 object-cover"
                        loading="lazy"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                      <figcaption className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-white font-semibold leading-tight">
                              {item.title}
                            </p>
                            <p className="text-white/80 text-xs mt-1">Photo</p>
                          </div>
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-full border bg-white/10 text-white border-white/20">
                            Image
                          </span>
                        </div>
                      </figcaption>
                    </>
                  ) : (
                    <>
                      <div className="relative">
                      <video
                      className="w-full h-80 md:h-96 object-cover bg-black"
                      preload="metadata"
                      poster={item.poster}
                      muted
                      playsInline
                      >
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                      </video>
                      
                      {/* Play overlay (click opens modal) */}
                      <div className="pointer-events-none absolute inset-0 grid place-items-center">
                      <div className="h-14 w-14 rounded-full bg-black/45 border border-white/20 backdrop-blur flex items-center justify-center">
                      <span className="text-white text-2xl leading-none">▶</span>
                      </div>
                      </div>
                      </div>
                      
                      {/* Put video title BELOW the video so controls are never covered */}
                      <div className="p-4">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-foreground font-semibold leading-tight">
                              {item.title}
                            </p>
                            <p className="text-muted-foreground text-xs mt-1">
                              Video
                            </p>
                          </div>
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-full border bg-primary/10 text-primary border-primary/20">
                            Video
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </button>
            </figure>
          ))}
        </section>

        {/* Lightbox modal */}
        {activeItem && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Media preview"
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={closeModal}
              aria-label="Close preview"
            />

            <div className="relative z-[101] w-full max-w-5xl">
              {/* Prev/Next buttons */}
              {filtered.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full rounded-full border border-white/20 bg-black/40 text-white w-11 h-11 flex items-center justify-center backdrop-blur hover:bg-black/55 transition-colors"
                    aria-label="Previous"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-full rounded-full border border-white/20 bg-black/40 text-white w-11 h-11 flex items-center justify-center backdrop-blur hover:bg-black/55 transition-colors"
                    aria-label="Next"
                  >
                    ›
                  </button>
                </>
              )}

              <div className="rounded-3xl overflow-hidden border border-border bg-card shadow-2xl">
                <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-border">
                  <div>
                    <p className="text-foreground font-semibold leading-tight">
                      {activeItem.title}
                    </p>
                    <p className="text-muted-foreground text-xs mt-1">
                      {activeItem.type === "image" ? "Image" : "Video"} •{" "}
                      {activeIndex + 1}/{filtered.length}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded-xl border border-border bg-background px-3 py-2 text-sm font-semibold hover:bg-muted transition-colors"
                  >
                    Close
                  </button>
                </div>

                <div
                  className="bg-black"
                  onTouchStart={(e) => {
                    const t = e.touches?.[0];
                    if (!t) return;
                    e.currentTarget.dataset.touchX = String(t.clientX);
                  }}
                  onTouchEnd={(e) => {
                    const startX = Number(e.currentTarget.dataset.touchX || 0);
                    const t = e.changedTouches?.[0];
                    if (!t || !startX) return;
                    const dx = t.clientX - startX;
                    if (Math.abs(dx) < 50) return;
                    if (dx < 0) goNext();
                    else goPrev();
                  }}
                >
                  {activeItem.type === "image" ? (
                    <img
                      key={activeItem.id}
                      src={activeItem.src}
                      alt={activeItem.alt}
                      className="w-full max-h-[75vh] object-contain"
                    />
                  ) : (
                    <video
                      key={activeItem.id}
                      className="w-full max-h-[75vh] object-contain"
                      controls
                      autoPlay
                      preload="metadata"
                      poster={activeItem.poster}
                    >
                      <source src={activeItem.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              </div>

              <p className="mt-3 text-center text-xs text-white/70">
                Tip: use  keys to navigate, swipe on mobile, ESC to close
              </p>
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center text-muted-foreground mt-12">
            No items to show.
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Want your job featured here? Book an appointment and we’ll take care
            of the rest.
          </p>
        </div>
      </div>
    </main>
  );
}
