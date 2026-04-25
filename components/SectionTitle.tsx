"use client";

export function SectionTitle({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <h2 className={`section-title text-5xl md:text-7xl lg:text-[5rem] ${className}`}>
      {children}
    </h2>
  );
}
