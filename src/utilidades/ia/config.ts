// Configuración del agente IA de SEO leída de variables de entorno.
// Solo servidor. Si falta la API key, el editor manual sigue funcionando
// igual; solo el botón "Mejorar SEO con IA" queda deshabilitado.

export const OPENAI_API_KEY = process.env.OPENAI_API_KEY ?? '';

// Modelo configurable. Por defecto gpt-4o-mini (barato y capaz para
// análisis SEO bajo demanda).
export const IA_MODELO = process.env.OPENAI_MODEL ?? 'gpt-4o-mini';

export const iaSeoDisponible = Boolean(OPENAI_API_KEY);
