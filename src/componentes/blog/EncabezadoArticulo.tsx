import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Articulo } from '../../contenido/blog/tipos';
import { tiempoLectura } from '../../contenido/blog/tipos';
import { fechaLarga } from './formato';

interface Props {
  articulo: Articulo;
}

/** Cabecera del artículo: migas, categoría, H1, meta y portada (hero). */
const EncabezadoArticulo: React.FC<Props> = ({ articulo: a }) => {
  const min = tiempoLectura(a.cuerpo);
  return (
    <header className="mb-10">
      <nav
        aria-label="Ruta de navegación"
        className="mb-6 font-sans text-[0.78rem] text-hueso-tenue"
      >
        <Link href="/" className="transition-colors hover:text-oro">
          Inicio
        </Link>
        <span className="mx-2" aria-hidden="true">
          /
        </span>
        <Link href="/blog" className="transition-colors hover:text-oro">
          Blog
        </Link>
        <span className="mx-2" aria-hidden="true">
          /
        </span>
        <span className="text-hueso">{a.categoria}</span>
      </nav>

      <p className="kicker mb-4">{a.categoria}</p>
      <h1 className="mb-5 font-display text-[2.1rem] leading-[1.08] text-hueso md:text-[3rem]">
        {a.h1}
      </h1>
      <p className="mb-6 max-w-2xl font-sans text-[1.1rem] leading-relaxed text-hueso-tenue">
        {a.resumen}
      </p>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-[color:var(--linea)] py-4 font-sans text-sm text-hueso-tenue">
        <span className="font-semibold text-hueso">Por Jesús González</span>
        <span aria-hidden="true">·</span>
        <time dateTime={a.fecha}>{fechaLarga(a.fecha)}</time>
        <span aria-hidden="true">·</span>
        <span>{min} min de lectura</span>
      </div>

      <figure className="mt-8">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-grande)] border border-[color:var(--linea)]">
          <Image
            src={a.portada}
            alt={a.portadaAlt}
            fill
            priority
            sizes="(max-width: 1100px) 100vw, 860px"
            className="object-cover"
          />
        </div>
      </figure>
    </header>
  );
};

export default EncabezadoArticulo;
