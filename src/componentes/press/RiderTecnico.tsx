import React from 'react';
import { Check } from 'lucide-react';
import Revelar from '../ui/Revelar';
import SeccionPress from './SeccionPress';
import type { DatosPress } from './datosPress';

interface Props {
  datos: DatosPress;
}

/**
 * Rider técnico resumido (sonido, escenario, energía). Señal de
 * profesionalismo para producción de eventos. Server component.
 */
const RiderTecnico: React.FC<Props> = ({ datos }) => (
  <SeccionPress
    id="rider"
    kicker="Producción"
    titulo="Rider técnico resumido"
    alt
  >
    <Revelar
      as="p"
      className="-mt-6 mb-12 max-w-2xl text-lg leading-relaxed text-hueso-tenue"
    >
      Un resumen profesional para producción y wedding planners. El rider
      completo y dimensionado al venue se entrega al cerrar la contratación.
    </Revelar>

    <div className="grid gap-6 lg:grid-cols-3">
      {datos.rider.map((bloque, i) => (
        <Revelar
          key={bloque.titulo}
          retardo={0.06 * i}
          className="rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-tinta p-7"
        >
          <h3 className="font-display text-xl text-oro">{bloque.titulo}</h3>
          <ul className="mt-5 space-y-3">
            {bloque.items.map((item) => (
              <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-hueso-tenue">
                <Check
                  size={18}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0 text-oro"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Revelar>
      ))}
    </div>
  </SeccionPress>
);

export default RiderTecnico;
