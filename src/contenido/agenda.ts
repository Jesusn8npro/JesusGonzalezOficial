// Fuente de datos de la agenda: Supabase como origen, con FALLBACK seguro.
// Si la BD está vacía, mal configurada o caída, la página NUNCA se rompe:
// simplemente devuelve [] y el componente muestra un estado de conversión.
// Cliente anónimo sin cookies => la página sigue siendo cacheable (ISR).

import { createClient } from '@supabase/supabase-js';
import {
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  supabaseConfigurado,
} from '../utilidades/supabase/config';

export type EstadoEvento = 'confirmado' | 'tentativo' | 'bloqueado';

export interface Evento {
  id: string;
  titulo: string;
  ciudad: string;
  /** ISO date (YYYY-MM-DD). */
  fecha: string;
  estado: EstadoEvento;
  notas: string | null;
  creado_at: string | null;
  updated_at: string | null;
}

/** Fecha de hoy en formato YYYY-MM-DD (zona del servidor). */
function hoyISO(): string {
  return new Date().toISOString().slice(0, 10);
}

/**
 * Próximos eventos públicos: solo 'confirmado'/'tentativo' y fecha >= hoy,
 * ordenados por fecha ascendente. Ante cualquier problema => [] (sin crash).
 */
export async function proximosEventos(): Promise<Evento[]> {
  if (!supabaseConfigurado) return [];
  try {
    const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: { persistSession: false },
    });
    const { data, error } = await sb
      .from('eventos')
      .select('id, titulo, ciudad, fecha, estado, notas, creado_at, updated_at')
      .in('estado', ['confirmado', 'tentativo'])
      .gte('fecha', hoyISO())
      .order('fecha', { ascending: true });
    if (error || !data || data.length === 0) return [];
    return data as Evento[];
  } catch {
    return [];
  }
}
