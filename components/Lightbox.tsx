"use client";

import { useEffect } from "react";
import Image from "next/image";

export function Lightbox({
  src,
  onClose,
  onPrev,
  onNext,
}: {
  src: string | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    if (!src) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [src, onClose, onPrev, onNext]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        aria-label="Zavrieť"
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl leading-none hover:text-brand z-10"
      >
        ×
      </button>
      <button
        aria-label="Predošlý"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 text-white text-5xl leading-none hover:text-brand z-10"
      >
        ‹
      </button>
      <button
        aria-label="Ďalší"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 text-white text-5xl leading-none hover:text-brand z-10"
      >
        ›
      </button>
      <div
        className="relative w-full max-w-6xl h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt="Realizácia"
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
