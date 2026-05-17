'use server';

import OpenAI from 'openai';
import { crearClienteServidor } from '../../../src/utilidades/supabase/servidor';
import {
  OPENAI_API_KEY,
  IA_MODELO,
  iaSeoDisponible,
} from '../../../src/utilidades/ia/config';
import type { Articulo, Bloque, Inline } from '../../../src/contenido/blog/tipos';

/* ============================================================
   Agente IA de SEO (OpenAI). Analiza un artículo completo y
   devuelve mejoras concretas. Degrada con elegancia: sin
   OPENAI_API_KEY el editor manual sigue funcionando; esto solo
   informa el motivo. El prompt de sistema es estático (se
   beneficia del prompt caching automático de OpenAI).
   ============================================================ */

export type SugerenciaSeo = {
  titulo: string;
  descripcion: string;
  resumen: string;
  claves: string[];
};

export type ResultadoSeo =
  | { ok: true; sugerencias: SugerenciaSeo; recomendaciones: string[] }
  | { ok: false; error: string };

const SISTEMA = `Eres un consultor SEO senior especializado en posicionar en Google Colombia a un acordeonista vallenato profesional (Jesús González) cuyo sitio es una máquina de captación de leads: el objetivo es que el visitante termine escribiendo por WhatsApp para contratar shows (bodas, eventos corporativos, parrandas, galas).

Analizas artículos de blog ya escritos y propones mejoras de SEO on-page accionables, en español de Colombia, sin relleno ni promesas vacías.

Criterios que aplicas:
- Título SEO: 50–60 caracteres, con la palabra clave principal al inicio, atractivo y con intención comercial local cuando aplique (ciudad/Colombia).
- Meta descripción: 150–160 caracteres, con beneficio claro + llamada a la acción implícita (contratar / cotizar), incluyendo la palabra clave.
- Resumen (entradilla): 1–2 frases que enganchen y refuercen la intención de contratación.
- Palabras clave: 4–8, mezcla de keyword principal, variantes long-tail y términos locales (vallenato, acordeonista, boda, evento, ciudad colombiana).
- Recomendaciones: lista priorizada de mejoras concretas sobre estructura (H2/H3), intención de búsqueda, enlazado interno, llamadas a la acción a WhatsApp, y oportunidades de palabras clave. Cada recomendación es una acción específica, no un consejo genérico.

Nunca inventes datos del artista. No prometas posiciones en Google. Conserva el idioma español. Devuelve SOLO el JSON pedido.`;

const ESQUEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    titulo: { type: 'string' },
    descripcion: { type: 'string' },
    resumen: { type: 'string' },
    claves: { type: 'array', items: { type: 'string' } },
    recomendaciones: { type: 'array', items: { type: 'string' } },
  },
  required: ['titulo', 'descripcion', 'resumen', 'claves', 'recomendaciones'],
} as const;

function inlineATexto(i: Inline): string {
  if (typeof i === 'string') return i;
  if ('fuerte' in i) return i.fuerte;
  return i.texto;
}

function bloquesATexto(cuerpo: Bloque[]): string {
  const out: string[] = [];
  for (const b of cuerpo) {
    if (b.tipo === 'h2') out.push(`\n## ${b.texto}`);
    else if (b.tipo === 'h3') out.push(`\n### ${b.texto}`);
    else if (b.tipo === 'parrafo')
      out.push(b.contenido.map(inlineATexto).join(''));
    else if (b.tipo === 'cita')
      out.push(`« ${b.texto} »${b.autor ? ` — ${b.autor}` : ''}`);
    else if (b.tipo === 'lista')
      out.push(
        b.items.map((it) => `- ${it.map(inlineATexto).join('')}`).join('\n'),
      );
    else if (b.tipo === 'imagen') out.push(`[imagen: ${b.alt}]`);
    else if (b.tipo === 'video') out.push(`[video: ${b.titulo}]`);
    else if (b.tipo === 'cta') out.push(`[CTA: ${b.texto}]`);
  }
  return out.join('\n').slice(0, 14000);
}

function esResultado(v: unknown): v is SugerenciaSeo & {
  recomendaciones: string[];
} {
  if (!v || typeof v !== 'object') return false;
  const o = v as Record<string, unknown>;
  return (
    typeof o.titulo === 'string' &&
    typeof o.descripcion === 'string' &&
    typeof o.resumen === 'string' &&
    Array.isArray(o.claves) &&
    Array.isArray(o.recomendaciones)
  );
}

export async function analizarSeoArticulo(
  slug: string,
): Promise<ResultadoSeo> {
  if (!slug) return { ok: false, error: 'Falta el slug del artículo.' };
  if (!iaSeoDisponible) {
    return {
      ok: false,
      error:
        'Falta OPENAI_API_KEY. Agrégala en .env.local (local) y en EasyPanel (producción) para activar el agente de SEO.',
    };
  }

  const supabase = await crearClienteServidor();
  const { data, error } = await supabase
    .from('articulos')
    .select('datos')
    .eq('slug', slug)
    .single();
  if (error || !data) {
    return { ok: false, error: error?.message ?? 'Artículo no encontrado.' };
  }

  const a = data.datos as Articulo;
  const articulo = [
    `Título SEO actual: ${a.titulo}`,
    `H1: ${a.h1}`,
    `Meta descripción actual: ${a.descripcion}`,
    `Resumen actual: ${a.resumen}`,
    `Categoría: ${a.categoria}`,
    `Palabras clave actuales: ${(a.claves ?? []).join(', ')}`,
    '',
    'Cuerpo del artículo:',
    bloquesATexto(a.cuerpo ?? []),
  ].join('\n');

  try {
    const client = new OpenAI({ apiKey: OPENAI_API_KEY });
    const res = await client.chat.completions.create({
      model: IA_MODELO,
      max_tokens: 4000,
      messages: [
        { role: 'system', content: SISTEMA },
        {
          role: 'user',
          content: `Analiza este artículo y devuelve el JSON con las mejoras:\n\n${articulo}`,
        },
      ],
      response_format: {
        type: 'json_schema',
        json_schema: { name: 'mejoras_seo', strict: true, schema: ESQUEMA },
      },
    });

    const texto = res.choices[0]?.message?.content;
    if (!texto) {
      return { ok: false, error: 'La IA no devolvió contenido analizable.' };
    }

    let parseado: unknown;
    try {
      parseado = JSON.parse(texto);
    } catch {
      return { ok: false, error: 'La IA devolvió un formato no válido.' };
    }
    if (!esResultado(parseado)) {
      return { ok: false, error: 'La respuesta de la IA está incompleta.' };
    }

    return {
      ok: true,
      sugerencias: {
        titulo: parseado.titulo,
        descripcion: parseado.descripcion,
        resumen: parseado.resumen,
        claves: parseado.claves.filter((c): c is string => typeof c === 'string'),
      },
      recomendaciones: parseado.recomendaciones.filter(
        (r): r is string => typeof r === 'string',
      ),
    };
  } catch (e) {
    if (e instanceof OpenAI.AuthenticationError) {
      return { ok: false, error: 'OPENAI_API_KEY inválida o revocada.' };
    }
    if (e instanceof OpenAI.RateLimitError) {
      return {
        ok: false,
        error: 'Límite de uso o saldo agotado. Revisa tu cuenta de OpenAI.',
      };
    }
    if (e instanceof OpenAI.APIError) {
      return { ok: false, error: `Error de la API (${e.status}). Reintenta luego.` };
    }
    return { ok: false, error: 'No se pudo completar el análisis de SEO.' };
  }
}
