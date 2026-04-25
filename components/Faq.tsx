import { faqItems } from "@/lib/site";
import { SectionTitle } from "./SectionTitle";
import { FadeIn } from "./FadeIn";

export function Faq() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-stone">
      <div className="max-w-[90vw] mx-auto px-5 lg:px-8">
        <FadeIn className="mb-12 text-center">
          <SectionTitle>Často kladené otázky</SectionTitle>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqItems.map((item, i) => (
            <FadeIn key={item.q} delay={i * 60}>
              <div className="bg-white border-l-4 border-brand p-6 shadow-sm h-full">
                <h3 className="text-lg font-semibold mb-3 text-ink">
                  {item.q}
                </h3>
                <p className="text-ink/70 leading-relaxed text-sm">{item.a}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
