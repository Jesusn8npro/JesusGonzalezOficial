import type { MetadataRoute } from 'next';
import { LANDINGS } from '../src/componentes/seo/datosLanding';
import { ARTICULOS } from '../src/contenido/blog/indice';

const SITIO = 'https://jesusgonzalez.com.co';

export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date();

  const fijas: MetadataRoute.Sitemap = [
    {
      url: `${SITIO}/`,
      lastModified: ahora,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITIO}/contrataciones`,
      lastModified: ahora,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITIO}/agenda`,
      lastModified: ahora,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITIO}/videos`,
      lastModified: ahora,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITIO}/contacto`,
      lastModified: ahora,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITIO}/link-in-bio`,
      lastModified: ahora,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${SITIO}/blog`,
      lastModified: ahora,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITIO}/repertorio`,
      lastModified: ahora,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITIO}/press`,
      lastModified: ahora,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITIO}/preguntas-frecuentes`,
      lastModified: ahora,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  const blog: MetadataRoute.Sitemap = ARTICULOS.map((a) => ({
    url: `${SITIO}/blog/${a.slug}`,
    lastModified: new Date(a.actualizado ?? a.fecha),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const landings: MetadataRoute.Sitemap = LANDINGS.map((l) => ({
    url: `${SITIO}/${l.slug}`,
    lastModified: ahora,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...fijas, ...landings, ...blog];
}
