// Modelo de contenido tipado del blog. Una sola fuente de verdad para
// listado, artículo, TOC, SEO y sitemap. Sin dependencias externas.

/** Fragmento de texto enriquecido dentro de un párrafo / item de lista. */
export type Inline =
  | string
  | { texto: string; href: string; externo?: boolean }
  | { fuerte: string };

/** Bloques que componen el cuerpo de un artículo. */
export type Bloque =
  | { tipo: 'h2'; texto: string }
  | { tipo: 'h3'; texto: string }
  | { tipo: 'parrafo'; contenido: Inline[] }
  | { tipo: 'cita'; texto: string; autor?: string }
  | { tipo: 'lista'; ordenada?: boolean; items: Inline[][] }
  | {
      tipo: 'imagen';
      src: string;
      alt: string;
      pie?: string;
    }
  | { tipo: 'video'; videoId: string; titulo: string }
  | { tipo: 'cta'; mensaje: string; etiqueta: string; texto: string };

export interface ArticuloMeta {
  slug: string;
  /** Título SEO (50-60c idealmente). */
  titulo: string;
  /** H1 visible (puede diferir del title SEO). */
  h1: string;
  /** Meta description (150-160c). */
  descripcion: string;
  /** Frase de entradilla bajo el H1. */
  resumen: string;
  categoria: string;
  /** ISO date YYYY-MM-DD. */
  fecha: string;
  /** ISO date de última actualización. */
  actualizado?: string;
  portada: string;
  portadaAlt: string;
  /** Palabras clave para keywords meta. */
  claves: string[];
  /** Slugs de artículos hermanos para "relacionados". */
  relacionados: string[];
}

export interface Articulo extends ArticuloMeta {
  cuerpo: Bloque[];
}

/** Entrada del Table of Contents derivada de los headings. */
export interface ItemTOC {
  id: string;
  texto: string;
  nivel: 2 | 3;
}

/** Convierte un texto de heading en un id estable y único. */
const COMBINANTES = new RegExp(
  `[\\u0300-\\u036f]`,
  'g',
);

export function aId(texto: string): string {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(COMBINANTES, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/** Extrae el TOC (h2/h3) de un cuerpo de artículo. */
export function construirTOC(cuerpo: Bloque[]): ItemTOC[] {
  const usados = new Set<string>();
  const toc: ItemTOC[] = [];
  for (const b of cuerpo) {
    if (b.tipo !== 'h2' && b.tipo !== 'h3') continue;
    let id = aId(b.texto);
    let n = 2;
    while (usados.has(id)) id = `${aId(b.texto)}-${n++}`;
    usados.add(id);
    toc.push({ id, texto: b.texto, nivel: b.tipo === 'h2' ? 2 : 3 });
  }
  return toc;
}

/** Palabras del cuerpo para calcular tiempo de lectura. */
function palabrasDe(inline: Inline): number {
  if (typeof inline === 'string') return inline.trim().split(/\s+/).length;
  if ('fuerte' in inline) return inline.fuerte.trim().split(/\s+/).length;
  return inline.texto.trim().split(/\s+/).length;
}

/** Tiempo de lectura en minutos (>=1), ~200 ppm. */
export function tiempoLectura(cuerpo: Bloque[]): number {
  let total = 0;
  for (const b of cuerpo) {
    if (b.tipo === 'h2' || b.tipo === 'h3') {
      total += b.texto.trim().split(/\s+/).length;
    } else if (b.tipo === 'parrafo') {
      total += b.contenido.reduce((s, i) => s + palabrasDe(i), 0);
    } else if (b.tipo === 'cita') {
      total += b.texto.trim().split(/\s+/).length;
    } else if (b.tipo === 'lista') {
      total += b.items
        .flat()
        .reduce((s, i) => s + palabrasDe(i), 0);
    }
  }
  return Math.max(1, Math.round(total / 200));
}
