import React from 'react';
import Link from 'next/link';
import type { Categoria } from '../../contenido/blog/indice';

interface Props {
  categorias: Categoria[];
  total: number;
}

/**
 * Barra lateral izquierda: buscador (presentacional) + temas/categorías.
 * El input es estático a propósito (sin backend de búsqueda); las
 * categorías navegan al feed completo.
 */
const NavCategorias: React.FC<Props> = ({ categorias, total }) => (
  <div className="space-y-8">
    <div>
      <label htmlFor="blog-buscar" className="kicker mb-3 block">
        Buscar en el blog
      </label>
      <div className="flex items-center gap-2 rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-tinta-2 px-4 py-3">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
          className="shrink-0 text-hueso-tenue"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <input
          id="blog-buscar"
          type="search"
          name="q"
          placeholder="Bodas, parrandas, eventos…"
          autoComplete="off"
          className="w-full bg-transparent font-sans text-sm text-hueso placeholder:text-hueso-tenue focus:outline-none"
        />
      </div>
    </div>

    <nav aria-label="Temas del blog">
      <p className="kicker mb-4">Temas</p>
      <ul className="space-y-1">
        <li>
          <Link
            href="/blog"
            className="flex items-center justify-between rounded-[var(--radius-sello)] px-3 py-2 font-sans text-sm text-oro transition-colors hover:bg-tinta-2"
          >
            <span>Todos los artículos</span>
            <span className="text-xs text-hueso-tenue">{total}</span>
          </Link>
        </li>
        {categorias.map((c) => (
          <li key={c.nombre}>
            <Link
              href="/blog"
              className="flex items-center justify-between rounded-[var(--radius-sello)] px-3 py-2 font-sans text-sm text-hueso-tenue transition-colors hover:bg-tinta-2 hover:text-hueso"
            >
              <span>{c.nombre}</span>
              <span className="text-xs">{c.cantidad}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default NavCategorias;
