"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Category {
  slug: string;
  title: string;
}

export function ServiceSidebar({ categories }: { categories: Category[] }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2">
      {categories.map((cat) => {
        const href = `/produkty-sluzby/${cat.slug}`;
        const active = pathname === href;

        return (
          <Link
            key={cat.slug}
            href={href}
            className={`group flex items-center justify-between p-4 transition-all rounded-lg border shadow-sm ${
              active
                ? "bg-brand border-brand text-white shadow-brand/20"
                : "bg-white border-ink/5 text-ink hover:border-brand hover:bg-brand/5"
            }`}
          >
            <span
              className={`font-semibold transition-colors ${
                active ? "text-white" : "group-hover:text-brand"
              }`}
            >
              {cat.title}
            </span>
            <span
              className={`transition-all transform ${
                active
                  ? "translate-x-0 opacity-100 text-white"
                  : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 text-brand"
              }`}
            >
              →
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
