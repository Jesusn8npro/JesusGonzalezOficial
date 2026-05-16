import type { Metadata } from 'next';
import { crearClienteServidor } from '../../../src/utilidades/supabase/servidor';
import { supabaseConfigurado } from '../../../src/utilidades/supabase/config';
import {
  EncabezadoAdmin,
  ErrorTablas,
  VacioTabla,
} from '../../../src/componentes/admin/Primitivas';
import FiltroEstado from '../../../src/componentes/admin/FiltroEstado';
import FilaLead, {
  type Lead,
} from '../../../src/componentes/admin/FilaLead';

export const metadata: Metadata = {
  title: 'Leads',
  robots: { index: false, follow: false },
};
export const dynamic = 'force-dynamic';

const ESTADOS = ['nuevo', 'contactado', 'cotizado', 'cerrado', 'perdido'];

export default async function PaginaLeads({
  searchParams,
}: {
  searchParams: Promise<{ estado?: string }>;
}) {
  if (!supabaseConfigurado) return null;
  const { estado } = await searchParams;
  const filtro = estado && ESTADOS.includes(estado) ? estado : 'todos';

  const supabase = await crearClienteServidor();
  let q = supabase
    .from('leads')
    .select(
      'id,creado_at,nombre,whatsapp,tipo_evento,ciudad,estado,mensaje',
    )
    .order('creado_at', { ascending: false })
    .limit(500);
  if (filtro !== 'todos') q = q.eq('estado', filtro);

  const { data, error } = await q;
  if (error) return <ErrorTablas detalle={error.message} />;
  const leads = (data ?? []) as Lead[];

  return (
    <div>
      <EncabezadoAdmin
        titulo="Leads"
        descripcion="Solicitudes del cotizador y el formulario de contacto. Las más recientes primero."
      />

      <div className="mb-5">
        <FiltroEstado
          base="/admin/leads"
          opciones={ESTADOS}
          activo={filtro}
        />
      </div>

      <div className="overflow-x-auto rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)]">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="sticky top-0 bg-[color:var(--color-tinta-3)] text-hueso-tenue">
            <tr>
              <th className="px-4 py-3 font-semibold">Fecha</th>
              <th className="px-4 py-3 font-semibold">Nombre</th>
              <th className="px-4 py-3 font-semibold">WhatsApp</th>
              <th className="px-4 py-3 font-semibold">Evento</th>
              <th className="px-4 py-3 font-semibold">Ciudad</th>
              <th className="px-4 py-3 font-semibold">Estado</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {leads.map((l) => (
              <FilaLead key={l.id} lead={l} />
            ))}
            {leads.length === 0 && (
              <VacioTabla colSpan={7}>
                {filtro === 'todos'
                  ? 'Aún no hay leads. Llegarán automáticamente desde el cotizador y el formulario.'
                  : `No hay leads en estado "${filtro}".`}
              </VacioTabla>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
