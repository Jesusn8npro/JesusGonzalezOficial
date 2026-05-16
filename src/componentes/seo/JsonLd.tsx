import React from 'react';

/**
 * Renderiza uno o varios objetos JSON-LD en un <script type="application/ld+json">.
 * Server component puro (sin 'use client'): el JSON va en el HTML estático,
 * indexable por Google sin ejecutar JS.
 */
interface JsonLdProps {
  /** Un objeto schema.org o un arreglo de objetos (se serializa como @graph implícito vía array). */
  data: Record<string, unknown> | Record<string, unknown>[];
  id?: string;
}

const JsonLd: React.FC<JsonLdProps> = ({ data, id }) => (
  <script
    id={id}
    type="application/ld+json"
    // El contenido es generado por nosotros desde configuracion.ts (no input de usuario).
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default JsonLd;
