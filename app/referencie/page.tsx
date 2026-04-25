import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Gallery } from "@/components/Gallery";
import { FadeIn } from "@/components/FadeIn";
import { BreadcrumbSchema } from "@/components/Schema";
import { galleryImageNumbers } from "@/lib/site";

export const metadata: Metadata = {
  title: "Referencie",
  description:
    "Galéria realizovaných projektov strešných krytín, pokrývačských prác a odkvapových systémov. Prezrite si našu prácu v Humennom a okolí.",
  alternates: { canonical: "/referencie" },
};

const images = galleryImageNumbers.map(
  (n) => `/sources/img_${1000 + n}.jpg`
);

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Domov", url: "/" },
          { name: "Referencie", url: "/referencie" },
        ]}
      />
      <PageHero title="Referencie" />

      <section className="py-20 lg:py-28 bg-paper">
        <div className="max-w-[90vw] mx-auto px-5 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Naše realizované projekty
            </h2>
            <p className="text-ink/70">
              Prezrite si galériu strešných krytín a pokrývačských prác, ktoré
              sme realizovali pre našich klientov.
            </p>
          </FadeIn>

          <FadeIn>
            <Gallery images={images} />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
