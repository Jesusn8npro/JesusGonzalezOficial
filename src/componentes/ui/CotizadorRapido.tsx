'use client';

import React, { useState } from 'react';
import { abrirWhatsApp } from '../../utilidades/whatsapp';
import { enviarLead } from '../../utilidades/leads';

const EVENTOS = [
  'Boda',
  'Evento corporativo',
  'Parranda vallenata',
  'Serenata',
  'Cumpleaños',
  'Otro',
];

interface Props {
  /** Nombre del evento de tracking. */
  evento?: string;
  /** Título mostrado encima del formulario. */
  titulo?: string;
  className?: string;
}

/**
 * Cotizador rápido: captura datos reales del usuario (lead) y abre
 * WhatsApp con el mensaje ya armado. Baja fricción, alta conversión.
 * Tokens del sistema de diseño => funciona en modo claro y oscuro.
 */
const CotizadorRapido: React.FC<Props> = ({
  evento = 'Cotizador_Rapido',
  titulo = 'Cotiza tu evento en 30 segundos',
  className = '',
}) => {
  const [datos, setDatos] = useState({
    nombre: '',
    tipo: '',
    ciudad: '',
    fecha: '',
  });
  const [enviando, setEnviando] = useState(false);

  const set = (k: keyof typeof datos, v: string) =>
    setDatos((d) => ({ ...d, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);

    const fechaTxt = datos.fecha
      ? new Date(datos.fecha).toLocaleDateString('es-CO', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })
      : 'por confirmar';

    const mensaje =
      `¡Hola Jesús! Soy ${datos.nombre || 'un interesado'}. ` +
      `Quiero cotizar ${datos.tipo || 'un show vallenato'} ` +
      `en ${datos.ciudad || 'mi ciudad'} para el ${fechaTxt}. ` +
      `¿Me confirmas disponibilidad y la propuesta, por favor?`;

    await enviarLead({
      nombreCompleto: datos.nombre,
      tipoEvento: datos.tipo,
      ciudadEvento: datos.ciudad,
      fechaEvento: datos.fecha,
      mensaje,
      origen: 'cotizador_rapido',
    });

    abrirWhatsApp(mensaje, evento);
    setEnviando(false);
  };

  const campo =
    'w-full rounded-[var(--radius-sello)] border border-[color:var(--linea-fuerte)] bg-[color:var(--color-tinta-3)] px-4 py-3 text-hueso placeholder:text-hueso-tenue outline-none transition-colors duration-200 focus:border-oro';

  return (
    <form
      onSubmit={onSubmit}
      className={`rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-[color:var(--color-tinta-2)] p-6 shadow-[var(--shadow-suave)] sm:p-8 ${className}`}
    >
      <p className="kicker mb-2">Respuesta personal por WhatsApp</p>
      <h3 className="mb-5 font-display text-2xl font-semibold text-hueso sm:text-[1.7rem]">
        {titulo}
      </h3>

      <div className="grid gap-3 sm:grid-cols-2">
        <input
          aria-label="Tu nombre"
          className={campo}
          placeholder="Tu nombre"
          value={datos.nombre}
          onChange={(e) => set('nombre', e.target.value)}
          required
        />
        <select
          aria-label="Tipo de evento"
          className={`${campo} ${datos.tipo ? '' : 'text-hueso-tenue'}`}
          value={datos.tipo}
          onChange={(e) => set('tipo', e.target.value)}
          required
        >
          <option value="">Tipo de evento</option>
          {EVENTOS.map((ev) => (
            <option key={ev} value={ev} className="text-[#241c12]">
              {ev}
            </option>
          ))}
        </select>
        <input
          aria-label="Ciudad del evento"
          className={campo}
          placeholder="Ciudad del evento"
          value={datos.ciudad}
          onChange={(e) => set('ciudad', e.target.value)}
          required
        />
        <input
          aria-label="Fecha tentativa"
          type="date"
          className={`${campo} ${datos.fecha ? '' : 'text-hueso-tenue'}`}
          value={datos.fecha}
          onChange={(e) => set('fecha', e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        disabled={enviando}
        className="mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-[var(--radius-sello)] bg-whatsapp px-6 py-4 font-sans text-[1.02rem] font-semibold tracking-tight text-[#04210f] shadow-[0_18px_44px_-22px_rgba(37,211,102,0.7)] transition-[transform,background-color] duration-300 ease-[var(--ease-salida)] hover:bg-[color:var(--color-whatsapp-hondo)] hover:text-hueso active:scale-[0.985] disabled:opacity-70"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.898 9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
        </svg>
        {enviando ? 'Abriendo WhatsApp…' : 'Cotizar ahora por WhatsApp'}
      </button>
      <p className="mt-3 text-center text-sm text-hueso-tenue">
        Sin compromiso · te respondo personalmente
      </p>
    </form>
  );
};

export default CotizadorRapido;
