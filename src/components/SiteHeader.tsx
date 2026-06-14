import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Inicio", to: "/" as const, hash: undefined },
  { label: "Soluciones", to: "/" as const, hash: "soluciones" },
  { label: "Nosotros", to: "/" as const, hash: "nosotros" },
  { label: "Contacto", to: "/contacto" as const, hash: undefined },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Spacer so fixed header doesn't overlap content */}
      <div aria-hidden style={{ height: 88 }} />

      <header
        style={{
          position: "fixed",
          top: 16,
          left: 0,
          right: 0,
          zIndex: 100,
          margin: "0 auto",
          maxWidth: 780,
          width: "calc(100% - 24px)",
          background: "#FFFFFF",
          borderRadius: 999,
          border: "1px solid #C5E4DA",
          boxShadow: "0 4px 24px rgba(26,107,85,0.10)",
          padding: "10px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span
            style={{
              color: "#1A6B55",
              fontWeight: 800,
              fontSize: 16,
              letterSpacing: "-0.02em",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
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
              className="transition-colors"
              style={{ color: "#3D5A52", fontSize: 14, fontWeight: 600 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1A6B55")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#3D5A52")}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Menú"
          className="md:hidden rounded-md p-1"
          style={{ color: "#1A6B55" }}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </header>

      {open && (
        <div
          className="md:hidden"
          style={{
            position: "fixed",
            top: 76,
            left: 12,
            right: 12,
            zIndex: 99,
            background: "#FFFFFF",
            borderRadius: 16,
            border: "1px solid #C5E4DA",
            boxShadow: "0 4px 24px rgba(26,107,85,0.10)",
            padding: "12px 18px",
          }}
        >
          <div className="flex flex-col gap-2">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                hash={l.hash}
                onClick={() => setOpen(false)}
                style={{
                  color: "#3D5A52",
                  fontSize: 14,
                  fontWeight: 600,
                  padding: "8px 0",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
