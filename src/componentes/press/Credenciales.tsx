import React from 'react';
import { Award } from 'lucide-react';
import Revelar from '../ui/Revelar';
import SeccionPress from './SeccionPress';
import type { DatosPress } from './datosPress';

interface Props {
  datos: DatosPress;
}

/**
 * Credenciales: artistas de talla nacional con los que ha compartido
 * escenario. Prueba social fuerte para el cierre B2B. Server component.
 */
const Credenciales: React.FC<Props> = ({ datos }) => (
  <SeccionPress
    id="credenciales"
    kicker="Respaldo"
    titulo="Ha compartido escenario con los grandes del vallenato"
    alt
  >
    <Revelar
      as="p"
      className="-mt-6 mb-12 max-w-2xl text-lg leading-relaxed text-hueso-tenue"
    >
      No es una promesa de marketing: es trayectoria comprobable junto a
      figuras de talla nacional. El nivel se reconoce por la compañía que se
      tiene en tarima.
    </Revelar>

    <div className="grid gap-px overflow-hidden rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-[color:var(--linea)] sm:grid-cols-2 lg:grid-cols-3">
      {datos.credenciales.map((c, i) => (
        <Revelar
          key={c.artista}
          retardo={0.04 * i}
          className="flex items-center gap-4 bg-tinta px-6 py-7"
        >
          <span
            aria-hidden="true"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-oro/40 bg-oro/[0.06] text-oro"
          >
            <Award size={20} strokeWidth={1.7} />
          </span>
          <span>
            <span className="block font-display text-xl text-hueso">
              {c.artista}
            </span>
            <span className="mt-0.5 block text-sm text-hueso-tenue">
              {c.detalle}
            </span>
          </span>
        </Revelar>
      ))}
    </div>
  </SeccionPress>
);

export default Credenciales;
