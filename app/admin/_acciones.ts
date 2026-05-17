'use server';

import { revalidatePath } from 'next/cache';
import { crearClienteServidor } from '../../src/utilidades/supabase/servidor';
import { ARTICULOS } from '../../src/contenido/blog/indice';
import type { Articulo } from '../../src/contenido/blog/tipos';

/* ============================================================
   Server Actions del panel admin. Todas usan el cliente de
   servidor (sesión por cookies, RLS de admin = acceso total).
   Nunca lanzan crudo al usuario: devuelven { ok, error?, ... }.
   ============================================================ */

export type Resultado = { ok: boolean; error?: string; mensaje?: string };

type Validado<T> = { error: string } | { fila: T };

const ok = (mensaje?: string): Resultado => ({ ok: true, mensaje });
const fallo = (error: string): Resultado => ({ ok: false, error });

function texto(fd: FormData, clave: string): string {
  return String(fd.get(clave) ?? '').trim();
}

/** Slug seguro a partir de un título. */
function aSlug(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 90);
}

/* ----------------------------- LEADS ----------------------------- */

const ESTADOS_LEAD = ['nuevo', 'contactado', 'cotizado', 'cerrado', 'perdido'];

export async function actualizarLead(fd: FormData): Promise<Resultado> {
  const id = texto(fd, 'id');
  const estado = texto(fd, 'estado');
  if (!id) return fallo('Falta el identificador del lead.');
  if (!ESTADOS_LEAD.includes(estado)) return fallo('Estado no válido.');

  const supabase = await crearClienteServidor();
  const { error } = await supabase
    .from('leads')
    .update({ estado, mensaje: texto(fd, 'mensaje') || null })
    .eq('id', id);

  if (error) return fallo(error.message);
  revalidatePath('/admin/leads');
  revalidatePath('/admin');
  return ok('Lead actualizado.');
}

/* ---------------------------- AGENDA ----------------------------- */

const ESTADOS_EVENTO = ['confirmado', 'tentativo', 'bloqueado'];

type FilaEvento = {
  titulo: string;
  ciudad: string | null;
  fecha: string;
  estado: string;
  notas: string | null;
};

function leerEvento(fd: FormData): Validado<FilaEvento> {
  const titulo = texto(fd, 'titulo');
  const fecha = texto(fd, 'fecha');
  const estado = texto(fd, 'estado');
  if (!titulo) return { error: 'El título es obligatorio.' };
  if (!fecha) return { error: 'La fecha es obligatoria.' };
  if (!ESTADOS_EVENTO.includes(estado))
    return { error: 'Estado no válido.' };
  return {
    fila: {
      titulo,
      ciudad: texto(fd, 'ciudad') || null,
      fecha,
      estado,
      notas: texto(fd, 'notas') || null,
    },
  };
}

export async function crearEvento(fd: FormData): Promise<Resultado> {
  const r = leerEvento(fd);
  if ('error' in r) return fallo(r.error);
  const supabase = await crearClienteServidor();
  const { error } = await supabase.from('eventos').insert(r.fila);
  if (error) return fallo(error.message);
  revalidatePath('/admin/agenda');
  return ok('Evento creado.');
}

export async function actualizarEvento(fd: FormData): Promise<Resultado> {
  const id = texto(fd, 'id');
  if (!id) return fallo('Falta el identificador del evento.');
  const r = leerEvento(fd);
  if ('error' in r) return fallo(r.error);
  const supabase = await crearClienteServidor();
  const { error } = await supabase
    .from('eventos')
    .update({ ...r.fila, updated_at: new Date().toISOString() })
    .eq('id', id);
  if (error) return fallo(error.message);
  revalidatePath('/admin/agenda');
  return ok('Evento actualizado.');
}

export async function eliminarEvento(fd: FormData): Promise<Resultado> {
  const id = texto(fd, 'id');
  if (!id) return fallo('Falta el identificador del evento.');
  const supabase = await crearClienteServidor();
  const { error } = await supabase.from('eventos').delete().eq('id', id);
  if (error) return fallo(error.message);
  revalidatePath('/admin/agenda');
  return ok('Evento eliminado.');
}

/* --------------------------- NOVEDADES --------------------------- */

type FilaNovedad = {
  titulo: string;
  slug: string;
  contenido: string | null;
  imagen: string | null;
  fecha: string | null;
  publicado: boolean;
};

function leerNovedad(fd: FormData): Validado<FilaNovedad> {
  const titulo = texto(fd, 'titulo');
  if (!titulo) return { error: 'El título es obligatorio.' };
  const slug = aSlug(texto(fd, 'slug') || titulo);
  if (!slug) return { error: 'No se pudo generar un slug válido.' };
  return {
    fila: {
      titulo,
      slug,
      contenido: texto(fd, 'contenido') || null,
      imagen: texto(fd, 'imagen') || null,
      fecha: texto(fd, 'fecha') || null,
      publicado: fd.get('publicado') === 'on',
    },
  };
}

export async function crearNovedad(fd: FormData): Promise<Resultado> {
  const r = leerNovedad(fd);
  if ('error' in r) return fallo(r.error);
  const supabase = await crearClienteServidor();
  const { error } = await supabase.from('novedades').insert(r.fila);
  if (error) return fallo(error.message);
  revalidatePath('/admin/novedades');
  return ok('Novedad creada.');
}

export async function actualizarNovedad(fd: FormData): Promise<Resultado> {
  const id = texto(fd, 'id');
  if (!id) return fallo('Falta el identificador de la novedad.');
  const r = leerNovedad(fd);
  if ('error' in r) return fallo(r.error);
  const supabase = await crearClienteServidor();
  const { error } = await supabase
    .from('novedades')
    .update({ ...r.fila, updated_at: new Date().toISOString() })
    .eq('id', id);
  if (error) return fallo(error.message);
  revalidatePath('/admin/novedades');
  return ok('Novedad actualizada.');
}

export async function eliminarNovedad(fd: FormData): Promise<Resultado> {
  const id = texto(fd, 'id');
  if (!id) return fallo('Falta el identificador de la novedad.');
  const supabase = await crearClienteServidor();
  const { error } = await supabase.from('novedades').delete().eq('id', id);
  if (error) return fallo(error.message);
  revalidatePath('/admin/novedades');
  return ok('Novedad eliminada.');
}

export async function alternarNovedad(fd: FormData): Promise<Resultado> {
  const id = texto(fd, 'id');
  if (!id) return fallo('Falta el identificador de la novedad.');
  const supabase = await crearClienteServidor();
  const { error } = await supabase
    .from('novedades')
    .update({
      publicado: fd.get('publicado') === 'true',
      updated_at: new Date().toISOString(),
    })
    .eq('id', id);
  if (error) return fallo(error.message);
  revalidatePath('/admin/novedades');
  return ok();
}

/* ----------------------------- BLOG ------------------------------ */

export async function alternarArticulo(fd: FormData): Promise<Resultado> {
  const slug = texto(fd, 'slug');
  if (!slug) return fallo('Falta el slug del artículo.');
  const supabase = await crearClienteServidor();
  const { error } = await supabase
    .from('articulos')
    .update({
      publicado: fd.get('publicado') === 'true',
      updated_at: new Date().toISOString(),
    })
    .eq('slug', slug);
  if (error) return fallo(error.message);
  revalidatePath('/admin/blog');
  return ok();
}

export async function actualizarOrdenArticulo(
  fd: FormData,
): Promise<Resultado> {
  const slug = texto(fd, 'slug');
  if (!slug) return fallo('Falta el slug del artículo.');
  const orden = Number.parseInt(texto(fd, 'orden'), 10);
  if (!Number.isFinite(orden)) return fallo('El orden debe ser un número.');
  const supabase = await crearClienteServidor();
  const { error } = await supabase
    .from('articulos')
    .update({ orden, updated_at: new Date().toISOString() })
    .eq('slug', slug);
  if (error) return fallo(error.message);
  revalidatePath('/admin/blog');
  return ok('Orden actualizado.');
}

export async function eliminarArticulo(fd: FormData): Promise<Resultado> {
  const slug = texto(fd, 'slug');
  if (!slug) return fallo('Falta el slug del artículo.');
  const supabase = await crearClienteServidor();
  const { error } = await supabase
    .from('articulos')
    .delete()
    .eq('slug', slug);
  if (error) return fallo(error.message);
  revalidatePath('/admin/blog');
  return ok('Artículo eliminado.');
}

/**
 * Edita el SEO y los metadatos clave de un artículo. El cuerpo y los
 * relacionados se conservan tal cual (se gestionan en código). Mantiene
 * sincronizadas las columnas espejo usadas por listados/consultas.
 */
export async function actualizarArticulo(fd: FormData): Promise<Resultado> {
  const slug = texto(fd, 'slug');
  if (!slug) return fallo('Falta el slug del artículo.');
  const titulo = texto(fd, 'titulo');
  const h1 = texto(fd, 'h1');
  const fecha = texto(fd, 'fecha');
  if (!titulo) return fallo('El título SEO es obligatorio.');
  if (!h1) return fallo('El H1 es obligatorio.');
  if (!fecha) return fallo('La fecha es obligatoria.');

  const supabase = await crearClienteServidor();
  const { data: actual, error: errLeer } = await supabase
    .from('articulos')
    .select('datos')
    .eq('slug', slug)
    .single();
  if (errLeer || !actual) {
    return fallo(errLeer?.message ?? 'No se encontró el artículo.');
  }

  const claves = texto(fd, 'claves')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  const actualizado = texto(fd, 'actualizado') || undefined;

  const datos: Articulo = {
    ...(actual.datos as Articulo),
    titulo,
    h1,
    descripcion: texto(fd, 'descripcion'),
    resumen: texto(fd, 'resumen'),
    categoria: texto(fd, 'categoria'),
    fecha,
    portada: texto(fd, 'portada'),
    portadaAlt: texto(fd, 'portadaAlt'),
    claves,
    ...(actualizado ? { actualizado } : {}),
  };

  const { error } = await supabase
    .from('articulos')
    .update({
      titulo,
      categoria: texto(fd, 'categoria') || null,
      fecha,
      actualizado: actualizado ?? fecha,
      datos,
      updated_at: new Date().toISOString(),
    })
    .eq('slug', slug);
  if (error) return fallo(error.message);

  revalidatePath('/admin/blog');
  revalidatePath(`/admin/blog/${slug}`);
  revalidatePath('/blog');
  revalidatePath(`/blog/${slug}`);
  return ok('Artículo actualizado.');
}

/**
 * Sincroniza los artículos estáticos (src/contenido/blog) hacia la tabla
 * `articulos` de Supabase. Idempotente: upsert con conflicto en `slug`.
 * Guarda el objeto Articulo completo en la columna jsonb `datos`.
 */
export async function sincronizarArticulos(): Promise<Resultado> {
  const supabase = await crearClienteServidor();
  const filas = ARTICULOS.map((a, i) => ({
    slug: a.slug,
    titulo: a.titulo,
    categoria: a.categoria,
    fecha: a.fecha,
    actualizado: a.actualizado ?? a.fecha,
    publicado: true,
    orden: i,
    datos: a,
    updated_at: new Date().toISOString(),
  }));

  const { error, count } = await supabase
    .from('articulos')
    .upsert(filas, { onConflict: 'slug', count: 'exact' });

  if (error) return fallo(error.message);
  revalidatePath('/admin/blog');
  return ok(
    `${count ?? filas.length} artículo(s) sincronizado(s) correctamente.`,
  );
}
