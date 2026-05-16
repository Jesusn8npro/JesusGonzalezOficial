'use client';

import React, { useState } from 'react';
import { ExternalLink, Pencil, X } from 'lucide-react';
import FormularioAccion from './FormularioAccion';
import BotonAccion from './BotonAccion';
import { Insignia, claseCampo } from './Primitivas';
import { actualizarLead } from '../../../app/admin/_acciones';

export interface Lead {
  id: string;
  creado_at: string;
  nombre: string | null;
  whatsapp: string | null;
  tipo_evento: string | null;
  ciudad: string | null;
  estado: string | null;
  mensaje: string | null;
}

const ESTADOS = ['nuevo', 'contactado', 'cotizado', 'cerrado', 'perdido'];
const TONO: Record<string, 'oro' | 'verde' | 'brasa' | 'tenue'> = {
  nuevo: 'oro',
  contactado: 'tenue',
  cotizado: 'tenue',
  cerrado: 'verde',
  perdido: 'brasa',
};

function soloDigitos(s: string) {
  return s.replace(/[^\d]/g, '');
}

export default function FilaLead({ lead }: { lead: Lead }) {
  const [editando, setEditando] = useState(false);
  const estado = lead.estado || 'nuevo';
  const tel = lead.whatsapp ? soloDigitos(lead.whatsapp) : '';

  return (
    <>
      <tr className="border-t border-[color:var(--linea)] align-top">
        <td className="px-4 py-3 text-hueso-tenue">
          {new Date(lead.creado_at).toLocaleDateString('es-CO')}
        </td>
        <td className="px-4 py-3 text-hueso">{lead.nombre || '—'}</td>
        <td className="px-4 py-3">
          {tel ? (
            <a
              href={`https://wa.me/${tel}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[color:var(--color-whatsapp)] hover:underline"
            >
              {lead.whatsapp}
              <ExternalLink size={13} />
            </a>
          ) : (
            <span className="text-hueso-tenue">—</span>
          )}
        </td>
        <td className="px-4 py-3 text-hueso-tenue">
          {lead.tipo_evento || '—'}
        </td>
        <td className="px-4 py-3 text-hueso-tenue">{lead.ciudad || '—'}</td>
        <td className="px-4 py-3">
          <Insignia tono={TONO[estado] ?? 'tenue'}>{estado}</Insignia>
        </td>
        <td className="px-4 py-3 text-right">
          <button
            type="button"
            onClick={() => setEditando((v) => !v)}
            aria-label={editando ? 'Cerrar edición' : 'Editar lead'}
            className="inline-flex rounded-[var(--radius-sello)] border border-[color:var(--linea)] p-1.5 text-hueso-tenue transition-colors hover:border-oro hover:text-oro"
          >
            {editando ? <X size={15} /> : <Pencil size={15} />}
          </button>
        </td>
      </tr>
      {editando && (
        <tr className="border-t border-[color:var(--linea)] bg-[color:var(--color-tinta-3)]">
          <td colSpan={7} className="px-4 py-4">
            {lead.mensaje && (
              <p className="mb-3 text-sm text-hueso-tenue">
                <span className="text-hueso">Mensaje original:</span>{' '}
                {lead.mensaje}
              </p>
            )}
            <FormularioAccion
              accion={actualizarLead}
              className="flex flex-col gap-3 sm:flex-row sm:items-end"
              alExito={() => setEditando(false)}
            >
              <input type="hidden" name="id" value={lead.id} />
              <div className="sm:w-48">
                <label className="mb-1 block text-xs text-hueso-tenue">
                  Estado
                </label>
                <select
                  name="estado"
                  defaultValue={estado}
                  className={claseCampo}
                >
                  {ESTADOS.map((e) => (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label className="mb-1 block text-xs text-hueso-tenue">
                  Nota interna
                </label>
                <input
                  type="text"
                  name="mensaje"
                  defaultValue={lead.mensaje ?? ''}
                  placeholder="Seguimiento, acuerdo, recordatorio…"
                  className={claseCampo}
                />
              </div>
              <BotonAccion>Guardar</BotonAccion>
            </FormularioAccion>
          </td>
        </tr>
      )}
    </>
  );
}
