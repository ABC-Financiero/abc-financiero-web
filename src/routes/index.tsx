import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  X,
  TrendingDown,
  ShieldAlert,
  Compass,
  Settings2,
  Check,
  CheckCheck,
  Lock,
  ShieldCheck,
  Leaf,
  ArrowDown,
  Sparkles,
  Plus,
  Minus,
  GraduationCap,
  HandCoins,
  Globe2,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.link/spml85";
const BRAND = "ABC Financiero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${BRAND} | Mentoría 1:1 para invertir en la Bolsa de Valores desde Honduras` },
      {
        name: "description",
        content:
          "Mentoría privada 1:1 por L1,800. Aprende a invertir legal y seguro en la Bolsa de Valores desde Honduras, paso a paso.",
      },
      { property: "og:title", content: `${BRAND} | Mentoría 1:1 Bolsa de Valores` },
      {
        property: "og:description",
        content:
          "Educación financiera transparente para hondureños. Reserva tu mentoría privada por L1,800.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

function CTA({
  children,
  size = "xl",
  className = "",
  href = WHATSAPP_URL,
  external = true,
  variant = "cta" as "cta" | "ghostGreen",
}: {
  children: React.ReactNode;
  size?: "lg" | "xl";
  className?: string;
  href?: string;
  external?: boolean;
  variant?: "cta" | "ghostGreen";
}) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    </Button>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [{ href: "#top", label: "Homepage" }];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-emerald-border bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-emerald text-white">
            <Leaf className="size-4" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-brand-emerald">
            {BRAND}
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-brand-emerald transition hover:text-brand-emerald-mid"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block w-9" aria-hidden />
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
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-brand-emerald"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-emerald to-brand-emerald-mid text-white"
    >
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, oklch(0.72 0.08 165 / 0.45), transparent 45%), radial-gradient(circle at 80% 70%, oklch(0.45 0.07 165 / 0.5), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-4 py-20 text-center md:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-white backdrop-blur">
          <ShieldCheck className="size-4" />
          Educación financiera 100% transparente
        </span>
        <h1
          className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl"
          style={{ letterSpacing: "-0.03em" }}
        >
          Aprende a invertir en la{" "}
          <span className="italic font-serif font-normal underline decoration-white/40 decoration-[3px] underline-offset-[10px]">
            Bolsa de Valores
          </span>{" "}
          desde Honduras
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.65] text-white/90 md:text-lg">
          Recibe un acompañamiento para que entiendas cómo invertir tu dinero en activos
          financieros en la Bolsa de Valores.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3">
          <CTA href="#beneficios" external={false}>
            Saber más
            <ArrowDown className="size-4" />
          </CTA>
          <p className="text-xs text-white/70">Cupos limitados · Atención personalizada</p>
        </div>
      </div>
    </section>
  );
}

function PainPoints() {
  const items = [
    {
      icon: TrendingDown,
      text: "Tienes tus ahorros ganando casi 0% de interés en el banco y la inflación se come tu dinero.",
    },
    {
      icon: ShieldAlert,
      text: "Quieres invertir en la Bolsa de Valores real de EE.UU., pero te da pánico caer en una estafa piramidal de internet.",
    },
    {
      icon: Compass,
      text: "Has escuchado sobre la Bolsa de Valores pero no sabes cómo empezar ni por dónde dar el primer paso.",
    },
  ];
  return (
    <section id="beneficios" className="bg-brand-neutral-100 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-emerald-light px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-brand-emerald">
            <Sparkles className="size-3.5" /> Tres señales
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-emerald md:text-4xl">
            ¿Te pasa alguna de estas tres cosas?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-brand-neutral-700">
            Si te identificas con al menos una, esta mentoría es para ti.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, text }, i) => (
            <div
              key={i}
              className="group rounded-[20px] border border-brand-emerald-border bg-brand-emerald-light p-6 transition hover:-translate-y-1"
              style={{ boxShadow: "0 2px 8px rgba(26,107,85,0.06)" }}
            >
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-white text-brand-emerald-mid border border-brand-emerald-border">
                  <Icon className="size-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.08em] text-brand-neutral-400">
                  0{i + 1}
                </span>
              </div>
              <p className="mt-5 text-base leading-[1.65] text-brand-neutral-700">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatsIncluded() {
  const items = [
    {
      icon: Settings2,
      title: "Configuración Técnica Paso a Paso",
      desc: "Abrimos y verificamos tu cuenta juntos en un broker 100% regulado en EE.UU. que acepta hondureños.",
    },
  ];
  return (
    <section id="incluye" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-emerald-light px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-brand-emerald">
            <GraduationCap className="size-3.5" /> La Mentoría 1:1
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-emerald md:text-4xl">
            Tu Mapa de Ruta Personalizado
          </h2>
          <p className="mt-3 text-brand-neutral-700">Qué incluye por L1,800</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-1 max-w-xl mx-auto">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="group flex gap-5 rounded-[20px] border border-brand-emerald-border bg-brand-emerald-light p-6 transition hover:-translate-y-1"
              style={{ boxShadow: "0 2px 8px rgba(26,107,85,0.06)" }}
            >
              <div className="shrink-0 grid h-12 w-12 place-items-center rounded-xl bg-white text-brand-emerald-mid border border-brand-emerald-border">
                <Icon className="size-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-emerald">{title}</h3>
                <p className="mt-2 text-sm leading-[1.65] text-brand-neutral-700">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSafety() {
  const items = [
    {
      icon: HandCoins,
      title: "No gestionamos tu dinero",
      desc: "Tú mantienes el 100% del control de tu capital en tu propia cuenta personal de broker.",
    },
    {
      icon: ShieldCheck,
      title: "Cero promesas falsas",
      desc: "Sin rendimientos diarios garantizados. Enseñamos construcción de patrimonio real, serio y a largo plazo.",
    },
    {
      icon: Globe2,
      title: "Cumplimiento Legal",
      desc: "Guía básica sobre cómo declarar tus inversiones en el extranjero y tus impuestos de forma transparente en Honduras.",
    },
  ];
  return (
    <section id="seguridad" className="bg-brand-neutral-100 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="overflow-hidden rounded-[20px] border border-brand-emerald-border bg-white p-8 md:p-12">
          <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-emerald-light px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-brand-emerald">
                <Lock className="size-3.5" /> Autoridad y Seguridad
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-emerald md:text-4xl">
                Educación ética, no asesoría financiera
              </h2>
            </div>
            <Leaf className="hidden size-10 text-brand-emerald-mid md:block" />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {items.map((it, i) => (
              <div
                key={i}
                className="rounded-[20px] border border-brand-emerald-border bg-brand-emerald-light p-6"
              >
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-emerald text-white">
                  <it.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-bold text-brand-emerald">{it.title}</h3>
                <p className="mt-2 text-sm leading-[1.65] text-brand-neutral-700">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      name: "Carlos M.",
      time: "10:24",
      msg: "¡Ya compré mi primer ETF! Pensé que iba a ser mucho más complicado. La explicación paso a paso me salvó.",
    },
    {
      name: "Andrea R.",
      time: "18:02",
      msg: "Por fin entendí cómo transferir desde mi banca en línea sin que me cobren cualquier cosa. Gracias ABC Financiero 🙌",
    },
    {
      name: "Luis F.",
      time: "21:47",
      msg: "Lo mejor fue que no me prometieron volverme millonario. Aprendí a invertir en serio y con cabeza fría.",
    },
  ];
  return (
    <section id="testimonios" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold tracking-tight text-brand-emerald md:text-4xl">
          Hondureños que ya dieron el primer paso
        </h2>
        <p className="mt-3 text-center text-brand-neutral-700">
          Mensajes reales de quienes ya tomaron su mentoría
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <div
              key={i}
              className="rounded-[20px] border border-brand-emerald-border bg-brand-emerald-light p-5"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-emerald text-white text-sm font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-emerald">{t.name}</p>
                  <p className="text-xs text-brand-neutral-400">Cliente verificado</p>
                </div>
              </div>
              <div className="relative mt-4 rounded-2xl rounded-tl-sm bg-white border border-brand-emerald-border p-4 text-sm text-brand-neutral-700">
                <p className="font-serif italic leading-[1.65]">{t.msg}</p>
                <div className="mt-2 flex items-center justify-end gap-1 text-[10px] text-brand-neutral-400">
                  {t.time}
                  <CheckCheck className="size-3.5 text-brand-emerald-mid" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const features = [
    "Apertura de cuenta en broker regulado de EE.UU.",
    "Soporte post-sesión por WhatsApp",
  ];
  return (
    <section className="bg-brand-neutral-100 py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div
          className="relative overflow-hidden rounded-[20px] border border-brand-emerald-border bg-white"
          style={{ boxShadow: "0 2px 8px rgba(26,107,85,0.06)" }}
        >
          {/* Decorative leaf flourish — subtle, unique */}
          <div className="pointer-events-none absolute -right-10 -top-10 text-brand-emerald-light">
            <Leaf className="size-44" />
          </div>
          <div className="pointer-events-none absolute -left-8 -bottom-8 text-brand-emerald-light">
            <Sparkles className="size-32" />
          </div>

          <div className="relative bg-brand-emerald px-8 py-6 text-center text-white">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-white/80">
              Mentoría Privada 1:1
            </p>
            <h3 className="mt-1 text-xl font-bold md:text-2xl text-white">
              Introducción a la Bolsa de Valores
            </h3>
          </div>
          <div className="relative px-8 py-10 text-center">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-lg font-bold text-brand-neutral-400">L</span>
              <span
                className="text-6xl font-extrabold text-brand-emerald md:text-7xl"
                style={{ letterSpacing: "-0.03em" }}
              >
                1,800
              </span>
            </div>
            <p className="mt-1 text-sm text-brand-neutral-400">Pago único · Sin suscripciones</p>

            <ul className="mx-auto mt-8 max-w-md space-y-3 text-left">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-emerald-mid text-white">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-brand-neutral-700">{f}</span>
                </li>
              ))}
            </ul>

            <p className="mx-auto mt-8 max-w-md text-sm text-brand-neutral-700">
              Asegura tu espacio hoy. Al tocar el botón serás redirigido a nuestro WhatsApp para
              coordinar tu método de pago preferido y agendar tu hora en el calendario.
            </p>

            <div className="mt-6">
              <CTA className="w-full md:w-auto">
                <MessageCircle className="size-4" /> Agendar por WhatsApp
              </CTA>
            </div>

            <div className="mt-8 border-t border-brand-emerald-border pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-brand-neutral-400">
                Métodos de pago aceptados
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                {["Transferencia Local", "Tarjeta Crédito/Débito", "Enlace de Pago"].map((m) => (
                  <span
                    key={m}
                    className="rounded-full bg-brand-emerald-light border border-brand-emerald-border px-3 py-1.5 text-xs font-bold text-brand-emerald"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "¿Necesito experiencia previa para tomar la mentoría?",
      a: "No. Está diseñada justamente para principiantes absolutos. Si nunca has invertido un dólar, estás en el lugar correcto.",
    },
    {
      q: "¿Cuánto dinero necesito para empezar a invertir?",
      a: "Puedes empezar con montos bajos. Durante la mentoría te explicamos cómo iniciar incluso con menos de L2,000 en tu primera compra.",
    },
    {
      q: "¿Esto es legal en Honduras?",
      a: "Sí. Invertir en la Bolsa de Valores de EE.UU. desde Honduras es completamente legal. Te enseñamos también cómo declarar correctamente tus inversiones.",
    },
    {
      q: "¿Me garantizan ganancias?",
      a: "No. Nadie serio puede garantizar rendimientos. Te enseñamos educación financiera real, no promesas mágicas.",
    },
    {
      q: "¿Cuánto dura la sesión 1:1?",
      a: "La sesión privada dura aproximadamente 90 minutos, más soporte posterior por WhatsApp para resolver dudas.",
    },
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16 items-start">
          <div className="md:sticky md:top-24">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-emerald-light px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-brand-emerald">
              <MessageCircle className="size-3.5" /> Preguntas
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-emerald md:text-4xl">
              Todo lo que quieres saber antes de empezar.
            </h2>
            <p
              className="mt-4 font-serif italic text-brand-neutral-700 text-lg leading-[1.65]"
            >
              “La mejor inversión que puedes hacer es en tu propia educación financiera.”
            </p>
            <div className="mt-6 hidden md:block">
              <CTA size="lg" variant="ghostGreen">
                <MessageCircle className="size-4" /> Pregunta por WhatsApp
              </CTA>
            </div>
          </div>

          <ol className="relative space-y-3">
            {items.map((it, i) => {
              const isOpen = openIdx === i;
              return (
                <li
                  key={i}
                  className="rounded-[20px] border border-brand-emerald-border bg-brand-emerald-light overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white border border-brand-emerald-border text-xs font-extrabold text-brand-emerald">
                      0{i + 1}
                    </span>
                    <span className="flex-1 font-bold text-brand-emerald">{it.q}</span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${
                        isOpen
                          ? "bg-brand-emerald text-white"
                          : "bg-white text-brand-emerald border border-brand-emerald-border"
                      }`}
                    >
                      {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pl-[68px] text-sm leading-[1.65] text-brand-neutral-700">
                      {it.a}
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-navy text-white/80">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-emerald-mid text-white">
                <Leaf className="size-4" />
              </span>
              <span className="text-lg font-extrabold text-white">{BRAND}</span>
            </div>
            <p className="mt-4 text-xs leading-[1.65] text-white/60">
              {BRAND} es una plataforma de educación financiera. No somos asesores financieros
              regulados por la CNBS ni captamos fondos del público. Las inversiones en la Bolsa
              de Valores conllevan riesgos. El desempeño pasado no garantiza resultados futuros.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <a href="#" className="text-white/80 hover:text-white">
              Política de Privacidad
            </a>
            <a href="#" className="text-white/80 hover:text-white">
              Términos y Condiciones
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-emerald-mid hover:brightness-110 font-bold"
            >
              Contáctanos por WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {BRAND}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-brand-neutral-100 font-sans text-brand-neutral-700 antialiased">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <WhatsIncluded />
        <TrustSafety />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
