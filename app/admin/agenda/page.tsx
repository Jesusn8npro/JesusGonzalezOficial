import type { Metadata } from 'next';
import { crearClienteServidor } from '../../../src/utilidades/supabase/servidor';
import { supabaseConfigurado } from '../../../src/utilidades/supabase/config';
import {
  EncabezadoAdmin,
  ErrorTablas,
  VacioTabla,
} from '../../../src/componentes/admin/Primitivas';
import {
  CrearEvento,
  FilaEvento,
  type Evento,
} from '../../../src/componentes/admin/EditorEvento';

export const metadata: Metadata = {
  title: 'Agenda',
  robots: { index: false, follow: false },
};
export const dynamic = 'force-dynamic';

export default async function PaginaAgenda() {
  if (!supabaseConfigurado) return null;

  const supabase = await crearClienteServidor();
  const { data, error } = await supabase
    .from('eventos')
    .select('id,titulo,ciudad,fecha,estado,notas')
    .order('fecha', { ascending: true });

  if (error) return <ErrorTablas detalle={error.message} />;
  const eventos = (data ?? []) as Evento[];

  return (
    <div>
      <EncabezadoAdmin
        titulo="Agenda"
        descripcion="Eventos confirmados, tentativos y fechas bloqueadas. Alimentan la agenda pública."
      />

      <div className="mb-5">
        <CrearEvento />
      </div>

      <div className="overflow-x-auto rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)]">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="sticky top-0 bg-[color:var(--color-tinta-3)] text-hueso-tenue">
            <tr>
              <th className="px-4 py-3 font-semibold">Fecha</th>
              <th className="px-4 py-3 font-semibold">Título</th>
              <th className="px-4 py-3 font-semibold">Ciudad</th>
              <th className="px-4 py-3 font-semibold">Estado</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {eventos.map((ev) => (
              <FilaEvento key={ev.id} ev={ev} />
            ))}
            {eventos.length === 0 && (
              <VacioTabla colSpan={5}>
                Sin eventos todavía. Crea el primero con &laquo;Nuevo
                evento&raquo;.
              </VacioTabla>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
