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
      className="sticky top-0 z-50 w-full"
      style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "saturate(180%) blur(12px)",
        WebkitBackdropFilter: "saturate(180%) blur(12px)",
        borderBottom: "1px solid rgba(197,228,218,0.6)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span
            className="grid h-7 w-7 place-items-center rounded-full text-white"
            style={{
              background: "linear-gradient(135deg, #1A6B55 0%, #6B4FC8 100%)",
              fontSize: 12,
              fontWeight: 800,
            }}
          >
            A
          </span>
          <span
            style={{
              color: "#1A6B55",
              fontWeight: 800,
              fontSize: 17,
              letterSpacing: "-0.02em",
            }}
          >
            ABC Financiero
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash}
              className="text-sm font-semibold transition-colors"
              style={{ color: "#3D5A52" }}
              activeProps={{ style: { color: "#1A6B55" } }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Menú"
          className="md:hidden rounded-md p-2"
          style={{ color: "#1A6B55" }}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

        <div className="hidden md:block" style={{ width: 90 }} aria-hidden />
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
                className="text-sm font-semibold"
                style={{ color: "#3D5A52" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
