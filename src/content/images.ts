/**
 * IMAGE ROLES — the only place image sources live.
 *
 * Real photos from Tigida; room images are still generated placeholders. To use real photography, replace `src` for a role
 * (drop the file in src/assets and import it) and set `placeholder: false`.
 */
import q0 from "@/assets/tigida-52-21_7.jpg.asset.json";
import q1 from "@/assets/tigida-52-21_10.jpg.asset.json";
import q2 from "@/assets/tigida-52-21_19.jpg.asset.json";
import q3 from "@/assets/tigida-52-21_16.jpg.asset.json";
import q4 from "@/assets/tigida-52-21_3.jpg.asset.json";
import q5 from "@/assets/tigida-52-21_5.jpg.asset.json";
import room01 from "@/assets/room-01.jpg";
import room02 from "@/assets/room-02.jpg";
import room03 from "@/assets/room-03.jpg";
import p0 from "@/assets/tigida-40-02_6.jpg.asset.json";
import p1 from "@/assets/tigida-32-45_20.jpg.asset.json";
import p2 from "@/assets/tigida-9.jpg.asset.json";
import p3 from "@/assets/tigida-32-45_17.jpg.asset.json";
import p4 from "@/assets/tigida-8.jpg.asset.json";
import p5 from "@/assets/tigida-43-38.jpg.asset.json";
import p6 from "@/assets/tigida-5.jpg.asset.json";
import p7 from "@/assets/tigida-2.jpg.asset.json";
import p8 from "@/assets/tigida-40-03_4.jpg.asset.json";
import p9 from "@/assets/tigida-11.jpg.asset.json";
import p10 from "@/assets/tigida-40-03_12.jpg.asset.json";
import p11 from "@/assets/tigida-40-03_3.jpg.asset.json";
import p12 from "@/assets/tigida-10.jpg.asset.json";
import p13 from "@/assets/tigida-4.jpg.asset.json";
import p14 from "@/assets/tigida-3.jpg.asset.json";
import p15 from "@/assets/tigida-40-03_15.jpg.asset.json";
import p16 from "@/assets/tigida-40-03_23.jpg.asset.json";
import p17 from "@/assets/tigida-41-53_6.jpg.asset.json";
import p18 from "@/assets/tigida-41-53_2.jpg.asset.json";
import p19 from "@/assets/tigida-40-03.jpg.asset.json";
import p20 from "@/assets/tigida-40-03_24.jpg.asset.json";
import p21 from "@/assets/tigida-32-45_19.jpg.asset.json";
import p22 from "@/assets/tigida-7.jpg.asset.json";

export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  placeholder: boolean;
  credit?: string;
};

export const images = {
  "hero-desert": { src: q0.url, alt: "Sunset over the dunes of Erg Chegaga", width: 1600, height: 1200, placeholder: false },
  "tigida-exterior": { src: q1.url, alt: "The lantern-lit gate of the guesthouse beneath the palms", width: 1600, height: 1200, placeholder: false },
  "house-detail": { src: q2.url, alt: "The inner courtyard with tamarisk and palms at dusk", width: 1600, height: 1200, placeholder: false },
  "palm-grove": { src: q5.url, alt: "Sunset through the palm grove beyond the courtyard wall", width: 1600, height: 1200, placeholder: false },
  "host-portrait": { src: p4.url, alt: "Preparing a tagine on rugs at the foot of a dune", width: 1600, height: 1200, placeholder: false },
  "textile-detail": { src: p5.url, alt: "Shearing wool in the shade of the palms", width: 1600, height: 1200, placeholder: false },
  "tea": { src: p6.url, alt: "A tagine just opened, on a woven blanket", width: 1200, height: 1600, placeholder: false },
  "desert-experience": { src: p7.url, alt: "Loading a camel for a desert walk", width: 1600, height: 1200, placeholder: false },
  "desert-walk": { src: p8.url, alt: "A lone walker crossing the dunes", width: 1600, height: 1200, placeholder: false },
  "desert-stone": { src: q4.url, alt: "Lunch laid out in the shade of a tamarisk, the truck nearby", width: 1600, height: 1200, placeholder: false },
  "night-sky": { src: q3.url, alt: "Moonlight and stars over the dunes, a camp glowing below", width: 1600, height: 1200, placeholder: false },
  "night-horizon": { src: p11.url, alt: "A figure walking the ridge at sunset", width: 1600, height: 1200, placeholder: false },
  "g-courtyard": { src: p12.url, alt: "Watering the courtyard, palms beyond the wall", width: 899, height: 1599, placeholder: false },
  "g-tent": { src: p13.url, alt: "Canvas tent under a wide sky", width: 1600, height: 1200, placeholder: false },
  "g-palms": { src: p14.url, alt: "Riding toward the palm grove", width: 1600, height: 1200, placeholder: false },
  "g-camels": { src: p15.url, alt: "Two camels resting in the shade", width: 1600, height: 1200, placeholder: false },
  "g-dunes": { src: p16.url, alt: "Dune crests in morning light", width: 1600, height: 1200, placeholder: false },
  "g-kasbah": { src: p17.url, alt: "Looking up through an old kasbah", width: 1200, height: 1600, placeholder: false },
  "g-lane": { src: p18.url, alt: "A covered lane in the old ksar", width: 1200, height: 1600, placeholder: false },
  "g-shade": { src: p19.url, alt: "A rug laid out under tamarisk trees", width: 1600, height: 1200, placeholder: false },
  "g-sandals": { src: p20.url, alt: "Sandals and a wrapped water bottle by camp", width: 1600, height: 1200, placeholder: false },
  "g-sunset": { src: p21.url, alt: "Sunset through tamarisk branches", width: 1600, height: 1200, placeholder: false },
  "g-dune-top": { src: p22.url, alt: "Walkers on the crest of a high dune", width: 720, height: 1280, placeholder: false },
  "room-01": { src: room01, alt: "A simple bedroom with an earth wall and a striped blanket", width: 1280, height: 1600, placeholder: true },
  "room-02": { src: room02, alt: "Two beds and a door opening onto palms", width: 1600, height: 1104, placeholder: true },
  "room-03": { src: room03, alt: "Floor cushions and a low table, palm shadows on the wall", width: 1280, height: 1600, placeholder: true },
} satisfies Record<string, SiteImage>;

export type ImageRole = keyof typeof images;

/** Gallery order + layout hint. Change freely. */
export const galleryItems: { role: ImageRole; shape: "wide" | "tall" | "square" | "small" }[] = [
  { role: "g-courtyard", shape: "tall" },
  { role: "g-palms", shape: "wide" },
  { role: "g-kasbah", shape: "small" },
  { role: "g-tent", shape: "wide" },
  { role: "g-dune-top", shape: "tall" },
  { role: "g-camels", shape: "square" },
  { role: "g-sandals", shape: "small" },
  { role: "g-dunes", shape: "wide" },
  { role: "g-lane", shape: "tall" },
  { role: "g-shade", shape: "square" },
  { role: "g-sunset", shape: "wide" },
];
