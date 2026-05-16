'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Revelar from '../ui/Revelar';

interface Video {
    artista: string;
    videoId: string;
    thumb: string;
    descripcion: string;
}

const videos: Video[] = [
    {
        artista: 'Jorge Celedón',
        videoId: 'vgDABDveFn0',
        thumb: '/Imagenes/Jorge Celedon y Jesus Gonzalez.jpg',
        descripcion: 'En vivo junto a Jorge Celedón.',
    },
    {
        artista: 'Poncho Zuleta',
        videoId: 'Ll5rSyCDM78',
        thumb: '/Imagenes/Jesus Gonzalez y Poncho Zuleta.jpg',
        descripcion: 'Presentación exclusiva con Poncho Zuleta.',
    },
    {
        artista: 'Felipe Peláez',
        videoId: 'oPoqVKg30Cg',
        thumb: '/Imagenes/El pollo irra y Jesus Gonzalez.jpg',
        descripcion: 'En vivo junto a Felipe Peláez.',
    },
];

const GaleriaVideos: React.FC = () => {
    const [activo, setActivo] = useState(0);
    const [reproduciendo, setReproduciendo] = useState(false);
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);

    const seleccionar = (idx: number) => {
        setActivo(idx);
        setReproduciendo(false);
    };

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchStartX(e.touches[0].clientX);
        setTouchEndX(e.touches[0].clientX);
    };
    const onTouchMove = (e: React.TouchEvent) => setTouchEndX(e.touches[0].clientX);
    const onTouchEnd = () => {
        const delta = touchStartX - touchEndX;
        if (Math.abs(delta) > 40) {
            seleccionar(
                delta > 0
                    ? (activo + 1) % videos.length
                    : (activo - 1 + videos.length) % videos.length,
            );
        }
        setTouchStartX(0);
        setTouchEndX(0);
    };

    const video = videos[activo];

    return (
        <section className="grano relative border-y border-[color:var(--linea)] bg-tinta-2 px-5 py-20 md:px-10 md:py-28">
            <div className="mx-auto max-w-[1240px]">
                <Revelar className="max-w-2xl">
                    <p className="kicker">Míralo en vivo</p>
                    <h2 className="mt-4 font-display text-4xl text-hueso md:text-[3rem]">
                        Shows junto a grandes del vallenato
                    </h2>
                    <p className="mt-5 text-lg text-hueso-tenue">
                        Esto no es un portafolio prestado. Son presentaciones reales. Elige un artista y mira.
                    </p>
                </Revelar>

                <div className="mt-12 grid gap-7 lg:grid-cols-[1.4fr_0.6fr] lg:gap-10">
                    <Revelar variante="zoom" className="order-1">
                        <div className="overflow-hidden rounded-[var(--radius-grande)] border border-[color:var(--linea-fuerte)]">
                            <div className="relative aspect-video w-full bg-tinta">
                                {reproduciendo ? (
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.videoId}?rel=0&showinfo=0&autoplay=1&controls=1`}
                                        title={`Video con ${video.artista}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0 h-full w-full"
                                    />
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => setReproduciendo(true)}
                                        className="group absolute inset-0 h-full w-full"
                                        aria-label={`Reproducir video con ${video.artista}`}
                                    >
                                        <Image
                                            src={video.thumb}
                                            alt={`Show con ${video.artista}`}
                                            fill
                                            sizes="(min-width: 1024px) 66vw, 100vw"
                                            className="h-full w-full object-cover"
                                        />
                                        <span className="absolute inset-0 flex items-center justify-center bg-tinta/45 transition-colors group-hover:bg-tinta/30">
                                            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-oro text-tinta transition-transform group-hover:scale-110">
                                                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </span>
                                        </span>
                                    </button>
                                )}
                            </div>
                            <div className="border-t border-[color:var(--linea)] bg-tinta px-6 py-4">
                                <p className="font-display text-lg text-hueso">
                                    {video.artista}
                                </p>
                                <p className="mt-0.5 text-sm text-hueso-tenue">{video.descripcion}</p>
                            </div>
                        </div>
                    </Revelar>

                    <div
                        className="order-2 flex gap-4 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        {videos.map((v, idx) => (
                            <button
                                key={v.artista}
                                type="button"
                                onClick={() => seleccionar(idx)}
                                aria-label={`Ver video con ${v.artista}`}
                                aria-pressed={activo === idx}
                                className={`group relative flex w-44 shrink-0 flex-col overflow-hidden rounded-[var(--radius-tarjeta)] border text-left transition-colors duration-400 lg:w-full ${
                                    activo === idx
                                        ? 'border-[color:var(--oro)]'
                                        : 'border-[color:var(--linea)] hover:border-[color:var(--linea-fuerte)]'
                                }`}
                            >
                                <Image
                                    src={v.thumb}
                                    alt={`Miniatura de ${v.artista}`}
                                    width={300}
                                    height={170}
                                    sizes="(min-width: 1024px) 18rem, 11rem"
                                    className="aspect-video w-full object-cover"
                                />
                                <span
                                    className={`px-4 py-3 font-display text-sm transition-colors ${
                                        activo === idx ? 'text-oro' : 'text-hueso-tenue'
                                    }`}
                                >
                                    {v.artista}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GaleriaVideos;
