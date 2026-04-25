import { partners } from "@/lib/site";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.values(partners).map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = Object.values(partners).find((p) => p.slug === slug);

  if (!product) return {};

  return {
    title: `${product.title} - Produkty a služby`,
    description: product.description,
    alternates: { canonical: `/produkty-sluzby/${product.slug}` },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const product = Object.values(partners).find((p) => p.slug === slug);

  if (!product) notFound();

  return (
    <article className="space-y-12">
      <div className="space-y-6">
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-ink">
          {product.title}
        </h2>
        <div className="flex flex-wrap items-center gap-8 py-4 border-b border-ink/5">
          <strong className="text-sm font-bold uppercase tracking-widest text-ink/40 shrink-0">
            Naši partneri:
          </strong>
          <div className="flex flex-wrap items-center gap-8">
            {product.logos.map((l) => (
              <div key={l.src} className="h-8 w-24 flex items-center justify-center">
                <Image
                  src={`/partneri/${product.folder}/${l.src}`}
                  alt={l.alt}
                  width={96}
                  height={32}
                  className="max-h-full max-w-full object-contain transition-transform hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {product.paragraphs.map((p, i) => (
          <p key={i} className="text-lg text-ink/75 leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-2xl">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 90vw, 60vw"
        />
      </div>

      <div className="pt-12 border-t border-ink/5">
        <h3 className="text-xl font-bold mb-4">Máte záujem o tento produkt?</h3>
        <p className="text-ink/70 mb-0">
          Neváhajte nás kontaktovať pre viac informácií alebo vypracovanie cenovej ponuky na mieru.
        </p>
      </div>
    </article>
  );
}
