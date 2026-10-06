import { dictionaries, type Locale } from "@/content/locales";
import { Masthead } from "./Masthead";
import { Footer } from "./Footer";
import { LocaleLink } from "./LocaleLink";

export function LegalPage({ locale }: { locale: Locale }) {
  const d = dictionaries[locale];
  return (
    <div lang={d.htmlLang}>
      <Masthead locale={locale} page="legal" overHero={false} />
      <main id="main" className="px-5 pb-28 pt-36 md:px-10 md:pt-48">
        <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-12 md:gap-x-6">
          <div className="md:col-span-5">
            <h1 className="display text-6xl md:text-8xl">{d.legal.title}</h1>
            <p className="prose-editorial mt-6 max-w-sm italic text-muted-foreground">{d.legal.intro}</p>
          </div>
          <div className="space-y-12 md:col-span-6 md:col-start-7">
            {d.legal.sections.map((s) => (
              <section key={s.h} className="border-t border-border pt-5">
                <h2 className="meta mb-4 text-muted-foreground">{s.h}</h2>
                <ul className="space-y-2 font-display text-xl">
                  {s.items.map((it) => (
                    <li key={it}>{it.startsWith("[") ? <span className="placeholder-fact">{it}</span> : it}</li>
                  ))}
                </ul>
              </section>
            ))}
            <LocaleLink locale={locale} page="home" className="meta link-quiet inline-block">
              ← {d.legal.back}
            </LocaleLink>
          </div>
        </div>
      </main>
      <Footer locale={locale} page="legal" />
    </div>
  );
}
