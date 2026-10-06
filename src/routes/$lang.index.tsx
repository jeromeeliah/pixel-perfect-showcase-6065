import { createFileRoute, notFound } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";
import { isLocale, localeHead, type Locale } from "@/content/locales";

export const Route = createFileRoute("/$lang/")({
  beforeLoad: ({ params }) => {
    if (!isLocale(params.lang) || params.lang === "en") throw notFound();
  },
  head: ({ params }) => localeHead((isLocale(params.lang) ? params.lang : "en") as Locale, "home"),
  component: LangHome,
});

function LangHome() {
  const { lang } = Route.useParams();
  return <HomePage locale={lang as Locale} />;
}
