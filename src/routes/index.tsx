import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronDown,
  Sparkles,
  LineChart,
  Compass,
  Target,
  ArrowRight,
  RefreshCw,
  DollarSign,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HotmartButton } from "@/components/HotmartButton";
import { useUsdHnlRate, formatLempiras } from "@/lib/useExchangeRate";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABC Financiero | Aprende a invertir en la bolsa desde Honduras" },
      {
        name: "description",
        content:
          "Educación financiera e inversiones para hondureños. Aprende a hacer crecer tu dinero en la bolsa de valores de Estados Unidos con un plan claro y honesto.",
      },
      { property: "og:title", content: "ABC Financiero | Inversiones para Honduras" },
      {
        property: "og:description",
        content:
          "Educación financiera e inversiones para hondureños que quieren aprender a hacer crecer su dinero en la bolsa de valores.",
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
      className="bg-hero-glow relative flex items-center justify-center"
      style={{ minHeight: "82vh" }}
    >
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <span
          className="inline-flex items-center gap-2 rounded-full px-3 py-1"
          style={{ background: "#EEEDFE", color: "#3C3489", fontSize: 12, fontWeight: 700 }}
        >
          <Sparkles className="size-3.5" /> Honduras · Bolsa de valores
        </span>
        <h1
          className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl"
          style={{ color: "#1C2B27", letterSpacing: "-0.035em" }}
        >
          Aprende a hacer crecer tu dinero <br className="hidden md:block" />
          en la <span style={{ color: "#1A6B55" }}>bolsa de valores</span>.
        </h1>
        <p
          className="mx-auto mt-6 max-w-2xl text-lg md:text-xl"
          style={{ color: "#3D5A52", lineHeight: 1.6 }}
        >
          Educación financiera e inversiones para hondureños que quieren
          aprender a hacer crecer su dinero en la bolsa de valores de Estados
          Unidos.
        </p>
        <div className="mt-12 flex justify-center">
          <a
            href="#soluciones"
            aria-label="Desplazarse a soluciones"
            className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-[#E8F5F0]"
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
      icon: Compass,
      color: "#1A6B55",
      bg: "#E8F5F0",
      label: "Nunca has invertido",
      text: "Quieres empezar pero no sabes cómo funciona la bolsa de valores ni por dónde comenzar.",
    },
    {
      icon: LineChart,
      color: "#6B4FC8",
      bg: "#EEEDFE",
      label: "Ya tienes cuenta pero no sabes qué hacer",
      text: "Abriste una cuenta de inversión pero no tienes una estrategia clara o no sabes cómo seguir.",
    },
    {
      icon: Target,
      color: "#1A6B55",
      bg: "#E8F5F0",
      label: "Inviertes pero sin un plan",
      text: "Compras activos financieros sin entender si estás construyendo algo real o si son rentables.",
    },
    {
      icon: Sparkles,
      color: "#6B4FC8",
      bg: "#EEEDFE",
      label: "Quieres un portafolio funcional",
      text: "Buscas una estrategia adaptada a tu perfil de inversor y que genere crecimiento real.",
    },
  ];
  return (
    <section style={{ background: "#F0F5F3" }} className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "#1A6B55" }}>
          ¿Esto es para ti?
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((it) => (
            <div
              key={it.label}
              className="card-hover rounded-[20px] bg-white p-7"
              style={{
                border: "1px solid #C5E4DA",
                boxShadow: "0 2px 12px rgba(26,107,85,0.06)",
              }}
            >
              <span
                className="grid h-11 w-11 place-items-center rounded-full"
                style={{ background: it.bg, color: it.color }}
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
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "#1A6B55" }}>
          Cómo podemos ayudarte
        </h2>
        <p className="mx-auto mt-6 max-w-[600px] text-[17px] leading-[1.7]" style={{ color: "#3D5A52" }}>
          ABC Financiero es una empresa hondureña de educación financiera.
          Trabajamos contigo para que entiendas la bolsa de valores, tomes
          mejores decisiones de inversión y empieces a construir un patrimonio
          real — desde donde estás hoy.
        </p>
      </div>
    </section>
  );
}

/* ----------------------------- Rate Card -------------------------------- */
function RateCard() {
  const { rate, loading, failed } = useUsdHnlRate();
  return (
    <div
      className="mx-auto mt-2 max-w-xl rounded-[12px] px-5 py-4"
      style={{
        background: "#EEEDFE",
        border: "1px solid #AFA9EC",
        fontSize: 13,
        color: "#3C3489",
      }}
    >
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <DollarSign className="size-4" style={{ color: "#6B4FC8" }} />
          <span style={{ fontWeight: 600 }}>
            Tipo de cambio hoy: 1 USD = {loading ? "…" : rate.toFixed(2)} HNL
          </span>
          <RefreshCw className="size-3.5" style={{ color: "#6B4FC8", opacity: 0.7 }} />
        </div>
        {failed && <span style={{ opacity: 0.7 }}>(estimado)</span>}
      </div>
      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1" style={{ color: "#3D5A52" }}>
        <span>E-book $9.99 ≈ <strong style={{ color: "#1A6B55" }}>{formatLempiras(9.99, rate)}</strong></span>
        <span>Curso $29 ≈ <strong style={{ color: "#1A6B55" }}>{formatLempiras(29, rate)}</strong></span>
      </div>
    </div>
  );
}

/* ------------------------------ Solutions ------------------------------ */
function Solutions() {
  const { rate } = useUsdHnlRate();

  const cardBase: React.CSSProperties = {
    background: "#FFFFFF",
    border: "1px solid #C5E4DA",
    borderRadius: 20,
    boxShadow: "0 2px 12px rgba(26,107,85,0.06)",
  };
  const greenBadge: React.CSSProperties = {
    background: "#E8F5F0",
    color: "#1A6B55",
    borderRadius: 999,
    fontSize: 11,
    fontWeight: 700,
    padding: "4px 10px",
    display: "inline-block",
  };
  const lilaBadge: React.CSSProperties = {
    background: "#EEEDFE",
    color: "#3C3489",
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
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "#1A6B55" }}>
          Nuestras soluciones
        </h2>
        <p className="mt-3 text-base md:text-lg" style={{ color: "#3D5A52" }}>
          Elige el punto de partida que mejor se adapta a donde estás hoy.
        </p>

        <div className="mt-6">
          <RateCard />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Card 1 — Guía gratuita */}
          <article style={cardBase} className="card-hover flex flex-col p-7">
            <span style={greenBadge}>Gratis</span>
            <h3 className="mt-4 text-xl font-bold" style={{ color: "#1C2B27" }}>
              Guía para abrir tu cuenta en Hapi
            </h3>
            <p className="mt-2 flex-1 text-[15px] leading-[1.65]" style={{ color: "#3D5A52" }}>
              Aprende paso a paso cómo empezar a invertir en la bolsa de valores
              desde Honduras, con solo $10.
            </p>
            <div className="mt-5 flex items-center justify-between gap-3">
              <span style={price}>Gratis</span>
              <Link to="/guia" className="btn-ghost text-sm">
                Obtener guía <ArrowRight className="size-4" />
              </Link>
            </div>
          </article>

          {/* Card 2 — E-book */}
          <article style={cardBase} className="card-hover flex flex-col p-7">
            <span style={greenBadge}>E-book digital</span>
            <h3 className="mt-4 text-xl font-bold" style={{ color: "#1C2B27" }}>
              De Principiante a Inversionista
            </h3>
            <p className="mt-2 flex-1 text-[15px] leading-[1.65]" style={{ color: "#3D5A52" }}>
              La guía completa para entender cómo funciona la bolsa de valores y
              hacer tu primera inversión desde Honduras.
            </p>
            <div className="mt-5 flex items-center justify-between gap-3">
              <span style={price}>{formatLempiras(9.99, rate)}</span>
              <Link to="/ebook" className="btn-ghost text-sm">
                Ver e-book <ArrowRight className="size-4" />
              </Link>
            </div>
          </article>

          {/* Card 3 — Curso */}
          <article style={cardBase} className="card-hover flex flex-col p-7">
            <span style={greenBadge}>Curso</span>
            <h3 className="mt-4 text-xl font-bold" style={{ color: "#1C2B27" }}>
              Crece tu dinero en la bolsa de valores
            </h3>
            <p className="mt-2 flex-1 text-[15px] leading-[1.65]" style={{ color: "#3D5A52" }}>
              Aprende a construir un portafolio simple y funcional desde
              Honduras. A tu ritmo, sin experiencia previa.
            </p>
            <div className="mt-5 flex items-center justify-between gap-3">
              <span style={price}>{formatLempiras(29, rate)}</span>
              <Link to="/curso" className="btn-ghost text-sm">
                Ver curso <ArrowRight className="size-4" />
              </Link>
            </div>
          </article>

          {/* Card 4 — Mentoría (featured gradient) */}
          <article
            className="card-hover flex flex-col p-7 text-white"
            style={{
              background: "linear-gradient(135deg, #1A6B55 0%, #6B4FC8 100%)",
              borderRadius: 20,
              boxShadow: "0 8px 24px rgba(107,79,200,0.18)",
            }}
          >
            <span style={lilaBadge}>Personalizado</span>
            <h3 className="mt-4 text-xl font-bold text-white">Mentoría 1 a 1</h3>
            <p className="mt-2 flex-1 text-[15px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.9)" }}>
              Acompañamiento personalizado para construir tu portafolio de
              inversión con un plan hecho para ti.
            </p>
            <div className="mt-5 flex items-center justify-between gap-3">
              <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>
                Desde una sesión
              </span>
              <Link
                to="/mentoria"
                className="inline-flex items-center gap-2 rounded-full transition-colors hover:opacity-95"
                style={{
                  background: "#FFFFFF",
                  color: "#1A6B55",
                  padding: "10px 20px",
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                Ver mentoría <ArrowRight className="size-4" />
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
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "#1A6B55" }}>
          Lo que dicen quienes ya trabajan con nosotros
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((t) => (
            <div
              key={t.name}
              className="rounded-[20px] p-7"
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

/* ----------------------------- About Ricardo ---------------------------- */
function AboutRicardo() {
  return (
    <section id="nosotros" className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "#1A6B55" }}>
            ¿Por qué existe ABC Financiero?
          </h2>
          <div className="mt-6 space-y-4 text-[16px] leading-[1.75]" style={{ color: "#3D5A52" }}>
            <p>
              Mi nombre es <strong style={{ color: "#1C2B27" }}>Ricardo Araque</strong>.
              Empecé a interesarme en las inversiones cuando me di cuenta de
              que nadie me había enseñado cómo hacer crecer mi dinero, y que
              esa realidad la compartían miles de hondureños.
            </p>
            <p>
              ABC Financiero nació de esa frustración, de no saber con quién
              ir para aprender a invertir de forma segura. Creé esta empresa
              para que cualquier hondureño, sin importar desde dónde empiece,
              tenga acceso a educación financiera real, práctica y honesta.
            </p>
          </div>
          <div className="mt-7">
            <a href="/nosotros" className="btn-ghost text-sm">
              Conocer más <ArrowRight className="size-4" />
            </a>
          </div>
        </div>

        <div
          className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px]"
          style={{
            background: "linear-gradient(135deg, #E8F5F0 0%, #EEEDFE 100%)",
            border: "1px solid #C5E4DA",
          }}
        >
          <div
            className="absolute inset-6 rounded-[20px]"
            style={{
              background: "linear-gradient(135deg, #1A6B55 0%, #6B4FC8 100%)",
              boxShadow: "0 20px 40px rgba(26,107,85,0.25)",
            }}
          >
            <div className="flex h-full flex-col items-center justify-center p-8 text-center text-white">
              <span
                className="grid h-20 w-20 place-items-center rounded-full text-3xl font-extrabold"
                style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}
              >
                RA
              </span>
              <p className="mt-5 text-lg font-bold">Ricardo Araque</p>
              <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
                Fundador · Educador financiero
              </p>
            </div>
          </div>
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
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
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
            className="inline-flex items-center justify-center rounded-full transition-colors hover:opacity-95"
            style={{
              background: "#FFFFFF",
              color: "#1A6B55",
              fontWeight: 700,
              padding: "12px 26px",
            }}
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
        <AboutRicardo />
        <SoftCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
