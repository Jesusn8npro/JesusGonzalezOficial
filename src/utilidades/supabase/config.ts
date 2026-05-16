// Configuración Supabase leída de variables de entorno.
// Si faltan, el sitio público sigue funcionando igual (degradación elegante);
// solo el panel /admin mostrará un aviso de "conecta Supabase".

export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';
/** Email autorizado para el panel admin (solo servidor). */
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? '';

export const supabaseConfigurado = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
