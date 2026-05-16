'use client';

import React, { useEffect, useState } from 'react';
import type { ItemTOC } from '../../contenido/blog/tipos';

interface Props {
  items: ItemTOC[];
}

/**
 * Tabla de contenido sticky con scroll-spy: resalta la sección visible
 * usando IntersectionObserver (sin listeners de scroll manuales).
 */
const TablaContenido: React.FC<Props> = ({ items }) => {
  const [activo, setActivo] = useState<string>(items[0]?.id ?? '');

  useEffect(() => {
    if (!items.length) return;
    const visibles = new Set<string>();

    const obs = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) visibles.add(e.target.id);
          else visibles.delete(e.target.id);
        }
        // El primero del TOC que esté visible es el activo.
        const primero = items.find((i) => visibles.has(i.id));
        if (primero) setActivo(primero.id);
      },
      { rootMargin: '-96px 0px -65% 0px', threshold: 0 },
    );

    for (const i of items) {
      const el = document.getElementById(i.id);
      if (el) obs.observe(el);
    }
    return () => obs.disconnect();
  }, [items]);

  const irA = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setActivo(id);
    history.replaceState(null, '', `#${id}`);
  };

  if (!items.length) return null;

  return (
    <nav aria-label="Tabla de contenido" className="text-sm">
      <p className="kicker mb-4">En este artículo</p>
      <ul className="space-y-1 border-l border-[color:var(--linea)]">
        {items.map((i) => {
          const act = activo === i.id;
          return (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                onClick={(e) => irA(e, i.id)}
                aria-current={act ? 'true' : undefined}
                className={`-ml-px block border-l-2 py-1.5 font-sans leading-snug transition-colors duration-200 ${
                  i.nivel === 3 ? 'pl-7' : 'pl-4'
                } ${
                  act
                    ? 'border-oro text-oro'
                    : 'border-transparent text-hueso-tenue hover:text-hueso'
                }`}
              >
                {i.texto}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TablaContenido;
