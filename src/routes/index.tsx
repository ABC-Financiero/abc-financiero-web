import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  Leaf,
  ArrowRight,
  Check,
  X as XIcon,
  Mail,
  Instagram,
  MessageCircle,
  Download,
  User,
} from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg.asset.json";
import testimonial2 from "@/assets/testimonial-2.jpg.asset.json";
import testimonial3 from "@/assets/testimonial-3.jpg.asset.json";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.link/spml85";
const BRAND = "ABC Financiero";
const GUIA_URL = "/guia";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `Ricardo Araque | Invertir en la Bolsa de Valores desde Honduras` },
      {
        name: "description",
        content:
          "Aprende a invertir en la bolsa desde Honduras, paso a paso. Descarga la guía gratis para abrir tu cuenta y hacer tu primera inversión, sin enredos.",
      },
      { property: "og:title", content: `Invertir desde Honduras | Ricardo Araque` },
      {
        property: "og:description",
        content:
          "Educación financiera honesta para hondureños. Descarga la guía gratuita y da tu primer paso para invertir en la bolsa de valores.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

/* -------------------------------- Navbar -------------------------------- */
function Navbar() {
  const [open, setOpen] = useState(false);
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
        <div className="hidden md:block">
          <Button asChild variant="navy" size="lg">
            <Link to="/guia">
              Descargar la guía gratis
              <ArrowRight className="size-4" />
            </Link>
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
            <Button asChild variant="navy" size="lg" className="w-full">
              <Link to="/guia" onClick={() => setOpen(false)}>
                Descargar la guía gratis
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

/* --------------------------------- Hero --------------------------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-[1.15fr_1fr] md:gap-16 md:py-24">
        {/* Texto */}
        <div className="text-left">
          <span
            className="text-xs font-extrabold uppercase tracking-[0.14em]"
            style={{ color: "#2E9B7A" }}
          >
            INVERTIR DESDE HONDURAS
          </span>
          <h1
            className="mt-4 text-[44px] font-extrabold leading-[1.02] tracking-tight text-brand-navy md:text-[68px]"
            style={{ letterSpacing: "-0.035em", fontWeight: 800 }}
          >
            Crees que invertir en la bolsa{" "}
            <span className="italic font-serif font-normal text-brand-emerald">
              no es para ti.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base font-normal leading-[1.65] text-brand-neutral-700 md:text-lg">
            Yo también lo creía: que era cosa de gente con miles de dólares o
            que vive en Estados Unidos. No lo es. Soy Ricardo Araque y te
            enseño a invertir desde Honduras, paso a paso, empezando con lo
            que ya tienes.
          </p>

          <div className="mt-9 flex flex-col items-start gap-3">
            <Button asChild variant="navy" size="xl">
              <Link to="/guia">
                Descargar la guía gratis
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <p
              className="max-w-md text-sm"
              style={{ color: "rgba(28,43,39,0.7)" }}
            >
              Aprende a abrir tu cuenta y hacer tu primera inversión desde
              Honduras. Sin costo.
            </p>
            <p className="mt-1 text-xs text-brand-neutral-400">
              +28,000 personas me siguen en TikTok · Invierto mi propio dinero
              con la misma estrategia que enseño.
            </p>
          </div>
        </div>

        {/* Foto de Ricardo */}
        <div className="relative md:justify-self-end">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[28px] border border-brand-emerald-border bg-brand-emerald-light shadow-[0_20px_60px_-24px_rgba(26,107,85,0.35)]">
            <div className="absolute inset-0 grid place-items-center text-brand-emerald">
              <div className="flex flex-col items-center gap-3 px-6 text-center">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-white/70 border border-brand-emerald-border">
                  <User className="size-9" />
                </span>
                <p className="text-sm font-bold uppercase tracking-[0.12em]">
                  Foto de Ricardo
                </p>
              </div>
            </div>
            {/* decorative accent */}
            <span
              aria-hidden
              className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-brand-emerald/15"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Trust strip ----------------------------- */
function TrustStrip() {
  return (
    <section style={{ backgroundColor: "#F0F5F3" }} className="relative">
      <div className="mx-auto max-w-3xl px-4 py-12 text-left md:py-14">
        <p className="text-base leading-[1.7] text-brand-neutral-700 md:text-lg">
          No vendo fórmulas mágicas ni promesas de hacerte rico rápido.
          Comparto{" "}
          <span className="font-serif italic text-brand-emerald">
            lo que yo mismo hago con mi dinero
          </span>
          , en un lenguaje que se entiende. Si buscas claridad y no humo,
          estás en el lugar correcto.
        </p>
      </div>
    </section>
  );
}

/* ---------------------------- The wedge --------------------------------- */
function Wedge() {
  const blocks = [
    {
      label: "SÍ ES POSIBLE",
      text: "Sí puedes invertir desde aquí. Existen brókers que aceptan a hondureños, como Hapi, y te dan acceso a la bolsa de Estados Unidos desde tu hogar.",
    },
    {
      label: "LAS REGLAS QUE CAMBIAN TODO",
      text: "Hay detalles que cambian tu estrategia. Por ejemplo, no todos quieren la misma meta y eso cambia el horizonte de tiempo y la forma en que compras activos financieros.",
    },
    {
      label: "NO NECESITAS MUCHO",
      text: "No necesitas mucho dinero ni cuentas en dólares. Puedes empezar desde L250 ($10) e ir creciendo a tu ritmo. Lo importante es empezar bien, no empezar con mucho.",
    },
  ];
  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-brand-emerald md:text-4xl">
          Lo que casi nadie te explica sobre invertir desde Honduras
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {blocks.map((b) => (
            <article
              key={b.label}
              className="rounded-[20px] border border-brand-emerald-border bg-white p-7"
              style={{ boxShadow: "0 2px 8px rgba(26,107,85,0.06)" }}
            >
              <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-emerald-mid">
                {b.label}
              </span>
              <p className="mt-4 text-[15px] leading-[1.7] text-brand-neutral-700">
                {b.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ The path -------------------------------- */
function Path() {
  const steps = [
    {
      n: "01",
      text: "Empieza abriendo tu cuenta. En mi guía gratuita, te explico, paso a paso, cómo abrir tu cuenta y hacer tu primera inversión en la bolsa de valores desde Honduras.",
    },
    {
      n: "02",
      text: "Sigue educándote. La guía solo es el inicio pero aún queda mucho por aprender.",
    },
    {
      n: "03",
      text: "Profundiza cuando estés listo. Cuando quieras ir más allá, tengo recursos y acompañamiento uno a uno para seguir creciendo.",
    },
  ];

  const containerRef = useRef<HTMLOListElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section style={{ backgroundColor: "#E8F5F0" }} className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold tracking-tight text-brand-emerald md:text-4xl">
          Tu camino, en el orden correcto
        </h2>

        <ol
          ref={containerRef}
          className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8"
        >
          {steps.map((s, i) => {
            const animate = !reduced;
            const show = reduced || visible;
            const style = animate
              ? {
                  transition:
                    "opacity 600ms ease-out, transform 600ms ease-out",
                  transitionDelay: `${i * 120}ms`,
                  opacity: show ? 1 : 0,
                  transform: show ? "translateY(0)" : "translateY(16px)",
                }
              : undefined;
            return (
              <li
                key={s.n}
                style={style}
                className="rounded-[20px] border border-brand-emerald-border bg-white p-7"
              >
                <span
                  className="block text-5xl font-extrabold leading-none text-brand-emerald md:text-6xl"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  {s.n}
                </span>
                <p className="mt-5 text-[15px] leading-[1.7] text-brand-neutral-700">
                  {s.text}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ---------------------- Honest qualification ---------------------------- */
function Qualification() {
  const yes = [
    "Quieres empezar a invertir y no sabes por dónde.",
    "Vives en Honduras y crees que la bolsa no es para ti.",
    "Puedes ahorrar aunque sea $10 al mes y quieres ponerlos a trabajar.",
  ];
  const no = [
    "Buscas hacerte rico rápido o duplicar tu dinero en semanas.",
    "Quieres que alguien invierta por ti sin entender qué pasa.",
    "No estás dispuesto a aprender lo básico.",
  ];
  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold tracking-tight text-brand-emerald md:text-4xl">
          ¿Es esto para ti?
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div
            className="rounded-[20px] border border-brand-emerald-border bg-white p-7"
            style={{ boxShadow: "0 2px 8px rgba(26,107,85,0.06)" }}
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand-emerald-mid">
              Es para ti si
            </p>
            <ul className="mt-5 space-y-4">
              {yes.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-emerald text-white">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-[1.65] text-brand-neutral-700">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-[20px] border border-brand-emerald-border bg-white p-7"
            style={{ boxShadow: "0 2px 8px rgba(26,107,85,0.06)" }}
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand-neutral-400">
              No es para ti si
            </p>
            <ul className="mt-5 space-y-4">
              {no.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-brand-emerald-border bg-white text-brand-neutral-400">
                    <XIcon className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-[1.65] text-brand-neutral-700">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Final CTA ------------------------------- */
function FinalCTA() {
  return (
    <section style={{ backgroundColor: "#1C2B27" }} className="relative">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center md:py-24">
        <h2
          className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          style={{ letterSpacing: "-0.03em" }}
        >
          Empieza por donde se debe:{" "}
          <span className="italic font-serif font-normal" style={{ color: "#2E9B7A" }}>
            aprendiendo.
          </span>
        </h2>
        <p
          className="mx-auto mt-6 max-w-xl text-base leading-[1.65] md:text-lg"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          Descarga la guía gratuita y da tu primer paso para invertir desde
          Honduras, con claridad y sin enredos.
        </p>
        <div className="mt-9 flex flex-col items-center gap-3">
          <Button
            asChild
            size="xl"
            className="rounded-full font-bold"
            style={{ backgroundColor: "#2E9B7A", color: "#1C2B27" }}
          >
            <Link to="/guia">
              <Download className="size-4" />
              Descargar la guía gratis
            </Link>
          </Button>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
            Es gratis. Sin spam. Cancelas cuando quieras.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Footer -------------------------------- */
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
            <Link to="/guia">
              <Download className="size-4" /> Descargar la guía gratis
            </Link>
          </Button>
        </div>

        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-emerald-mid text-white">
                <Leaf className="size-4" />
              </span>
              <span className="text-lg font-extrabold text-white">{BRAND}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-[1.7] text-white/65">
              Educación financiera honesta para hondureños que quieren tomar el
              control de sus finanzas personales.
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

          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/50">
              Navegación
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#top" className="text-white/80 hover:text-white">
                  Inicio
                </a>
              </li>
              <li>
                <Link to="/guia" className="text-white/80 hover:text-white">
                  Guía gratis
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/50">
              Legal
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/80 hover:text-white">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white">
                  Términos y Condiciones
                </a>
              </li>
            </ul>
            <p className="mt-5 text-[11px] leading-[1.6] text-white/50">
              {BRAND} es una plataforma de educación financiera. No somos
              asesores financieros regulados por la CNBS ni captamos fondos
              del público. Las inversiones en la Bolsa de Valores conllevan
              riesgos. El desempeño pasado no garantiza resultados futuros.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND}. Todos los derechos
            reservados.
          </p>
          <p>Hecho desde Honduras 🇭🇳</p>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-neutral-700 antialiased">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Wedge />
        <Path />
        <Qualification />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
