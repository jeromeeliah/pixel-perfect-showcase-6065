import { dictionaries, type Locale } from "@/content/locales";
import { site } from "@/content/site";
import { LocaleLink } from "./LocaleLink";
import { LangSwitch, ModeSwitch } from "./Masthead";
import { MhamidClock } from "./MhamidClock";

export function Footer({ locale, page }: { locale: Locale; page: "home" | "legal" }) {
  const d = dictionaries[locale];
  return (
    <footer className="grain overflow-hidden border-t border-border bg-card px-5 pb-8 pt-16 md:px-10 md:pt-24">
      <div className="mx-auto max-w-[1600px]">
        <p className="display select-none whitespace-nowrap text-[17vw] leading-[0.8] tracking-[-0.04em] md:text-[13.5vw]" aria-hidden>
          Auberge <span className="italic">Tigida</span>
        </p>
        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <address className="caption not-italic md:col-span-4">
            <span className="font-display text-lg italic text-foreground">{site.name}</span>
            <br />
            {site.location.village}, {site.location.commune}
            <br />
            {site.location.province}, {site.location.country}
            <br />
            <span className="placeholder-fact">{site.contact.email}</span>
          </address>
          <MhamidClock d={d} className="meta leading-loose text-muted-foreground md:col-span-4" />
          <div className="flex flex-col gap-5 md:col-span-4 md:items-end">
            <LangSwitch locale={locale} page={page} />
            <ModeSwitch d={d} />
            <ul className="meta flex gap-6">
              <li><a href={site.links.instagram} target="_blank" rel="noreferrer" className="link-quiet">Instagram ↗</a></li>
              <li><LocaleLink locale={locale} page="legal" className="link-quiet">{d.nav.legal}</LocaleLink></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-border pt-5 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. {d.footer.rights}</p>
          <p className="max-w-lg md:text-right">{d.footer.placeholderNote}</p>
        </div>
      </div>
    </footer>
  );
}
