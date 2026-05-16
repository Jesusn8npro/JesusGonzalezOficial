'use client';

import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { MediaItem } from './datosVideos';

interface ModalMediaProps {
    itemActual: MediaItem;
    itemsFiltrados: MediaItem[];
    indiceActual: number;
    cerrarModal: () => void;
    anterior: () => void;
    siguiente: () => void;
    handleTouchStart: (e: React.TouchEvent) => void;
    handleTouchMove: (e: React.TouchEvent) => void;
    handleTouchEnd: () => void;
}

const NAV_BASE =
    'absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[color:var(--linea-fuerte)] bg-tinta/70 text-hueso backdrop-blur-sm transition-colors duration-300 hover:border-oro hover:text-oro';

const ModalMedia: React.FC<ModalMediaProps> = ({
    itemActual,
    itemsFiltrados,
    indiceActual,
    cerrarModal,
    anterior,
    siguiente,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
}) => {
    const hayVarios = itemsFiltrados.length > 1;

    return (
        <div
            className="fixed inset-0 z-[3000] flex items-center justify-center bg-tinta/95 p-4 backdrop-blur-md sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={itemActual.titulo}
            onClick={cerrarModal}
        >
            <button
                type="button"
                aria-label="Cerrar"
                onClick={cerrarModal}
                className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--linea-fuerte)] bg-tinta/70 text-hueso backdrop-blur-sm transition-colors duration-300 hover:border-oro hover:text-oro sm:right-6 sm:top-6"
            >
                <X size={20} aria-hidden="true" />
            </button>

            <div
                className="relative w-full max-w-5xl"
                onClick={(e) => e.stopPropagation()}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className="relative overflow-hidden rounded-[var(--radius-tarjeta)] border border-[color:var(--linea-fuerte)] bg-black shadow-[var(--shadow-oro)]">
                    {itemActual.tipo === 'video' ? (
                        <div className="relative aspect-video w-full">
                            <iframe
                                src={itemActual.videoUrl}
                                title={itemActual.titulo}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 h-full w-full border-0"
                            />
                        </div>
                    ) : (
                        <div className="relative flex max-h-[70vh] w-full items-center justify-center">
                            <img
                                src={itemActual.imagenUrl}
                                alt={itemActual.titulo}
                                decoding="async"
                                className="max-h-[70vh] w-full object-contain"
                            />
                        </div>
                    )}

                    {hayVarios && (
                        <>
                            <button
                                type="button"
                                aria-label="Anterior"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    anterior();
                                }}
                                className={`${NAV_BASE} left-3`}
                            >
                                <ChevronLeft size={22} aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                aria-label="Siguiente"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    siguiente();
                                }}
                                className={`${NAV_BASE} right-3`}
                            >
                                <ChevronRight size={22} aria-hidden="true" />
                            </button>
                        </>
                    )}
                </div>

                <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <p className="kicker text-[0.66rem]">{itemActual.categoria}</p>
                        <h2 className="mt-2 font-display text-2xl text-hueso">
                            {itemActual.titulo}
                        </h2>
                        {itemActual.descripcion && (
                            <p className="mt-2 max-w-xl text-sm leading-relaxed text-hueso-tenue">
                                {itemActual.descripcion}
                            </p>
                        )}
                    </div>
                    <span className="shrink-0 self-start rounded-[var(--radius-sello)] border border-[color:var(--linea-fuerte)] px-3 py-1.5 text-sm font-semibold text-oro">
                        {indiceActual + 1} / {itemsFiltrados.length}
                    </span>
                </div>

                {hayVarios && (
                    <p className="mt-4 text-center text-xs tracking-wide text-hueso-tenue sm:hidden">
                        ← Desliza para navegar →
                    </p>
                )}
            </div>
        </div>
    );
};

export default ModalMedia;
