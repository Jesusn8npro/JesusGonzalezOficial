'use client';

import React, { useState } from 'react';
import { Pencil, Plus, Trash2, X } from 'lucide-react';
import FormularioAccion from './FormularioAccion';
import BotonAccion from './BotonAccion';
import { claseCampo, claseEtiqueta } from './Primitivas';
import {
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} from '../../../app/admin/_acciones';

export interface Evento {
  id: string;
  titulo: string;
  ciudad: string | null;
  fecha: string;
  estado: string;
  notas: string | null;
}

const ESTADOS = ['confirmado', 'tentativo', 'bloqueado'];

function Campos({ ev }: { ev?: Evento }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label className={claseEtiqueta}>Título</label>
        <input
          name="titulo"
          required
          defaultValue={ev?.titulo}
          className={claseCampo}
          placeholder="Boda en Hacienda…"
        />
      </div>
      <div>
        <label className={claseEtiqueta}>Ciudad</label>
        <input
          name="ciudad"
          defaultValue={ev?.ciudad ?? ''}
          className={claseCampo}
          placeholder="Valledupar"
        />
      </div>
      <div>
        <label className={claseEtiqueta}>Fecha</label>
        <input
          type="date"
          name="fecha"
          required
          defaultValue={ev?.fecha}
          className={claseCampo}
        />
      </div>
      <div>
        <label className={claseEtiqueta}>Estado</label>
        <select
          name="estado"
          defaultValue={ev?.estado ?? 'tentativo'}
          className={claseCampo}
        >
          {ESTADOS.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={claseEtiqueta}>Notas</label>
        <textarea
          name="notas"
          rows={2}
          defaultValue={ev?.notas ?? ''}
          className={claseCampo}
          placeholder="Detalles internos del evento."
        />
      </div>
    </div>
  );
}

export function CrearEvento() {
  const [abierto, setAbierto] = useState(false);
  if (!abierto)
    return (
      <button
        type="button"
        onClick={() => setAbierto(true)}
        className="inline-flex items-center gap-2 rounded-[var(--radius-sello)] bg-oro px-4 py-2 text-sm font-semibold text-tinta transition-colors hover:bg-oro-claro"
      >
        <Plus size={16} /> Nuevo evento
      </button>
    );
  return (
    <div className="w-full rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-[color:var(--color-tinta-2)] p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-hueso">
          Nuevo evento
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
        accion={crearEvento}
        resetearAlExito
        alExito={() => setAbierto(false)}
      >
        <Campos />
        <div className="mt-4">
          <BotonAccion>Crear evento</BotonAccion>
        </div>
      </FormularioAccion>
    </div>
  );
}

export function FilaEvento({ ev }: { ev: Evento }) {
  const [editando, setEditando] = useState(false);
  return (
    <>
      <tr className="border-t border-[color:var(--linea)]">
        <td className="px-4 py-3 text-hueso-tenue">
          {new Date(ev.fecha + 'T00:00:00').toLocaleDateString('es-CO')}
        </td>
        <td className="px-4 py-3 text-hueso">{ev.titulo}</td>
        <td className="px-4 py-3 text-hueso-tenue">{ev.ciudad || '—'}</td>
        <td className="px-4 py-3">
          <span className="inline-block rounded-full border border-[color:var(--linea-fuerte)] px-2.5 py-0.5 text-xs capitalize text-oro">
            {ev.estado}
          </span>
        </td>
        <td className="px-4 py-3 text-right">
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setEditando((v) => !v)}
              aria-label="Editar evento"
              className="inline-flex rounded-[var(--radius-sello)] border border-[color:var(--linea)] p-1.5 text-hueso-tenue transition-colors hover:border-oro hover:text-oro"
            >
              {editando ? <X size={15} /> : <Pencil size={15} />}
            </button>
            <FormularioAccion accion={eliminarEvento} className="inline">
              <input type="hidden" name="id" value={ev.id} />
              <BotonAccion
                variante="peligro"
                className="!p-1.5"
                confirmar={`¿Eliminar "${ev.titulo}"?`}
                aria-label="Eliminar evento"
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
              accion={actualizarEvento}
              alExito={() => setEditando(false)}
            >
              <input type="hidden" name="id" value={ev.id} />
              <Campos ev={ev} />
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
