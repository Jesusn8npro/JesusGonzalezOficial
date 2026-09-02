// Constructores de objetos JSON-LD (schema.org) a partir de valores reales.
// Importa configuracion.ts en modo solo-lectura.
import { config } from '../../utilidades/configuracion';

const URL = config.siteUrl; // https://jesusgonzalez.com.co
const TELEFONO = '+573222312413';
const IMG_PRINCIPAL = `${URL}/Imagenes/Jesus Gonzalez en concierto.jpg`;
const LOGO = `${URL}/Imagenes/Logo Jesus Gonzalez.png`;

const REDES = [
  config.socialMedia.youtube,
  config.socialMedia.instagram,
  config.socialMedia.facebook,
  config.socialMedia.tiktok,
];

const CIUDADES_PRINCIPALES = [
  'Bogotá',
  'Medellín',
  'Cali',
  'Barranquilla',
  'Cartagena',
];

/** Identidad del artista como agrupación musical. */
export function musicGroupSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    '@id': `${URL}/#musicgroup`,
    name: 'Jesús González',
    alternateName: 'Jesús González Acordeonista',
    genre: 'Vallenato',
    url: URL,
    image: IMG_PRINCIPAL,
    logo: LOGO,
    description:
      'Acordeonista y maestro del vallenato en Colombia. Espectáculos en vivo para bodas, eventos corporativos, parrandas y galas.',
    sameAs: REDES,
  };
}

/** Negocio / servicio profesional con cobertura nacional. */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${URL}/#business`,
    name: config.siteName,
    image: IMG_PRINCIPAL,
    logo: LOGO,
    url: URL,
    telephone: TELEFONO,
    email: config.email,
    priceRange: '$$$',
    description:
      'Contratación de Jesús González, acordeonista vallenato profesional, para bodas, eventos corporativos, parrandas y galas en las principales ciudades de Colombia.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CO',
      addressRegion: 'Colombia',
    },
    areaServed: CIUDADES_PRINCIPALES.map((ciudad) => ({
      '@type': 'City',
      name: ciudad,
    })),
    sameAs: REDES,
  };
}

interface OpcionPaquete {
  nombre: string;
  descripcion: string;
}

/** Catálogo de los 3 paquetes de show. */
export function offerCatalogSchema(paquetes: OpcionPaquete[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${URL}/contrataciones#servicio`,
    serviceType: 'Show de acordeón vallenato en vivo',
    name: 'Contratación de Jesús González — Shows de vallenato',
    provider: { '@id': `${URL}/#business` },
    areaServed: CIUDADES_PRINCIPALES.map((ciudad) => ({
      '@type': 'City',
      name: ciudad,
    })),
    url: `${URL}/contrataciones`,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Formatos de show disponibles',
      itemListElement: paquetes.map((p) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: p.nombre,
          description: p.descripcion,
        },
        priceCurrency: 'COP',
        availability: 'https://schema.org/InStock',
      })),
    },
  };
}

interface Testimonio {
  nombre: string;
  comentario: string;
  calificacion: number;
}

/** Reseñas + valoración agregada a partir de testimonios reales. */
export function reviewsSchema(testimonios: Testimonio[]) {
  const valores = testimonios.map((t) => t.calificacion);
  const promedio =
    valores.reduce((a, b) => a + b, 0) / (valores.length || 1);
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${URL}/contrataciones#shows`,
    name: 'Show de vallenato en vivo con Jesús González',
    image: IMG_PRINCIPAL,
    description:
      'Espectáculo de acordeón vallenato profesional para bodas, eventos corporativos y celebraciones privadas en Colombia.',
    brand: { '@type': 'Brand', name: 'Jesús González' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: promedio.toFixed(1),
      reviewCount: testimonios.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: testimonios.map((t) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: t.nombre },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: t.calificacion,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: t.comentario,
    })),
  };
}

export interface QA {
  pregunta: string;
  respuesta: string;
}

/** FAQPage a partir de un arreglo de preguntas/respuestas. */
export function faqSchema(preguntas: QA[], idSufijo = '') {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${URL}/${idSufijo}#faq`,
    mainEntity: preguntas.map((q) => ({
      '@type': 'Question',
      name: q.pregunta,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.respuesta,
      },
    })),
  };
}

interface Miga {
  nombre: string;
  url: string;
}

/** BreadcrumbList. */
export function breadcrumbSchema(migas: Miga[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: migas.map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: m.nombre,
      item: m.url.startsWith('http') ? m.url : `${URL}${m.url}`,
    })),
  };
}

/** Service + LocalBusiness con cobertura de una ciudad concreta (landing). */
export function landingServiceSchema(opts: {
  slug: string;
  nombreServicio: string;
  ciudad: string;
  descripcion: string;
}) {
  const pageUrl = `${URL}/${opts.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#servicio`,
    serviceType: opts.nombreServicio,
    name: `${opts.nombreServicio} en ${opts.ciudad}`,
    description: opts.descripcion,
    url: pageUrl,
    areaServed: { '@type': 'City', name: opts.ciudad },
    provider: {
      '@type': 'ProfessionalService',
      name: config.siteName,
      telephone: TELEFONO,
      email: config.email,
      url: URL,
      image: IMG_PRINCIPAL,
      priceRange: '$$$',
      areaServed: { '@type': 'City', name: opts.ciudad },
      sameAs: REDES,
    },
  };
}
