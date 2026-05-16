import React from 'react';
import { construirTOC, type Bloque } from '../../contenido/blog/tipos';
import TablaContenido from './TablaContenido';

interface Props {
  cuerpo: Bloque[];
}

/**
 * Envuelve la TOC con su comportamiento responsive:
 *  - Escritorio (lg+): columna sticky en la barra lateral izquierda.
 *  - Móvil/tablet: <details> colapsable encima del cuerpo (sin JS extra,
 *    no se ve roto ni apretado).
 */
const TocResponsive: React.FC<Props> = ({ cuerpo }) => {
  const items = construirTOC(cuerpo);
  if (!items.length) return null;

  return (
    <>
      {/* Móvil / tablet: colapsable */}
      <details className="group mb-8 rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-tinta-2 lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 font-sans text-sm font-semibold text-hueso">
          <span>Contenido del artículo</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
            className="shrink-0 text-oro transition-transform duration-300 group-open:rotate-180"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </summary>
        <div className="border-t border-[color:var(--linea)] px-5 py-4">
          <TablaContenido items={items} />
        </div>
      </details>

      {/* Escritorio: sticky */}
      <div className="hidden lg:block lg:sticky lg:top-28">
        <TablaContenido items={items} />
      </div>
    </>
  );
};

export default TocResponsive;
