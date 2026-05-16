import React from 'react';
import Revelar from '../ui/Revelar';
import SeccionPress from './SeccionPress';
import type { DatosPress } from './datosPress';

interface Props {
  datos: DatosPress;
}

/** Bio corta + bio larga editorial. Server component. */
const BioPress: React.FC<Props> = ({ datos }) => (
  <SeccionPress id="bio" kicker="Quién es" titulo="La biografía">
    <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
      <Revelar>
        <p className="border-l-2 border-[color:var(--oro)] pl-6 font-display text-xl leading-snug text-hueso sm:text-2xl">
          {datos.bioCorta}
        </p>
      </Revelar>

      <div className="space-y-6">
        {datos.bioLarga.map((parrafo, i) => (
          <Revelar
            as="p"
            key={i}
            retardo={0.06 * i}
            className="text-lg leading-relaxed text-hueso-tenue"
          >
            {parrafo}
          </Revelar>
        ))}
      </div>
    </div>
  </SeccionPress>
);

export default BioPress;
