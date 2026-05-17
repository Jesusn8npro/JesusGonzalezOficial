'use client';

import React, { useState, useTransition } from 'react';
import { Sparkles, Loader2, AlertCircle, Check, Wand2 } from 'lucide-react';
import {
  analizarSeoArticulo,
  type ResultadoSeo,
  type SugerenciaSeo,
} from '../../../app/admin/blog/_ia';

export default function PanelSeoIA({
  slug,
  iaDisponible,
  alAplicar,
}: {
  slug: string;
  iaDisponible: boolean;
  alAplicar: (s: SugerenciaSeo) => void;
}) {
  const [pendiente, startTransition] = useTransition();
  const [resultado, setResultado] = useState<ResultadoSeo | null>(null);
  const [aplicado, setAplicado] = useState(false);

  function analizar() {
    setResultado(null);
    setAplicado(false);
    startTransition(async () => {
      setResultado(await analizarSeoArticulo(slug));
    });
  }

  return (
    <aside className="rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-[color:var(--color-tinta-2)] p-6">
      <div className="flex items-center gap-2">
        <Sparkles size={18} className="text-oro" />
        <h2 className="font-display text-lg font-semibold text-hueso">
          Agente de SEO
        </h2>
      </div>
      <p className="mt-2 text-sm text-hueso-tenue">
        Analiza el artículo completo y propone mejoras de posicionamiento en
        Google Colombia. Revísalas antes de aplicar.
      </p>

      {!iaDisponible && (
        <p className="mt-4 flex items-start gap-2 rounded-[var(--radius-sello)] border border-[color:var(--linea)] p-3 text-xs text-hueso-tenue">
          <AlertCircle size={14} className="mt-0.5 shrink-0" />
          Falta <code className="text-oro">OPENAI_API_KEY</code>. Agrégala en
          el entorno para activar el agente.
        </p>
      )}

      <button
        type="button"
        onClick={analizar}
        disabled={!iaDisponible || pendiente}
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-sello)] bg-oro px-4 py-2.5 text-sm font-semibold text-tinta transition-[transform,background-color] duration-200 hover:bg-oro-claro active:scale-[0.985] disabled:opacity-50"
      >
        {pendiente ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Analizando…
          </>
        ) : (
          <>
            <Sparkles size={16} />
            Mejorar SEO con IA
          </>
        )}
      </button>

      {resultado && !resultado.ok && (
        <p className="mt-4 flex items-start gap-2 text-sm text-[color:var(--color-brasa)]">
          <AlertCircle size={15} className="mt-0.5 shrink-0" />
          {resultado.error}
        </p>
      )}

      {resultado && resultado.ok && (
        <div className="mt-5 flex flex-col gap-4">
          <Sugerencia etiqueta="Título SEO" valor={resultado.sugerencias.titulo} />
          <Sugerencia
            etiqueta="Meta descripción"
            valor={resultado.sugerencias.descripcion}
          />
          <Sugerencia etiqueta="Resumen" valor={resultado.sugerencias.resumen} />
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-hueso-tenue">
              Palabras clave
            </p>
            <div className="flex flex-wrap gap-1.5">
              {resultado.sugerencias.claves.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-[color:var(--linea-fuerte)] px-2.5 py-0.5 text-xs text-oro"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {resultado.recomendaciones.length > 0 && (
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-hueso-tenue">
                Recomendaciones
              </p>
              <ul className="flex flex-col gap-2">
                {resultado.recomendaciones.map((r, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-hueso-tenue"
                  >
                    <Check
                      size={14}
                      className="mt-0.5 shrink-0 text-[color:var(--color-whatsapp)]"
                    />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            type="button"
            onClick={() => {
              alAplicar(resultado.sugerencias);
              setAplicado(true);
            }}
            className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-sello)] border border-[color:var(--linea-fuerte)] px-4 py-2 text-sm font-semibold text-hueso transition-colors hover:border-oro hover:text-oro"
          >
            <Wand2 size={15} />
            {aplicado ? 'Aplicado al formulario' : 'Aplicar al formulario'}
          </button>
          <p className="text-xs text-hueso-tenue">
            Aplicar solo rellena los campos; recuerda pulsar “Guardar cambios”.
          </p>
        </div>
      )}
    </aside>
  );
}

function Sugerencia({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  return (
    <div>
      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-hueso-tenue">
        {etiqueta}
      </p>
      <p className="rounded-[var(--radius-sello)] border border-[color:var(--linea)] bg-[color:var(--color-tinta-3)] p-3 text-sm text-hueso">
        {valor}
      </p>
    </div>
  );
}
