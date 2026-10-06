import { useEffect, useState } from "react";
import { site, formatCoords } from "@/content/site";
import type { Dict } from "@/content/locales";

/** Live local time at the house, with a phrase for the light. Renders coords-only on the server. */
export function MhamidClock({ d, className }: { d: Dict; className?: string }) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);

  let time = "";
  let phase = "";
  if (now) {
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: site.location.timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).formatToParts(now);
    const h = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
    time = `${parts.find((p) => p.type === "hour")?.value}:${parts.find((p) => p.type === "minute")?.value}`;
    phase =
      h >= 5 && h < 8 ? d.clock.phases.dawn : h >= 8 && h < 17 ? d.clock.phases.day : h >= 17 && h < 20 ? d.clock.phases.dusk : d.clock.phases.night;
  }

  return (
    <p className={className}>
      <span className="tabular-nums">{formatCoords(site.location.lat, site.location.lng)}</span>
      {now && (
        <>
          <span aria-hidden className="mx-3 opacity-50">—</span>
          <span className="tabular-nums">{time}</span> {d.clock.now}
          <span aria-hidden className="mx-3 opacity-50">·</span>
          <span className="font-display normal-case italic tracking-normal text-[0.85rem]">{phase}</span>
        </>
      )}
    </p>
  );
}
