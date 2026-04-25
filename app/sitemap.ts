import type { MetadataRoute } from "next";

const BASE = "https://strechacentrum.sk";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/produkty-sluzby/tvrde-krytiny`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/produkty-sluzby/plechove-krytiny`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/produkty-sluzby/rovne-krytiny`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/produkty-sluzby/odkvapovy-system`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/produkty-sluzby/stresne-okna`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/produkty-sluzby/ostatne`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/strechy-na-mieru`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/referencie`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/kontakt`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE}/ochrana-osobnych-udajov`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];
}
