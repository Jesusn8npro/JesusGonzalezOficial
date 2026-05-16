import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '../../src/componentes/seo/JsonLd';
import { breadcrumbSchema } from '../../src/componentes/seo/esquemas';
import Revelar from '../../src/componentes/ui/Revelar';
import BotonWhatsapp from '../../src/componentes/ui/BotonWhatsapp';
import ListaRepertorio from '../../src/componentes/repertorio/ListaRepertorio';
import {
  obtenerRepertorio,
  totalCanciones,
} from '../../src/contenido/repertorio';

export const metadata: Metadata = {
  title: 'Repertorio Vallenato | Jesús González Acordeonista',
  description:
    'Repertorio curado de vallenato para bodas y eventos: clásicos, románticos, fiesta y parranda. Adaptable a tu evento con banda profesional de 6 a 9 músicos.',
  alternates: { canonical: '/repertorio' },
  openGraph: {
    title: 'Repertorio Vallenato | Jesús González',
    description:
      'Más de 70 clásicos del vallenato organizados por momento del evento. Repertorio adaptable a tu medida.',
    url: '/repertorio',
    images: ['/Imagenes/Jesus Gonzalez en concierto.jpg'],
  },
};

export default function Page() {
  const grupos = obtenerRepertorio();
  const total = totalCanciones();

  return (
    <>
      <JsonLd
        id="ld-repertorio-breadcrumb"
        data={breadcrumbSchema([
          { nombre: 'Inicio', url: '/' },
          { nombre: 'Repertorio', url: '/repertorio' },
        ])}
      />

      <main className="grano relative bg-tinta text-hueso">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-[color:var(--linea)]">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                'radial-gradient(70% 90% at 50% 0%, rgba(201,168,76,0.13), transparent 70%)',
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl px-6 py-20 text-center sm:py-28">
            <Revelar>
              <p className="kicker">Repertorio curado · {total}+ canciones</p>
              <h1 className="mt-5 font-display text-[2.4rem] font-semibold leading-[1.05] text-hueso sm:text-[3.2rem]">
                Un repertorio <span className="text-oro">de otro nivel</span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-[1.02rem] leading-relaxed text-hueso-tenue">
                Clásicos del vallenato, románticos, fiesta y parranda,
                organizados por cada momento de tu evento. Una banda
                profesional de 6 a 9 músicos, con un repertorio que se adapta
                a tu medida — no al revés.
              </p>
            </Revelar>
          </div>
        </section>

        {/* LISTADO INTERACTIVO */}
        <section className="mx-auto max-w-4xl px-6 pb-24 pt-4">
          <ListaRepertorio grupos={grupos} total={total} />
        </section>

        {/* CTA */}
        <section className="border-t border-[color:var(--linea)]">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <Revelar>
              <h2 className="font-display text-[1.8rem] font-semibold text-hueso sm:text-[2.2rem]">
                ¿Tienes una canción que no puede faltar?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-[1rem] leading-relaxed text-hueso-tenue">
                Cuéntame las que sí o sí quieres en tu evento y armamos juntos
                el repertorio perfecto. Respuesta personal por WhatsApp.
              </p>
              <div className="mt-9 flex flex-col items-center gap-4">
                <BotonWhatsapp
                  mensaje="¡Hola Jesús! Vi tu repertorio y quiero armar el de mi evento. ¿Podemos hablar?"
                  evento="repertorio_cta_whatsapp"
                  variante="whatsapp"
                  tamano="lg"
                >
                  Armar mi repertorio por WhatsApp
                </BotonWhatsapp>
                <Link
                  href="/contrataciones"
                  className="text-[0.9rem] font-semibold tracking-tight text-hueso-tenue underline-offset-4 transition-colors duration-200 hover:text-oro hover:underline"
                >
                  Ver formatos de show y contratación
                </Link>
              </div>
            </Revelar>
          </div>
        </section>
      </main>
    </>
  );
}
