import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import JsonLd from '../../../src/componentes/seo/JsonLd';
import {
  ARTICULOS,
  buscarArticulo,
  relacionados,
} from '../../../src/contenido/blog/indice';
import BarraProgreso from '../../../src/componentes/blog/BarraProgreso';
import EncabezadoArticulo from '../../../src/componentes/blog/EncabezadoArticulo';
import CuerpoArticulo from '../../../src/componentes/blog/CuerpoArticulo';
import TocResponsive from '../../../src/componentes/blog/TocResponsive';
import TarjetaAutor from '../../../src/componentes/blog/TarjetaAutor';
import TarjetaCta from '../../../src/componentes/blog/TarjetaCta';
import ListaPopulares from '../../../src/componentes/blog/ListaPopulares';
import {
  articleSchema,
  breadcrumbBlogSchema,
} from '../../../src/componentes/blog/esquemasBlog';

// Prerender estático: solo los slugs definidos. Sin fallback dinámico.
export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICULOS.map((a) => ({ slug: a.slug }));
}

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: Params): Promise<Metadata> {
  const { slug } = await params;
  const a = buscarArticulo(slug);
  if (!a) return {};
  const url = `/blog/${a.slug}`;
  return {
    title: a.titulo,
    description: a.descripcion,
    keywords: a.claves,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: a.titulo,
      description: a.descripcion,
      url,
      images: [a.portada],
      publishedTime: a.fecha,
      modifiedTime: a.actualizado ?? a.fecha,
    },
    twitter: {
      card: 'summary_large_image',
      title: a.titulo,
      description: a.descripcion,
      images: [a.portada],
    },
  };
}

export default async function ArticuloPage({ params }: Params) {
  const { slug } = await params;
  const a = buscarArticulo(slug);
  if (!a) notFound();

  const relac = relacionados(a.slug, 3);

  return (
    <>
      <JsonLd id="ld-blog-article" data={articleSchema(a)} />
      <JsonLd
        id="ld-blog-article-breadcrumb"
        data={breadcrumbBlogSchema([
          { nombre: 'Inicio', url: '/' },
          { nombre: 'Blog', url: '/blog' },
          { nombre: a.h1, url: `/blog/${a.slug}` },
        ])}
      />

      <BarraProgreso />

      <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_minmax(0,1fr)_280px]">
          {/* Izquierda — TOC sticky (escritorio) / colapsable (móvil) */}
          <aside className="order-2 lg:order-1">
            <TocResponsive cuerpo={a.cuerpo} />
          </aside>

          {/* Centro — cuerpo del artículo */}
          <article className="order-1 min-w-0 lg:order-2">
            <EncabezadoArticulo articulo={a} />
            <div id="articulo-cuerpo">
              <CuerpoArticulo cuerpo={a.cuerpo} />
            </div>
          </article>

          {/* Derecha — autor, relacionados, CTA */}
          <aside className="order-3 space-y-6">
            <div className="space-y-6 lg:sticky lg:top-28">
              <TarjetaAutor />
              <ListaPopulares
                articulos={relac}
                titulo="Sigue leyendo"
              />
              <TarjetaCta />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
