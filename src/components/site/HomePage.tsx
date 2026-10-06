import { useEffect, useRef, useState } from "react";
import { dictionaries, type Dict, type Locale } from "@/content/locales";
import { images } from "@/content/images";
import { experiences, rooms } from "@/content/collections";
import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/use-reveal";
import { Figure } from "./Figure";
import { Masthead } from "./Masthead";
import { MhamidClock } from "./MhamidClock";
import { Gallery } from "./Gallery";
import { StayForm } from "./StayForm";
import { Footer } from "./Footer";

export function HomePage({ locale }: { locale: Locale }) {
  const d = dictionaries[locale];
  return (
    <div lang={d.htmlLang}>
      <Masthead locale={locale} page="home" overHero />
      <main id="main">
        <Hero d={d} />
        <Place d={d} />
        <House d={d} />
        <Rooms d={d} />
        <Hosts d={d} />
        <Desert d={d} />
        <Fragments d={d} />
        <section id="gallery" className="scroll-mt-24 px-5 py-24 md:px-10 md:py-40">
          <div className="mx-auto max-w-[1600px]">
            <SectionHead label={d.gallery.label} title={d.gallery.title} className="mb-16 md:mb-24" />
            <Gallery d={d} />
          </div>
        </section>
        <Stay d={d} locale={locale} />
      </main>
      <Footer locale={locale} page="home" />
    </div>
  );
}

/* ——— helpers ——— */

function Reveal({ as: Tag = "div", className, children, delay }: { as?: "div" | "p" | "h2" | "li"; className?: string; children: React.ReactNode; delay?: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    // @ts-expect-error polymorphic ref is fine for these intrinsic tags
    <Tag ref={ref} className={cn("reveal", className)} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  );
}

function SectionHead({ label, title, className }: { label: string; title: React.ReactNode; className?: string }) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-12", className)}>
      <p className="meta pt-3 text-muted-foreground md:col-span-3">{label}</p>
      <Reveal as="h2" className="display text-5xl md:col-span-9 md:text-7xl lg:text-8xl">
        {title}
      </Reveal>
    </div>
  );
}

/* ——— 01 Arrival ——— */

function Hero({ d }: { d: Dict }) {
  const imgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, window.innerHeight);
        if (imgRef.current) imgRef.current.style.transform = `translate3d(0, ${y * 0.25}px, 0) scale(${1.04 + y * 0.00005})`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const img = images["hero-desert"];
  return (
    <section aria-label="Auberge Tigida" className="relative h-[100svh] min-h-[560px] overflow-hidden text-paper">
      <div ref={imgRef} className="absolute inset-0 scale-[1.04] will-change-transform">
        <img src={img.src} alt={img.alt} width={img.width} height={img.height} fetchPriority="high" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0" style={{ background: "var(--hero-veil)" }} />
      <div className="relative mx-auto flex h-full max-w-[1600px] flex-col justify-end px-5 pb-24 md:px-10 md:pb-28">
        <p className="meta menu-item-in mb-6 md:mb-8" style={{ animationDelay: "150ms" }}>
          {d.hero.kicker}
        </p>
        <h1 className="display text-[3.4rem] sm:text-7xl md:text-[8.5rem] lg:text-[10.5rem]">
          <span className="menu-item-in block" style={{ animationDelay: "300ms" }}>{d.hero.line1}</span>
          <span className="menu-item-in block pl-[8vw] italic md:pl-[14vw]" style={{ animationDelay: "500ms" }}>{d.hero.line2}</span>
        </h1>
      </div>
      <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-[1600px] items-end justify-between gap-6 px-5 pb-6 text-foreground md:px-10">
        <MhamidClock d={d} className="meta hidden md:block" />
        <a href="#tigida" className="meta ml-auto flex items-center gap-3">
          {d.hero.scroll}
          <span aria-hidden className="block h-8 w-px bg-current" />
        </a>
      </div>
    </section>
  );
}

/* ——— 02 Place ——— */

function Place({ d }: { d: Dict }) {
  return (
    <section id="tigida" className="scroll-mt-24 px-5 pb-24 pt-20 md:px-10 md:pb-40 md:pt-32">
      <div className="mx-auto grid max-w-[1600px] gap-y-14 md:grid-cols-12 md:gap-x-6">
        <p className="meta text-muted-foreground md:col-span-12">{d.place.label}</p>
        <Reveal as="h2" className="display text-[3.2rem] md:col-span-7 md:text-8xl lg:text-[7.5rem]">
          {d.place.title[0]}
          <br />
          <span className="italic text-clay">{d.place.title[1]}</span>
        </Reveal>
        <div className="space-y-6 self-end md:col-span-4 md:col-start-9">
          {d.place.body.map((p, i) => (
            <Reveal key={i} as="p" delay={i * 120} className={cn("prose-editorial", i === 1 && "italic text-muted-foreground")}>
              {p}
            </Reveal>
          ))}
        </div>
        <Figure role="palm-grove" caption={d.place.captionMain} index="Fig. 1" aspect="aspect-[3/2]" className="md:col-span-8 md:col-start-5 md:mt-10" />
        <Figure
          role="tigida-exterior"
          caption={d.place.captionSmall}
          index="Fig. 2"
          aspect="aspect-[4/5]"
          className="w-2/3 md:col-span-3 md:col-start-2 md:row-start-4 md:-mt-56 md:w-auto"
        />
      </div>
    </section>
  );
}

/* ——— 03 House ——— */

function House({ d }: { d: Dict }) {
  return (
    <section id="house" className="grain scroll-mt-24 bg-card px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-8 md:grid-cols-12">
          <p className="meta text-muted-foreground md:col-span-3">{d.house.label}</p>
          <Reveal as="p" className="display text-4xl leading-[1.05] md:col-span-9 md:text-6xl lg:text-7xl">
            “{d.house.pull}”
          </Reveal>
        </div>
        <div className="mt-16 grid grid-cols-6 gap-x-4 gap-y-10 md:mt-28 md:grid-cols-12 md:gap-x-6">
          <Figure role="tigida-exterior" caption={d.house.captions[0]} aspect="aspect-[4/3]" className="col-span-6 md:col-span-7" />
          <Figure role="house-detail" caption={d.house.captions[1]} aspect="aspect-[4/5]" className="col-span-4 col-start-3 md:col-span-4 md:col-start-9 md:mt-40" />
          <div className="col-span-6 md:col-span-4 md:col-start-2 md:-mt-10">
            <Reveal as="p" className="prose-editorial">
              {renderPlaceholders(d.house.body)}
            </Reveal>
          </div>
          <Figure role="textile-detail" caption={d.house.captions[2]} aspect="aspect-square" className="col-span-3 md:col-span-2 md:col-start-7 md:-mt-4" />
        </div>
      </div>
    </section>
  );
}

/** Wraps [bracketed] placeholder text in a clearly identifiable style. */
function renderPlaceholders(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") ? (
      <span key={i} className="placeholder-fact">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

/* ——— 04 Rooms ——— */

const roomLayouts = [
  { fig: "md:col-span-7", aspect: "aspect-[4/5]", info: "md:col-span-4 md:col-start-9 md:self-end" },
  { fig: "md:col-span-8 md:col-start-5 md:order-2", aspect: "aspect-[3/2]", info: "md:col-span-3 md:order-1 md:self-start md:pt-10" },
  { fig: "md:col-span-5 md:col-start-2", aspect: "aspect-[4/5]", info: "md:col-span-4 md:col-start-8 md:self-center" },
];

function Rooms({ d }: { d: Dict }) {
  return (
    <section id="rooms" className="scroll-mt-24 px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <SectionHead label={d.rooms.label} title={d.rooms.title} />
        <p className="prose-editorial mt-8 max-w-md italic text-muted-foreground md:ml-[25%]">{d.rooms.intro}</p>
        <div className="mt-20 space-y-24 md:mt-32 md:space-y-40">
          {rooms.map((r, i) => {
            const L = roomLayouts[i % roomLayouts.length];
            return (
              <article key={r.id} className="grid gap-8 md:grid-cols-12 md:gap-x-6" aria-labelledby={`room-${r.id}`}>
                <Figure role={r.image} aspect={L.aspect} className={L.fig} placeholderLabel={d.placeholderImage} />
                <div className={cn("space-y-5", L.info)}>
                  <p className="meta text-muted-foreground">
                    {d.rooms.room} {r.id}
                  </p>
                  <h3 id={`room-${r.id}`} className="display text-5xl md:text-6xl">
                    {r.name ?? <span className="placeholder-fact text-[0.55em]">{d.rooms.name}</span>}
                  </h3>
                  <p className="meta flex flex-wrap gap-x-3 gap-y-2">
                    <Fact v={r.guests} p={d.rooms.guests} />
                    <span aria-hidden>·</span>
                    <Fact v={r.bed} p={d.rooms.bed} />
                    <span aria-hidden>·</span>
                    <Fact v={r.bath} p={d.rooms.bath} />
                  </p>
                  <p className="prose-editorial max-w-sm">
                    {r.description ?? <span className="placeholder-fact">{d.rooms.note}</span>}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Fact({ v, p }: { v: string | null; p: string }) {
  return v ? <span>{v}</span> : <span className="placeholder-fact">{p}</span>;
}

/* ——— 05 Hosts ——— */

function Hosts({ d }: { d: Dict }) {
  return (
    <section id="hosts" className="scroll-mt-24 border-y border-border px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-12 md:gap-x-6">
        <div className="md:col-span-5">
          <Figure role="host-portrait" aspect="aspect-[3/4]" caption={d.hosts.portraitNote} placeholderLabel={d.placeholderImage} />
        </div>
        <div className="flex flex-col justify-between gap-12 md:col-span-6 md:col-start-7">
          <p className="meta text-muted-foreground">{d.hosts.label}</p>
          <Reveal as="h2" className="display text-5xl md:text-7xl lg:text-8xl">
            {d.hosts.title[0]}
            <br />
            <span className="italic">{d.hosts.title[1]}</span>
          </Reveal>
          <div className="max-w-md space-y-5">
            <p className="prose-editorial">{d.hosts.body}</p>
            <p className="prose-editorial">
              <span className="placeholder-fact">{d.hosts.bio}</span>
            </p>
            <p className="font-display text-2xl italic">— Corinne &amp; Sofian</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ——— 06 Desert (always dusk/night, whatever the mode) ——— */

function Desert({ d }: { d: Dict }) {
  const [active, setActive] = useState(0);
  const sky = images["night-sky"];
  return (
    <section id="desert" className="dark scroll-mt-0 bg-background text-foreground">
      <div className="relative h-[85svh] min-h-[520px] overflow-hidden">
        <img src={sky.src} alt={sky.alt} width={sky.width} height={sky.height} loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1600px] px-5 pb-12 md:px-10 md:pb-20">
          <p className="meta mb-6 text-muted-foreground">{d.desert.label}</p>
          <Reveal as="h2" className="display text-[3.2rem] md:text-8xl lg:text-[8.5rem]">
            {d.desert.title[0]}
            <br />
            <span className="italic text-clay">{d.desert.title[1]}</span>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 pb-28 pt-10 md:grid-cols-12 md:gap-x-6 md:px-10 md:pb-40">
        <p className="prose-editorial italic text-muted-foreground md:col-span-4">{d.desert.intro}</p>

        {/* Desktop: image follows the hovered/focused line */}
        <div className="sticky top-28 hidden self-start md:col-span-4 md:block">
          <div className="relative aspect-[4/5] overflow-hidden bg-muted">
            {experiences.map((x, i) => {
              const img = images[x.image];
              return (
                <img
                  key={x.key}
                  src={img.src}
                  alt=""
                  loading="lazy"
                  className={cn("absolute inset-0 h-full w-full object-cover transition-opacity duration-1000", i === active ? "opacity-100" : "opacity-0")}
                />
              );
            })}
          </div>
          <p className="caption mt-3">{images[experiences[active].image].alt}</p>
        </div>

        <ol className="border-t border-border md:col-span-4">
          {experiences.map((x, i) => {
            const t = d.desert.items[x.key];
            return (
              <li key={x.key} className="border-b border-border">
                <div
                  tabIndex={0}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={cn("group grid cursor-default grid-cols-[2.5rem_1fr] gap-x-3 py-5 outline-none transition-colors md:py-6", x.placeholder && "opacity-70")}
                >
                  <span className="meta pt-2 tabular-nums text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className={cn("font-display text-2xl font-light transition-colors md:text-3xl", i === active && "md:italic md:text-clay")}>
                      {t.title}
                      {x.placeholder && <span className="meta ml-3 align-middle text-clay not-italic">{d.desert.toCome}</span>}
                    </h3>
                    <p className={cn("mt-1 text-sm text-muted-foreground", x.placeholder && "placeholder-fact")}>{t.text}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ——— 07 Fragments ——— */

function Fragments({ d }: { d: Dict }) {
  return (
    <section aria-label={d.fragments.label} className="px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-12 md:gap-x-6">
        <div className="flex flex-col justify-center gap-10 md:col-span-6 md:gap-14">
          <p className="meta text-muted-foreground">{d.fragments.label}</p>
          {d.fragments.lines.map((l, i) => (
            <Reveal key={i} as="p" delay={i * 150} className={cn("display text-4xl md:text-6xl", i === 1 && "pl-[12%] italic", i === 2 && "pl-[4%]")}>
              {l}
            </Reveal>
          ))}
        </div>
        <Figure role="tea" aspect="aspect-[4/5]" className="md:col-span-4 md:col-start-8" placeholderLabel={d.placeholderImage} />
      </div>
    </section>
  );
}

/* ——— 08 Stay ——— */

function Stay({ d, locale }: { d: Dict; locale: Locale }) {
  return (
    <section id="stay" className="scroll-mt-24 border-t border-border px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1600px] gap-14 md:grid-cols-12 md:gap-x-6">
        <div className="md:col-span-5">
          <p className="meta mb-8 text-muted-foreground">{d.stay.label}</p>
          <Reveal as="h2" className="display text-[4rem] md:text-8xl lg:text-[9rem]">
            {d.stay.title[0]}
            <br />
            <span className="italic text-clay">{d.stay.title[1]}</span>
          </Reveal>
          <p className="prose-editorial mt-8 max-w-sm text-muted-foreground">{d.stay.intro}</p>
        </div>
        <div className="md:col-span-7 md:pt-24">
          <StayForm d={d} locale={locale} />
        </div>
      </div>
    </section>
  );
}
