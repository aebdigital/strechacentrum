import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { partners } from "@/lib/site";
import Link from "next/link";
import { ReactNode } from "react";
import { ServiceSidebar } from "@/components/ServiceSidebar";

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ slug?: string }>;
}) {
  const { slug } = await params;
  const categories = Object.values(partners);
  const currentCategory = categories.find((c) => c.slug === slug);
  const title = currentCategory ? currentCategory.title : "Produkty & Služby";

  return (
    <>
      <PageHero title={title} />
      <section className="py-20 lg:py-28 bg-paper">
        <div className="w-[90vw] lg:max-w-[90vw] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Sidebar */}
            <aside className="w-full lg:w-72 shrink-0">
              <div className="sticky top-32">
                <h2 className="text-sm font-bold uppercase tracking-widest text-ink/40 mb-6">
                  Kategórie
                </h2>
                <ServiceSidebar categories={categories} />

                <div className="mt-12 p-6 bg-ink text-white rounded-xl">
                  <h3 className="font-bold mb-2">Potrebujete poradiť?</h3>
                  <p className="text-sm text-white/70 mb-4 leading-relaxed">
                    Náš tím odborníkov vám pomôže s výberom najlepšieho riešenia.
                  </p>
                  <Link
                    href="/kontakt"
                    className="text-brand font-bold text-sm hover:underline"
                  >
                    Kontaktujte nás →
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0">
              <FadeIn>{children}</FadeIn>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
