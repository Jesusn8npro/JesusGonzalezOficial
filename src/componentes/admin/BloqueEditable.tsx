'use client';

import React, { useState } from 'react';
import { Upload, Loader2 } from 'lucide-react';
import { claseCampo, claseEtiqueta } from './Primitivas';
import { inlineATexto, textoAInline } from '../../contenido/blog/inline';
import { subirImagenBlog } from '../../../app/admin/blog/_acciones-cuerpo';
import type { Bloque } from '../../contenido/blog/tipos';

const ETIQUETA: Record<Bloque['tipo'], string> = {
  h2: 'Título de sección (H2)',
  h3: 'Subtítulo (H3)',
  parrafo: 'Párrafo',
  cita: 'Cita',
  lista: 'Lista',
  imagen: 'Imagen',
  video: 'Video',
  cta: 'Botón CTA',
};

function SubirImagen({
  slug,
  onUrl,
}: {
  slug: string;
  onUrl: (url: string) => void;
}) {
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');

  async function manejar(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    setCargando(true);
    setError('');
    const fd = new FormData();
    fd.append('slug', slug);
    fd.append('archivo', f);
    const r = await subirImagenBlog(fd);
    setCargando(false);
    if (r.ok) onUrl(r.url);
    else setError(r.error);
  }

  return (
    <div>
      <label className="inline-flex cursor-pointer items-center gap-2 rounded-[var(--radius-sello)] border border-[color:var(--linea-fuerte)] px-3 py-2 text-sm text-hueso transition-colors hover:border-oro hover:text-oro">
        {cargando ? (
          <Loader2 size={15} className="animate-spin" />
        ) : (
          <Upload size={15} />
        )}
        {cargando ? 'Subiendo…' : 'Subir imagen'}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          disabled={cargando}
          onChange={manejar}
        />
      </label>
      {error && (
        <p className="mt-1 text-xs text-[color:var(--color-brasa)]">{error}</p>
      )}
    </div>
  );
}

export default function BloqueEditable({
  bloque,
  slug,
  onChange,
}: {
  bloque: Bloque;
  slug: string;
  onChange: (b: Bloque) => void;
}) {
  const b = bloque;

  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-oro">
        {ETIQUETA[b.tipo]}
      </p>

      {(b.tipo === 'h2' || b.tipo === 'h3') && (
        <input
          value={b.texto}
          onChange={(e) => onChange({ ...b, texto: e.target.value })}
          className={`${claseCampo} font-display`}
        />
      )}

      {b.tipo === 'parrafo' && (
        <textarea
          rows={4}
          defaultValue={inlineATexto(b.contenido)}
          onChange={(e) =>
            onChange({ ...b, contenido: textoAInline(e.target.value) })
          }
          className={claseCampo}
        />
      )}

      {b.tipo === 'cita' && (
        <div className="flex flex-col gap-2">
          <textarea
            rows={3}
            value={b.texto}
            onChange={(e) => onChange({ ...b, texto: e.target.value })}
            className={claseCampo}
          />
          <input
            placeholder="Autor (opcional)"
            value={b.autor ?? ''}
            onChange={(e) => onChange({ ...b, autor: e.target.value })}
            className={claseCampo}
          />
        </div>
      )}

      {b.tipo === 'lista' && (
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-sm text-hueso-tenue">
            <input
              type="checkbox"
              checked={b.ordenada ?? false}
              onChange={(e) => onChange({ ...b, ordenada: e.target.checked })}
              className="accent-[color:var(--oro)]"
            />
            Lista numerada
          </label>
          <textarea
            rows={Math.max(3, b.items.length)}
            defaultValue={b.items.map((it) => inlineATexto(it)).join('\n')}
            onChange={(e) =>
              onChange({
                ...b,
                items: e.target.value
                  .split('\n')
                  .filter((l) => l.trim() !== '')
                  .map((l) => textoAInline(l)),
              })
            }
            className={claseCampo}
          />
          <p className="text-xs text-hueso-tenue">Un elemento por línea.</p>
        </div>
      )}

      {b.tipo === 'imagen' && (
        <div className="flex flex-col gap-3">
          {b.src && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={b.src}
              alt={b.alt}
              className="max-h-56 w-auto rounded-[var(--radius-sello)] border border-[color:var(--linea)]"
            />
          )}
          <div>
            <label className={claseEtiqueta}>Ruta o URL de la imagen</label>
            <input
              value={b.src}
              onChange={(e) => onChange({ ...b, src: e.target.value })}
              className={claseCampo}
              placeholder="/Imagenes/... o https://..."
            />
          </div>
          <SubirImagen
            slug={slug}
            onUrl={(url) => onChange({ ...b, src: url })}
          />
          <div>
            <label className={claseEtiqueta}>Texto alternativo (alt)</label>
            <input
              value={b.alt}
              onChange={(e) => onChange({ ...b, alt: e.target.value })}
              className={claseCampo}
            />
          </div>
          <div>
            <label className={claseEtiqueta}>Pie de foto (opcional)</label>
            <input
              value={b.pie ?? ''}
              onChange={(e) => onChange({ ...b, pie: e.target.value })}
              className={claseCampo}
            />
          </div>
        </div>
      )}

      {b.tipo === 'video' && (
        <div className="flex flex-col gap-2">
          <div>
            <label className={claseEtiqueta}>ID de YouTube</label>
            <input
              value={b.videoId}
              onChange={(e) => onChange({ ...b, videoId: e.target.value })}
              className={claseCampo}
              placeholder="dQw4w9WgXcQ"
            />
          </div>
          <div>
            <label className={claseEtiqueta}>Título del video</label>
            <input
              value={b.titulo}
              onChange={(e) => onChange({ ...b, titulo: e.target.value })}
              className={claseCampo}
            />
          </div>
        </div>
      )}

      {b.tipo === 'cta' && (
        <div className="flex flex-col gap-2">
          <input
            value={b.texto}
            onChange={(e) => onChange({ ...b, texto: e.target.value })}
            className={claseCampo}
            placeholder="Texto principal del bloque"
          />
          <input
            value={b.etiqueta}
            onChange={(e) => onChange({ ...b, etiqueta: e.target.value })}
            className={claseCampo}
            placeholder="Texto del botón"
          />
          <input
            value={b.mensaje}
            onChange={(e) => onChange({ ...b, mensaje: e.target.value })}
            className={claseCampo}
            placeholder="Mensaje de WhatsApp prellenado"
          />
        </div>
      )}
    </div>
  );
}
