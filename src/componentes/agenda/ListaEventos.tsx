'use client';

import React from 'react';
import Revelar from '../ui/Revelar';
import BotonWhatsapp from '../ui/BotonWhatsapp';
import type { Evento } from '../../contenido/agenda';

interface Props {
  eventos: Evento[];
}

/** Parte una fecha ISO (YYYY-MM-DD) sin desfases de zona horaria. */
function partesFecha(iso: string) {
  const [a, m, d] = iso.split('-').map(Number);
  const fecha = new Date(a, (m ?? 1) - 1, d ?? 1);
  return {
    dia: fecha.toLocaleDateString('es-CO', { day: '2-digit' }),
    mes: fecha
      .toLocaleDateString('es-CO', { month: 'short' })
      .replace('.', '')
      .toUpperCase(),
    completa: fecha.toLocaleDateString('es-CO', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
  };
}

const ListaEventos: React.FC<Props> = ({ eventos }) => (
  <ul className="flex flex-col gap-4">
    {eventos.map((ev, i) => {
      const f = partesFecha(ev.fecha);
      const confirmado = ev.estado === 'confirmado';
      const mensaje =
        `¡Hola Jesús! Vi en tu agenda "${ev.titulo}" en ${ev.ciudad} ` +
        `(${f.completa}). Quiero contratarte para mi propio evento. ` +
        `¿Me confirmas disponibilidad?`;

      return (
        <Revelar as="li" key={ev.id} retardo={i === 0 ? 0 : 0.05}>
          <article className="group grid grid-cols-[auto_minmax(0,1fr)] items-center gap-5 rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-[color:var(--color-tinta-2)] p-5 shadow-[var(--shadow-suave)] transition-colors duration-300 hover:border-[color:var(--linea-fuerte)] sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:p-6">
            {/* Sello de fecha */}
            <div className="flex w-[4.5rem] flex-col items-center rounded-[var(--radius-sello)] border border-[color:var(--linea-fuerte)] bg-[color:var(--color-tinta-3)] px-3 py-3 text-center">
              <span className="font-display text-[1.85rem] leading-none text-oro">
                {f.dia}
              </span>
              <span className="mt-1 text-[0.66rem] font-semibold tracking-[0.2em] text-hueso-tenue">
                {f.mes}
              </span>
            </div>

            {/* Detalle */}
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2.5">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] ${
                    confirmado
                      ? 'border-[color:var(--linea-fuerte)] text-oro'
                      : 'border-[color:var(--linea)] text-hueso-tenue'
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      confirmado ? 'bg-oro' : 'bg-hueso-tenue'
                    }`}
                    aria-hidden="true"
                  />
                  {confirmado ? 'Confirmado' : 'Fecha tentativa'}
                </span>
              </div>
              <h2 className="mt-2 truncate font-display text-[1.3rem] text-hueso sm:text-[1.5rem]">
                {ev.titulo}
              </h2>
              <p className="mt-1 text-[0.95rem] text-hueso-tenue">
                {ev.ciudad} · <span className="capitalize">{f.completa}</span>
              </p>
              {ev.notas && (
                <p className="mt-2 text-[0.9rem] leading-relaxed text-hueso-tenue/90">
                  {ev.notas}
                </p>
              )}
            </div>

            {/* CTA por evento */}
            <div className="col-span-2 sm:col-span-1 sm:justify-self-end">
              <BotonWhatsapp
                mensaje={mensaje}
                evento="agenda_evento_whatsapp"
                variante="contorno"
                className="w-full sm:w-auto"
              >
                Quiero una fecha así
              </BotonWhatsapp>
            </div>
          </article>
        </Revelar>
      );
    })}
  </ul>
);

export default ListaEventos;
