"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <button
            aria-label="Zavrieť"
            onClick={onClose}
            className="absolute top-6 right-6 text-white/50 text-4xl hover:text-white transition-colors z-20"
          >
            ×
          </button>
          
          <button
            aria-label="Predošlý"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-6 text-white/30 text-5xl hover:text-white transition-colors z-20 p-4"
          >
            ‹
          </button>
          
          <button
            aria-label="Ďalší"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-6 text-white/30 text-5xl hover:text-white transition-colors z-20 p-4"
          >
            ›
          </button>

          <div
            className="relative w-full max-w-6xl h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src={src}
                  alt="Realizácia"
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
