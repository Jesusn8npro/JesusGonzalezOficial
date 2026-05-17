'use client';

import React from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Pencil, Trash2 } from 'lucide-react';
import FormularioAccion from './FormularioAccion';
import BotonAccion from './BotonAccion';
import { Insignia, claseCampo } from './Primitivas';
import {
  alternarArticulo,
  actualizarOrdenArticulo,
  eliminarArticulo,
} from '../../../app/admin/_acciones';

export interface Articulo {
  slug: string;
  titulo: string;
  categoria: string | null;
  fecha: string | null;
  publicado: boolean;
  orden: number | null;
}

export default function FilaArticulo({ a }: { a: Articulo }) {
  return (
    <tr className="border-t border-[color:var(--linea)] align-middle">
      <td className="px-4 py-3 text-hueso">
        {a.titulo}
        <span className="mt-0.5 block font-mono text-xs text-hueso-tenue">
          {a.slug}
        </span>
      </td>
      <td className="px-4 py-3">
        {a.categoria ? (
          <Insignia tono="tenue">{a.categoria}</Insignia>
        ) : (
          <span className="text-hueso-tenue">—</span>
        )}
      </td>
      <td className="px-4 py-3 text-hueso-tenue">
        {a.fecha
          ? new Date(a.fecha + 'T00:00:00').toLocaleDateString('es-CO')
          : '—'}
      </td>
      <td className="px-4 py-3">
        <FormularioAccion
          accion={actualizarOrdenArticulo}
          className="flex items-center gap-2"
        >
          <input type="hidden" name="slug" value={a.slug} />
          <input
            type="number"
            name="orden"
            defaultValue={a.orden ?? 0}
            className={`${claseCampo} w-20`}
            aria-label="Orden"
          />
          <BotonAccion variante="plano" className="!px-2.5 !py-1 !text-xs">
            OK
          </BotonAccion>
        </FormularioAccion>
      </td>
      <td className="px-4 py-3">
        <FormularioAccion accion={alternarArticulo} className="inline">
          <input type="hidden" name="slug" value={a.slug} />
          <input
            type="hidden"
            name="publicado"
            value={(!a.publicado).toString()}
          />
          <BotonAccion
            variante="plano"
            className="!px-2.5 !py-1 !text-xs"
            aria-label="Alternar publicación"
          >
            {a.publicado ? (
              <>
                <Eye size={13} /> Publicado
              </>
            ) : (
              <>
                <EyeOff size={13} /> Oculto
              </>
            )}
          </BotonAccion>
        </FormularioAccion>
      </td>
      <td className="px-4 py-3 text-right">
        <div className="flex justify-end gap-2">
          <Link
            href={`/admin/blog/${a.slug}`}
            aria-label="Editar artículo"
            className="inline-flex rounded-[var(--radius-sello)] border border-[color:var(--linea)] p-1.5 text-hueso-tenue transition-colors hover:border-oro hover:text-oro"
          >
            <Pencil size={15} />
          </Link>
          <FormularioAccion accion={eliminarArticulo} className="inline">
            <input type="hidden" name="slug" value={a.slug} />
            <BotonAccion
              variante="peligro"
              className="!p-1.5"
              confirmar={`¿Eliminar "${a.titulo}" de Supabase? El artículo estático no se borra.`}
              aria-label="Eliminar artículo"
            >
              <Trash2 size={15} />
            </BotonAccion>
          </FormularioAccion>
        </div>
      </td>
    </tr>
  );
}
