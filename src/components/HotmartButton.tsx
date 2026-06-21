import { useEffect } from "react";

let hotmartLoaded = false;

export function loadHotmart() {
  if (hotmartLoaded || typeof window === "undefined") return;
  hotmartLoaded = true;
  const script = document.createElement("script");
  script.src = "https://static.hotmart.com/checkout/widget.min.js";
  script.async = true;
  document.head.appendChild(script);
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "https://static.hotmart.com/css/hotmart-fb.min.css";
  document.head.appendChild(link);
}

// Detecta navegadores in-app (TikTok, Instagram, FB, etc.) y Safari móvil
// donde el widget embebido de Hotmart falla al abrir el modal de checkout.
function shouldUseDirectLink(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  const isInApp = /(TikTok|musical_ly|Bytedance|Instagram|FBAN|FBAV|FB_IAB|Line|WhatsApp|Snapchat|Pinterest|Twitter|LinkedInApp)/i.test(
    ua
  );
  const isIOS = /iPad|iPhone|iPod/.test(ua);
  // En iOS todos los navegadores usan WebKit; el widget suele fallar dentro de
  // WebViews. Forzamos enlace directo en iOS y en cualquier in-app browser.
  return isInApp || isIOS;
}

export function HotmartButton({
  href,
  label = "Comprar ahora",
  fullWidth = false,
}: {
  href: string;
  label?: string;
  fullWidth?: boolean;
}) {
  useEffect(() => {
    loadHotmart();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Si estamos en un navegador donde el widget no funciona, dejamos que el
    // navegador siga el href normalmente (target=_blank abre el checkout).
    if (shouldUseDirectLink()) return;
    // En desktop / navegadores compatibles, el script de Hotmart intercepta
    // el click y abre el modal embebido; evitamos la navegación nativa.
    e.preventDefault();
  };

  return (
    <a
      onClick={handleClick}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hotmart-fb inline-block"
      style={{ width: fullWidth ? "100%" : "auto" }}
    >
      <button
        type="button"
        style={{
          background: "#2E9B7A",
          color: "#fff",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 700,
          fontSize: 15,
          border: "none",
          borderRadius: 999,
          padding: "12px 28px",
          cursor: "pointer",
          width: fullWidth ? "100%" : "auto",
        }}
      >
        {label}
      </button>
    </a>
  );
}
