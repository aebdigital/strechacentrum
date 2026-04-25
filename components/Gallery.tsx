"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "./Lightbox";

export function Gallery({ images }: { images: string[] }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setActiveIdx(i)}
            className="group relative aspect-square overflow-hidden bg-ink"
          >
            <Image
              src={src}
              alt="Realizácia"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-80"
            />
          </button>
        ))}
      </div>

      <Lightbox
        src={activeIdx !== null ? images[activeIdx] : null}
        onClose={() => setActiveIdx(null)}
        onPrev={() =>
          setActiveIdx((i) =>
            i === null ? null : (i - 1 + images.length) % images.length
          )
        }
        onNext={() =>
          setActiveIdx((i) =>
            i === null ? null : (i + 1) % images.length
          )
        }
      />
    </>
  );
}
