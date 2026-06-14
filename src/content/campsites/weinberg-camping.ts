import type { CampsiteConfig } from "../types";

const IMG = "/campsites/weinberg-camping";

const weinbergCamping: CampsiteConfig = {
  name: "Weinberg Panorama Camping",
  shortName: "Weinberg",
  slug: "weinberg-camping",
  ort: "St. Andrä-Höch",
  region: "Steiermark",
  brandKind: "Panorama-Camping",
  regionLong: "Sausal · Südsteiermark · Österreich",

  heroVariant: "center",

  claim: "Panorama-Camping in der steirischen Toskana",
  claimEmphasis: "steirischen Toskana",
  emailDetail: "euer Panoramablick über die Weinberge bis nach Slowenien",
  intro:
    "Auf 542 Höhenmetern in der Naturpark-Gemeinde Sankt Andrä im Sausal liegt dein Platz mitten in den Weingärten — mit einem Panoramablick, der bei klarem Wetter bis nach Slowenien und Kärnten reicht.",

  logo: { src: `${IMG}/logo.png`, alt: "Weinberg Panorama Camping Logo" },

  statement: {
    text: "Jeder Platz wurde so angelegt, dass du von deinem Stellplatz aus das volle Panorama genießt.",
    emphasis: "volle Panorama",
  },

  pillars: [
    {
      title: "Das große Panorama",
      text: "Der weite Blick über Reben und Hügel ist das Aushängeschild des Platzes — bei klarer Sicht bis nach Slowenien und Kärnten.",
      image: { src: `${IMG}/panorama-stellplatz.webp`, alt: "Stellplätze mit Panoramablick über die Weinberge" },
    },
    {
      title: "Mitten in den Weingärten",
      text: "Eingebettet zwischen Weingärten und Buschenschänken liegt die südsteirische Toskana direkt vor dem Vorzelt.",
      image: { src: `${IMG}/luftbild-weinberge.webp`, alt: "Luftaufnahme: Weinberg Panorama Camping inmitten der Weingärten" },
    },
    {
      title: "Wein & Genuss",
      text: "Die Rezeption ist zugleich eine Vinothek mit erlesenen Weinen, dazu selbstgemachtes steirisches Kürbiskernöl, Schnäpse und Liköre.",
      image: { src: `${IMG}/vinothek.webp`, alt: "Vinothek mit steirischen Weinen an der Rezeption" },
    },
  ],

  usps: [
    "Panorama von jedem Platz",
    "Mitten in den Weingärten",
    "Whirlpool & Sauna inklusive",
    "Außenpool zur Abkühlung",
    "Eigene Vinothek",
    "Hunde willkommen",
  ],

  trust: {
    heading: "Oben am Sausal beginnt dein Urlaub",
    headingEmphasis: "am Sausal",
    intro:
      "Gäste schätzen die ruhige Lage über den Weingärten, die freundliche Betreuung durch Platzwart Engelbert und ein Panorama, das man so schnell nicht vergisst — ein kleines Paradies, in das man gerne wiederkommt.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/panorama-aussicht.webp`, alt: "Panoramablick über die Weinberge der Südsteiermark" },
    sunset: { src: `${IMG}/sunset.webp`, alt: "Sonnenuntergang über den Hügeln des Sausal" },
  },

  breather: {
    image: { src: `${IMG}/nebelmeer.webp`, alt: "Nebelmeer im Tal unterhalb des Campingplatzes" },
    line: "Morgens liegt der Nebel im Tal — und du stehst längst darüber.",
  },

  camping: {
    heading: "Camping über den Weinbergen",
    intro:
      "Vom Stellplatz schweift der Blick über Reben und Hügel — Whirlpool, Sauna und Außenpool sind für unsere Gäste inklusive, Strom und Wasser gibt es auf jedem Platz.",
    features: [
      {
        title: "Außenpool zur Abkühlung",
        text: "Ein kleiner Pool sorgt an heißen Tagen für die nötige Erfrischung — mit Blick über die Weingärten.",
        image: { src: `${IMG}/aussenpool.webp`, alt: "Außenpool mit Blick über die Weinberge" },
      },
      {
        title: "Sauna mit Holzofen",
        text: "Vom gemütlichen Aufenthaltsraum gelangst du in die Sauna mit echtem Holzofen — wohlige Wärme nach einem Tag im Freien.",
        image: { src: `${IMG}/sauna.webp`, alt: "Sauna mit Holzofen am Campingplatz" },
      },
      {
        title: "Strom & Wasser am Platz",
        text: "Jeder Stellplatz hat Strom- und Wasseranschluss, Chemietoiletten-Entsorgung und einen Geschirr-Abwaschplatz.",
        image: { src: `${IMG}/stellplatz.webp`, alt: "Stellplatz mit Strom- und Wasseranschluss" },
      },
      {
        title: "Whirlpool inklusive",
        text: "Der Whirlpool im rustikalen Grottenraum steht allen Gästen kostenlos zur Verfügung — Wellness gehört hier einfach dazu.",
        image: { src: `${IMG}/whirlpool.webp`, alt: "Whirlpool im Grottenraum des Weinberg Panorama Camping" },
      },
      {
        title: "Hundepool für Vierbeiner",
        text: "Auch deine lieben Vierbeiner dürfen sich abkühlen — ein eigener kleiner Hundepool steht für sie bereit.",
        image: { src: `${IMG}/hundepool.webp`, alt: "Hund kühlt sich im Hundepool ab" },
      },
      {
        title: "Rustikaler Aufenthaltsraum",
        text: "Im gemütlichen, rustikalen Aufenthaltsraum findest du Platz zum Verweilen — und rund um die Uhr gekühlte Getränke.",
        image: { src: `${IMG}/aufenthaltsraum.webp`, alt: "Gemütlicher Aufenthaltsraum mit Sofas und Grotte" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Rund um den Demmerkogel",
    intro:
      "Wandern, Radeln und einkehren: Weinlehrpfad, Aussichtswarte und der größte Klapotetz der Welt liegen direkt vor der Tür.",
    items: [
      {
        title: "Der größte Klapotetz der Welt",
        text: "Nur 700 Meter entfernt steht der weltgrößte funktionstüchtige Klapotetz — das Wahrzeichen der Gegend.",
        image: { src: `${IMG}/klapotetz.webp`, alt: "Weltgrößter funktionstüchtiger Klapotetz am Demmerkogel" },
      },
      {
        title: "Wandern zur Aussichtswarte",
        text: "In rund 30 Minuten erreichst du die 30 Meter hohe Aussichtswarte mit Panoramablick bis 500 km.",
        image: { src: `${IMG}/panorama-wandern.webp`, alt: "Weite Hügellandschaft des Sausal beim Wandern" },
      },
      {
        title: "Radwandern im Sulmtal",
        text: "Der bekannte Sulmtal-Radwanderweg liegt in der Nähe — und wer mehr will, findet in den Weinbergen jede Menge fordernde Anstiege.",
        image: { src: `${IMG}/radwandern.webp`, alt: "Radfahrer beim Klapotetz in den Weinbergen" },
      },
    ],
  },

  anreise: {
    heading: "Hinauf in den Sausal",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A9 bis Abfahrt Leibnitz, dann durch die Sausaler Weinstraße hinauf nach Höch — die letzten Kilometer sind kurvig und schön.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Leibnitz an der Südbahn, von dort rund 20 Minuten hinauf zum Platz — eine Taxistation steht zur Verfügung.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Flughafen Graz-Thalerhof, von dort etwa 40 Minuten mit dem Auto in den Sausal.",
      },
    ],
  },

  galerie: {
    heading: "Impressionen aus dem Sausal",
    headingEmphasis: "Sausal",
    intro: "Weite Blicke, gemütliche Plätze und steirische Genüsse — ein paar Eindrücke vom Weinberg Panorama Camping.",
    tag: "Steirische Toskana",
    moreCount: 12,
    images: [
      { src: `${IMG}/blick-vom-platz.webp`, alt: "Blick vom Stellplatz über die Hügel der Südsteiermark" },
      { src: `${IMG}/strandkoerbe.webp`, alt: "Strandkörbe zum Verweilen am Campingplatz" },
      { src: `${IMG}/terrasse.webp`, alt: "Überdachte Terrasse mit Panoramablick" },
      { src: `${IMG}/kuerbiskernoel.webp`, alt: "Selbstgemachtes steirisches Kürbiskernöl" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Panoramaplatz",
    headingEmphasis: "Panoramaplatz",
    intro:
      "Sag uns Zeitraum und Personenzahl — Josefa und Engelbert Uhl melden sich persönlich bei dir mit der Verfügbarkeit.",
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 30 },
      { id: "ferienhaus", label: "Ferienhaus Uhl (bis 6 Personen)" },
    ],
    pricesArePlaceholder: false,
    priceNote:
      "Stellplatz ab € 30 pro Nacht (ab 2 Nächten) inkl. Wasser, Entsorgung, Whirlpool, Sauna, Außenpool & Bäckerservice · Einzelnacht € 32 · Strom € 0,60/kWh · Ortstaxe € 2 pro Person und Nacht · Ferienhaus auf Anfrage.",
    highlight: {
      title: "Wellness inklusive",
      text: "Whirlpool, Sauna und Außenpool nutzt du ohne Aufpreis.",
    },
  },

  kontakt: {
    coords: { lat: 46.797857, lng: 15.423131 },
    tel: "+43 664 4457184",
    telHref: "tel:+436644457184",
    mail: "office@weinberg-camping.at",
    adresse: "Höch 93 · 8444 St. Andrä-Höch · Steiermark",
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Ausstattung", href: "#camping" },
        { label: "Wellness", href: "#camping" },
      ],
    },
    { label: "Umgebung", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Preise & Anreise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default weinbergCamping;
