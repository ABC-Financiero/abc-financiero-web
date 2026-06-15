import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { Shield } from "lucide-react";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad | ABC Financiero" },
      {
        name: "description",
        content:
          "Conoce cómo ABC Financiero recopila, utiliza y protege tu información personal. Transparencia y seguridad para nuestros usuarios.",
      },
      { property: "og:title", content: "Política de Privacidad | ABC Financiero" },
      {
        property: "og:description",
        content: "Cómo protegemos y utilizamos tu información personal en ABC Financiero.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PrivacidadPage,
});

function Hero() {
  return (
    <PageHero
      eyebrow={<><Shield className="size-3.5" /> Tu información está segura</>}
      title="Política de Privacidad"
      subtitle="Te explicamos de manera transparente cómo manejamos tus datos personales."
    />
  );
}

function PrivacyContent() {
  return (
    <section style={{ background: "#F0F5F3" }} className="py-16">
      <div className="mx-auto max-w-3xl px-4">
        <div
          className="rounded-[20px] bg-white p-8 md:p-10"
          style={{ border: "1px solid #C5E4DA", boxShadow: "0 2px 12px rgba(26,107,85,0.08)" }}
        >
          <div className="space-y-8 text-brand-neutral-700">
            <div>
              <h2 className="text-xl font-bold text-brand-navy">1. Responsable del tratamiento</h2>
              <p className="mt-3 text-sm leading-relaxed">
                El responsable del tratamiento de tus datos personales es ABC Financiero. Puedes contactarnos para cualquier tema relacionado con la protección de datos a través del correo electrónico: contacto@abcfinanciero.com.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-navy">2. Información que recopilamos</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Podemos recopilar los siguientes tipos de información personal:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed">
                <li><strong>Datos de identificación:</strong> nombre y apellido, dirección de correo electrónico, número de teléfono.</li>
                <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia, origen de la visita.</li>
                <li><strong>Datos de comunicación:</strong> mensajes que nos envíes a través de formularios de contacto, correo electrónico o WhatsApp.</li>
                <li><strong>Datos de transacciones:</strong> información relacionada con la compra de cursos, mentorías o productos digitales (no incluye datos de tarjetas de crédito, que son procesados por terceros).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-navy">3. Finalidad del tratamiento</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Utilizamos tu información personal para las siguientes finalidades:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed">
                <li>Proporcionarte los servicios, productos o contenidos que solicites.</li>
                <li>Enviarte materiales educativos, guías y recursos descargables que hayas solicitado.</li>
                <li>Comunicarnos contigo para responder preguntas, consultas o solicitudes de soporte.</li>
                <li>Enviarte información sobre nuevos contenidos, cursos, mentorías y ofertas especiales (siempre que hayas dado tu consentimiento).</li>
                <li>Mejorar nuestro sitio web, productos y servicios a través del análisis de uso y comportamiento de navegación.</li>
                <li>Cumplir con obligaciones legales aplicables en Honduras.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-navy">4. Base legal para el tratamiento</h2>
              <p className="mt-3 text-sm leading-relaxed">
                El tratamiento de tus datos personales se fundamenta en:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed">
                <li><strong>Tu consentimiento:</strong> cuando te suscribes a nuestra lista de correo, descargas recursos o solicitas información.</li>
                <li><strong>Ejecución de un contrato:</strong> cuando adquieres un curso, mentoría o servicio de pago.</li>
                <li><strong>Interés legítimo:</strong> para mejorar nuestros servicios y garantizar la seguridad del sitio web.</li>
                <li><strong>Cumplimiento legal:</strong> cuando la ley nos obliga a conservar o proporcionar cierta información.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-navy">5. Cookies y tecnologías similares</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Nuestro sitio web utiliza cookies y tecnologías similares para mejorar tu experiencia de navegación, analizar el tráfico del sitio y personalizar contenidos. Puedes gestionar tus preferencias de cookies a través de la configuración de tu navegador.
              </p>
              <p className="mt-2 text-sm leading-relaxed">
                Utilizamos servicios de terceros como Google Analytics para analizar el tráfico del sitio. Estos servicios pueden recopilar información sobre tu uso del sitio web de acuerdo con sus propias políticas de privacidad.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-navy">6. Compartir información con terceros</h2>
              <p className="mt-3 text-sm leading-relaxed">
                ABC Financiero no vende, alquila ni comercializa tu información personal a terceros. Sin embargo, podemos compartir tus datos con:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed">
                <li><strong>Proveedores de servicios:</strong> empresas que nos ayudan a operar el sitio web, enviar correos electrónicos, procesar pagos o analizar datos (por ejemplo, Brevo para envío de emails, Hotmart para procesamiento de pagos).</li>
                <li><strong>Obligaciones legales:</strong> cuando la ley nos lo exija o para proteger nuestros derechos legales.</li>
              </ul>
              <p className="mt-2 text-sm leading-relaxed">
                Todos nuestros proveedores de servicios están obligados a mantener la confidencialidad de tu información y a utilizarla únicamente para los fines específicos para los que fueron contratados.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-navy">7. Seguridad de la información</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tus datos personales contra el acceso no autorizado, la alteración, divulgación o destrucción. Estas medidas incluyen:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed">
                <li>Uso de conexiones seguras (HTTPS) en todo el sitio web.</li>
                <li>Almacenamiento de datos en servidores con acceso restringido.</li>
                <li>Revisión periódica de nuestras prácticas de recopilación, almacenamiento y procesamiento de información.</li>
              </ul>
              <p className="mt-2 text-sm leading-relaxed">
                Sin embargo, debes tener en cuenta que ningún método de transmisión por Internet o de almacenamiento electrónico es 100% seguro. Aunque nos esforzamos por utilizar medidas comercialmente aceptables para proteger tu información personal, no podemos garantizar su seguridad absoluta.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-navy">8. Conservación de datos</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Conservamos tus datos personales únicamente durante el tiempo necesario para cumplir con las finalidades para las que fueron recopilados, incluyendo el cumplimiento de obligaciones legales, contables o de informes. Cuando tus datos ya no sean necesarios, los eliminaremos o anonimizaremos de manera segura.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-navy">9. Tus derechos</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Tienes los siguientes derechos respecto a tus datos personales:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed">
                <li><strong>Acceso:</strong> solicitar una copia de la información personal que tenemos sobre ti.</li>
                <li><strong>Rectificación:</strong> solicitar la corrección de información inexacta o incompleta.</li>
                <li><strong>Cancelación:</strong> solicitar la eliminación de tus datos personales cuando ya no sean necesarios.</li>
                <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos para fines de marketing directo.</li>
                <li><strong>Limitación del tratamiento:</strong> solicitar la restricción del tratamiento de tus datos en determinadas circunstancias.</li>
                <li><strong>Portabilidad:</strong> recibir tus datos en un formato estructurado y de uso común.</li>
              </ul>
              <p className="mt-2 text-sm leading-relaxed">
                Para ejercer cualquiera de estos derechos, envía una solicitud a contacto@abcfinanciero.com indicando claramente qué derecho deseas ejercer. Te responderemos dentro de un plazo razonable.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-navy">10. Menores de edad</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Nuestros servicios no están dirigidos a personas menores de 18 años. No recopilamos intencionalmente información personal de menores de edad. Si eres padre o tutor y crees que tu hijo nos ha proporcionado información personal, contáctanos para que podamos eliminarla.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-navy">11. Cambios en esta política</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Podemos actualizar esta política de privacidad periódicamente para reflejar cambios en nuestras prácticas o por otras razones operativas, legales o reglamentarias. Te notificaremos cualquier cambio material publicando la nueva política en esta página con la fecha de actualización.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-navy">12. Contacto</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Si tienes preguntas, inquietudes o solicitudes relacionadas con esta política de privacidad o el tratamiento de tus datos personales, puedes contactarnos a:
              </p>
              <p className="mt-2 text-sm leading-relaxed">
                <strong>Correo electrónico:</strong> contacto@abcfinanciero.com<br />
                <strong>WhatsApp:</strong> +504 8732-8488
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

function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-neutral-700 antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <PrivacyContent />
      </main>
      <SiteFooter />
    </div>
  );
}
