"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, partners } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const isHome = pathname === "/";
  const categories = Object.values(partners);

  useEffect(() => {
    function onScroll() {
      const trigger = window.innerHeight * (isHome ? 0.3 : 0.1);
      setScrolled(window.scrollY > trigger);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    setOpen(false);
    setShowDropdown(false);
  }, [pathname]);

  const solid = scrolled || open;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        solid ? "bg-ink/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="max-w-[90vw] mx-auto px-5 lg:px-8 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="KSK Trading"
            width={140}
            height={56}
            className="h-12 w-auto object-contain"
            priority
          />
          <Image
            src="/cech-strecharov-slovenska.png"
            alt="Čech strechárov Slovenska"
            width={56}
            height={56}
            className="h-10 w-auto object-contain hidden sm:block"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8 text-white text-sm font-medium tracking-wide uppercase">
          <li>
            <Link
              href="/"
              className={`transition-colors hover:text-brand ${
                pathname === "/" ? "text-brand" : ""
              }`}
            >
              Domov
            </Link>
          </li>

          <li
            className="relative group h-20 flex items-center"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span
              className={`cursor-pointer transition-colors hover:text-brand flex items-center gap-1.5 ${
                pathname.startsWith("/produkty-sluzby") ? "text-brand" : ""
              }`}
            >
              Produkty a služby
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                className={`transition-transform duration-300 ${
                  showDropdown ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            {/* Desktop Dropdown */}
            <div
              className={`absolute top-[80px] left-1/2 -translate-x-1/2 w-64 bg-ink border border-white/10 shadow-2xl rounded-xl transition-all duration-300 ${
                showDropdown
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <div className="py-3">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/produkty-sluzby/${cat.slug}`}
                    className="block px-6 py-3 text-white/80 hover:text-brand hover:bg-white/5 transition-all normal-case font-semibold"
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          {navLinks.filter(l => l.href !== "/").map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition-colors hover:text-brand ${
                    active ? "text-brand" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 group"
        >
          <span
            className={`block h-0.5 w-7 bg-white transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-7 bg-white transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-7 bg-white transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 bg-ink shadow-2xl ${
          open ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col py-6 px-6 gap-1 text-white overflow-y-auto">
          <li>
            <Link
              href="/"
              className={`block py-3 uppercase tracking-wide text-sm font-bold ${
                pathname === "/" ? "text-brand" : ""
              }`}
            >
              Domov
            </Link>
          </li>

          <li className="py-2">
            <span className="block py-2 text-xs font-bold uppercase tracking-widest text-white/30 border-b border-white/5 mb-2">
              Produkty a služby
            </span>
            <div className="grid grid-cols-1 gap-1 pl-2">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/produkty-sluzby/${cat.slug}`}
                  className={`block py-2.5 text-sm font-medium ${
                    pathname === `/produkty-sluzby/${cat.slug}`
                      ? "text-brand"
                      : "text-white/70"
                  }`}
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          </li>

          {navLinks.filter(l => l.href !== "/").map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <li key={link.href} className="border-t border-white/5 mt-2 pt-2">
                <Link
                  href={link.href}
                  className={`block py-3 uppercase tracking-wide text-sm font-bold ${
                    active ? "text-brand" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
