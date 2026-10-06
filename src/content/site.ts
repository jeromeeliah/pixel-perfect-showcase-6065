/**
 * Central site configuration. Replace placeholder values here —
 * components read from this file only.
 */
export const site = {
  name: "Auberge Tigida",
  hosts: ["Corinne Rüfenacht", "Sofian"],
  location: {
    village: "Douar Bounou",
    commune: "M’Hamid El Ghizlane",
    province: "Zagora Province",
    country: "Morocco",
    // Approximate coordinates for M’Hamid El Ghizlane — VERIFY and replace with the exact location of the house.
    lat: 29.82,
    lng: -5.72,
    timeZone: "Africa/Casablanca",
  },
  contact: {
    email: "[email@placeholder]", // TODO: real address
    // TODO: real WhatsApp number in international format, digits only (e.g. 2126XXXXXXXX)
    whatsappNumber: "000000000000",
  },
  links: {
    instagram: "https://instagram.com/", // TODO
    airbnb: "https://www.airbnb.com/", // TODO: listing URL
    booking: "https://www.booking.com/", // TODO: listing URL
  },
  /** When a real form backend exists, set to true and implement submitStayRequest(). */
  stayFormConnected: false,
} as const;

export const whatsappHref = (text?: string) =>
  `https://wa.me/${site.contact.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export function formatCoords(lat: number, lng: number) {
  const f = (v: number, pos: string, neg: string) => {
    const a = Math.abs(v);
    const d = Math.floor(a);
    const m = Math.round((a - d) * 60);
    return `${d}°${String(m).padStart(2, "0")}′${v >= 0 ? pos : neg}`;
  };
  return `${f(lat, "N", "S")}  ${f(lng, "E", "W")}`;
}
