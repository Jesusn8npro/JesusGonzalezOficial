// Índice del blog: registra los artículos y expone helpers de consulta
// (listado, búsqueda por slug, categorías, relacionados, populares).
import type { Articulo } from './tipos';
import { articulo as cuantoCuesta } from './cuanto-cuesta-acordeonista-boda';
import { articulo as repertorio } from './repertorio-vallenato-matrimonio';
import { articulo as corporativo } from './grupo-vallenato-evento-corporativo';
import { articulo as parranda } from './parranda-vallenata-guia';
import { articulo as momentos } from './momentos-clave-boda-vallenato';

/** Todos los artículos, del más reciente al más antiguo. */
export const ARTICULOS: Articulo[] = [
  momentos,
  parranda,
  corporativo,
  repertorio,
  cuantoCuesta,
].sort((a, b) => (a.fecha < b.fecha ? 1 : -1));

export function buscarArticulo(slug: string): Articulo | undefined {
  return ARTICULOS.find((a) => a.slug === slug);
}

export interface Categoria {
  nombre: string;
  cantidad: number;
}

/** Categorías con su conteo, para la barra lateral izquierda. */
export function categorias(): Categoria[] {
  const mapa = new Map<string, number>();
  for (const a of ARTICULOS) {
    mapa.set(a.categoria, (mapa.get(a.categoria) ?? 0) + 1);
  }
  return [...mapa.entries()]
    .map(([nombre, cantidad]) => ({ nombre, cantidad }))
    .sort((a, b) => b.cantidad - a.cantidad);
}

/** Artículos relacionados según los slugs declarados; rellena si faltan. */
export function relacionados(slug: string, max = 3): Articulo[] {
  const base = buscarArticulo(slug);
  if (!base) return [];
  const elegidos = base.relacionados
    .map((s) => buscarArticulo(s))
    .filter((a): a is Articulo => Boolean(a) && a!.slug !== slug);
  if (elegidos.length < max) {
    for (const a of ARTICULOS) {
      if (elegidos.length >= max) break;
      if (a.slug !== slug && !elegidos.some((e) => e.slug === a.slug)) {
        elegidos.push(a);
      }
    }
  }
  return elegidos.slice(0, max);
}

/** "Populares" estable (sin analytics): los 4 más recientes. */
export function populares(excluir?: string, max = 4): Articulo[] {
  return ARTICULOS.filter((a) => a.slug !== excluir).slice(0, max);
}
