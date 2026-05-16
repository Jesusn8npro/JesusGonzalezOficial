import React from 'react';
import Image from 'next/image';
import { config } from '../../utilidades/configuracion';

/** Mini-bio "sobre Jesús" para la barra lateral. */
const TarjetaAutor: React.FC = () => (
  <div className="rounded-[var(--radius-grande)] border border-[color:var(--linea)] bg-tinta-2 p-6">
    <div className="mb-4 flex items-center gap-4">
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-[color:var(--linea-fuerte)]">
        <Image
          src="/Imagenes/Foto de perfil para JESUS GONZALEZ.jpg"
          alt="Jesús González, acordeonista vallenato"
          fill
          loading="lazy"
          sizes="64px"
          className="object-cover"
        />
      </div>
      <div>
        <p className="kicker mb-1">Sobre el autor</p>
        <p className="font-display text-lg leading-tight text-hueso">
          Jesús González
        </p>
      </div>
    </div>
    <p className="mb-4 font-sans text-sm leading-relaxed text-hueso-tenue">
      Acordeonista y maestro del vallenato en Colombia. Llevo años llevando
      el acordeón a bodas, eventos corporativos y parrandas por todo el país.
      Aquí comparto lo que he aprendido en la tarima.
    </p>
    <div className="flex flex-wrap gap-3 font-sans text-xs">
      <a
        href={config.socialMedia.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className="text-oro underline decoration-[color:var(--linea-fuerte)] underline-offset-4 transition-colors hover:decoration-oro"
      >
        Canal YouTube
      </a>
      <a
        href={config.socialMedia.youtubeAcademia}
        target="_blank"
        rel="noopener noreferrer"
        className="text-oro underline decoration-[color:var(--linea-fuerte)] underline-offset-4 transition-colors hover:decoration-oro"
      >
        Academia Vallenata
      </a>
    </div>
  </div>
);

export default TarjetaAutor;
