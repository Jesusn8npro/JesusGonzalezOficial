'use client';

import { createBrowserClient } from '@supabase/ssr';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './config';

/** Cliente Supabase para el navegador (componentes cliente). */
export function crearClienteNavegador() {
  return createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
