import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import type { Locale } from "@/content/locales";

type Props = {
  locale: Locale;
  page: "home" | "legal";
  hash?: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  "aria-current"?: "page" | undefined;
  lang?: string;
};

export function LocaleLink({ locale, page, hash, children, ...rest }: Props) {
  if (page === "home") {
    return locale === "en" ? (
      <Link to="/" hash={hash} {...rest}>
        {children}
      </Link>
    ) : (
      <Link to="/$lang" params={{ lang: locale }} hash={hash} {...rest}>
        {children}
      </Link>
    );
  }
  return locale === "en" ? (
    <Link to="/mentions-legales" {...rest}>
      {children}
    </Link>
  ) : (
    <Link to="/$lang/mentions-legales" params={{ lang: locale }} {...rest}>
      {children}
    </Link>
  );
}
