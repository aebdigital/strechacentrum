"use client";

import { useEffect, useRef, useState } from "react";

export function SectionTitle({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setFilled(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <h2
      ref={ref}
      data-text={children}
      className={`section-title text-5xl md:text-7xl lg:text-[5rem] ${
        filled ? "fill" : ""
      } ${className}`}
    >
      {children}
    </h2>
  );
}
