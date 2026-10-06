import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { localeHead } from "@/content/locales";

export const Route = createFileRoute("/mentions-legales")({
  head: () => localeHead("en", "legal"),
  component: () => <LegalPage locale="en" />,
});
