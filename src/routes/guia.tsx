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
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
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
    "Cómo depositar dinero sin que te dé error en el camino",
    "Cómo leer un activo y comprar tu primera inversión paso a paso",
  ];
  return (
    <section id="form" className="bg-soft-emerald">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-emerald-border bg-white px-3 py-1 text-xs font-semibold text-brand-emerald">
            <Leaf className="size-3.5" /> Guía gratis
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-brand-navy md:text-5xl">
            Abre tu cuenta en Hapi y haz tu primera inversión —{" "}
            <span className="text-brand-emerald">gratis</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-brand-neutral-700">
            Descarga la guía paso a paso para abrir tu cuenta en Hapi desde Honduras,
            depositar sin errores y comprar tu primer activo con confianza.
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
                <IconCircleCheck className="mt-0.5 size-5 shrink-0 text-brand-emerald-mid" />
                <span className="text-brand-neutral-700">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button asChild variant="navy" size="xl" className="w-full sm:w-auto">
              <a href="/">
                Me interesa <ArrowRight className="size-4" />
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
        <p className="mt-5 text-xs text-white/60">
          Sin spam. Solo contenido que te ayuda a crecer.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-brand-navy text-white/80">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--brand-emerald-mid), transparent)",
        }}
      />
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* CTA strip */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 rounded-[20px] border border-white/10 bg-white/[0.03] p-6 md:flex-row md:items-center md:p-8">
          <div>
            <h3 className="text-xl font-bold text-white md:text-2xl">
              ¿Listo para dar tu primer paso?
            </h3>
            <p className="mt-1 text-sm text-white/70">
              Descarga la guía gratis y empieza a invertir desde Honduras.
            </p>
          </div>
          <Button asChild variant="cta" size="lg">
            <a href="#form">
              <ArrowRight className="size-4" /> Descargar guía gratis
            </a>
          </Button>
        </div>

        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-emerald-mid text-white">
                <Leaf className="size-4" />
              </span>
              <span className="text-lg font-extrabold text-white">{BRAND}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-[1.7] text-white/65">
              Educación financiera honesta para hondureños que quieren tomar el control de sus finanzas
              personales.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-brand-emerald-mid hover:border-brand-emerald-mid"
              >
                <MessageCircle className="size-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-brand-emerald-mid hover:border-brand-emerald-mid"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="#"
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-brand-emerald-mid hover:border-brand-emerald-mid"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/50">
              Navegación
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="/" className="text-white/80 hover:text-white">Inicio</a></li>
              <li><a href="#form" className="text-white/80 hover:text-white">Descargar guía</a></li>
              <li><a href="/" className="text-white/80 hover:text-white">La Mentoría</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/50">
              Legal
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="text-white/80 hover:text-white">Política de Privacidad</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Términos y Condiciones</a></li>
            </ul>
            <p className="mt-5 text-[11px] leading-[1.6] text-white/50">
              {BRAND} es una plataforma de educación financiera. No somos asesores financieros
              regulados por la CNBS ni captamos fondos del público. Las inversiones en la Bolsa
              de Valores conllevan riesgos. El desempeño pasado no garantiza resultados futuros.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} {BRAND}. Todos los derechos reservados.</p>
          <p>Hecho desde Honduras 🇭🇳</p>
        </div>
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
