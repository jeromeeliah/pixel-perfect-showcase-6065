import { useEffect, useRef, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import { LOCALES, dictionaries, type Locale } from "@/content/locales";
import { site } from "@/content/site";
import { useMode } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { LocaleLink } from "./LocaleLink";

const SECTIONS = ["tigida", "house", "rooms", "hosts", "desert", "gallery", "stay"] as const;

export function Masthead({ locale, page, overHero }: { locale: Locale; page: "home" | "legal"; overHero: boolean }) {
  const d = dictionaries[locale];
  const [open, setOpen] = useState(false);
  const [past, setPast] = useState(!overHero);
  const closeRef = useRef<HTMLButtonElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!overHero) return;
    const onScroll = () => setPast(window.scrollY > window.innerHeight * 0.82);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overHero]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      menuBtnRef.current?.focus();
    };
  }, [open]);

  const light = overHero && !past && !open;

  return (
    <>
      <a href="#main" className="meta sr-only z-[60] bg-background px-4 py-3 focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        {d.nav.skip}
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-colors duration-700",
          light ? "text-paper" : "bg-background/95 text-foreground",
          past && !light && "border-b border-border",
        )}
      >
        <div className="mx-auto grid max-w-[1600px] grid-cols-[1fr_auto] items-center gap-4 px-5 py-4 md:grid-cols-[1fr_auto_1fr] md:px-10 md:py-5">
          <LocaleLink locale={locale} page="home" className="group flex flex-col leading-none">
            <span className="font-display text-[1.35rem] font-normal tracking-[0.14em] md:text-[1.5rem]">
              AUBERGE <span className="italic tracking-[0.04em]">Tigida</span>
            </span>
          </LocaleLink>
          <p className="meta hidden text-center opacity-80 md:block">M’Hamid · {site.location.country}</p>
          <div className="flex items-center justify-end gap-6">
            <ModeSwitch d={d} className="hidden md:flex" />
            <button
              ref={menuBtnRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="meta group flex items-center gap-3"
            >
              <span>{d.nav.menu}</span>
              <span aria-hidden className="flex w-6 flex-col gap-[5px]">
                <span className="h-px w-full bg-current" />
                <span className="h-px w-2/3 bg-current transition-all group-hover:w-full" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label={d.nav.menu}
          className="grain fixed inset-0 z-50 overflow-y-auto bg-background text-foreground"
        >
          <div className="mx-auto flex min-h-full max-w-[1600px] flex-col px-5 py-4 md:px-10 md:py-5">
            <div className="flex items-center justify-between">
              <span className="font-display text-[1.35rem] tracking-[0.14em] md:text-[1.5rem]">
                AUBERGE <span className="italic tracking-[0.04em]">Tigida</span>
              </span>
              <button ref={closeRef} type="button" onClick={() => setOpen(false)} className="meta flex items-center gap-3">
                {d.nav.close}
                <span aria-hidden className="relative block h-4 w-4">
                  <span className="absolute left-0 top-1/2 h-px w-full rotate-45 bg-current" />
                  <span className="absolute left-0 top-1/2 h-px w-full -rotate-45 bg-current" />
                </span>
              </button>
            </div>

            <div className="mt-10 grid flex-1 gap-12 md:mt-16 md:grid-cols-12">
              <nav aria-label={d.nav.menu} className="md:col-span-8">
                <ol className="space-y-1 md:space-y-0">
                  {SECTIONS.map((s, i) => (
                    <li key={s} className="menu-item-in" style={{ animationDelay: `${80 + i * 55}ms` }}>
                      <LocaleLink
                        locale={locale}
                        page="home"
                        hash={s}
                        onClick={() => setOpen(false)}
                        className="group flex items-baseline gap-4 py-1 md:gap-8"
                      >
                        <span className="meta w-8 text-muted-foreground tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                        <span className="display text-[2.6rem] transition-[letter-spacing,color] duration-700 group-hover:text-clay group-hover:italic sm:text-6xl md:text-[5.2rem]">
                          {d.nav.items[s]}
                        </span>
                      </LocaleLink>
                    </li>
                  ))}
                </ol>
              </nav>

              <aside className="flex flex-col justify-end gap-10 border-t border-border pt-8 md:col-span-4 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                <div>
                  
                  <LangSwitch locale={locale} page={page} onNavigate={() => setOpen(false)} />
                </div>
                <div>
                  <p className="meta mb-3 text-muted-foreground">{d.nav.day} / {d.nav.night}</p>
                  <ModeSwitch d={d} />
                </div>
                <ul className="meta space-y-3">
                  <li>
                    <a className="link-quiet" href={site.links.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
                  </li>
                  <li>
                    <LocaleLink locale={locale} page="home" hash="stay" onClick={() => setOpen(false)} className="link-quiet">
                      {d.nav.contact}
                    </LocaleLink>
                  </li>
                  <li>
                    <LocaleLink locale={locale} page="legal" onClick={() => setOpen(false)} className="link-quiet">
                      {d.nav.legal}
                    </LocaleLink>
                  </li>
                </ul>
                <p className="caption">{site.location.village}, {site.location.commune}<br />{site.location.province}</p>
              </aside>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function LangSwitch({ locale, page, onNavigate }: { locale: Locale; page: "home" | "legal"; onNavigate?: () => void }) {
  const loc = useLocation();
  const hash = page === "home" ? loc.hash || undefined : undefined;
  return (
    <ul className="meta flex gap-5">
      {LOCALES.map((l) => (
        <li key={l}>
          <LocaleLink
            locale={l}
            page={page}
            hash={hash}
            lang={l}
            onClick={onNavigate}
            aria-current={l === locale ? "page" : undefined}
            className={cn("pb-1 transition-colors", l === locale ? "border-b border-current" : "text-muted-foreground hover:text-foreground")}
          >
            {l.toUpperCase()}
          </LocaleLink>
        </li>
      ))}
    </ul>
  );
}

export function ModeSwitch({ d, className }: { d: (typeof dictionaries)["en"]; className?: string }) {
  const [mode, setMode] = useMode();
  return (
    <div role="group" aria-label={`${d.nav.day} / ${d.nav.night}`} className={cn("meta flex items-center gap-2", className)}>
      <button type="button" aria-pressed={mode === "day"} onClick={() => setMode("day")} className={cn("transition-opacity", mode === "day" ? "opacity-100" : "opacity-50 hover:opacity-80")}>
        {d.nav.day}
      </button>
      <span aria-hidden className="opacity-50">/</span>
      <button type="button" aria-pressed={mode === "night"} onClick={() => setMode("night")} className={cn("transition-opacity", mode === "night" ? "opacity-100" : "opacity-50 hover:opacity-80")}>
        {d.nav.night}
      </button>
    </div>
  );
}
