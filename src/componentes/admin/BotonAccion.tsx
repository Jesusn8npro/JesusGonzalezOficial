'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';

type Variante = 'oro' | 'plano' | 'peligro';

const ESTILOS: Record<Variante, string> = {
  oro: 'bg-oro text-tinta hover:bg-oro-claro',
  plano:
    'border border-[color:var(--linea-fuerte)] text-hueso hover:border-oro hover:text-oro',
  peligro:
    'border border-[color:var(--color-brasa)] text-[color:var(--color-brasa)] hover:bg-[color:var(--color-brasa)] hover:text-hueso',
};

/**
 * Botón de submit para formularios con Server Actions. Muestra spinner
 * mientras la acción está pendiente (useFormStatus).
 */
export default function BotonAccion({
  children,
  variante = 'oro',
  className = '',
  confirmar,
  ...props
}: {
  children: React.ReactNode;
  variante?: Variante;
  className?: string;
  confirmar?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      onClick={
        confirmar
          ? (e) => {
              if (!window.confirm(confirmar)) e.preventDefault();
            }
          : undefined
      }
      className={`inline-flex items-center justify-center gap-2 rounded-[var(--radius-sello)] px-4 py-2 text-sm font-semibold transition-[transform,background-color,border-color,color] duration-200 active:scale-[0.98] disabled:opacity-60 ${ESTILOS[variante]} ${className}`}
      {...props}
    >
      {pending && <Loader2 size={15} className="animate-spin" />}
      {children}
    </button>
  );
}
