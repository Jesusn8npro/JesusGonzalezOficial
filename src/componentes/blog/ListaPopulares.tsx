import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Articulo } from '../../contenido/blog/tipos';

interface Props {
  articulos: Articulo[];
  titulo?: string;
}

/** Lista compacta de artículos (populares / relacionados) para la barra. */
const ListaPopulares: React.FC<Props> = ({
  articulos,
  titulo = 'Populares',
}) => {
  if (!articulos.length) return null;
  return (
    <div className="rounded-[var(--radius-grande)] border border-[color:var(--linea)] bg-tinta-2 p-6">
      <p className="kicker mb-4">{titulo}</p>
      <ul className="space-y-4">
        {articulos.map((a) => (
          <li key={a.slug}>
            <Link
              href={`/blog/${a.slug}`}
              className="group flex items-start gap-3"
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[var(--radius-sello)] border border-[color:var(--linea)]">
                <Image
                  src={a.portada}
                  alt={a.portadaAlt}
                  fill
                  loading="lazy"
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <span className="font-sans text-sm leading-snug text-hueso-tenue transition-colors duration-200 group-hover:text-oro">
                {a.h1}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaPopulares;
