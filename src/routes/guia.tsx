import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  X,
  Leaf,
  Check,
  ArrowRight,
  CheckCircle2 as IconCircleCheck,
  Landmark as IconBuildingBank,
  UserPlus as IconUserPlus,
  CandlestickChart as IconChartCandle,
  RefreshCw as IconRefresh,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const BRAND = "ABC Financiero";
const BREVO_LIST_ID = 12;

export const Route = createFileRoute("/guia")({
  head: () => ({
    meta: [
      { title: `Guía gratis para invertir desde Honduras | ${BRAND}` },
      {
        name: "description",
        content:
          "Descarga la guía paso a paso para abrir tu cuenta en Hapi y empezar a invertir desde Honduras con tan solo $10.",
      },
      { property: "og:title", content: `Guía gratis para invertir desde Honduras | ${BRAND}` },
      {
        property: "og:description",
        content:
          "Aprende a abrir tu cuenta en Hapi y empezar a invertir en la bolsa de valores desde Honduras. Guía gratis.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: GuiaPage,
});

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/", label: "Inicio" },
    { href: "/", label: "Mentoría" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-emerald-border bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-emerald text-white">
            <Leaf className="size-4" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-brand-emerald">
            {BRAND}
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              className="text-sm font-semibold text-brand-emerald transition hover:text-brand-emerald-mid"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Button asChild variant="navy" size="lg">
            <a href="/">Agendar sesión</a>
          </Button>
        </div>
        <button
          aria-label="Menú"
          className="md:hidden rounded-md p-2 text-brand-emerald"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-brand-emerald-border bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4">
            {links.map((l, i) => (
              <a
                key={i}
                href={l.href}
                className="text-sm font-semibold text-brand-emerald"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="navy" size="lg">
              <a href="/">Agendar sesión</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function LeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setStatus("loading");
    try {
      const apiKey = import.meta.env.VITE_BREVO_API_KEY as string | undefined;
      if (!apiKey) throw new Error("Missing API key");
      const res = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "api-key": apiKey,
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          attributes: { FIRSTNAME: name.trim() },
          listIds: [BREVO_LIST_ID],
          updateEnabled: true,
        }),
      });
      if (!res.ok && res.status !== 204) {
        const data = await res.json().catch(() => ({}));
        // Brevo returns 400 "Contact already exist" sometimes — treat as success when updateEnabled
        if (data?.code === "duplicate_parameter") {
          setStatus("success");
          return;
        }
        throw new Error("Request failed");
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-emerald-border bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-brand-emerald-light text-brand-emerald">
          <Check className="size-7" />
        </div>
        <h3 className="text-xl font-bold text-brand-navy">¡Listo!</h3>
        <p className="mt-2 text-brand-neutral-700">
          Revisa tu correo — la guía está en camino.
        </p>
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
    "Qué invertir primero si estás empezando desde cero",
    "Cómo hacer crecer tu dinero aunque solo tengas $10 al mes",
  ];
  return (
    <section id="form" className="bg-soft-emerald">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-emerald-border bg-white px-3 py-1 text-xs font-semibold text-brand-emerald">
            <Leaf className="size-3.5" /> Guía gratis
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-brand-navy md:text-5xl">
            Aprende a invertir desde Honduras —{" "}
            <span className="text-brand-emerald">gratis</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-brand-neutral-700">
            Descarga la guía paso a paso para abrir tu cuenta en Hapi, empezar a invertir
            en la bolsa de valores desde $10 y sin experiencia previa.
          </p>
          <ul className="mt-7 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <IconCircleCheck className="mt-0.5 size-6 shrink-0 text-brand-emerald-mid" />
                <span className="text-brand-neutral-700">{b}</span>
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
      title: "Cómo funciona Hapi",
      desc: "La plataforma que permite a hondureños invertir en la bolsa de valores de EE.UU.",
    },
    {
      icon: IconUserPlus,
      title: "Cómo abrir tu cuenta",
      desc: "Proceso paso a paso con capturas y explicaciones claras.",
    },
    {
      icon: IconChartCandle,
      title: "Qué comprar primero",
      desc: "Qué ETFs son ideales para quien empieza con poco dinero.",
    },
    {
      icon: IconRefresh,
      title: "Cómo hacer DCA",
      desc: "La estrategia de inversión más simple y efectiva para principiantes.",
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
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-brand-emerald-border bg-white p-7 transition hover:shadow-md"
              style={{ borderRadius: 16 }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-emerald-light text-brand-emerald">
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
    "Sesiones personalizadas según tu situación",
    "Plan de acción desde la primera sesión",
    "Seguimiento continuo hasta ver resultados",
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
            Mentoría 1 a 1 de finanzas e inversiones
          </h3>
          <p className="mt-3 text-brand-neutral-700">
            Si quieres un plan claro, adaptado a tu situación real y con acompañamiento
            en cada paso — la mentoría es para ti.
          </p>
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <IconCircleCheck className="mt-0.5 size-5 shrink-0 text-brand-emerald-mid" />
                <span className="text-brand-neutral-700">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button asChild variant="navy" size="xl" className="w-full sm:w-auto">
              <a href="/">
                Ver mentoría completa <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section style={{ backgroundColor: "#1A6B55" }} className="text-white">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "#fff" }}>
          Tu dinero puede hacer más. Empieza hoy.
        </h2>
        <div className="mt-8">
          <a
            href="#form"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold transition hover:bg-brand-emerald-light"
            style={{ color: "#1A6B55" }}
          >
            Quiero la guía gratis
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-brand-emerald-border bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center text-sm text-brand-neutral-700">
        <p>© {new Date().getFullYear()} {BRAND}. Hecho desde Honduras 🇭🇳</p>
      </div>
    </footer>
  );
}

function GuiaPage() {
  return (
    <div id="top" className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <WhatYouLearn />
        <SocialProof />
        <MentorshipCard />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
