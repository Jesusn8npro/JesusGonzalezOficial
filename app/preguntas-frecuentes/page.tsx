import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '../../src/componentes/seo/JsonLd';
import { breadcrumbSchema } from '../../src/componentes/seo/esquemas';
import { faqPageSchema } from '../../src/componentes/repertorio/esquemasFaq';
import Revelar from '../../src/componentes/ui/Revelar';
import BotonWhatsapp from '../../src/componentes/ui/BotonWhatsapp';
import Acordeon from '../../src/componentes/repertorio/Acordeon';
import { PREGUNTAS } from '../../src/contenido/faq';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | Contratar a Jesús González',
  description:
    'Resuelve tus dudas: precios, ciudades de cobertura, qué incluye un show, banda de 6 a 9 músicos, sonido, anticipo y contrato. Contrata vallenato profesional sin enredos.',
  alternates: { canonical: '/preguntas-frecuentes' },
  openGraph: {
    title: 'Preguntas Frecuentes | Jesús González Acordeonista',
    description:
      'Todo lo que necesitas saber para contratar un show de vallenato en vivo en Colombia.',
    url: '/preguntas-frecuentes',
    images: ['/Imagenes/Jesus Gonzalez en concierto.jpg'],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd id="ld-faq" data={faqPageSchema(PREGUNTAS)} />
      <JsonLd
        id="ld-faq-breadcrumb"
        data={breadcrumbSchema([
          { nombre: 'Inicio', url: '/' },
          { nombre: 'Preguntas frecuentes', url: '/preguntas-frecuentes' },
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
              <p className="kicker">Resuelve tus dudas</p>
              <h1 className="mt-5 font-display text-[2.4rem] font-semibold leading-[1.05] text-hueso sm:text-[3.2rem]">
                Preguntas <span className="text-oro">frecuentes</span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-[1.02rem] leading-relaxed text-hueso-tenue">
                Lo esencial para contratar un show de vallenato profesional:
                claro, sin letra pequeña. Si algo no está aquí, te lo respondo
                personalmente por WhatsApp.
              </p>
            </Revelar>
          </div>
        </section>

        {/* ACORDEÓN */}
        <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <Revelar>
            <Acordeon items={PREGUNTAS} />
          </Revelar>
        </section>

        {/* CTA */}
        <section className="border-t border-[color:var(--linea)]">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <Revelar>
              <h2 className="font-display text-[1.8rem] font-semibold text-hueso sm:text-[2.2rem]">
                ¿Te quedó una duda?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-[1rem] leading-relaxed text-hueso-tenue">
                Escríbeme con la fecha y la ciudad de tu evento y te paso una
                propuesta clara el mismo día. Sin compromiso.
              </p>
              <div className="mt-9 flex flex-col items-center gap-4">
                <BotonWhatsapp
                  mensaje="¡Hola Jesús! Tengo una duda sobre contratar un show para mi evento. ¿Me ayudas?"
                  evento="faq_cta_whatsapp"
                  variante="whatsapp"
                  tamano="lg"
                >
                  Preguntar por WhatsApp
                </BotonWhatsapp>
                <Link
                  href="/contacto"
                  className="text-[0.9rem] font-semibold tracking-tight text-hueso-tenue underline-offset-4 transition-colors duration-200 hover:text-oro hover:underline"
                >
                  Solicitar cotización con el formulario
                </Link>
              </div>
            </Revelar>
          </div>
        </section>
      </main>
    </>
  );
}
