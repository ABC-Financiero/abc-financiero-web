import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronDown,
  GraduationCap,
  LineChart,
  Users,
  ArrowRight,
  BookOpen,
  Lightbulb,
  UserCheck,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Quote,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useUsdHnlRate, formatLempiras } from "@/lib/useExchangeRate";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABC Financiero | Educación financiera para hondureños" },
      {
        name: "description",
        content:
          "Aprende a invertir en la bolsa de valores desde Honduras con acompañamiento real, educación clara y sin complicaciones.",
      },
      { property: "og:title", content: "ABC Financiero | Inversiones para Honduras" },
      {
        property: "og:description",
        content:
          "Educación financiera honesta para hondureños que quieren aprender a invertir en la bolsa de valores.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

/* Professional gradient palette (replaces green+lila combo) */
const GRAD_DEEP =
  "linear-gradient(135deg, #0E1816 0%, #0F3D33 45%, #1A6B55 100%)";
const GRAD_DARK_HERO =
  "linear-gradient(160deg, #0A1F1A 0%, #0F3D33 55%, #133D2F 100%)";

/* ----------------------------- Section Divider -------------------------- */
function Divider() {
  return (
    <div
      aria-hidden
      style={{
        height: 1,
        background:
          "linear-gradient(to right, transparent, rgba(26,107,85,0.18), transparent)",
      }}
    />
  );
}

/* --------------------------------- Hero --------------------------------- */
function Hero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: "calc(100vh - 88px)",
        marginTop: -88,
        paddingTop: 88,
        background: GRAD_DARK_HERO,
      }}
    >
      {/* Decorative grid + glows */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        aria-hidden
        className="absolute"
        style={{
          top: "-20%",
          right: "-10%",
          width: 520,
          height: 520,
          background:
            "radial-gradient(circle, rgba(46,155,122,0.35), transparent 65%)",
          filter: "blur(20px)",
        }}
      />
      <div
        aria-hidden
        className="absolute"
        style={{
          bottom: "-15%",
          left: "-10%",
          width: 460,
          height: 460,
          background:
            "radial-gradient(circle, rgba(15,61,51,0.55), transparent 65%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center">
        <span
          className="inline-flex items-center gap-2 rounded-full px-3 py-1"
          style={{
            background: "rgba(255,255,255,0.08)",
            color: "#A7E3CE",
            border: "1px solid rgba(167,227,206,0.25)",
            backdropFilter: "blur(8px)",
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          <Sparkles className="size-3.5" /> Honduras · Educación Financiera
        </span>

        <h1
          className="mt-6 font-extrabold leading-[1.04] tracking-tight"
          style={{
            color: "#FFFFFF",
            letterSpacing: "-0.035em",
            fontSize: "clamp(2.3rem, 5.2vw, 3.75rem)",
          }}
        >
          Nos concentramos en una verdadera{" "}
          <span
            style={{
              background:
                "linear-gradient(120deg, #5CE0B6 0%, #A7E3CE 60%, #FFFFFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            educación financiera
          </span>{" "}
          para tu futuro
        </h1>

        <p
          className="mx-auto mt-6"
          style={{
            color: "rgba(255,255,255,0.78)",
            fontSize: 18,
            lineHeight: 1.6,
            maxWidth: 620,
          }}
        >
          Te enseñamos, paso a paso, cómo invertir tu dinero en la bolsa de
          valores desde Honduras — con claridad, estrategia y acompañamiento
          real.
        </p>

        {/* Trust strip */}
        <div
          className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-3 text-xs"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <TrendingUp className="size-3.5" /> +1,000 miembros en la comunidad privada
          </span>
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <ShieldCheck className="size-3.5" /> Invertimos con la misma
            estrategia que enseñamos
          </span>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#soluciones"
            aria-label="Desplazarse a soluciones"
            className="grid h-10 w-10 place-items-center rounded-full"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            <ChevronDown className="size-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ----------------------- Cómo te ayudamos a crecer ---------------------- */
function HowWeHelp() {
  const items = [
    {
      icon: GraduationCap,
      title: "Educación sin complicaciones",
      text: "Te enseñamos cómo funciona la bolsa de valores en un lenguaje claro, sin jerga técnica ni fórmulas imposibles.",
    },
    {
      icon: LineChart,
      title: "Estrategia real, no teoría",
      text: "Construyes un portafolio funcional adaptado a tu perfil de inversor, con pasos concretos desde el primer día.",
    },
    {
      icon: Users,
      title: "Acompañamiento continuo",
      text: "No estás solo. Desde una sesión de mentoría hasta una comunidad activa, tienes apoyo en cada paso.",
    },
  ];
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2
            className="text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: "#1A6B55" }}
          >
            Cómo te ayudamos a crecer
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="text-center md:text-left"
              style={{ paddingBottom: 24, borderBottom: "1px solid #E2EDE8" }}
            >
              <span
                className="inline-grid place-items-center"
                style={{ color: "#1A6B55" }}
              >
                <it.icon size={32} strokeWidth={1.6} />
              </span>
              <h3
                className="mt-4 text-xl font-bold"
                style={{ color: "#1C2B27" }}
              >
                {it.title}
              </h3>
              <p
                className="mt-2 text-[15px] leading-[1.65]"
                style={{ color: "#3D5A52" }}
              >
                {it.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Solutions ------------------------------ */
function Solutions() {
  const { rate } = useUsdHnlRate();
  const cursoLps = formatLempiras(37, rate);

  const cardBase: React.CSSProperties = {
    background: "#FFFFFF",
    border: "1px solid #C5E4DA",
    borderRadius: 20,
    boxShadow: "0 4px 20px rgba(26,107,85,0.08)",
  };
  const badgeGreen: React.CSSProperties = {
    background: "#E8F5F0",
    color: "#1A6B55",
    borderRadius: 999,
    fontSize: 11,
    fontWeight: 700,
    padding: "4px 10px",
    display: "inline-block",
  };
  const badgeNeutral: React.CSSProperties = {
    background: "#F0F5F3",
    color: "#1A6B55",
    borderRadius: 999,
    fontSize: 11,
    fontWeight: 700,
    padding: "4px 10px",
    display: "inline-block",
  };
  const priceStyle: React.CSSProperties = {
    color: "#1A6B55",
    fontWeight: 700,
    fontSize: 28,
    lineHeight: 1,
  };
  const subPrice: React.CSSProperties = {
    color: "#8BA89F",
    fontSize: 12,
    marginTop: 4,
  };

  const IconBox = ({ icon: Icon }: { icon: typeof BookOpen }) => (
    <span
      className="grid place-items-center text-white"
      style={{
        background: GRAD_DEEP,
        borderRadius: 12,
        width: 44,
        height: 44,
      }}
    >
      <Icon className="size-5" strokeWidth={1.8} />
    </span>
  );

  return (
    <section id="soluciones" style={{ background: "#F0F5F3" }} className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2
            className="text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: "#1A6B55" }}
          >
            Nuestras soluciones
          </h2>
          <p className="mt-3 text-base md:text-lg" style={{ color: "#3D5A52" }}>
            Elige el punto de partida que mejor se adapta a donde estás hoy.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Card 1 - Guía */}
          <article style={cardBase} className="card-hover flex flex-col p-7">
            <div className="flex items-start justify-between">
              <IconBox icon={BookOpen} />
              <span style={badgeGreen}>Gratis</span>
            </div>
            <h3 className="mt-5 text-xl font-bold" style={{ color: "#1C2B27" }}>
              Guía para abrir tu cuenta en Hapi
            </h3>
            <p className="mt-2 flex-1 text-[15px] leading-[1.65]" style={{ color: "#3D5A52" }}>
              Aprende paso a paso cómo empezar a invertir en la bolsa de valores
              desde Honduras, con solo $10.
            </p>
            <div className="mt-5">
              <div style={priceStyle}>Gratis</div>
            </div>
            <div className="mt-5">
              <Link to="/guia" className="btn-ghost text-sm">
                Obtener guía <ArrowRight className="size-4" />
              </Link>
            </div>
          </article>

          {/* Card 2 - E-book */}
          <article style={cardBase} className="card-hover flex flex-col p-7">
            <div className="flex items-start justify-between">
              <IconBox icon={BookOpen} />
              <span style={badgeNeutral}>Digital</span>
            </div>
            <h3 className="mt-5 text-xl font-bold" style={{ color: "#1C2B27" }}>
              De Principiante a Inversionista
            </h3>
            <p className="mt-2 flex-1 text-[15px] leading-[1.65]" style={{ color: "#3D5A52" }}>
              La guía completa para entender cómo funciona la inversión y empezar
              a hacer crecer tu dinero desde Honduras.
            </p>
            <div className="mt-5">
              <div style={priceStyle}>L270</div>
              <div style={subPrice}>pago único</div>
            </div>
            <div className="mt-5">
              <Link to="/ebook" className="btn-primary text-sm">
                Comprar ahora
              </Link>
            </div>
          </article>

          {/* Card 3 - Curso */}
          <article style={cardBase} className="card-hover flex flex-col p-7">
            <div className="flex items-start justify-between">
              <IconBox icon={Lightbulb} />
              <span style={badgeNeutral}>Curso</span>
            </div>
            <h3 className="mt-5 text-xl font-bold" style={{ color: "#1C2B27" }}>
              Crece tu dinero en la bolsa de valores
            </h3>
            <p className="mt-2 flex-1 text-[15px] leading-[1.65]" style={{ color: "#3D5A52" }}>
              Aprende a construir un portafolio simple y funcional desde
              Honduras. A tu ritmo, sin experiencia previa.
            </p>
            <div className="mt-5">
              <div style={priceStyle}>{cursoLps}</div>
              <div style={subPrice}>pago único</div>
            </div>
            <div className="mt-5">
              <Link to="/curso" className="btn-primary text-sm">
                Comprar ahora
              </Link>
            </div>
          </article>

          {/* Card 4 - Mentoría */}
          <article style={cardBase} className="card-hover flex flex-col p-7">
            <div className="flex items-start justify-between">
              <IconBox icon={UserCheck} />
              <span style={badgeNeutral}>Personalizado</span>
            </div>
            <h3 className="mt-5 text-xl font-bold" style={{ color: "#1C2B27" }}>
              Mentoría 1 a 1
            </h3>
            <p className="mt-2 flex-1 text-[15px] leading-[1.65]" style={{ color: "#3D5A52" }}>
              Acompañamiento personalizado para aprender a invertir con un plan
              hecho para ti.
            </p>
            <div className="mt-5">
              <div style={priceStyle}>L1,600</div>
              <div style={subPrice}>por sesión</div>
            </div>
            <div className="mt-5">
              <Link to="/mentoria" className="btn-ghost text-sm">
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
      quote:
        "Amigo, gracias a su página hoy comencé el mundo de las inversiones. Espero me vaya bien y gracias de verdad por el contenido, sin duda alguna es muy importante.",
      name: "Seguidor en Instagram",
      tag: "Primera inversión",
      initials: "SI",
    },
    {
      quote:
        "Buenas noches, ya compré la guía y estoy en la parte de la app. Ya hice mis primeras 2 compras con VTI y VXUS.",
      name: "Jonah Z.",
      tag: "Cliente de la guía",
      initials: "JZ",
    },
    {
      quote:
        "Buen día a todos, les cuento que ya abrí mi cuenta en Hapi, super fácil con lo aprendido en este grupo y con la guía que compartió @Ricardo Araque — un inversor hondureño más en la bolsa de Estados Unidos. Muchas gracias.",
      name: "Miembro de la comunidad",
      tag: "Cuenta abierta en Hapi",
      initials: "MC",
    },
  ];

  const [idx, setIdx] = useState(0);
  const total = items.length;
  const go = (n: number) => setIdx((n + total) % total);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % total), 7000);
    return () => clearInterval(t);
  }, [total]);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2
          className="text-center text-3xl font-bold tracking-tight md:text-4xl"
          style={{ color: "#1A6B55" }}
        >
          Lo que dicen quienes ya aprenden con nosotros
        </h2>

        <div className="relative mt-12">
          <div
            className="overflow-hidden rounded-[24px]"
            style={{
              background:
                "linear-gradient(180deg, #FFFFFF 0%, #F0F7F4 100%)",
              border: "1px solid #C5E4DA",
              boxShadow: "0 8px 32px rgba(26,107,85,0.08)",
            }}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${idx * 100}%)` }}
            >
              {items.map((t) => (
                <div
                  key={t.name + t.tag}
                  className="w-full shrink-0 p-8 md:p-12"
                >
                  <Quote
                    className="size-8"
                    style={{ color: "#1A6B55", opacity: 0.4 }}
                  />
                  <p
                    className="mt-4 font-serif italic"
                    style={{
                      color: "#1C2B27",
                      fontSize: 20,
                      lineHeight: 1.55,
                    }}
                  >
                    “{t.quote}”
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <span
                      className="grid h-11 w-11 place-items-center rounded-full text-sm font-bold text-white"
                      style={{ background: GRAD_DEEP }}
                    >
                      {t.initials}
                    </span>
                    <div>
                      <div
                        className="text-sm font-bold"
                        style={{ color: "#1A6B55" }}
                      >
                        {t.name}
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "#8BA89F" }}
                      >
                        {t.tag}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              aria-label="Anterior"
              onClick={() => go(idx - 1)}
              className="grid h-10 w-10 place-items-center rounded-full"
              style={{ background: "#F0F5F3", color: "#1A6B55" }}
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Ir al testimonio ${i + 1}`}
                  onClick={() => setIdx(i)}
                  style={{
                    width: i === idx ? 24 : 8,
                    height: 8,
                    borderRadius: 999,
                    background: i === idx ? "#1A6B55" : "#C5E4DA",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>
            <button
              aria-label="Siguiente"
              onClick={() => go(idx + 1)}
              className="grid h-10 w-10 place-items-center rounded-full"
              style={{ background: "#F0F5F3", color: "#1A6B55" }}
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- About ---------------------------------- */
function AboutRicardo() {
  return (
    <section id="nosotros" style={{ background: "#F0F5F3" }} className="py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2
          className="text-3xl font-bold tracking-tight md:text-4xl"
          style={{ color: "#1A6B55" }}
        >
          ¿Qué es ABC Financiero?
        </h2>
        <div
          className="mx-auto mt-6 space-y-4 text-[16px] leading-[1.75]"
          style={{ color: "#3D5A52" }}
        >
          <p>
            ABC Financiero es una empresa de educación financiera fundada
            por <strong style={{ color: "#1C2B27" }}>Ricardo Araque</strong>,
            creada para que cualquier hondureño pueda aprender a invertir en la
            bolsa de valores con claridad, estrategia y acompañamiento real.
          </p>
          <p>
            Nuestro objetivo es simple: darte las herramientas, el conocimiento
            y la confianza para que tomes mejores decisiones con tu dinero —
            sin importar desde dónde estés empezando.
          </p>
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
        <Divider />
        <HowWeHelp />
        <Divider />
        <Solutions />
        <Divider />
        <Testimonials />
        <Divider />
        <AboutRicardo />
      </main>
      <SiteFooter />
    </div>
  );
}
