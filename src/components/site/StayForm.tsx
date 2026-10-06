import { useState, type FormEvent } from "react";
import type { Dict, Locale } from "@/content/locales";
import { site, whatsappHref } from "@/content/site";
import { submitStayRequest } from "@/lib/stay-request";

export function StayForm({ d, locale }: { d: Dict; locale: Locale }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "not-connected" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setStatus("sending");
    const res = await submitStayRequest({
      arrival: String(f.get("arrival") ?? ""),
      departure: String(f.get("departure") ?? ""),
      guests: String(f.get("guests") ?? ""),
      name: String(f.get("name") ?? ""),
      email: String(f.get("email") ?? ""),
      whatsapp: String(f.get("whatsapp") ?? "") || undefined,
      message: String(f.get("message") ?? "") || undefined,
      locale,
    });
    setStatus(res.ok ? "done" : res.reason);
  }

  const opt = <span className="ml-2 normal-case tracking-normal text-muted-foreground">({d.stay.optional})</span>;

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-6 md:gap-x-8 md:gap-y-10" noValidate={false}>
      <Field id="arrival" label={d.stay.arrival} className="col-span-1 md:col-span-2">
        <input id="arrival" name="arrival" type="date" required className="field" />
      </Field>
      <Field id="departure" label={d.stay.departure} className="col-span-1 md:col-span-2">
        <input id="departure" name="departure" type="date" required className="field" />
      </Field>
      <Field id="guests" label={d.stay.guests} className="col-span-2 md:col-span-2">
        <input id="guests" name="guests" type="number" min={1} max={30} defaultValue={2} required className="field" />
      </Field>
      <Field id="name" label={d.stay.name} className="col-span-2 md:col-span-3">
        <input id="name" name="name" type="text" autoComplete="name" required className="field" />
      </Field>
      <Field id="email" label={d.stay.email} className="col-span-2 md:col-span-3">
        <input id="email" name="email" type="email" autoComplete="email" required className="field" />
      </Field>
      <Field id="whatsapp" label={<>{d.stay.whatsapp}{opt}</>} className="col-span-2 md:col-span-2">
        <input id="whatsapp" name="whatsapp" type="tel" autoComplete="tel" className="field" />
      </Field>
      <Field id="message" label={<>{d.stay.message}{opt}</>} className="col-span-2 md:col-span-4">
        <textarea id="message" name="message" rows={2} className="field resize-y" />
      </Field>

      <div className="col-span-2 mt-2 flex flex-col gap-6 md:col-span-6 md:flex-row md:items-center md:gap-10">
        <button
          type="submit"
          disabled={status === "sending"}
          className="meta group inline-flex items-center justify-between gap-10 bg-primary px-7 py-5 text-primary-foreground transition-colors hover:bg-clay hover:text-accent-foreground disabled:opacity-60"
        >
          {d.stay.submit}
          <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
        </button>
        <p className="caption">
          {d.stay.or}{" "}
          <a href={whatsappHref(d.stay.whatsappGreeting)} target="_blank" rel="noreferrer" className="link-quiet not-italic text-foreground">
            {d.stay.whatsappCta} ↗
          </a>
        </p>
      </div>

      <p role="status" aria-live="polite" className="col-span-2 md:col-span-6">
        {status === "not-connected" && (
          <span className="block max-w-xl border-l-2 border-clay pl-4 font-display text-lg italic">
            {d.stay.notConnected}{" "}
            <a href={whatsappHref(d.stay.whatsappGreeting)} target="_blank" rel="noreferrer" className="underline underline-offset-4">
              WhatsApp ↗
            </a>
          </span>
        )}
      </p>

      <div className="col-span-2 flex flex-wrap items-baseline gap-x-6 gap-y-2 border-t border-border pt-6 md:col-span-6">
        <span className="meta text-muted-foreground">{d.stay.alsoOn}</span>
        <a href={site.links.airbnb} target="_blank" rel="noreferrer" className="link-quiet font-display text-lg">Airbnb ↗</a>
        <a href={site.links.booking} target="_blank" rel="noreferrer" className="link-quiet font-display text-lg">Booking.com ↗</a>
      </div>
    </form>
  );
}

function Field({ id, label, className, children }: { id: string; label: React.ReactNode; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="meta block text-muted-foreground">
        {label}
      </label>
      {children}
    </div>
  );
}
