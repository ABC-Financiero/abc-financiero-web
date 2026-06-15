import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "abc-cookie-consent";

type Consent = "accepted" | "rejected";

function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "accepted" || v === "rejected" ? v : null;
  } catch {
    return null;
  }
}

function writeConsent(value: Consent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(
    new CustomEvent("abc:cookie-consent", { detail: value }),
  );
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readConsent() === null) setVisible(true);
  }, []);

  if (!visible) return null;

  const handle = (v: Consent) => {
    writeConsent(v);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4"
    >
      <div
        className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl bg-white p-5 shadow-2xl md:flex-row md:items-center md:gap-6"
        style={{
          border: "1px solid #C5E4DA",
          boxShadow: "0 12px 40px rgba(10, 31, 26, 0.18)",
        }}
      >
        <div className="flex-1">
          <p className="text-sm font-bold text-brand-navy">
            Usamos cookies para mejorar tu experiencia
          </p>
          <p className="mt-1 text-sm text-brand-neutral-700">
            Empleamos cookies propias y de terceros para analítica y métricas de
            uso. Puedes aceptarlas o rechazarlas. Consulta nuestra{" "}
            <Link to="/privacidad" className="font-semibold underline">
              política de privacidad
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => handle("rejected")}
            className="rounded-full border-[1.5px] px-5 py-2.5 text-sm font-semibold transition-colors"
            style={{ borderColor: "#1A6B55", color: "#1A6B55", background: "transparent" }}
          >
            Solo esenciales
          </button>
          <button
            type="button"
            onClick={() => handle("accepted")}
            className="rounded-full px-5 py-2.5 text-sm font-bold text-white transition-colors"
            style={{ background: "#2E9B7A" }}
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
}

export function hasAnalyticsConsent(): boolean {
  return readConsent() === "accepted";
}
