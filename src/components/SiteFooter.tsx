import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer style={{ background: "#1C2B27", color: "#FFFFFF" }}>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <span style={{ fontWeight: 800, fontSize: 18 }}>ABC Financiero</span>

          <nav className="flex flex-wrap items-center justify-center gap-5 text-sm" style={{ color: "#8BA89F" }}>
            <Link to="/" className="hover:text-white">Inicio</Link>
            <Link to="/" hash="soluciones" className="hover:text-white">Soluciones</Link>
            <Link to="/" hash="nosotros" className="hover:text-white">Nosotros</Link>
            <Link to="/" hash="contacto" className="hover:text-white">Contacto</Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://www.tiktok.com/@ricardoaraque"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="grid h-10 w-10 place-items-center rounded-full border hover:bg-white/5"
              style={{ borderColor: "rgba(255,255,255,0.15)" }}
            >
              <TikTokIcon className="size-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border hover:bg-white/5"
              style={{ borderColor: "rgba(255,255,255,0.15)" }}
            >
              <Instagram className="size-4" />
            </a>
          </div>
        </div>

        <div
          className="mt-8 border-t pt-6 text-center text-xs"
          style={{ borderColor: "rgba(255,255,255,0.1)", color: "#8BA89F" }}
        >
          © {new Date().getFullYear()} ABC Financiero. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
