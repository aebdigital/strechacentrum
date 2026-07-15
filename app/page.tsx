import Image from "next/image";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Faq } from "@/components/Faq";
import { FadeIn } from "@/components/FadeIn";
import { RollLink } from "@/components/RollButton";
import { FaqSchema } from "@/components/Schema";
import { partners } from "@/lib/site";

const galleryImages = [
  "img_1030",
  "img_1040",
  "img_1045",
  "img_1010",
  "img_1005",
  "img_1049",
  "img_1001",
  "img_1002",
  "img_1004",
  "img_1007",
  "img_1008",
];

export default function Home() {
  return (
    <>
      <FaqSchema />
      <Hero />

      {/* Sections after hero have solid bg so they slide over the fixed parallax hero bg */}
      <div className="relative z-10 bg-paper">
        {/* About */}
        <section id="about" className="py-20 lg:py-28 bg-paper">
          <div className="w-[90vw] lg:max-w-[90vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <span className="text-brand uppercase tracking-widest text-sm font-medium">
                — Kto sme
              </span>
              <div className="mt-2 mb-8">
                <SectionTitle>O nás</SectionTitle>
              </div>
              <div className="space-y-5 text-ink/80 leading-relaxed">
                <p>
                  Zaoberáme sa predajom a kompletnou realizáciou strešných
                  krytín vrátane doplnkov a príslušenstva. Odborné poradenstvo
                  od profesionálov. Možnosť dodávky a montáže kdekoľvek. Pri
                  výkone práce dodržiavame najnovšie stavebné procesy.
                </p>
                <p>
                  Strechy na kľúč, poradenstvo, predaj, projekcia a realizácia.{" "}
                  <strong>
                    Kvalita a spokojnosť zákazníkov sú pre nás prvoradé
                  </strong>{" "}
                  – každý projekt realizujeme s maximálnou starostlivosťou.
                </p>
              </div>
              <div className="mt-8">
                <RollLink href="/kontakt" variant="dark">
                  Kontaktovať nás
                </RollLink>
              </div>
            </FadeIn>

            <FadeIn delay={120}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl group">
                <Image
                  src="/sources/img_1033.jpg"
                  alt="KSK Trading strešné krýtiny"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Stats Overlay */}
                <div className="absolute top-4 right-4 lg:top-8 lg:right-8 flex flex-col gap-3 z-20">
                  <div className="bg-ink/90 backdrop-blur-md p-4 lg:p-5 min-w-[140px] lg:min-w-[160px] border-r-4 border-brand shadow-2xl">
                    <div className="text-2xl lg:text-3xl font-bold text-brand">
                      2500+
                    </div>
                    <div className="text-[10px] lg:text-xs uppercase tracking-widest text-white/60 mt-1">
                      realizácií
                    </div>
                  </div>
                  <div className="bg-brand p-4 lg:p-5 min-w-[140px] lg:min-w-[160px] shadow-2xl">
                    <div className="text-2xl lg:text-3xl font-bold text-white">
                      19+
                    </div>
                    <div className="text-[10px] lg:text-xs uppercase tracking-widest text-white/90 mt-1">
                      rokov skúseností
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-20 lg:py-28 bg-stone">
          <div className="w-[90vw] lg:max-w-[90vw] mx-auto">
            <FadeIn className="mb-12 text-center">
              <SectionTitle>Galéria</SectionTitle>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {galleryImages.map((name, i) => (
                <a
                  key={name}
                  href="/referencie"
                  className="group relative aspect-square overflow-hidden bg-ink block"
                >
                  <Image
                    src={`/sources/${name}.jpg`}
                    alt="Realizácia"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    priority={i < 4}
                    className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-80"
                  />
                </a>
              ))}
              <a
                href="/referencie"
                className="aspect-square bg-brand text-white flex flex-col items-center justify-center font-semibold uppercase tracking-wider text-sm hover:bg-brand-dark transition-colors gap-3"
              >
                Všetky projekty
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section id="partners" className="py-20 lg:py-28 bg-paper">
          <div className="w-[90vw] lg:max-w-[90vw] mx-auto">
            <FadeIn className="mb-12 text-center">
              <SectionTitle>Partneri</SectionTitle>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
              {Object.values(partners).map((cat, idx) => (
                <FadeIn key={cat.title} delay={idx * 80}>
                  <div className="h-full">
                    <h3 className="text-2xl font-bold mb-6 text-ink">
                      {cat.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {cat.logos.map((l) => (
                        <div
                          key={l.src}
                          className="bg-white p-2 border border-ink/5 flex items-center justify-center h-16 w-28 hover:border-brand hover:shadow-lg transition-all duration-300"
                        >
                          <Image
                            src={`/partneri/${cat.folder}/${l.src}`}
                            alt={l.alt}
                            width={100}
                            height={50}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <Faq />
      </div>
    </>
  );
}
