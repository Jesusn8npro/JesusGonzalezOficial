// Fuente de datos del blog: Supabase como origen, con FALLBACK a los
// artículos estáticos. Si la BD está vacía o caída, el blog NUNCA se rompe.
// Cliente anónimo sin cookies => la página sigue siendo cacheable (ISR).

import { createClient } from '@supabase/supabase-js';
import {
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  supabaseConfigurado,
} from '../../utilidades/supabase/config';
import type { Articulo } from './tipos';
import {
  ARTICULOS as ESTATICOS,
  categorias as catEstaticas,
  type Categoria,
} from './indice';

async function desdeSupabase(): Promise<Articulo[] | null> {
  if (!supabaseConfigurado) return null;
  try {
    const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: { persistSession: false },
    });
    const { data, error } = await sb
      .from('articulos')
      .select('datos')
      .eq('publicado', true)
      .order('fecha', { ascending: false });
    if (error || !data || data.length === 0) return null;
    return data.map((r) => r.datos as Articulo);
  } catch {
    return null;
  }
}

/** Todos los artículos publicados (Supabase → fallback estático). */
export async function listarArticulos(): Promise<Articulo[]> {
  return (await desdeSupabase()) ?? ESTATICOS;
}

export async function obtenerArticulo(
  slug: string,
): Promise<Articulo | undefined> {
  const todos = await listarArticulos();
  return todos.find((a) => a.slug === slug);
}

export async function articulosRelacionados(
  slug: string,
  max = 3,
): Promise<Articulo[]> {
  const todos = await listarArticulos();
  const base = todos.find((a) => a.slug === slug);
  if (!base) return [];
  const sel = base.relacionados
    .map((s) => todos.find((a) => a.slug === s))
    .filter((a): a is Articulo => Boolean(a) && a!.slug !== slug);
  for (const a of todos) {
    if (sel.length >= max) break;
    if (a.slug !== slug && !sel.some((e) => e.slug === a.slug)) sel.push(a);
  }
  return sel.slice(0, max);
}

export async function articulosPopulares(
  excluir?: string,
  max = 4,
): Promise<Articulo[]> {
  const todos = await listarArticulos();
  return todos.filter((a) => a.slug !== excluir).slice(0, max);
}

export async function categoriasBlog(): Promise<Categoria[]> {
  const todos = await listarArticulos();
  if (todos === ESTATICOS) return catEstaticas();
  const mapa = new Map<string, number>();
  for (const a of todos) mapa.set(a.categoria, (mapa.get(a.categoria) ?? 0) + 1);
  return [...mapa.entries()]
    .map(([nombre, cantidad]) => ({ nombre, cantidad }))
    .sort((a, b) => b.cantidad - a.cantidad);
}

/** Slugs garantizados para generateStaticParams (build-time). */
export function slugsEstaticos(): { slug: string }[] {
  return ESTATICOS.map((a) => ({ slug: a.slug }));
}
