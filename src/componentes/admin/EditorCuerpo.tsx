'use client';

import React, { useState, useTransition } from 'react';
import {
  ArrowUp,
  ArrowDown,
  Trash2,
  Plus,
  Save,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import BloqueEditable from './BloqueEditable';
import { claseCampo } from './Primitivas';
import { guardarCuerpoArticulo } from '../../../app/admin/blog/_acciones-cuerpo';
import type { Bloque } from '../../contenido/blog/tipos';

const NUEVOS: Record<string, () => Bloque> = {
  h2: () => ({ tipo: 'h2', texto: 'Nuevo título de sección' }),
  h3: () => ({ tipo: 'h3', texto: 'Nuevo subtítulo' }),
  parrafo: () => ({ tipo: 'parrafo', contenido: [''] }),
  cita: () => ({ tipo: 'cita', texto: '' }),
  lista: () => ({ tipo: 'lista', items: [['']] }),
  imagen: () => ({ tipo: 'imagen', src: '', alt: '' }),
  video: () => ({ tipo: 'video', videoId: '', titulo: '' }),
  cta: () => ({ tipo: 'cta', mensaje: '', etiqueta: '', texto: '' }),
};

const OPCIONES: { v: string; t: string }[] = [
  { v: 'h2', t: 'Título (H2)' },
  { v: 'h3', t: 'Subtítulo (H3)' },
  { v: 'parrafo', t: 'Párrafo' },
  { v: 'lista', t: 'Lista' },
  { v: 'cita', t: 'Cita' },
  { v: 'imagen', t: 'Imagen' },
  { v: 'video', t: 'Video' },
  { v: 'cta', t: 'Botón CTA' },
];

export default function EditorCuerpo({
  slug,
  cuerpoInicial,
}: {
  slug: string;
  cuerpoInicial: Bloque[];
}) {
  const [cuerpo, setCuerpo] = useState<Bloque[]>(cuerpoInicial);
  const [tipoNuevo, setTipoNuevo] = useState('parrafo');
  const [pendiente, startTransition] = useTransition();
  const [aviso, setAviso] = useState<{ ok: boolean; texto: string } | null>(
    null,
  );

  function cambiar(i: number, b: Bloque) {
    setCuerpo((c) => c.map((x, j) => (j === i ? b : x)));
  }
  function borrar(i: number) {
    if (!window.confirm('¿Eliminar esta sección del artículo?')) return;
    setCuerpo((c) => c.filter((_, j) => j !== i));
  }
  function mover(i: number, dir: -1 | 1) {
    setCuerpo((c) => {
      const j = i + dir;
      if (j < 0 || j >= c.length) return c;
      const copia = [...c];
      [copia[i], copia[j]] = [copia[j], copia[i]];
      return copia;
    });
  }
  function agregar() {
    setCuerpo((c) => [...c, NUEVOS[tipoNuevo]()]);
  }

  function guardar() {
    setAviso(null);
    startTransition(async () => {
      const fd = new FormData();
      fd.append('slug', slug);
      fd.append('cuerpo', JSON.stringify(cuerpo));
      const r = await guardarCuerpoArticulo(fd);
      setAviso({
        ok: r.ok,
        texto: r.ok ? r.mensaje ?? 'Guardado.' : r.error ?? 'Error al guardar.',
      });
      if (r.ok) setTimeout(() => setAviso(null), 4000);
    });
  }

  return (
    <div className="flex flex-col gap-5">
      {cuerpo.map((b, i) => (
        <div
          key={i}
          className="rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-[color:var(--color-tinta-2)] p-5"
        >
          <div className="mb-3 flex justify-end gap-1.5">
            <Boton
              titulo="Subir"
              onClick={() => mover(i, -1)}
              disabled={i === 0}
            >
              <ArrowUp size={15} />
            </Boton>
            <Boton
              titulo="Bajar"
              onClick={() => mover(i, 1)}
              disabled={i === cuerpo.length - 1}
            >
              <ArrowDown size={15} />
            </Boton>
            <Boton titulo="Eliminar" onClick={() => borrar(i)} peligro>
              <Trash2 size={15} />
            </Boton>
          </div>
          <BloqueEditable
            bloque={b}
            slug={slug}
            onChange={(nb) => cambiar(i, nb)}
          />
        </div>
      ))}

      <div className="flex flex-wrap items-center gap-3 rounded-[var(--radius-tarjeta)] border border-dashed border-[color:var(--linea-fuerte)] p-4">
        <span className="text-sm text-hueso-tenue">Agregar sección:</span>
        <select
          value={tipoNuevo}
          onChange={(e) => setTipoNuevo(e.target.value)}
          className={`${claseCampo} w-auto`}
        >
          {OPCIONES.map((o) => (
            <option key={o.v} value={o.v}>
              {o.t}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={agregar}
          className="inline-flex items-center gap-2 rounded-[var(--radius-sello)] border border-[color:var(--linea-fuerte)] px-4 py-2 text-sm font-semibold text-hueso transition-colors hover:border-oro hover:text-oro"
        >
          <Plus size={15} />
          Agregar
        </button>
      </div>

      <div className="sticky bottom-4 flex items-center gap-4">
        <button
          type="button"
          onClick={guardar}
          disabled={pendiente}
          className="inline-flex items-center gap-2 rounded-[var(--radius-sello)] bg-oro px-6 py-3 text-sm font-semibold text-tinta shadow-lg transition-[transform,background-color] duration-200 hover:bg-oro-claro active:scale-[0.985] disabled:opacity-60"
        >
          <Save size={16} />
          {pendiente ? 'Guardando…' : 'Guardar contenido'}
        </button>
        {aviso && (
          <span
            className={`flex items-center gap-2 text-sm ${
              aviso.ok
                ? 'text-[color:var(--color-whatsapp)]'
                : 'text-[color:var(--color-brasa)]'
            }`}
          >
            {aviso.ok ? (
              <CheckCircle2 size={15} />
            ) : (
              <AlertCircle size={15} />
            )}
            {aviso.texto}
          </span>
        )}
      </div>
    </div>
  );
}

function Boton({
  children,
  onClick,
  titulo,
  disabled,
  peligro,
}: {
  children: React.ReactNode;
  onClick: () => void;
  titulo: string;
  disabled?: boolean;
  peligro?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={titulo}
      aria-label={titulo}
      className={`inline-flex rounded-[var(--radius-sello)] border p-1.5 transition-colors disabled:opacity-30 ${
        peligro
          ? 'border-[color:var(--color-brasa)] text-[color:var(--color-brasa)] hover:bg-[color:var(--color-brasa)] hover:text-hueso'
          : 'border-[color:var(--linea)] text-hueso-tenue hover:border-oro hover:text-oro'
      }`}
    >
      {children}
    </button>
  );
}
