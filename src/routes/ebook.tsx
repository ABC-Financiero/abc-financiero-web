import { createFileRoute } from "@tanstack/react-router";
import { CircleCheck } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HotmartButton } from "@/components/HotmartButton";
import { useUsdHnlRate, formatLempiras } from "@/lib/useExchangeRate";

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
    ],
  }),
  component: EbookPage,
});

function EbookCover() {
  return (
    <div
      className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[20px] p-8"
      style={{
        background: "linear-gradient(160deg, #1A6B55 0%, #0E1816 100%)",
        boxShadow: "0 30px 60px rgba(26,107,85,0.35)",
      }}
    >
      <div
        className="absolute inset-x-8 top-1/3 h-1"
        style={{ background: "#6B4FC8", borderRadius: 2 }}
      />
      <div className="flex h-full flex-col justify-between text-white">
        <span style={{ fontSize: 11, letterSpacing: "0.2em", color: "#AFA9EC", fontWeight: 700 }}>
          ABC FINANCIERO · E-BOOK
        </span>
        <div>
          <p className="text-3xl font-extrabold leading-[1.1]" style={{ letterSpacing: "-0.02em" }}>
            De Principiante a Inversionista
          </p>
          <p className="mt-4 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
            Por Ricardo Araque
          </p>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const { rate } = useUsdHnlRate();
  return (
    <section style={{ background: "#E8F5F0" }} className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center">
        <div>
          <span
            className="inline-block rounded-full px-3 py-1"
            style={{ background: "#EEEDFE", color: "#3C3489", fontSize: 11, fontWeight: 700 }}
          >
            E-book digital · 18 páginas
          </span>
          <h1
            className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl"
            style={{ color: "#1C2B27", letterSpacing: "-0.03em" }}
          >
            De Principiante a Inversionista
          </h1>
          <p className="mt-5 text-lg" style={{ color: "#3D5A52", lineHeight: 1.6 }}>
            La guía completa para entender cómo funciona la bolsa de valores y
            sentirte listo para hacer tu primera inversión desde Honduras.
          </p>
          <p className="mt-6 text-2xl font-extrabold" style={{ color: "#1A6B55" }}>
            {formatLempiras(9.99, rate)}{" "}
            <span style={{ fontSize: 14, color: "#3D5A52", fontWeight: 500 }}>
              · pago único (≈ $9.99)
            </span>
          </p>
          <div className="mt-7">
            <HotmartButton
              href="https://pay.hotmart.com/D103514595T?checkoutMode=2"
              label={`Comprar ahora — ${formatLempiras(9.99, rate)}`}
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
                style={{ background: i % 2 === 0 ? "#1A6B55" : "#6B4FC8" }}
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

function Objections() {
  const items = [
    {
      q: '"No tengo suficiente dinero"',
      a: "En el broker que uso, puedes empezar a invertir desde L250 ($10). El e-book te muestra cómo hacerlo desde Honduras con poco capital.",
    },
    {
      q: '"No entiendo nada de finanzas"',
      a: "Está escrito para principiantes absolutos. No tiene jerga técnica ni temas complejos.",
    },
    {
      q: '"¿Y si pierdo mi dinero?"',
      a: "El libro dedica un capítulo completo a entender y manejar el riesgo. Invertir con miedo es peor que no invertir.",
    },
  ];
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "#1A6B55" }}>
          Lo que quizás estás pensando...
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
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
  const { rate } = useUsdHnlRate();
  return (
    <section
      className="py-20 text-center text-white"
      style={{ background: "linear-gradient(135deg, #1A6B55 0%, #6B4FC8 100%)" }}
    >
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          Tu primera inversión empieza con entender.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base md:text-lg" style={{ color: "rgba(255,255,255,0.9)" }}>
          18 páginas que pueden cambiar cómo ves tu dinero. {formatLempiras(9.99, rate)} —
          un solo pago y acceso para siempre.
        </p>
        <div className="mt-8 flex justify-center">
          <HotmartButton
            href="https://pay.hotmart.com/D103514595T?checkoutMode=2"
            label={`Comprar ahora — ${formatLempiras(9.99, rate)}`}
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
        <WhatYouLearn />
        <ForWhom />
        <Transformation />
        <Objections />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
