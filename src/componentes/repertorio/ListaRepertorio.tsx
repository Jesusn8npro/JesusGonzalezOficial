'use client';

import React, { useMemo, useState } from 'react';
import Revelar from '../ui/Revelar';
import type { GrupoRepertorio, MomentoId } from '../../contenido/repertorio';

interface Props {
  grupos: GrupoRepertorio[];
  total: number;
}

const TODOS = 'todos' as const;
type Filtro = typeof TODOS | MomentoId;

/** Quita tildes para que la búsqueda sea tolerante (boda = bodá). */
const ACENTOS: Record<string, string> = {
  á: 'a',
  é: 'e',
  í: 'i',
  ó: 'o',
  ú: 'u',
  ü: 'u',
  ñ: 'n',
};
const normalizar = (s: string) =>
  s.toLowerCase().replace(/[áéíóúüñ]/g, (m) => ACENTOS[m] ?? m);

const ListaRepertorio: React.FC<Props> = ({ grupos, total }) => {
  const [filtro, setFiltro] = useState<Filtro>(TODOS);
  const [busqueda, setBusqueda] = useState('');

  const q = normalizar(busqueda.trim());

  const visibles = useMemo(() => {
    return grupos
      .filter((g) => filtro === TODOS || g.momento.id === filtro)
      .map((g) => ({
        ...g,
        canciones: q
          ? g.canciones.filter(
              (c) =>
                normalizar(c.titulo).includes(q) ||
                normalizar(c.artista).includes(q),
            )
          : g.canciones,
      }))
      .filter((g) => g.canciones.length > 0);
  }, [grupos, filtro, q]);

  const totalVisibles = visibles.reduce(
    (acc, g) => acc + g.canciones.length,
    0,
  );

  const chip = (activo: boolean) =>
    `rounded-[var(--radius-sello)] border px-4 py-2 text-[0.82rem] font-semibold tracking-tight transition-colors duration-200 ${
      activo
        ? 'border-oro bg-oro text-tinta'
        : 'border-[color:var(--linea-fuerte)] text-hueso-tenue hover:border-oro hover:text-oro'
    }`;

  return (
    <div>
      {/* Controles: búsqueda + filtros por momento */}
      <div className="sticky top-0 z-10 -mx-6 mb-10 border-b border-[color:var(--linea)] bg-[color:var(--color-tinta)]/85 px-6 py-5 backdrop-blur-md">
        <label htmlFor="buscar-cancion" className="sr-only">
          Buscar canción o artista
        </label>
        <input
          id="buscar-cancion"
          type="search"
          inputMode="search"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Busca una canción o artista (ej. Diomedes, Oye Bonita…)"
          className="mb-4 w-full rounded-[var(--radius-sello)] border border-[color:var(--linea-fuerte)] bg-[color:var(--color-tinta-3)] px-4 py-3 text-[0.95rem] text-hueso placeholder:text-hueso-tenue outline-none transition-colors duration-200 focus:border-oro"
        />
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setFiltro(TODOS)}
            className={chip(filtro === TODOS)}
          >
            Todos
          </button>
          {grupos.map((g) => (
            <button
              key={g.momento.id}
              type="button"
              onClick={() => setFiltro(g.momento.id)}
              className={chip(filtro === g.momento.id)}
            >
              {g.momento.nombre}
            </button>
          ))}
        </div>
        <p className="mt-4 text-[0.8rem] text-hueso-tenue">
          {totalVisibles === total
            ? `${total} canciones en el repertorio`
            : `${totalVisibles} de ${total} canciones`}
        </p>
      </div>

      {/* Listado agrupado por momento */}
      {visibles.length === 0 ? (
        <p className="py-16 text-center text-hueso-tenue">
          No encontré canciones con esa búsqueda. Pídeme cualquier tema por
          WhatsApp: el repertorio se arma a tu medida.
        </p>
      ) : (
        <div className="flex flex-col gap-14">
          {visibles.map((g) => (
            <Revelar key={g.momento.id} as="section">
              <header className="mb-5 border-b border-[color:var(--linea)] pb-4">
                <h2 className="font-display text-[1.5rem] font-semibold text-hueso sm:text-[1.8rem]">
                  {g.momento.nombre}
                </h2>
                <p className="mt-1.5 max-w-2xl text-[0.92rem] leading-relaxed text-hueso-tenue">
                  {g.momento.resumen}
                </p>
              </header>
              <ul className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
                {g.canciones.map((c) => (
                  <li
                    key={`${g.momento.id}-${c.titulo}-${c.artista}`}
                    className="flex items-baseline justify-between gap-4 border-b border-[color:var(--linea)] py-3"
                  >
                    <span className="text-[0.98rem] font-medium text-hueso">
                      {c.titulo}
                    </span>
                    <span className="shrink-0 text-right text-[0.8rem] text-hueso-tenue">
                      {c.artista}
                    </span>
                  </li>
                ))}
              </ul>
            </Revelar>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListaRepertorio;
