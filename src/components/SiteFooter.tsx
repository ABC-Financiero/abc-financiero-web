import { Link } from "@tanstack/react-router";
import { Mail, Instagram } from "lucide-react";

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
      aria-hidden
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const labelStyle: React.CSSProperties = {
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#8BA89F",
  fontSize: 11,
  fontWeight: 700,
  marginBottom: 14,
};

const linkClass =
  "block text-sm transition-colors hover:text-[#2E9B7A] focus-visible:outline-none focus-visible:text-[#2E9B7A]";

export function SiteFooter() {
  return (
    <footer style={{ background: "#1C2B27", color: "#FFFFFF" }}>
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
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
              <span style={{ fontWeight: 800, fontSize: 18, color: "#FFFFFF" }}>
                ABC Financiero
              </span>
            </div>
            <p className="mt-4 text-sm" style={{ color: "#8BA89F", lineHeight: 1.6 }}>
              Educación financiera e inversiones para hondureños.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.tiktok.com/@ricardoaraque"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="grid h-9 w-9 place-items-center rounded-full border transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.12)", color: "#8BA89F" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#6B4FC8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8BA89F")}
              >
                <TikTokIcon className="size-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.12)", color: "#8BA89F" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#6B4FC8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8BA89F")}
              >
                <Instagram className="size-4" />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <p style={labelStyle}>Navegación</p>
            <div className="space-y-2.5">
              <Link to="/" className={linkClass} style={{ color: "#FFFFFF" }}>Inicio</Link>
              <Link to="/" hash="soluciones" className={linkClass} style={{ color: "#FFFFFF" }}>Soluciones</Link>
              <Link to="/" hash="nosotros" className={linkClass} style={{ color: "#FFFFFF" }}>Nosotros</Link>
              <Link to="/" hash="contacto" className={linkClass} style={{ color: "#FFFFFF" }}>Contacto</Link>
            </div>
          </div>

          {/* Productos */}
          <div>
            <p style={labelStyle}>Productos</p>
            <div className="space-y-2.5">
              <Link to="/guia" className={linkClass} style={{ color: "#FFFFFF" }}>Guía gratuita</Link>
              <Link to="/ebook" className={linkClass} style={{ color: "#FFFFFF" }}>E-book</Link>
              <Link to="/curso" className={linkClass} style={{ color: "#FFFFFF" }}>Curso</Link>
              <Link to="/mentoria" className={linkClass} style={{ color: "#FFFFFF" }}>Mentoría</Link>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <p style={labelStyle}>Contacto</p>
            <div className="space-y-3 text-sm" style={{ color: "#FFFFFF" }}>
              <a
                href="mailto:contacto@abcfinanciero.com"
                className="flex items-center gap-2 transition-colors hover:text-[#2E9B7A]"
              >
                <Mail className="size-4" style={{ color: "#8BA89F" }} />
                contacto@abcfinanciero.com
              </a>
              <a
                href="https://www.tiktok.com/@ricardoaraque"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-[#2E9B7A]"
              >
                <TikTokIcon className="size-4" />
                @ricardoaraque
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-[#2E9B7A]"
              >
                <Instagram className="size-4" style={{ color: "#8BA89F" }} />
                @ricardoaraque
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 text-xs md:flex-row"
          style={{ borderColor: "rgba(255,255,255,0.08)", color: "#8BA89F" }}
        >
          <span>© {new Date().getFullYear()} ABC Financiero. Todos los derechos reservados.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Aviso legal</a>
            <a href="#" className="hover:text-white">Política de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
