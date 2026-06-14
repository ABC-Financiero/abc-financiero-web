import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle } from "lucide-react";

const labelStyle: React.CSSProperties = {
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "rgba(255,255,255,0.5)",
  fontSize: 11,
  fontWeight: 700,
  marginBottom: 14,
};

const linkStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.8)",
  fontSize: 14,
  display: "block",
  padding: "4px 0",
};

export function SiteFooter() {
  return (
    <footer style={{ background: "#1C2B27", color: "#FFFFFF" }}>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <span
              style={{
                color: "#FFFFFF",
                fontWeight: 800,
                fontSize: 18,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              ABC Financiero
            </span>
            <p
              className="mt-4 text-sm"
              style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}
            >
              Educación financiera e inversiones para hondureños.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <p style={labelStyle}>Navegación</p>
            <Link to="/" style={linkStyle}>Inicio</Link>
            <Link to="/" hash="soluciones" style={linkStyle}>Soluciones</Link>
            <Link to="/mentoria" style={linkStyle}>Mentoría</Link>
            <Link to="/" hash="nosotros" style={linkStyle}>Nosotros</Link>
            <Link to="/contacto" style={linkStyle}>Contacto</Link>
          </div>

          {/* Productos */}
          <div>
            <p style={labelStyle}>Productos</p>
            <Link to="/guia" style={linkStyle}>Guía gratuita</Link>
            <Link to="/ebook" style={linkStyle}>E-book</Link>
            <Link to="/curso" style={linkStyle}>Curso</Link>
            <Link to="/mentoria" style={linkStyle}>Mentoría</Link>
          </div>

          {/* Contacto */}
          <div>
            <p style={labelStyle}>Contacto</p>
            <a
              href="mailto:raraquen@abcfinanciero.com"
              className="flex items-center gap-2"
              style={{ ...linkStyle, color: "#FFFFFF" }}
            >
              <Mail className="size-4" style={{ color: "#FFFFFF" }} />
              raraquen@abcfinanciero.com
            </a>
            <a
              href="https://wa.me/50487328488"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
              style={{ ...linkStyle, color: "#FFFFFF" }}
            >
              <MessageCircle className="size-4" style={{ color: "#FFFFFF" }} />
              +504 8732-8488
            </a>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 text-xs md:flex-row"
          style={{ borderColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.55)" }}
        >
          <span>© 2026 ABC Financiero. Todos los derechos reservados.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Aviso legal</a>
            <a href="#" className="hover:text-white">Política de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
