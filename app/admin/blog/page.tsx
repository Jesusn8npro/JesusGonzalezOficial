import type { Metadata } from 'next';
import { crearClienteServidor } from '../../../src/utilidades/supabase/servidor';
import { supabaseConfigurado } from '../../../src/utilidades/supabase/config';
import {
  EncabezadoAdmin,
  ErrorTablas,
  VacioTabla,
} from '../../../src/componentes/admin/Primitivas';
import BotonSincronizar from '../../../src/componentes/admin/BotonSincronizar';
import FilaArticulo, {
  type Articulo,
} from '../../../src/componentes/admin/FilaArticulo';

export const metadata: Metadata = {
  title: 'Blog',
  robots: { index: false, follow: false },
};
export const dynamic = 'force-dynamic';

export default async function PaginaBlog() {
  if (!supabaseConfigurado) return null;

  const supabase = await crearClienteServidor();
  const { data, error } = await supabase
    .from('articulos')
    .select('slug,titulo,categoria,fecha,publicado,orden')
    .order('orden', { ascending: true })
    .order('fecha', { ascending: false });

  if (error) return <ErrorTablas detalle={error.message} />;
  const articulos = (data ?? []) as Articulo[];

  return (
    <div>
      <EncabezadoAdmin
        titulo="Blog"
        descripcion="Gestiona publicación y orden. El contenido se edita en el código y se sincroniza aquí."
      />

      <div className="mb-6">
        <BotonSincronizar />
      </div>

      <div className="overflow-x-auto rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)]">
        <table className="w-full min-w-[820px] text-left text-sm">
          <thead className="sticky top-0 bg-[color:var(--color-tinta-3)] text-hueso-tenue">
            <tr>
              <th className="px-4 py-3 font-semibold">Artículo</th>
              <th className="px-4 py-3 font-semibold">Categoría</th>
              <th className="px-4 py-3 font-semibold">Fecha</th>
              <th className="px-4 py-3 font-semibold">Orden</th>
              <th className="px-4 py-3 font-semibold">Estado</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {articulos.map((a) => (
              <FilaArticulo key={a.slug} a={a} />
            ))}
            {articulos.length === 0 && (
              <VacioTabla colSpan={6}>
                No hay artículos en Supabase. Usa &laquo;Sincronizar &rarr;
                Supabase&raquo; para importarlos desde el código.
              </VacioTabla>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
