"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/site";
import { RollLink } from "./RollButton";

const heroImages = [
  "/sources/img_1025.jpg",
  "/sources/img_1015.jpg",
  "/sources/img_1020.jpg",
];

export function Hero() {
  const [imgIdx, setImgIdx] = useState(0);
  const [tIdx, setTIdx] = useState(0);

  useEffect(() => {
    const a = setInterval(
      () => setImgIdx((i) => (i + 1) % heroImages.length),
      5000
    );
    const b = setInterval(
      () => setTIdx((i) => (i + 1) % testimonials.length),
      6000
    );
    return () => {
      clearInterval(a);
      clearInterval(b);
    };
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] w-full">
      {/* Parallax background */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        style={{ clipPath: "inset(0 0 0 0)" }}
      >
        <div className="fixed inset-0">
          {heroImages.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className={`object-cover hero-bg-image ${
                i === imgIdx ? "active" : ""
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/75" />
        </div>
      </div>

      <div className="relative z-10 h-full w-[90vw] lg:max-w-[90vw] mx-auto flex flex-col justify-end pb-16 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              KSK Trading s.r.o.
            </h1>
            <p className="text-base lg:text-lg text-white/85 max-w-xl leading-relaxed mb-8">
              Zaoberáme sa predajom a kompletnou realizáciou strešných krytín
              vrátane doplnkov a príslušenstva. Odborné poradenstvo od
              profesionálov. Možnosť dodávky a montáže kdekoľvek. Pri výkone
              práce dodržiavame najnovšie stavebné procesy.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
              <RollLink href="/referencie" className="w-full sm:w-auto">Projekty</RollLink>
              <RollLink href="/produkty-sluzby/tvrde-krytiny" variant="secondary" className="w-full sm:w-auto">
                Naše služby
              </RollLink>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="grid grid-cols-2 gap-6 mb-8 text-white">
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                  2500<span className="text-brand">+</span>
                </div>
                <div className="text-xs sm:text-sm text-white/70 mt-1">
                  realizovaných konštrukcií
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                  19<span className="text-brand">+</span>
                </div>
                <div className="text-xs sm:text-sm text-white/70 mt-1">
                  rokov skúseností
                </div>
              </div>
            </div>

            <div className="bg-white/15 backdrop-blur-md rounded-lg p-6 relative min-h-[180px] hidden lg:block">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className={`t-slide ${i === tIdx ? "active" : ""}`}
                >
                  <blockquote className="text-white italic mb-4 leading-relaxed">
                    “{t.quote}”
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-semibold text-sm">
                      {t.initials}
                    </div>
                    <div className="text-white">
                      <div className="font-medium">{t.name}</div>
                      <div className="text-xs flex items-center gap-2">
                        <span className="text-brand">★★★★★</span>
                        <span className="text-white/70">5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
