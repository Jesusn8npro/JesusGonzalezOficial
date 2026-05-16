// Captura de leads — punto único de envío.
// Postea al webhook (n8n) y, si Supabase está configurado, además
// guarda el lead en la base de datos (alimenta el panel /admin).

import { supabaseConfigurado } from './supabase/config';

const WEBHOOK_LEADS =
  process.env.NEXT_PUBLIC_WEBHOOK_LEADS ||
  'https://velostrategix-n8n.lnrubg.easypanel.host/webhook/whatsapp';

export interface Lead {
  nombreCompleto?: string;
  numeroWhatsapp?: string;
  tipoEvento?: string;
  fechaEvento?: string;
  ciudadEvento?: string;
  mensaje?: string;
  origen?: string; // p.ej. 'cotizador_rapido' | 'formulario_contacto'
}

/**
 * Envía el lead (best-effort, no bloquea la UX). Nunca lanza:
 * si falla el webhook, el flujo de WhatsApp debe continuar igual.
 */
export async function enviarLead(lead: Lead): Promise<void> {
  // 1) Webhook n8n (best-effort)
  try {
    await fetch(WEBHOOK_LEADS, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...lead,
        fechaRegistro: new Date().toISOString(),
      }),
      keepalive: true,
    });
  } catch {
    /* sin red / webhook caído: continuamos con WhatsApp igualmente */
  }

  // 2) Supabase (best-effort, solo navegador, si está configurado)
  if (supabaseConfigurado && typeof window !== 'undefined') {
    try {
      const { crearClienteNavegador } = await import('./supabase/cliente');
      await crearClienteNavegador()
        .from('leads')
        .insert({
          nombre: lead.nombreCompleto || null,
          whatsapp: lead.numeroWhatsapp || null,
          tipo_evento: lead.tipoEvento || null,
          ciudad: lead.ciudadEvento || null,
          fecha_evento: lead.fechaEvento ? lead.fechaEvento : null,
          mensaje: lead.mensaje || null,
          origen: lead.origen || null,
        });
    } catch {
      /* RLS/red: el lead ya salió por webhook, no bloqueamos al usuario */
    }
  }
}
