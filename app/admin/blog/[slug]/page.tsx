import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { crearClienteServidor } from '../../../../src/utilidades/supabase/servidor';
import { supabaseConfigurado } from '../../../../src/utilidades/supabase/config';
import { iaSeoDisponible } from '../../../../src/utilidades/ia/config';
import { ErrorTablas } from '../../../../src/componentes/admin/Primitivas';
import EditorArticulo from '../../../../src/componentes/admin/EditorArticulo';
import EditorCuerpo from '../../../../src/componentes/admin/EditorCuerpo';
import type { Articulo } from '../../../../src/contenido/blog/tipos';

export const metadata: Metadata = {
  title: 'Editar artículo',
  robots: { index: false, follow: false },
};
export const dynamic = 'force-dynamic';

export default async function EditarArticuloPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  if (!supabaseConfigurado) return null;
  const { slug } = await params;

  const supabase = await crearClienteServidor();
  const { data, error } = await supabase
    .from('articulos')
    .select('slug,datos')
    .eq('slug', slug)
    .single();

  if (error) return <ErrorTablas detalle={error.message} />;
  if (!data) notFound();

  const articulo = data.datos as Articulo;

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/admin/blog"
          className="inline-flex items-center gap-2 text-sm text-hueso-tenue transition-colors hover:text-oro"
        >
          <ArrowLeft size={16} />
          Volver al blog
        </Link>
        <Link
          href={`/blog/${slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-[var(--radius-sello)] border border-[color:var(--linea-fuerte)] px-4 py-2 text-sm font-semibold text-hueso transition-colors hover:border-oro hover:text-oro"
        >
          <ExternalLink size={15} />
          Ver artículo publicado
        </Link>
      </div>

      <EditorArticulo
        slug={data.slug as string}
        articulo={articulo}
        iaDisponible={iaSeoDisponible}
      />

      <section className="mt-12 border-t border-[color:var(--linea)] pt-10">
        <div className="mb-6">
          <p className="kicker mb-1">Contenido principal</p>
          <h2 className="font-display text-2xl font-semibold text-hueso">
            Cuerpo del artículo
          </h2>
          <p className="mt-1 text-sm text-hueso-tenue">
            Edita cualquier sección directamente. En párrafos, listas y citas
            puedes usar <code className="text-oro">**negrita**</code> y{' '}
            <code className="text-oro">[texto](https://enlace)</code>. Pulsa
            “Guardar contenido” al terminar.
          </p>
        </div>
        <EditorCuerpo slug={slug} cuerpoInicial={articulo.cuerpo ?? []} />
      </section>
    </div>
  );
}
