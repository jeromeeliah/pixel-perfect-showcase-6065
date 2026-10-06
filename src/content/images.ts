/**
 * IMAGE ROLES — the only place image sources live.
 *
 * Every image here is a TEMPORARY PLACEHOLDER (Unsplash or generated) and does
 * NOT depict Auberge Tigida. To use real photography, replace `src` for a role
 * (drop the file in src/assets and import it) and set `placeholder: false`.
 */
import room01 from "@/assets/room-01.jpg";
import room02 from "@/assets/room-02.jpg";
import room03 from "@/assets/room-03.jpg";
import exterior from "@/assets/tigida-exterior.jpg";
import houseDetail from "@/assets/house-detail.jpg";
import textile from "@/assets/textile-detail.jpg";
import tea from "@/assets/tea.jpg";
import hostPortrait from "@/assets/host-portrait.jpg";

export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  placeholder: boolean;
  credit?: string;
};

const unsplash = (id: string, w = 1800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=72`;

export const images = {
  "hero-desert": {
    src: unsplash("1542401886-65d6c61db217", 2200),
    alt: "Soft dunes under a pale evening sky",
    width: 2200,
    height: 1467,
    placeholder: true,
    credit: "Unsplash",
  },
  "tigida-exterior": {
    src: exterior,
    alt: "An earthen courtyard with a single palm and a wooden bench",
    width: 1600,
    height: 1200,
    placeholder: true,
  },
  "house-detail": {
    src: houseDetail,
    alt: "Raking light across a mud-plastered wall and wooden shutter",
    width: 1024,
    height: 1280,
    placeholder: true,
  },
  "palm-grove": {
    src: unsplash("1489749798305-4fea3ae63d43"),
    alt: "Earthen houses below a dense palm grove, mountains beyond",
    width: 1800,
    height: 1200,
    placeholder: true,
    credit: "Unsplash",
  },
  "host-portrait": {
    src: hostPortrait,
    alt: "An open wooden door in an earthen wall, a shadow on the ground",
    width: 1024,
    height: 1344,
    placeholder: true,
  },
  "room-01": { src: room01, alt: "A simple bedroom with an earth wall and a striped blanket", width: 1280, height: 1600, placeholder: true },
  "room-02": { src: room02, alt: "Two beds and a door opening onto palms", width: 1600, height: 1104, placeholder: true },
  "room-03": { src: room03, alt: "Floor cushions and a low table, palm shadows on the wall", width: 1280, height: 1600, placeholder: true },
  "textile-detail": { src: textile, alt: "Folded woven wool in indigo, cream and rust", width: 1024, height: 1024, placeholder: true },
  tea: { src: tea, alt: "Hands pouring tea into a small glass", width: 1024, height: 1280, placeholder: true },
  "desert-experience": {
    src: unsplash("1489493585363-d69421e0edd3"),
    alt: "A line of camels crossing a high dune",
    width: 1800,
    height: 1200,
    placeholder: true,
    credit: "Unsplash",
  },
  "desert-walk": {
    src: unsplash("1473580044384-7ba9967e16a0"),
    alt: "Footprints across rippled sand toward the sun",
    width: 1800,
    height: 1200,
    placeholder: true,
    credit: "Unsplash",
  },
  "desert-stone": {
    src: unsplash("1547234935-80c7145ec969"),
    alt: "Red sand plain and distant rock formations",
    width: 1800,
    height: 1200,
    placeholder: true,
    credit: "Unsplash",
  },
  "night-sky": {
    src: unsplash("1517824806704-9040b037703b", 2000),
    alt: "The Milky Way above a small lit tent",
    width: 2000,
    height: 1333,
    placeholder: true,
    credit: "Unsplash",
  },
  "night-horizon": {
    src: unsplash("1419242902214-272b3f66ee7a"),
    alt: "Stars over a dark ridge at dusk",
    width: 1800,
    height: 1200,
    placeholder: true,
    credit: "Unsplash",
  },
} satisfies Record<string, SiteImage>;

export type ImageRole = keyof typeof images;

/** Gallery order + layout hint. Change freely. */
export const galleryItems: { role: ImageRole; shape: "wide" | "tall" | "square" | "small" }[] = [
  { role: "palm-grove", shape: "wide" },
  { role: "house-detail", shape: "tall" },
  { role: "textile-detail", shape: "small" },
  { role: "desert-walk", shape: "wide" },
  { role: "room-03", shape: "tall" },
  { role: "tea", shape: "small" },
  { role: "night-horizon", shape: "wide" },
  { role: "desert-stone", shape: "square" },
];
