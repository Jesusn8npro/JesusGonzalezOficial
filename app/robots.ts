import type { MetadataRoute } from 'next';

const SITIO = 'https://jesusgonzalez.com.co';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/'],
      },
    ],
    sitemap: `${SITIO}/sitemap.xml`,
    host: SITIO,
  };
}
