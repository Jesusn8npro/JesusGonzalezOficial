import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Revelar from '../ui/Revelar';
import BotonWhatsapp from '../ui/BotonWhatsapp';
import CotizadorRapido from '../ui/CotizadorRapido';
import type { DatosPress } from './datosPress';

interface Props {
  datos: DatosPress;
}

const MSJ_PRESS_KIT =
  '¡Hola Jesús! Vi el Press Kit / EPK en tu sitio y quiero el material de prensa completo (fotos en alta y ficha técnica) para una propuesta. ¿Me lo compartes, por favor?';

const MSJ_CIERRE =
  '¡Hola Jesús! Vi tu EPK y quiero avanzar con una contratación. ¿Hablamos los detalles?';

/**
 * Cierre del EPK: enlaces internos a /repertorio y /contrataciones,
 * cotizador rápido y CTAs de conversión + descarga de press kit.
 * Server component que compone los widgets cliente compartidos.
 */
const CierrePress: React.FC<Props> = ({ datos }) => (
  <section
    id="cierre"
    className="grano relative isolate overflow-hidden bg-tinta px-5 py-20 md:px-10 md:py-28"
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-40 bottom-0 h-[560px] w-[560px] rounded-full opacity-50 blur-[120px]"
      style={{
        background:
          'radial-gradient(circle, rgba(201,168,76,0.2), transparent 65%)',
      }}
    />

    <div className="relative mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:gap-16">
      <div>
        <Revelar as="p" className="kicker mb-4">
          Siguiente paso
        </Revelar>
        <Revelar
          as="h2"
          retardo={0.05}
          className="max-w-xl font-display text-3xl leading-tight text-hueso sm:text-4xl lg:text-[2.9rem]"
        >
          Lleva este nivel a tu evento
        </Revelar>
        <Revelar
          as="p"
          retardo={0.1}
          className="mt-6 max-w-lg text-lg leading-relaxed text-hueso-tenue"
        >
          Coordina directamente con Jesús González, sin intermediarios.
          Explora el repertorio, los formatos de show o pide el press kit
          completo.
        </Revelar>

        <div className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-[color:var(--linea)] sm:grid-cols-2">
          {datos.enlaces.map((e, i) => (
            <Revelar as="div" key={e.href} retardo={0.06 * i}>
              <Link
                href={e.href}
                className="group flex h-full flex-col justify-between gap-6 bg-tinta-2 p-6 transition-colors duration-300 hover:bg-tinta-3"
              >
                <span>
                  <span className="block font-display text-xl text-hueso">
                    {e.etiqueta}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-hueso-tenue">
                    {e.descripcion}
                  </span>
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-oro">
                  Ver
                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </Revelar>
          ))}
        </div>

        <Revelar
          retardo={0.16}
          className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <BotonWhatsapp
            mensaje={MSJ_CIERRE}
            evento="Press_Cierre_WhatsApp"
            variante="whatsapp"
            tamano="lg"
          >
            Hablar por WhatsApp
          </BotonWhatsapp>
          <BotonWhatsapp
            mensaje={MSJ_PRESS_KIT}
            evento="Press_Descargar_Kit"
            variante="contorno"
            tamano="lg"
          >
            Pedir press kit completo
          </BotonWhatsapp>
        </Revelar>
      </div>

      <Revelar variante="zoom" retardo={0.1}>
        <CotizadorRapido
          evento="Press_Cotizador"
          titulo="Cotiza tu evento en 30 segundos"
        />
      </Revelar>
    </div>
  </section>
);

export default CierrePress;
