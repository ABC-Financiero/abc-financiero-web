import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ClipboardList,
  Map,
  Users,
  Target,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QualificationCall } from "@/components/QualificationCall";

export const Route = createFileRoute("/mentoria")({
  head: () => ({
    meta: [
      { title: "Mentoría 1 a 1 | ABC Financiero" },
      {
        name: "description",
        content:
          "Mentoría personalizada de finanzas e inversiones desde Honduras. Reserva una llamada gratuita de 15 minutos.",
      },
      { property: "og:title", content: "Mentoría 1 a 1 | ABC Financiero" },
      {
        property: "og:description",
        content:
          "Acompañamiento real para ordenar tus finanzas, salir de deudas o empezar a invertir con un plan hecho para ti.",
      },
    ],
  }),
  component: MentoriaPage,
});

function Hero() {
  return (
    <section style={{ background: "#E8F5F0" }} className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h1
          className="text-4xl font-extrabold tracking-tight md:text-5xl"
          style={{ color: "#1C2B27", letterSpacing: "-0.03em" }}
        >
          Mentoría personalizada de finanzas e inversiones
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg" style={{ color: "#3D5A52" }}>
          Un plan hecho para ti, con acompañamiento real desde la primera
          sesión.
        </p>
        <div className="mt-8">
          <a
            href="#llamada"
            className="inline-flex items-center justify-center rounded-full text-white transition-colors hover:opacity-95"
            style={{ background: "#2E9B7A", fontWeight: 700, padding: "12px 26px" }}
          >
            Reservar llamada gratuita
          </a>
        </div>
      </div>
    </section>
  );
}

function Includes() {
  const items = [
    {
      icon: ClipboardList,
      title: "Diagnóstico inicial",
      text: "Analizamos tu situación financiera real desde la primera sesión.",
    },
    {
      icon: Map,
      title: "Plan de acción personalizado",
      text: "Un camino claro adaptado a tus metas y tu punto de partida.",
    },
    {
      icon: Users,
      title: "Seguimiento continuo",
      text: "No estás solo. Te acompañamos en cada paso del proceso.",
    },
    {
      icon: Target,
      title: "Enfoque en resultados",
      text: "Cada sesión tiene un objetivo claro y medible.",
    },
  ];
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "#1A6B55" }}>
          ¿Qué incluye la mentoría?
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((it) => (
            <div
              key={it.title}
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

function ForWhom() {
  const items = [
    "Quieres ordenar tus finanzas pero no sabes cómo empezar",
    "Tienes deudas y necesitas un plan real para salir de ellas",
    "Quieres empezar a invertir con acompañamiento profesional",
  ];
  return (
    <section style={{ background: "#F0F5F3" }} className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "#1A6B55" }}>
          ¿Para quién es?
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <div
              key={i}
              className="rounded-[20px] bg-white p-7"
              style={{
                border: "1px solid #C5E4DA",
                boxShadow: "0 2px 12px rgba(26,107,85,0.06)",
              }}
            >
              <span
                className="inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ background: "#2E9B7A" }}
              >
                {i + 1}
              </span>
              <p className="mt-4 text-[15px] leading-[1.65]" style={{ color: "#1C2B27", fontWeight: 500 }}>
                {t}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote:
        "Logré entender por dónde empezar y por fin tengo un plan claro para mi dinero.",
      name: "María",
      age: "32 años",
      initials: "MR",
    },
    {
      quote:
        "El acompañamiento marca la diferencia. Pude salir de deudas con un plan real.",
      name: "Carlos",
      age: "28 años",
      initials: "CL",
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

function FinalCTA() {
  return (
    <section style={{ background: "#1A6B55" }} className="py-20 text-center">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          ¿Listo para empezar?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base" style={{ color: "rgba(255,255,255,0.85)" }}>
          El primer paso es una conversación. Sin compromiso.
        </p>
        <div className="mt-8">
          <a
            href="#llamada"
            className="inline-flex items-center justify-center rounded-full transition-colors hover:opacity-95"
            style={{
              background: "#FFFFFF",
              color: "#1A6B55",
              fontWeight: 700,
              padding: "12px 26px",
            }}
          >
            Reservar llamada gratuita
          </a>
        </div>
      </div>
    </section>
  );
}

function MentoriaPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-neutral-700 antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <Includes />
        <ForWhom />
        <Testimonials />
        <QualificationCall id="llamada" />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
