import type { Metadata } from 'next';
import JsonLd from '../../src/componentes/seo/JsonLd';
import Revelar from '../../src/componentes/ui/Revelar';
import {
  listarArticulos,
  categoriasBlog,
  articulosPopulares,
} from '../../src/contenido/blog/fuente';
import TarjetaArticulo from '../../src/componentes/blog/TarjetaArticulo';
import NavCategorias from '../../src/componentes/blog/NavCategorias';
import TarjetaAutor from '../../src/componentes/blog/TarjetaAutor';
import TarjetaCta from '../../src/componentes/blog/TarjetaCta';
import ListaPopulares from '../../src/componentes/blog/ListaPopulares';
import {
  blogListSchema,
  breadcrumbBlogSchema,
} from '../../src/componentes/blog/esquemasBlog';

const TITULO = 'Blog de Vallenato para Bodas y Eventos | Jesús González';
const DESCRIPCION =
  'Guías y consejos sobre vallenato en vivo: cuánto cuesta un acordeonista, repertorio para bodas, parrandas y eventos corporativos en Colombia.';

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRIPCION,
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    title: TITULO,
    description: DESCRIPCION,
    url: '/blog',
    images: ['/Imagenes/Jesus Gonzalez en concierto.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITULO,
    description: DESCRIPCION,
    images: ['/Imagenes/Jesus Gonzalez en concierto.jpg'],
  },
};

export const revalidate = 600; // ISR: refresca desde Supabase sin redeploy

export default async function BlogPage() {
  const ARTICULOS = await listarArticulos();
  const cats = await categoriasBlog();
  const destacados = await articulosPopulares(undefined, 4);

  return (
    <>
      <JsonLd id="ld-blog-list" data={blogListSchema(ARTICULOS)} />
      <JsonLd
        id="ld-blog-breadcrumb"
        data={breadcrumbBlogSchema([
          { nombre: 'Inicio', url: '/' },
          { nombre: 'Blog', url: '/blog' },
        ])}
      />

      <div className="grano relative overflow-hidden border-b border-[color:var(--linea)] bg-tinta-2">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center md:py-24">
          <Revelar>
            <p className="kicker mb-4">El blog de Jesús González</p>
            <h1 className="mx-auto max-w-3xl font-display text-[2.2rem] leading-[1.1] text-hueso md:text-[3.4rem]">
              Vallenato en vivo para bodas, parrandas y eventos
            </h1>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-[1.05rem] leading-relaxed text-hueso-tenue">
              Lo que he aprendido en años de tarima: precios reales,
              repertorios que llenan la pista y cómo planear la música de
              tu evento sin sorpresas.
            </p>
          </Revelar>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[230px_minmax(0,1fr)_280px]">
          {/* Barra lateral izquierda — categorías/buscador */}
          <aside className="order-2 lg:order-1">
            <div className="lg:sticky lg:top-28">
              <NavCategorias categorias={cats} total={ARTICULOS.length} />
            </div>
          </aside>

          {/* Feed central */}
          <main className="order-1 lg:order-2">
            <div className="space-y-8">
              {ARTICULOS.map((a, i) => (
                <Revelar key={a.slug} retardo={i === 0 ? 0 : 0.05}>
                  <TarjetaArticulo articulo={a} prioridad={i === 0} />
                </Revelar>
              ))}
            </div>
          </main>

          {/* Barra lateral derecha — autor, CTA, populares */}
          <aside className="order-3 space-y-6">
            <div className="space-y-6 lg:sticky lg:top-28">
              <TarjetaAutor />
              <TarjetaCta />
              <ListaPopulares articulos={destacados} titulo="Más leídos" />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
