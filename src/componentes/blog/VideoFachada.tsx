'use client';

import React, { useState } from 'react';

interface Props {
  videoId: string;
  titulo: string;
}

/**
 * Fachada click-to-load de YouTube: no carga el iframe hasta el clic
 * (cero JS de terceros en la carga inicial, sin autoplay no deseado).
 * Al activar se inserta el iframe con autoplay=1 (acción del usuario).
 */
const VideoFachada: React.FC<Props> = ({ videoId, titulo }) => {
  const [activo, setActivo] = useState(false);
  const miniatura = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <figure className="not-prose my-10">
      <div className="relative aspect-video w-full overflow-hidden rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)] bg-tinta-2">
        {activo ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={titulo}
            loading="lazy"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setActivo(true)}
            aria-label={`Reproducir video: ${titulo}`}
            className="group absolute inset-0 h-full w-full cursor-pointer"
          >
            <img
              src={miniatura}
              alt={titulo}
              loading="lazy"
              decoding="async"
              width={480}
              height={270}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-tinta/70 via-tinta/10 to-transparent"
            />
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-oro text-tinta shadow-[var(--shadow-oro)] transition-transform duration-300 group-hover:scale-110"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="absolute bottom-3 left-4 right-4 truncate text-left font-sans text-sm text-hueso">
              {titulo}
            </span>
          </button>
        )}
      </div>
    </figure>
  );
};

export default VideoFachada;
