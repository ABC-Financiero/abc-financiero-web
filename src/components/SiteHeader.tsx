import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Inicio", to: "/" as const, hash: undefined },
  { label: "Soluciones", to: "/" as const, hash: "soluciones" },
  { label: "Nosotros", to: "/" as const, hash: "nosotros" },
  { label: "Contacto", to: "/" as const, hash: "contacto" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="sticky top-0 z-50 w-full bg-white"
      style={{ borderBottom: "1px solid #C5E4DA" }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center">
          <span
            style={{
              color: "#1A6B55",
              fontWeight: 800,
              fontSize: 18,
              letterSpacing: "-0.02em",
            }}
          >
            ABC Financiero
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash}
              className="text-sm font-semibold text-brand-neutral-700 hover:text-brand-emerald transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/mentoria"
            hash="llamada"
            className="inline-flex items-center justify-center rounded-full text-white transition-colors hover:opacity-95"
            style={{
              background: "#2E9B7A",
              fontWeight: 700,
              fontSize: 13,
              padding: "8px 18px",
            }}
          >
            Reservar llamada gratuita
          </Link>
        </div>

        <button
          aria-label="Menú"
          className="md:hidden rounded-md p-2 text-brand-emerald"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-white md:hidden" style={{ borderColor: "#C5E4DA" }}>
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                hash={l.hash}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-brand-neutral-700"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/mentoria"
              hash="llamada"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full text-white"
              style={{
                background: "#2E9B7A",
                fontWeight: 700,
                fontSize: 13,
                padding: "10px 18px",
              }}
            >
              Reservar llamada gratuita
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
