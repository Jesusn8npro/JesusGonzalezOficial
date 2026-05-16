import React from 'react';
import BotonWhatsapp from '../ui/BotonWhatsapp';

interface Props {
  mensaje: string;
  etiqueta: string;
  texto: string;
}

/** Bloque de cierre con CTA de WhatsApp dentro del cuerpo del artículo. */
const CtaBloque: React.FC<Props> = ({ mensaje, etiqueta, texto }) => (
  <div className="not-prose my-10 overflow-hidden rounded-[var(--radius-grande)] border border-[color:var(--linea-fuerte)] bg-tinta-2 p-7 text-center md:p-9">
    <p className="kicker mb-3">¿Listo para tu evento?</p>
    <h3 className="mb-5 font-display text-[1.4rem] leading-tight text-hueso md:text-[1.7rem]">
      Hablemos de tu fecha antes de que se llene la agenda
    </h3>
    <div className="flex justify-center">
      <BotonWhatsapp mensaje={mensaje} evento={etiqueta} variante="whatsapp" tamano="lg">
        {texto}
      </BotonWhatsapp>
    </div>
  </div>
);

export default CtaBloque;
