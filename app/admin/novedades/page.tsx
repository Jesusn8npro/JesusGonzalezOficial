import type { Metadata } from 'next';
import { crearClienteServidor } from '../../../src/utilidades/supabase/servidor';
import { supabaseConfigurado } from '../../../src/utilidades/supabase/config';
import {
  EncabezadoAdmin,
  ErrorTablas,
  VacioTabla,
} from '../../../src/componentes/admin/Primitivas';
import {
  CrearNovedad,
  FilaNovedad,
  type Novedad,
} from '../../../src/componentes/admin/EditorNovedad';

export const metadata: Metadata = {
  title: 'Novedades',
  robots: { index: false, follow: false },
};
export const dynamic = 'force-dynamic';

export default async function PaginaNovedades() {
  if (!supabaseConfigurado) return null;

  const supabase = await crearClienteServidor();
  const { data, error } = await supabase
    .from('novedades')
    .select('id,titulo,slug,contenido,imagen,fecha,publicado')
    .order('fecha', { ascending: false, nullsFirst: false });

  if (error) return <ErrorTablas detalle={error.message} />;
  const novedades = (data ?? []) as Novedad[];

  return (
    <div>
      <EncabezadoAdmin
        titulo="Novedades"
        descripcion="Noticias y anuncios. Solo las publicadas se muestran en el sitio."
      />

      <div className="mb-5">
        <CrearNovedad />
      </div>

      <div className="overflow-x-auto rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)]">
        <table className="w-full min-w-[680px] text-left text-sm">
          <thead className="sticky top-0 bg-[color:var(--color-tinta-3)] text-hueso-tenue">
            <tr>
              <th className="px-4 py-3 font-semibold">Fecha</th>
              <th className="px-4 py-3 font-semibold">Título</th>
              <th className="px-4 py-3 font-semibold">Slug</th>
              <th className="px-4 py-3 font-semibold">Estado</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {novedades.map((n) => (
              <FilaNovedad key={n.id} n={n} />
            ))}
            {novedades.length === 0 && (
              <VacioTabla colSpan={5}>
                Sin novedades todavía. Crea la primera con &laquo;Nueva
                novedad&raquo;.
              </VacioTabla>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
