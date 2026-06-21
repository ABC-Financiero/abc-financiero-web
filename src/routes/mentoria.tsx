import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ClipboardList,
  Map as MapIcon,
  Users,
  Target,
  HelpCircle,
  Sparkles,
  MessageCircle,
  Video,
  CreditCard,
  CalendarCheck,
  LifeBuoy,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero, SectionDivider } from "@/components/PageHero";
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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Mentoría 1 a 1 | ABC Financiero",
          description:
            "Mentoría personalizada de finanzas e inversiones desde Honduras. Acompañamiento real para ordenar tus finanzas, salir de deudas o empezar a invertir con un plan hecho para ti.",
          provider: {
            "@type": "Organization",
            name: "ABC Financiero",
            url: "https://abcfinanciero.com",
          },
          areaServed: { "@type": "Country", name: "Honduras" },
          inLanguage: "es",
        }),
      },
    ],
  }),
  component: MentoriaPage,
});

function Hero({ onReserve }: { onReserve: () => void }) {
  return (
    <PageHero
      eyebrow={
        <>
          <Sparkles className="size-3.5" /> Mentoría personalizada
        </>
      }
      title={
        <>
          Un plan de inversión hecho{" "}
          <span
            style={{
              background:
                "linear-gradient(120deg, #5CE0B6 0%, #A7E3CE 60%, #FFFFFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            para ti
          </span>
        </>
      }
      subtitle="Acompañamiento real desde la primera sesión: claridad, estrategia y pasos concretos."
    >
      <button
        type="button"
        onClick={onReserve}
        className="inline-flex items-center justify-center rounded-full text-white transition-opacity hover:opacity-95"
        style={{ background: "#2E9B7A", fontWeight: 700, padding: "12px 26px" }}
      >
        Reservar llamada gratuita
      </button>
    </PageHero>
  );
}

function HowItWorks({ onReserve }: { onReserve: () => void }) {
  const steps = [
    {
      icon: MessageCircle,
      title: "1. Contacto inicial",
      text: "Nos escribes por WhatsApp o reservas una llamada gratuita de 15 minutos. Resolvemos tus dudas y te explicamos si la mentoría es para ti — sin compromiso.",
    },
    {
      icon: Video,
      title: "2. Sesión de mentoría (2 horas por Google Meet)",
      text: "Videollamada 1 a 1 donde cubrimos conceptos, estrategias, errores comunes, análisis de activos y cómo manejar la plataforma de inversión paso a paso.",
    },
    {
      icon: CreditCard,
      title: "3. Reserva con 50% de adelanto",
      text: "Cuando decides avanzar, se reserva tu cupo con el 50% de adelanto. El 50% restante se paga al finalizar la sesión.",
    },
    {
      icon: CalendarCheck,
      title: "4. Agendamos día y hora",
      text: "Confirmado el adelanto, eliges el día y la hora que mejor te funcione para realizar la mentoría.",
    },
    {
      icon: LifeBuoy,
      title: "5. Seguimiento por WhatsApp",
      text: "Al cumplir el objetivo de la sesión, tienes acceso a soporte continuo por WhatsApp para resolver dudas y recibir acompañamiento.",
    },
  ];
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2
          className="text-3xl font-bold tracking-tight md:text-4xl"
          style={{ color: "#1A6B55" }}
        >
          ¿Cómo funciona?
        </h2>
        <p
          className="mt-3 max-w-2xl text-[15px] leading-[1.65]"
          style={{ color: "#3D5A52" }}
        >
          Un proceso claro y sin sorpresas, desde el primer mensaje hasta el
          seguimiento posterior a tu mentoría.
        </p>
        <ol className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((s) => (
            <li
              key={s.title}
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
                <s.icon className="size-5" strokeWidth={1.6} />
              </span>
              <h3
                className="mt-4 text-lg font-bold"
                style={{ color: "#1C2B27" }}
              >
                {s.title}
              </h3>
              <p
                className="mt-2 text-[15px] leading-[1.65]"
                style={{ color: "#3D5A52" }}
              >
                {s.text}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <button
            type="button"
            onClick={onReserve}
            className="inline-flex items-center justify-center rounded-full text-white transition-opacity hover:opacity-95"
            style={{
              background: "#2E9B7A",
              fontWeight: 700,
              padding: "12px 26px",
            }}
          >
            Reservar llamada gratuita
          </button>
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
      icon: MapIcon,
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
    <section style={{ background: "#F0F5F3" }} className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2
          className="text-3xl font-bold tracking-tight md:text-4xl"
          style={{ color: "#1A6B55" }}
        >
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
              <h3
                className="mt-4 text-lg font-bold"
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

function ForWhom() {
  const items = [
    "Quieres ordenar tus finanzas pero no sabes cómo empezar",
    "Tienes deudas y necesitas un plan real para salir de ellas",
    "Quieres empezar a invertir con acompañamiento profesional",
  ];
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2
          className="text-3xl font-bold tracking-tight md:text-4xl"
          style={{ color: "#1A6B55" }}
        >
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
              <p
                className="mt-4 text-[15px] leading-[1.65]"
                style={{ color: "#1C2B27", fontWeight: 500 }}
              >
                {t}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ onReserve }: { onReserve: () => void }) {
  return (
    <section
      className="relative overflow-hidden py-20 text-center"
      style={{
        background:
          "linear-gradient(160deg, #0A1F1A 0%, #0F3D33 55%, #1A6B55 100%)",
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
      <div className="relative mx-auto max-w-2xl px-4">
        <div
          className="mx-auto rounded-[24px] p-8 md:p-12"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.14)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.30)",
          }}
        >
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
            <HelpCircle className="size-3.5" /> Sin compromiso
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            ¿Quieres despejar tus dudas?
          </h2>
          <p
            className="mx-auto mt-4 max-w-lg text-base md:text-lg"
            style={{ color: "rgba(255,255,255,0.82)" }}
          >
            Conversemos 15 minutos. Te escuchamos, resolvemos tus dudas y te
            decimos si la mentoría es para ti — sin presión y totalmente gratis.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onReserve}
              className="inline-flex items-center justify-center rounded-full transition-opacity hover:opacity-95"
              style={{
                background: "#2E9B7A",
                color: "#FFFFFF",
                fontWeight: 700,
                padding: "14px 30px",
                fontSize: 15,
              }}
            >
              Reservar llamada gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function MentoriaPage() {
  const [showForm, setShowForm] = useState(false);

  const handleReserve = () => {
    setShowForm(true);
    requestAnimationFrame(() => {
      setTimeout(() => {
        document
          .getElementById("llamada")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-brand-neutral-700 antialiased">
      <SiteHeader />
      <main>
        <Hero onReserve={handleReserve} />
        <SectionDivider />
        <HowItWorks onReserve={handleReserve} />
        <SectionDivider />
        <Includes />
        <SectionDivider />
        <ForWhom />
        <SectionDivider />
        {showForm && (
          <>
            <QualificationCall id="llamada" />
            <SectionDivider />
          </>
        )}
        <FinalCTA onReserve={handleReserve} />
      </main>
      <SiteFooter />
    </div>
  );
}
