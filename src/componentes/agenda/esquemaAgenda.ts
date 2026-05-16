// Constructores JSON-LD (schema.org) para la agenda pública.
// Solo lectura sobre configuracion.ts; valores reales, sin input de usuario.
import { config } from '../../utilidades/configuracion';
import type { Evento } from '../../contenido/agenda';

const URL = config.siteUrl; // https://jesusgonzalez.com.co
const IMG = `${URL}/Imagenes/Jesus Gonzalez en concierto.jpg`;

/**
 * Un objeto Event (schema.org) por evento confirmado. El intérprete es
 * Jesús González como MusicGroup; el lugar se resuelve por ciudad.
 */
export function eventosSchema(eventos: Evento[]): Record<string, unknown>[] {
  return eventos
    .filter((e) => e.estado === 'confirmado')
    .map((e) => ({
      '@context': 'https://schema.org',
      '@type': 'MusicEvent',
      '@id': `${URL}/agenda#evento-${e.id}`,
      name: e.titulo,
      startDate: e.fecha,
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode:
        'https://schema.org/OfflineEventAttendanceMode',
      image: IMG,
      url: `${URL}/agenda`,
      description:
        e.notas ??
        `Presentación en vivo de Jesús González, acordeonista vallenato, en ${e.ciudad}.`,
      location: {
        '@type': 'Place',
        name: e.ciudad,
        address: {
          '@type': 'PostalAddress',
          addressLocality: e.ciudad,
          addressCountry: 'CO',
        },
      },
      performer: {
        '@type': 'MusicGroup',
        name: 'Jesús González',
        url: URL,
      },
      organizer: {
        '@type': 'Organization',
        name: config.siteName,
        url: URL,
      },
    }));
}
