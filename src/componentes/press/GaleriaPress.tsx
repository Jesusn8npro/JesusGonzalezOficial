import React from 'react';
import Image from 'next/image';
import Revelar from '../ui/Revelar';
import SeccionPress from './SeccionPress';
import type { DatosPress } from './datosPress';

interface Props {
  datos: DatosPress;
}

/**
 * Galería de fotos en alta resolución. Imágenes locales, lazy (el hero
 * ya tiene priority), sin CLS gracias a width/height fijos en un grid
 * masonry-light. Server component.
 */
const GaleriaPress: React.FC<Props> = ({ datos }) => (
  <SeccionPress
    id="galeria"
    kicker="Material de prensa"
    titulo="Galería en alta resolución"
    alt
  >
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
      {datos.galeria.map((foto, i) => (
        <Revelar
          key={foto.src}
          retardo={0.04 * (i % 3)}
          className="break-inside-avoid overflow-hidden rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)]"
        >
          <Image
            src={foto.src}
            alt={foto.alt}
            width={foto.retrato ? 800 : 1000}
            height={foto.retrato ? 1000 : 750}
            loading="lazy"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="block h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
          />
        </Revelar>
      ))}
    </div>
  </SeccionPress>
);

export default GaleriaPress;
