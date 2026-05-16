// Constructores JSON-LD propios del blog (schema.org). Lee config en
// solo-lectura. No toca src/componentes/seo/esquemas.ts (propiedad de otro).
import { config } from '../../utilidades/configuracion';
import type { ArticuloMeta } from '../../contenido/blog/tipos';

const URL = config.siteUrl;
const LOGO = `${URL}/Imagenes/Logo Jesus Gonzalez.png`;

function abs(ruta: string): string {
  return ruta.startsWith('http') ? ruta : `${URL}${ruta}`;
}

/** Schema Article para un post del blog. */
export function articleSchema(a: ArticuloMeta) {
  const urlArticulo = `${URL}/blog/${a.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${urlArticulo}#article`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': urlArticulo },
    headline: a.h1,
    description: a.descripcion,
    image: [abs(encodeURI(a.portada))],
    datePublished: a.fecha,
    dateModified: a.actualizado ?? a.fecha,
    inLanguage: 'es-CO',
    articleSection: a.categoria,
    keywords: a.claves.join(', '),
    author: {
      '@type': 'Person',
      name: 'Jesús González',
      url: URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Jesús González',
      logo: { '@type': 'ImageObject', url: LOGO },
    },
  };
}

interface Miga {
  nombre: string;
  url: string;
}

/** BreadcrumbList genérico para el blog. */
export function breadcrumbBlogSchema(migas: Miga[]) {
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

/** Blog (CollectionPage) para el listado. */
export function blogListSchema(items: ArticuloMeta[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${URL}/blog#blog`,
    name: 'Blog de Jesús González — Vallenato para bodas y eventos',
    description:
      'Guías y consejos sobre vallenato en vivo para bodas, eventos corporativos y parrandas en Colombia.',
    url: `${URL}/blog`,
    inLanguage: 'es-CO',
    blogPost: items.map((a) => ({
      '@type': 'BlogPosting',
      headline: a.h1,
      url: `${URL}/blog/${a.slug}`,
      datePublished: a.fecha,
      image: abs(encodeURI(a.portada)),
    })),
  };
}
