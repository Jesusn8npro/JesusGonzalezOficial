'use client';

import React, { useState } from 'react';
import FormularioAccion from './FormularioAccion';
import BotonAccion from './BotonAccion';
import PanelSeoIA from './PanelSeoIA';
import { EncabezadoAdmin, claseCampo, claseEtiqueta } from './Primitivas';
import { actualizarArticulo } from '../../../app/admin/_acciones';
import type { SugerenciaSeo } from '../../../app/admin/blog/_ia';
import type { Articulo } from '../../contenido/blog/tipos';

function Contador({
  n,
  min,
  max,
}: {
  n: number;
  min: number;
  max: number;
}) {
  const ok = n >= min && n <= max;
  return (
    <span
      className={`text-xs ${
        ok
          ? 'text-[color:var(--color-whatsapp)]'
          : 'text-hueso-tenue'
      }`}
    >
      {n} car. (ideal {min}–{max})
    </span>
  );
}

export default function EditorArticulo({
  slug,
  articulo,
  iaDisponible,
}: {
  slug: string;
  articulo: Articulo;
  iaDisponible: boolean;
}) {
  const [titulo, setTitulo] = useState(articulo.titulo ?? '');
  const [h1, setH1] = useState(articulo.h1 ?? '');
  const [descripcion, setDescripcion] = useState(articulo.descripcion ?? '');
  const [resumen, setResumen] = useState(articulo.resumen ?? '');
  const [categoria, setCategoria] = useState(articulo.categoria ?? '');
  const [fecha, setFecha] = useState(articulo.fecha ?? '');
  const [actualizado, setActualizado] = useState(articulo.actualizado ?? '');
  const [portada, setPortada] = useState(articulo.portada ?? '');
  const [portadaAlt, setPortadaAlt] = useState(articulo.portadaAlt ?? '');
  const [claves, setClaves] = useState((articulo.claves ?? []).join(', '));

  function aplicar(s: SugerenciaSeo) {
    setTitulo(s.titulo);
    setDescripcion(s.descripcion);
    setResumen(s.resumen);
    setClaves(s.claves.join(', '));
  }

  return (
    <div>
      <EncabezadoAdmin
        titulo="Editar artículo"
        descripcion={`${articulo.h1} · /blog/${slug}`}
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <FormularioAccion
          accion={actualizarArticulo}
          className="flex flex-col gap-5"
        >
          <input type="hidden" name="slug" value={slug} />

          <div>
            <div className="mb-1.5 flex items-baseline justify-between gap-3">
              <label className={`${claseEtiqueta} mb-0`}>Título SEO</label>
              <Contador n={titulo.length} min={50} max={60} />
            </div>
            <input
              name="titulo"
              required
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className={claseCampo}
            />
          </div>

          <div>
            <label className={claseEtiqueta}>H1 (título visible)</label>
            <input
              name="h1"
              required
              value={h1}
              onChange={(e) => setH1(e.target.value)}
              className={claseCampo}
            />
          </div>

          <div>
            <div className="mb-1.5 flex items-baseline justify-between gap-3">
              <label className={`${claseEtiqueta} mb-0`}>
                Meta descripción
              </label>
              <Contador n={descripcion.length} min={150} max={160} />
            </div>
            <textarea
              name="descripcion"
              rows={3}
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className={claseCampo}
            />
          </div>

          <div>
            <label className={claseEtiqueta}>Resumen (entradilla)</label>
            <textarea
              name="resumen"
              rows={2}
              value={resumen}
              onChange={(e) => setResumen(e.target.value)}
              className={claseCampo}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={claseEtiqueta}>Categoría</label>
              <input
                name="categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className={claseCampo}
              />
            </div>
            <div>
              <label className={claseEtiqueta}>Palabras clave (coma)</label>
              <input
                name="claves"
                value={claves}
                onChange={(e) => setClaves(e.target.value)}
                className={claseCampo}
                placeholder="acordeonista boda, vallenato bogotá"
              />
            </div>
            <div>
              <label className={claseEtiqueta}>Fecha</label>
              <input
                type="date"
                name="fecha"
                required
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                className={claseCampo}
              />
            </div>
            <div>
              <label className={claseEtiqueta}>Actualizado (opcional)</label>
              <input
                type="date"
                name="actualizado"
                value={actualizado}
                onChange={(e) => setActualizado(e.target.value)}
                className={claseCampo}
              />
            </div>
          </div>

          <div>
            <label className={claseEtiqueta}>Portada (ruta de imagen)</label>
            <input
              name="portada"
              value={portada}
              onChange={(e) => setPortada(e.target.value)}
              className={claseCampo}
              placeholder="/Imagenes/blog/portada.jpg"
            />
          </div>

          <div>
            <label className={claseEtiqueta}>Texto alternativo de portada</label>
            <input
              name="portadaAlt"
              value={portadaAlt}
              onChange={(e) => setPortadaAlt(e.target.value)}
              className={claseCampo}
            />
          </div>

          <div className="pt-1">
            <BotonAccion>Guardar cambios</BotonAccion>
          </div>
        </FormularioAccion>

        <PanelSeoIA
          slug={slug}
          iaDisponible={iaDisponible}
          alAplicar={aplicar}
        />
      </div>
    </div>
  );
}
