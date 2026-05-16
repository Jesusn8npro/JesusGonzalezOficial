'use client';

import React, { useRef, useState, useTransition } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import type { Resultado } from '../../../app/admin/_acciones';

/**
 * Envoltura cliente para formularios con Server Actions. Ejecuta la acción,
 * muestra feedback (éxito/error) y opcionalmente resetea el formulario.
 */
export default function FormularioAccion({
  accion,
  children,
  className,
  resetearAlExito = false,
  alExito,
}: {
  accion: (fd: FormData) => Promise<Resultado>;
  children: React.ReactNode;
  className?: string;
  resetearAlExito?: boolean;
  alExito?: () => void;
}) {
  const ref = useRef<HTMLFormElement>(null);
  const [pendiente, startTransition] = useTransition();
  const [aviso, setAviso] = useState<Resultado | null>(null);

  function enviar(fd: FormData) {
    setAviso(null);
    startTransition(async () => {
      const r = await accion(fd);
      setAviso(r);
      if (r.ok) {
        if (resetearAlExito) ref.current?.reset();
        alExito?.();
        setTimeout(() => setAviso(null), 4000);
      }
    });
  }

  return (
    <form
      ref={ref}
      action={enviar}
      className={className}
      data-pendiente={pendiente ? 'true' : undefined}
    >
      {children}
      {aviso && (
        <p
          className={`mt-3 flex items-center gap-2 text-sm ${
            aviso.ok ? 'text-[color:var(--color-whatsapp)]' : 'text-[color:var(--color-brasa)]'
          }`}
          role="status"
        >
          {aviso.ok ? <CheckCircle2 size={15} /> : <AlertCircle size={15} />}
          {aviso.ok ? aviso.mensaje ?? 'Listo.' : aviso.error}
        </p>
      )}
    </form>
  );
}
