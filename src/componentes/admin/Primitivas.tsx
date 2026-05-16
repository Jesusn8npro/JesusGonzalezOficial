import React from 'react';

/* Primitivas visuales del panel admin. Solo tokens del sistema de diseño
   (theme-aware). Server-safe: sin estado ni handlers. */

export function EncabezadoAdmin({
  titulo,
  descripcion,
  children,
}: {
  titulo: string;
  descripcion?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="font-display text-3xl font-semibold text-hueso">
          {titulo}
        </h1>
        {descripcion && (
          <p className="mt-1.5 text-sm text-hueso-tenue">{descripcion}</p>
        )}
      </div>
      {children && <div className="flex shrink-0 gap-3">{children}</div>}
    </div>
  );
}

export function Tarjeta({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-[color:var(--color-tinta-2)] ${className}`}
    >
      {children}
    </div>
  );
}

const TONOS: Record<string, string> = {
  oro: 'border-[color:var(--linea-fuerte)] text-oro',
  verde: 'border-[color:var(--color-whatsapp)] text-[color:var(--color-whatsapp)]',
  brasa: 'border-[color:var(--color-brasa)] text-[color:var(--color-brasa)]',
  tenue: 'border-[color:var(--linea)] text-hueso-tenue',
};

export function Insignia({
  children,
  tono = 'oro',
}: {
  children: React.ReactNode;
  tono?: keyof typeof TONOS;
}) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs ${TONOS[tono]}`}
    >
      {children}
    </span>
  );
}

export function VacioTabla({
  colSpan,
  children,
}: {
  colSpan: number;
  children: React.ReactNode;
}) {
  return (
    <tr>
      <td
        colSpan={colSpan}
        className="px-4 py-12 text-center text-sm text-hueso-tenue"
      >
        {children}
      </td>
    </tr>
  );
}

export function ErrorTablas({ detalle }: { detalle: string }) {
  return (
    <Tarjeta className="p-8">
      <h1 className="font-display text-2xl font-semibold text-hueso">
        No se pudieron cargar los datos
      </h1>
      <p className="mt-3 text-hueso-tenue">
        Verifica que las tablas existan en Supabase y que la sesión siga
        activa. Detalle: {detalle}
      </p>
    </Tarjeta>
  );
}

/* Clases compartidas de formulario (inputs/selects/textarea). */
export const claseCampo =
  'w-full rounded-[var(--radius-sello)] border border-[color:var(--linea-fuerte)] bg-[color:var(--color-tinta-3)] px-3 py-2 text-sm text-hueso outline-none transition-colors focus:border-oro';

export const claseEtiqueta =
  'mb-1.5 block text-xs font-semibold uppercase tracking-wide text-hueso-tenue';
