import type { Metadata } from 'next';
import JsonLd from '../../src/componentes/seo/JsonLd';
import Revelar from '../../src/componentes/ui/Revelar';
import BotonWhatsapp from '../../src/componentes/ui/BotonWhatsapp';
import CotizadorRapido from '../../src/componentes/ui/CotizadorRapido';
import { breadcrumbSchema } from '../../src/componentes/seo/esquemas';
import { proximosEventos } from '../../src/contenido/agenda';
import { eventosSchema } from '../../src/componentes/agenda/esquemaAgenda';
import ListaEventos from '../../src/componentes/agenda/ListaEventos';

const TITULO = 'Próximas presentaciones · Agenda — Jesús González';
const DESCRIPCION =
  'Agenda de presentaciones en vivo de Jesús González, acordeonista vallenato. Mira las próximas fechas y asegura tu evento por WhatsApp antes de que se llene.';

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRIPCION,
  alternates: { canonical: '/agenda' },
  openGraph: {
    type: 'website',
    title: TITULO,
    description: DESCRIPCION,
    url: '/agenda',
    images: ['/Imagenes/Jesus Gonzalez en concierto.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITULO,
    description: DESCRIPCION,
    images: ['/Imagenes/Jesus Gonzalez en concierto.jpg'],
  },
};

export const revalidate = 600; // ISR: refresca desde Supabase sin redeploy

const MSJ_AGENDA =
  '¡Hola Jesús! Quiero asegurar una fecha en tu agenda para mi evento. ' +
  '¿Me confirmas tu disponibilidad, por favor?';

export default async function AgendaPage() {
  const eventos = await proximosEventos();
  const hayEventos = eventos.length > 0;
  const ld = eventosSchema(eventos);

  return (
    <>
      {ld.length > 0 && <JsonLd id="ld-agenda-eventos" data={ld} />}
      <JsonLd
        id="ld-agenda-breadcrumb"
        data={breadcrumbSchema([
          { nombre: 'Inicio', url: '/' },
          { nombre: 'Agenda', url: '/agenda' },
        ])}
      />

      {/* Hero */}
      <header className="grano relative overflow-hidden border-b border-[color:var(--linea)] bg-tinta-2">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center md:py-24">
          <Revelar>
            <p className="kicker mb-4">Agenda en vivo</p>
            <h1 className="mx-auto max-w-3xl font-display text-[2.2rem] leading-[1.08] text-hueso md:text-[3.4rem]">
              Próximas presentaciones
            </h1>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-[1.05rem] leading-relaxed text-hueso-tenue">
              {hayEventos
                ? 'Estas son mis próximas fechas confirmadas. La agenda se llena rápido: si quieres una fecha cercana para tu evento, escríbeme cuanto antes.'
                : 'Estoy organizando la próxima temporada de presentaciones. Tu fecha puede ser la primera del calendario.'}
            </p>
          </Revelar>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-14 md:py-20">
        {hayEventos ? (
          <>
            <ListaEventos eventos={eventos} />

            {/* CTA de cierre */}
            <Revelar className="mt-12">
              <div className="rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-[color:var(--color-tinta-2)] p-7 text-center shadow-[var(--shadow-suave)] sm:p-9">
                <h2 className="font-display text-2xl text-hueso sm:text-[1.9rem]">
                  ¿Tu fecha no está en la lista?
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-[1rem] leading-relaxed text-hueso-tenue">
                  Aún tengo cupos abiertos para fechas privadas. Cuéntame
                  qué tienes en mente y te confirmo disponibilidad hoy
                  mismo.
                </p>
                <div className="mt-7 flex justify-center">
                  <BotonWhatsapp
                    mensaje={MSJ_AGENDA}
                    evento="agenda_cta_whatsapp"
                    tamano="lg"
                  >
                    Asegurar mi fecha
                  </BotonWhatsapp>
                </div>
              </div>
            </Revelar>
          </>
        ) : (
          /* Estado vacío fuerte: convierte aunque la BD esté vacía/caída */
          <Revelar>
            <div className="rounded-[var(--radius-grande)] border border-[color:var(--linea)] bg-[color:var(--color-tinta-2)] p-8 text-center shadow-[var(--shadow-suave)] sm:p-12">
              <p className="kicker mb-3">Cupos abiertos</p>
              <h2 className="mx-auto max-w-2xl font-display text-[1.8rem] leading-tight text-hueso sm:text-[2.4rem]">
                Estoy agendando la próxima temporada — asegura tu fecha
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[1.02rem] leading-relaxed text-hueso-tenue">
                Las mejores fechas (diciembre, temporada de bodas y
                puentes) se reservan con meses de anticipación. Escríbeme
                ahora y bloqueo tu día antes de que alguien más lo tome.
              </p>
              <div className="mt-8 flex justify-center">
                <BotonWhatsapp
                  mensaje={MSJ_AGENDA}
                  evento="agenda_vacia_whatsapp"
                  tamano="lg"
                >
                  Reservar mi fecha por WhatsApp
                </BotonWhatsapp>
              </div>
            </div>

            <div className="mt-8">
              <CotizadorRapido
                evento="agenda_cotizador"
                titulo="O cuéntame tu evento y te cotizo en 30 segundos"
              />
            </div>
          </Revelar>
        )}
      </main>
    </>
  );
}
