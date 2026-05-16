import type { Metadata } from 'next';
import Link from 'next/link';
import Revelar from '../../src/componentes/ui/Revelar';
import BotonWhatsapp from '../../src/componentes/ui/BotonWhatsapp';
import CotizadorRapido from '../../src/componentes/ui/CotizadorRapido';

export const metadata: Metadata = {
  title: 'Gracias | Jesús González Acordeonista',
  description:
    'Recibí tus datos. Te escribo personalmente por WhatsApp en minutos para coordinar tu evento.',
  // Las páginas de agradecimiento no deben indexarse ni dar señales SEO.
  robots: { index: false, follow: false },
  alternates: { canonical: '/gracias' },
};

const PASOS = [
  {
    n: '1',
    t: 'Reviso tu solicitud',
    d: 'Confirmo disponibilidad para tu fecha y ciudad en cuanto la veo.',
  },
  {
    n: '2',
    t: 'Te escribo por WhatsApp',
    d: 'Personalmente, en minutos, para afinar los detalles de tu evento.',
  },
  {
    n: '3',
    t: 'Te paso la propuesta',
    d: 'Clara y a tu medida: formato, repertorio y todo por escrito.',
  },
];

export default function Page() {
  return (
    <main className="grano relative bg-tinta text-hueso">
      {/* CONFIRMACIÓN */}
      <section className="relative overflow-hidden border-b border-[color:var(--linea)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              'radial-gradient(70% 90% at 50% 0%, rgba(201,168,76,0.16), transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-2xl px-6 py-20 text-center sm:py-28">
          <Revelar>
            <span
              className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-oro text-oro"
              aria-hidden="true"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 13l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="kicker">Solicitud recibida</p>
            <h1 className="mt-5 font-display text-[2.3rem] font-semibold leading-[1.06] text-hueso sm:text-[3rem]">
              ¡Gracias! Ya tengo tus datos
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-[1.05rem] leading-relaxed text-hueso-tenue">
              Recibí tu solicitud y te escribo personalmente por WhatsApp en
              minutos para coordinar tu evento. Si quieres adelantar la
              conversación, abre el chat ahora mismo.
            </p>

            <div className="mt-9 flex flex-col items-center gap-4">
              <BotonWhatsapp
                mensaje="¡Hola Jesús! Acabo de enviar mis datos por la web y quiero adelantar la conversación de mi evento."
                evento="gracias_abrir_chat"
                variante="whatsapp"
                tamano="lg"
              >
                Abrir el chat ahora
              </BotonWhatsapp>
            </div>
          </Revelar>
        </div>
      </section>

      {/* PRÓXIMOS PASOS */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <Revelar>
          <h2 className="text-center font-display text-[1.7rem] font-semibold text-hueso sm:text-[2rem]">
            Qué sigue ahora
          </h2>
        </Revelar>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {PASOS.map((p, i) => (
            <Revelar key={p.n} retardo={i * 0.08}>
              <div className="h-full rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-[color:var(--color-tinta-2)] p-6 shadow-[var(--shadow-suave)]">
                <span className="font-display text-[2rem] font-semibold text-oro">
                  {p.n}
                </span>
                <h3 className="mt-3 font-display text-[1.15rem] font-semibold text-hueso">
                  {p.t}
                </h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-hueso-tenue">
                  {p.d}
                </p>
              </div>
            </Revelar>
          ))}
        </div>
      </section>

      {/* COTIZADOR (acelera la conversación) + enlaces */}
      <section className="border-t border-[color:var(--linea)]">
        <div className="mx-auto grid max-w-5xl items-start gap-12 px-6 py-20 lg:grid-cols-2">
          <Revelar>
            <p className="kicker">Mientras tanto</p>
            <h2 className="mt-4 font-display text-[1.8rem] font-semibold text-hueso sm:text-[2.1rem]">
              ¿Quieres adelantar tu cotización?
            </h2>
            <p className="mt-4 text-[1rem] leading-relaxed text-hueso-tenue">
              Si necesitas la propuesta cuanto antes, déjame los datos clave
              aquí y te respondo de inmediato por WhatsApp.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-[0.95rem]">
              <Link
                href="/videos"
                className="font-semibold tracking-tight text-hueso underline-offset-4 transition-colors duration-200 hover:text-oro hover:underline"
              >
                Ver videos de presentaciones en vivo →
              </Link>
              <Link
                href="/press"
                className="font-semibold tracking-tight text-hueso underline-offset-4 transition-colors duration-200 hover:text-oro hover:underline"
              >
                Conocer la trayectoria y prensa →
              </Link>
              <Link
                href="/contrataciones"
                className="font-semibold tracking-tight text-hueso underline-offset-4 transition-colors duration-200 hover:text-oro hover:underline"
              >
                Ver formatos de show y contratación →
              </Link>
            </div>
          </Revelar>
          <Revelar retardo={0.1}>
            <CotizadorRapido
              evento="gracias_cotizador"
              titulo="Adelanta tu cotización"
            />
          </Revelar>
        </div>
      </section>
    </main>
  );
}
