'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, Pencil, Plus, Trash2, X } from 'lucide-react';
import FormularioAccion from './FormularioAccion';
import BotonAccion from './BotonAccion';
import { claseCampo, claseEtiqueta } from './Primitivas';
import {
  crearNovedad,
  actualizarNovedad,
  eliminarNovedad,
  alternarNovedad,
} from '../../../app/admin/_acciones';

export interface Novedad {
  id: string;
  titulo: string;
  slug: string;
  contenido: string | null;
  imagen: string | null;
  fecha: string | null;
  publicado: boolean;
}

function aSlug(s: string) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function Campos({ n }: { n?: Novedad }) {
  const [slug, setSlug] = useState(n?.slug ?? '');
  const [tocado, setTocado] = useState(Boolean(n?.slug));
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label className={claseEtiqueta}>Título</label>
        <input
          name="titulo"
          required
          defaultValue={n?.titulo}
          onChange={(e) => {
            if (!tocado) setSlug(aSlug(e.target.value));
          }}
          className={claseCampo}
          placeholder="Nuevo videoclip grabado en…"
        />
      </div>
      <div>
        <label className={claseEtiqueta}>Slug</label>
        <input
          name="slug"
          value={slug}
          onChange={(e) => {
            setTocado(true);
            setSlug(aSlug(e.target.value));
          }}
          className={claseCampo}
          placeholder="nuevo-videoclip"
        />
      </div>
      <div>
        <label className={claseEtiqueta}>Fecha</label>
        <input
          type="date"
          name="fecha"
          defaultValue={n?.fecha ?? ''}
          className={claseCampo}
        />
      </div>
      <div className="sm:col-span-2">
        <label className={claseEtiqueta}>Imagen (ruta)</label>
        <input
          name="imagen"
          defaultValue={n?.imagen ?? ''}
          className={claseCampo}
          placeholder="/Imagenes/novedad.jpg"
        />
      </div>
      <div className="sm:col-span-2">
        <label className={claseEtiqueta}>Contenido</label>
        <textarea
          name="contenido"
          rows={5}
          defaultValue={n?.contenido ?? ''}
          className={claseCampo}
          placeholder="Texto de la novedad."
        />
      </div>
      <label className="flex items-center gap-2 text-sm text-hueso-tenue">
        <input
          type="checkbox"
          name="publicado"
          defaultChecked={n?.publicado ?? false}
          className="accent-[color:var(--oro)]"
        />
        Publicado (visible en el sitio)
      </label>
    </div>
  );
}

export function CrearNovedad() {
  const [abierto, setAbierto] = useState(false);
  if (!abierto)
    return (
      <button
        type="button"
        onClick={() => setAbierto(true)}
        className="inline-flex items-center gap-2 rounded-[var(--radius-sello)] bg-oro px-4 py-2 text-sm font-semibold text-tinta transition-colors hover:bg-oro-claro"
      >
        <Plus size={16} /> Nueva novedad
      </button>
    );
  return (
    <div className="w-full rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-[color:var(--color-tinta-2)] p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-hueso">
          Nueva novedad
        </h2>
        <button
          type="button"
          onClick={() => setAbierto(false)}
          aria-label="Cerrar"
          className="text-hueso-tenue hover:text-oro"
        >
          <X size={18} />
        </button>
      </div>
      <FormularioAccion
        accion={crearNovedad}
        resetearAlExito
        alExito={() => setAbierto(false)}
      >
        <Campos />
        <div className="mt-4">
          <BotonAccion>Crear novedad</BotonAccion>
        </div>
      </FormularioAccion>
    </div>
  );
}

export function FilaNovedad({ n }: { n: Novedad }) {
  const [editando, setEditando] = useState(false);
  return (
    <>
      <tr className="border-t border-[color:var(--linea)]">
        <td className="px-4 py-3 text-hueso-tenue">
          {n.fecha
            ? new Date(n.fecha + 'T00:00:00').toLocaleDateString('es-CO')
            : '—'}
        </td>
        <td className="px-4 py-3 text-hueso">{n.titulo}</td>
        <td className="px-4 py-3 font-mono text-xs text-hueso-tenue">
          {n.slug}
        </td>
        <td className="px-4 py-3">
          <FormularioAccion accion={alternarNovedad} className="inline">
            <input type="hidden" name="id" value={n.id} />
            <input
              type="hidden"
              name="publicado"
              value={(!n.publicado).toString()}
            />
            <BotonAccion
              variante="plano"
              className="!px-2.5 !py-1 !text-xs"
              aria-label="Alternar publicación"
            >
              {n.publicado ? (
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
            <button
              type="button"
              onClick={() => setEditando((v) => !v)}
              aria-label="Editar novedad"
              className="inline-flex rounded-[var(--radius-sello)] border border-[color:var(--linea)] p-1.5 text-hueso-tenue transition-colors hover:border-oro hover:text-oro"
            >
              {editando ? <X size={15} /> : <Pencil size={15} />}
            </button>
            <FormularioAccion accion={eliminarNovedad} className="inline">
              <input type="hidden" name="id" value={n.id} />
              <BotonAccion
                variante="peligro"
                className="!p-1.5"
                confirmar={`¿Eliminar "${n.titulo}"?`}
                aria-label="Eliminar novedad"
              >
                <Trash2 size={15} />
              </BotonAccion>
            </FormularioAccion>
          </div>
        </td>
      </tr>
      {editando && (
        <tr className="border-t border-[color:var(--linea)] bg-[color:var(--color-tinta-3)]">
          <td colSpan={5} className="px-4 py-4">
            <FormularioAccion
              accion={actualizarNovedad}
              alExito={() => setEditando(false)}
            >
              <input type="hidden" name="id" value={n.id} />
              <Campos n={n} />
              <div className="mt-4">
                <BotonAccion>Guardar cambios</BotonAccion>
              </div>
            </FormularioAccion>
          </td>
        </tr>
      )}
    </>
  );
}
