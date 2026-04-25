import Image from "next/image";

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
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
          {title}
        </h1>
      </div>
    </section>
  );
}
