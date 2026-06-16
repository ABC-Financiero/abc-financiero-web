import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import {
  Leaf,
  Check,
  ArrowRight,
  Sparkles,
  CheckCircle2 as IconCircleCheck,
  Landmark as IconBuildingBank,
  UserPlus as IconUserPlus,
  Wallet as IconWallet,
  LineChart as IconLineChart,
  ShoppingCart as IconShoppingCart,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionDivider } from "@/components/PageHero";
import { subscribeToBrevoList } from "@/lib/brevo.functions";

const BRAND = "ABC Financiero";
const BREVO_LIST_ID = 12;


export const Route = createFileRoute("/guia")({
  head: () => ({
    meta: [
      { title: `Guía gratis para invertir desde Honduras | ${BRAND}` },
      {
        name: "description",
        content:
          "Descarga la guía paso a paso para abrir tu cuenta en Hapi, depositar sin errores y hacer tu primera compra desde Honduras.",
      },
      { property: "og:title", content: `Guía gratis para invertir desde Honduras | ${BRAND}` },
      {
        property: "og:description",
        content:
          "Aprende a abrir tu cuenta en Hapi, depositar sin errores y comprar tu primer activo desde Honduras. Guía gratis.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: GuiaPage,
});

function Navbar() {
  return <SiteHeader />;
}


function LeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const subscribe = useServerFn(subscribeToBrevoList);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setStatus("loading");
    try {
      await subscribe({
        data: { name: name.trim(), email: email.trim(), listId: BREVO_LIST_ID },
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-emerald-border bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full " style={{background:"#EEEDFE",color:"#6B4FC8"}}>
          <Check className="size-7" />
        </div>
        <h3 className="text-xl font-bold text-brand-navy">¡Listo!</h3>
        <p className="mt-2 text-brand-neutral-700">
          Te enviamos la guía a tu correo. Si no la ves en unos minutos, revisa spam o descárgala aquí:
        </p>
        <a
          href="https://drive.google.com/file/d/1ZyzC09gZyrz2kdw9FU-E8b5AlFNJwCyp/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-brand-emerald-mid px-6 py-3.5 text-base font-bold text-white shadow-sm transition hover:bg-brand-emerald"
        >
          Descargar guía ahora
          <ArrowRight className="size-4" />
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-brand-emerald-border bg-white p-8 shadow-sm"
    >
      <h3 className="text-xl font-bold text-brand-navy">Descarga la guía gratis</h3>
      <p className="mt-1 text-sm text-brand-neutral-700">
        Te la enviamos por correo al instante.
      </p>
      <div className="mt-5 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-semibold text-brand-navy" htmlFor="name">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            className="w-full rounded-xl border border-brand-emerald-border bg-white px-4 py-3 text-base text-brand-navy outline-none transition focus:border-brand-emerald-mid focus:ring-2 focus:ring-brand-emerald-mid/20"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-brand-navy" htmlFor="email">
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@correo.com"
            className="w-full rounded-xl border border-brand-emerald-border bg-white px-4 py-3 text-base text-brand-navy outline-none transition focus:border-brand-emerald-mid focus:ring-2 focus:ring-brand-emerald-mid/20"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-full bg-brand-emerald-mid px-6 py-3.5 text-base font-bold text-white shadow-sm transition hover:bg-brand-emerald disabled:opacity-60"
        >
          {status === "loading" ? "Enviando…" : "Quiero la guía gratis"}
        </button>
        <p className="text-center text-[12px]" style={{ color: "#8BA89F" }}>
          Sin spam. Solo contenido que te ayuda a crecer.
        </p>
        {status === "error" && (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-center text-sm text-red-700">
            Algo salió mal. Intenta de nuevo o escríbenos a contacto@abcfinanciero.com
          </p>
        )}
      </div>
    </form>
  );
}

function Hero() {
  const bullets = [
    "Cómo abrir tu cuenta en Hapi desde Honduras en menos de 10 minutos",
    "Cómo depositar dinero sin que te dé error en el camino",
    "Cómo leer un activo y comprar tu primera inversión paso a paso",
  ];
  return (
    <section
      id="form"
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
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center">
          <span
            className="inline-flex w-fit items-center gap-2 rounded-full px-3 py-1"
            style={{
              background: "rgba(255,255,255,0.08)",
              color: "#A7E3CE",
              border: "1px solid rgba(167,227,206,0.25)",
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            <Leaf className="size-3.5" /> Guía gratis
          </span>
          <h1
            className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl"
            style={{ color: "#FFFFFF", letterSpacing: "-0.03em" }}
          >
            Abre tu cuenta en Hapi y haz tu primera inversión —{" "}
            <span
              style={{
                background:
                  "linear-gradient(120deg, #5CE0B6 0%, #A7E3CE 60%, #FFFFFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              gratis
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg" style={{ color: "rgba(255,255,255,0.8)" }}>
            Descarga la guía paso a paso para abrir tu cuenta en Hapi desde Honduras,
            depositar sin errores y comprar tu primer activo con confianza.
          </p>
          <ul className="mt-7 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <IconCircleCheck className="mt-0.5 size-6 shrink-0" style={{ color: "#A7E3CE" }} />
                <span style={{ color: "rgba(255,255,255,0.85)" }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <div className="w-full">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatYouLearn() {
  const items = [
    {
      icon: IconBuildingBank,
      title: "Qué es Hapi y por qué usarla",
      desc: "La plataforma que permite a hondureños invertir en la bolsa de valores de EE.UU.",
    },
    {
      icon: IconUserPlus,
      title: "Cómo abrir tu cuenta paso a paso",
      desc: "Proceso completo con capturas para que lo hagas sin trabarte.",
    },
    {
      icon: IconWallet,
      title: "Cómo depositar sin que dé error",
      desc: "Los métodos que sí funcionan desde Honduras y los detalles que evitan rechazos.",
    },
    {
      icon: IconLineChart,
      title: "Cómo leer un activo de forma básica",
      desc: "Qué significa el precio, el ticker y los datos clave antes de invertir.",
    },
    {
      icon: IconShoppingCart,
      title: "Cómo comprar tu primer activo",
      desc: "Desde buscar el activo hasta confirmar la orden — sin perderte en la app.",
    },
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy md:text-4xl">
            ¿Qué aprenderás con esta guía?
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-brand-emerald-border bg-white p-7 transition hover:shadow-md"
              style={{ borderRadius: 16 }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl " style={{background:"#EEEDFE",color:"#6B4FC8"}}>
                <it.icon className="size-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-brand-navy">{it.title}</h3>
              <p className="mt-2 text-brand-neutral-700">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const items = [
    {
      quote:
        "Llevaba meses queriendo empezar a invertir pero no sabía cómo. La guía me lo explicó en una tarde.",
      name: "Carlos",
      age: "28 años",
    },
    {
      quote:
        "Pensaba que invertir era solo para gente con mucho dinero. Empecé con $20 y entendí todo desde cero.",
      name: "María",
      age: "32 años",
    },
  ];
  const initials = (n: string) => n.slice(0, 1).toUpperCase();
  return (
    <section style={{ backgroundColor: "#F0F5F3" }}>
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-brand-navy md:text-4xl">
          Lo que dicen quienes ya la descargaron
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-brand-emerald-border p-7"
              style={{ backgroundColor: "#E8F5F0", borderRadius: 16 }}
            >
              <p className="text-lg leading-relaxed text-brand-navy">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-brand-emerald-mid font-bold text-white">
                  {initials(t.name)}
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-brand-navy">{t.name}</p>
                  <p className="text-brand-neutral-700">{t.age}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MentorshipCard() {
  const bullets = [
    "1 sesión personalizada para aprender desde cero",
    "Cómo analizar activos antes de invertir",
    "Cómo aplicar estrategias adaptadas a tu situación",
    "Qué errores evitar al empezar",
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-brand-navy md:text-4xl">
          ¿Quieres avanzar más rápido?
        </h2>
        <div
          className="mx-auto mt-10 max-w-[640px] rounded-3xl border border-brand-emerald-border bg-white p-8 md:p-10"
          style={{ boxShadow: "0 2px 12px rgba(26,107,85,0.08)", borderRadius: 20 }}
        >
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
            style={{ backgroundColor: "#E8F5F0", color: "#1A6B55" }}
          >
            Acompañamiento personalizado
          </span>
          <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-brand-navy md:text-3xl">
            Mentoría 1:1 — Introducción en la Bolsa de Valores
          </h3>
          <p className="mt-3 text-brand-neutral-700">
            Incluye 1 sesión personalizada para aprender desde cero: cómo analizar
            activos, cómo aplicar estrategias y qué errores evitar.
          </p>
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <IconCircleCheck className="mt-0.5 size-5 shrink-0 " style={{color:"#6B4FC8"}} />
                <span className="text-brand-neutral-700">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a href="/mentoria" className="btn-ghost text-sm">
              Conocer la mentoría <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      {/* Decorative gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--brand-emerald-mid), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--brand-emerald), transparent 70%)" }}
      />
      {/* Dotted texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-4 py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur">
          <Sparkles className="size-3.5" /> Empieza hoy
        </span>
        <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          Tu dinero puede hacer más.
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-white to-brand-emerald-light bg-clip-text text-transparent">
            Da el primer paso.
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-white/75 md:text-lg">
          Descarga la guía gratis y aprende cómo abrir tu cuenta en Hapi, depositar
          sin errores y comprar tu primer activo desde Honduras.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#form"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-brand-emerald shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] transition hover:bg-brand-emerald-light"
          >
            Quiero la guía gratis
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Conocer la mentoría
          </a>
        </div>
        <p className="mt-5 text-xs text-white/75">
          Sin spam. Solo contenido que te ayuda a crecer.
        </p>
      </div>
    </section>
  );
}

function GuiaPage() {
  return (
    <div id="top" className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <WhatYouLearn />
        <SectionDivider />
        <SocialProof />
        <SectionDivider />
        <MentorshipCard />
        <SectionDivider />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
