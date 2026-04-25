import Link from "next/link";
import { site } from "@/lib/site";
import { CookieFooterLink } from "./Cookies";
import { RollLink } from "./RollButton";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-[90vw] mx-auto px-5 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight max-w-xl">
              Potrebujete novú strechu alebo rekonštrukciu?
            </h2>
            <p className="mt-3 text-white/70 max-w-xl">
              Kontaktujte nás a my Vám radi poradíme s výberom vhodného riešenia
              pre vašu strechu.
            </p>
          </div>
          <RollLink href="/kontakt">Kontakt</RollLink>
        </div>

        <div className="border-t border-white/10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">{site.company}</h3>
            <p className="text-sm text-white/70 mb-2">
              <span className="font-medium text-white">Adresa: </span>
              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noopener"
                className="text-brand underline"
              >
                {site.address.street}, {site.address.zip} {site.address.city}
              </a>
            </p>
            <p className="text-sm text-white/70">
              <span className="font-medium text-white">IČO: </span>
              {site.ico}
            </p>
            <p className="text-sm text-white/70">
              <span className="font-medium text-white">IČ-DPH: </span>
              {site.icDph}
            </p>

            <div className="mt-6 space-y-1 text-sm text-white/70">
              <p className="font-medium text-white">{site.contact.name}</p>
              {site.contact.phones.map((p) => (
                <p key={p}>
                  <span className="font-medium text-white">Tel.: </span>
                  <a
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="hover:text-brand"
                  >
                    {p}
                  </a>
                </p>
              ))}
              <p>
                <span className="font-medium text-white">E-mail: </span>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover:text-brand"
                >
                  {site.contact.email}
                </a>
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wide mb-2">
                Pracovné hodiny
              </h4>
              <p className="text-sm text-white/70">{site.hours.days}</p>
              <p className="text-sm text-white/70">{site.hours.time}</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">
              Navigácia
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-brand">
                  Domov
                </Link>
              </li>
              <li>
                <Link href="/strechy-na-mieru" className="hover:text-brand">
                  Strechy na mieru
                </Link>
              </li>
              <li>
                <Link href="/referencie" className="hover:text-brand">
                  Referencie
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-brand">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">
              Služby
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/produkty-sluzby/tvrde-krytiny" className="hover:text-brand">
                  Tvrdé krytiny
                </Link>
              </li>
              <li>
                <Link href="/produkty-sluzby/plechove-krytiny" className="hover:text-brand">
                  Plechové krytiny
                </Link>
              </li>
              <li>
                <Link href="/produkty-sluzby/rovne-krytiny" className="hover:text-brand">
                  Rovné krytiny
                </Link>
              </li>
              <li>
                <Link href="/produkty-sluzby/odkvapovy-system" className="hover:text-brand">
                  Odkvapový systém
                </Link>
              </li>
              <li>
                <Link href="/produkty-sluzby/stresne-okna" className="hover:text-brand">
                  Strešné okná
                </Link>
              </li>
              <li>
                <Link href="/strechy-na-mieru" className="hover:text-brand">
                  Strechy na mieru
                </Link>
              </li>
            </ul>
            <h4 className="text-sm font-semibold uppercase tracking-wide mt-8 mb-4">
              Ochrana údajov
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/ochrana-osobnych-udajov"
                className="text-sm text-white/70 hover:text-brand"
              >
                Ochrana osobných údajov
              </Link>
              <CookieFooterLink />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-white/50">
          <span>
            Tvorba stránky –{" "}
            <a
              href="https://aebdigital.sk"
              target="_blank"
              rel="noopener"
              className="hover:text-brand"
            >
              AEB Digital
            </a>
          </span>
          <span>© {new Date().getFullYear()} {site.company}. Všetky práva vyhradené.</span>
        </div>
      </div>
    </footer>
  );
}
