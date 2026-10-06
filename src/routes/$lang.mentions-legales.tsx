import { createFileRoute, notFound } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { isLocale, localeHead, type Locale } from "@/content/locales";

export const Route = createFileRoute("/$lang/mentions-legales")({
  beforeLoad: ({ params }) => {
    if (!isLocale(params.lang) || params.lang === "en") throw notFound();
  },
  head: ({ params }) => localeHead((isLocale(params.lang) ? params.lang : "en") as Locale, "legal"),
  component: LangLegal,
});

function LangLegal() {
  const { lang } = Route.useParams();
  return <LegalPage locale={lang as Locale} />;
}
