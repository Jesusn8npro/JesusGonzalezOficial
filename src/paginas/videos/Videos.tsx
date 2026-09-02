'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Revelar from '../../componentes/ui/Revelar';
import { mediaItems } from './datosVideos';
import VideosGaleria from './VideosGaleria';
import VideosCta from './VideosCta';

const ModalMedia = dynamic(() => import('./ModalMedia'), { ssr: false });

type FiltroTipo = 'todos' | 'video' | 'imagen';

const Videos: React.FC = () => {
    const [filtroTipo, setFiltroTipo] = useState<FiltroTipo>('todos');
    const [filtroCategoria, setFiltroCategoria] = useState('Todos');
    const [modalAbierto, setModalAbierto] = useState(false);
    const [indiceActual, setIndiceActual] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const itemsFiltrados = mediaItems.filter((item) => {
        const pasaTipo = filtroTipo === 'todos' || item.tipo === filtroTipo;
        const pasaCategoria =
            filtroCategoria === 'Todos' || item.categoria === filtroCategoria;
        return pasaTipo && pasaCategoria;
    });

    const abrirModal = (index: number) => {
        setIndiceActual(index);
        setModalAbierto(true);
        document.body.style.overflow = 'hidden';
    };

    const cerrarModal = () => {
        setModalAbierto(false);
        document.body.style.overflow = 'auto';
    };

    const siguiente = () => {
        setIndiceActual((prev) => (prev + 1) % itemsFiltrados.length);
    };

    const anterior = () => {
        setIndiceActual(
            (prev) => (prev - 1 + itemsFiltrados.length) % itemsFiltrados.length,
        );
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        if (distance > 30) siguiente();
        if (distance < -30) anterior();
        setTouchStart(0);
        setTouchEnd(0);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!modalAbierto) return;
            if (e.key === 'ArrowRight') siguiente();
            if (e.key === 'ArrowLeft') anterior();
            if (e.key === 'Escape') cerrarModal();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modalAbierto, indiceActual]);

    const itemActual = itemsFiltrados[indiceActual];
    const totalVideos = mediaItems.filter((i) => i.tipo === 'video').length;
    const totalImagenes = mediaItems.filter((i) => i.tipo === 'imagen').length;

    const resetFiltros = () => {
        setFiltroTipo('todos');
        setFiltroCategoria('Todos');
    };

    return (
        <div className="bg-tinta text-hueso">
            {/* ===== HERO ===== */}
            <section className="relative grano overflow-hidden border-b border-[color:var(--linea)]">
                <Image
                    src="/Imagenes/Jesus-Gonzalez-Vallenato-Exclusivo.jpg"
                    alt=""
                    aria-hidden="true"
                    fill
                    priority
                    sizes="100vw"
                    className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
                />
                <div
                    className="pointer-events-none absolute inset-0 -z-10"
                    aria-hidden="true"
                    style={{
                        background:
                            'linear-gradient(180deg, rgba(14,11,8,0.7) 0%, rgba(14,11,8,0.92) 100%)',
                    }}
                />
                <div className="mx-auto max-w-5xl px-6 py-28 text-center md:py-36">
                    <Revelar as="p" className="kicker mb-6">
                        Galería multimedia
                    </Revelar>
                    <Revelar
                        as="h1"
                        retardo={0.05}
                        className="font-display text-[clamp(2.6rem,7vw,5rem)] leading-[1] text-hueso"
                    >
                        Videos & fotos
                    </Revelar>
                    <Revelar
                        as="p"
                        retardo={0.1}
                        className="mx-auto mt-7 max-w-2xl text-[1.05rem] leading-relaxed text-hueso-tenue"
                    >
                        Momentos reales sobre el escenario: conciertos, parrandas y
                        colaboraciones con las leyendas del vallenato.
                    </Revelar>
                    <Revelar
                        retardo={0.16}
                        className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-6"
                    >
                        {[
                            { n: totalVideos, t: 'Videos' },
                            { n: totalImagenes, t: 'Fotos' },
                            { n: '200+', t: 'Shows' },
                        ].map((s) => (
                            <div key={s.t} className="text-center">
                                <div className="font-display text-3xl text-oro">{s.n}</div>
                                <div className="mt-1 text-sm tracking-wide text-hueso-tenue">
                                    {s.t}
                                </div>
                            </div>
                        ))}
                    </Revelar>
                </div>
            </section>

            <VideosGaleria
                filtroTipo={filtroTipo}
                setFiltroTipo={setFiltroTipo}
                filtroCategoria={filtroCategoria}
                setFiltroCategoria={setFiltroCategoria}
                itemsFiltrados={itemsFiltrados}
                totalItems={mediaItems.length}
                totalVideos={totalVideos}
                totalImagenes={totalImagenes}
                abrirModal={abrirModal}
                resetFiltros={resetFiltros}
            />

            <VideosCta />

            {modalAbierto && itemActual && (
                <ModalMedia
                    itemActual={itemActual}
                    itemsFiltrados={itemsFiltrados}
                    indiceActual={indiceActual}
                    cerrarModal={cerrarModal}
                    anterior={anterior}
                    siguiente={siguiente}
                    handleTouchStart={handleTouchStart}
                    handleTouchMove={handleTouchMove}
                    handleTouchEnd={handleTouchEnd}
                />
            )}
        </div>
    );
};

export default Videos;
