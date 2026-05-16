import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { aId, type Bloque, type Inline } from '../../contenido/blog/tipos';
import VideoFachada from './VideoFachada';
import CtaBloque from './CtaBloque';

interface Props {
  cuerpo: Bloque[];
}

function Texto({ partes }: { partes: Inline[] }) {
  return (
    <>
      {partes.map((p, i) => {
        if (typeof p === 'string') return <React.Fragment key={i}>{p}</React.Fragment>;
        if ('fuerte' in p)
          return (
            <strong key={i} className="font-semibold text-hueso">
              {p.fuerte}
            </strong>
          );
        if (p.externo)
          return (
            <a
              key={i}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-oro underline decoration-[color:var(--linea-fuerte)] underline-offset-4 transition-colors hover:decoration-oro"
            >
              {p.texto}
            </a>
          );
        return (
          <Link
            key={i}
            href={p.href}
            className="font-medium text-oro underline decoration-[color:var(--linea-fuerte)] underline-offset-4 transition-colors hover:decoration-oro"
          >
            {p.texto}
          </Link>
        );
      })}
    </>
  );
}

/**
 * Renderiza el cuerpo tipado del artículo. Server component (HTML estático
 * indexable). Asigna ids a h2/h3 con la MISMA lógica que construirTOC para
 * que el scroll-spy y los anclajes coincidan exactamente.
 */
const CuerpoArticulo: React.FC<Props> = ({ cuerpo }) => {
  const usados = new Set<string>();
  const idDe = (texto: string) => {
    let id = aId(texto);
    let n = 2;
    while (usados.has(id)) id = `${aId(texto)}-${n++}`;
    usados.add(id);
    return id;
  };

  return (
    <div className="space-y-6">
      {cuerpo.map((b, i) => {
        switch (b.tipo) {
          case 'h2':
            return (
              <h2
                key={i}
                id={idDe(b.texto)}
                className="scroll-mt-28 pt-6 font-display text-[1.7rem] leading-tight text-hueso md:text-[2rem]"
              >
                {b.texto}
              </h2>
            );
          case 'h3':
            return (
              <h3
                key={i}
                id={idDe(b.texto)}
                className="scroll-mt-28 pt-2 font-display text-[1.3rem] leading-tight text-hueso md:text-[1.5rem]"
              >
                {b.texto}
              </h3>
            );
          case 'parrafo':
            return (
              <p
                key={i}
                className="font-sans text-[1.05rem] leading-[1.85] text-hueso-tenue"
              >
                <Texto partes={b.contenido} />
              </p>
            );
          case 'cita':
            return (
              <blockquote
                key={i}
                className="my-8 border-l-2 border-oro bg-tinta-2 px-6 py-5 font-display text-[1.2rem] italic leading-relaxed text-hueso md:text-[1.35rem]"
              >
                <p>“{b.texto}”</p>
                {b.autor && (
                  <footer className="mt-3 font-sans text-sm not-italic text-oro">
                    — {b.autor}
                  </footer>
                )}
              </blockquote>
            );
          case 'lista':
            return b.ordenada ? (
              <ol
                key={i}
                className="ml-5 list-decimal space-y-2.5 font-sans text-[1.05rem] leading-relaxed text-hueso-tenue marker:text-oro"
              >
                {b.items.map((it, j) => (
                  <li key={j} className="pl-1">
                    <Texto partes={it} />
                  </li>
                ))}
              </ol>
            ) : (
              <ul
                key={i}
                className="ml-1 space-y-2.5 font-sans text-[1.05rem] leading-relaxed text-hueso-tenue"
              >
                {b.items.map((it, j) => (
                  <li key={j} className="relative pl-6">
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-oro"
                    />
                    <Texto partes={it} />
                  </li>
                ))}
              </ul>
            );
          case 'imagen':
            return (
              <figure key={i} className="my-10">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-tarjeta)] border border-[color:var(--linea)]">
                  <Image
                    src={b.src}
                    alt={b.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 720px"
                    className="object-cover"
                  />
                </div>
                {b.pie && (
                  <figcaption className="mt-3 text-center font-sans text-sm italic text-hueso-tenue">
                    {b.pie}
                  </figcaption>
                )}
              </figure>
            );
          case 'video':
            return <VideoFachada key={i} videoId={b.videoId} titulo={b.titulo} />;
          case 'cta':
            return (
              <CtaBloque
                key={i}
                mensaje={b.mensaje}
                etiqueta={b.etiqueta}
                texto={b.texto}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default CuerpoArticulo;
