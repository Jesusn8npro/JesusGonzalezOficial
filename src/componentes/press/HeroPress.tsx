import React from 'react';
import Image from 'next/image';
import Revelar from '../ui/Revelar';
import type { DatosPress } from './datosPress';

interface Props {
  datos: DatosPress;
}

/**
 * Hero del EPK: nombre grande, rol de "otro nivel", foto hi-res con
 * prioridad de carga y métricas de credibilidad. Server component.
 */
const HeroPress: React.FC<Props> = ({ datos }) => (
  <section className="grano relative isolate overflow-hidden bg-tinta px-5 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-40 top-0 h-[620px] w-[620px] rounded-full opacity-60 blur-[120px]"
      style={{
        background:
          'radial-gradient(circle, rgba(201,168,76,0.22), transparent 65%)',
      }}
    />

    <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
      <div className="order-2 lg:order-1">
        <Revelar as="p" className="kicker mb-6">
          Press Kit · EPK oficial
        </Revelar>

        <Revelar as="h1" retardo={0.05}>
          <span className="block font-display text-[2.7rem] leading-[1.02] text-hueso sm:text-6xl lg:text-[4.6rem]">
            {datos.nombre}
          </span>
          <span className="mt-4 block font-display text-xl text-oro sm:text-2xl lg:text-[1.7rem]">
            {datos.rol}
          </span>
        </Revelar>

        <Revelar
          as="p"
          retardo={0.12}
          className="mt-7 max-w-xl text-lg leading-relaxed text-hueso-tenue"
        >
          {datos.bioCorta}
        </Revelar>

        <Revelar
          as="p"
          retardo={0.16}
          className="mt-5 text-sm uppercase tracking-[0.18em] text-hueso-tenue"
        >
          {datos.ubicacion}
        </Revelar>

        <Revelar
          retardo={0.24}
          className="mt-12 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-[color:var(--linea)] sm:grid-cols-4"
        >
          {datos.metricas.map((m) => (
            <div key={m.label} className="bg-tinta-2 px-4 py-5 text-center">
              <span className="block font-display text-2xl text-oro">
                {m.valor}
              </span>
              <div className="mt-1 text-[0.7rem] uppercase tracking-[0.14em] text-hueso-tenue">
                {m.label}
              </div>
            </div>
          ))}
        </Revelar>
      </div>

      <div className="order-1 lg:order-2">
        <Revelar variante="zoom" className="mx-auto max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-[var(--radius-grande)] border border-[color:var(--linea-fuerte)]">
            <Image
              src={datos.fotoHero.src}
              alt={datos.fotoHero.alt}
              width={760}
              height={900}
              priority
              sizes="(min-width: 1024px) 46vw, (min-width: 640px) 28rem, 100vw"
              className="block h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, transparent 45%, rgba(14,11,8,0.82) 100%)',
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-display text-xl text-hueso">{datos.nombre}</p>
              <p className="mt-1 text-sm text-oro-claro">
                Maestro del acordeón vallenato
              </p>
            </div>
          </div>
        </Revelar>
      </div>
    </div>
  </section>
);

export default HeroPress;
