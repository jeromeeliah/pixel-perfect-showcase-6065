/**
 * Locale copy. Atmospheric copy is editorial; any factual information that has
 * not been supplied is kept as a bracketed placeholder — never invented.
 */
export const LOCALES = ["en", "fr", "de", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";
export const isLocale = (v: string | undefined): v is Locale => !!v && (LOCALES as readonly string[]).includes(v);

export type ExperienceKey =
  | "chigaga"
  | "camel"
  | "camp"
  | "walking"
  | "village"
  | "palms"
  | "stars"
  | "cooking"
  | "music"
  | "fourbyfour";

export type Dict = {
  htmlLang: string;
  meta: { title: string; description: string; legalTitle: string; legalDescription: string };
  nav: {
    menu: string;
    close: string;
    items: { tigida: string; house: string; rooms: string; hosts: string; desert: string; gallery: string; stay: string };
    contact: string;
    legal: string;
    day: string;
    night: string;
    skip: string;
  };
  hero: { kicker: string; line1: string; line2: string; scroll: string };
  clock: { now: string; phases: { dawn: string; day: string; dusk: string; night: string } };
  place: { label: string; title: [string, string]; body: string[]; captionMain: string; captionSmall: string };
  house: { label: string; title: string; pull: string; body: string; captions: [string, string, string] };
  rooms: { label: string; title: string; intro: string; room: string; name: string; guests: string; bed: string; bath: string; note: string };
  hosts: { label: string; title: [string, string]; body: string; bio: string; portraitNote: string };
  desert: {
    label: string;
    title: [string, string];
    intro: string;
    items: Record<ExperienceKey, { title: string; text: string }>;
    toCome: string;
  };
  fragments: { label: string; lines: [string, string, string] };
  gallery: { label: string; title: string; open: string; close: string; prev: string; next: string };
  stay: {
    label: string;
    title: [string, string];
    intro: string;
    arrival: string;
    departure: string;
    guests: string;
    name: string;
    email: string;
    whatsapp: string;
    message: string;
    optional: string;
    submit: string;
    notConnected: string;
    or: string;
    whatsappCta: string;
    alsoOn: string;
    whatsappGreeting: string;
  };
  footer: { placeholderNote: string; rights: string };
  placeholderImage: string;
  legal: { title: string; intro: string; sections: { h: string; items: string[] }[]; back: string };
};

const en: Dict = {
  htmlLang: "en",
  meta: {
    title: "Auberge Tigida — A guesthouse at the edge of the desert, M’Hamid, Morocco",
    description:
      "Auberge Tigida is an independent guesthouse in Douar Bounou, M’Hamid El Ghizlane, on the Erg Chigaga side of the Drâa Valley. Hosted by Corinne and Sofian.",
    legalTitle: "Legal notice — Auberge Tigida",
    legalDescription: "Legal notice for the Auberge Tigida website.",
  },
  nav: {
    menu: "Menu",
    close: "Close",
    items: { tigida: "Tigida", house: "The House", rooms: "Rooms", hosts: "Corinne & Sofian", desert: "Desert", gallery: "Gallery", stay: "Stay" },
    contact: "Contact",
    legal: "Mentions légales",
    day: "Day",
    night: "Night",
    skip: "Skip to content",
  },
  hero: { kicker: "Douar Bounou · Southern Morocco", line1: "A place at the", line2: "edge of the desert.", scroll: "Arrive slowly" },
  clock: { now: "now in M’Hamid", phases: { dawn: "first light", day: "full sun", dusk: "the light turning", night: "night, and stars" } },
  place: {
    label: "01 — Tigida",
    title: ["Where the road", "becomes sand."],
    body: [
      "Past the last palms of the Drâa Valley, the land opens and the horizon takes over. Auberge Tigida sits here, in the village of Douar Bounou, on the Erg Chigaga side of M’Hamid El Ghizlane.",
      "A house to arrive at. To stay in a little longer than planned.",
    ],
    captionMain: "Palm grove, Drâa Valley",
    captionSmall: "Midday, the courtyard",
  },
  house: {
    label: "02 — The House",
    title: "The house",
    pull: "Thick walls. Slow afternoons. Shade that moves with the hours.",
    body: "The house is best understood by spending time in it — in the courtyard at midday, on a bench as the shadows stretch, in the cool of the rooms. [Description of the house, its spaces and history to be supplied by the hosts.]",
    captions: ["Courtyard", "Wall, late sun", "Wool, woven"],
  },
  rooms: {
    label: "03 — Rooms",
    title: "Rooms to rest in.",
    intro: "Simple rooms, made for sleeping well after a long day of light.",
    room: "Room",
    name: "[Room name]",
    guests: "[Guests]",
    bed: "[Bed]",
    bath: "[Bathroom]",
    note: "[Short description to come]",
  },
  hosts: {
    label: "04 — Corinne & Sofian",
    title: ["Tigida is a place", "made by people."],
    body: "A guesthouse is its hosts as much as its walls. Corinne and Sofian welcome guests at Tigida.",
    bio: "[A few words about Corinne and Sofian, in their own voice, to be supplied.]",
    portraitNote: "[Portrait of Corinne & Sofian]",
  },
  desert: {
    label: "05 — The Desert",
    title: ["What the desert", "opens up."],
    intro: "Beyond the house, the land does the talking. A few of the ways into it.",
    items: {
      chigaga: { title: "Erg Chigaga", text: "The great dunes, on the horizon from here." },
      camel: { title: "On foot, with camels", text: "The pace of an animal, the pace of the land." },
      camp: { title: "A night out there", text: "Sleeping where the sand goes quiet." },
      walking: { title: "Walking", text: "Mornings, before the heat, with nowhere to be." },
      village: { title: "Village life", text: "The rhythm of Douar Bounou, day by day." },
      palms: { title: "The palm grove", text: "Shade, water, green against ochre." },
      stars: { title: "Stars", text: "When the light goes, the sky arrives." },
      cooking: { title: "Cooking", text: "Around the fire, around the table." },
      music: { title: "Music", text: "Evenings that stretch late." },
      fourbyfour: { title: "4×4 excursions", text: "[Details to be confirmed]" },
    },
    toCome: "To come",
  },
  fragments: {
    label: "Fragments",
    lines: ["Tea, poured from high.", "Wool under the hand.", "Conversation, long after dinner."],
  },
  gallery: { label: "06 — Gallery", title: "Notes from the edge.", open: "Open image", close: "Close", prev: "Previous", next: "Next" },
  stay: {
    label: "07 — Stay",
    title: ["Come stay", "awhile."],
    intro: "Tell us when you’d like to come. We’ll reply personally.",
    arrival: "Arrival",
    departure: "Departure",
    guests: "Guests",
    name: "Name",
    email: "Email",
    whatsapp: "WhatsApp",
    message: "Message",
    optional: "optional",
    submit: "Request a stay",
    notConnected:
      "Thank you. Online requests are not connected yet — please send your dates on WhatsApp for now.",
    or: "or",
    whatsappCta: "WhatsApp us",
    alsoOn: "Also find us on",
    whatsappGreeting: "Hello Tigida — I’d like to ask about a stay.",
  },
  footer: { placeholderNote: "Photographs on this site are temporary placeholders and do not depict Auberge Tigida.", rights: "All rights reserved." },
  placeholderImage: "Placeholder image",
  legal: {
    title: "Mentions légales",
    intro: "Legal notice. The information below is a placeholder and will be completed.",
    sections: [
      { h: "Publisher", items: ["[Legal name of the business]", "[Legal form and registration number]", "[Registered address]", "[Contact email / phone]", "[Publication director]"] },
      { h: "Hosting", items: ["[Hosting provider name]", "[Hosting provider address]"] },
      { h: "Photography", items: ["[Photography credits]", "Placeholder photographs from Unsplash and generated imagery are used temporarily."] },
      { h: "Personal data", items: ["[Privacy policy and data-handling information to be supplied]"] },
    ],
    back: "Back to Tigida",
  },
};

const fr: Dict = {
  ...en,
  htmlLang: "fr",
  meta: {
    title: "Auberge Tigida — Une maison au bord du désert, M’Hamid, Maroc",
    description:
      "Auberge Tigida, maison d’hôtes indépendante à Douar Bounou, M’Hamid El Ghizlane, du côté de l’Erg Chigaga, vallée du Drâa. Accueil : Corinne et Sofian.",
    legalTitle: "Mentions légales — Auberge Tigida",
    legalDescription: "Mentions légales du site de l’Auberge Tigida.",
  },
  nav: {
    menu: "Menu",
    close: "Fermer",
    items: { tigida: "Tigida", house: "La maison", rooms: "Chambres", hosts: "Corinne & Sofian", desert: "Désert", gallery: "Galerie", stay: "Séjourner" },
    contact: "Contact",
    legal: "Mentions légales",
    day: "Jour",
    night: "Nuit",
    skip: "Aller au contenu",
  },
  hero: { kicker: "Douar Bounou · Sud du Maroc", line1: "Une maison au", line2: "bord du désert.", scroll: "Arriver lentement" },
  clock: { now: "en ce moment à M’Hamid", phases: { dawn: "premières lueurs", day: "plein soleil", dusk: "la lumière tourne", night: "la nuit, les étoiles" } },
  place: {
    label: "01 — Tigida",
    title: ["Là où la route", "devient sable."],
    body: [
      "Après les dernières palmes de la vallée du Drâa, la terre s’ouvre et l’horizon prend toute la place. L’Auberge Tigida est ici, au village de Douar Bounou, du côté de l’Erg Chigaga, à M’Hamid El Ghizlane.",
      "Une maison où arriver. Où rester un peu plus longtemps que prévu.",
    ],
    captionMain: "Palmeraie, vallée du Drâa",
    captionSmall: "Midi, la cour",
  },
  house: {
    label: "02 — La maison",
    title: "La maison",
    pull: "Des murs épais. Des après-midi lents. Une ombre qui tourne avec les heures.",
    body: "La maison se comprend en y passant du temps — dans la cour à midi, sur un banc quand les ombres s’allongent, dans la fraîcheur des chambres. [Description de la maison, de ses espaces et de son histoire à fournir par les hôtes.]",
    captions: ["La cour", "Mur, soleil bas", "Laine tissée"],
  },
  rooms: {
    label: "03 — Chambres",
    title: "Des chambres pour se reposer.",
    intro: "Des chambres simples, faites pour bien dormir après une longue journée de lumière.",
    room: "Chambre",
    name: "[Nom de la chambre]",
    guests: "[Personnes]",
    bed: "[Lit]",
    bath: "[Salle de bain]",
    note: "[Courte description à venir]",
  },
  hosts: {
    label: "04 — Corinne & Sofian",
    title: ["Tigida est un lieu", "fait par des gens."],
    body: "Une maison d’hôtes, ce sont ses hôtes autant que ses murs. Corinne et Sofian accueillent les voyageurs à Tigida.",
    bio: "[Quelques mots sur Corinne et Sofian, dans leurs propres mots, à fournir.]",
    portraitNote: "[Portrait de Corinne & Sofian]",
  },
  desert: {
    label: "05 — Le désert",
    title: ["Ce que le désert", "ouvre."],
    intro: "Au-delà de la maison, c’est la terre qui parle. Quelques façons d’y entrer.",
    items: {
      chigaga: { title: "Erg Chigaga", text: "Les grandes dunes, à l’horizon d’ici." },
      camel: { title: "À pied, avec des dromadaires", text: "Le pas de l’animal, le pas du paysage." },
      camp: { title: "Une nuit là-bas", text: "Dormir là où le sable se tait." },
      walking: { title: "Marcher", text: "Le matin, avant la chaleur, sans but." },
      village: { title: "La vie du village", text: "Le rythme de Douar Bounou, jour après jour." },
      palms: { title: "La palmeraie", text: "L’ombre, l’eau, le vert contre l’ocre." },
      stars: { title: "Les étoiles", text: "Quand la lumière s’en va, le ciel arrive." },
      cooking: { title: "Cuisiner", text: "Autour du feu, autour de la table." },
      music: { title: "Musique", text: "Des soirées qui durent." },
      fourbyfour: { title: "Excursions en 4×4", text: "[Détails à confirmer]" },
    },
    toCome: "À venir",
  },
  fragments: { label: "Fragments", lines: ["Le thé, versé de haut.", "La laine sous la main.", "La conversation, longtemps après le dîner."] },
  gallery: { label: "06 — Galerie", title: "Notes du bord.", open: "Ouvrir l’image", close: "Fermer", prev: "Précédente", next: "Suivante" },
  stay: {
    label: "07 — Séjourner",
    title: ["Venez rester", "un moment."],
    intro: "Dites-nous quand vous aimeriez venir. Nous vous répondrons personnellement.",
    arrival: "Arrivée",
    departure: "Départ",
    guests: "Personnes",
    name: "Nom",
    email: "E-mail",
    whatsapp: "WhatsApp",
    message: "Message",
    optional: "facultatif",
    submit: "Demander un séjour",
    notConnected: "Merci. Les demandes en ligne ne sont pas encore actives — envoyez-nous vos dates sur WhatsApp pour l’instant.",
    or: "ou",
    whatsappCta: "Écrire sur WhatsApp",
    alsoOn: "Nous trouver aussi sur",
    whatsappGreeting: "Bonjour Tigida — j’aimerais me renseigner pour un séjour.",
  },
  footer: { placeholderNote: "Les photographies de ce site sont provisoires et ne représentent pas l’Auberge Tigida.", rights: "Tous droits réservés." },
  placeholderImage: "Image provisoire",
  legal: {
    title: "Mentions légales",
    intro: "Les informations ci-dessous sont provisoires et seront complétées.",
    sections: [
      { h: "Éditeur", items: ["[Raison sociale]", "[Forme juridique et numéro d’immatriculation]", "[Adresse du siège]", "[E-mail / téléphone]", "[Directeur de la publication]"] },
      { h: "Hébergement", items: ["[Nom de l’hébergeur]", "[Adresse de l’hébergeur]"] },
      { h: "Photographies", items: ["[Crédits photographiques]", "Des photographies provisoires (Unsplash) et des images générées sont utilisées temporairement."] },
      { h: "Données personnelles", items: ["[Politique de confidentialité à fournir]"] },
    ],
    back: "Retour à Tigida",
  },
};

const de: Dict = {
  ...en,
  htmlLang: "de",
  meta: {
    title: "Auberge Tigida — Ein Haus am Rand der Wüste, M’Hamid, Marokko",
    description:
      "Auberge Tigida ist ein unabhängiges Gästehaus in Douar Bounou, M’Hamid El Ghizlane, auf der Seite des Erg Chigaga im Drâa-Tal. Gastgeber: Corinne und Sofian.",
    legalTitle: "Impressum — Auberge Tigida",
    legalDescription: "Impressum der Website der Auberge Tigida.",
  },
  nav: {
    menu: "Menü",
    close: "Schliessen",
    items: { tigida: "Tigida", house: "Das Haus", rooms: "Zimmer", hosts: "Corinne & Sofian", desert: "Wüste", gallery: "Galerie", stay: "Aufenthalt" },
    contact: "Kontakt",
    legal: "Mentions légales",
    day: "Tag",
    night: "Nacht",
    skip: "Zum Inhalt",
  },
  hero: { kicker: "Douar Bounou · Südmarokko", line1: "Ein Ort am", line2: "Rand der Wüste.", scroll: "Langsam ankommen" },
  clock: { now: "jetzt in M’Hamid", phases: { dawn: "erstes Licht", day: "volle Sonne", dusk: "das Licht kippt", night: "Nacht und Sterne" } },
  place: {
    label: "01 — Tigida",
    title: ["Wo die Strasse", "zu Sand wird."],
    body: [
      "Hinter den letzten Palmen des Drâa-Tals öffnet sich das Land, und der Horizont übernimmt. Hier liegt die Auberge Tigida, im Dorf Douar Bounou, auf der Seite des Erg Chigaga bei M’Hamid El Ghizlane.",
      "Ein Haus zum Ankommen. Zum etwas länger Bleiben als geplant.",
    ],
    captionMain: "Palmenhain, Drâa-Tal",
    captionSmall: "Mittag, der Innenhof",
  },
  house: {
    label: "02 — Das Haus",
    title: "Das Haus",
    pull: "Dicke Mauern. Langsame Nachmittage. Schatten, der mit den Stunden wandert.",
    body: "Das Haus versteht man, wenn man Zeit darin verbringt — mittags im Innenhof, auf einer Bank, wenn die Schatten länger werden, in der Kühle der Zimmer. [Beschreibung des Hauses, seiner Räume und Geschichte folgt durch die Gastgeber.]",
    captions: ["Innenhof", "Mauer, späte Sonne", "Gewebte Wolle"],
  },
  rooms: {
    label: "03 — Zimmer",
    title: "Zimmer zum Ausruhen.",
    intro: "Einfache Zimmer, gemacht, um nach einem langen Tag voller Licht gut zu schlafen.",
    room: "Zimmer",
    name: "[Name des Zimmers]",
    guests: "[Gäste]",
    bed: "[Bett]",
    bath: "[Bad]",
    note: "[Kurzbeschreibung folgt]",
  },
  hosts: {
    label: "04 — Corinne & Sofian",
    title: ["Tigida ist ein Ort,", "den Menschen machen."],
    body: "Ein Gästehaus sind seine Gastgeber ebenso wie seine Mauern. Corinne und Sofian empfangen ihre Gäste in Tigida.",
    bio: "[Ein paar Worte über Corinne und Sofian, in ihren eigenen Worten, folgen.]",
    portraitNote: "[Porträt von Corinne & Sofian]",
  },
  desert: {
    label: "05 — Die Wüste",
    title: ["Was die Wüste", "öffnet."],
    intro: "Jenseits des Hauses spricht das Land. Einige Wege hinein.",
    items: {
      chigaga: { title: "Erg Chigaga", text: "Die grossen Dünen, von hier am Horizont." },
      camel: { title: "Zu Fuss, mit Kamelen", text: "Das Tempo des Tieres, das Tempo des Landes." },
      camp: { title: "Eine Nacht draussen", text: "Schlafen, wo der Sand still wird." },
      walking: { title: "Gehen", text: "Morgens, vor der Hitze, ohne Ziel." },
      village: { title: "Dorfleben", text: "Der Rhythmus von Douar Bounou, Tag für Tag." },
      palms: { title: "Der Palmenhain", text: "Schatten, Wasser, Grün gegen Ocker." },
      stars: { title: "Sterne", text: "Wenn das Licht geht, kommt der Himmel." },
      cooking: { title: "Kochen", text: "Ums Feuer, um den Tisch." },
      music: { title: "Musik", text: "Abende, die lang werden." },
      fourbyfour: { title: "4×4-Ausflüge", text: "[Details folgen]" },
    },
    toCome: "Folgt",
  },
  fragments: { label: "Fragmente", lines: ["Tee, von hoch oben gegossen.", "Wolle unter der Hand.", "Gespräche, lange nach dem Essen."] },
  gallery: { label: "06 — Galerie", title: "Notizen vom Rand.", open: "Bild öffnen", close: "Schliessen", prev: "Zurück", next: "Weiter" },
  stay: {
    label: "07 — Aufenthalt",
    title: ["Bleiben Sie", "eine Weile."],
    intro: "Sagen Sie uns, wann Sie kommen möchten. Wir antworten persönlich.",
    arrival: "Anreise",
    departure: "Abreise",
    guests: "Gäste",
    name: "Name",
    email: "E-Mail",
    whatsapp: "WhatsApp",
    message: "Nachricht",
    optional: "optional",
    submit: "Aufenthalt anfragen",
    notConnected: "Danke. Online-Anfragen sind noch nicht aktiv — bitte senden Sie Ihre Daten vorerst per WhatsApp.",
    or: "oder",
    whatsappCta: "Per WhatsApp schreiben",
    alsoOn: "Sie finden uns auch auf",
    whatsappGreeting: "Hallo Tigida — ich möchte nach einem Aufenthalt fragen.",
  },
  footer: { placeholderNote: "Die Fotografien auf dieser Website sind Platzhalter und zeigen nicht die Auberge Tigida.", rights: "Alle Rechte vorbehalten." },
  placeholderImage: "Platzhalterbild",
  legal: {
    title: "Mentions légales",
    intro: "Impressum. Die folgenden Angaben sind Platzhalter und werden ergänzt.",
    sections: [
      { h: "Herausgeber", items: ["[Firmenname]", "[Rechtsform und Registernummer]", "[Anschrift]", "[E-Mail / Telefon]", "[Verantwortlich für den Inhalt]"] },
      { h: "Hosting", items: ["[Name des Hosting-Anbieters]", "[Anschrift des Hosting-Anbieters]"] },
      { h: "Fotografie", items: ["[Bildnachweise]", "Vorübergehend werden Platzhalterfotos (Unsplash) und generierte Bilder verwendet."] },
      { h: "Datenschutz", items: ["[Datenschutzerklärung folgt]"] },
    ],
    back: "Zurück zu Tigida",
  },
};

const es: Dict = {
  ...en,
  htmlLang: "es",
  meta: {
    title: "Auberge Tigida — Una casa al borde del desierto, M’Hamid, Marruecos",
    description:
      "Auberge Tigida es una casa de huéspedes independiente en Douar Bounou, M’Hamid El Ghizlane, del lado del Erg Chigaga, en el valle del Drâa. Anfitriones: Corinne y Sofian.",
    legalTitle: "Aviso legal — Auberge Tigida",
    legalDescription: "Aviso legal del sitio web de Auberge Tigida.",
  },
  nav: {
    menu: "Menú",
    close: "Cerrar",
    items: { tigida: "Tigida", house: "La casa", rooms: "Habitaciones", hosts: "Corinne y Sofian", desert: "Desierto", gallery: "Galería", stay: "Estancia" },
    contact: "Contacto",
    legal: "Mentions légales",
    day: "Día",
    night: "Noche",
    skip: "Ir al contenido",
  },
  hero: { kicker: "Douar Bounou · Sur de Marruecos", line1: "Un lugar al", line2: "borde del desierto.", scroll: "Llegar despacio" },
  clock: { now: "ahora en M’Hamid", phases: { dawn: "primera luz", day: "pleno sol", dusk: "la luz cambia", night: "noche y estrellas" } },
  place: {
    label: "01 — Tigida",
    title: ["Donde el camino", "se vuelve arena."],
    body: [
      "Tras las últimas palmeras del valle del Drâa, la tierra se abre y el horizonte lo ocupa todo. Aquí está Auberge Tigida, en el pueblo de Douar Bounou, del lado del Erg Chigaga, en M’Hamid El Ghizlane.",
      "Una casa a la que llegar. Donde quedarse un poco más de lo previsto.",
    ],
    captionMain: "Palmeral, valle del Drâa",
    captionSmall: "Mediodía, el patio",
  },
  house: {
    label: "02 — La casa",
    title: "La casa",
    pull: "Muros gruesos. Tardes lentas. Una sombra que se mueve con las horas.",
    body: "La casa se entiende pasando tiempo en ella — en el patio a mediodía, en un banco cuando las sombras se alargan, en el fresco de las habitaciones. [Descripción de la casa, sus espacios e historia, a cargo de los anfitriones.]",
    captions: ["Patio", "Muro, sol bajo", "Lana tejida"],
  },
  rooms: {
    label: "03 — Habitaciones",
    title: "Habitaciones para descansar.",
    intro: "Habitaciones sencillas, hechas para dormir bien tras un largo día de luz.",
    room: "Habitación",
    name: "[Nombre de la habitación]",
    guests: "[Personas]",
    bed: "[Cama]",
    bath: "[Baño]",
    note: "[Breve descripción próximamente]",
  },
  hosts: {
    label: "04 — Corinne y Sofian",
    title: ["Tigida es un lugar", "hecho por personas."],
    body: "Una casa de huéspedes son sus anfitriones tanto como sus muros. Corinne y Sofian reciben a los viajeros en Tigida.",
    bio: "[Unas palabras sobre Corinne y Sofian, con su propia voz, próximamente.]",
    portraitNote: "[Retrato de Corinne y Sofian]",
  },
  desert: {
    label: "05 — El desierto",
    title: ["Lo que el desierto", "abre."],
    intro: "Más allá de la casa, habla la tierra. Algunas maneras de entrar en ella.",
    items: {
      chigaga: { title: "Erg Chigaga", text: "Las grandes dunas, en el horizonte desde aquí." },
      camel: { title: "A pie, con dromedarios", text: "El paso del animal, el paso del paisaje." },
      camp: { title: "Una noche allí", text: "Dormir donde la arena calla." },
      walking: { title: "Caminar", text: "Por la mañana, antes del calor, sin prisa." },
      village: { title: "La vida del pueblo", text: "El ritmo de Douar Bounou, día a día." },
      palms: { title: "El palmeral", text: "Sombra, agua, verde contra ocre." },
      stars: { title: "Estrellas", text: "Cuando se va la luz, llega el cielo." },
      cooking: { title: "Cocinar", text: "Alrededor del fuego, alrededor de la mesa." },
      music: { title: "Música", text: "Noches que se alargan." },
      fourbyfour: { title: "Excursiones en 4×4", text: "[Detalles por confirmar]" },
    },
    toCome: "Próximamente",
  },
  fragments: { label: "Fragmentos", lines: ["Té, servido desde lo alto.", "Lana bajo la mano.", "Conversación, mucho después de cenar."] },
  gallery: { label: "06 — Galería", title: "Notas desde el borde.", open: "Abrir imagen", close: "Cerrar", prev: "Anterior", next: "Siguiente" },
  stay: {
    label: "07 — Estancia",
    title: ["Ven a quedarte", "un tiempo."],
    intro: "Cuéntanos cuándo te gustaría venir. Te responderemos personalmente.",
    arrival: "Llegada",
    departure: "Salida",
    guests: "Personas",
    name: "Nombre",
    email: "Correo",
    whatsapp: "WhatsApp",
    message: "Mensaje",
    optional: "opcional",
    submit: "Solicitar estancia",
    notConnected: "Gracias. Las solicitudes en línea aún no están activas — por ahora, envíanos tus fechas por WhatsApp.",
    or: "o",
    whatsappCta: "Escríbenos por WhatsApp",
    alsoOn: "También en",
    whatsappGreeting: "Hola Tigida — quisiera preguntar por una estancia.",
  },
  footer: { placeholderNote: "Las fotografías de este sitio son provisionales y no muestran Auberge Tigida.", rights: "Todos los derechos reservados." },
  placeholderImage: "Imagen provisional",
  legal: {
    title: "Mentions légales",
    intro: "Aviso legal. La información siguiente es provisional y se completará.",
    sections: [
      { h: "Editor", items: ["[Razón social]", "[Forma jurídica y número de registro]", "[Domicilio]", "[Correo / teléfono]", "[Responsable de la publicación]"] },
      { h: "Alojamiento web", items: ["[Proveedor de alojamiento]", "[Dirección del proveedor]"] },
      { h: "Fotografía", items: ["[Créditos fotográficos]", "Se utilizan temporalmente fotografías provisionales (Unsplash) e imágenes generadas."] },
      { h: "Datos personales", items: ["[Política de privacidad pendiente]"] },
    ],
    back: "Volver a Tigida",
  },
};

export const dictionaries: Record<Locale, Dict> = { en, fr, de, es };

export const homePath = (l: Locale) => (l === "en" ? "/" : `/${l}`);
export const legalPath = (l: Locale) => (l === "en" ? "/mentions-legales" : `/${l}/mentions-legales`);

export function localeHead(l: Locale, kind: "home" | "legal") {
  const d = dictionaries[l];
  const title = kind === "home" ? d.meta.title : d.meta.legalTitle;
  const description = kind === "home" ? d.meta.description : d.meta.legalDescription;
  const ogLocale = { en: "en_GB", fr: "fr_FR", de: "de_DE", es: "es_ES" }[l];
  const meta: Record<string, string>[] = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: ogLocale },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
  if (kind === "legal") meta.push({ name: "robots", content: "noindex" });
  if (kind === "home") {
    const img = "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&w=1200&q=72";
    meta.push({ property: "og:image", content: img }, { name: "twitter:image", content: img });
  }
  const links = LOCALES.map((x) => ({
    rel: "alternate",
    hrefLang: x,
    href: kind === "home" ? homePath(x) : legalPath(x),
  }));
  return { meta, links };
}
