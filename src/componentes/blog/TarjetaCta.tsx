import React from 'react';
import Link from 'next/link';
import BotonWhatsapp from '../ui/BotonWhatsapp';

/** Tarjeta lateral de conversión: WhatsApp + enlace a contrataciones. */
const TarjetaCta: React.FC = () => (
  <div className="rounded-[var(--radius-grande)] border border-[color:var(--linea-fuerte)] bg-gradient-to-b from-tinta-3 to-tinta-2 p-6 text-center">
    <p className="kicker mb-2">Tu evento con sello vallenato</p>
    <h3 className="mb-4 font-display text-xl leading-tight text-hueso">
      ¿Quieres a Jesús en tu boda o evento?
    </h3>
    <div className="mb-3">
      <BotonWhatsapp
        mensaje="¡Hola Jesús! Vengo del blog y quiero cotizar un show para mi evento. ¿Me ayudas?"
        evento="blog_sidebar_whatsapp"
        variante="whatsapp"
        bloque
      >
        Cotizar por WhatsApp
      </BotonWhatsapp>
    </div>
    <Link
      href="/contrataciones"
      className="inline-block font-sans text-sm font-semibold text-oro underline decoration-[color:var(--linea-fuerte)] underline-offset-4 transition-colors hover:decoration-oro"
    >
      Ver contrataciones y paquetes
    </Link>
  </div>
);

export default TarjetaCta;
