import { useCallback, useEffect, useRef, useState } from "react";
import { galleryItems, images } from "@/content/images";
import type { Dict } from "@/content/locales";
import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/use-reveal";

const shapeClass: Record<string, string> = {
  wide: "md:col-span-7 aspect-[3/2]",
  tall: "md:col-span-4 aspect-[4/5]",
  square: "md:col-span-4 aspect-square",
  small: "md:col-span-3 aspect-[4/5]",
};
// Deliberate offsets so the rhythm feels paged, not gridded.
const offsetClass = [
  "md:col-start-1",
  "md:col-start-9 md:mt-32",
  "md:col-start-2 md:-mt-10",
  "md:col-start-6 md:mt-24",
  "md:col-start-1 md:-mt-40",
  "md:col-start-10 md:mt-10",
  "md:col-start-3 md:mt-16",
  "md:col-start-9 md:-mt-24",
];

export function Gallery({ d }: { d: Dict }) {
  const [active, setActive] = useState<number | null>(null);
  const total = galleryItems.length;
  const close = useCallback(() => setActive(null), []);
  const step = useCallback((dir: 1 | -1) => setActive((a) => (a === null ? a : (a + dir + total) % total)), [total]);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (active === null) return;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lastTrigger.current?.focus();
    };
  }, [active, close, step]);

  return (
    <>
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-12 md:gap-x-6 md:gap-y-12">
        {galleryItems.map((g, i) => (
          <GalleryTile
            key={g.role + i}
            index={i}
            className={cn(shapeClass[g.shape], offsetClass[i % offsetClass.length], g.shape === "wide" ? "col-span-2" : "col-span-1")}
            onOpen={(el) => {
              lastTrigger.current = el;
              setActive(i);
            }}
            label={d.gallery.open}
            role={g.role}
          />
        ))}
      </div>

      {active !== null && (
        <div role="dialog" aria-modal="true" aria-label={d.gallery.label} className="fixed inset-0 z-50 flex flex-col bg-background text-foreground">
          <div className="flex items-center justify-between px-5 py-4 md:px-10 md:py-5">
            <span className="meta tabular-nums">
              {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <button ref={closeRef} type="button" onClick={close} className="meta">
              {d.gallery.close} ×
            </button>
          </div>
          <div className="relative flex min-h-0 flex-1 items-center justify-center px-5 md:px-24">
            <img
              key={active}
              src={images[galleryItems[active]!.role].src}
              alt={images[galleryItems[active]!.role].alt}
              className="menu-item-in max-h-full max-w-full object-contain"
            />
            <button type="button" onClick={() => step(-1)} aria-label={d.gallery.prev} className="meta absolute left-0 top-0 hidden h-full w-1/4 cursor-w-resize items-center pl-10 opacity-0 transition-opacity hover:opacity-100 focus-visible:opacity-100 md:flex">
              ← {d.gallery.prev}
            </button>
            <button type="button" onClick={() => step(1)} aria-label={d.gallery.next} className="meta absolute right-0 top-0 hidden h-full w-1/4 cursor-e-resize items-center justify-end pr-10 opacity-0 transition-opacity hover:opacity-100 focus-visible:opacity-100 md:flex">
              {d.gallery.next} →
            </button>
          </div>
          <div className="flex items-baseline justify-between gap-6 px-5 py-5 md:px-10">
            <p className="caption">{images[galleryItems[active]!.role].alt}</p>
            <div className="meta flex gap-6 md:hidden">
              <button type="button" onClick={() => step(-1)}>← {d.gallery.prev}</button>
              <button type="button" onClick={() => step(1)}>{d.gallery.next} →</button>
            </div>
            {images[galleryItems[active]!.role].placeholder && (
              <span className="meta hidden text-[0.6rem] text-muted-foreground md:inline">{d.placeholderImage}</span>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function GalleryTile({
  role,
  index,
  className,
  onOpen,
  label,
}: {
  role: keyof typeof images;
  index: number;
  className: string;
  onOpen: (el: HTMLButtonElement) => void;
  label: string;
}) {
  const img = images[role];
  const ref = useReveal<HTMLDivElement>();
  return (
    <figure className={cn("group", className.replace(/aspect-\S+/, ""))}>
      <button type="button" onClick={(e) => onOpen(e.currentTarget)} aria-label={`${label}: ${img.alt}`} className="block w-full cursor-zoom-in">
        <div ref={ref} className={cn("reveal-img overflow-hidden bg-muted", className.match(/aspect-\S+/)?.[0])}>
          <img
            src={img.src}
            alt=""
            width={img.width}
            height={img.height}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.03]"
          />
        </div>
      </button>
      <figcaption className="mt-2 flex gap-3">
        <span className="meta tabular-nums text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
        <span className="caption max-w-xs text-sm opacity-0 transition-opacity duration-700 group-focus-within:opacity-100 group-hover:opacity-100 max-md:opacity-100">
          {img.alt}
        </span>
      </figcaption>
    </figure>
  );
}
