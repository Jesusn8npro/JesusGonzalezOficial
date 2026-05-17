'use server';

import { revalidatePath } from 'next/cache';
import { crearClienteServidor } from '../../../src/utilidades/supabase/servidor';
import type { Articulo, Bloque } from '../../../src/contenido/blog/tipos';

/* ============================================================
   Acciones del editor de cuerpo del artículo:
   - subirImagenBlog: sube un archivo a Storage (bucket 'blog')
     y devuelve su URL pública.
   - guardarCuerpoArticulo: persiste el cuerpo[] dentro de la
     columna jsonb `datos`, conservando el resto del artículo.
   ============================================================ */

export type ResultadoCuerpo = { ok: boolean; error?: string; mensaje?: string };
export type ResultadoSubida =
  | { ok: true; url: string }
  | { ok: false; error: string };

const MAX_BYTES = 6 * 1024 * 1024; // 6 MB

const DIACRITICOS = new RegExp('[\\u0300-\\u036f]', 'g');

function nombreSeguro(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(DIACRITICOS, '')
    .replace(/[^a-z0-9.]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}

export async function subirImagenBlog(
  fd: FormData,
): Promise<ResultadoSubida> {
  const slug = String(fd.get('slug') ?? '').trim();
  const archivo = fd.get('archivo');
  if (!slug) return { ok: false, error: 'Falta el slug del artículo.' };
  if (!(archivo instanceof File) || archivo.size === 0) {
    return { ok: false, error: 'No se recibió ningún archivo.' };
  }
  if (!archivo.type.startsWith('image/')) {
    return { ok: false, error: 'El archivo debe ser una imagen.' };
  }
  if (archivo.size > MAX_BYTES) {
    return { ok: false, error: 'La imagen supera el máximo de 6 MB.' };
  }

  const supabase = await crearClienteServidor();
  const ruta = `articulos/${slug}/${Date.now()}-${nombreSeguro(archivo.name || 'imagen.jpg')}`;
  const { error } = await supabase.storage
    .from('blog')
    .upload(ruta, archivo, {
      contentType: archivo.type,
      upsert: true,
    });
  if (error) return { ok: false, error: error.message };

  const { data } = supabase.storage.from('blog').getPublicUrl(ruta);
  if (!data?.publicUrl) {
    return { ok: false, error: 'No se pudo obtener la URL pública.' };
  }
  return { ok: true, url: data.publicUrl };
}

function esCuerpoValido(v: unknown): v is Bloque[] {
  if (!Array.isArray(v)) return false;
  return v.every(
    (b) =>
      b &&
      typeof b === 'object' &&
      typeof (b as { tipo?: unknown }).tipo === 'string',
  );
}

export async function guardarCuerpoArticulo(
  fd: FormData,
): Promise<ResultadoCuerpo> {
  const slug = String(fd.get('slug') ?? '').trim();
  const crudo = String(fd.get('cuerpo') ?? '');
  if (!slug) return { ok: false, error: 'Falta el slug del artículo.' };

  let cuerpo: unknown;
  try {
    cuerpo = JSON.parse(crudo);
  } catch {
    return { ok: false, error: 'Cuerpo con formato no válido.' };
  }
  if (!esCuerpoValido(cuerpo)) {
    return { ok: false, error: 'La estructura del cuerpo no es válida.' };
  }

  const supabase = await crearClienteServidor();
  const { data: actual, error: errLeer } = await supabase
    .from('articulos')
    .select('datos')
    .eq('slug', slug)
    .single();
  if (errLeer || !actual) {
    return { ok: false, error: errLeer?.message ?? 'Artículo no encontrado.' };
  }

  const datos: Articulo = {
    ...(actual.datos as Articulo),
    cuerpo: cuerpo as Bloque[],
  };

  const { error } = await supabase
    .from('articulos')
    .update({ datos, updated_at: new Date().toISOString() })
    .eq('slug', slug);
  if (error) return { ok: false, error: error.message };

  revalidatePath('/admin/blog');
  revalidatePath(`/admin/blog/${slug}`);
  revalidatePath('/blog');
  revalidatePath(`/blog/${slug}`);
  return { ok: true, mensaje: 'Contenido del artículo guardado.' };
}
