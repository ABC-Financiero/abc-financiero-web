import { createFileRoute, Link } from "@tanstack/react-router";
import { CircleCheck, MessagesSquare, Phone, Infinity as InfinityIcon, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionDivider } from "@/components/PageHero";
import { HotmartButton } from "@/components/HotmartButton";

export const Route = createFileRoute("/curso")({
  head: () => ({
    meta: [
      { title: "Curso: Crece tu dinero en la bolsa | ABC Financiero" },
      {
        name: "description",
        content:
          "Curso pregrabado de 13 módulos para construir un portafolio simple y funcional desde Honduras. Incluye comunidad y llamada personal.",
      },
      { property: "og:title", content: "Crece tu dinero en la bolsa de valores" },
      {
        property: "og:description",
        content: "13 módulos · Comunidad WhatsApp · Llamada personal · Acceso de por vida.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Crece tu dinero en la bolsa de valores",
          description: "Curso pregrabado de 13 módulos para aprender a invertir en la bolsa de valores desde Honduras. Incluye comunidad WhatsApp, llamada personal y acceso de por vida.",
          provider: {
            "@type": "Organization",
            name: "ABC Financiero",
            url: "https://abcfinanciero.com",
          },
          educationalLevel: "Beginner",
          inLanguage: "es",
          offers: {
            "@type": "Offer",
            price: "1044",
            priceCurrency: "HNL",
            availability: "https://schema.org/InStock",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "¿Necesito experiencia previa?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. El curso empieza desde cero absoluto. No necesitas saber nada de finanzas para empezar.",
              },
            },
            {
              "@type": "Question",
              name: "¿Cuánto dinero necesito para invertir?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "En el broker que usamos puedes empezar con L250. El curso te enseña a construir con lo que tienes hoy, no es necesario miles de lempiras.",
              },
            },
            {
              "@type": "Question",
              name: "¿Qué pasa si el mercado cae?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "El módulo de perfil de inversor y plan de inversión está diseñado precisamente para esto. Invertir bien significa saber qué hacer cuando el mercado baja.",
              },
            },
            {
              "@type": "Question",
              name: "¿Tengo tiempo para hacer el curso?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Es un curso pregrabado. Lo ves a tu ritmo, cuando puedas, cuantas veces quieras.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: CursoPage,
});

const COURSE_PRICE = "L1,044";
const COURSE_HOTMART = "https://pay.hotmart.com/E106105146G?checkoutMode=2";

function Cover() {
  return (
    <div
      className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[20px] p-8"
      style={{
        background: "linear-gradient(160deg, #0E1816 0%, #0F3D33 55%, #1A6B55 100%)",
        boxShadow: "0 30px 60px rgba(107,79,200,0.30)",
      }}
    >
      <div className="flex h-full flex-col justify-between text-white">
        <span style={{ fontSize: 11, letterSpacing: "0.2em", color: "rgba(255,255,255,0.82)", fontWeight: 700 }}>
          ABC FINANCIERO · CURSO
        </span>
        <div>
          <p className="text-3xl font-extrabold leading-[1.1]" style={{ letterSpacing: "-0.02em" }}>
            Crece tu dinero en la bolsa de valores
          </p>
          <div
            className="mt-5 inline-block rounded-full px-3 py-1"
            style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", fontSize: 11, fontWeight: 700 }}
          >
            13 módulos · A tu ritmo
          </div>
        </div>
      </div>
    </div>
  );
}

function PriceBlock() {
  return (
    <div>
      <div style={{ color: "#1A6B55", fontSize: 32, fontWeight: 700, lineHeight: 1 }}>{COURSE_PRICE}</div>
      <div style={{ color: "#8BA89F", fontSize: 12, marginTop: 4 }}>pago único</div>
    </div>
  );
}

function Hero() {
  const bonusBadge: React.CSSProperties = {
    background: "rgba(255,255,255,0.08)",
    color: "#A7E3CE",
    border: "1px solid rgba(167,227,206,0.25)",
    borderRadius: 999,
    fontSize: 12,
    padding: "6px 12px",
    fontWeight: 600,
  };
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0A1F1A 0%, #0F3D33 55%, #133D2F 100%)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          top: "-20%",
          right: "-10%",
          width: 520,
          height: 520,
          background:
            "radial-gradient(circle, rgba(46,155,122,0.30), transparent 65%)",
          filter: "blur(20px)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center md:py-28">
        <div>
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1"
            style={{
              background: "rgba(255,255,255,0.08)",
              color: "#A7E3CE",
              border: "1px solid rgba(167,227,206,0.25)",
              fontSize: 11,
              fontWeight: 700,
            }}
          >
            <Sparkles className="size-3.5" /> Curso pregrabado · 13 módulos
          </span>
          <h1
            className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl"
            style={{ color: "#FFFFFF", letterSpacing: "-0.03em" }}
          >
            Crece tu dinero en la{" "}
            <span
              style={{
                background:
                  "linear-gradient(120deg, #5CE0B6 0%, #A7E3CE 60%, #FFFFFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              bolsa de valores
            </span>
          </h1>
          <p className="mt-5 text-lg" style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
            Aprende paso a paso cómo construir un portafolio de inversión
            adaptado a ti desde Honduras — sin experiencia previa, a tu propio ritmo.
          </p>
          <div className="mt-7 flex justify-center">
            <div>
              <div style={{ color: "#FFFFFF", fontSize: 32, fontWeight: 700, lineHeight: 1 }}>{COURSE_PRICE}</div>
              <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 12, marginTop: 4 }}>pago único</div>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <HotmartButton href={COURSE_HOTMART} label="Comprar ahora" />
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span style={bonusBadge}>✓ Comunidad WhatsApp</span>
            <span style={bonusBadge}>✓ Llamada de 30 min con Ricardo</span>
            <span style={bonusBadge}>✓ Acceso de por vida</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ForWhom() {
  const items = [
    {
      title: "No entiendes nada de bolsa de valores",
      text: "Nunca has invertido y quieres aprender desde cero, sin perderte en teoría.",
    },
    {
      title: "Ya tienes cuenta pero no sabes qué hacer",
      text: "Abriste Hapi u otra plataforma pero no tienes estrategia ni dirección.",
    },
    {
      title: "Inviertes al azar",
      text: "Compras acciones o ETFs sin un plan claro y no sabes si estás construyendo algo real.",
    },
    {
      title: "Quieres un portafolio que funcione",
      text: "Buscas una estrategia simple, adaptada a tu perfil, que genere crecimiento real.",
    },
  ];
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "#1A6B55" }}>
          ¿Este curso es para ti?
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="card-hover rounded-[20px] bg-white p-7"
              style={{ border: "1px solid #C5E4DA", boxShadow: "0 2px 12px rgba(26,107,85,0.06)" }}
            >
              <span
                className="inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ background: "#6B4FC8" }}
              >
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold" style={{ color: "#1C2B27" }}>
                {it.title}
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

function Modules() {
  const items = [
    ["Introducción al curso", "Conoce el camino que vas a recorrer y lo que necesitas para empezar."],
    ["Qué esperar de este curso", "Expectativas claras, sin promesas exageradas."],
    ["El verdadero objetivo de invertir", "Por qué invertimos y qué queremos lograr realmente."],
    ["Las bases reales de la bolsa de valores", "Cómo funciona el mercado, qué son las acciones y los ETFs."],
    ["Define tu perfil de inversor", "Descubre qué tipo de inversor eres y qué estrategia se adapta a ti."],
    ["Cómo construir tu portafolio funcional", "Los pasos para armar un portafolio simple que funcione a largo plazo."],
    ["Preparar tu cuenta de Hapi correctamente", "Configuración paso a paso para empezar a invertir desde Honduras."],
    ["Cómo transferir dinero a Hapi", "El proceso completo para fondear tu cuenta sin complicaciones."],
    ["Cómo manejar Hapi", "Navega la plataforma con confianza y ejecuta tus primeras inversiones."],
    ["Aprender a leer tus inversiones", "Entiende tus números, tu rendimiento y qué significan."],
    ["Tu plan de inversión", "Construye un plan personalizado y sostenible para el largo plazo."],
    ["Resultados reales", "Casos reales de cómo se ve el crecimiento en el tiempo."],
    ["Ya entiendes cómo crecer tu dinero", "Cierre, próximos pasos y cómo seguir avanzando."],
  ];
  return (
    <section style={{ background: "#F0F5F3" }} className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "#1A6B55" }}>
          Lo que aprenderás
        </h2>
        <p className="mt-3 text-base md:text-lg" style={{ color: "#3D5A52" }}>
          13 módulos diseñados para llevarte de cero a tener un portafolio funcional.
        </p>
        <ol className="mt-12 grid gap-4 md:grid-cols-2">
          {items.map(([title, desc], i) => (
            <li
              key={title}
              className="flex gap-4 rounded-[16px] bg-white p-5"
              style={{ border: "1px solid #C5E4DA" }}
            >
              <span
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-extrabold text-white"
                style={{ background: "#6B4FC8" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-base font-bold" style={{ color: "#1C2B27" }}>
                  {title}
                </p>
                <p className="mt-1 text-sm" style={{ color: "#3D5A52", lineHeight: 1.6 }}>
                  {desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Transformation() {
  const items = [
    "Entender cómo funciona la bolsa de valores desde cero",
    "Tener un portafolio real, funcional y adaptado a tu perfil",
    "Saber cómo usar Hapi para invertir desde Honduras",
    "Contar con un plan de inversión que puedas sostener en el tiempo",
  ];
  return (
    <section style={{ background: "#EEEDFE" }} className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "#3C3489" }}>
          Al terminar el curso vas a...
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {items.map((t) => (
            <div
              key={t}
              className="flex items-start gap-4 rounded-[16px] bg-white p-6"
              style={{ border: "1px solid #AFA9EC" }}
            >
              <span
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full"
                style={{ background: "#EEEDFE", color: "#6B4FC8" }}
              >
                <CircleCheck className="size-5" strokeWidth={1.8} />
              </span>
              <p className="text-[15px]" style={{ color: "#1C2B27", lineHeight: 1.6, fontWeight: 500 }}>
                {t}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Bonuses() {
  const items = [
    {
      icon: MessagesSquare,
      title: "Comunidad de WhatsApp",
      text: "Acceso al grupo privado donde puedes hacer preguntas, compartir avances y aprender con otros.",
    },
    {
      icon: Phone,
      title: "Llamada de cortesía de 30 minutos",
      text: "Una sesión personal conmigo para revisar tu portafolio y resolver tus dudas.",
    },
    {
      icon: InfinityIcon,
      title: "Acceso de por vida",
      text: "El curso es tuyo para siempre, incluyendo futuras actualizaciones.",
    },
  ];
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "#1A6B55" }}>
          Además, al comprar el curso recibes:
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="card-hover rounded-[20px] bg-white p-7"
              style={{ border: "1px solid #C5E4DA" }}
            >
              <span
                className="grid h-12 w-12 place-items-center rounded-2xl text-white"
                style={{ background: "linear-gradient(135deg, #0E1816 0%, #0F3D33 50%, #1A6B55 100%)" }}
              >
                <it.icon className="size-5" strokeWidth={1.8} />
              </span>
              <h3 className="mt-5 text-lg font-bold" style={{ color: "#1C2B27" }}>
                {it.title}
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

function Objections() {
  const items = [
    {
      q: '"No tengo experiencia"',
      a: "El curso empieza desde cero absoluto. No necesitas saber nada de finanzas para empezar.",
    },
    {
      q: '"No tengo mucho dinero para invertir"',
      a: "En el broker que usamos puedes empezar con L250. El curso te enseña a construir con lo que tienes hoy, no es necesario miles de lempiras.",
    },
    {
      q: '"¿Y si el mercado cae?"',
      a: "El módulo de perfil de inversor y plan de inversión está diseñado precisamente para esto. Invertir bien significa saber qué hacer cuando el mercado baja.",
    },
    {
      q: '"No tengo tiempo"',
      a: "Es un curso pregrabado. Lo ves a tu ritmo, cuando puedas, cuantas veces quieras.",
    },
  ];
  return (
    <section style={{ background: "#F0F5F3" }} className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "#1A6B55" }}>
          Lo que quizás estás pensando...
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {items.map((it) => (
            <div
              key={it.q}
              className="rounded-[12px] bg-white p-5"
              style={{ borderLeft: "3px solid #6B4FC8", border: "1px solid #C5E4DA", borderLeftWidth: 3 }}
            >
              <p className="text-base font-bold" style={{ color: "#1C2B27" }}>
                {it.q}
              </p>
              <p className="mt-2 text-sm leading-[1.65]" style={{ color: "#3D5A52" }}>
                → {it.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section
      className="py-20 text-center text-white"
      style={{ background: "linear-gradient(135deg, #0E1816 0%, #0F3D33 50%, #1A6B55 100%)" }}
    >
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          Empieza hoy a construir tu portafolio.
        </h2>
        <p
          className="mx-auto mt-4 max-w-xl text-base md:text-lg"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          Acceso de por vida. Comunidad incluida. Llamada personal incluida.
        </p>
        <div className="mt-6">
          <div style={{ color: "#FFFFFF", fontSize: 32, fontWeight: 700, lineHeight: 1 }}>{COURSE_PRICE}</div>
          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 12, marginTop: 4 }}>pago único</div>
        </div>
        <div className="mx-auto mt-6 w-full max-w-[400px]">
          <HotmartButton href={COURSE_HOTMART} label="Comprar ahora" fullWidth />
        </div>
        <div className="mt-4">
          <Link
            to="/mentoria"
            hash="llamada"
            className="text-[13px] underline-offset-4 hover:underline"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            ¿Tienes dudas? Reserva una llamada gratuita →
          </Link>
        </div>
      </div>
    </section>
  );
}

function CursoPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-neutral-700 antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <SectionDivider />
        <ForWhom />
        <SectionDivider />
        <Modules />
        <SectionDivider />
        <Transformation />
        <SectionDivider />
        <Bonuses />
        <SectionDivider />
        <Objections />
        <SectionDivider />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
