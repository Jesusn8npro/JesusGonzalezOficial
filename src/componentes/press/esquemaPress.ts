// JSON-LD propio del Press Kit / EPK. NO edita src/componentes/seo/esquemas.ts.
// Genera un Person (artista) que es miembro de un MusicGroup, a partir de
// valores reales de configuracion.ts y datosPress.ts.
import { config } from '../../utilidades/configuracion';
import { datosPress } from './datosPress';

const URL = config.siteUrl; // https://jesusgonzalez.com.co
const TELEFONO = '+573222312413';
const PRESS_URL = `${URL}/press`;
const IMG = `${URL}${datosPress.fotoHero.src}`;
const LOGO = `${URL}/Imagenes/Logo Jesus Gonzalez.png`;

const REDES = [
  config.socialMedia.youtube,
  config.socialMedia.instagram,
  config.socialMedia.facebook,
  config.socialMedia.tiktok,
];

/**
 * Person (el artista) + MusicGroup (la banda que dirige) para el EPK.
 * Se devuelve como arreglo => el componente <JsonLd> lo serializa como
 * varios nodos schema.org en un solo <script>.
 */
export function pressSchema(): Record<string, unknown>[] {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${URL}/#persona`,
    name: datosPress.nombre,
    jobTitle: 'Acordeonista y director artístico vallenato',
    description: datosPress.bioCorta,
    image: IMG,
    url: PRESS_URL,
    sameAs: REDES,
    nationality: { '@type': 'Country', name: 'Colombia' },
    knowsAbout: ['Vallenato', 'Acordeón', 'Dirección artística musical'],
    memberOf: { '@id': `${URL}/#musicgroup` },
  };

  const musicGroup = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    '@id': `${URL}/#musicgroup`,
    name: datosPress.nombre,
    alternateName: 'Jesús González Acordeonista',
    genre: 'Vallenato',
    url: PRESS_URL,
    image: IMG,
    logo: LOGO,
    description:
      'Banda profesional de vallenato de 6 a 9 músicos dirigida por Jesús González, para bodas, eventos corporativos, galas y producciones privadas en Colombia.',
    sameAs: REDES,
    member: { '@id': `${URL}/#persona` },
    track: datosPress.videos.map((v) => ({
      '@type': 'VideoObject',
      name: v.titulo,
      embedUrl: `https://www.youtube-nocookie.com/embed/${v.id}`,
      thumbnailUrl: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
    })),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Contrataciones',
      telephone: TELEFONO,
      email: config.email,
      areaServed: 'CO',
    },
  };

  return [person, musicGroup];
}
