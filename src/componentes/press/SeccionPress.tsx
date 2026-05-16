import React from 'react';
import Revelar from '../ui/Revelar';

interface Props {
  id: string;
  kicker: string;
  titulo: string;
  /** Tono de fondo alterno para ritmo visual entre secciones. */
  alt?: boolean;
  children: React.ReactNode;
}

/**
 * Envoltura editorial reutilizable para cada bloque del EPK.
 * Mantiene el ancho, el ritmo vertical y el encabezado consistentes.
 * Server component (sin estado) — el motion lo aporta <Revelar>.
 */
const SeccionPress: React.FC<Props> = ({ id, kicker, titulo, alt, children }) => (
  <section
    id={id}
    className={`px-5 py-20 md:px-10 md:py-28 ${
      alt ? 'bg-tinta-2' : 'bg-tinta'
    }`}
  >
    <div className="mx-auto max-w-[1180px]">
      <Revelar as="p" className="kicker mb-4">
        {kicker}
      </Revelar>
      <Revelar
        as="h2"
        retardo={0.05}
        className="mb-12 max-w-3xl font-display text-3xl leading-tight text-hueso sm:text-4xl lg:text-[2.9rem]"
      >
        {titulo}
      </Revelar>
      {children}
    </div>
  </section>
);

export default SeccionPress;
