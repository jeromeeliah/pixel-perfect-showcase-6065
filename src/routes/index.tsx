import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";
import { localeHead } from "@/content/locales";

export const Route = createFileRoute("/")({
  head: () => localeHead("en", "home"),
  component: () => <HomePage locale="en" />,
});
