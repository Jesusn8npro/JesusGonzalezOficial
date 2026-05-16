import { crearClienteServidor } from '../../src/utilidades/supabase/servidor';
import { supabaseConfigurado } from '../../src/utilidades/supabase/config';

export const dynamic = 'force-dynamic'; // datos en vivo

interface LeadRow {
  id: string;
  creado_at: string;
  nombre: string | null;
  whatsapp: string | null;
  tipo_evento: string | null;
  ciudad: string | null;
  estado: string | null;
}

function Tarjeta({ n, t }: { n: number | string; t: string }) {
  return (
    <div className="rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-[color:var(--color-tinta-2)] p-5">
      <div className="font-display text-3xl font-semibold text-oro">{n}</div>
      <div className="mt-1 text-sm text-hueso-tenue">{t}</div>
    </div>
  );
}

export default async function Dashboard() {
  // El layout ya muestra el aviso si falta Supabase; evitamos crear el cliente.
  if (!supabaseConfigurado) return null;

  const supabase = await crearClienteServidor();
  const { data, error } = await supabase
    .from('leads')
    .select('id,creado_at,nombre,whatsapp,tipo_evento,ciudad,estado')
    .order('creado_at', { ascending: false })
    .limit(300);

  if (error) {
    return (
      <div className="rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-[color:var(--color-tinta-2)] p-8">
        <h1 className="font-display text-2xl font-semibold text-hueso">
          Falta crear las tablas
        </h1>
        <p className="mt-3 text-hueso-tenue">
          Ejecuta el script <code className="text-oro">supabase/migrations/0001_init.sql</code>{' '}
          en Supabase → SQL Editor y recarga. Detalle: {error.message}
        </p>
      </div>
    );
  }

  const leads = (data ?? []) as LeadRow[];
  const hace30 = Date.now() - 30 * 864e5;
  const ultimos30 = leads.filter((l) => +new Date(l.creado_at) >= hace30).length;
  const nuevos = leads.filter((l) => (l.estado ?? 'nuevo') === 'nuevo').length;
  const porCiudad = Object.entries(
    leads.reduce<Record<string, number>>((a, l) => {
      const c = l.ciudad?.trim() || 'Sin ciudad';
      a[c] = (a[c] ?? 0) + 1;
      return a;
    }, {}),
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return (
    <div>
      <h1 className="mb-6 font-display text-3xl font-semibold text-hueso">
        Resumen de leads
      </h1>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Tarjeta n={leads.length} t="Leads (últimos 300)" />
        <Tarjeta n={ultimos30} t="Últimos 30 días" />
        <Tarjeta n={nuevos} t="Sin contactar" />
        <Tarjeta n={porCiudad[0]?.[0] ?? '—'} t="Ciudad top" />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="overflow-x-auto rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[color:var(--color-tinta-3)] text-hueso-tenue">
              <tr>
                <th className="px-4 py-3">Fecha</th>
                <th className="px-4 py-3">Nombre</th>
                <th className="px-4 py-3">Evento</th>
                <th className="px-4 py-3">Ciudad</th>
                <th className="px-4 py-3">Estado</th>
              </tr>
            </thead>
            <tbody>
              {leads.slice(0, 25).map((l) => (
                <tr key={l.id} className="border-t border-[color:var(--linea)]">
                  <td className="px-4 py-3 text-hueso-tenue">
                    {new Date(l.creado_at).toLocaleDateString('es-CO')}
                  </td>
                  <td className="px-4 py-3 text-hueso">{l.nombre || '—'}</td>
                  <td className="px-4 py-3 text-hueso-tenue">{l.tipo_evento || '—'}</td>
                  <td className="px-4 py-3 text-hueso-tenue">{l.ciudad || '—'}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full border border-[color:var(--linea-fuerte)] px-2.5 py-0.5 text-xs text-oro">
                      {l.estado || 'nuevo'}
                    </span>
                  </td>
                </tr>
              ))}
              {leads.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-center text-hueso-tenue">
                    Aún no hay leads. Llegarán automáticamente desde el cotizador y el formulario.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-[color:var(--color-tinta-2)] p-5">
          <h2 className="mb-4 font-display text-lg font-semibold text-hueso">
            Top ciudades
          </h2>
          <ul className="flex flex-col gap-3">
            {porCiudad.map(([c, n]) => (
              <li key={c} className="flex items-center justify-between text-sm">
                <span className="text-hueso-tenue">{c}</span>
                <span className="font-semibold text-oro">{n}</span>
              </li>
            ))}
            {porCiudad.length === 0 && (
              <li className="text-sm text-hueso-tenue">Sin datos todavía.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
