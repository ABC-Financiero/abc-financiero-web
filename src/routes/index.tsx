import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronDown,
  GraduationCap,
  LineChart,
  Users,
  ArrowRight,
  User,
  BookOpen,
  Lightbulb,
  UserCheck,
  Sparkles,
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

/* --------------------------------- Hero --------------------------------- */
function Hero() {
  return (
    <section
      className="bg-dark-hero relative flex items-center justify-center"
      style={{ minHeight: "calc(100vh - 88px)", marginTop: -88, paddingTop: 88 }}
    >
      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center">
        <span
          className="inline-flex items-center gap-2 rounded-full px-3 py-1"
          style={{
            background: "rgba(107,79,200,0.15)",
            color: "#C4B5FD",
            border: "1px solid rgba(107,79,200,0.3)",
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          <Sparkles className="size-3.5" /> Honduras · Educación Financiera
        </span>
        <h1
          className="mt-6 font-extrabold leading-[1.05] tracking-tight"
          style={{
            color: "#FFFFFF",
            letterSpacing: "-0.035em",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            fontWeight: 800,
          }}
        >
          Nos concentramos en una verdadera educación financiera para tu futuro
        </h1>
        <p
          className="mx-auto mt-6"
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: 18,
            lineHeight: 1.6,
            maxWidth: 560,
          }}
        >
          Aprende a invertir en la bolsa de valores desde Honduras, con
          acompañamiento real y sin complicaciones.
        </p>
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
              style={{
                paddingBottom: 24,
                borderBottom: "1px solid #EEEDFE",
              }}
            >
              <span
                className="inline-grid place-items-center"
                style={{ color: "#6B4FC8" }}
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
  const badgeLila: React.CSSProperties = {
    background: "#EEEDFE",
    color: "#3C3489",
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
        background: "linear-gradient(135deg, #1A6B55, #6B4FC8)",
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
              <span style={badgeLila}>Digital</span>
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
              <span style={badgeLila}>Curso</span>
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
              <span style={badgeLila}>Personalizado</span>
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
              <Link to="/mentoria" className="btn-dark text-sm">
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
        "Por primera vez entiendo qué pasa con mi dinero y tengo un plan real.",
      name: "Andrea",
      age: "29 años",
      initials: "AM",
    },
    {
      quote:
        "Aprendí a invertir desde Honduras sin necesidad de saber inglés ni de tener mucho dinero.",
      name: "Luis",
      age: "34 años",
      initials: "LR",
    },
  ];
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2
          className="text-3xl font-bold tracking-tight md:text-4xl text-center"
          style={{ color: "#1A6B55" }}
        >
          Lo que dicen quienes ya trabajan con nosotros
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((t) => (
            <div
              key={t.name}
              className="rounded-[20px] p-7 card-hover"
              style={{ background: "#E8F5F0", border: "1px solid #C5E4DA" }}
            >
              <p className="text-[16px] leading-[1.7]" style={{ color: "#1C2B27" }}>
                "{t.quote}"
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span
                  className="grid h-10 w-10 place-items-center rounded-full text-sm font-bold text-white"
                  style={{ background: "#6B4FC8" }}
                >
                  {t.initials}
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: "#1A6B55" }}
                >
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
    <section id="nosotros" style={{ background: "#F0F5F3" }} className="py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center">
        <div>
          <h2
            className="text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: "#1A6B55" }}
          >
            ¿Por qué existe ABC Financiero?
          </h2>
          <div
            className="mt-6 space-y-4 text-[16px] leading-[1.75]"
            style={{ color: "#3D5A52" }}
          >
            <p>
              Mi nombre es{" "}
              <strong style={{ color: "#1C2B27" }}>Ricardo Araque</strong>.
              Empecé a interesarme en las inversiones cuando me di cuenta de
              que nadie me había enseñado cómo hacer crecer mi dinero, y que
              esa realidad la compartían miles de hondureños.
            </p>
            <p>
              ABC Financiero nació de esa frustración. Lo creé para que
              cualquier hondureño, sin importar desde dónde empiece, tenga
              acceso a educación financiera real, práctica y honesta.
            </p>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div
            className="grid place-items-center rounded-full"
            style={{
              width: 200,
              height: 200,
              background: "#E8F5F0",
              border: "1px solid #C5E4DA",
              color: "#6B4FC8",
            }}
          >
            <User size={96} strokeWidth={1.2} />
          </div>
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
        <HowWeHelp />
        <Solutions />
        <Testimonials />
        <AboutRicardo />
      </main>
      <SiteFooter />
    </div>
  );
}
