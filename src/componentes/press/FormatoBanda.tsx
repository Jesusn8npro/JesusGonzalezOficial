import React from 'react';
import { Users } from 'lucide-react';
import Revelar from '../ui/Revelar';
import SeccionPress from './SeccionPress';
import type { DatosPress } from './datosPress';

interface Props {
  datos: DatosPress;
}

/**
 * Formato de banda profesional (6–9 músicos) explicado rol por rol.
 * El argumento central: "no es un grupito más". Server component.
 */
const FormatoBanda: React.FC<Props> = ({ datos }) => {
  const { formatoBanda } = datos;
  return (
    <SeccionPress
      id="banda"
      kicker="El formato"
      titulo="Una banda profesional completa, no un acordeonista solo"
    >
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Revelar
            as="p"
            className="-mt-4 text-lg leading-relaxed text-hueso-tenue"
          >
            {formatoBanda.intro}
          </Revelar>
          <Revelar
            retardo={0.1}
            className="mt-7 inline-flex items-center gap-3 rounded-[var(--radius-sello)] border border-oro/40 bg-oro/[0.06] px-5 py-4"
          >
            <Users
              size={22}
              strokeWidth={1.7}
              className="shrink-0 text-oro"
              aria-hidden="true"
            />
            <p className="font-display text-lg text-hueso">
              {formatoBanda.rango}
            </p>
          </Revelar>
        </div>

        <ul className="grid gap-px overflow-hidden rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-[color:var(--linea)] sm:grid-cols-2">
          {formatoBanda.integrantes.map((m, i) => (
            <Revelar
              as="li"
              key={m.rol}
              retardo={0.04 * i}
              className="bg-tinta-2 px-6 py-6"
            >
              <p className="font-display text-lg text-oro">{m.rol}</p>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-hueso-tenue">
                {m.descripcion}
              </p>
            </Revelar>
          ))}
        </ul>
      </div>
    </SeccionPress>
  );
};

export default FormatoBanda;
