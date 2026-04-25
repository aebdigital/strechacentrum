import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Faq } from "@/components/Faq";
import { SectionTitle } from "@/components/SectionTitle";
import { FadeIn } from "@/components/FadeIn";
import { RollAnchor } from "@/components/RollButton";
import { BreadcrumbSchema, FaqSchema } from "@/components/Schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Strechy na mieru - Individuálne riešenia a realizácia",
  description:
    "Kompletné strechy na mieru podľa vašich potrieb. Od cenovej ponuky a konzultácie až po profesionálnu realizáciu krovu a krytiny v Humennom a okolí.",
  alternates: { canonical: "/strechy-na-mieru" },
};

const steps = [
  { title: "Nezáväzná ponuka", img: "/sources/img_1030.jpg" },
  { title: "Konzultácia jednotlivých položiek ponuky", img: "/sources/img_1035.jpg" },
  { title: "Realizácia stavby", img: "/sources/img_1040.jpg" },
  { title: "Odovzdanie projektu a spokojnosť zákazníka", img: "/sources/img_1045.jpg" },
];

const services = [
  "Vyhotovenie rozpisu potrebného materiálu",
  "Zhotovenie krovu (možnosť hobľovaný / atypický)",
  "Zabezpečenie a montáž strešnej krytiny spolu s doplnkami",
  "Zhotovenie impregnovaného reziva na krov",
  "Montáž a zabezpečenie odkvapového systému",
  "Realizujeme aj zateplenie a podbitie krovu",
  "Vrátane dopravy materiálu na miesto uskutočnenia stavby",
];

export default function Page() {
  return (
    <>
      <FaqSchema />
      <BreadcrumbSchema
        items={[
          { name: "Domov", url: "/" },
          { name: "Strechy na mieru", url: "/strechy-na-mieru" },
        ]}
      />
      
      <PageHero title="Strechy na mieru" />

      <section className="py-20 lg:py-28 bg-paper overflow-hidden">
        <div className="w-[90vw] lg:max-w-[90vw] mx-auto">
          <FadeIn className="mb-14">
            <SectionTitle>Proces realizácie</SectionTitle>
          </FadeIn>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:-mx-8 mb-20">
            {steps.map((s, i) => (
              <FadeIn key={s.title} delay={i * 100}>
                <div className="group relative h-[400px] overflow-hidden flex flex-col justify-end p-8 border border-ink/5 shadow-lg">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
                  
                  <div className="relative z-20">
                    <div className="w-12 h-12 bg-brand text-white flex items-center justify-center text-xl font-bold rounded-full mb-4 shadow-xl">
                      {i + 1}
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight [text-shadow:2px_2px_8px_rgba(0,0,0,0.9)]">
                      {s.title}
                    </h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Detailed Services with Parallax-like background */}
          <FadeIn>
            <div className="relative py-20 px-8 lg:px-20 text-white rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/sources/img_1025.jpg"
                alt="Služby"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-ink/75 z-10" />
              
              <div className="relative z-20 max-w-4xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center uppercase tracking-wider">
                  Kompletné služby v rámci realizácie
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                  {services.map((s) => (
                    <div key={s} className="flex items-start gap-4 group">
                      <span className="shrink-0 w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center text-sm font-bold shadow-lg transition-transform group-hover:scale-110">
                        ✓
                      </span>
                      <p className="text-lg text-white/90 leading-snug">{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Faq />
    </>
  );
}
