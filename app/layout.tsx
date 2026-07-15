import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Cookies } from "@/components/Cookies";
import { LocalBusinessSchema } from "@/components/Schema";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f5821e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://strechacentrum.sk"),
  title: {
    default: "Profesionálne strechy pre každého. KSK Trading s.r.o.",
    template: "%s | KSK Trading s.r.o.",
  },
  description:
    "KSK Trading s.r.o. – profesionálna realizácia strešných krytín, predaj a montáž. Možnosť dodávky a montáže kdekoľvek.",
  applicationName: "KSK Trading s.r.o.",
  keywords: [
    "strechy na kľúč",
    "strešné krytiny",
    "pokrývačstvo",
    "Tondach",
    "Bramac",
    "plechové krytiny",
    "ploché strechy",
    "strešné okná",
    "Humenné",
    "KSK Trading",
    "strechácentrum",
  ],
  authors: [{ name: "KSK Trading s.r.o." }],
  creator: "KSK Trading s.r.o.",
  publisher: "KSK Trading s.r.o.",
  category: "Construction",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "https://strechacentrum.sk",
    siteName: "KSK Trading s.r.o.",
    title: "Profesionálne strechy pre každého. KSK Trading s.r.o.",
    description:
      "Profesionálna realizácia strešných krytín. Humenné a celé Slovensko.",
    images: [
      { url: "/logo.png", width: 1200, height: 630, alt: "KSK Trading s.r.o." },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KSK Trading s.r.o. – Strechy na kľúč",
    description:
      "Profesionálna realizácia strešných krytín vrátane doplnkov a príslušenstva.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  formatDetection: { telephone: true, email: true, address: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sk" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-ink">
        <LocalBusinessSchema />
        <SmoothScroll />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Cookies />
      </body>
    </html>
  );
}
