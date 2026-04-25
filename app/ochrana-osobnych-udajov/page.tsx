import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov",
  description: "Zásady ochrany osobných údajov spoločnosti KSK Trading s.r.o. podľa nariadenia GDPR.",
  alternates: { canonical: "/ochrana-osobnych-udajov" },
};

export default function Page() {
  return (
    <>
      <PageHero title="Ochrana osobných údajov" />
      <section className="py-20 lg:py-28 bg-paper">
        <div className="w-[90vw] lg:max-w-4xl mx-auto">
          <FadeIn>
            <article className="prose prose-brand max-w-none">
              <div className="bg-stone p-8 rounded-xl border-l-4 border-brand mb-12">
                <h2 className="text-xl font-bold mb-4">Prevádzkovateľ</h2>
                <div className="space-y-1 text-ink/75">
                  <p className="font-bold text-ink">{site.company}</p>
                  <p>{site.address.street}, {site.address.zip} {site.address.city}</p>
                  <p>{site.address.country}</p>
                  <p><span className="font-semibold">IČO:</span> {site.ico}</p>
                  <p><span className="font-semibold">IČ-DPH:</span> {site.icDph}</p>
                  <p><span className="font-semibold">E-mail:</span> <a href={`mailto:${site.contact.email}`} className="text-brand hover:underline">{site.contact.email}</a></p>
                  <p><span className="font-semibold">Tel.:</span> {site.contact.phones.join(", ")}</p>
                </div>
              </div>

              <div className="space-y-8 text-ink/80 leading-relaxed">
                <p>
                  Tieto Zásady ochrany osobných údajov popisujú, aké osobné údaje
                  spracúvame v súvislosti s používaním našej webovej stránky a
                  kontaktných formulárov.
                </p>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-ink">I. Kontaktný formulár</h3>
                  <p>
                    Na stránke www.strechacentrum.sk prevádzkujeme kontaktný
                    formulár, ktorého účelom je umožniť vám položiť otázku k našim
                    produktom a službám alebo požiadať o cenovú ponuku.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Rozsah spracúvaných údajov:</strong> meno a priezvisko, e-mailová adresa, telefónne číslo, správa.</li>
                    <li><strong>Účel spracovania:</strong> Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt.</li>
                    <li><strong>Právny základ:</strong> Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy na žiadosť dotknutej osoby.</li>
                    <li><strong>Doba uchovávania:</strong> Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt, pokiaľ nevznikne ďalší zmluvný vzťah.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-ink">II. Súbory cookies</h3>
                  <p>
                    Na našej webovej stránke používame nevyhnutné cookies pre
                    základnú funkčnosť a štatistické cookies (so súhlasom
                    používateľa).
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-ink">III. Práva dotknutej osoby</h3>
                  <p>
                    Podľa GDPR máte právo na prístup, opravu, vymazanie, obmedzenie
                    spracovania, prenosnosť údajov, odvolanie súhlasu a podanie
                    sťažnosti na Úrad na ochranu osobných údajov SR.
                  </p>
                  <p>
                    V prípade otázok nás môžete kontaktovať na{" "}
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="text-brand font-bold hover:underline"
                    >
                      {site.contact.email}
                    </a>
                    .
                  </p>
                </div>
              </div>
            </article>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
