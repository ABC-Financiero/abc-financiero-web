import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  X,
  TrendingDown,
  ShieldAlert,
  HelpCircle,
  UserCheck,
  Settings2,
  Banknote,
  LineChart,
  Check,
  CheckCheck,
  Lock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.link/spml85";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "abcfinanciero | Mentoría 1:1 para invertir en la Bolsa de NY desde Honduras" },
      {
        name: "description",
        content:
          "Mentoría privada 1:1 por L1,800. Aprende a invertir legal y seguro en la bolsa de EE.UU. desde Honduras, paso a paso, sin estafas.",
      },
      { property: "og:title", content: "abcfinanciero | Mentoría 1:1 Bolsa de NY" },
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
}: {
  children: React.ReactNode;
  size?: "lg" | "xl";
  className?: string;
}) {
  return (
    <Button asChild variant="cta" size={size} className={className}>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#beneficios", label: "Beneficios" },
    { href: "#incluye", label: "Qué Incluye" },
    { href: "#seguridad", label: "Confianza" },
    { href: "#testimonios", label: "Testimonios" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-brand-navy text-brand-gold font-bold">
            a
          </span>
          <span className="text-lg font-bold tracking-tight text-brand-navy">abcfinanciero</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-700 transition hover:text-brand-navy"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <CTA size="lg">Reservar Mentoría (L1,800)</CTA>
        </div>
        <button
          aria-label="Menú"
          className="md:hidden rounded-md p-2 text-brand-navy"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-700"
              >
                {l.label}
              </a>
            ))}
            <CTA size="lg" className="w-full">
              Reservar Mentoría (L1,800)
            </CTA>
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
      className="relative overflow-hidden bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy text-white"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, oklch(0.82 0.16 75 / 0.35), transparent 40%), radial-gradient(circle at 80% 60%, oklch(0.55 0.13 160 / 0.35), transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-4 py-20 text-center md:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur">
          <ShieldCheck className="size-4 text-brand-gold" />
          Educación financiera 100% transparente y regulada
        </span>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
          Aprende a invertir en la{" "}
          <span className="text-brand-gold">Bolsa de Valores de Nueva York</span> de forma legal y
          segura desde Honduras.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 md:text-lg">
          Sin fórmulas mágicas ni estafas. Una mentoría privada 1:1 diseñada para principiantes que
          quieren poner a trabajar su dinero desde montos bajos.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3">
          <CTA>Quiero mi Mentoría Privada por L1,800</CTA>
          <p className="text-xs text-white/60">Cupos limitados · Atención personalizada</p>
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
      text: "Quieres invertir en la bolsa real de EE.UU., pero te da pánico caer en una estafa piramidal de internet.",
    },
    {
      icon: HelpCircle,
      text: "Has visto tutoriales en YouTube pero ninguno te explica cómo fondear tu cuenta desde la banca en línea de Honduras sin pagar comisiones absurdas.",
    },
  ];
  return (
    <section id="beneficios" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold tracking-tight text-brand-navy md:text-4xl">
          ¿Te pasa alguna de estas tres cosas?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Si te identificas con al menos una, esta mentoría es para ti.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, text }, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-warn/15 text-brand-warn">
                <Icon className="size-5" />
              </div>
              <p className="mt-5 text-base leading-relaxed text-slate-700">{text}</p>
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
      icon: UserCheck,
      title: "Sesión Privada 1:1",
      desc: "Análisis personal de tu situación financiera y metas de inversión directamente con un mentor.",
    },
    {
      icon: Settings2,
      title: "Configuración Técnica Paso a Paso",
      desc: "Abrimos y verificamos tu cuenta juntos en un broker 100% regulado en EE.UU. que acepta hondureños.",
    },
    {
      icon: Banknote,
      title: "Estrategia de Depósito Local",
      desc: "Aprende el método exacto para fondear tu cuenta desde BAC, Ficohsa o Atlántida minimizando comisiones bancarias.",
    },
    {
      icon: LineChart,
      title: "Tu Primera Compra en Vivo",
      desc: "Te guiamos a comprar tu primer activo real (Acción o ETF) de forma segura durante la sesión en vivo.",
    },
  ];
  return (
    <section id="incluye" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="inline-block rounded-full bg-brand-emerald/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-emerald">
            La Mentoría 1:1
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-navy md:text-4xl">
            Tu Mapa de Ruta Personalizado
          </h2>
          <p className="mt-3 text-slate-600">Qué incluye por L1,800</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="group flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand-emerald/40 hover:shadow-md"
            >
              <div className="shrink-0 grid h-12 w-12 place-items-center rounded-xl bg-brand-emerald/10 text-brand-emerald">
                <Icon className="size-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
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
      title: "No gestionamos tu dinero",
      desc: "Tú mantienes el 100% del control de tu capital en tu propia cuenta personal de broker.",
    },
    {
      title: "Cero promesas falsas",
      desc: "Sin rendimientos diarios garantizados. Enseñamos construcción de patrimonio real, serio y a largo plazo.",
    },
    {
      title: "Cumplimiento Legal",
      desc: "Guía básica sobre cómo declarar tus inversiones en el extranjero y tus impuestos de forma transparente en Honduras.",
    },
  ];
  return (
    <section id="seguridad" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="overflow-hidden rounded-3xl border border-brand-emerald/20 bg-gradient-to-br from-white to-brand-emerald/5 p-8 shadow-sm md:p-12">
          <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-emerald/10 px-3 py-1 text-xs font-semibold text-brand-emerald">
                <Lock className="size-3.5" /> Autoridad y Seguridad
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy md:text-4xl">
                Educación ética, no asesoría financiera
              </h2>
            </div>
            <Sparkles className="hidden size-10 text-brand-gold md:block" />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {items.map((it, i) => (
              <div key={i} className="rounded-xl bg-white p-6 shadow-sm">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-brand-emerald text-white">
                  <Check className="size-5" strokeWidth={3} />
                </div>
                <h3 className="mt-4 font-semibold text-brand-navy">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{it.desc}</p>
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
      msg: "Por fin entendí cómo transferir desde mi banca en línea sin que me cobren cualquier cosa. Gracias abcfinanciero 🙌",
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
        <h2 className="text-center text-3xl font-bold tracking-tight text-brand-navy md:text-4xl">
          Hondureños que ya dieron el primer paso
        </h2>
        <p className="mt-3 text-center text-slate-600">
          Mensajes reales de quienes ya tomaron su mentoría
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <div key={i} className="rounded-2xl bg-slate-100 p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-navy text-white text-sm font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-navy">{t.name}</p>
                  <p className="text-xs text-slate-500">Cliente verificado</p>
                </div>
              </div>
              <div className="relative mt-4 rounded-2xl rounded-tl-sm bg-[#dcf8c6] p-4 text-sm text-slate-800 shadow-sm">
                <p className="leading-relaxed">{t.msg}</p>
                <div className="mt-2 flex items-center justify-end gap-1 text-[10px] text-slate-500">
                  {t.time}
                  <CheckCheck className="size-3.5 text-sky-500" />
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
    "Sesión privada 1:1 con un mentor",
    "Apertura de cuenta en broker regulado de EE.UU.",
    "Estrategia de depósito desde tu banco local",
    "Tu primera compra real (Acción o ETF) en vivo",
    "Soporte post-sesión por WhatsApp",
  ];
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="bg-brand-navy px-8 py-6 text-center text-white">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
              Mentoría Privada 1:1
            </p>
            <h3 className="mt-1 text-xl font-bold md:text-2xl">
              Introducción a la Bolsa de Valores
            </h3>
          </div>
          <div className="px-8 py-10 text-center">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-lg font-semibold text-slate-500">L</span>
              <span className="text-6xl font-extrabold tracking-tight text-brand-navy md:text-7xl">
                1,800
              </span>
            </div>
            <p className="mt-1 text-sm text-slate-500">Pago único · Sin suscripciones</p>

            <ul className="mx-auto mt-8 max-w-md space-y-3 text-left">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-emerald text-white">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-slate-700">{f}</span>
                </li>
              ))}
            </ul>

            <p className="mx-auto mt-8 max-w-md text-sm text-slate-600">
              Asegura tu espacio hoy. Al tocar el botón serás redirigido a nuestro WhatsApp para
              coordinar tu método de pago preferido y agendar tu hora en el calendario.
            </p>

            <div className="mt-6">
              <CTA className="w-full md:w-auto">Agendar por WhatsApp</CTA>
            </div>

            <div className="mt-8 border-t border-slate-100 pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Métodos de pago aceptados
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                {[
                  "Transferencia BAC",
                  "Transferencia Ficohsa",
                  "Transferencia Atlántida",
                  "Tarjeta Crédito/Débito",
                ].map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
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

function Footer() {
  return (
    <footer className="bg-brand-navy-dark text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-brand-gold text-brand-navy font-bold">
                a
              </span>
              <span className="text-lg font-bold text-white">abcfinanciero</span>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-slate-400">
              abcfinanciero es una plataforma de educación financiera. No somos asesores financieros
              regulados por la CNBS ni captamos fondos del público. Las inversiones en la bolsa
              conllevan riesgos. El desempeño pasado no garantiza resultados futuros.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <a href="#" className="text-slate-300 hover:text-white">
              Política de Privacidad
            </a>
            <a href="#" className="text-slate-300 hover:text-white">
              Términos y Condiciones
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:brightness-110"
            >
              Contáctanos por WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} abcfinanciero. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <WhatsIncluded />
        <TrustSafety />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
