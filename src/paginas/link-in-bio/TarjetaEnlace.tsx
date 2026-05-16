'use client';

import React from 'react';
import { ArrowUpRight, type LucideIcon } from 'lucide-react';

export interface EnlaceBio {
    titulo: string;
    sub: string;
    href?: string;
    Icono: LucideIcon;
    destacado?: boolean;
    proximamente?: boolean;
}

interface Props {
    enlace: EnlaceBio;
    retardo?: number;
}

/**
 * Tarjeta de enlace estilo "link hub" premium: hairline dorado,
 * icono en sello, hover sobrio. Soporta estado "próximamente"
 * (sin enlace) y "destacado" (acento dorado).
 */
const TarjetaEnlace: React.FC<Props> = ({ enlace, retardo = 0 }) => {
    const { titulo, sub, href, Icono, destacado, proximamente } = enlace;

    const contenido = (
        <>
            <span
                className={`flex h-12 w-12 flex-none items-center justify-center rounded-[var(--radius-sello)] border transition-colors duration-300 ${
                    destacado
                        ? 'border-[color:var(--color-oro)]/40 bg-[color:var(--color-oro)]/12 text-oro'
                        : 'border-[color:var(--linea)] bg-[color:var(--color-tinta)]/60 text-oro group-hover:border-[color:var(--color-oro)]/40'
                }`}
            >
                <Icono size={20} strokeWidth={1.75} />
            </span>
            <span className="flex min-w-0 flex-1 flex-col">
                <span className="truncate font-display text-[1.02rem] font-semibold text-hueso">
                    {titulo}
                </span>
                <span className="mt-1 truncate text-[0.82rem] text-hueso-tenue">{sub}</span>
            </span>
            {proximamente ? (
                <span className="flex-none rounded-full border border-[color:var(--linea-fuerte)] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-oro">
                    Pronto
                </span>
            ) : (
                <ArrowUpRight
                    size={20}
                    className="flex-none text-hueso-tenue transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-oro"
                />
            )}
        </>
    );

    const claseBase = `group flex items-center gap-4 rounded-[var(--radius-tarjeta)] border bg-tinta-2 px-5 py-4 transition-[transform,border-color,background-color] duration-300 ease-[var(--ease-salida)] ${
        destacado
            ? 'border-[color:var(--color-oro)]/30'
            : 'border-[color:var(--linea)]'
    }`;

    if (proximamente || !href) {
        return (
            <div
                className={`${claseBase} cursor-default opacity-90`}
                style={{ animationDelay: `${retardo}ms` }}
            >
                {contenido}
            </div>
        );
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${claseBase} hover:-translate-y-0.5 hover:border-[color:var(--color-oro)]/45 hover:bg-tinta-3`}
            style={{ animationDelay: `${retardo}ms` }}
        >
            {contenido}
        </a>
    );
};

export default TarjetaEnlace;
