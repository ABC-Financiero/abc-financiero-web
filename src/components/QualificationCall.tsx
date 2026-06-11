import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

type Q1 =
  | "deudas"
  | "gastos-superan"
  | "ahorro-sin-invertir"
  | "empezar-desde-cero";

type Q2 = "nada" | "menos-50" | "50-150" | "mas-150";

const Q1_OPTIONS: { value: Q1; label: string }[] = [
  { value: "deudas", label: "Tengo deudas y quiero salir de ellas" },
  { value: "gastos-superan", label: "Mis gastos superan mis ingresos" },
  { value: "ahorro-sin-invertir", label: "Ahorro pero no sé cómo invertir" },
  { value: "empezar-desde-cero", label: "Quiero empezar a invertir desde cero" },
];

const Q2_OPTIONS: { value: Q2; label: string }[] = [
  { value: "nada", label: "Nada por ahora" },
  { value: "menos-50", label: "Menos de $50" },
  { value: "50-150", label: "$50 – $150" },
  { value: "mas-150", label: "Más de $150" },
];

function OptionCard({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-[10px] border-[1.5px] px-4 py-3 text-left text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E9B7A]"
      style={
        selected
          ? { background: "#E8F5F0", borderColor: "#2E9B7A", color: "#1A6B55" }
          : { background: "#FFFFFF", borderColor: "#C5E4DA", color: "#1C2B27" }
      }
    >
      {children}
    </button>
  );
}

function CalEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          const ar = arguments as any;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            (api as any).q = (api as any).q || [];
            typeof namespace === "string"
              ? ((cal.ns[namespace] = api) && p(api, ar))
              : p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window as any, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    Cal("init", "pre-asesoria", { origin: "https://cal.com" });
    Cal.ns["pre-asesoria"]("inline", {
      elementOrSelector: "#cal-booking-widget",
      calLink: "ricardo-araque/pre-asesoria",
      layout: "month_view",
    });
    Cal.ns["pre-asesoria"]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <div style={{ width: "100%", maxWidth: "100%", overflow: "hidden" }}>
      <p style={{ fontSize: 14, color: "#3D5A52", marginBottom: 16 }}>
        Elige el día y horario que mejor te funcione. La llamada dura 15 minutos.
      </p>
      <style>{`
        #cal-booking-widget {
          width: 100%;
          max-width: 100%;
          height: 600px;
          overflow: hidden;
          border-radius: 12px;
        }
        @media (max-width: 768px) {
          #cal-booking-widget { height: 750px; }
        }
      `}</style>
      <div ref={containerRef} id="cal-booking-widget" />
    </div>
  );
}

export function QualificationCall({ id = "llamada" }: { id?: string }) {
  const [q1, setQ1] = useState<Q1 | null>(null);
  const [q2, setQ2] = useState<Q2 | null>(null);
  const [q3, setQ3] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ q1?: string; q2?: string; q3?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (!q1) next.q1 = "Selecciona una opción";
    if (!q2) next.q2 = "Selecciona una opción";
    if (q3.trim().length < 20) next.q3 = "Escribe al menos 20 caracteres";
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  };

  const disqualified = submitted && q2 === "nada";
  const qualified = submitted && q2 !== "nada";

  // Disqualified: show only the neutral message, hide ALL booking-related UI.
  if (disqualified) {
    return (
      <section
        id={id}
        style={{ background: "#F0F5F3", overflow: "hidden", boxSizing: "border-box" }}
        className="py-16 md:py-24"
      >
        <div className="mx-auto max-w-3xl px-4">
          <div
            className="rounded-[20px] bg-white p-8 md:p-10"
            style={{
              border: "1px solid #C5E4DA",
              boxShadow: "0 2px 12px rgba(26,107,85,0.08)",
              overflow: "hidden",
              boxSizing: "border-box",
            }}
          >
            <p
              style={{
                fontSize: 16,
                color: "#3D5A52",
                textAlign: "center",
                maxWidth: 480,
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Está bien, no hay apuro. Cuando estés listo para tomar acción, aquí
              estaremos.
            </p>
            <Link
              to="/guia"
              className="inline-flex items-center justify-center gap-2 rounded-full"
              style={{
                display: "block",
                width: "fit-content",
                margin: "20px auto 0",
                padding: "10px 22px",
                background: "transparent",
                border: "1.5px solid #1A6B55",
                color: "#1A6B55",
                fontWeight: 600,
                fontSize: 14,
                textAlign: "center",
              }}
            >
              Empieza con nuestra guía gratuita
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      style={{ background: "#F0F5F3", overflow: "hidden", boxSizing: "border-box" }}
      className="py-16 md:py-24"
    >
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy md:text-4xl">
            Reserva tu llamada gratuita de 15 minutos
          </h2>
          <p className="mt-3 text-base text-brand-neutral-700">
            Cuéntanos un poco sobre ti y elige el horario que mejor te funcione.
          </p>
        </div>

        <div
          className="rounded-[20px] bg-white p-6 md:p-8"
          style={{
            border: "1px solid #C5E4DA",
            boxShadow: "0 2px 12px rgba(26,107,85,0.08)",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          {!qualified && (
            <>
              <span
                className="inline-block rounded-full px-3 py-1"
                style={{
                  background: "#E8F5F0",
                  color: "#1A6B55",
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                Llamada gratuita · 15 minutos
              </span>

              <h3 className="mt-4 text-2xl font-extrabold text-brand-navy">
                Reserva tu llamada gratuita
              </h3>
              <p className="mt-2 text-sm text-brand-neutral-700">
                Cuéntanos un poco sobre ti y elige el horario que mejor te
                funcione.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div>
                  <p className="mb-3 text-sm font-semibold text-brand-navy">
                    ¿Cuál es tu situación financiera actual?
                  </p>
                  <div className="grid gap-2">
                    {Q1_OPTIONS.map((o) => (
                      <OptionCard
                        key={o.value}
                        selected={q1 === o.value}
                        onClick={() => setQ1(o.value)}
                      >
                        {o.label}
                      </OptionCard>
                    ))}
                  </div>
                  {errors.q1 && (
                    <p className="mt-2 text-xs text-red-600">{errors.q1}</p>
                  )}
                </div>

                <div>
                  <p className="mb-3 text-sm font-semibold text-brand-navy">
                    ¿Cuánto estarías dispuesto a invertir en tu educación
                    financiera?
                  </p>
                  <div className="grid gap-2">
                    {Q2_OPTIONS.map((o) => (
                      <OptionCard
                        key={o.value}
                        selected={q2 === o.value}
                        onClick={() => setQ2(o.value)}
                      >
                        {o.label}
                      </OptionCard>
                    ))}
                  </div>
                  {errors.q2 && (
                    <p className="mt-2 text-xs text-red-600">{errors.q2}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="q3"
                    className="mb-3 block text-sm font-semibold text-brand-navy"
                  >
                    ¿Por qué quieres esta llamada?{" "}
                    <span className="font-normal text-brand-neutral-700">
                      (mínimo 20 caracteres)
                    </span>
                  </label>
                  <textarea
                    id="q3"
                    value={q3}
                    onChange={(e) => setQ3(e.target.value)}
                    placeholder="Cuéntanos brevemente tu situación..."
                    rows={4}
                    className="w-full rounded-[10px] border-[1.5px] bg-white px-4 py-3 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E9B7A]"
                    style={{ borderColor: "#C5E4DA", color: "#1C2B27" }}
                  />
                  <div className="mt-1 flex items-center justify-between">
                    {errors.q3 ? (
                      <p className="text-xs text-red-600">{errors.q3}</p>
                    ) : (
                      <span />
                    )}
                    <span className="text-xs text-brand-neutral-400">
                      {q3.trim().length}/20
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-bold text-white transition-colors hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E9B7A] focus-visible:ring-offset-2"
                  style={{ background: "#2E9B7A", fontWeight: 700 }}
                >
                  Reservar mi llamada gratuita
                  <ArrowRight className="size-4" />
                </button>
              </form>
            </>
          )}

          {qualified && <CalEmbed />}
        </div>
      </div>
    </section>
  );
}
