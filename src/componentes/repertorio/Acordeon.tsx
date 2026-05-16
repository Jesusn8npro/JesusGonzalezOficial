'use client';

import React, { useState } from 'react';
import type { PreguntaRespuesta } from './esquemasFaq';

interface Props {
  items: PreguntaRespuesta[];
}

/**
 * Acordeón accesible nativo (<details>/<summary>) con un único item abierto
 * a la vez. Sin librerías: funciona aún sin JS y respeta el teclado.
 */
const Acordeon: React.FC<Props> = ({ items }) => {
  const [abierto, setAbierto] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const open = abierto === i;
        return (
          <details
            key={item.pregunta}
            open={open}
            onToggle={(e) => {
              // Mantén solo uno abierto: sincroniza el estado con el DOM.
              if ((e.target as HTMLDetailsElement).open) setAbierto(i);
              else if (open) setAbierto(null);
            }}
            className="group rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-[color:var(--color-tinta-2)] transition-colors duration-200 open:border-[color:var(--linea-fuerte)]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
              <span className="font-display text-[1.05rem] font-semibold text-hueso sm:text-[1.15rem]">
                {item.pregunta}
              </span>
              <span
                aria-hidden="true"
                className="shrink-0 text-oro transition-transform duration-300 ease-[var(--ease-salida)] group-open:rotate-45"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 5v14M5 12h14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </summary>
            <p className="px-6 pb-6 text-[0.96rem] leading-relaxed text-hueso-tenue">
              {item.respuesta}
            </p>
          </details>
        );
      })}
    </div>
  );
};

export default Acordeon;
