import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { BreadcrumbSchema } from "@/components/Schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontaktujte ${site.company} pre strešné krytiny a pokrývačstvo. Sídlo: ${site.address.street}, ${site.address.city}.`,
  alternates: { canonical: "/kontakt" },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Domov", url: "/" },
          { name: "Kontakt", url: "/kontakt" },
        ]}
      />
      <PageHero title="Kontakt" />

      <section className="py-20 lg:py-28 bg-paper">
        <div className="max-w-[90vw] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Napíšte nám správu
              </h2>
              <p className="text-ink/70 mb-8">
                Vyplňte formulár a my sa vám ozveme do 24 hodín.
              </p>
              <ContactForm />
            </FadeIn>

            <FadeIn delay={120}>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Naše kontaktné údaje
              </h2>
              <p className="text-ink/70 mb-8">
                Nájdete nás na nasledujúcej adrese alebo nás kontaktujte
                telefonicky či emailom.
              </p>

              <div className="space-y-5">
                <InfoCard
                  icon={
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  }
                  title="Adresa"
                >
                  <a
                    href={site.address.mapsUrl}
                    target="_blank"
                    rel="noopener"
                    className="underline hover:text-brand"
                  >
                    {site.address.street}
                    <br />
                    {site.address.zip} {site.address.city}
                    <br />
                    {site.address.country}
                  </a>
                </InfoCard>

                <InfoCard
                  icon={
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  }
                  title="Telefón"
                >
                  <p className="font-medium">{site.contact.name}</p>
                  {site.contact.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="block hover:text-brand"
                    >
                      {p}
                    </a>
                  ))}
                </InfoCard>

                <InfoCard
                  icon={
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <polyline
                        points="22,6 12,13 2,6"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  }
                  title="Email"
                >
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="hover:text-brand"
                  >
                    {site.contact.email}
                  </a>
                </InfoCard>

                <InfoCard
                  icon={
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <polyline
                        points="12,6 12,12 16,14"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  }
                  title="Pracovné hodiny"
                >
                  <p>{site.hours.days}</p>
                  <p>{site.hours.time}</p>
                </InfoCard>
              </div>

              <div className="mt-8 bg-stone p-6 border-l-4 border-brand">
                <h3 className="text-lg font-semibold mb-3">{site.company}</h3>
                <p className="text-sm text-ink/70">
                  <strong>IČO:</strong> {site.ico}
                </p>
                <p className="text-sm text-ink/70">
                  <strong>IČ-DPH:</strong> {site.icDph}
                </p>
                <p className="text-sm text-ink/70 mt-2">
                  <strong>Špecializácia:</strong> Strechy na kľúč,
                  poradenstvo, predaj, projekcia a realizácia.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section aria-label="Mapa" className="w-full bg-paper">
        <iframe
          src="https://www.google.com/maps?q=Tolst%C3%A9ho+2785%2F7%2C+066+01+Humenn%C3%A9&output=embed"
          className="w-full h-[400px] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${site.company} – ${site.address.street}, ${site.address.city}`}
          allowFullScreen
        />
      </section>
    </>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 items-start bg-white border border-ink/10 p-5 shadow-sm">
      <div className="text-brand shrink-0 mt-1">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <div className="text-sm text-ink/70 space-y-0.5">{children}</div>
      </div>
    </div>
  );
}
