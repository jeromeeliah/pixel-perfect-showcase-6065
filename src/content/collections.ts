import type { ImageRole } from "./images";
import type { ExperienceKey } from "./locales";

/**
 * Rooms: factual fields are null until supplied — the UI shows locale
 * placeholders for null values. Fill e.g. { name: "…", guests: "2", … }.
 */
export type Room = {
  id: string;
  image: ImageRole;
  name: string | null;
  guests: string | null;
  bed: string | null;
  bath: string | null;
  description: string | null;
};

export const rooms: Room[] = [
  { id: "01", image: "room-01", name: null, guests: null, bed: null, bath: null, description: null },
  { id: "02", image: "room-02", name: null, guests: null, bed: null, bath: null, description: null },
  { id: "03", image: "room-03", name: null, guests: null, bed: null, bath: null, description: null },
];

export const experiences: { key: ExperienceKey; image: ImageRole; placeholder?: boolean }[] = [
  { key: "chigaga", image: "hero-desert" },
  { key: "camel", image: "desert-experience" },
  { key: "camp", image: "night-sky" },
  { key: "walking", image: "desert-walk" },
  { key: "village", image: "tigida-exterior" },
  { key: "palms", image: "palm-grove" },
  { key: "stars", image: "night-horizon" },
  { key: "cooking", image: "tea" },
  { key: "music", image: "room-03" },
  { key: "fourbyfour", image: "desert-stone", placeholder: true },
];
