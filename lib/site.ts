export const site = {
  company: "KSK Trading s.r.o.",
  tagline: "Profesionálne strechy pre každého",
  url: "https://strechacentrum.sk",
  address: {
    street: "Tolstého 2785/7",
    city: "Humenné",
    zip: "066 01",
    country: "Slovenská republika",
    mapsUrl:
      "https://maps.google.com/?q=Tolstého+2785/7,+066+01+Humenné",
  },
  contact: {
    name: "Ing. Čerevka Ivan",
    phones: ["+421 917 799 650", "+421 917 927 680"],
    email: "cerevka@strechacentrum.sk",
  },
  hours: {
    days: "Pondelok – Piatok",
    time: "08:00 – 17:00",
  },
  ico: "45495629",
  icDph: "SK 2023011210",
} as const;

export const partners = {
  tvrde: {
    slug: "tvrde-krytiny",
    title: "Tvrdé krytiny",
    folder: "tvrde-krytiny",
    image: "/sources/produkty/tvrde.jpeg",
    description: "Kompletná ponuka tvrdých strešných krytín od popredných výrobcov.",
    paragraphs: [
      "Vykonávame kladenie striech podľa dostupných technických zásad. U našich zákazníkov prevažujú krytiny keramické, vláknocementové, betónové, z prírodnej bridlice, z drevených šindľov a dosky.",
      "Kladieme dôraz na kvalitu nami dodaného materiálu a prevedenie strechy tak, aby finálna konštrukcia spĺňala udávané normy výrobcov.",
    ],
    logos: [
      { src: "tondach2.png", alt: "Tondach" },
      { src: "bramac.png", alt: "Bramac" },
      { src: "mediterran.png", alt: "Mediterran" },
      { src: "roben.png", alt: "Roben" },
      { src: "creaton.png", alt: "Creaton" },
    ],
  },
  plechove: {
    slug: "plechove-krytiny",
    title: "Plechové krytiny",
    folder: "plechove-krytiny",
    image: "/sources/produkty/plechove.jpg",
    description: "Ľahké a odolné plechové krytiny pre moderné aj tradičné stavby.",
    paragraphs: [
      "Plechová krytina patrí medzi najčastejšie využívané krytiny pri rodinných domoch ako aj verejných budovách.",
      "Táto krytina sa môže strihať na požadovanú dĺžku, čo umožňuje realizáciu špecifických individuálnych objednávok. Charakteristická ľahkosťou – 1 m² váži približne 4,5 kg.",
    ],
    logos: [
      { src: "satjam.png", alt: "Satjam" },
      { src: "rukki.png", alt: "Rukki" },
      { src: "lindab.png", alt: "Lindab" },
      { src: "regamet.png", alt: "Regamet" },
      { src: "blachprofil2.png", alt: "Blachprofil2" },
    ],
  },
  rovne: {
    slug: "rovne-krytiny",
    title: "Rovné krytiny",
    folder: "rovne-krytiny",
    image: "/sources/produkty/rovna.jpg",
    description: "Profesionálne riešenia pre ploché a rovné strechy s dôrazom na hydroizoláciu.",
    paragraphs: [
      "Táto horizontálna obvodová strešná konštrukcia sa skladá z viacerých vrstiev. Plochá strecha má sklon 3 až 10 stupňov.",
      "Zabezpečujeme minimálne spadovanie, aby sa na streche nemohla hromadiť mrznúca voda a nevznikali podmienky pre možný rast rias.",
    ],
    logos: [
      { src: "vinitex.png", alt: "Vinitex" },
      { src: "fatrafol.png", alt: "Fatrafol" },
    ],
  },
  odkvap: {
    slug: "odkvapovy-system",
    title: "Odkvapový systém",
    folder: "odkvapovy-system",
    image: "/sources/produkty/odkvap.jpg",
    description: "Kvalitné odkvapové systémy s dlhou životnosťou a protikoróznou úpravou.",
    paragraphs: [
      "Ponúkané odkvapové systémy sú vysoko kvalitným zvodovým systémom. Charakteristickým prvkom je viacnásobná protikorózna úprava.",
      "Naše systémy vynikajú atraktívnym vzhľadom, dlhoročnou životnosťou s minimálnymi nákladmi na údržbu.",
    ],
    logos: [
      { src: "kjg.png", alt: "KJG" },
      { src: "lamina.png", alt: "Lamina Prešov" },
    ],
  },
  okna: {
    slug: "stresne-okna",
    title: "Strešné okná",
    folder: "stresne-okna",
    image: "/sources/produkty/okna.webp",
    description: "Široký výber strešných okien, svetlíkov a doplnkov od popredných výrobcov.",
    paragraphs: [
      "Ponúkame strešné okná, svetlíky, strešné balkóny a terasy, svetlovody, strešné výlezy, žalúzie, rolety, solárne kolektory a ďalšie.",
      "Všetky produkty sú od overených výrobcov s dlhoročnou zárukou kvality.",
    ],
    logos: [
      { src: "roto.png", alt: "Roto" },
      { src: "velux.png", alt: "Velux" },
      { src: "fakro.png", alt: "Fakro" },
      { src: "rooflite.png", alt: "Rooflite" },
      { src: "dakea.png", alt: "Dakea" },
    ],
  },
  ostatne: {
    slug: "ostatne",
    title: "Ostatné",
    folder: "ostatne",
    image: "/sources/produkty/okna.webp",
    description: "Doplnkové služby a produkty pre vašu strechu vrátane komínových systémov.",
    paragraphs: [
      "Poskytujeme komplexné poradenstvo a realizáciu rôznych doplnkových prvkov pre strechy.",
      "Špecializované riešenia pre vaše strešné potreby s dôrazom na kvalitu a funkcionalitu.",
    ],
    logos: [
      { src: "schiedel.png", alt: "Schiedel" },
      { src: "porotherm.png", alt: "Porotherm" },
      { src: "baumit.png", alt: "Baumit" },
      { src: "knaufinsulation.png", alt: "Knauf Insulation" },
    ],
  },
} as const;

export const testimonials = [
  {
    initials: "RŽ",
    name: "Roman Žažo",
    quote:
      "Maximálna spokojnosť a profesionalita s dodávkou aj montážou.",
  },
  {
    initials: "MB",
    name: "Martin Beko",
    quote:
      "Profesionálny prístup, rýchle dodanie a kvalitné spracovanie rovnej väzníkovej strechy.",
  },
  {
    initials: "TB",
    name: "Tibor Barborik",
    quote:
      "Príjemný kolektív, veľmi pružná reakcia. Čo sa týka materiálov hodnotím vysoká kvalita a spokojnosť. Príjemne som prekvapený.",
  },
  {
    initials: "RB",
    name: "Robert Brezovský",
    quote:
      "Od začiatku komunikácie až po montáž – čistá profesionalita. Montáž bola jeden zladený orchester.",
  },
  {
    initials: "MK",
    name: "Mária Kvočkuliaková",
    quote: "Všetko super – termín aj kvalita. Odporúčam.",
  },
];

export const faqItems = [
  {
    q: "Je čas na rekonštrukciu resp. novú strechu?",
    a: "V prípade poškodenia vodou na vnútorných stenách je nutné opraviť netesnosti. Ak máte viditeľné problémy typu poškodená krytina či znehodnotené oplechovanie, je vhodné uvažovať nad výmenou starej strechy za novú.",
  },
  {
    q: "Môžem si dovoliť rekonštrukciu strechy?",
    a: "Po vykonaní obhliadky Vám vystavíme najvhodnejšiu ponuku. Náklady na rekonštrukciu sú individuálne.",
  },
  {
    q: "V ktorom mesiaci je vhodné pracovať na oprave strechy?",
    a: "Väčšina projektov sa realizuje v letnom období. V prípade dostupnosti strechy je možné realizovať stavby aj v inom období – ak máte určený termín, vieme spoločne nájsť riešenie.",
  },
  {
    q: "Aké záruky dávate na strešné systémy?",
    a: "Na každý produkt poskytujeme minimálne 15 ročnú záruku. V prípade strechy poskytujeme kompletnú záruku na všetky komponenty a práce.",
  },
  {
    q: "Koľko trvá realizácia novej strechy?",
    a: "Doba realizácie závisí od veľkosti a zložitosti projektu. Bežne trvá realizácia 3 – 10 pracovných dní v závislosti od počasia a rozsahu prác.",
  },
  {
    q: "Poskytujete bezplatné konzultácie a cenové ponuky?",
    a: "Áno, poskytujeme bezplatné konzultácie a vypracovanie cenových ponúk. Naši odborníci radi navštívia vašu nehnuteľnosť a poskytnú profesionálne poradenstvo.",
  },
];

export const navLinks = [
  { href: "/", label: "Domov" },
  { href: "/strechy-na-mieru", label: "Strechy na mieru" },
  { href: "/referencie", label: "Referencie" },
  { href: "/kontakt", label: "Kontakt" },
];

export const galleryImageNumbers = Array.from(
  { length: 49 },
  (_, i) => i + 1
);
