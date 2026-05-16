import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Articulo } from '../../contenido/blog/tipos';
import { tiempoLectura } from '../../contenido/blog/tipos';
import { fechaLarga } from './formato';

interface Props {
  articulo: Articulo;
  prioridad?: boolean;
}

/** Tarjeta de artículo para el feed del listado. */
const TarjetaArticulo: React.FC<Props> = ({ articulo: a, prioridad = false }) => {
  const min = tiempoLectura(a.cuerpo);
  return (
    <article className="group overflow-hidden rounded-[var(--radius-grande)] border border-[color:var(--linea)] bg-tinta-2 transition-colors duration-300 hover:border-[color:var(--linea-fuerte)]">
      <Link href={`/blog/${a.slug}`} className="block">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={a.portada}
            alt={a.portadaAlt}
            fill
            priority={prioridad}
            loading={prioridad ? undefined : 'lazy'}
            sizes="(max-width: 768px) 100vw, (max-width: 1100px) 60vw, 640px"
            className="object-cover transition-transform duration-700 ease-[var(--ease-salida)] group-hover:scale-[1.04]"
          />
          <span className="absolute left-4 top-4 rounded-[var(--radius-sello)] bg-tinta/80 px-3 py-1 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-oro backdrop-blur">
            {a.categoria}
          </span>
        </div>
        <div className="p-6 md:p-7">
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-[0.78rem] text-hueso-tenue">
            <time dateTime={a.fecha}>{fechaLarga(a.fecha)}</time>
            <span aria-hidden="true">·</span>
            <span>{min} min de lectura</span>
          </div>
          <h2 className="mb-3 font-display text-[1.45rem] leading-tight text-hueso transition-colors duration-300 group-hover:text-oro md:text-[1.7rem]">
            {a.h1}
          </h2>
          <p className="mb-5 font-sans text-[0.98rem] leading-relaxed text-hueso-tenue">
            {a.resumen}
          </p>
          <span className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-oro">
            Leer artículo
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </Link>
    </article>
  );
};

export default TarjetaArticulo;
