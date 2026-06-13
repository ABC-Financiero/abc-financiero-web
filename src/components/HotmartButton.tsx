import { useEffect } from "react";

let hotmartLoaded = false;

export function loadHotmart() {
  if (hotmartLoaded || typeof window === "undefined") return;
  hotmartLoaded = true;
  const script = document.createElement("script");
  script.src = "https://static.hotmart.com/checkout/widget.min.js";
  document.head.appendChild(script);
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "https://static.hotmart.com/css/hotmart-fb.min.css";
  document.head.appendChild(link);
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

  return (
    <a
      onClick={(e) => e.preventDefault()}
      href={href}
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
