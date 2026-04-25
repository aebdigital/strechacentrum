"use client";

import { useEffect, useState, useCallback } from "react";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  set: boolean;
};

const STORAGE_KEY = "ksk-cookie-consent-v1";
const SETTINGS_EVENT = "ksk:open-cookie-settings";

const defaultConsent: Consent = {
  necessary: true,
  analytics: false,
  marketing: false,
  set: false,
};

function load(): Consent {
  if (typeof window === "undefined") return defaultConsent;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultConsent;
    const parsed = JSON.parse(raw);
    return { ...defaultConsent, ...parsed, necessary: true, set: true };
  } catch {
    return defaultConsent;
  }
}

function save(c: Omit<Consent, "set">) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ ...c, necessary: true, set: true })
  );
}

export function openCookieSettings() {
  document.dispatchEvent(new Event(SETTINGS_EVENT));
}

export function CookieFooterLink() {
  return (
    <button
      onClick={() => openCookieSettings()}
      className="text-sm text-white/70 hover:text-brand text-left"
    >
      Cookies
    </button>
  );
}

export function Cookies() {
  const [consent, setConsent] = useState<Consent>(defaultConsent);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [draft, setDraft] = useState({ analytics: false, marketing: false });

  useEffect(() => {
    const c = load();
    setConsent(c);
    setBannerOpen(!c.set);
    setDraft({ analytics: c.analytics, marketing: c.marketing });
  }, []);

  useEffect(() => {
    function onOpen() {
      setDraft({ analytics: consent.analytics, marketing: consent.marketing });
      setSettingsOpen(true);
    }
    document.addEventListener(SETTINGS_EVENT, onOpen);
    return () => document.removeEventListener(SETTINGS_EVENT, onOpen);
  }, [consent.analytics, consent.marketing]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSettingsOpen(false);
    }
    if (settingsOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [settingsOpen]);

  const acceptAll = useCallback(() => {
    const next = { necessary: true as const, analytics: true, marketing: true };
    save(next);
    setConsent({ ...next, set: true });
    setBannerOpen(false);
    setSettingsOpen(false);
  }, []);

  const rejectAll = useCallback(() => {
    const next = {
      necessary: true as const,
      analytics: false,
      marketing: false,
    };
    save(next);
    setConsent({ ...next, set: true });
    setBannerOpen(false);
    setSettingsOpen(false);
  }, []);

  const saveDraft = useCallback(() => {
    const next = {
      necessary: true as const,
      analytics: draft.analytics,
      marketing: draft.marketing,
    };
    save(next);
    setConsent({ ...next, set: true });
    setBannerOpen(false);
    setSettingsOpen(false);
  }, [draft]);

  return (
    <>
      {bannerOpen && (
        <div
          role="dialog"
          aria-label="Súhlas s cookies"
          className="fixed bottom-0 left-0 right-0 z-[90] bg-ink text-white border-t-4 border-brand"
        >
          <div className="max-w-[90vw] mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-white/85 flex-1 leading-relaxed">
              Používame cookies pre základnú funkčnosť stránky a so súhlasom aj
              pre štatistiky a marketing. Viac informácií nájdete v{" "}
              <button
                onClick={() => setSettingsOpen(true)}
                className="underline hover:text-brand"
              >
                Nastaveniach
              </button>
              .
            </p>
            <div className="flex flex-wrap gap-3 shrink-0">
              <button
                onClick={() => setSettingsOpen(true)}
                className="px-5 py-2.5 border border-white/30 hover:border-brand hover:text-brand text-sm font-semibold uppercase tracking-wider"
              >
                Nastavenia
              </button>
              <button
                onClick={rejectAll}
                className="px-5 py-2.5 border border-white/30 hover:border-brand hover:text-brand text-sm font-semibold uppercase tracking-wider"
              >
                Odmietnuť
              </button>
              <button
                onClick={acceptAll}
                className="px-5 py-2.5 bg-brand hover:bg-brand-dark text-sm font-semibold uppercase tracking-wider"
              >
                Prijať všetky
              </button>
            </div>
          </div>
        </div>
      )}

      {settingsOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 flex items-start justify-center p-4 overflow-y-auto"
          onClick={() => setSettingsOpen(false)}
        >
          <div
            className="bg-white text-ink max-w-2xl w-full my-12 rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between p-6 border-b border-stone">
              <h2 className="text-2xl font-bold">Nastavenia cookies</h2>
              <button
                onClick={() => setSettingsOpen(false)}
                aria-label="Zavrieť"
                className="text-3xl leading-none text-ink/60 hover:text-ink"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-5 text-sm">
              <p className="text-ink/70">
                Tu si môžete spravovať svoj súhlas s jednotlivými kategóriami
                cookies. Nastavenia môžete kedykoľvek zmeniť.
              </p>

              <Toggle
                title="Nevyhnutné"
                description="Zabezpečujú základnú funkčnosť stránky a nedajú sa vypnúť."
                checked
                disabled
                onChange={() => {}}
              />
              <Toggle
                title="Štatistické"
                description="Pomáhajú nám pochopiť, ako návštevníci používajú stránku."
                checked={draft.analytics}
                onChange={(v) => setDraft((d) => ({ ...d, analytics: v }))}
              />
              <Toggle
                title="Marketingové"
                description="Používajú sa na zobrazovanie relevantnej reklamy."
                checked={draft.marketing}
                onChange={(v) => setDraft((d) => ({ ...d, marketing: v }))}
              />
            </div>

            <div className="flex flex-wrap gap-3 justify-end p-6 border-t border-stone bg-stone/50">
              <button
                onClick={rejectAll}
                className="px-5 py-2.5 border border-ink/20 hover:border-brand hover:text-brand text-sm font-semibold uppercase tracking-wider"
              >
                Odmietnuť všetky
              </button>
              <button
                onClick={saveDraft}
                className="px-5 py-2.5 border border-ink/20 hover:border-brand hover:text-brand text-sm font-semibold uppercase tracking-wider"
              >
                Uložiť výber
              </button>
              <button
                onClick={acceptAll}
                className="px-5 py-2.5 bg-brand hover:bg-brand-dark text-white text-sm font-semibold uppercase tracking-wider"
              >
                Prijať všetky
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Toggle({
  title,
  description,
  checked,
  disabled = false,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-3 border-b border-stone">
      <div className="flex-1">
        <h3 className="font-semibold text-base">{title}</h3>
        <p className="text-ink/65 mt-1 text-sm">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={`relative w-12 h-7 rounded-full shrink-0 mt-1 transition-colors ${
          checked ? "bg-brand" : "bg-ink/20"
        } ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
