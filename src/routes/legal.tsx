import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { Scale } from "lucide-react";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Aviso Legal | ABC Financiero" },
      {
        name: "description",
        content:
          "Términos y condiciones de uso del sitio web y servicios de ABC Financiero. Información sobre educación financiera y mentoría.",
      },
      { property: "og:title", content: "Aviso Legal | ABC Financiero" },
      {
        property: "og:description",
        content: "Términos y condiciones de uso de ABC Financiero.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LegalPage,
});

function Hero() {
  return (
    <PageHero
      eyebrow={<><Scale className="size-3.5" /> Información importante</>}
      title="Aviso Legal"
      subtitle="Términos y condiciones de uso de nuestro sitio web y servicios."
    />
  );
}

function LegalContent() {
  return (
    <section style={{ background: "#F0F5F3" }} className="py-16">
      <div className="mx-auto max-w-3xl px-4">
        <div
          className="rounded-[20px] bg-white p-8 md:p-10"
          style={{ border: "1px solid #C5E4DA", boxShadow: "0 2px 12px rgba(26,107,85,0.08)" }}
        >
          <div className="space-y-8 text-brand-neutral-700">
            <div>
              <h2 className="text-xl font-bold text-brand-navy">1. Identificación del titular</h2>
              <p className="mt-3 text-sm leading-relaxed">
                El presente sitio web es operado por ABC Financiero, una iniciativa dedicada a la educación financiera e inversión dirigida a personas residentes en Honduras. Para cualquier consulta relacionada con este aviso legal, puedes contactarnos a través de nuestro correo electrónico: contacto@abcfinanciero.com.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-navy">2. Objeto del sitio web</h2>
              <p className="mt-3 text-sm leading-relaxed">
                ABC Financiero tiene como finalidad ofrecer contenido educativo sobre finanzas personales, inversión en mercados de valores y herramientas para la toma de decisiones financieras informadas. El sitio incluye artículos, guías, cursos, mentorías y recursos descargables con fines exclusivamente educativos.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-navy">3. Naturaleza educativa de los contenidos</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Toda la información proporcionada en este sitio web, incluyendo pero no limitado a artículos, guías, videos, cursos y sesiones de mentoría, tiene un carácter meramente educativo e informativo. <strong className="text-brand-navy">En ningún caso constituye asesoría financiera, legal, fiscal o de inversión personalizada.</strong>
              </p>
              <p className="mt-2 text-sm leading-relaxed">
                Las estrategias, ejemplos y casos presentados son ilustrativos y no garantizan resultados similares. Cada persona debe evaluar su propia situación financiera, tolerancia al riesgo y objetivos antes de tomar decisiones de inversión.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-navy">4. Descargo de responsabilidad sobre inversiones</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Las inversiones en mercados de valores, incluyendo la Bolsa de Nueva York y otros mercados internacionales, conllevan riesgos significativos, incluyendo la posible pérdida total del capital invertido. Los rendimientos pasados no garantizan resultados futuros.
              </p>
              <p className="mt-2 text-sm leading-relaxed">
                ABC Financiero <strong className="text-brand-navy">no se hace responsable</strong> de las decisiones de inversión que el usuario tome con base en la información proporcionada en este sitio, ni de las pérdidas o ganancias derivadas de dichas decisiones. Recomendamos consultar con un asesor financiero certificado antes de realizar cualquier inversión.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-navy">5. Relación con plataformas de inversión</h2>
              <p className="mt-3 text-sm leading-relaxed">
                ABC Financiero no es una casa de bolsa, corredor de valores, entidad financiera regulada por la CNBS ni intermediario en el mercado de valores. No recibimos, administramos ni intermediamos fondos de inversión. Las referencias a plataformas como Hapi u otras son meramente informativas y no constituyen recomendación, patrocinio o garantía de dichas plataformas.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-navy">6. Propiedad intelectual</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Todos los contenidos de este sitio web, incluyendo textos, imágenes, gráficos, logotipos, videos, cursos y materiales descargables, son propiedad de ABC Financiero o de sus licenciantes y están protegidos por las leyes de propiedad intelectual de Honduras y tratados internacionales.
              </p>
              <p className="mt-2 text-sm leading-relaxed">
                Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otro uso de los contenidos sin autorización expresa y por escrito de ABC Financiero.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-navy">7. Uso de enlaces de terceros</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Este sitio puede contener enlaces a sitios web de terceros. ABC Financiero no tiene control sobre dichos sitios ni sobre sus políticas de privacidad o prácticas. La inclusión de un enlace no implica necesariamente una recomendación o respaldo de los contenidos, productos o servicios ofrecidos en dichos sitios.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-navy">8. Modificaciones</h2>
              <p className="mt-3 text-sm leading-relaxed">
                ABC Financiero se reserva el derecho de modificar este aviso legal en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en esta página. Te recomendamos revisar periódicamente esta sección para mantenerte informado de cualquier cambio.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-navy">9. Legislación aplicable y jurisdicción</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Este aviso legal se rige por las leyes de la República de Honduras. Cualquier controversia derivada del acceso o uso de este sitio web será sometida a la jurisdicción de los tribunales competentes de la ciudad de Tegucigalpa, Honduras.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-navy">10. Contacto</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Si tienes preguntas sobre este aviso legal, puedes contactarnos a través del correo electrónico: contacto@abcfinanciero.com
              </p>
            </div>

            <p className="text-xs text-brand-neutral-500 pt-4 border-t" style={{ borderColor: "#C5E4DA" }}>
              Última actualización: junio 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LegalPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-neutral-700 antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <LegalContent />
      </main>
      <SiteFooter />
    </div>
  );
}
