import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronDown,
  TrendingDown,
  LineChart,
  CreditCard,
  PiggyBank,
  ArrowRight,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HotmartButton } from "@/components/HotmartButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABC Financiero | Educación financiera honesta para Honduras" },
      {
        name: "description",
        content:
          "ABC Financiero te acompaña a ordenar tus finanzas, salir de deudas y aprender a invertir desde Honduras. Sin jerga técnica, sin promesas vacías.",
      },
      { property: "og:title", content: "ABC Financiero | Educación financiera para Honduras" },
      {
        property: "og:description",
        content:
          "Ordena tus finanzas, sal de deudas y aprende a invertir con un acompañamiento real desde Honduras.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

/* --------------------------------- Hero --------------------------------- */
function Hero() {
  return (
    <section
      className="relative flex items-center justify-center bg-white"
      style={{ minHeight: "80vh" }}
    >
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1
          className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl"
          style={{ color: "#1C2B27", letterSpacing: "-0.035em", fontWeight: 800 }}
        >
          ¿Sientes que tu dinero no avanza?
        </h1>
        <p
          className="mx-auto mt-6 max-w-2xl text-lg md:text-xl"
          style={{ color: "#3D5A52", fontWeight: 400, lineHeight: 1.6 }}
        >
          En ABC Financiero te acompañamos a ordenar tus finanzas, salir de
          deudas y aprender a invertir — sin jerga técnica, sin promesas vacías.
        </p>
        <div className="mt-12 flex justify-center">
          <a
            href="#soluciones"
            aria-label="Desplazarse a soluciones"
            className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-brand-emerald-light"
            style={{ color: "#1A6B55" }}
          >
            <ChevronDown className="size-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ For Whom ------------------------------- */
function ForWhom() {
  const items = [
    {
      icon: CreditCard,
      label: "No llegas a fin de mes",
      text: "Tus ingresos son estables pero el dinero desaparece sin que sepas a dónde va.",
    },
    {
      icon: LineChart,
      label: "Quieres invertir pero no sabes cómo",
      text: "Escuchas sobre bolsa de valores e inversiones pero no sabes por dónde empezar.",
    },
    {
      icon: TrendingDown,
      label: "Tienes deudas y quieres salir",
      text: "Sientes que las deudas no bajan sin importar cuánto pagues.",
    },
    {
      icon: PiggyBank,
      label: "Ahorras pero tu dinero no crece",
      text: "Tienes dinero guardado pero parado, sin generar nada.",
    },
  ];
  return (
    <section style={{ background: "#F0F5F3" }} className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2
          className="text-3xl font-bold tracking-tight md:text-4xl"
          style={{ color: "#1A6B55" }}
        >
          ¿Esto es para ti?
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((it) => (
            <div
              key={it.label}
              className="rounded-[20px] bg-white p-7"
              style={{
                border: "1px solid #C5E4DA",
                boxShadow: "0 2px 12px rgba(26,107,85,0.06)",
              }}
            >
              <span
                className="grid h-11 w-11 place-items-center rounded-full"
                style={{ background: "#E8F5F0", color: "#1A6B55" }}
              >
                <it.icon className="size-5" strokeWidth={1.6} />
              </span>
              <h3 className="mt-4 text-lg font-bold" style={{ color: "#1C2B27" }}>
                {it.label}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.65]" style={{ color: "#3D5A52" }}>
                {it.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------ What ABC Financiero Does ---------------------- */
function WhatWeDo() {
  return (
    <section id="nosotros" className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2
          className="text-3xl font-bold tracking-tight md:text-4xl"
          style={{ color: "#1A6B55" }}
        >
          Cómo podemos ayudarte
        </h2>
        <p
          className="mx-auto mt-6 max-w-[600px] text-[17px] leading-[1.7]"
          style={{ color: "#3D5A52" }}
        >
          ABC Financiero es una consultora hondureña de educación financiera.
          Trabajamos contigo para que entiendas tu dinero, tomes mejores
          decisiones y empieces a construir un futuro financiero real — desde
          donde estás hoy.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------ Solutions ------------------------------ */
function Solutions() {
  const cardBase: React.CSSProperties = {
    background: "#FFFFFF",
    border: "1px solid #C5E4DA",
    borderRadius: 20,
    boxShadow: "0 2px 12px rgba(26,107,85,0.06)",
  };
  const badge: React.CSSProperties = {
    background: "#E8F5F0",
    color: "#1A6B55",
    borderRadius: 999,
    fontSize: 11,
    fontWeight: 700,
    padding: "4px 10px",
    display: "inline-block",
  };
  const price: React.CSSProperties = {
    fontWeight: 800,
    color: "#1A6B55",
    fontSize: 18,
  };

  return (
    <section id="soluciones" style={{ background: "#F0F5F3" }} className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2
          className="text-3xl font-bold tracking-tight md:text-4xl"
          style={{ color: "#1A6B55" }}
        >
          Nuestras soluciones
        </h2>
        <p className="mt-3 text-base md:text-lg" style={{ color: "#3D5A52" }}>
          Elige el punto de partida que mejor se adapta a donde estás hoy.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Card 1 — Guía gratuita */}
          <article style={cardBase} className="flex flex-col p-7">
            <span style={badge}>Gratis</span>
            <h3 className="mt-4 text-xl font-bold" style={{ color: "#1C2B27" }}>
              Guía para abrir tu cuenta en Hapi
            </h3>
            <p className="mt-2 flex-1 text-[15px] leading-[1.65]" style={{ color: "#3D5A52" }}>
              Aprende paso a paso cómo empezar a invertir en la bolsa de valores
              desde Honduras, con solo $10.
            </p>
            <div className="mt-5 flex items-center justify-between gap-3">
              <span style={price}>Gratis</span>
              <Link
                to="/guia"
                className="inline-flex items-center gap-2 rounded-full transition-colors hover:bg-[#E8F5F0]"
                style={{
                  border: "1.5px solid #1A6B55",
                  color: "#1A6B55",
                  padding: "10px 20px",
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                Obtener guía
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </article>

          {/* Card 2 — E-book */}
          <article style={cardBase} className="flex flex-col p-7">
            <span style={badge}>Digital</span>
            <h3 className="mt-4 text-xl font-bold" style={{ color: "#1C2B27" }}>
              De Principiante a Inversionista
            </h3>
            <p className="mt-2 flex-1 text-[15px] leading-[1.65]" style={{ color: "#3D5A52" }}>
              La guía completa para entender cómo funciona la inversión y
              empezar a hacer crecer tu dinero desde Honduras.
            </p>
            <div className="mt-5 flex items-center justify-between gap-3">
              <span style={price}>L270</span>
              <HotmartButton href="https://pay.hotmart.com/D103514595T?checkoutMode=2" />
            </div>
          </article>

          {/* Card 3 — Curso */}
          <article style={cardBase} className="flex flex-col p-7">
            <span style={badge}>Curso</span>
            <h3 className="mt-4 text-xl font-bold" style={{ color: "#1C2B27" }}>
              Crece tu dinero en la bolsa de valores
            </h3>
            <p className="mt-2 flex-1 text-[15px] leading-[1.65]" style={{ color: "#3D5A52" }}>
              Aprende a construir un portafolio simple y funcional desde
              Honduras. A tu ritmo, sin experiencia previa.
            </p>
            <div className="mt-5 flex items-center justify-between gap-3">
              <span style={price}>L800</span>
              <HotmartButton href="https://pay.hotmart.com/E106105146G?checkoutMode=2" />
            </div>
          </article>

          {/* Card 4 — Mentoría */}
          <article style={cardBase} className="flex flex-col p-7">
            <span style={badge}>Personalizado</span>
            <h3 className="mt-4 text-xl font-bold" style={{ color: "#1C2B27" }}>
              Mentoría 1 a 1
            </h3>
            <p className="mt-2 flex-1 text-[15px] leading-[1.65]" style={{ color: "#3D5A52" }}>
              Acompañamiento personalizado para ordenar tus finanzas, salir de
              deudas o aprender a invertir con un plan hecho para ti.
            </p>
            <div className="mt-5 flex items-center justify-between gap-3">
              <span style={{ ...price, fontSize: 14, fontWeight: 600, color: "#3D5A52" }}>
                Desde una sesión
              </span>
              <Link
                to="/mentoria"
                className="inline-flex items-center gap-2 rounded-full text-white transition-colors hover:opacity-95"
                style={{
                  background: "#1A6B55",
                  padding: "10px 20px",
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                Ver mentoría
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Testimonials ----------------------------- */
function Testimonials() {
  const items = [
    {
      quote: "Por primera vez entiendo qué pasa con mi dinero y tengo un plan real.",
      name: "Andrea",
      age: "29 años",
      initials: "AM",
    },
    {
      quote: "Aprendí a invertir desde Honduras sin necesidad de saber inglés ni de tener mucho dinero.",
      name: "Luis",
      age: "34 años",
      initials: "LR",
    },
  ];
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2
          className="text-3xl font-bold tracking-tight md:text-4xl"
          style={{ color: "#1A6B55" }}
        >
          Lo que dicen quienes ya trabajan con nosotros
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((t) => (
            <div
              key={t.name}
              className="rounded-[16px] p-7"
              style={{ background: "#E8F5F0", border: "1px solid #C5E4DA" }}
            >
              <p className="text-[16px] leading-[1.7]" style={{ color: "#1C2B27" }}>
                “{t.quote}”
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span
                  className="grid h-10 w-10 place-items-center rounded-full text-sm font-bold text-white"
                  style={{ background: "#2E9B7A" }}
                >
                  {t.initials}
                </span>
                <span className="text-sm font-semibold" style={{ color: "#1A6B55" }}>
                  {t.name} · {t.age}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Soft CTA ------------------------------- */
function SoftCTA() {
  return (
    <section id="contacto" style={{ background: "#1A6B55" }} className="py-20 text-center">
      <div className="mx-auto max-w-3xl px-4">
        <h2
          className="text-3xl font-bold tracking-tight text-white md:text-4xl"
          style={{ fontWeight: 700 }}
        >
          ¿No sabes por dónde empezar?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base md:text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
          Reserva una llamada gratuita de 15 minutos y te ayudamos a encontrar
          el camino correcto.
        </p>
        <div className="mt-8">
          <Link
            to="/mentoria"
            hash="llamada"
            className="inline-flex items-center justify-center rounded-full text-white transition-colors hover:opacity-95"
            style={{ background: "#2E9B7A", fontWeight: 700, padding: "12px 26px" }}
          >
            Reservar llamada gratuita
          </Link>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-neutral-700 antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <ForWhom />
        <WhatWeDo />
        <Solutions />
        <Testimonials />
        <SoftCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
