import { createFileRoute } from "@tanstack/react-router";
import { CircleCheck, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionDivider } from "@/components/PageHero";
import { HotmartButton } from "@/components/HotmartButton";
import ebookCover from "@/assets/ebook-cover.png.asset.json";

export const Route = createFileRoute("/ebook")({
  head: () => ({
    meta: [
      { title: "E-book: De Principiante a Inversionista | ABC Financiero" },
      {
        name: "description",
        content:
          "La guía completa para entender la bolsa de valores y hacer tu primera inversión desde Honduras. E-book digital de 18 páginas.",
      },
      { property: "og:title", content: "De Principiante a Inversionista — E-book" },
      {
        property: "og:description",
        content:
          "18 páginas que pueden cambiar cómo ves tu dinero. Aprende a invertir desde Honduras.",
      },
      { property: "og:image", content: ebookCover.url },
    ],
  }),
  component: EbookPage,
});

function EbookCover() {
  return (
    <div
      className="relative mx-auto w-full max-w-md overflow-hidden rounded-[20px]"
      style={{
        background:
          "linear-gradient(160deg, #0E1816 0%, #0F3D33 60%, #1A6B55 100%)",
        boxShadow: "0 30px 60px rgba(14,24,22,0.35)",
        padding: 18,
      }}
    >
      <img
        src={ebookCover.url}
        alt="Portada del e-book: Invertir en la Bolsa de Valores por Ricardo Araque"
        className="block w-full rounded-[14px]"
        style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }}
      />
    </div>
  );
}


function Hero() {
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
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2 md:items-center md:py-28">
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
            <Sparkles className="size-3.5" /> E-book digital · 18 páginas
          </span>
          <h1
            className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl"
            style={{ color: "#FFFFFF", letterSpacing: "-0.03em" }}
          >
            De Principiante a{" "}
            <span
              style={{
                background:
                  "linear-gradient(120deg, #5CE0B6 0%, #A7E3CE 60%, #FFFFFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Inversionista
            </span>
          </h1>
          <p className="mt-5 text-lg" style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
            La guía completa para entender cómo funciona la bolsa de valores y
            sentirte listo para hacer tu primera inversión desde Honduras.
          </p>
          <div className="mt-7">
            <div style={{ color: "#FFFFFF", fontSize: 32, fontWeight: 700, lineHeight: 1 }}>
              L270
            </div>
            <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, marginTop: 4 }}>pago único</div>
          </div>
          <div className="mt-6">
            <HotmartButton
              href="https://pay.hotmart.com/D103514595T?checkoutMode=2"
              label="Comprar ahora"
            />
          </div>
        </div>
        <div>
          <EbookCover />
        </div>
      </div>
    </section>
  );
}

function WhatYouLearn() {
  const items = [
    "El ABC de la Bolsa de Valores: fundamentos para entender el mercado",
    "Cómo romper el miedo a invertir: barreras psicológicas resueltas",
    "Cómo invertir desde Honduras con poco capital",
    "Instrumentos esenciales: acciones, ETFs y más",
    "Cómo analizar una acción sin complicarte",
    "Estrategias y herramientas digitales para maximizar tus inversiones",
    "Cómo medir tu progreso y crear rutinas de inversión",
    "Casos reales y cómo construir tu plan personal",
    "Cómo evitar fraudes y los 10 errores más comunes",
  ];
  const annexes = [
    "Comparación de Brokers: Hapi, Interactive Brokers y otros",
    "Guía práctica de la estrategia DCA paso a paso",
    "Los 10 errores que todo inversionista debe evitar",
  ];
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "#1A6B55" }}>
          ¿Qué aprenderás?
        </h2>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {items.map((t) => (
            <li
              key={t}
              className="flex items-start gap-3 rounded-[16px] p-4"
              style={{ background: "#FAFBF9", border: "1px solid #C5E4DA" }}
            >
              <CircleCheck className="mt-0.5 size-5 shrink-0" style={{ color: "#6B4FC8" }} strokeWidth={1.8} />
              <span className="text-[15px]" style={{ color: "#1C2B27", lineHeight: 1.55 }}>
                {t}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <p className="text-sm font-bold uppercase tracking-wider" style={{ color: "#6B4FC8" }}>
            Incluye 3 anexos
          </p>
          <ul className="mt-4 grid gap-3 md:grid-cols-3">
            {annexes.map((a) => (
              <li
                key={a}
                className="rounded-[14px] p-4 text-sm"
                style={{
                  background: "#EEEDFE",
                  border: "1px solid #AFA9EC",
                  color: "#3C3489",
                  fontWeight: 500,
                }}
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ForWhom() {
  const items = [
    {
      title: "Nunca has invertido",
      text: "Empiezas desde cero y quieres entender cómo funciona la bolsa de valores antes de arriesgar tu dinero.",
    },
    {
      title: "Tienes miedo de perder",
      text: "Quieres invertir pero el miedo te paraliza. Este libro te explica los riesgos reales y cómo manejarlos.",
    },
    {
      title: "Quieres un punto de partida claro",
      text: "No buscas teoría vacía, sino pasos concretos para empezar desde Honduras.",
    },
  ];
  return (
    <section style={{ background: "#F0F5F3" }} className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "#1A6B55" }}>
          ¿Este e-book es para ti?
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="card-hover rounded-[20px] bg-white p-7"
              style={{
                border: "1px solid #C5E4DA",
                boxShadow: "0 2px 12px rgba(26,107,85,0.06)",
              }}
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

function Transformation() {
  const items = [
    "Entender cómo funciona la bolsa de valores sin confusión",
    "Saber qué instrumentos de inversión existen y cuál te conviene",
    "Tener un plan personal de inversión adaptado a ti",
    "Sentirte listo para hacer tu primera inversión con confianza",
  ];
  return (
    <section style={{ background: "#EEEDFE" }} className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "#3C3489" }}>
          Al terminar este e-book vas a...
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

function FinalCTA() {
  return (
    <section
      className="py-20 text-center text-white"
      style={{ background: "linear-gradient(135deg, #0E1816 0%, #0F3D33 50%, #1A6B55 100%)" }}
    >
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          Tu primera inversión empieza con entender.
        </h2>
        <p
          className="mx-auto mt-4 max-w-xl text-base md:text-lg"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          18 páginas que pueden cambiar cómo ves tu dinero. Un solo pago y acceso para siempre.
        </p>
        <div className="mt-6">
          <div style={{ color: "#FFFFFF", fontSize: 32, fontWeight: 700, lineHeight: 1 }}>L270</div>
          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, marginTop: 4 }}>pago único</div>
        </div>
        <div className="mt-6 flex justify-center">
          <HotmartButton
            href="https://pay.hotmart.com/D103514595T?checkoutMode=2"
            label="Comprar ahora"
          />
        </div>
      </div>
    </section>
  );
}

function EbookPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-neutral-700 antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <SectionDivider />
        <WhatYouLearn />
        <SectionDivider />
        <ForWhom />
        <SectionDivider />
        <Transformation />
        <SectionDivider />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
