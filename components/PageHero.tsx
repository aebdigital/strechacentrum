"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function PageHero({
  title,
  image = "/sources/img_1025.jpg",
}: {
  title: string;
  image?: string;
}) {
  return (
    <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 h-full w-[90vw] lg:max-w-[90vw] mx-auto flex items-end pb-12 pt-32">
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
