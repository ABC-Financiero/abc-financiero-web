import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MessageCircle, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero, SectionDivider } from "@/components/PageHero";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | ABC Financiero" },
      {
        name: "description",
        content:
          "¿Tienes alguna pregunta? Escríbenos directamente y te respondemos a la brevedad.",
      },
      { property: "og:title", content: "Contacto | ABC Financiero" },
      {
        property: "og:description",
        content: "Escríbenos directamente y te respondemos a la brevedad.",
      },
    ],
  }),
  component: ContactoPage,
});

function Hero() {
  return (
    <PageHero
      eyebrow={<><Sparkles className="size-3.5" /> Estamos para ayudarte</>}
      title={
        <>
          ¿Tienes alguna{" "}
          <span
            style={{
              background:
                "linear-gradient(120deg, #5CE0B6 0%, #A7E3CE 60%, #FFFFFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            pregunta?
          </span>
        </>
      }
      subtitle="Escríbenos directamente y te respondemos a la brevedad."
    />
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) return;
    try {
      const body = `Nombre: ${name}\nCorreo: ${email}\n\n${message}`;
      const href = `mailto:raraquen@abcfinanciero.com?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = href;
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    borderRadius: 12,
    border: "1.5px solid #C5E4DA",
    background: "#FFFFFF",
    padding: "12px 14px",
    fontSize: 15,
    color: "#1C2B27",
    outline: "none",
  };

  return (
    <section style={{ background: "#F0F5F3" }} className="py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div
          className="rounded-[20px] bg-white p-8 md:p-10"
          style={{ border: "1px solid #C5E4DA", boxShadow: "0 2px 12px rgba(26,107,85,0.08)" }}
        >
          {status === "success" ? (
            <p style={{ color: "#1A6B55", fontWeight: 600, textAlign: "center" }}>
              ¡Mensaje enviado! Te responderemos pronto.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="mb-1 block text-sm font-semibold" style={{ color: "#1C2B27" }}>
                  Nombre
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={inputStyle}
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold" style={{ color: "#1C2B27" }}>
                  Correo electrónico
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyle}
                  placeholder="tu@correo.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold" style={{ color: "#1C2B27" }}>
                  Asunto
                </label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  style={inputStyle}
                  placeholder="¿Sobre qué quieres escribirnos?"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold" style={{ color: "#1C2B27" }}>
                  Mensaje
                </label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ ...inputStyle, resize: "vertical" }}
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Enviar mensaje
              </button>
              {status === "error" && (
                <p style={{ color: "#9B2C2C", fontSize: 13, textAlign: "center" }}>
                  Algo salió mal. Escríbenos directamente a raraquen@abcfinanciero.com
                </p>
              )}
            </form>
          )}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:raraquen@abcfinanciero.com"
            className="card-hover flex items-center gap-3 rounded-[20px] bg-white p-5"
            style={{ border: "1px solid #C5E4DA" }}
          >
            <span
              className="grid h-10 w-10 place-items-center rounded-full"
              style={{ background: "#EEEDFE", color: "#6B4FC8" }}
            >
              <Mail className="size-5" strokeWidth={1.8} />
            </span>
            <span style={{ color: "#1C2B27", fontWeight: 600, fontSize: 14 }}>
              raraquen@abcfinanciero.com
            </span>
          </a>
          <a
            href="https://wa.me/50487328488"
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover flex items-center gap-3 rounded-[20px] bg-white p-5"
            style={{ border: "1px solid #C5E4DA" }}
          >
            <span
              className="grid h-10 w-10 place-items-center rounded-full"
              style={{ background: "#EEEDFE", color: "#6B4FC8" }}
            >
              <MessageCircle className="size-5" strokeWidth={1.8} />
            </span>
            <span style={{ color: "#1C2B27", fontWeight: 600, fontSize: 14 }}>
              +504 8732-8488
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactoPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-neutral-700 antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <SectionDivider />
        <ContactForm />
      </main>
      <SiteFooter />
    </div>
  );
}
