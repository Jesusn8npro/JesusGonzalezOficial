'use client';

import React, { useState, useTransition } from 'react';
import { RefreshCw, CheckCircle2, AlertCircle } from 'lucide-react';
import {
  sincronizarArticulos,
  type Resultado,
} from '../../../app/admin/_acciones';

/**
 * Botón prominente que ejecuta la sincronización de los artículos estáticos
 * (src/contenido/blog) hacia Supabase. Idempotente (upsert por slug).
 */
export default function BotonSincronizar() {
  const [pendiente, startTransition] = useTransition();
  const [aviso, setAviso] = useState<Resultado | null>(null);

  function sincronizar() {
    setAviso(null);
    startTransition(async () => {
      setAviso(await sincronizarArticulos());
    });
  }

  return (
    <div className="rounded-[var(--radius-tarjeta)] border border-[color:var(--linea-fuerte)] bg-[color:var(--color-tinta-2)] p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-lg font-semibold text-hueso">
            Sincronizar artículos estáticos
          </h2>
          <p className="mt-1 text-sm text-hueso-tenue">
            Importa los artículos del código a Supabase. Es idempotente:
            actualiza los existentes por <code className="text-oro">slug</code>{' '}
            y agrega los nuevos.
          </p>
        </div>
        <button
          type="button"
          onClick={sincronizar}
          disabled={pendiente}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-[var(--radius-sello)] bg-oro px-5 py-2.5 text-sm font-semibold text-tinta transition-[transform,background-color] duration-200 hover:bg-oro-claro active:scale-[0.98] disabled:opacity-60"
        >
          <RefreshCw
            size={16}
            className={pendiente ? 'animate-spin' : undefined}
          />
          {pendiente ? 'Sincronizando…' : 'Sincronizar → Supabase'}
        </button>
      </div>
      {aviso && (
        <p
          className={`mt-4 flex items-center gap-2 text-sm ${
            aviso.ok
              ? 'text-[color:var(--color-whatsapp)]'
              : 'text-[color:var(--color-brasa)]'
          }`}
          role="status"
        >
          {aviso.ok ? (
            <CheckCircle2 size={15} />
          ) : (
            <AlertCircle size={15} />
          )}
          {aviso.ok ? aviso.mensaje : aviso.error}
        </p>
      )}
    </div>
  );
}
